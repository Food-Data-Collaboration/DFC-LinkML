"""Guards the extraction of OWL cardinality into the LinkML schema.

DFC v2.0.0 states multiplicity in two distinct places and the two need
different LinkML shapes:

- 42 class-scoped restrictions (`owl:cardinality`/`minCardinality`/
  `qualifiedCardinality`, all `1`) become a class-scoped `slot_usage`.
- 34 `owl:FunctionalProperty` declarations become a slot-level
  `maximum_cardinality: 1`.

The split matters, and `hasAddress` is why: the ontology restricts
`hasAddress` on `PhysicalPlace` to exactly one and says nothing about `Agent`.
`Agent` and `PhysicalPlace` are siblings under `DFC_BusinessOntology_Subject`,
so a slot-level flag would be wrong for both. See `docs/concepts/cardinality.md`.

Every restriction in the ontology is a singleton and there is no
`owl:maxCardinality` anywhere, so `multivalued` cannot be derived here at all --
that half is a curated input in `config/dfc-default.yaml`.
"""
import sys
from pathlib import Path

import pytest
import yaml

REPO = Path(__file__).resolve().parent.parent
SCHEMA = REPO / 'src' / 'dfc_business_linkml_v2_0.yaml'

sys.path.insert(0, str(REPO))
from scripts.owl2linkml import (  # noqa: E402
    get_cardinality_restrictions, get_functional_properties,
)


def schema() -> dict:
    with open(SCHEMA, encoding='utf-8') as fh:
        return yaml.safe_load(fh)


@pytest.fixture(scope='module')
def sch() -> dict:
    return schema()


@pytest.fixture(scope='module')
def usage(sch) -> dict:
    return {
        name: definition['slot_usage']
        for name, definition in sch['classes'].items()
        if definition.get('slot_usage')
    }


@pytest.fixture(scope='module')
def graph():
    """The published DFC v2.0.0 business ontology."""
    rdflib = pytest.importorskip('rdflib')
    g = rdflib.Graph()
    g.parse('https://w3id.org/dfc/ontology/v2.0.0/src/DFC_BusinessOntology.rdf',
            format='xml')
    return g


# ---------------------------------------------------------------------------
# Counts. These are the ontology's numbers, so a drift in DFC shows up here
# rather than silently changing the generated shape.
# ---------------------------------------------------------------------------

def test_emitted_restriction_count(usage):
    assert sum(len(v) for v in usage.values()) == 42


def test_emitted_restriction_class_count(usage):
    assert len(usage) == 25


def test_emitted_functional_property_count(sch):
    capped = [n for n, s in sch['slots'].items()
              if s.get('maximum_cardinality') == 1]
    assert len(capped) == 34


# ---------------------------------------------------------------------------
# Shape: every restriction is a singleton, so min and max are both 1.
# ---------------------------------------------------------------------------

def test_every_restriction_is_a_singleton(usage):
    for class_name, slots in usage.items():
        for slot_name, bounds in slots.items():
            assert bounds == {'minimum_cardinality': 1, 'maximum_cardinality': 1}, (
                f'{class_name}.{slot_name} is not a singleton restriction: {bounds}'
            )


def test_multivalued_comes_only_from_the_curated_list(sch):
    """`multivalued` is a curated input, never derived from the ontology.

    The ontology cannot supply it: absence of a singleton restriction is not
    evidence of multiplicity in an open-world model. So every `multivalued: true`
    must trace back to `config.cardinality.multi_valued`.
    """
    config = yaml.safe_load(
        (REPO / 'config' / 'dfc-default.yaml').read_text(encoding='utf-8')
    )
    curated = set((config.get('cardinality') or {}).get('multi_valued') or [])
    declared = {n for n, s in sch['slots'].items() if s.get('multivalued')}
    assert declared == curated, (
        'multivalued in the schema does not match the curated list; '
        f'only in schema: {sorted(declared - curated)}; '
        f'only in config: {sorted(curated - declared)}'
    )


def test_multivalued_never_contradicts_a_singleton_cap(sch):
    """A slot cannot be both a collection and capped at one."""
    both = sorted(
        n for n, s in sch['slots'].items()
        if s.get('multivalued') and s.get('maximum_cardinality') == 1
    )
    assert not both, f'slots are both multivalued and maximum_cardinality 1: {both}'


def test_no_max_cardinality_above_one(sch):
    offenders = [
        (n, s['maximum_cardinality']) for n, s in sch['slots'].items()
        if 'maximum_cardinality' in s and s['maximum_cardinality'] != 1
    ]
    assert not offenders, f'DFC declares no upper bound other than 1: {offenders}'


def test_no_minimum_cardinality_below_one(sch):
    """`minimum_cardinality` only ever appears in slot_usage, never slot-level."""
    offenders = [n for n, s in sch['slots'].items() if 'minimum_cardinality' in s]
    assert not offenders, (
        f'slot-level minimum_cardinality is not sourced from the ontology: {offenders}'
    )


# ---------------------------------------------------------------------------
# Class scoping. The whole reason for slot_usage.
# ---------------------------------------------------------------------------

def test_has_address_is_scoped_not_global(usage, sch):
    """PhysicalPlace restricts hasAddress; Agent does not.

    If this ever becomes a slot-level flag, an Organization would lose the
    ability to hold more than one address -- which is what the original DFC
    connector supports (`addLocalization`, `localizations: IAddress[]`).
    """
    assert usage['PhysicalPlace']['has_address'] == {
        'minimum_cardinality': 1, 'maximum_cardinality': 1,
    }
    assert 'Agent' not in usage, (
        'Agent gained a cardinality restriction the ontology does not assert; '
        'the ontology is silent on Agent.hasAddress'
    )
    assert 'maximum_cardinality' not in sch['slots']['has_address']


def test_restriction_slots_are_declared_on_their_class(usage, sch):
    """A `slot_usage` entry for a slot the class does not carry is dead weight."""
    for class_name, slots in usage.items():
        declared = set(sch['classes'][class_name].get('slots') or [])
        assert set(slots) <= declared, (
            f'{class_name} has slot_usage for slots it does not declare: '
            f'{sorted(set(slots) - declared)}'
        )


def test_restrictions_reference_known_slots(usage, sch):
    unknown = {
        f'{c}.{s}': s for c, slots in usage.items() for s in slots
        if s not in sch['slots']
    }
    assert not unknown, f'slot_usage names slots absent from the schema: {unknown}'


# ---------------------------------------------------------------------------
# Converter parity: the committed schema must match what the converter derives.
# ---------------------------------------------------------------------------

def test_converter_matches_committed_schema(graph, usage):
    """Re-deriving from the ontology must reproduce the committed schema.

    This is the check that fails when the schema is hand-edited, or when the
    extraction silently stops working. Network-gated like the other
    ontology-derived tests.
    """
    derived = get_cardinality_restrictions(graph)
    for class_name, slots in derived.items():
        if class_name not in usage:
            continue
        for prop_name, bounds in slots.items():
            slot_name = _snake(prop_name)
            if slot_name in usage[class_name]:
                assert usage[class_name][slot_name] == bounds, (
                    f'{class_name}.{slot_name}: schema says '
                    f'{usage[class_name][slot_name]}, ontology says {bounds}'
                )


def test_converter_functional_matches_committed_schema(graph, sch):
    derived = get_functional_properties(graph)
    capped = {n for n, s in sch['slots'].items() if s.get('maximum_cardinality') == 1}
    # The two sets are keyed differently (ontology local name vs snake slot),
    # so compare counts and require every capped slot to come from the ontology.
    for name in capped:
        aliases = set(sch['slots'][name].get('aliases') or []) | {name}
        assert aliases & derived, (
            f'slot {name} has maximum_cardinality: 1 but no ontology source'
        )


def _snake(name: str) -> str:
    import re
    return re.sub(r'(?<!^)(?=[A-Z])', '_', name).lower()


# ---------------------------------------------------------------------------
# The curated half: the ontology says nothing, so config supplies the n side.
# ---------------------------------------------------------------------------

def test_curated_multi_valued_entries_are_real_slots():
    config = yaml.safe_load(
        (REPO / 'config' / 'dfc-default.yaml').read_text(encoding='utf-8')
    )
    curated = (config.get('cardinality') or {}).get('multi_valued') or {}
    sch = schema()
    unknown = [n for n in curated if n not in sch['slots']]
    assert not unknown, f'curated multi_valued names absent from the schema: {unknown}'


def test_curated_entries_do_not_contradict_the_ontology():
    """A curated collection must not collide with an ontology singleton.

    Class-scoped ontology info wins, so a curated entry can only misdescribe a
    class the ontology is silent about. Anything declared `=1` or functional
    must not be curated.
    """
    config = yaml.safe_load(
        (REPO / 'config' / 'dfc-default.yaml').read_text(encoding='utf-8')
    )
    curated = (config.get('cardinality') or {}).get('multi_valued') or {}
    sch = schema()
    singleton_slots = {
        n for n, s in sch['slots'].items() if s.get('maximum_cardinality') == 1
    }
    clashes = sorted(set(curated) & singleton_slots)
    assert not clashes, (
        f'curated as multi_valued but the ontology caps it at 1: {clashes}'
    )
