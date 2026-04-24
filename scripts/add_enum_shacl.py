#!/usr/bin/env python3
"""
Add enum constraints to SHACL shapes.

This script parses a LinkML schema, extracts all enums, and generates
SHACL shapes for each enum with permissible value constraints.

Usage:
    python3 add_enum_shacl.py <shacl_input.ttl> [shacl_output.ttl]
"""

import sys
import yaml
from pathlib import Path

from rdflib import Graph, Literal, Namespace, URIRef
from rdflib.namespace import RDF, RDFS, OWL

SH = Namespace('http://www.w3.org/ns/shacl#')


def parse_linkml_schema(schema_path: str) -> dict:
    """Parse LinkML schema and extract enums."""
    with open(schema_path, 'r') as f:
        schema = yaml.safe_load(f)
    
    enums = schema.get('enums', {})
    prefixes = schema.get('prefixes', {})
    
    return {
        'enums': enums,
        'prefixes': prefixes,
        'id': schema.get('id', ''),
        'name': schema.get('name', ''),
    }


def generate_enum_node_shapes(schema_data: dict, base_uri: str = None) -> Graph:
    """Generate SHACL NodeShapes for each enum."""
    g = Graph()
    
    if not base_uri:
        base_uri = schema_data.get('id', 'https://example.org/')
    
    if not base_uri.endswith('#'):
        base_uri += '#'
    
    enums = schema_data.get('enums', {})
    
    for enum_name, enum_data in enums.items():
        pv_data = enum_data.get('permissible_values', {})
        
        if not pv_data:
            continue
        
        # Create NodeShape for enum
        enum_uri = URIRef(f"{base_uri}{enum_name}")
        
        # Add NodeShape type
        g.add((enum_uri, RDF.type, SH.NodeShape))
        g.add((enum_uri, SH.name, Literal(enum_name)))
        
        # Add description if available
        desc = enum_data.get('description', '')
        if desc:
            g.add((enum_uri, RDFS.comment, Literal(desc)))
        
        # Add each permissible value with label
        for pv_name, pv_info in pv_data.items():
            pv_uri = URIRef(f"{base_uri}{pv_name}")
            
            # Add as NamedIndividual with type
            g.add((pv_uri, RDF.type, OWL.NamedIndividual))
            g.add((pv_uri, RDFS.label, Literal(pv_name)))
            
            # Add meaning/ontology reference if provided
            if isinstance(pv_info, dict):
                if pv_info.get('meaning'):
                    meaning_uri = URIRef(pv_info['meaning'])
                    g.add((pv_uri, RDFS.seeAlso, meaning_uri))
                if pv_info.get('description'):
                    g.add((pv_uri, RDFS.comment, Literal(pv_info['description'])))
    
    return g


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        print("\nUsage examples:")
        print("  python3 add_enum_shacl.py ../shacl/dfc_business.shacl.ttl")
        print("  python3 add_enum_shacl.py ../shacl/dfc_business.shacl.ttl ../shacl/dfc_business_enriched.ttl")
        sys.exit(1)
    
    shacl_input = sys.argv[1]
    shacl_output = sys.argv[2] if len(sys.argv) >= 3 else None
    
    # Find the schema - look in parent src/ folder
    schema_path = Path(shacl_input).parent / 'dfc_business_linkml.yaml'
    if not schema_path.exists():
        schema_path = Path(shacl_input).parent.parent / 'src' / 'dfc_business_linkml.yaml'
    if not schema_path.exists():
        schema_path = Path('src') / 'dfc_business_linkml.yaml'
    if not schema_path.exists():
        print("ERROR: Could not find LinkML schema file", file=sys.stderr)
        sys.exit(1)
    
    print(f"Loading schema from: {schema_path}", file=sys.stderr)
    schema_data = parse_linkml_schema(str(schema_path))
    
    print(f"Found {len(schema_data['enums'])} enums:", file=sys.stderr)
    for name, data in schema_data['enums'].items():
        pv_count = len(data.get('permissible_values', {}))
        print(f"  - {name}: {pv_count} values", file=sys.stderr)
    
    # Load existing SHACL
    print(f"Loading existing SHACL: {shacl_input}", file=sys.stderr)
    existing_g = Graph()
    existing_g.parse(shacl_input, format='turtle')
    
    # Generate enum shapes
    print(f"Generating enum shapes...", file=sys.stderr)
    enum_g = generate_enum_node_shapes(schema_data)
    
    # Merge graphs
    existing_g += enum_g
    
    # Output
    if shacl_output:
        existing_g.serialize(shacl_output, format='turtle')
        print(f"Wrote enriched SHACL to: {shacl_output}", file=sys.stderr)
        
        # Show some stats
        print(f"\nFinal SHACL stats:", file=sys.stderr)
        print(f"  Total triples: {len(existing_g)}", file=sys.stderr)
    else:
        print(existing_g.serialize(format='turtle'))


if __name__ == '__main__':
    main()