"""Guards that the generated schema is loadable as LinkML.

`reachable_from` accepts only the fields of LinkML's `ReachabilityQuery`, and
`SchemaDefinition` has no version fields beyond `version`. Anything else makes
the published schema unloadable by LinkML tooling.

Issue #49 fixed both: `source_class` and `path_navigation` used to sit inside
`reachable_from`, and `ontology_version`/`taxonomy_version` were top-level keys.
Project metadata now lives in `annotations`, which LinkML tolerates.

`path_navigation` was also wrong on the facts. Upstream `skos:hasTopConcept`
lists only the top concepts — 6 of 237 facets, 2 of 128 measures, 3 of 43
terms, and none at all for scopes or product types — while the generators load
every `skos:Concept` in the graph and key it on `skos:notation`. A navigation
path described a traversal that never happened.
"""
import sys
from pathlib import Path

import pytest
import yaml

REPO = Path(__file__).resolve().parent.parent
SCHEMA = REPO / 'src' / 'dfc_business_linkml_v2_0.yaml'

sys.path.insert(0, str(REPO / 'scripts'))
import schema_meta  # noqa: E402

# LinkML's ReachabilityQuery fields, as of linkml-runtime 1.9.x.
REACHABILITY_FIELDS = {
    'source_ontology',
    'source_nodes',
    'relationship_types',
    'is_direct',
    'include_self',
    'traverse_up',
}


@pytest.fixture(scope='module')
def sch() -> dict:
    with open(SCHEMA, encoding='utf-8') as fh:
        return yaml.safe_load(fh)


def test_reachable_from_uses_only_linkml_fields(sch):
    """No project extensions may hide inside reachable_from."""
    for name, enum in (sch.get('enums') or {}).items():
        reach = (enum or {}).get('reachable_from') or {}
        extra = set(reach) - REACHABILITY_FIELDS
        assert not extra, (
            f'{name}.reachable_from has non-LinkML fields: {sorted(extra)}'
        )


def test_path_navigation_stays_dropped(sch):
    """It described a traversal the connectors never perform."""
    assert 'path_navigation' not in yaml.safe_dump(sch)


def test_versions_are_annotations_not_top_level_keys(sch):
    assert 'ontology_version' not in sch, 'top-level key breaks LinkML loading'
    assert 'taxonomy_version' not in sch, 'top-level key breaks LinkML loading'
    annotations = sch.get('annotations') or {}
    assert annotations.get('ontology_version')
    assert annotations.get('taxonomy_version')


def test_source_class_survives_as_an_annotation(sch):
    """The one genuinely useful extension is kept, where LinkML allows it."""
    for name, enum in (sch.get('enums') or {}).items():
        annotations = (enum or {}).get('annotations') or {}
        assert annotations.get('source_class'), (
            f'{name} lost its source_class annotation'
        )


def test_schema_meta_prefers_annotations_and_accepts_legacy(sch):
    assert schema_meta.ontology_version(sch) == sch['annotations']['ontology_version']
    assert schema_meta.taxonomy_version(sch) == sch['annotations']['taxonomy_version']
    # An older generated schema must still resolve.
    assert schema_meta.ontology_version({'ontology_version': '1.2.3'}) == '1.2.3'
    assert schema_meta.taxonomy_version({}, '9.9.9') == '9.9.9'


def test_schema_loads_as_a_linkml_schema_definition(sch):
    """The real check: LinkML itself accepts the published schema."""
    pytest.importorskip(
        'linkml_runtime',
        reason='linkml-runtime not installed; structural checks above still ran',
    )
    from linkml_runtime.linkml_model.meta import SchemaDefinition
    from linkml_runtime.loaders import yaml_loader

    loaded = yaml_loader.load(str(SCHEMA), SchemaDefinition)
    assert loaded.name == sch['name']
    assert (
        loaded.annotations['ontology_version'].value
        == sch['annotations']['ontology_version']
    )
    assert (
        loaded.annotations['taxonomy_version'].value
        == sch['annotations']['taxonomy_version']
    )
    for enum in loaded.enums.values():
        assert enum.reachable_from.source_ontology
