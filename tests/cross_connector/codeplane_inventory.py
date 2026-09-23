#!/usr/bin/env python3
"""Code-plane API inventory: original v2 vs LinkML, TS + Ruby.

Regenerates live API dumps (Node/Ruby subprocesses), verifies
config/dfc-original-api.yaml against them, and renders
docs/api-gaps-typescript.md + docs/api-gaps-ruby.md.

Fails loudly when the yaml references official methods that no longer exist
(drift); newly appeared upstream methods show up as unmapped document-only
rows. Dumps are ephemeral (temp dir); docs are committed.

Usage: python3 tests/cross_connector/codeplane_inventory.py [--check]
  --check: verify only, do not rewrite docs.
"""

from __future__ import annotations

import json
import re
import subprocess
import sys
import tempfile
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent.parent
ADAPTERS = REPO / "tests" / "cross_connector" / "adapters"
TS_PKG = REPO / "tests" / "node_modules" / "@datafoodconsortium" / "connector"
OUR_TS_MODELS = REPO / "typescript-connector" / "src" / "models"
OUR_TS_CONNECTOR = REPO / "typescript-connector" / "src" / "core" / "Connector.ts"
OUR_RUBY_MODELS = REPO / "ruby-gem" / "lib" / "models"
YAML_PATH = REPO / "config" / "dfc-original-api.yaml"
DOCS = REPO / "docs"

# Low-level semantizer infra, not per-slot API — excluded from gap tables.
TS_INFRA = re.compile(
    r"^(addRdfQuad|createRdfQuad|deleteRdfProperty|clone|equals|getContext|"
    r"getSemantizer|getSize|hasSameProperties|hasSemanticProperty|init|"
    r"isSemantic|getSemantic|setSemantic|removeSemanticProperty|"
    r"addSemanticProperty|toRdfDatasetExt)"
)
RUBY_INFRA = {
    "hasSemanticProperty?", "isBlankNode?", "registerSemanticProperty",
    "semanticId", "semanticId=", "semanticProperties", "semanticProperty",
    "semanticPropertyValue", "semanticType", "semanticType=",
    "serialize",
}

NODE_DUMP = """\
import { writeFileSync } from "node:fs";
const mod = await import(%(pkg)s);
const c = new mod.Connector();
function allMethods(o) {
  const s = new Set(); let p = Object.getPrototypeOf(o);
  while (p && p !== Object.prototype) {
    for (const m of Object.getOwnPropertyNames(p))
      if (m !== "constructor" && !m.startsWith("_")) s.add(m);
    p = Object.getPrototypeOf(p);
  }
  return [...s].sort();
}
const out = {};
for (const f of Object.getOwnPropertyNames(Object.getPrototypeOf(c)).filter(m => m.startsWith("create"))) {
  try { const o = c[f]({ semanticId: "_:probe" }); out[o.getSemanticType?.() || f] = { factory: f, methods: allMethods(o) }; }
  catch (e) { out[f] = { factory: f, error: String(e.message || e).slice(0, 60) }; }
}
writeFileSync(%(dest)s, JSON.stringify(out));
"""


def dump_official_ts(dest: Path) -> dict:
    pkg_main = json.loads((TS_PKG / "package.json").read_text())["main"]
    mod_path = str(TS_PKG / pkg_main).replace("\\", "\\\\").replace("'", "\\'")
    code = NODE_DUMP % {"pkg": f"'{mod_path}'", "dest": f"'{dest}'"}
    r = subprocess.run(["node", "--input-type=module", "-e", code],
                       capture_output=True, text=True, timeout=120)
    if r.returncode != 0:
        raise RuntimeError(f"official-ts dump failed:\n{r.stderr[-2000:]}")
    return json.loads(dest.read_text())


RUBY_DUMP = """\
gem 'datafoodconsortium-connector', '= 2.0.0.pre.beta8'
require 'datafoodconsortium/connector'
require 'json'
base = Object.new.public_methods
out = {}
DataFoodConsortium::Connector.constants(false).each do |kn|
  k = DataFoodConsortium::Connector.const_get(kn)
  next unless k.is_a?(Class)
  ms = ((k.public_instance_methods - base).map(&:to_s).sort)
  type = (k.const_defined?(:SEMANTIC_TYPE, false) ? k.const_get(:SEMANTIC_TYPE) : kn.to_s)
  out[type] = { 'class' => kn.to_s, 'methods' => ms }
end
File.write('%(dest)s', JSON.pretty_generate(out))
"""


def dump_official_ruby(dest: Path) -> dict:
    code = RUBY_DUMP % {"dest": str(dest)}
    r = subprocess.run(["ruby", "-e", code], capture_output=True, text=True,
                       timeout=120)
    if r.returncode != 0:
        raise RuntimeError(f"official-ruby dump failed:\n{r.stderr[-2000:]}")
    return json.loads(dest.read_text())


def parse_ours_ts() -> tuple[dict[str, str], dict[str, set[str]]]:
    """Return (predicate->field map, class->own-fields)."""
    pred_map: dict[str, str] = {}
    for m in re.finditer(r'"([^"]+)": "([^"]+)",?', OUR_TS_CONNECTOR.read_text()):
        pred_map[m.group(1)] = m.group(2)
    fields: dict[str, set[str]] = {}
    for f in OUR_TS_MODELS.glob("*.ts"):
        src = f.read_text()
        type_m = re.search(r"SEMANTIC_TYPE[^'\"]*['\"]([^'\"]+)['\"]", src)
        if not type_m:
            continue
        own = set(re.findall(r"^  (\w+)\?:", src, re.M))
        fields[type_m.group(1)] = own
    return pred_map, fields


def parse_ours_ruby() -> dict[str, dict[str, str]]:
    """Return class->{predicate: prop} incl. inherited slots, via generator."""
    sys.path.insert(0, str(REPO / "scripts"))
    import generate_ruby_gem as gen
    schema = gen.parse_schema(
        str(REPO / "src" / "dfc_business_linkml_v2_0.yaml"))
    gen._init_has_prefix_keep(schema)
    out: dict[str, dict[str, str]] = {}
    for class_name in schema["classes"]:
        mapping: dict[str, str] = {}
        for slot_name, slot_data, _owner in gen.get_all_slots_for_class(
                class_name, schema):
            mapping[gen.predicate_for_slot(slot_name, slot_data)] = \
                gen.ruby_property_name(slot_name)
        for t in (f"dfc-b:{class_name}",):
            out[t] = mapping
    return out


def parse_adapter_maps() -> dict[str, dict[str, set[str]]]:
    """Parse canonical->{types} from both official adapters' PARAM_MAPs."""
    by_canonical: dict[str, dict[str, set[str]]] = {}

    rb = (ADAPTERS / "official-ruby.rb").read_text()
    for block in re.finditer(
            r"'(dfc-b:[^']+)'\s*=>\s*\{(.*?)\n  \},", rb, re.S):
        type_name, body = block.group(1), block.group(2)
        for m in re.finditer(r"'([^']+)'\s*=>\s*:(\w+=?)", body):
            by_canonical.setdefault(m.group(1), {}).setdefault(
                "ruby_types", set()).add(type_name)

    ts = (ADAPTERS / "official-typescript.mjs").read_text()
    for block in re.finditer(
            r'"(dfc-b:[^"]+)":\s*\{(.*?)\n  \},', ts, re.S):
        type_name, body = block.group(1), block.group(2)
        for m in re.finditer(r"(\w+):\s*\"(\w+)\"", body):
            by_canonical.setdefault(m.group(1), {}).setdefault(
                "ts_types", set()).add(type_name)
    return by_canonical


def load_yaml() -> tuple[list[dict], dict[str, str]]:
    import yaml
    data = yaml.safe_load(YAML_PATH.read_text())
    return data["slots"], data.get("type_aliases", {})


def main() -> None:
    check_only = "--check" in sys.argv
    errors: list[str] = []
    with tempfile.TemporaryDirectory() as tmp:
        tmpdir = Path(tmp)
        try:
            official_ts = dump_official_ts(tmpdir / "official-ts.json")
        except RuntimeError as exc:
            print(str(exc), file=sys.stderr)
            sys.exit(2)
        try:
            official_rb = dump_official_ruby(tmpdir / "official-ruby.json")
        except RuntimeError as exc:
            print(str(exc), file=sys.stderr)
            sys.exit(2)

        ours_pred_map, ours_ts_fields = parse_ours_ts()
        ours_rb = parse_ours_ruby()
        adapter_maps = parse_adapter_maps()
        slots, type_aliases = load_yaml()

        # --- class coverage: original types must exist in LinkML ---
        for label, official in (("ts", official_ts), ("ruby", official_rb)):
            ours_types = set(ours_ts_fields) if label == "ts" else set(ours_rb)
            for t in official:
                if t.startswith("dfc-b:") and t not in ours_types \
                        and t not in type_aliases \
                        and t != "dfc-b:Enterprise":
                    errors.append(
                        f"{label}: official {t} has no ours class")

        # --- yaml verification + row building ---
        ts_rows: list[tuple] = []  # (canonical, predicate, classes, official, ours, verdict)
        rb_rows: list[tuple] = []
        for entry in slots:
            canonical = entry["canonical"]
            predicate = entry["predicate"]
            for lang, dump, key in (
                    ("ruby", official_rb, "ruby"), ("ts", official_ts, "ts")):
                spec = entry.get(key)
                if not spec:
                    continue
                # original classes exercising this canonical (from adapters)
                # Curated entry classes win over adapter-derived types: the
                # adapters map aspirationally (guarded at runtime), the yaml
                # records what upstream actually implements.
                if entry.get("classes"):
                    types = sorted(f"dfc-b:{c}" for c in entry["classes"])
                else:
                    types = sorted(adapter_maps.get(canonical, {}).get(
                        f"{key}_types", set()))
                for t in types:
                    for role in ("get", "set", "add", "remove"):
                        method = spec.get(role)
                        if not method:
                            continue
                        info = dump.get(t)
                        if info is None:
                            # Enterprise: absent upstream by design
                            if t == "dfc-b:Enterprise":
                                continue
                            errors.append(
                                f"{lang}: {t} missing from official dump")
                            continue
                        if method not in info["methods"]:
                            errors.append(
                                f"{lang}: yaml {canonical}.{role}={method} "
                                f"not on official {t}")
                            continue
                        if lang == "ruby":
                            ours_t = "dfc-b:Organization" \
                                if t == "dfc-b:Enterprise" else t
                            ours_prop = ours_rb.get(ours_t, {}).get(predicate)
                            if ours_prop is None:
                                errors.append(
                                    f"ruby: ours {ours_t} lacks {predicate} "
                                    f"(canonical {canonical})")
                                continue
                            verdict = "same" if ours_prop == method.rstrip("=") \
                                else "alias"
                            rb_rows.append((canonical, predicate, t, method,
                                            ours_prop, verdict))
                        else:
                            ours_field = ours_pred_map.get(predicate)
                            if ours_field is None:
                                errors.append(
                                    f"ts: ours has no field for {predicate} "
                                    f"(canonical {canonical})")
                                continue
                            ts_rows.append((canonical, predicate, t, method,
                                            ours_field, "field"))

        # --- unmapped original domain methods on covered classes ---
        covered = set()
        for v in adapter_maps.values():
            covered |= v.get("ruby_types", set()) | v.get("ts_types", set())
        ts_unmapped: dict[str, list[str]] = {}
        for t in sorted(covered):
            if t == "dfc-b:Enterprise" or t not in official_ts:
                continue
            mapped = {r[3] for r in ts_rows if r[2] == t}
            rest = [m for m in official_ts[t]["methods"]
                    if not TS_INFRA.match(m) and m not in mapped]
            if rest:
                ts_unmapped[t] = rest
        rb_unmapped: dict[str, list[str]] = {}
        for t in sorted(covered):
            if t == "dfc-b:Enterprise" or t not in official_rb:
                continue
            mapped = {r[3] for r in rb_rows if r[2] == t}
            rest = [m for m in official_rb[t]["methods"]
                    if m not in RUBY_INFRA and m not in mapped]
            if rest:
                rb_unmapped[t] = rest

        if errors:
            print("codeplane inventory ERRORS:", file=sys.stderr)
            for e in errors:
                print(f"  - {e}", file=sys.stderr)
            sys.exit(1)

        if check_only:
            print(f"OK: {len(ts_rows)} ts rows, {len(rb_rows)} ruby rows; "
                  f"unmapped ts={sum(map(len, ts_unmapped.values()))} "
                  f"ruby={sum(map(len, rb_unmapped.values()))}")
            return

        DOCS.mkdir(exist_ok=True)
        render_ts(ts_rows, ts_unmapped, official_ts, ours_ts_fields,
                  type_aliases)
        render_rb(rb_rows, rb_unmapped, official_rb, ours_rb, type_aliases)
        print(f"wrote docs/api-gaps-typescript.md ({len(ts_rows)} rows) and "
              f"docs/api-gaps-ruby.md ({len(rb_rows)} rows)")


def render_ts(rows, unmapped, official, ours_fields, type_aliases) -> None:
    lines = [
        "# Code-plane API gaps — TypeScript (original v2 vs LinkML)",
        "",
        "> Generated by `tests/cross_connector/codeplane_inventory.py` from",
        "> `@datafoodconsortium/connector@2.0.0-beta.2`. Do not hand-edit; "
        "change `config/dfc-original-api.yaml` and re-run.",
        "",
        "LinkML uses plain public fields; original uses get/set/add/remove",
        "methods, so every row is a mechanical rewrite (verdict `field`), never",
        "an alias. Domain-method parity (`supplyProduct`, …) is a documented",
        "non-goal — see the migration guide.",
        "",
        "## Mapped methods",
        "",
        "| Canonical | Predicate | Original class | Original method | LinkML field |",
        "|---|---|---|---|---|",
    ]
    for canonical, predicate, t, method, field, _ in rows:
        lines.append(
            f"| `{canonical}` | `{predicate}` | `{t}` | `{method}()` "
            f"| `{field}` |")
    lines += ["", "## Unmapped official methods (document-only)", ""]
    if not unmapped:
        lines.append("_None._")
    for t, methods in unmapped.items():
        lines.append(f"### `{t}` ({len(methods)})")
        lines.append("")
        lines.append(", ".join(f"`{m}()`" for m in methods))
        lines.append("")
    lines += [
        "## Class coverage",
        "",
        f"Original classes: {len([t for t in official if t.startswith('dfc-b:')])}; "
        f"LinkML classes: {len(ours_fields)}. "
        "LinkML is a superset; `dfc-b:Enterprise` exists only in LinkML "
        "(deprecated subclass + import alias).",
        "",
    ]
    if type_aliases:
        lines += ["Known spelling counterparts:", ""]
        lines += [f"- `{a}` (original) ↔ `{b}` (LinkML)" for a, b in
                  sorted(type_aliases.items())]
        lines.append("")
    (DOCS / "api-gaps-typescript.md").write_text("\n".join(lines))


def render_rb(rows, unmapped, official, ours_rb, type_aliases) -> None:
    lines = [
        "# Code-plane API gaps — Ruby (original v2 vs LinkML)",
        "",
        "> Generated by `tests/cross_connector/codeplane_inventory.py` from",
        "> `datafoodconsortium-connector = 2.0.0.pre.beta8` (exact pin). Do not hand-edit; "
        "change `config/dfc-original-api.yaml` and re-run.",
        "",
        "Verdicts: `same` = identical call shape already; `alias` = Phase 1",
        "`alias_method` candidate (different name, same shape).",
        "",
        "## Mapped methods",
        "",
        "| Canonical | Predicate | Original class | Original method | LinkML accessor | Verdict |",
        "|---|---|---|---|---|---|",
    ]
    for canonical, predicate, t, method, prop, verdict in rows:
        lines.append(
            f"| `{canonical}` | `{predicate}` | `{t}` | `{method}` "
            f"| `{prop}` | {verdict} |")
    lines += ["", "## Unmapped official methods (document-only)", ""]
    if not unmapped:
        lines.append("_None._")
    for t, methods in unmapped.items():
        lines.append(f"### `{t}` ({len(methods)})")
        lines.append("")
        lines.append(", ".join(f"`{m}`" for m in methods))
        lines.append("")
    lines += [
        "## Class coverage",
        "",
        f"Original classes: {len([t for t in official if t.startswith('dfc-b:')])}; "
        f"LinkML classes: {len(ours_rb)}. "
        "LinkML is a superset; `dfc-b:Enterprise` exists only in LinkML "
        "(deprecated subclass + import alias).",
        "",
    ]
    if type_aliases:
        lines += ["Known spelling counterparts:", ""]
        lines += [f"- `{a}` (original) ↔ `{b}` (LinkML)" for a, b in
                  sorted(type_aliases.items())]
        lines.append("")
    (DOCS / "api-gaps-ruby.md").write_text("\n".join(lines))


if __name__ == "__main__":
    main()
