# LinkML Schema Generation from OWL Ontologies

## Overview

The `owl2linkml.py` script converts OWL/RDF ontologies to LinkML schemas. It supports versioned URLs for both ontologies and taxonomies, with enum values sourced from SKOS taxonomy files via `reachable_from`.

## Usage

```bash
# With config file (DFC-specific settings)
python3 scripts/owl2linkml.py --config config/dfc-default.yaml \
  --ontology-version 2.0.0 --taxonomy-version 2.0.0 \
  --output schema.yaml

# Generic OWL conversion
python3 scripts/owl2linkml.py --ontology-url https://example.com/ontology.rdf
```

## Configuration

Config files (YAML) control:
- `ontology_base`: Base URL for versioned ontology URLs
- `ontology_filename`: Path to OWL file
- `taxonomy_base`: Base URL for taxonomy files
- `taxonomy_enums`: Enum definitions with `reachable_from` settings
- `prefixes`: Namespace prefix mappings
- `skip_classes`, `skip_properties`: Items to ignore

## Key Decisions

### Versioned URLs
- Ontology URLs: `{base}/v{version}/{filename}` (e.g., `https://w3id.org/dfc/ontology/v2.0.0/src/DFC_BusinessOntology.rdf`)
- Taxonomy URLs in enums: `{base}/v{taxonomy_version}/{file}.json`

### Enum Strategy
- Enums use `reachable_from` to reference external SKOS taxonomy files
- No embedded enum values - connectors fetch from versioned SKOS URLs at runtime
- Supports independent versioning: ontology_version != taxonomy_version

### OWL Format
- Use `.rdf` (RDF/XML) format, NOT `.owl` (OWL/XML Manchester syntax)
- rdflib cannot parse OWL/XML's `IRI` elements
- Standard RDF/XML is compatible with all RDF tools

### Generic vs DFC-specific
- Script works generically without config file
- Config file enables DFC-specific settings (descriptions, prefixes, skip lists)
- Easy to add configs for other ontologies

## Common Issues

1. **404 on ontology download**: Check version exists at w3id.org
2. **Missing enums**: Ensure `taxonomy_enums` is in config with enum definitions
3. **Wrong taxonomy version**: Use `--taxonomy-version` separately from `--ontology-version`

## Testing

```bash
python3 -m pytest tests/test_owl2linkml.py -v
```

20 tests covering URL generation, IRI parsing, schema structure, and taxonomy enums.

## Schema Comparison (DFC)

| Version | Classes | Slots | Enums | Notes |
|---------|---------|-------|-------|-------|
| 1.16.0  | 72      | 224   | 5     | Earlier ontology, v1.3.0 taxonomy |
| 2.0.0   | 89      | 255   | 5     | Latest ontology, v2.0.0 taxonomy |

## File Locations

- Script: `scripts/owl2linkml.py`
- Config: `config/dfc-default.yaml`
- Tests: `tests/test_owl2linkml.py`