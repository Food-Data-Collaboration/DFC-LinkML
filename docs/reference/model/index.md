# Controlled vocabularies

The five SKOS controlled vocabularies the DFC models refer to. None of their
values live in the LinkML schema: each is an external taxonomy reached through
`reachable_from`, so the connectors ship a bundled copy to work offline.

| Vocabulary | Upstream source | Bundled concepts |
|---|---|---|
| [`Facet`](Facet.md) | <https://w3id.org/dfc/taxonomies/v2.0.0/facets.json> | 237 |
| [`Measure`](Measure.md) | <https://w3id.org/dfc/taxonomies/v2.0.0/measures.json> | 128 |
| [`ProductType`](ProductType.md) | <https://w3id.org/dfc/taxonomies/v2.0.0/productTypes.json> | 510 |
| [`Scope`](Scope.md) | <https://w3id.org/dfc/taxonomies/v2.0.0/scopes.json> | 6 |
| [`VocabularyTerm`](VocabularyTerm.md) | <https://w3id.org/dfc/taxonomies/v2.0.0/vocabulary.json> | 43 |

## Loading

A different taxonomy version is opt-in. See
[concepts: vocabularies](../../concepts/vocabularies.md) for the code.

# DFC concepts

The five SKOS controlled vocabularies referenced by the DFC models.

| Vocabulary | Used for |
|---|---|
| [`Facet`](Facet.md) | What a product is characterised by (organic, local, ...) |
| [`Measure`](Measure.md) | Units of quantity |
| [`ProductType`](ProductType.md) | What kind of product something is |
| [`Scope`](Scope.md) | Geographic or thematic scope |
| [`VocabularyTerm`](VocabularyTerm.md) | Generic controlled terms |
