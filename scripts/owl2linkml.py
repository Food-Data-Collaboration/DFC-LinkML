#!/usr/bin/env python3
"""
OWL to LinkML Converter for DFC Business Ontology.

Downloads the DFC Business Ontology OWL file and converts it to a LinkML schema.
Supports versioned URLs via w3id.org redirects.

Usage:
    python3 owl2linkml.py [--ontology-version VERSION] [--taxonomy-version VERSION]
                          [--output FILE] [--include-technical]
                          [--ontology-url URL] [--technical-url URL]

Examples:
    # Convert latest (2.0.0) ontology with default taxonomy version
    python3 owl2linkml.py

    # Convert specific versions
    python3 owl2linkml.py --ontology-version 1.16.0 --taxonomy-version 1.16.0

    # Output to custom file with version in name
    python3 owl2linkml.py --output dfc_v2.0.0.yaml

    # Use custom URLs
    python3 owl2linkml.py --ontology-url https://example.com/ontology.owl
"""

import argparse
import logging
import re
import sys
from pathlib import Path
from typing import Optional

import click
import yaml
from rdflib import Graph, Namespace, URIRef
from rdflib.namespace import OWL, RDF, RDFS

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
logger = logging.getLogger(__name__)

DFC_B = Namespace("http://w3id.org/dfc/ontology/src/DFC_BusinessOntology.owl#")
DFC_T = Namespace("http://w3id.org/dfc/ontology/src/DFC_TechnicalOntology.owl#")
DFC_F = Namespace("http://w3id.org/dfc/taxonomies/facets.rdf#")
DFC_M = Namespace("http://w3id.org/dfc/taxonomies/measures.rdf#")
DFC_PT = Namespace("http://w3id.org/dfc/taxonomies/productTypes.rdf#")
DFC_V = Namespace("http://w3id.org/dfc/taxonomies/vocabulary.rdf#")

SCHEMA_BASE = "https://w3id.org/dfc/linkml"

SKIP_CLASSES = {
    "Thing",
    "Entity",
    "DFC_BusinessOntology_Subject",
    "DFC_BusinessOntology_Relation",
    "DFC_BusinessOntology_Characteristic",
    "DFC_Interface",
    "DFC_Interface_Property",
    "DFC_BusinessOntology_ObjectProperty",
}

SKIP_PROPERTIES = {
    "topObjectProperty",
    "topDataProperty",
    "topAnnotationProperty",
    "deprecated",
    "versionInfo",
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
        description="Convert DFC Business Ontology OWL to LinkML schema.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument(
        "--ontology-version",
        default="2.0.0",
        help="Version of the DFC ontology (e.g., 2.0.0, 1.16.0). Default: 2.0.0",
    )
    parser.add_argument(
        "--taxonomy-version",
        default=None,
        help="Version of DFC taxonomies. Defaults to ontology version.",
    )
    parser.add_argument(
        "--output",
        "-o",
        default=None,
        help="Output file path. Defaults to src/dfc_business_linkml_{version}.yaml",
    )
    parser.add_argument(
        "--ontology-url",
        default=None,
        help="Full URL to OWL ontology. Overrides version-based URL.",
    )
    parser.add_argument(
        "--technical-url",
        default=None,
        help="Full URL to Technical Ontology. Overrides version-based URL.",
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
    technical_url: str,
    local_file: Optional[str] = None,
) -> Graph:
    """Load OWL ontology and merge with technical ontology."""
    g = Graph()

    if local_file and Path(local_file).exists():
        logger.info(f"Loading from local file: {local_file}")
        g.parse(local_file, format="xml")
    else:
        logger.info(f"Downloading ontology from: {ontology_url}")
        g.parse(ontology_url, format="xml")

    logger.info(f"Loading technical ontology from: {technical_url}")
    try:
        g.parse(technical_url, format="xml")
    except Exception as e:
        logger.warning(f"Could not load technical ontology: {e}")

    logger.info(f"Loaded {len(g)} triples")
    return g


def get_classes(g: Graph) -> set[str]:
    """Extract all class IRIs from the ontology."""
    classes = set()
    for s in g.subjects(RDF.type, OWL.Class):
        local = _local_name(s)
        if local and local not in SKIP_CLASSES and not local.startswith("_"):
            classes.add(local)
    return classes


def get_data_properties(g: Graph) -> dict[str, dict]:
    """Extract data properties with their domains and ranges."""
    props = {}
    for prop in g.subjects(RDF.type, OWL.DatatypeProperty):
        name = _local_name(prop)
        if not name or name in SKIP_PROPERTIES:
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


def get_object_properties(g: Graph) -> dict[str, dict]:
    """Extract object properties with their domains and ranges."""
    props = {}
    for prop in g.subjects(RDF.type, OWL.ObjectProperty):
        name = _local_name(prop)
        if not name or name in SKIP_PROPERTIES:
            continue

        domains = _get_domains(g, prop, OWL.ObjectProperty)
        ranges = _get_object_ranges(g, prop)
        description = _get_description(g, prop)

        props[name] = {
            "domain": domains,
            "range": ranges if len(ranges) == 1 else "string",
            "description": description or f"Object property from OWL: {name}",
        }
    return props


def get_subclass_relations(g: Graph) -> dict[str, str]:
    """Extract direct subclass relations."""
    relations = {}
    for sub_cls, super_cls in g.subject_objects(RDFS.subClassOf):
        sub_name = _local_name(sub_cls)
        super_name = _local_name(super_cls)

        if sub_name and super_name and sub_name not in SKIP_CLASSES:
            if super_name not in SKIP_CLASSES:
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


def _get_object_ranges(g: Graph, prop: URIRef) -> list[str]:
    """Get range classes for an object property."""
    ranges = []
    for range_node in g.objects(prop, RDFS.range):
        if isinstance(range_node, URIRef):
            name = _local_name(range_node)
            if name and name not in SKIP_CLASSES:
                ranges.append(name)
        elif (union_of := _get_property(g, range_node, OWL.unionOf)):
            for item in g.items(union_of):
                name = _local_name(item)
                if name and name not in SKIP_CLASSES:
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
    ontology_version: str,
    taxonomy_version: str,
) -> dict:
    """Build LinkML schema dictionary."""
    prefixes = {
        "dfc-b": "https://w3id.org/dfc/ontology/src/DFC_BusinessOntology.owl#",
        "dfc-t": "https://w3id.org/dfc/ontology/src/DFC_TechnicalOntology.owl#",
        "dfc-f": f"http://w3id.org/dfc/taxonomies/v{taxonomy_version}/facets.rdf#",
        "dfc-m": f"http://w3id.org/dfc/taxonomies/v{taxonomy_version}/measures.rdf#",
        "dfc-pt": f"http://w3id.org/dfc/taxonomies/v{taxonomy_version}/productTypes.rdf#",
        "dfc-v": f"http://w3id.org/dfc/taxonomies/v{taxonomy_version}/vocabulary.rdf#",
        "linkml": "https://w3id.org/linkml/",
    }

    schema = {
        "id": f"{SCHEMA_BASE}",
        "name": "dfc_business",
        "title": f"DFC Business Ontology v{ontology_version} (LinkML)",
        "description": f"LinkML schema converted from DFC Business Ontology v{ontology_version}. Part of the DFC schema suite.",
        "version": ontology_version,
        "ontology_version": ontology_version,
        "taxonomy_version": taxonomy_version,
        "prefixes": prefixes,
        "imports": ["linkml:types"],
        "default_prefix": "dfc-b",
        "classes": {},
        "slots": {},
        "enums": {},
    }

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
        class_def = {
            "description": f"Class from DFC Business Ontology: #{class_name}",
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
    "--ontology-version",
    default="2.0.0",
    help="Version of the DFC ontology (e.g., 2.0.0, 1.16.0). Default: 2.0.0",
)
@click.option(
    "--taxonomy-version",
    default=None,
    help="Version of DFC taxonomies. Defaults to ontology version.",
)
@click.option(
    "--output",
    "-o",
    default=None,
    help="Output file path.",
)
@click.option(
    "--ontology-url",
    default=None,
    help="Full URL to OWL ontology. Overrides version-based URL.",
)
@click.option(
    "--technical-url",
    default=None,
    help="Full URL to Technical Ontology.",
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
    ontology_version: str,
    taxonomy_version: Optional[str],
    output: Optional[str],
    ontology_url: Optional[str],
    technical_url: Optional[str],
    input_file: Optional[str],
    verbose: bool,
) -> None:
    """Convert DFC Business Ontology OWL to LinkML schema."""
    if verbose:
        logging.getLogger().setLevel(logging.DEBUG)

    if taxonomy_version is None:
        taxonomy_version = ontology_version

    ont_url = ontology_url or get_ontology_url(ontology_version, None)
    tech_url = technical_url or get_technical_url(ontology_version, None)

    logger.info(f"Ontology version: {ontology_version}")
    logger.info(f"Taxonomy version: {taxonomy_version}")

    g = load_ontology(ont_url, tech_url, input_file)

    logger.info("Extracting classes...")
    classes = get_classes(g)
    logger.info(f"Found {len(classes)} classes")

    logger.info("Extracting data properties...")
    data_props = get_data_properties(g)
    logger.info(f"Found {len(data_props)} data properties")

    logger.info("Extracting object properties...")
    obj_props = get_object_properties(g)
    logger.info(f"Found {len(obj_props)} object properties")

    logger.info("Extracting subclass relations...")
    subclass_relations = get_subclass_relations(g)
    logger.info(f"Found {len(subclass_relations)} subclass relations")

    schema = build_linkml_schema(
        classes,
        data_props,
        obj_props,
        subclass_relations,
        ontology_version,
        taxonomy_version,
    )

    if output is None:
        output = f"src/dfc_business_linkml_{ontology_version.replace('.', '_')}.yaml"

    output_path = Path(output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    save_schema(schema, output_path)

    logger.info("Done!")


if __name__ == "__main__":
    main()