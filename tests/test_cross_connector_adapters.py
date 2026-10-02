"""Guards the cross-connector scenario adapters against silent data loss.

The round-trip matrix compares connectors against each other, but it only
iterates the predicates the *source* produced. If a source adapter translates a
canonical scenario param into a constructor param that no longer exists, the
connector drops the predicate before the comparison ever runs -- and a
connector that emits nothing looks perfectly clean.

That is not hypothetical: the PHP generator renamed `quantityValue` to
`quantity` when it stopped transposing bare/has_ slot pairs, and the adapter
kept passing `quantityValue`. PHP silently dropped `dfc-b:quantity` from every
`order` scenario while the matrix reported those pairs as PASS.

The invariant pinned here: a canonical scenario param is the camelCase of a
schema slot name, and that slot's first alias is the predicate the connectors
must emit. So every param a scenario sets has a knowable predicate, and each
LinkML connector's export must contain it.
"""
import json
import shutil
import subprocess
import sys
from pathlib import Path

import pytest
import yaml

REPO = Path(__file__).resolve().parent.parent
SCHEMA = REPO / 'src' / 'dfc_business_linkml_v2_0.yaml'
CROSS = REPO / 'tests' / 'cross_connector'
SCENARIOS = sorted((CROSS / 'scenarios').glob('*.json'))
ADAPTERS = CROSS / 'adapters'

# connector name -> (runtime, adapter script, runtime needed to run it)
LINKML_ADAPTERS = {
    'our-typescript': ('node', 'our-typescript.mjs', 'node'),
    'our-ruby': ('ruby', 'our-ruby.rb', 'ruby'),
    'our-php': ('php', 'our-php.php', 'php'),
}


def _camel(slot_name: str) -> str:
    """`has_quantity` -> `hasQuantity`: the canonical scenario param spelling."""
    head, *rest = slot_name.split('_')
    return head + ''.join(w[:1].upper() + w[1:] for w in rest)


@pytest.fixture(scope='module')
def slots() -> dict:
    with open(SCHEMA, encoding='utf-8') as fh:
        return yaml.safe_load(fh)['slots']


@pytest.fixture(scope='module')
def predicate_of_param(slots: dict) -> dict:
    """canonical scenario param -> the predicate it must produce."""
    by_camel = {}
    for name in slots:
        by_camel.setdefault(_camel(name), name)

    mapping = {}
    for scenario in SCENARIOS:
        for obj in json.loads(scenario.read_text(encoding='utf-8'))['objects']:
            for param in obj.get('params') or {}:
                slot = slots[by_camel[param]]
                mapping[param] = 'dfc-b:' + slot['aliases'][0]
    return mapping


def test_every_scenario_param_is_a_camelcased_slot(predicate_of_param):
    """No scenario may invent a param name the schema does not define.

    This is what makes the predicate lookup total; a param with no matching
    slot would raise KeyError above rather than fail here with a clear name.
    """
    assert predicate_of_param, 'no scenario params found -- scenarios are empty?'


@pytest.mark.parametrize('connector', sorted(LINKML_ADAPTERS))
def test_no_scenario_param_is_silently_dropped(connector, predicate_of_param):
    """Every param a scenario sets must appear in the connector's export.

    A missing predicate here means the adapter maps the param onto a
    constructor argument the connector does not accept, so the value is
    discarded before it reaches the wire.
    """
    runtime, script, binary = LINKML_ADAPTERS[connector]
    if shutil.which(binary) is None:
        pytest.skip(f'{binary} not available')

    dropped = []
    for scenario in SCENARIOS:
        spec = json.loads(scenario.read_text(encoding='utf-8'))
        proc = subprocess.run(
            [runtime, str(ADAPTERS / script), 'export', str(scenario)],
            capture_output=True, text=True, cwd=REPO,
        )
        if proc.returncode != 0:
            pytest.fail(f'{connector} failed to export {scenario.name}: {proc.stderr.strip()}')

        doc = json.loads(proc.stdout)
        nodes = doc.get('@graph', [doc]) if isinstance(doc, dict) else doc
        by_id = {n['@id']: n for n in nodes if isinstance(n, dict) and '@id' in n}

        for obj in spec['objects']:
            exported = by_id.get(obj['semanticId'], {})
            for param in obj.get('params') or {}:
                predicate = predicate_of_param[param]
                if predicate not in exported:
                    dropped.append(f'{scenario.stem}/{obj["type"]}.{param} -> {predicate}')

    assert not dropped, (
        f'{connector} silently dropped scenario params (adapter maps onto '
        f'constructor params the connector does not accept):\n  '
        + '\n  '.join(sorted(set(dropped)))
    )


def test_php_adapter_does_not_use_pre_rename_names():
    """The PHP adapter must not still pass the pre-rename bare-slot names.

    `quantityValue` and `countryName` were the generator's old bare-slot
    disambiguation. They are gone from the generated classes, so passing them
    is now a silent no-op rather than an error.
    """
    text = (ADAPTERS / 'our-php.php').read_text(encoding='utf-8')
    retired = [name for name in ('quantityValue', 'countryName', 'claimText', 'brandName')
               if f"'{name}'" in text]
    assert not retired, (
        'our-php.php still passes removed bare-slot constructor params: '
        + ', '.join(retired)
    )
