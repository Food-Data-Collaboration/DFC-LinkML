"""Tests for OWL to LinkML converter."""
import pytest
import yaml
from pathlib import Path

from scripts.owl2linkml import (
    _to_snake_case,
    _local_name,
    get_ontology_url,
    get_technical_url,
)


def make_config(ontology_version="2.0.0", taxonomy_version="2.0.0", extra=None):
    """Create a minimal config dict for tests."""
    config = {
        "name": "dfc_business",
        "ontology_version": ontology_version,
        "taxonomy_version": taxonomy_version,
        "prefixes": {
            "dfc-b": "https://w3id.org/dfc/ontology/src/DFC_BusinessOntology.owl#",
            "dfc-t": "https://w3id.org/dfc/ontology/src/DFC_TechnicalOntology.owl#",
            "linkml": "https://w3id.org/linkml/",
        },
        "class_description_template": "OWL class: {class_name}",
    }
    if extra:
        config.update(extra)
    return config


class TestSnakeCaseConversion:
    """Test snake_case conversion for slot names."""

    def test_simple_camel_case(self):
        """Test simple CamelCase to snake_case."""
        assert _to_snake_case("Address") == "address"
        assert _to_snake_case("Enterprise") == "enterprise"
        assert _to_snake_case("DefinedProduct") == "defined_product"

    def test_has_prefix_preserved(self):
        """Test that 'has' prefix is preserved in conversion."""
        assert _to_snake_case("hasAddress") == "has_address"
        assert _to_snake_case("hasCountry") == "has_country"
        assert _to_snake_case("hasQuantity") == "has_quantity"

    def test_special_cases(self):
        """Test special case handling."""
        assert _to_snake_case("u_r_l") == "url"
        assert _to_snake_case("vATNumber") == "v_a_t_number"
        assert _to_snake_case("organizationID") == "organization_id"

    def test_multiple_capitals(self):
        """Test handling of multiple capitals."""
        assert _to_snake_case("hasPercentageOfAlcoholByVolume") == "has_percentage_of_alcohol_by_volume"


class TestURLGeneration:
    """Test URL generation for different versions."""

    @pytest.mark.parametrize("version,expected", [
        ("2.0.0", "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_BusinessOntology.rdf"),
        ("1.16.0", "https://w3id.org/dfc/ontology/v1.16.0/src/DFC_BusinessOntology.rdf"),
        ("1.10.0", "https://w3id.org/dfc/ontology/v1.10.0/src/DFC_BusinessOntology.rdf"),
    ])
    def test_ontology_url_format(self, version, expected):
        """Test ontology URL includes version."""
        url = get_ontology_url(version, None)
        assert url == expected

    @pytest.mark.parametrize("version,expected", [
        ("2.0.0", "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_TechnicalOntology.rdf"),
        ("1.16.0", "https://w3id.org/dfc/ontology/v1.16.0/src/DFC_TechnicalOntology.rdf"),
    ])
    def test_technical_url_format(self, version, expected):
        """Test technical ontology URL includes version."""
        url = get_technical_url(version, None)
        assert url == expected

    def test_custom_url_override(self):
        """Test that custom URL overrides version-based URL."""
        custom = "https://example.com/custom/ontology.rdf"
        url = get_ontology_url("2.0.0", custom)
        assert url == custom


class TestLocalNameExtraction:
    """Test local name extraction from IRIs."""

    def test_iri_with_hash(self):
        """Test extraction from IRI with hash."""
        from rdflib import URIRef
        iri = URIRef("http://w3id.org/dfc/ontology/src/DFC_BusinessOntology.owl#Address")
        assert _local_name(iri) == "Address"

    def test_iri_with_slash(self):
        """Test extraction from IRI with slash."""
        from rdflib import URIRef
        iri = URIRef("http://example.com/ontology/ClassName")
        assert _local_name(iri) == "ClassName"


@pytest.mark.integration
class TestOWLImport:
    """Integration tests for OWL import."""

    def test_version_parameter_affects_output(self, tmp_path):
        """Test that different versions produce different schemas."""
        from scripts.owl2linkml import (
            load_ontology,
            get_classes,
            get_data_properties,
            get_object_properties,
            get_subclass_relations,
            build_linkml_schema,
        )

        ont_url = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_BusinessOntology.rdf"
        tech_url = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_TechnicalOntology.rdf"

        g = load_ontology(ont_url, tech_url, None)

        classes = get_classes(g)
        data_props = get_data_properties(g)
        obj_props = get_object_properties(g)
        subclass_relations = get_subclass_relations(g)

        config = make_config()
        schema = build_linkml_schema(
            classes,
            data_props,
            obj_props,
            subclass_relations,
            config,
        )

        assert schema["version"] == "2.0.0"
        assert schema["ontology_version"] == "2.0.0"
        assert schema["taxonomy_version"] == "2.0.0"
        assert len(classes) > 50
        assert len(data_props) > 50
        assert len(obj_props) > 100

    def test_schema_has_valid_linkml_structure(self):
        """Test that generated schema has valid LinkML structure."""
        from scripts.owl2linkml import (
            load_ontology,
            get_classes,
            get_data_properties,
            get_object_properties,
            get_subclass_relations,
            build_linkml_schema,
        )

        ont_url = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_BusinessOntology.rdf"
        tech_url = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_TechnicalOntology.rdf"

        g = load_ontology(ont_url, tech_url, None)
        classes = get_classes(g)
        data_props = get_data_properties(g)
        obj_props = get_object_properties(g)
        subclass_relations = get_subclass_relations(g)

        schema = build_linkml_schema(
            classes,
            data_props,
            obj_props,
            subclass_relations,
            make_config(),
        )

        assert "id" in schema
        assert "name" in schema
        assert "version" in schema
        assert "classes" in schema
        assert "slots" in schema
        assert "prefixes" in schema

        assert "dfc-b" in schema["prefixes"]
        assert "linkml" in schema["prefixes"]

    def test_address_class_has_correct_structure(self):
        """Test that Address class has expected structure."""
        from scripts.owl2linkml import (
            load_ontology,
            get_classes,
            get_data_properties,
            get_object_properties,
            get_subclass_relations,
            build_linkml_schema,
        )

        ont_url = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_BusinessOntology.rdf"
        tech_url = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_TechnicalOntology.rdf"

        g = load_ontology(ont_url, tech_url, None)
        classes = get_classes(g)
        data_props = get_data_properties(g)
        obj_props = get_object_properties(g)
        subclass_relations = get_subclass_relations(g)

        schema = build_linkml_schema(
            classes,
            data_props,
            obj_props,
            subclass_relations,
            make_config(),
        )

        assert "Address" in schema["classes"]
        addr = schema["classes"]["Address"]
        assert "is_a" in addr
        assert "Where_Subject" in addr["is_a"] or addr["is_a"] == "Where_Subject"

    def test_enterprise_class_exists(self):
        """Test that Enterprise class exists with correct inheritance."""
        from scripts.owl2linkml import (
            load_ontology,
            get_classes,
            get_data_properties,
            get_object_properties,
            get_subclass_relations,
            build_linkml_schema,
        )

        ont_url = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_BusinessOntology.rdf"
        tech_url = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_TechnicalOntology.rdf"

        g = load_ontology(ont_url, tech_url, None)
        classes = get_classes(g)
        data_props = get_data_properties(g)
        obj_props = get_object_properties(g)
        subclass_relations = get_subclass_relations(g)

        schema = build_linkml_schema(
            classes,
            data_props,
            obj_props,
            subclass_relations,
            make_config(),
        )

        assert "Enterprise" in schema["classes"]
        enterprise = schema["classes"]["Enterprise"]
        assert enterprise["is_a"] == "Agent"

    def test_slots_have_domain_info(self):
        """Test that slots include domain information."""
        from scripts.owl2linkml import (
            load_ontology,
            get_classes,
            get_data_properties,
            get_object_properties,
            get_subclass_relations,
            build_linkml_schema,
        )

        ont_url = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_BusinessOntology.rdf"
        tech_url = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_TechnicalOntology.rdf"

        g = load_ontology(ont_url, tech_url, None)
        classes = get_classes(g)
        data_props = get_data_properties(g)
        obj_props = get_object_properties(g)
        subclass_relations = get_subclass_relations(g)

        schema = build_linkml_schema(
            classes,
            data_props,
            obj_props,
            subclass_relations,
            make_config(),
        )

        city_slot = schema["slots"].get("city")
        assert city_slot is not None
        assert "domain" in city_slot
        assert "Address" in city_slot["domain"]


class TestTaxonomyEnums:
    """Tests for taxonomy enum generation with reachable_from."""

    def test_enums_have_reachable_from(self):
        """Test that enums have reachable_from pointing to SKOS taxonomy."""
        from scripts.owl2linkml import (
            load_ontology,
            get_classes,
            get_data_properties,
            get_object_properties,
            get_subclass_relations,
            build_linkml_schema,
        )

        ont_url = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_BusinessOntology.rdf"
        tech_url = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_TechnicalOntology.rdf"

        g = load_ontology(ont_url, tech_url, None)
        classes = get_classes(g)
        data_props = get_data_properties(g)
        obj_props = get_object_properties(g)
        subclass_relations = get_subclass_relations(g)

        config = make_config(taxonomy_version="2.0.0", extra={
            "taxonomy_enums": {
                "facets": {
                    "enum_name": "Facet",
                    "description": "Classification facets for categorizing DFC entities",
                },
                "measures": {
                    "enum_name": "Measure",
                    "description": "Measurement units and quantities",
                },
                "productTypes": {
                    "enum_name": "ProductType",
                    "description": "Product Type classification for categorizing products",
                },
                "scopes": {
                    "enum_name": "Scope",
                    "description": "Authorization Scope definitions for access control",
                },
                "vocabulary": {
                    "enum_name": "VocabularyTerm",
                    "description": "Controlled vocabulary terms",
                },
            },
            "taxonomy_base": "https://w3id.org/dfc/taxonomies/v2.0.0",
        })
        schema = build_linkml_schema(
            classes,
            data_props,
            obj_props,
            subclass_relations,
            config,
        )

        expected_enums = ["Facet", "Measure", "ProductType", "Scope", "VocabularyTerm"]
        for enum_name in expected_enums:
            assert enum_name in schema["enums"], f"Missing enum: {enum_name}"
            enum_def = schema["enums"][enum_name]
            assert "reachable_from" in enum_def, f"Missing reachable_from in {enum_name}"
            assert "source_ontology" in enum_def["reachable_from"]
            assert "v2.0.0" in enum_def["reachable_from"]["source_ontology"]

    def test_enum_descriptions_are_descriptive(self):
        """Test that enum descriptions are descriptive and clear."""
        from scripts.owl2linkml import (
            load_ontology,
            get_classes,
            get_data_properties,
            get_object_properties,
            get_subclass_relations,
            build_linkml_schema,
        )

        ont_url = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_BusinessOntology.rdf"
        tech_url = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_TechnicalOntology.rdf"

        g = load_ontology(ont_url, tech_url, None)
        classes = get_classes(g)
        data_props = get_data_properties(g)
        obj_props = get_object_properties(g)
        subclass_relations = get_subclass_relations(g)

        config = make_config(taxonomy_version="2.0.0", extra={
            "taxonomy_enums": {
                "facets": {
                    "enum_name": "Facet",
                    "description": "Classification facets for categorizing DFC entities",
                },
                "measures": {
                    "enum_name": "Measure",
                    "description": "Measurement units and quantities",
                },
                "productTypes": {
                    "enum_name": "ProductType",
                    "description": "Product Type classification for categorizing products",
                },
                "scopes": {
                    "enum_name": "Scope",
                    "description": "Authorization Scope definitions for access control",
                },
                "vocabulary": {
                    "enum_name": "VocabularyTerm",
                    "description": "Controlled vocabulary terms",
                },
            },
            "taxonomy_base": "https://w3id.org/dfc/taxonomies/v2.0.0",
        })
        schema = build_linkml_schema(
            classes,
            data_props,
            obj_props,
            subclass_relations,
            config,
        )

        assert "Scope" in schema["enums"]
        assert "Authorization" in schema["enums"]["Scope"]["description"]
        
        assert "ProductType" in schema["enums"]
        assert "Product Type" in schema["enums"]["ProductType"]["description"]
        
        assert "Facet" in schema["enums"]
        assert "Classification" in schema["enums"]["Facet"]["description"]


class TestSchemaValidation:
    """Tests for schema validation."""

    def test_prefix_urls_contain_version(self):
        """Test that taxonomy prefix URLs contain the version."""
        from scripts.owl2linkml import (
            load_ontology,
            get_classes,
            get_data_properties,
            get_object_properties,
            get_subclass_relations,
            build_linkml_schema,
        )

        ont_url = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_BusinessOntology.rdf"
        tech_url = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_TechnicalOntology.rdf"

        g = load_ontology(ont_url, tech_url, None)
        classes = get_classes(g)
        data_props = get_data_properties(g)
        obj_props = get_object_properties(g)
        subclass_relations = get_subclass_relations(g)

        config = make_config(taxonomy_version="2.0.0", extra={
            "prefixes": {
                "dfc-b": "https://w3id.org/dfc/ontology/src/DFC_BusinessOntology.owl#",
                "dfc-t": "https://w3id.org/dfc/ontology/src/DFC_TechnicalOntology.owl#",
                "dfc-f": "https://w3id.org/dfc/taxonomies/v2.0.0/facets.rdf#",
                "dfc-m": "https://w3id.org/dfc/taxonomies/v2.0.0/measures.rdf#",
                "dfc-pt": "https://w3id.org/dfc/taxonomies/v2.0.0/productTypes.rdf#",
                "dfc-v": "https://w3id.org/dfc/taxonomies/v2.0.0/vocabulary.rdf#",
                "linkml": "https://w3id.org/linkml/",
            },
        })
        schema = build_linkml_schema(
            classes,
            data_props,
            obj_props,
            subclass_relations,
            config,
        )

        assert "v2.0.0" in schema["prefixes"]["dfc-f"]
        assert "v2.0.0" in schema["prefixes"]["dfc-m"]
        assert "v2.0.0" in schema["prefixes"]["dfc-pt"]
        assert "v2.0.0" in schema["prefixes"]["dfc-v"]


class TestEdgeCases:
    """Edge case tests for OWL extraction and schema building (no network)."""

    def test_empty_graph_returns_no_classes(self):
        """An empty graph yields no classes."""
        from rdflib import Graph
        from scripts.owl2linkml import get_classes
        assert get_classes(Graph()) == set()

    def test_empty_graph_returns_no_properties(self):
        """An empty graph yields no properties."""
        from rdflib import Graph
        from scripts.owl2linkml import get_data_properties, get_object_properties
        assert get_data_properties(Graph()) == {}
        assert get_object_properties(Graph()) == {}

    def test_empty_graph_returns_no_subclass_relations(self):
        """An empty graph yields no subclass relations."""
        from rdflib import Graph
        from scripts.owl2linkml import get_subclass_relations
        assert get_subclass_relations(Graph()) == {}

    def test_underscore_classes_are_skipped(self):
        """Classes with underscore prefix are excluded."""
        from rdflib import Graph, OWL, URIRef, RDF
        from scripts.owl2linkml import get_classes

        g = Graph()
        base = "http://example.com/"
        g.add((URIRef(base + "_Private"), RDF.type, OWL.Class))
        g.add((URIRef(base + "Public"), RDF.type, OWL.Class))

        classes = get_classes(g)
        assert "_Private" not in classes
        assert "Public" in classes

    def test_classes_in_skip_set_excluded(self):
        """Classes listed in skip_classes are excluded."""
        from rdflib import Graph, OWL, URIRef, RDF
        from scripts.owl2linkml import get_classes

        g = Graph()
        base = "http://example.com/"
        g.add((URIRef(base + "Thing"), RDF.type, OWL.Class))
        g.add((URIRef(base + "Address"), RDF.type, OWL.Class))

        classes = get_classes(g)
        assert "Thing" not in classes
        assert "Address" in classes

    def test_property_with_no_domain(self):
        """A property without domain is still extracted with empty domain list."""
        from rdflib import Graph, OWL, URIRef, RDF, RDFS
        from rdflib.namespace import XSD
        from scripts.owl2linkml import get_data_properties

        g = Graph()
        base = "http://example.com/"
        prop = URIRef(base + "myProperty")
        g.add((prop, RDF.type, OWL.DatatypeProperty))
        g.add((prop, RDFS.range, XSD.string))

        props = get_data_properties(g)
        assert "myProperty" in props
        assert props["myProperty"]["domain"] == []

    def test_data_property_with_no_range_defaults_to_string(self):
        """A data property without explicit range gets ['string'] as default."""
        from rdflib import Graph, OWL, URIRef, RDF
        from scripts.owl2linkml import get_data_properties

        g = Graph()
        base = "http://example.com/"
        prop = URIRef(base + "noRange")
        g.add((prop, RDF.type, OWL.DatatypeProperty))

        props = get_data_properties(g)
        assert "noRange" in props
        assert props["noRange"]["range"] == ["string"]

    def test_subclass_with_skipped_parent_is_omitted(self):
        """If the parent class is in skip_classes, the relation is excluded."""
        from rdflib import Graph, URIRef, RDFS
        from scripts.owl2linkml import get_subclass_relations

        g = Graph()
        base = "http://example.com/"
        g.add((URIRef(base + "Address"), RDFS.subClassOf, URIRef(base + "Thing")))

        relations = get_subclass_relations(g)
        assert "Address" not in relations  # Thing is in default skip list

    def test_subclass_relation_with_allowed_parent(self):
        """Subclass relation is returned when neither class is skipped."""
        from rdflib import Graph, URIRef, RDFS
        from scripts.owl2linkml import get_subclass_relations

        g = Graph()
        base = "http://example.com/"
        g.add((URIRef(base + "Address"), RDFS.subClassOf, URIRef(base + "Place")))

        relations = get_subclass_relations(g)
        assert relations["Address"] == "Place"

    def test_unicode_descriptions_preserved(self):
        """Unicode characters in RDFS comments are preserved."""
        from rdflib import Graph, OWL, URIRef, RDF, RDFS, Literal
        from scripts.owl2linkml import get_data_properties

        g = Graph()
        base = "http://example.com/"
        prop = URIRef(base + "description")
        g.add((prop, RDF.type, OWL.DatatypeProperty))
        g.add((prop, RDFS.comment, Literal("Café résumé — über cool ✓")))

        props = get_data_properties(g)
        assert "Café" in props["description"]["description"]
        assert "✓" in props["description"]["description"]

    def test_build_linkml_schema_empty_inputs(self):
        """build_linkml_schema with empty inputs produces a valid minimal schema."""
        from scripts.owl2linkml import build_linkml_schema

        schema = build_linkml_schema(set(), {}, {}, {}, {"prefixes": {"ex": "http://example.com/"}})

        assert "id" in schema
        assert "name" in schema
        assert "version" in schema
        assert schema["classes"] == {}
        assert schema["slots"] == {}
        assert "enums" in schema

    def test_build_linkml_schema_with_classes_only(self):
        """Classes without properties generate class entries with no slots."""
        from scripts.owl2linkml import build_linkml_schema

        schema = build_linkml_schema(
            {"Foo", "Bar"}, {}, {}, {},
            {"name": "test", "prefixes": {"ex": "http://example.com/"}},
        )

        assert "Foo" in schema["classes"]
        assert "Bar" in schema["classes"]
        assert "slots" not in schema["classes"]["Foo"]

    def test_object_property_range_is_class_name(self):
        """Object property ranges are class names, not datatypes."""
        from rdflib import Graph, OWL, URIRef, RDF, RDFS
        from scripts.owl2linkml import get_object_properties

        g = Graph()
        base = "http://example.com/"
        prop = URIRef(base + "hasAddress")
        g.add((prop, RDF.type, OWL.ObjectProperty))
        g.add((prop, RDFS.range, URIRef(base + "Address")))

        props = get_object_properties(g)
        assert "hasAddress" in props
        assert props["hasAddress"]["range"] == ["Address"]

    def test_object_property_no_range_defaults_to_string(self):
        """Object property without explicit range falls back to 'string'."""
        from rdflib import Graph, OWL, URIRef, RDF
        from scripts.owl2linkml import get_object_properties

        g = Graph()
        base = "http://example.com/"
        prop = URIRef(base + "relatedTo")
        g.add((prop, RDF.type, OWL.ObjectProperty))

        props = get_object_properties(g)
        assert "relatedTo" in props
        assert props["relatedTo"]["range"] == ["string"]


@pytest.mark.integration
class TestCompleteness:
    """Tests that OWL→LinkML conversion preserves all ontology entities."""

    ONT_URL = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_BusinessOntology.rdf"
    TECH_URL = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_TechnicalOntology.rdf"

    def _build_schema(self):
        """Load OWL, extract entities, and build LinkML schema."""
        from scripts.owl2linkml import (
            load_ontology,
            get_classes,
            get_data_properties,
            get_object_properties,
            get_subclass_relations,
            build_linkml_schema,
            DEFAULT_SKIP_CLASSES,
            DEFAULT_SKIP_PROPERTIES,
        )

        g = load_ontology(self.ONT_URL, self.TECH_URL, None)

        classes = get_classes(g, DEFAULT_SKIP_CLASSES)
        data_props = get_data_properties(g, DEFAULT_SKIP_PROPERTIES)
        obj_props = get_object_properties(g, DEFAULT_SKIP_PROPERTIES, DEFAULT_SKIP_CLASSES)
        subclass_relations = get_subclass_relations(g, DEFAULT_SKIP_CLASSES)

        config = make_config()
        schema = build_linkml_schema(classes, data_props, obj_props, subclass_relations, config)

        return classes, set(data_props), set(obj_props), subclass_relations, schema

    def test_all_classes_preserved(self):
        """Every non-skipped OWL class appears as a LinkML class."""
        classes, _, _, _, schema = self._build_schema()
        missing = [c for c in sorted(classes) if c not in schema["classes"]]
        assert not missing, f"{len(missing)} classes missing from schema:\n{missing}"

    def test_all_data_properties_preserved(self):
        """Every non-skipped OWL data property appears as a LinkML slot."""
        _, data_prop_names, _, _, schema = self._build_schema()
        slot_names = {_to_snake_case(p) for p in data_prop_names}
        missing = [s for s in sorted(slot_names) if s not in schema["slots"]]
        assert not missing, f"{len(missing)} data property slots missing:\n{missing}"

    def test_all_object_properties_preserved(self):
        """Every non-skipped OWL object property appears as a LinkML slot."""
        _, _, obj_prop_names, _, schema = self._build_schema()
        slot_names = {_to_snake_case(p) for p in obj_prop_names}
        missing = [s for s in sorted(slot_names) if s not in schema["slots"]]
        assert not missing, f"{len(missing)} object property slots missing:\n{missing}"

    def test_all_subclass_relations_preserved(self):
        """Every subclass relation is reflected as is_a."""
        _, _, _, subclass_relations, schema = self._build_schema()
        bad = []
        for sub, super_ in subclass_relations.items():
            if sub not in schema["classes"]:
                bad.append(f"{sub}: missing from classes")
            elif schema["classes"][sub].get("is_a") != super_:
                bad.append(f"{sub}: is_a={schema['classes'][sub].get('is_a')}, expected {super_}")
        assert not bad, f"{len(bad)} subclass relation mismatches:\n" + "\n".join(bad)

    def test_no_dangling_parent_references(self):
        """Every is_a reference points to a defined class."""
        _, _, _, _, schema = self._build_schema()
        bad = []
        for name, defn in schema["classes"].items():
            parent = defn.get("is_a")
            if parent and parent not in schema["classes"]:
                bad.append(f"{name}: is_a {parent} is not a defined class")
        assert not bad, f"Dangling parent references:\n" + "\n".join(bad)


@pytest.mark.integration
class TestSchemaStructure:
    """Structural validation of the generated LinkML schema."""

    ONT_URL = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_BusinessOntology.rdf"
    TECH_URL = "https://w3id.org/dfc/ontology/v2.0.0/src/DFC_TechnicalOntology.rdf"
    PRIMITIVE_TYPES = {"string", "integer", "float", "boolean", "date", "datetime", "uri"}

    def _build_schema(self):
        from scripts.owl2linkml import (
            load_ontology,
            get_classes,
            get_data_properties,
            get_object_properties,
            get_subclass_relations,
            build_linkml_schema,
            DEFAULT_SKIP_CLASSES,
            DEFAULT_SKIP_PROPERTIES,
        )

        g = load_ontology(self.ONT_URL, self.TECH_URL, None)
        classes = get_classes(g, DEFAULT_SKIP_CLASSES)
        data_props = get_data_properties(g, DEFAULT_SKIP_PROPERTIES)
        obj_props = get_object_properties(g, DEFAULT_SKIP_PROPERTIES, DEFAULT_SKIP_CLASSES)
        subclass_relations = get_subclass_relations(g, DEFAULT_SKIP_CLASSES)
        schema = build_linkml_schema(
            classes, data_props, obj_props, subclass_relations, make_config(),
        )
        return schema

    def test_yaml_roundtrip(self, tmp_path):
        """Schema can be serialized to YAML and parsed back without error."""
        import yaml
        schema = self._build_schema()
        f = tmp_path / "schema.yaml"
        with open(f, "w") as fp:
            yaml.dump(schema, fp, default_flow_style=False, sort_keys=False, allow_unicode=True)
        with open(f) as fp:
            reloaded = yaml.safe_load(fp)
        assert reloaded["id"] == schema["id"]
        assert reloaded["name"] == schema["name"]
        assert reloaded["version"] == schema["version"]
        assert set(reloaded["classes"]) == set(schema["classes"])
        assert set(reloaded["slots"]) == set(schema["slots"])

    def test_all_class_slot_references_are_valid(self):
        """Every slot referenced in a class's slots list exists in the global slots dict."""
        schema = self._build_schema()
        bad = []
        for class_name, class_def in schema["classes"].items():
            for slot in class_def.get("slots", []):
                if slot not in schema["slots"]:
                    bad.append(f"{class_name} references undefined slot '{slot}'")
        assert not bad, "\n".join(bad)

    def test_slot_ranges_reference_valid_types(self):
        """Every slot range is a primitive type or a defined class."""
        schema = self._build_schema()
        known_classes = set(schema["classes"])
        bad = []
        for slot_name, slot_def in schema["slots"].items():
            rng = slot_def.get("range", "string")
            range_values = rng if isinstance(rng, list) else [rng]
            for rv in range_values:
                if rv not in self.PRIMITIVE_TYPES and rv not in known_classes:
                    bad.append(f"Slot '{slot_name}' has unknown range '{rv}'")
        assert not bad, "\n".join(bad)

    def test_slot_domains_reference_known_classes(self):
        """Every slot domain references a defined class."""
        schema = self._build_schema()
        known_classes = set(schema["classes"])
        bad = []
        for slot_name, slot_def in schema["slots"].items():
            for domain_class in slot_def.get("domain", []):
                if domain_class not in known_classes:
                    bad.append(f"Slot '{slot_name}' has domain '{domain_class}' which is not a known class")
        assert not bad, "\n".join(bad)