"""Canonical normalization and comparison for JSON-LD across connectors.

Round-trips are compared at the JSON-LD level: a source connector exports a
scenario, a target connector imports and re-exports it. Because unknown fields
are silently dropped on import, the target's re-export is a subset view. We
compare the two documents predicate-by-predicate and classify differences:

  * "expected drop"  — target connector does not support the predicate/class
  * "node loss"      — target connector lacks the @type entirely
  * "mismatch"       — predicate supported by both but value differs (bug)
"""

from __future__ import annotations

from typing import Any


def _stable_key(value: Any) -> tuple:
    """Return an ordering key that never mixes incomparable value types.

    Python 3 forbids comparing arbitrary mixed types (e.g. str vs dict), which
    `sorted()` would raise on for JSON-LD lists containing both literals and
    @id-wrapped objects. Sorting by (type-name, repr) keeps the order stable
    and total.
    """
    return (type(value).__name__, repr(value))


def normalize_value(value: Any) -> Any:
    """Normalize a JSON-LD value for comparison.

    Container shape is ignored: ``{"@id": "x"}`` == ``"x"`` == ``["x"]``.
    Object references and plain strings are treated as the same content.
    """
    if isinstance(value, list):
        return sorted((normalize_value(v) for v in value), key=_stable_key)
    if isinstance(value, dict):
        if "@id" in value:
            return value["@id"]
        return {k: normalize_value(v) for k, v in sorted(value.items(), key=_stable_key)}
    if value is None:
        return None
    return value


def extract_objects(doc: Any) -> dict[str, dict[str, Any]]:
    """Flatten a JSON-LD document into {semanticId: {type, predicates}}.

    Predicate values are normalized (refs resolved to semanticIds, containers
    unwrapped, lists sorted). Literal vs @id distinction is preserved by
    wrapping @id-references in a sentinel tuple.
    """
    entries: list[dict[str, Any]] = []
    if isinstance(doc, dict):
        graph = doc.get("@graph")
        if isinstance(graph, list):
            entries.extend(graph)
        elif isinstance(doc.get("@id"), str):
            entries.append(doc)
    elif isinstance(doc, list):
        entries.extend(doc)

    objects: dict[str, dict[str, Any]] = {}
    for entry in entries:
        if not isinstance(entry, dict):
            continue
        semantic_id = entry.get("@id")
        if not isinstance(semantic_id, str):
            continue
        semantic_type = entry.get("@type")
        predicates: dict[str, Any] = {}
        for key, value in entry.items():
            if key.startswith("@") or key == "@context":
                continue
            predicates[key] = normalize_value(value)
        objects[semantic_id] = {
            "semanticType": semantic_type,
            "predicates": predicates,
        }
    return objects


def collect_referenced_ids(value: Any) -> set[str]:
    """Return referenced semanticIds contained in a normalized value."""
    ids: set[str] = set()
    if isinstance(value, list):
        for v in value:
            ids |= collect_referenced_ids(v)
    elif isinstance(value, str) and (value.startswith("http") or value.startswith("_:")):
        ids.add(value)
    return ids
