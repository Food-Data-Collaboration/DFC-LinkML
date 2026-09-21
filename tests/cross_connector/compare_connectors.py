#!/usr/bin/env python3
"""Compare connector capabilities side by side.

Usage:
    python3 tests/cross_connector/compare_connectors.py [A] [B]

Prints classes only-in-A / only-in-B / both, and per-class predicate
differences (predicates A supports that B lacks, and vice versa).
"""

from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from runner import available_connectors, capabilities  # noqa: E402


def class_predicates(caps: dict) -> dict[str, set[str]]:
    return {t: set(preds) for t, preds in caps["classes"].items()}


def report(a: str, b: str) -> None:
    ca, cb = class_predicates(capabilities(a)), class_predicates(capabilities(b))
    classes_a, classes_b = set(ca), set(cb)

    only_a = classes_a - classes_b
    only_b = classes_b - classes_a
    both = classes_a & classes_b

    print(f"== {a} vs {b} ==")
    print(f"classes A={len(classes_a)} B={len(classes_b)} shared={len(both)}")
    if only_a:
        print(f"\nclasses only in {a} ({len(only_a)}):")
        for t in sorted(only_a):
            print(f"  {t}")
    if only_b:
        print(f"\nclasses only in {b} ({len(only_b)}):")
        for t in sorted(only_b):
            print(f"  {t}")

    pred_diff_a: dict[str, list[str]] = {}
    pred_diff_b: dict[str, list[str]] = {}
    for t in sorted(both):
        pa, pb = ca[t], cb[t]
        if pa - pb:
            pred_diff_a[t] = sorted(pa - pb)
        if pb - pa:
            pred_diff_b[t] = sorted(pb - pa)

    if pred_diff_a:
        print(f"\npredicates A supports but B lacks ({sum(len(v) for v in pred_diff_a.values())}):")
        for t, preds in pred_diff_a.items():
            print(f"  {t}: {', '.join(preds)}")
    if pred_diff_b:
        print(f"\npredicates B supports but A lacks ({sum(len(v) for v in pred_diff_b.values())}):")
        for t, preds in pred_diff_b.items():
            print(f"  {t}: {', '.join(preds)}")


def main() -> None:
    names = available_connectors()
    if len(sys.argv) >= 3:
        pairs = [(sys.argv[1], sys.argv[2])]
    else:
        pairs = [(names[i], names[j]) for i in range(len(names)) for j in range(i + 1, len(names))]
    for a, b in pairs:
        if a not in names or b not in names:
            print(f"unknown connector (have {names})")
            sys.exit(1)
        report(a, b)
        print()


if __name__ == "__main__":
    main()
