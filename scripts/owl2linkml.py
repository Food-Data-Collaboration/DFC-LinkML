#!/usr/bin/env python3
"""
OWL to LinkML Converter.

Converts OWL/RDF ontologies to LinkML schemas. Can be used with DFC ontologies
or generic OWL ontologies.

Usage:
    python3 owl2linkml.py --ontology-url URL --output schema.yaml

    # Use DFC config for DFC ontology
    python3 owl2linkml.py --config config/dfc-default.yaml --ontology-version 2.0.0

    # Generic OWL conversion
    python3 owl2linkml.py --ontology-url https://example.com/ontology.rdf --output my-schema.yaml

Options:
    --config          Path to YAML config file (optional)
    --ontology-url    Direct URL to OWL/RDF ontology
    --technical-url   URL to technical/imports ontology
    --ontology-version  Version string for URL generation
    --taxonomy-version  Version string for taxonomy enum URLs
    --output          Output file path
"""

import argparse
import json
import logging
import re
import sys
import urllib.request
from pathlib import Path
from typing import Optional

import click
import yaml
from rdflib import Graph, Namespace, URIRef
from rdflib.namespace import OWL, RDF, RDFS, SKOS

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
logger = logging.getLogger(__name__)

SCHEMA_BASE = "https://example.org/ontology"

DEFAULT_SKIP_CLASSES = {
    "Thing",
    "Entity",
    "topObjectProperty",
    "topDataProperty",
    "topAnnotationProperty",
}

DEFAULT_SKIP_PROPERTIES = {
    "topObjectProperty",
    "topDataProperty",
    "topAnnotationProperty",
    "deprecated",
    "versionInfo",
    "isDefinedBy",
    "seeAlso",
    "label",
    "comment",
}

DTYPE_MAP = {
    "http://www.w3.org/2001/XMLSchema#string": "string",
    "http://www.w3.org/2001/XMLSchema#integer": "integer",
    "http://www.w3.org/2001/XMLSchema#int": "integer",
    "http://www.w3.org/2001/XMLSchema#float": "float",
    "http://www.w3.org/2001/XMLSchema#double": "float",
    "http://www.w3.org/2001/XMLSchema#boolean": "boolean",
    "http://www.w3.org/2001/XMLSchema#date": "date",
    "http://www.w3.org/2001/XMLSchema#dateTime": "datetime",
    "http://www.w3.org/2001/XMLSchema#anyURI": "uri",
    "http://www.w3.org/2001/XMLSchema#NCName": "string",
    "http://www.w3.org/2001/XMLSchema#ID": "string",
    "http://www.w3.org/2001/XMLSchema#anyType": "string",
    "http://www.w3.org/2000/01/rdf-schema#Literal": "string",
}


def parse_args(argv: Optional[list[str]] = None) -> argparse.Namespace:
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(
        description="Convert OWL/RDF ontology to LinkML schema.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument(
        "--config",
        "-c",
        help="Path to YAML config file with ontology-specific settings.",
    )
    parser.add_argument(
        "--ontology-url",
        help="Full URL to OWL/RDF ontology.",
    )
    parser.add_argument(
        "--technical-url",
        help="Full URL to Technical/imports ontology.",
    )
    parser.add_argument(
        "--ontology-version",
        default="1.0.0",
        help="Version string (used in default URL generation). Default: 1.0.0",
    )
    parser.add_argument(
        "--taxonomy-version",
        help="Version for taxonomy enum URLs. Defaults to ontology version.",
    )
    parser.add_argument(
        "--output",
        "-o",
        help="Output file path.",
    )
    parser.add_argument(
        "--no-download",
        action="store_true",
        help="Use cached local file instead of downloading.",
    )
    parser.add_argument(
        "--input-file",
        help="Path to local OWL file (for offline use).",
    )
    parser.add_argument(
        "--verbose",
        "-v",
        action="store_true",
        help="Enable verbose output.",
    )
    return parser.parse_args(argv)


def get_ontology_url(version: str, custom_url: Optional[str]) -> str:
    """Build versioned ontology URL.

    Uses .rdf format (standard RDF/XML) instead of .owl (OWL/XML)
    because rdflib cannot parse the OWL/XML IRI element format.
    """
    if custom_url:
        return custom_url
    return f"https://w3id.org/dfc/ontology/v{version}/src/DFC_BusinessOntology.rdf"


def get_technical_url(version: str, custom_url: Optional[str]) -> str:
    """Build versioned technical ontology URL.

    Uses .rdf format for rdflib compatibility.
    """
    if custom_url:
        return custom_url
    return f"https://w3id.org/dfc/ontology/v{version}/src/DFC_TechnicalOntology.rdf"


def get_fullmodel_url(version: str, custom_url: Optional[str]) -> str:
    """Build versioned full model URL (includes business + technical)."""
    if custom_url:
        return custom_url
    return f"https://w3id.org/dfc/ontology/v{version}/src/DFC_FullModel.rdf"


def load_ontology(
    ontology_url: str,
    technical_url: Optional[str] = None,
    local_file: Optional[str] = None,
) -> Graph:
    """Load OWL ontology and optionally merge with technical ontology."""
    g = Graph()

    if local_file and Path(local_file).exists():
        logger.info(f"Loading from local file: {local_file}")
        g.parse(local_file, format="xml")
    else:
        logger.info(f"Downloading ontology from: {ontology_url}")
        g.parse(ontology_url, format="xml")

    if technical_url:
        logger.info(f"Loading technical ontology from: {technical_url}")
        try:
            g.parse(technical_url, format="xml")
        except Exception as e:
            logger.warning(f"Could not load technical ontology: {e}")

    logger.info(f"Loaded {len(g)} triples")
    return g


def get_classes(g: Graph, skip_classes: set[str] = None) -> set[str]:
    """Extract all class IRIs from the ontology."""
    if skip_classes is None:
        skip_classes = DEFAULT_SKIP_CLASSES
    classes = set()
    for s in g.subjects(RDF.type, OWL.Class):
        local = _local_name(s)
        if local and local not in skip_classes and not local.startswith("_"):
            classes.add(local)
    return classes


def get_data_properties(g: Graph, skip_properties: set[str] = None) -> dict[str, dict]:
    """Extract data properties with their domains and ranges."""
    if skip_properties is None:
        skip_properties = DEFAULT_SKIP_PROPERTIES
    props = {}
    for prop in g.subjects(RDF.type, OWL.DatatypeProperty):
        name = _local_name(prop)
        if not name or name in skip_properties:
            continue

        domains = _get_domains(g, prop, OWL.DatatypeProperty)
        ranges = _get_ranges(g, prop, OWL.DatatypeProperty)
        description = _get_description(g, prop)

        props[name] = {
            "domain": domains,
            "range": ranges if len(ranges) == 1 else "string",
            "description": description or f"Data property from OWL: {name}",
        }
    return props


def get_object_properties(g: Graph, skip_properties: set[str] = None, skip_classes: set[str] = None) -> dict[str, dict]:
    """Extract object properties with their domains and ranges."""
    if skip_properties is None:
        skip_properties = DEFAULT_SKIP_PROPERTIES
    if skip_classes is None:
        skip_classes = DEFAULT_SKIP_CLASSES
    props = {}
    for prop in g.subjects(RDF.type, OWL.ObjectProperty):
        name = _local_name(prop)
        if not name or name in skip_properties:
            continue

        domains = _get_domains(g, prop, OWL.ObjectProperty)
        ranges = _get_object_ranges(g, prop, skip_classes)
        description = _get_description(g, prop)

        props[name] = {
            "domain": domains,
            "range": ranges if len(ranges) == 1 else "string",
            "description": description or f"Object property from OWL: {name}",
        }
    return props


def get_subclass_relations(g: Graph, skip_classes: set[str] = None) -> dict[str, str]:
    """Extract direct subclass relations."""
    if skip_classes is None:
        skip_classes = DEFAULT_SKIP_CLASSES
    relations = {}
    for sub_cls, super_cls in g.subject_objects(RDFS.subClassOf):
        sub_name = _local_name(sub_cls)
        super_name = _local_name(super_cls)

        if sub_name and super_name and sub_name not in skip_classes:
            if super_name not in skip_classes:
                relations[sub_name] = super_name
    return relations


def _local_name(iri: URIRef) -> Optional[str]:
    """Extract local name from IRI."""
    if isinstance(iri, URIRef):
        iri_str = str(iri)
        if "#" in iri_str:
            return iri_str.split("#")[-1]
        elif "/" in iri_str:
            return iri_str.split("/")[-1]
    return None


def _get_domains(
    g: Graph, prop: URIRef, prop_type: URIRef
) -> list[str]:
    """Get domain classes for a property."""
    domains = []
    for domain_uri in g.objects(prop, RDFS.domain):
        classes = _extract_classes_from_domain(g, domain_uri)
        domains.extend(classes)
    return list(set(domains))


def _extract_classes_from_domain(g: Graph, domain_node) -> list[str]:
    """Extract classes from a domain expression (handles unionOf)."""
    classes = []

    if isinstance(domain_node, URIRef):
        name = _local_name(domain_node)
        if name:
            classes.append(name)
    elif (union_of := _get_property(g, domain_node, OWL.unionOf)):
        for item in g.items(union_of):
            name = _local_name(item)
            if name:
                classes.append(name)
    elif (intersection_of := _get_property(g, domain_node, OWL.intersectionOf)):
        for item in g.items(intersection_of):
            name = _local_name(item)
            if name:
                classes.append(name)

    return classes


def _get_ranges(g: Graph, prop: URIRef, prop_type: URIRef) -> list[str]:
    """Get range datatypes for a data property."""
    ranges = []
    for range_node in g.objects(prop, RDFS.range):
        dtype = _resolve_datatype(range_node)
        if dtype:
            ranges.append(dtype)
    return list(set(ranges)) or ["string"]


def _get_object_ranges(g: Graph, prop: URIRef, skip_classes: set[str] = None) -> list[str]:
    """Get range classes for an object property."""
    if skip_classes is None:
        skip_classes = DEFAULT_SKIP_CLASSES
    ranges = []
    for range_node in g.objects(prop, RDFS.range):
        if isinstance(range_node, URIRef):
            name = _local_name(range_node)
            if name and name not in skip_classes:
                ranges.append(name)
        elif (union_of := _get_property(g, range_node, OWL.unionOf)):
            for item in g.items(union_of):
                name = _local_name(item)
                if name and name not in skip_classes:
                    ranges.append(name)
    return list(set(ranges)) or ["string"]


def _resolve_datatype(range_node) -> Optional[str]:
    """Resolve datatype IRI to LinkML type."""
    if isinstance(range_node, URIRef):
        iri_str = str(range_node)
        if iri_str in DTYPE_MAP:
            return DTYPE_MAP[iri_str]
        if "XSD" in iri_str or "xsd" in iri_str:
            for xsd_key, linkml_type in DTYPE_MAP.items():
                if xsd_key in iri_str:
                    return linkml_type
    return None


def _get_description(g: Graph, entity: URIRef) -> Optional[str]:
    """Get rdfs:comment or skos:definition annotation."""
    for comment in g.objects(entity, RDFS.comment):
        return str(comment)
    return None


def _get_property(g: Graph, node, prop) -> Optional[object]:
    """Get a single property value."""
    for value in g.objects(node, prop):
        return value
    return None


def build_linkml_schema(
    classes: set[str],
    data_props: dict,
    obj_props: dict,
    subclass_relations: dict[str, str],
    config: dict,
) -> dict:
    """Build LinkML schema dictionary from config.
    
    Args:
        classes: Set of class names extracted from OWL
        data_props: Dict of data property info
        obj_props: Dict of object property info
        subclass_relations: Dict mapping class to parent class
        config: Configuration dict with ontology settings
    """
    ontology_version = config.get("ontology_version", "1.0.0")
    taxonomy_version = config.get("taxonomy_version", ontology_version)
    
    prefixes = dict(config.get("prefixes", {}))
    if "linkml" not in prefixes:
        prefixes["linkml"] = "https://w3id.org/linkml/"
    
    schema = {
        "id": config.get("id", f"https://example.org/{config.get('name', 'ontology')}"),
        "name": config.get("name", "ontology"),
        "title": config.get("title", "Generated from OWL"),
        "description": config.get("description", "Generated LinkML schema"),
        "version": ontology_version,
        "prefixes": prefixes,
        "imports": ["linkml:types"],
        "default_prefix": config.get("default_prefix", list(prefixes.keys())[0] if prefixes else "ontology"),
        "classes": {},
        "slots": {},
        "enums": {},
    }
    
    if config.get("ontology_version"):
        schema["ontology_version"] = ontology_version
    if config.get("taxonomy_version"):
        schema["taxonomy_version"] = taxonomy_version
    
    taxonomy_enums_config = config.get("taxonomy_enums", {})
    if taxonomy_enums_config:
        taxonomy_base = config.get("taxonomy_base", "https://w3id.org/dfc/taxonomies")
        schema["enums"] = build_taxonomy_enums(taxonomy_enums_config, taxonomy_version, taxonomy_base)

    slot_definitions = {}

    for prop_name, prop_info in data_props.items():
        slot_name = _to_snake_case(prop_name)
        slot_def = {
            "description": prop_info["description"],
            "range": prop_info["range"],
            "domain": prop_info.get("domain", []),
        }
        slot_definitions[slot_name] = slot_def

    for prop_name, prop_info in obj_props.items():
        slot_name = _to_snake_case(prop_name)
        if slot_name in slot_definitions:
            continue
        slot_def = {
            "description": prop_info["description"],
            "range": prop_info["range"],
            "domain": prop_info.get("domain", []),
        }
        slot_definitions[slot_name] = slot_def

    for class_name in sorted(classes):
        description_template = config.get("class_description_template", "OWL class: {class_name}")
        class_def = {
            "description": description_template.format(class_name=class_name),
        }

        if class_name in subclass_relations:
            class_def["is_a"] = subclass_relations[class_name]

        class_slots = []
        for slot_name, slot_def in slot_definitions.items():
            if slot_def.get("domain") and class_name in slot_def.get("domain", []):
                class_slots.append(slot_name)

        if class_slots:
            class_def["slots"] = class_slots

        schema["classes"][class_name] = class_def

    schema["slots"] = slot_definitions

    return schema


def _to_snake_case(name: str) -> str:
    """Convert CamelCase to snake_case with special case handling."""
    name = re.sub(r"(?<!^)(?=[A-Z])", "_", name)
    name = name.lower()
    
    special_cases = {
        "u_r_l": "url",
        "v_a_tnumber": "vat_number",
        "v_a_trate": "vat_rate",
        "v_a_tstatus": "vat_status",
        "enterprise_i_d": "enterprise_id",
        "operator_i_d": "operator_id",
    }
    return special_cases.get(name, name)


def fix_class_references(schema: dict) -> None:
    """Fix class references to use proper CamelCase names."""
    pass


def build_taxonomy_enums(taxonomy_enums_config: dict, taxonomy_version: str, taxonomy_base: str) -> dict:
    """Build enum definitions with reachable_from pointing to SKOS taxonomy files.
    
    Args:
        taxonomy_enums_config: Dict of enum configs from config file
        taxonomy_version: Version string for taxonomy
        taxonomy_base: Base URL for taxonomy files (should be without /v{version})
        
    Returns:
        Dict of enum definitions
    """
    enums = {}
    versioned_base = f"{taxonomy_base}/v{taxonomy_version}"
    for key, config in taxonomy_enums_config.items():
        enum_name = config.get("enum_name", key)
        description = config.get("description", f"Values from {key} taxonomy")
        source_path = config.get("source_path", f"{key}.json")
        source_class = config.get("source_class", "Concept")
        path_navigation = config.get("path_navigation", "skos:hasTopConcept/*")
        
        source_url = f"{versioned_base}/{source_path}"
        enums[enum_name] = {
            "description": description,
            "reachable_from": {
                "source_ontology": source_url,
                "source_class": source_class,
                "path_navigation": path_navigation,
            },
        }
    return enums


def load_config(config_path: Optional[str]) -> dict:
    """Load configuration from YAML file.
    
    Returns empty dict if no config file specified.
    """
    if not config_path:
        return {}
    with open(config_path) as f:
        return yaml.safe_load(f)


def get_default_url(version: str, base_url: str, filename: str) -> str:
    """Generate versioned URL for ontology file."""
    return f"{base_url}/v{version}/{filename}"


def save_schema(schema: dict, output_path: Path) -> None:
    """Save LinkML schema to YAML file."""
    with open(output_path, "w") as f:
        yaml.dump(
            schema,
            f,
            default_flow_style=False,
            sort_keys=False,
            allow_unicode=True,
            width=200,
        )
    logger.info(f"Schema saved to: {output_path}")


@click.command()
@click.option(
    "--config",
    "-c",
    "config_path",
    help="Path to YAML config file with ontology-specific settings.",
)
@click.option(
    "--ontology-url",
    help="Full URL to OWL/RDF ontology.",
)
@click.option(
    "--technical-url",
    help="Full URL to Technical/imports ontology.",
)
@click.option(
    "--ontology-version",
    default="1.0.0",
    help="Version string (used in default URL generation). Default: 1.0.0",
)
@click.option(
    "--taxonomy-version",
    help="Version for taxonomy enum URLs. Defaults to ontology version.",
)
@click.option(
    "--output",
    "-o",
    help="Output file path.",
)
@click.option(
    "--input-file",
    help="Path to local OWL file (for offline use).",
)
@click.option(
    "--verbose",
    "-v",
    is_flag=True,
    help="Enable verbose output.",
)
def main(
    config_path: Optional[str],
    ontology_url: Optional[str],
    technical_url: Optional[str],
    ontology_version: str,
    taxonomy_version: Optional[str],
    output: Optional[str],
    input_file: Optional[str],
    verbose: bool,
) -> None:
    """Convert OWL/RDF ontology to LinkML schema."""
    if verbose:
        logging.getLogger().setLevel(logging.DEBUG)

    config = load_config(config_path)

    if taxonomy_version is None:
        taxonomy_version = config.get("taxonomy_version", ontology_version)

    if ontology_url is None:
        default_base = config.get("ontology_base", "https://w3id.org/dfc/ontology")
        ontology_filename = config.get("ontology_filename", "src/DFC_BusinessOntology.rdf")
        technical_filename = config.get("technical_filename", "src/DFC_TechnicalOntology.rdf")
        ontology_url = get_default_url(ontology_version, default_base, ontology_filename)
        technical_url = get_default_url(ontology_version, default_base, technical_filename)

    logger.info(f"Ontology URL: {ontology_url}")
    logger.info(f"Ontology version: {ontology_version}")
    if config.get("taxonomy_enums"):
        logger.info(f"Taxonomy version: {taxonomy_version}")

    g = load_ontology(ontology_url, technical_url, input_file)

    skip_classes = set(config.get("skip_classes", [])) or DEFAULT_SKIP_CLASSES
    skip_properties = set(config.get("skip_properties", [])) or DEFAULT_SKIP_PROPERTIES

    logger.info("Extracting classes...")
    classes = get_classes(g, skip_classes)
    logger.info(f"Found {len(classes)} classes")

    logger.info("Extracting data properties...")
    data_props = get_data_properties(g, skip_properties)
    logger.info(f"Found {len(data_props)} data properties")

    logger.info("Extracting object properties...")
    obj_props = get_object_properties(g, skip_properties, skip_classes)
    logger.info(f"Found {len(obj_props)} object properties")

    logger.info("Extracting subclass relations...")
    subclass_relations = get_subclass_relations(g, skip_classes)
    logger.info(f"Found {len(subclass_relations)} subclass relations")

    config["ontology_version"] = ontology_version
    config["taxonomy_version"] = taxonomy_version
    if "id" not in config:
        config["id"] = f"https://example.org/{config.get('name', 'ontology')}"

    schema = build_linkml_schema(
        classes,
        data_props,
        obj_props,
        subclass_relations,
        config,
    )

    if output is None:
        name = config.get("name", "schema")
        output = f"{name}_{ontology_version.replace('.', '_')}.yaml"

    output_path = Path(output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    save_schema(schema, output_path)

    logger.info(f"Schema saved to: {output_path}")
    logger.info("Done!")


if __name__ == "__main__":
    main()