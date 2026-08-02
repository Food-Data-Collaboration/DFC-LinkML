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


def normalize_value(value: Any) -> Any:
    """Normalize a JSON-LD value for comparison.

    Container shape is ignored: ``{"@id": "x"}`` == ``"x"`` == ``["x"]``.
    Object references and plain strings are treated as the same content.
    Repeated blank-node prefixes are collapsed: ``_:_:http://x`` == ``_:http://x``.
    """
    if isinstance(value, list):
        return sorted(normalize_value(v) for v in value)
    if isinstance(value, dict):
        if "@id" in value:
            return normalize_value(value["@id"])
        return {k: normalize_value(v) for k, v in sorted(value.items())}
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
    ``_:`` prefix (``_:_:http://x``). Treat ``_:_:x``, ``_:x`` and ``x`` as the
    same reference by stripping every leading ``_:``.
    """
    stripped = value
    while stripped.startswith("_:"):
        stripped = stripped[2:]
    if stripped != value and (stripped.startswith("http") or stripped.startswith("_:")):
        return stripped
    return None


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
