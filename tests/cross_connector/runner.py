"""Run the per-connector adapter scripts and load their capabilities."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

ADAPTERS_DIR = Path(__file__).parent / "adapters"

CONNECTORS: dict[str, str] = {
    "our-typescript": "node",
    "our-ruby": "ruby",
    "official-typescript": "node",
    "official-ruby": "ruby",
}

ADAPTER_SCRIPT: dict[str, str] = {
    "our-typescript": "our-typescript.mjs",
    "our-ruby": "our-ruby.rb",
    "official-typescript": "official-typescript.mjs",
    "official-ruby": "official-ruby.rb",
}


def adapter_cmd(name: str, *args: str) -> list[str]:
    return [CONNECTORS[name], str(ADAPTERS_DIR / ADAPTER_SCRIPT[name]), *args]


def run_adapter(name: str, *args: str, stdin: str | None = None) -> str:
    result = subprocess.run(
        adapter_cmd(name, *args),
        input=stdin,
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        raise RuntimeError(
            f"{name} {args} failed (rc={result.returncode}):\n"
            f"stderr: {result.stderr}\nstdout: {result.stdout}"
        )
    return result.stdout


def capabilities(name: str) -> dict:
    return json.loads(run_adapter(name, "capabilities"))


def export_jsonld(name: str, scenario_path: str | Path) -> dict:
    raw = run_adapter(name, "export", str(scenario_path))
    return json.loads(raw)


def import_jsonld(name: str, doc: dict | str) -> dict:
    raw = run_adapter(name, "import", stdin=doc if isinstance(doc, str) else json.dumps(doc))
    return json.loads(raw)


def available_connectors() -> list[str]:
    """Connectors whose runtime is present on this machine."""
    result: list[str] = []
    for name, script in ADAPTER_SCRIPT.items():
        path = ADAPTERS_DIR / script
        if not path.exists():
            continue
        try:
            run_adapter(name, "capabilities")
            result.append(name)
        except RuntimeError:
            continue
    return result


def main() -> None:
    for name in available_connectors():
        print(f"{name}: OK")


if __name__ == "__main__":
    main()
