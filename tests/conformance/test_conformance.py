"""Shared conformance fixtures across the LinkML connectors.

`valid/` holds canonical JSON-LD documents every connector must import.
`roundtrip/` reuses them: import → re-export must be semantically identical
(same nodes, same canonical types, same normalized predicates).
`invalid/` is a placeholder for the validation phase (SHACL-backed checks):
no invalid-doc assertions yet.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "cross_connector"))

import pytest

from normalize import canonical_type, extract_objects, normalize_value
from run_matrix import OURS
from runner import import_jsonld

VALID_DIR = Path(__file__).parent / "valid"

CONNECTORS = [c for c in OURS if not c.startswith("official-")]
FIXTURES = sorted(VALID_DIR.glob("*.jsonld"))


def load_fixture(path: Path) -> dict:
    return json.loads(path.read_text())


@pytest.mark.parametrize("fixture", FIXTURES, ids=lambda p: p.stem)
@pytest.mark.parametrize("connector", CONNECTORS)
def test_valid_imports(connector: str, fixture: Path) -> None:
    """Every fixture node must survive import + re-export."""
    expected = extract_objects(load_fixture(fixture))
    assert expected, f"{fixture.name} has no nodes"
    actual = extract_objects(import_jsonld(connector, load_fixture(fixture)))
    missing = set(expected) - set(actual)
    assert not missing, f"{connector} dropped nodes: {sorted(missing)}"


@pytest.mark.parametrize("fixture", FIXTURES, ids=lambda p: p.stem)
@pytest.mark.parametrize("connector", CONNECTORS)
def test_roundtrip_semantic_equality(connector: str, fixture: Path) -> None:
    """Re-export must match the fixture node by node (shape-sensitive)."""
    expected = extract_objects(load_fixture(fixture))
    actual = extract_objects(import_jsonld(connector, load_fixture(fixture)))
    for semantic_id, info in expected.items():
        assert semantic_id in actual, f"{connector} lost {semantic_id}"
        other = actual[semantic_id]
        assert canonical_type(other["semanticType"]) == canonical_type(
            info["semanticType"]
        ), f"{connector} changed @type of {semantic_id}"
        for pred, value in info["predicates"].items():
            assert pred in other["predicates"], (
                f"{connector} dropped {pred} on {semantic_id}"
            )
            assert normalize_value(other["predicates"][pred]) == normalize_value(
                value
            ), f"{connector} changed {pred} on {semantic_id}"
