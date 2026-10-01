# Work offline, or on your own version

The default configuration makes **no network calls at all**: the v2.0.0
JSON-LD context and all five SKOS vocabularies ship inside the package. This
guide covers confirming that, and what to do when you need a version that is
not bundled.

## Confirming you are offline

```typescript
const c = new Connector();

c.loadBundledContext() !== null;   // true: the v2.0.0 context is present
c.loadBundledTaxonomies();         // idempotent; the default state already
c.facet;                           // populated
```

A default-version construct → export → import cycle touches the network zero
times. Run it in an air-gapped container if you want proof.

## The two versions are independent

The ontology and the taxonomies are versioned separately upstream, so they
are configured separately:

```typescript
const c = new Connector({
  ontologyVersion: "2.0.0",   // the JSON-LD context and class URIs
  taxonomyVersion: "2.0.0",   // the five SKOS vocabularies
});
```

The only version with a bundled context is `2.0.0`. Ask for anything else and
the connector will try to fetch it:

```typescript
const c = new Connector({ ontologyVersion: "9.9.9" });
c.loadBundledContext();   // null
await c.getContext();     // rejects — there is no such context to fetch
```

That failure is deliberate. A connector that silently fell back to 2.0.0
would produce documents whose `@context` says one version while the
predicates come from another, and nothing downstream would notice.

## Pinning your own context mirror

If you cannot let the default context URL be fetched, or you host a mirror,
override it process-wide:

```typescript
Connector.setDefaultContextUrl("https://mirror.internal/dfc/context_2.0.0.json");
```

The URL travels into every exported document as `@context`, so this is also
the hook for making your documents self-describing inside your own estate.

## Loading a different taxonomy version

There is **no bundled fallback** for a non-default taxonomy, and the asymmetry
with the context is worth being explicit about: a failed context fetch
raises, a failed taxonomy fetch leaves whatever was previously loaded.

```typescript
const c = new Connector({ taxonomyVersion: "2.1.0" });

// From your own data — the safe path.
c.loadFacets(myFacets);
c.loadMeasures(myMeasures);
c.loadProductTypes(myProductTypes);
c.loadVocabulary("Scope", myScopes);
c.loadVocabulary("VocabularyTerm", myTerms);

// Or from upstream, which reaches the network.
await c.loadFacetsFromUrl();
```

So after a `*FromUrl` call, check that you actually got data rather than
assuming:

```typescript
await c.loadFacetsFromUrl();
if (Object.keys(c.facet).length === 0) {
  throw new Error("facet vocabulary is empty — was the fetch blocked?");
}
```

## Where the bundled data comes from

One source, three copies. The canonical files are
`ruby-gem/vocabularies/*.jsonld`; generation copies them into the TypeScript
and PHP packages, so the three cannot drift. If you are looking for a concept,
that directory is where it is.

The connector generators also produce a *copy* of the context per language
(`typescript-connector/src/context/`, `php-connector/contexts/`). Those are
preserved across regeneration rather than rewritten, so a hand-fixed context
is not clobbered.

## Other network-adjacent behaviour

- **`export()` is async** because it may fetch a context. At the default
  version it resolves locally, but the await is not optional.
- **If a context fetch fails, `export()` does not throw.** It falls back to
  uncompacted output, keeping the context URL so the predicates stay
  expandable. That is a silent degradation — check the predicate form if you
  need compaction.
- **Vocabulary loading never validates your data.** A loaded vocabulary is a
  lookup table, not a constraint. See
  [vocabularies](../concepts/vocabularies.md).

## See also

- [Context and versioning](../concepts/context-and-versioning.md) — the
  reasoning
- [Generation](../generation.md) — how the bundled data is produced
