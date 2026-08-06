#!/usr/bin/env python3
"""Round-trip matrix across connectors.

For every ordered pair (source A -> target B) and every scenario:
  * A exports the scenario -> doc_A
  * B imports doc_A and re-exports -> doc_AB
  * B also runs its own self round-trip (B.export -> B.import -> B.export)
    -> baseline_B, which is the set of predicates/classes B actually supports.

Classification (robust, no fragile introspection):
  * predicate present in doc_A but absent in doc_AB:
      - if baseline_B also drops it  -> "expected-drop" (informational)
      - else                         -> "mismatch" (FAILURE: B supports it but
                                         drops it on cross-import)
  * predicate present in both: compare normalized values (shape-insensitive)
  * object missing from doc_AB:
      - if baseline_B lacks the @type -> "expected-drop" (B has no such class)
      - else                          -> "node-loss" (reported, not failure)

Exit code 1 if any mismatch or import/export failure is found.

--verify-drop-in: run only the drop-in pairs (ours as source, official as
target, plus official -> ours and ours -> ours baselines) and fail on any
unexpected mismatch. Expected drops are reported but allowed.
"""

from __future__ import annotations

import argparse
import json
import sys
from dataclasses import dataclass, field
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from normalize import canonical_type, extract_objects, normalize_value  # noqa: E402
from runner import available_connectors, export_jsonld, import_jsonld  # noqa: E402

SCENARIOS_DIR = Path(__file__).parent / "scenarios"

OURS = ("our-typescript", "our-ruby")
OFFICIAL = ("official-typescript", "official-ruby")


@dataclass
class Difference:
    kind: str  # expected-drop | node-loss | mismatch
    semantic_id: str
    predicate: str
    expected: object = None
    actual: object = None
    detail: str = ""


@dataclass
class RoundTripReport:
    source: str
    target: str
    scenario: str
    differences: list[Difference] = field(default_factory=list)

    @property
    def failures(self) -> list[Difference]:
        return [d for d in self.differences if d.kind == "mismatch"]

    def is_clean(self) -> bool:
        return not self.failures


def _safe_import(name: str, doc: dict, report: RoundTripReport) -> dict | None:
    try:
        return import_jsonld(name, doc)
    except RuntimeError as exc:
        report.differences.append(Difference(
            "mismatch", "(scenario)", "",
            detail=f"{name} failed to import: {exc}",
        ))
        return None


def compare(source: str, target: str, scenario_path: Path) -> RoundTripReport:
    report = RoundTripReport(source, target, scenario_path.stem)

    try:
        doc_a = export_jsonld(source, scenario_path)
    except RuntimeError as exc:
        report.differences.append(Difference(
            "mismatch", "(scenario)", "",
            detail=f"source {source} failed to export: {exc}",
        ))
        return report

    # baseline_B: the target's own round-trip of the same scenario.
    baseline_b = _safe_import(target, export_jsonld(target, scenario_path), report)
    if baseline_b is None:
        return report

    doc_ab = _safe_import(target, doc_a, report)
    if doc_ab is None:
        return report

    objects_a = extract_objects(doc_a)
    objects_ab = extract_objects(doc_ab)
    baseline = extract_objects(baseline_b)

    for semantic_id, info in objects_a.items():
        type_a = info["semanticType"]
        preds_a = info["predicates"]

        in_baseline = semantic_id in baseline

        if semantic_id not in objects_ab:
            if in_baseline:
                report.differences.append(Difference(
                    "node-loss", semantic_id, "",
                    detail=f"@type {type_a} dropped by {target} though supported",
                ))
            else:
                report.differences.append(Difference(
                    "expected-drop", semantic_id, "",
                    detail=f"@type {type_a} not supported by {target}",
                ))
            continue

        info_b = objects_ab[semantic_id]
        type_b = info_b["semanticType"]
        preds_b = info_b["predicates"]

        if type_b and type_a and canonical_type(type_b) != canonical_type(type_a):
            report.differences.append(Difference(
                "mismatch", semantic_id, "@type",
                expected=type_a, actual=type_b,
            ))

        baseline_preds = baseline.get(semantic_id, {}).get("predicates", {}) if in_baseline else {}

        for pred, value_a in preds_a.items():
            if pred not in preds_b:
                if pred in baseline_preds:
                    report.differences.append(Difference(
                        "mismatch", semantic_id, pred,
                        expected=value_a, actual=None,
                        detail="supported by target but dropped on cross-import",
                    ))
                else:
                    report.differences.append(Difference(
                        "expected-drop", semantic_id, pred,
                        expected=value_a, actual=None,
                        detail="not supported by target",
                    ))
                continue
            if normalize_value(value_a) != normalize_value(preds_b[pred]):
                report.differences.append(Difference(
                    "mismatch", semantic_id, pred,
                    expected=value_a, actual=preds_b[pred],
                ))
    return report


def scenarios() -> list[Path]:
    return sorted(SCENARIOS_DIR.glob("*.json"))


def drop_in_pairs(names: list[str]) -> list[tuple[str, str]]:
    """Pairs exercised by the drop-in verification.

    Only our connectors drop in *for* the official ones, so we verify:
      * ours -> ours     (baseline, our connectors interop with each other)
      * ours -> official (docs we produce must be consumable by DFC tools)
      * official -> ours (docs official tools produce must import into ours)
    Official -> official is out of scope (not a replacement scenario).
    """
    ours = [n for n in names if n in OURS]
    official = [n for n in names if n in OFFICIAL]
    pairs = [(a, b) for a in ours for b in ours]
    pairs += [(a, b) for a in ours for b in official]
    pairs += [(a, b) for a in official for b in ours]
    return pairs


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("connectors", nargs="*", default=None,
                        help="restrict to these connector names")
    parser.add_argument("--verify-drop-in", action="store_true",
                        help="run only the drop-in pairs and fail on mismatches")
    args = parser.parse_args()

    names = available_connectors()
    only = args.connectors or None
    if only:
        names = [n for n in names if n in only]

    if args.verify_drop_in:
        pairs = drop_in_pairs(names)
        if not pairs:
            print(
                "error: --verify-drop-in selected zero pairs "
                f"(connectors given: {only or names}) — need at least one our-connector "
                "and one official-connector to exercise the drop-in matrix.",
                file=sys.stderr,
            )
            sys.exit(2)
    else:
        pairs = [(a, b) for a in names for b in names]

    clean = True
    for scenario in scenarios():
        for source, target in pairs:
            report = compare(source, target, scenario)
            if not report.is_clean():
                clean = False
            status = "OK" if report.is_clean() else "FAIL"
            print(f"[{status}] {source:20} -> {target:20} {scenario.stem}")
            for d in report.differences:
                extra = ""
                if d.expected is not None or d.actual is not None:
                    extra = f"  expected={json.dumps(d.expected)} actual={json.dumps(d.actual)}"
                if d.detail:
                    extra += f"  ({d.detail})"
                print(f"    {d.kind:12} {d.semantic_id} {d.predicate}{extra}")

    sys.exit(0 if clean else 1)


if __name__ == "__main__":
    main()
