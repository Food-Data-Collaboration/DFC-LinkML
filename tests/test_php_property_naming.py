"""Guards the PHP property naming for bare/has_ slot collisions.

PHP strips the `has_` prefix, so `has_country` and `country` both wanted the
property name `country`. The generator used to resolve that by renaming the
*bare* slot to `countryName`, which transposed the two predicates -- the same
property name emitted a different predicate per language, so PHP documents
were not interchangeable with TypeScript ones. `phone_number` /
`has_phone_number` was missed entirely and silently lost
`dfc-b:phoneNumber`.

Each slot now keeps its own name, matching the TypeScript and Ruby
generators. This is the check that makes that true.
"""
import re
import sys
from pathlib import Path

import pytest
import yaml

REPO = Path(__file__).resolve().parent.parent
SCHEMA = REPO / 'src' / 'dfc_business_linkml_v2_0.yaml'
PHP_SRC = REPO / 'php-connector' / 'src'
TS_SRC = REPO / 'typescript-connector' / 'src' / 'models'

sys.path.insert(0, str(REPO))
from scripts.generate_php_connector import (  # noqa: E402
    PREFIX_COLLISIONS, predicate_for_slot, to_php_property_name,
)

# Every slot whose bare name collides with a has_ slot.
COLLIDING = {
    'brand': 'has_brand',
    'claim': 'has_claim',
    'country': 'has_country',
    'quantity': 'has_quantity',
    'phone_number': 'has_phone_number',
}


def schema() -> dict:
    with open(SCHEMA, encoding='utf-8') as fh:
        return yaml.safe_load(fh)


def test_collision_table_is_complete():
    """The table must list every collision, not a hand-picked subset.

    The original list missed phone_number/has_phone_number, which is how
    dfc-b:phoneNumber was lost. Derive the collisions from the schema instead
    of trusting the constant.
    """
    s = schema()
    actual = set()
    for name in s['slots']:
        bare = name[4:] if name.startswith('has_') else name
        if bare != name and bare in s['slots']:
            actual.add((bare, name))
    assert actual == set(COLLIDING.items()), (
        f'schema collisions {sorted(actual)} != declared {sorted(COLLIDING.items())}'
    )
    assert set(PREFIX_COLLISIONS.items()) == set(COLLIDING.items())


def test_collision_pairs_keep_distinct_names():
    slots = set(schema()['slots'])
    names = {}
    for bare, haseq in COLLIDING.items():
        b, h = to_php_property_name(bare, slots), to_php_property_name(haseq, slots)
        assert b != h, f'{bare} and {haseq} both map to {b!r}'
        names[bare], names[haseq] = b, h


def test_bare_slot_keeps_its_own_name():
    """Regression: `country` was renamed to `countryName`."""
    slots = set(schema()['slots'])
    assert to_php_property_name('country', slots) == 'country'
    assert to_php_property_name('quantity', slots) == 'quantity'
    assert to_php_property_name('brand', slots) == 'brand'


def test_has_slot_keeps_its_prefix():
    slots = set(schema()['slots'])
    assert to_php_property_name('has_country', slots) == 'hasCountry'
    assert to_php_property_name('has_quantity', slots) == 'hasQuantity'
    assert to_php_property_name('has_phone_number', slots) == 'hasPhoneNumber'


def test_non_colliding_has_slots_still_strip_the_prefix():
    """PHP idiom preserved: has_unit -> unit, not hasUnit."""
    slots = set(schema()['slots'])
    assert to_php_property_name('has_unit', slots) == 'unit'
    assert to_php_property_name('has_name', slots) == 'name'
    assert to_php_property_name('has_main_contact', slots) == 'mainContact'


@pytest.mark.parametrize('bare,haseq', sorted(COLLIDING.items()))
def test_php_and_typescript_agree_on_the_predicate(bare, haseq):
    """The point of the fix: same slot -> same predicate in both connectors.

    Checked against the generated PHP source and the generated TypeScript
    model, so it fails if either generator drifts.
    """
    s = schema()
    expected = {bare: predicate_for_slot(bare, s['slots'][bare]),
                haseq: predicate_for_slot(haseq, s['slots'][haseq])}

    php_class = _php_class_with(s, bare) or _php_class_with(s, haseq)
    if not php_class:
        pytest.skip(f'no generated PHP class carries {bare}/{haseq}')
    text = (PHP_SRC / php_class).read_text(encoding='utf-8')

    for slot, predicate in expected.items():
        prop = to_php_property_name(slot, set(s['slots']))
        if prop not in text:
            continue
        assert f"registerSemanticProperty('{predicate}'" in text, (
            f'{php_class}: {slot} should register {predicate}'
        )
        # And the wrong one must not be bound to the same property.
        wrong = [p for s2, p in expected.items() if s2 != slot]
        for w in wrong:
            assert not re.search(
                rf"registerSemanticProperty\('{re.escape(w)}',\s*fn\(\)\s*=>\s*\$this->{re.escape(prop)}\)",
                text,
            ), f'{php_class}: property {prop} is bound to {w}, expected {predicate}'


def _php_class_with(s: dict, slot: str) -> str | None:
    for class_name in s['classes']:
        chain, cur = [], class_name
        seen = set()
        while cur and cur not in seen:
            seen.add(cur)
            chain.append(cur)
            cur = (s['classes'][cur] or {}).get('is_a')
        for anc in chain:
            if slot in ((s['classes'][anc] or {}).get('slots') or []):
                from scripts.generate_php_connector import to_php_class_name
                return f'{to_php_class_name(class_name)}.php'
    return None


def test_stale_renamed_traits_are_gone():
    """BrandNameable and friends were artifacts of the old override."""
    for stale in ('BrandNameable.php', 'ClaimTextable.php', 'CountryNameable.php',
                  'QuantityValueable.php'):
        assert not (PHP_SRC / stale).exists(), (
            f'{stale} is left over from the bare-slot rename'
        )


def test_bare_overrides_const_mirrors_property_naming():
    """BARE_OVERRIDES is the predicateToPropName fallback; it must agree."""
    text = (PHP_SRC / 'Connector.php').read_text(encoding='utf-8')
    block = re.search(r'BARE_OVERRIDES = \[(.*?)\];', text, re.S)
    assert block, 'BARE_OVERRIDES not found in Connector.php'
    entries = dict(re.findall(r"'([^']+)'\s*=>\s*'([^']+)'", block.group(1)))
    s = schema()
    for bare, haseq in COLLIDING.items():
        for slot in (bare, haseq):
            pred = predicate_for_slot(slot, s['slots'][slot])
            if pred in entries:
                assert entries[pred] == to_php_property_name(slot, set(s['slots'])), (
                    f'BARE_OVERRIDES[{pred}] is {entries[pred]!r}, '
                    f'expected {to_php_property_name(slot, set(s["slots"]))!r}'
                )
