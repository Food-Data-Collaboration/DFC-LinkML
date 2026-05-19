# Ruby Gem Development Skills

## LinkML Schema-Driven Code Generation

### Schema Analysis
- Parse LinkML YAML schemas to extract classes, slots, enums, and prefixes
- Use `domain` annotations on slots to determine property ownership per class
- Walk inheritance chains (`is_a`) to collect all applicable slots including inherited ones
- Distinguish data properties (range = primitive type) from object properties (range = another class)
- Add explicit `domain` annotations to slots that lack them to ensure complete coverage
- Define version fields (`ontology_version`, `taxonomy_version`) for runtime versioning

### Class Hierarchy Handling
- Subclasses inherit all slots from parent classes via the `is_a` chain
- Subclass models should only declare properties explicitly owned at their domain (avoid redeclaring inherited properties)
- Ruby inheritance mirrors schema inheritance: `class SuppliedProduct < DefinedProduct < WhatSubject < ...`
- Underscore-separated names like `Where_Subject` should be collapsed: `WhereSubject`

## Ruby Naming Conventions

### Property Name Conversion
- Slot names like `hasCountry` become accessors `country` (strip `has` prefix, snake_case)
- Slot names like `phoneNumber` become accessors `phone_number` (insert underscores before capitals)
- Parameter names use camelCase: `phoneNumber: nil`
- Instance variables use snake_case: `@phone_number`
- Special cases: `u_r_l` → `url`, `v_a_tnumber` → `vat_number`, `v_a_trate` → `vat_rate`

### Deduplication
- Multiple slots can map to the same Ruby property name (e.g., `country` data property and `hasCountry` object property both → `country`)
- Use a `seen` set to skip duplicates during generation
- When slots collide, prefer the first encountered (usually the data property)

## Architecture Patterns

### Avoid Singleton in Libraries
- Singletons prevent users from creating multiple instances with different configurations
- Use plain instantiable classes with constructor kwargs for version/configuration
- Example: `Connector.new(ontology_version: "2.0.0", taxonomy_version: "2.0.0")`

### Module Namespaces
- Wrap all classes under the gem module: `DfcLinkmlConnector::Core::*`, `DfcLinkmlConnector::Models::*`
- Each model file wraps in the module block so sibling references resolve naturally
- Entry point file requires all sub-modules in dependency order

### Semantic Object Pattern
- Base class (`SemanticObject`) tracks properties via `registerSemanticProperty` with getter/setter blocks
- `to_jsonld` walks registered properties to build JSON-LD output
- Type registry populated via `self.inherited` hook: when a subclass defines `SEMANTIC_TYPE`, auto-register it
- Import uses the registry to map `@type` values to the correct Ruby class

### JSON-LD Import (Shallow Resolution)
- First pass: instantiate all objects by `@type`, store by `@id`
- Second pass: populate properties, resolving `@id` references from the first-pass map
- Only resolve references within the same document (shallow)
- Use `respond_to?` and `send` to dynamically set properties without hardcoding each one

## Versioned Remote Resources

### Context URLs
- DFC publishes versioned JSON-LD context files via w3id redirects
- Pattern: `https://w3id.org/dfc/ontology/v{version}/context/context_{version}.json`
- Fetch at runtime, cache in connector instance
- Provide class-level `default_context_url` accessor for override

### Taxonomy URLs
- Pattern: `https://w3id.org/dfc/taxonomies/v{version}/{name}.json`
- Taxonomy files use `.json` extension (not `.jsonld`)
- Use `Net::HTTP` for fetching; raise on non-2xx responses

## Python-to-Ruby Code Generation Pitfalls

### String Interpolation
- Ruby `#{}` interpolation inside Python f-strings requires escaping: use placeholder replacement instead
- Pattern: write Ruby template with `__PLACEHOLDER__` markers, then `.replace()` in Python
- Avoid `f'''...#{...}...'''` — the `#` and `{}` clash between Python and Ruby

### Hash Literals
- In Python f-strings, Ruby `{}` must be doubled: `{{}}`
- But this is fragile; prefer plain triple-quoted strings with `.replace()` for Ruby code blocks

### Regex Backreferences
- Ruby regex `_\1` in Python strings needs four backslashes: `"__\\\\1"`
- The chain: Python source → Python string → Ruby source → Ruby regex engine

## Gem Structure

```
ruby-gem/
  dfc-linkml-connector.gemspec
  Gemfile
  Rakefile
  README.md
  lib/
    dfc_linkml_connector.rb      # Entry point: requires all, defines VERSION
    core/
      semantic_object.rb         # Base class + type registry
      connector.rb               # Main connector (instantiable)
      json_ld_serializer.rb      # Export to JSON-LD
      vocabulary_loader.rb       # Load SKOS vocabularies
    models/
      address.rb                 # DfcLinkmlConnector::Models::Address
      agent.rb                   # DfcLinkmlConnector::Models::Agent
      ... (85 classes)
  vocabularies/
    facet.jsonld
    measure.jsonld
    product_type.jsonld
```

## Key Lessons

1. **Never hardcode what the schema can tell you** — Use `domain` annotations, `is_a` chains, and `range` types to drive generation
2. **Python f-strings and Ruby interpolation don't mix** — Use template placeholders + `.replace()` for any Ruby code containing `#{}`
3. **Deduplicate at the Ruby property level** — Two different slots can map to the same accessor
4. **Two-pass import** — Instantiate all objects first, then resolve references
5. **`self.inherited` hook** is the idiomatic way to auto-register subclasses in Ruby
6. **No singletons in libraries** — Users need to instantiate multiple configured instances
7. **Version everything** — Ontology version, taxonomy version, context URL; all should be parameterizable
