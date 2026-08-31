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

    Object references are resolved to their semanticId (``{"@id": "x"}`` is
    collapsed to ``"x"``). Repeated blank-node prefixes are collapsed to the
    bare URI (``_:_:http://x`` == ``_:http://x`` == ``http://x``). Lists are
    kept as lists and sorted; container shape (scalar vs 1-element array) is
    not unified, so a scalar and a single-element list are treated as
    different values.
    """
    if isinstance(value, list):
        return sorted((normalize_value(v) for v in value), key=_stable_key)
    if isinstance(value, dict):
        if "@id" in value:
            return normalize_value(value["@id"])
        return {k: normalize_value(v) for k, v in sorted(value.items(), key=_stable_key)}
    if isinstance(value, str):
        collapsed = _collapse_blank_prefix(value)
        if collapsed is not None:
            return collapsed
    if value is None:
        return None
    return value


def _collapse_blank_prefix(value: str) -> str | None:
    """Collapse repeated ``_:`` prefixes on a reference string.

    Official connectors wrap URIs in blank nodes that sometimes double up the
    ``_:`` prefix (``_:_:http://x``). Strip every leading ``_:`` and return
    the bare ``http://…`` URI, but only when the remainder still looks like a
    reference (starts with ``http``); a plain local name like ``_:x`` or
    ``_:_:x`` is left untouched so ``_:price1`` and ``_:_:price1`` remain
    distinct (the double prefix is not collapsed for non-http blank nodes).
    """
    stripped = value
    while stripped.startswith("_:"):
        stripped = stripped[2:]
    if stripped != value and stripped.startswith("http"):
        return stripped
    return None


def extract_objects(doc: Any) -> dict[str, dict[str, Any]]:
    """Flatten a JSON-LD document into {semanticId: {type, predicates}}.

    Predicate values are normalized (refs resolved to semanticIds, blank-node
    prefixes collapsed, lists sorted). No literal-vs-@id sentinel is kept:
    `normalize_value` collapses ``{"@id": "x"}`` to ``"x"``, so a literal
    string and an @id reference to the same text compare equal.
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
        raw_id = entry.get("@id")
        if not isinstance(raw_id, str):
            continue
        semantic_id = _collapse_blank_prefix(raw_id) or raw_id
        raw_type = entry.get("@type")
        if isinstance(raw_type, list):
            semantic_type = next((t for t in raw_type if isinstance(t, str) and not t.startswith("@")), None)
        else:
            semantic_type = raw_type
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


# DFC v2.0 renamed Enterprise to Organization. Official connectors (v1.16) still
# emit `dfc-b:Enterprise`; our connectors import it as the canonical
# `dfc-b:Organization`. Treat the two type strings as equivalent when comparing
# round-trips so the normalization isn't reported as a mismatch.
TYPE_ALIASES = {
    "dfc-b:Enterprise": "dfc-b:Organization",
}


def canonical_type(semantic_type: str | None) -> str | None:
    if semantic_type is None:
        return None
    return TYPE_ALIASES.get(semantic_type, semantic_type)


def collect_referenced_ids(value: Any) -> set[str]:
    """Return referenced semanticIds contained in a normalized value."""
    ids: set[str] = set()
    if isinstance(value, list):
        for v in value:
            ids |= collect_referenced_ids(v)
    elif isinstance(value, str) and (value.startswith("http") or value.startswith("_:")):
        ids.add(value)
    return ids
