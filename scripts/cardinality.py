"""Shared cardinality resolution for the three connector generators.

The OWL->LinkML converter records what the ontology actually states:

- `slot_usage` on a class, for `OrderLine ⊑ =1 concerns` and the other 41
  class-scoped restrictions
- `maximum_cardinality: 1` on a slot, for the 34 `owl:FunctionalProperty`
  declarations
- `multivalued: true` on a slot, for the curated n side the ontology cannot
  supply (DFC states no `owl:maxCardinality` at all)

Shape is then decided by first match:

1. class-scoped `slot_usage` saying `maximum_cardinality: 1` -> scalar
2. slot-level `maximum_cardinality: 1`                      -> scalar
3. slot-level `multivalued: true`                            -> collection
4. the plural-name heuristic                                 -> collection if the
   slot name looks plural

Step 1 has to come first and has to be class-scoped. `hasAddress` is a
collection on an `Agent` and a scalar on a `PhysicalPlace`, because the
ontology restricts only the latter; a slot-level flag would be wrong for one of
them and a heuristic cannot express the difference at all.

Step 4 is a last resort, not a source of truth. It is a guess about spelling
that happens to fit the slots the ontology and the original connectors are both
silent about. It previously ran first, which is how `hasAddress` became a
scalar and nine slots that the ontology caps at one became arrays.
"""
from __future__ import annotations

# Slot-name fragments that indicate a collection. Part of the last-resort
# heuristic only; nothing here overrides a cardinality the ontology states.
COLLECTION_INDICATORS = (
    'characteristics', 'claims', 'certifications', 'catalogitems',
    'suppliedproducts', 'technicalproducts', 'customercategories',
    'catalogs', 'variants', 'images', 'localizations', 'phonenumbers',
    'socialmedias', 'websites', 'emails', 'offers', 'orderlines',
    'steps', 'inputs', 'outputs',
)


def looks_plural(slot_name: str) -> bool:
    """Last-resort guess from the slot name. Prefer a sourced answer."""
    name = slot_name.lower()
    if any(indicator in name for indicator in COLLECTION_INDICATORS):
        return True
    if name.endswith('ss') or name.endswith('us'):
        return False
    if name.endswith('s') or name.endswith('ies'):
        return True
    return False


def class_cap(class_usage: dict | None, slot_name: str) -> int | None:
    """The `maximum_cardinality` this class states for the slot, if any.

    `class_usage` is a class's `slot_usage` block, e.g.
    `{'concerns': {'minimum_cardinality': 1, 'maximum_cardinality': 1}}`.
    """
    if not class_usage:
        return None
    bounds = class_usage.get(slot_name)
    if not bounds:
        return None
    return bounds.get('maximum_cardinality')


def usage_for(schema_data: dict, class_name: str | None) -> dict | None:
    """The `slot_usage` block of `class_name`, or None if it has none."""
    if not class_name:
        return None
    definition = (schema_data.get('classes') or {}).get(class_name) or {}
    return definition.get('slot_usage')


def declaring_classes(schema_data: dict, slot_name: str) -> list[str]:
    """Classes that list the slot in their own `slots` list."""
    return sorted(
        name for name, definition in (schema_data.get('classes') or {}).items()
        if slot_name in (definition.get('slots') or [])
    )


def shapes_across_classes(schema_data: dict, slot_name: str) -> set[bool]:
    """The shape each declaring class resolves to, as {is_collection}.

    This is what a shared PHP trait interface has to satisfy, so it must be
    derived from the classes rather than from the unscoped heuristic. A slot
    restricted on its only declaring class (`Order.selects`) is the case that
    gets missed otherwise: the heuristic still calls it a collection, the trait
    demands `add*`/`remove*`, and the scalar model no longer emits them.
    """
    slot_data = (schema_data.get('slots') or {}).get(slot_name, {})
    return {
        is_collection_property(
            slot_name, slot_data, usage_for(schema_data, class_name),
        )
        for class_name in declaring_classes(schema_data, slot_name)
    }


def shape_conflicts(schema_data: dict, slot_name: str) -> bool:
    """True when the slot is a collection on one class and a scalar on another.

    Five slots in DFC v2.0.0 are in this position, all because a restriction
    names one class and the slot's domain names another: `hasAddress` is a
    collection on `Agent` and a scalar on `PhysicalPlace`, and likewise
    `hasMainContact`, `listedIn`, `concerns` and `uses`.

    This matters only for the PHP trait interfaces, which group slots by
    interface name across the whole schema and therefore cannot be told which
    class they are describing. PHP return types are covariant but a scalar is
    not a subtype of an array, so a trait that picked either shape would break
    the other class. The trait therefore has to declare the permissive union
    and let each model narrow it -- which PHP permits.
    """
    return len(shapes_across_classes(schema_data, slot_name)) > 1


def is_collection_property(
    slot_name: str,
    slot_data: dict,
    class_usage: dict | None = None,
) -> bool:
    """True when the generated property must accept several values."""
    if class_cap(class_usage, slot_name) == 1:
        return False
    if slot_data.get('maximum_cardinality') == 1:
        return False
    if slot_data.get('multivalued', False):
        return True
    return looks_plural(slot_name)


def required_slots(
    class_name: str,
    classes: dict,
    slots: dict,
) -> dict[str, dict]:
    """Slots this class must carry, as {slot_name: slot_definition}.

    A class's own `slot_usage` applies to that class; an ancestor's applies to
    every descendant. Minimums only -- nothing in DFC requires a value to be
    present, it only ever says "at most one" or "exactly one" for a slot the
    class has, and `validate()` reports the difference.
    """
    chain: list[str] = []
    seen: set[str] = set()
    current = class_name
    while current and current not in seen:
        seen.add(current)
        chain.append(current)
        current = (classes.get(current) or {}).get('is_a')

    out: dict[str, dict] = {}
    for name in chain:
        definition = classes.get(name) or {}
        for slot_name, bounds in (definition.get('slot_usage') or {}).items():
            if bounds.get('minimum_cardinality', 0) >= 1 and slot_name in slots:
                # Keep the nearest declaration: a subclass may relax it.
                out.setdefault(slot_name, slots[slot_name])
    return out
