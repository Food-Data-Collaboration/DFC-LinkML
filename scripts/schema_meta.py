"""Shared schema-level version metadata.

The ontology and taxonomy versions live in the schema's ``annotations`` block:

    annotations:
      ontology_version: 2.0.0
      taxonomy_version: 2.0.0

LinkML's ``SchemaDefinition`` has no fields for them, so a top-level key makes
the schema unloadable by LinkML tooling (issue #49). ``reachable_from`` is
likewise limited to LinkML's ``ReachabilityQuery`` fields, which is why
``source_class`` sits next to these versions as an annotation.

Both readers still accept the legacy top-level keys, so an older generated
schema keeps working. New schemas must use annotations — this module is the
only place that decides the order, the same discipline ``cardinality.py``
applies to shape.
"""

from __future__ import annotations


def annotation(container: dict, key: str):
    """Read one annotation from a schema or an enum definition.

    Tolerates YAML dicts (``{'source_class': 'Concept'}``) and LinkML
    ``Annotation`` objects, which expose ``.value``.
    """
    annotations = (container or {}).get("annotations") or {}
    value = annotations.get(key)
    if value is None:
        return None
    if isinstance(value, dict):
        return value.get("value")
    if hasattr(value, "value"):
        return value.value
    return value


def ontology_version(schema: dict, default: str = "0.1.0") -> str:
    """Ontology version: annotations, then the legacy top-level key, then `version`."""
    return (
        annotation(schema, "ontology_version")
        or schema.get("ontology_version")
        or schema.get("version")
        or default
    )


def taxonomy_version(schema: dict, default: str = "0.1.0") -> str:
    """Taxonomy version; versioned independently of the ontology."""
    return (
        annotation(schema, "taxonomy_version")
        or schema.get("taxonomy_version")
        or schema.get("version")
        or default
    )
