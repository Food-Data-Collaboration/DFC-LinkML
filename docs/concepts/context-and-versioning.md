# JSON-LD context and versioning

DFC documents are JSON-LD. That means every term in the document is only
meaningful together with a `@context` that says what the terms mean. This
page covers which context the connectors use, where it comes from, and how
ontology and taxonomy versions relate.

## What a context is for

A DFC document says `dfc-b:name`. Without the context, that is a string with
no meaning. The context binds it:

```json
{
  "@context": "https://w3id.org/dfc/ontology/v2.0.0/context/context_2.0.0.json",
  "@id": "https://example.com/org/1",
  "@type": "dfc-b:Organization",
  "dfc-b:name": "Acme"
}
```

The context is what makes `dfc-b:Organization` resolvable to a class and
`dfc-b:name` to a property. Consumers that do not know DFC can still read the
document correctly.

## The context is a URL, not an inline object

Exported documents carry the context as a **URL string**, never as an inline
definition. This is deliberate:

- the document stays small and diffable
- one context definition is shared by every document
- a consumer fetches the context once and caches it

If you have seen a DFC document with several hundred lines of inline context
definition, it came from a tool that inlined it. The connectors do not.

## The context is bundled

v2.0.0 ships inside the package, so no network access is needed to construct,
export, or import:

```typescript
const c = new Connector();
c.loadBundledContext() !== null;   // true at the default version
await c.getContext();              // resolves offline
```

The `VocabularyLoader` does the same for the five SKOS taxonomies. This is
why the connectors work in an air-gapped environment: a default-version
round trip makes no network calls at all.

## Requesting a different version

Both versions are constructor options and are **independent** of each other —
the ontology and the taxonomies are versioned separately upstream:

```typescript
const c = new Connector({
  ontologyVersion: "2.0.0",   // the JSON-LD context and class URIs
  taxonomyVersion: "2.0.0",   // the SKOS vocabularies
});
```

There is no bundled context for a version other than 2.0.0. Asking for one
makes the connector fetch it, and if the fetch fails it errors rather than
silently using the wrong context:

```typescript
const c = new Connector({ ontologyVersion: "9.9.9" });
c.loadBundledContext();   // null
await c.getContext();     // rejects: 9.9.9 has no bundled or reachable context
```

The context URL is derived, and always follows this shape:

```
https://w3id.org/dfc/ontology/v{ontologyVersion}/context/context_{ontologyVersion}.json
```

The default can be overridden process-wide with
`Connector.setDefaultContextUrl()`, which is what you want when your
deployment pins its own mirror.

## Compaction: why the shape changes on the way out

The connectors produce expanded JSON-LD internally — full IRIs, nested
`{"@id": ...}` objects — and then run the `jsonld` compaction pass on export.
That is what turns full IRIs into `dfc-b:` CURIEs and collapses
`[{"@id": "x"}]` into `"x"`.

The PHP connector has no `ml/json-ld` runtime dependency, so it skips
compaction and writes the short-form predicates directly. The observable
result is the same, but it means PHP has to reproduce compaction's shape
rules itself. The most visible one is documented under
[relationships](relationships.md#one-value-or-many-the-shape-rule).

If you need to bypass compaction entirely, `JsonLdSerializer` is exported and
does the expansion-only step:

```typescript
import { JsonLdSerializer } from "@siol-data/linkml-connector";
new JsonLdSerializer(context).serialize(org, carrots);
```

## Exporting without a context

`export()` is asynchronous because it may fetch a context. If the fetch
fails, it does not throw: it falls back to exporting uncompacted, keeping the
context URL so the predicates stay expandable.

```typescript
const json = await c.export(org);   // resolves even if the context is unreachable
```

Check for compaction by inspecting `@context` and the predicate form rather
than by assuming success means compaction happened.

## Versioning the documents you produce

A DFC document is only portable if the consumer knows which ontology version
its context corresponds to. Since the context is a versioned URL, the version
travels with the document — but only if you do not rewrite the context URL by
hand. Keep the emitted `@context` intact when moving documents between
systems, and record the SDK version you produced them with; see
[architecture](../architecture.md) for how the pins in
`config/dfc-release.yaml` relate.

## Reference

- [SDK contract](../sdk-contract.md) for the per-language method surface
- [Vocabularies](vocabularies.md) for the taxonomy side of versioning
- [Validation](validation.md) for what a context does and does not guarantee
