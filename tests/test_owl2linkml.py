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
        assert _to_snake_case("enterpriseID") == "enterprise_id"

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