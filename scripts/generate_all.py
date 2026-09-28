#!/usr/bin/env python3
"""Single entrypoint for SDK generation (see docs/generation.md).

Reads versions/paths from config/dfc-release.yaml and runs each step:

  schema      OWL/RDF ontology -> LinkML schema (needs network)
  typescript  LinkML schema -> typescript-connector/ (offline)
  ruby        LinkML schema -> ruby-gem/ (offline, fixed dirs)
  php         LinkML schema -> php-connector/ (offline)

Usage:
  python3 scripts/generate_all.py [--steps schema,typescript,ruby,php]
  python3 scripts/generate_all.py --check   # regenerate in place, fail if
                                            # tracked generated files change
  make generate / make check-generated (thin aliases)

--check requires a clean tree first so any diff unambiguously means stale
generated output.
"""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
DEFAULT_MANIFEST = REPO / "config" / "dfc-release.yaml"

# Tracked generated paths examined by --check. Preserved/static data
# (vocabularies, contexts, specs, tests) is excluded via :(exclude).
CHECK_PATHS = [
    "src/dfc_business_linkml_v2_0.yaml",
    "typescript-connector/src",
    "ruby-gem",
    ":(exclude)ruby-gem/vocabularies",
    ":(exclude)ruby-gem/contexts",
    ":(exclude)ruby-gem/spec",
    "php-connector",
    ":(exclude)php-connector/vocabularies",
    ":(exclude)php-connector/contexts",
    ":(exclude)php-connector/tests",
]

STEPS = ("schema", "typescript", "ruby", "php")


def load_manifest(path: Path) -> dict:
    import yaml
    with open(path) as f:
        return yaml.safe_load(f)


def run(cmd: list[str], cwd: Path | None = None) -> None:
    print(f"+ {' '.join(cmd)}", flush=True)
    r = subprocess.run(cmd, cwd=cwd or REPO, check=False)
    if r.returncode != 0:
        raise SystemExit(f"step failed (rc={r.returncode}): {' '.join(cmd)}")


def step_schema(manifest: dict) -> None:
    run([
        sys.executable, "scripts/owl2linkml.py",
        "--config", manifest["schema"]["config"],
        "--ontology-version", manifest["dfc_ontology_version"],
        "--taxonomy-version", manifest["dfc_taxonomy_version"],
        "--output", manifest["schema"]["file"],
    ])


def step_typescript(manifest: dict) -> None:
    run([
        sys.executable, "scripts/generate_typescript_connector.py",
        "--schema", manifest["schema"]["file"],
        "--output", manifest["outputs"]["typescript"],
    ])


def step_ruby(manifest: dict) -> None:
    # Fixed schema lookup + fixed output dir (see generate_ruby_gem.main);
    # must run from the repo root.
    run([sys.executable, "scripts/generate_ruby_gem.py"])


def step_php(manifest: dict) -> None:
    run([
        sys.executable, "scripts/generate_php_connector.py",
        "--schema", manifest["schema"]["file"],
        "--output", manifest["outputs"]["php"],
    ])


def tree_clean() -> bool:
    r = subprocess.run(["git", "status", "--porcelain"],
                       cwd=REPO, capture_output=True, text=True)
    return r.returncode == 0 and not r.stdout.strip()


def generated_diff() -> str:
    r = subprocess.run(["git", "diff", "--stat", "--", *CHECK_PATHS],
                       cwd=REPO, capture_output=True, text=True)
    return r.stdout.strip()


def main(argv: list[str] | None = None) -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--manifest", default=str(DEFAULT_MANIFEST))
    parser.add_argument("--steps", default=",".join(STEPS),
                        help=f"subset of {','.join(STEPS)}")
    parser.add_argument("--check", action="store_true",
                        help="regenerate in place; exit nonzero if tracked "
                             "generated files change (requires clean tree)")
    args = parser.parse_args(argv)

    manifest = load_manifest(Path(args.manifest))
    steps = [s.strip() for s in args.steps.split(",") if s.strip()]
    unknown = [s for s in steps if s not in STEPS]
    if unknown:
        raise SystemExit(f"unknown steps: {unknown} (choose from {STEPS})")

    if args.check and not tree_clean():
        raise SystemExit("--check requires a clean tree "
                         "(commit or stash first)")

    runners = {"schema": step_schema, "typescript": step_typescript,
               "ruby": step_ruby, "php": step_php}
    for step in steps:
        print(f"== {step} ==", flush=True)
        runners[step](manifest)

    if args.check:
        diff = generated_diff()
        if diff:
            print("STALE generated files:\n" + diff)
            raise SystemExit(1)
        print("generated output matches HEAD")
    else:
        diff = generated_diff()
        print("done." + (f"\nChanged generated files:\n{diff}" if diff
                         else " No changes."))


if __name__ == "__main__":
    main()
