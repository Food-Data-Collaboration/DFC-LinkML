# Vocabularies

DFC does not invent its own value lists. Where a property needs a controlled
term — a unit, a facet, a product category — the value comes from one of five
external SKOS taxonomies. This page explains where they come from, how they
reach you, and what happens if you leave them alone.

## Five vocabularies, none in the schema

| Vocabulary | Used for | Bundled concepts |
|---|---|---|
| [`Facet`](../reference/model/Facet.md) | what a product is characterised by | 237 |
| [`Measure`](../reference/model/Measure.md) | units of quantity | ~200 |
| [`ProductType`](../reference/model/ProductType.md) | what kind of product | ~700 |
| [`Scope`](../reference/model/Scope.md) | geographic or thematic scope | ~30 |
| [`VocabularyTerm`](../reference/model/VocabularyTerm.md) | generic terms | ~50 |

None of these values are in the LinkML schema. The schema records only
*where* each vocabulary lives, through `reachable_from`:

```yaml
Facet:
  description: Classification facets for categorizing DFC entities.
  reachable_from:
    source_ontology: https://w3id.org/dfc/taxonomies/v2.0.0/facets.json
    source_class: Concept
    path_navigation: skos:hasTopConcept/*
```

The distinction matters when you read the generated
[model reference](../reference/model/index.md): a property whose range is a
DFC class is fully described by the schema, but a property whose range is
`string` and which is meant to hold a concept URI is not. The schema cannot
tell you the valid values.

## The bundled copy

Each vocabulary ships with the connectors, compacted SKOS, so everything
works offline:

```typescript
const c = new Connector();
c.loadFacets(facetData);      // replace it
c.facet;                      // or read the bundled one
```

The canonical data lives in `ruby-gem/vocabularies/*.jsonld` and is copied
into the TypeScript and PHP packages at generation time — one source, three
copies, so they cannot drift. If you are reading a concept list, that file is
where it is.

## Concepts are CURIEs, not strings

A value is a reference to a concept, not a label. `dfc-f:EURLocalProduction`
is a `Facet`; `dfc-m:Kilogram` is a `Measure`. The label is metadata that
travels alongside in the taxonomy, not in your document:

```json
{
  "@id": "https://example.com/q/1",
  "@type": "dfc-b:QuantitativeValue",
  "dfc-b:value": 5,
  "dfc-b:hasUnit": "dfc-m:Kilogram"
}
```

There is no validation that `dfc-m:Kilogram` is a real concept. A typo is a
string that happens to look like a CURIE, and it will be exported and
re-imported without complaint. If you care, check the CURIE against the
[reference page](../reference/model/Measure.md) for the vocabulary you are
using.

## Loading a different version

Bundled v2.0.0 is loaded unconditionally — the connectors ship only that
version offline, so there is nothing to choose. Loading something else is
opt-in and explicit:

```typescript
// from a local file or a fetched document
c.loadFacets(myFacetData);
c.loadMeasures(myMeasureData);
c.loadProductTypes(myProductTypeData);
c.loadVocabulary("Scope", myScopeData);

// or from the upstream URL for the configured taxonomy version
await c.loadFacetsFromUrl();
```

The taxonomy version is independent of the ontology version, because they are
versioned separately upstream:

```typescript
new Connector({ ontologyVersion: "2.0.0", taxonomyVersion: "2.1.0" });
```

Note the asymmetry with the context: there is no bundled fallback for a
non-default taxonomy, so the `*FromUrl` methods reach the network. If you
pin a taxonomy version other than 2.0.0 and the fetch fails, you get whatever
was last loaded — check `vocabLoader.vocabulary("Facet")` is not empty rather
than assuming.

## No validation happens here

The vocabularies are *data*, not *constraints*. Loading a vocabulary gives you
a lookup table; it does not make the connectors check a value against it. For
what would, see [validation](validation.md).

## Reference

- [Model reference: vocabularies](../reference/model/index.md) — every
  concept with its label and CURIE
- [Context and versioning](context-and-versioning.md) — the other half of the
  version story
