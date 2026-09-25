# Architecture

```
                  DFC ontology (w3id, versioned)
                          │
                          ▼
              LinkML schema (src/*.yaml)
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
   owl2linkml.py   taxonomy enums   bundled data
          │        (reachable_from)  (ruby-gem/vocabularies,
          │                          contexts → copied to php)
          ▼
   ┌──────────────┬──────────────┐
   ▼              ▼              ▼
 TypeScript      Ruby           PHP
 connector    gem            connector
```

- **Source of truth**: the DFC ontology + SKOS taxonomies at the versions in
  `config/dfc-release.yaml`. The LinkML schema is a derived artefact
  (committed for auditability), never hand-edited.
- **Generators** (`scripts/generate_*.py`) are the only writers of generated
  code. Per-language preservation rules live in AGENTS.md; the durable
  statement is: *regeneration must be byte-identical on a clean tree*
  (`make check-generated`).
- **Runtime data flow** (all languages): construct models → `export()` to
  JSON-LD (predicates already official CURIEs, no compaction) →
  `import()` back, resolving `@id` refs within the document. Unknown types
  are skipped; unknown predicates are dropped.
- **Cross-language parity** is enforced by `tests/cross_connector/` (drop-in
  matrix vs the original v2 connectors) and `tests/conformance/` (shared
  fixtures across LinkML connectors).
