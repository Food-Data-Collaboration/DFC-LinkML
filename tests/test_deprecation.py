"""Guards the deprecation and equivalence handling.

The DFC v2.0.0 ontology annotates 8 subjects `owl:deprecated` and asserts 4
`owl:equivalentClass` equivalences. The converter reads both and the
reference generator filters deprecated entities out of the tables.

Two things in here are regression guards for bugs that actually happened:

- Membership in `get_equivalences` was decided on local names, which threw
  away three of the four mappings: `vcard:Agent` and `dfc-b:Agent` both
  local-name to "Agent", so both sides looked like schema classes and the
  assertion was dropped as a tautology.
- The deprecated-property stub inferred a replacement (`quantity` ->
  `has_quantity`) by name. The ontology does not assert that; it only names
  a replacement in prose for `uses` -> `refersTo`, and `refersTo` is itself
  deprecated. Inference is not allowed here, only sourced facts.
"""
import re
import sys
from pathlib import Path

import pytest
import yaml

REPO = Path(__file__).resolve().parent.parent
SCHEMA = REPO / 'src' / 'dfc_business_linkml_v2_0.yaml'
CLASSES = REPO / 'docs' / 'reference' / 'model' / 'classes'
PROPS = REPO / 'docs' / 'reference' / 'model' / 'properties'

sys.path.insert(0, str(REPO))
from scripts.owl2linkml import (  # noqa: E402
    _is_deprecated, _to_curie, get_deprecated_classes, get_equivalences,
)

# The 8 subjects the ontology annotates owl:deprecated.
EXPECTED_DEPRECATED_CLASSES = {'Enterprise'}
EXPECTED_DEPRECATED_SLOTS = {
    'composed_of', 'composes', 'country', 'quantity',
    'refers_to', 'supplies_to', 'uses',
}

# The 4 owl:equivalentClass assertions, DFC-side, as full CURIEs.
EXPECTED_EQUIVALENCES = {
    'Agent': 'vcard:Agent',
    'Organization': 'vcard:Organization',
    'Person': 'vcard:Individual',
    'Enterprise': 'dfc-b:Organization',
}


def schema() -> dict:
    with open(SCHEMA, encoding='utf-8') as fh:
        return yaml.safe_load(fh)


# ---------------------------------------------------------------------------
# Converter
# ---------------------------------------------------------------------------

def test_schema_records_deprecated_classes():
    s = schema()
    got = {n for n, c in s['classes'].items() if c.get('deprecated')}
    assert got == EXPECTED_DEPRECATED_CLASSES, f'deprecated classes: {got}'


def test_schema_records_deprecated_slots():
    s = schema()
    got = {n for n, sl in s['slots'].items() if sl.get('deprecated')}
    assert got == EXPECTED_DEPRECATED_SLOTS, f'deprecated slots: {got}'


def test_schema_records_all_four_equivalences():
    """Regression: local-name comparison dropped three of the four."""
    s = schema()
    got = {n: c['equivalent_to'] for n, c in s['classes'].items()
           if c.get('equivalent_to')}
    assert got == EXPECTED_EQUIVALENCES, f'equivalences: {got}'


def test_equivalences_are_full_curies():
    """`vcard:Agent` and `dfc-b:Agent` share a local name.

    A local name cannot distinguish them, so every target must carry a
    prefix.
    """
    s = schema()
    for name, target in ((n, c.get('equivalent_to'))
                         for n, c in s['classes'].items()):
        if not target:
            continue
        assert ':' in target, f'{name}: {target!r} is not a CURIE'
        assert not target.startswith('http'), (
            f'{name}: {target!r} should have been shortened to a CURIE'
        )


def test_enterprise_replacement_is_sourced_not_inferred():
    s = schema()
    ent = s['classes']['Enterprise']
    assert ent.get('deprecated') is True
    assert ent.get('equivalent_to') == 'dfc-b:Organization'
    # And the target must be a live class.
    org = s['classes']['Organization']
    assert not org.get('deprecated'), 'Organization is the replacement'


def test_vcard_prefix_is_declared():
    s = schema()
    assert s['prefixes'].get('vcard') == 'http://www.w3.org/2006/vcard/ns#'


def test_to_curie_prefers_the_longest_prefix():
    """A shorter prefix that also matches must not win."""
    prefixes = {'vcard': 'http://www.w3.org/2006/vcard/ns#',
                'ns': 'http://www.w3.org/2006/vcard/'}
    iri = 'http://www.w3.org/2006/vcard/ns#Agent'
    assert _to_curie(iri, prefixes) == 'vcard:Agent'


def test_to_curie_leaves_unknown_iris_alone():
    assert _to_curie('http://example.com/Thing', {}) == 'http://example.com/Thing'


def test_vcard_individual_does_not_become_an_equivalence_of_individual():
    """`vcard:Individual` maps to `dfc-b:Person`, not to `dfc-b:Individual`.

    DFC does define its own `Individual` class (a root with no properties),
    and it is NOT equivalent to vcard:Individual. A local-name
    implementation would key the assertion on the vCard side and record
    `Individual -> vcard:Individual`, which is a different and wrong claim.
    """
    s = schema()
    assert s['classes']['Person']['equivalent_to'] == 'vcard:Individual'
    # The real Individual class carries no equivalence.
    assert not s['classes']['Individual'].get('equivalent_to'), (
        'Individual must not be recorded as equivalent to vcard:Individual; '
        'it is the Person class that is'
    )


# ---------------------------------------------------------------------------
# Reference output
# ---------------------------------------------------------------------------

def test_deprecated_entities_have_stub_pages():
    for name in EXPECTED_DEPRECATED_CLASSES:
        page = CLASSES / f'{name}.md'
        assert page.is_file(), f'{name} has no stub page'
        assert 'deprecated' in page.read_text(encoding='utf-8').lower()
    for name in EXPECTED_DEPRECATED_SLOTS:
        page = PROPS / f'{name}.md'
        assert page.is_file(), f'{name} has no stub page'
        assert 'deprecated' in page.read_text(encoding='utf-8').lower()


def test_deprecated_classes_are_absent_from_the_index():
    index = (CLASSES / 'index.md').read_text(encoding='utf-8')
    for name in EXPECTED_DEPRECATED_CLASSES:
        assert f']({name}.md)' not in index, (
            f'{name} is deprecated and must not be listed in the class index'
        )


def test_deprecated_slots_are_absent_from_the_index_table():
    """The index may name them in a separate deprecated section, not the table."""
    text = (PROPS / 'index.md').read_text(encoding='utf-8')
    table = text.split('## Deprecated')[0] if '## Deprecated' in text else text
    for name in EXPECTED_DEPRECATED_SLOTS:
        assert f']({name}.md)' not in table, (
            f'{name} is deprecated and must not appear in the property table'
        )


def test_deprecated_slots_are_absent_from_class_pages():
    for name in EXPECTED_DEPRECATED_SLOTS:
        needle = f'../properties/{name}.md'
        hits = [p.name for p in CLASSES.glob('*.md')
                if needle in p.read_text(encoding='utf-8')]
        assert not hits, f'{name} is deprecated but linked from {hits[:3]}'


def test_deprecated_stubs_do_not_infer_a_replacement():
    """Regression: `quantity` -> `has_quantity` was invented.

    The ontology does not assert that. It names a replacement in prose only
    for `uses` -> `refersTo`, and `refersTo` is itself deprecated, so a stub
    must not present either as a live option.
    """
    q = (PROPS / 'quantity.md').read_text(encoding='utf-8')
    assert 'has_quantity' not in q, (
        'quantity must not claim has_quantity as its replacement; the '
        'ontology does not assert that'
    )
    c = (PROPS / 'country.md').read_text(encoding='utf-8')
    assert 'has_country' not in c, (
        'country must not claim has_country as its replacement'
    )


def test_uses_stub_reports_the_dead_end_chain():
    """`uses` names refersTo, but refersTo is also deprecated."""
    text = (PROPS / 'uses.md').read_text(encoding='utf-8')
    assert 'refers_to' in text
    assert 'also deprecated' in text, (
        'the stub should say the suggested replacement is itself deprecated'
    )


def test_equivalence_is_shown_on_live_class_pages():
    for name, target in EXPECTED_EQUIVALENCES.items():
        if name == 'Enterprise':
            continue  # a stub, tested separately
        page = CLASSES / f'{name}.md'
        assert page.is_file()
        text = page.read_text(encoding='utf-8')
        assert '## Equivalence' in text, f'{name} has no equivalence section'
        assert target in text, f'{name} does not show {target}'


def test_enterprise_stub_links_the_replacement():
    text = (CLASSES / 'Enterprise.md').read_text(encoding='utf-8')
    assert 'equivalent to' in text
    assert 'Organization.md' in text, 'the stub should link Organization'


def test_deprecation_annotation_is_reachable_in_the_converter():
    """The skip list must not make the annotation unreadable.

    `deprecated` is in skip_properties, which is about not emitting an OWL
    property of that name. Reading the annotation off a class is separate and
    has to keep working.
    """
    import rdflib
    from rdflib import OWL, RDF, RDFS, URIRef

    g = rdflib.Graph()
    g.parse(REPO / '.agents' / 'skipped', format='xml') if False else None
    # Build a tiny in-memory graph rather than depending on the network.
    g = rdflib.Graph()
    ns = 'http://example.org/onto#'
    g.add((URIRef(ns + 'Old'), RDF.type, OWL.Class))
    g.add((URIRef(ns + 'Old'), OWL.deprecated, rdflib.Literal('true')))
    g.add((URIRef(ns + 'New'), RDF.type, OWL.Class))
    assert _is_deprecated(g, URIRef(ns + 'Old')) is True
    assert _is_deprecated(g, URIRef(ns + 'New')) is False


def test_empty_deprecated_value_still_counts():
    """The ontology has at least one annotation present but blank."""
    import rdflib
    from rdflib import OWL, RDF, URIRef
    g = rdflib.Graph()
    ns = 'http://example.org/onto#'
    g.add((URIRef(ns + 'Gone'), RDF.type, OWL.Class))
    g.add((URIRef(ns + 'Gone'), OWL.deprecated, rdflib.Literal('')))
    assert _is_deprecated(g, URIRef(ns + 'Gone')) is True


def test_tautological_equivalence_is_dropped():
    """The same IRI on both sides asserts nothing."""
    import rdflib
    from rdflib import OWL, RDF, URIRef
    g = rdflib.Graph()
    ns = 'http://example.org/onto#'
    g.add((URIRef(ns + 'A'), RDF.type, OWL.Class))
    g.add((URIRef(ns + 'A'), OWL.equivalentClass, URIRef(ns + 'A')))
    assert get_equivalences(g, set(), {'onto': ns}, {ns + 'A'}) == {}
