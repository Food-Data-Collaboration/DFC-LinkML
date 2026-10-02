# Handle identifiers

Choosing `@id`s for data you emit, so they stay resolvable and survive
re-export.

## The rule

**An `@id` is a promise that the thing can be found again.** Everything else
follows from that. A good one is a URL you control, that a consumer can
dereference, and that will still mean the same thing in five years.

```text
https://your-farm.example/products/organic-carrots-2024
```

Not:

```text
item-1                     # not resolvable, collides across systems
hash-of-the-json           # changes when the content changes
```

## The connectors will not help

There is no identifier generator, no validator, and no collision check. This
is deliberate — whether an identifier *should* be resolvable is a property of
your data graph, not of the string, so the connectors do not guess. See
[identifiers](../concepts/identifiers.md) for what forms are accepted.

That means **choosing badly fails silently**. A duplicate `@id` produces two
nodes with the same identifier in one document. A relative identifier like
`item-1` exports happily and is meaningless to the consumer.

## Namespaced, and stable under edits

Derive the identifier from the thing's identity, not its current attributes.
Changing a name should not change the identifier, because every reference to
it lives in other people's systems:

```typescript
// Good: identity-derived
const carrots = c.createOrganization("https://your-farm.example/products/carrots", { name: "Carrots" });

// Bad: content-derived. Renaming the product orphans every reference to it.
const carrots = c.createOrganization(
  `https://your-farm.example/products/${slugify(name)}`, { name });
```

The second form is a very common mistake and nothing will warn you. A
rename becomes a silent data-loss event across every system that stored the
old identifier.

## Sub-resources get fragments

A price for a product is a different thing from the product, so give it its
own identifier. Fragments (`#`) are the natural fit — same base, distinct
node, no new DNS:

```typescript
const product = c.createSuppliedProduct("https://your-farm.example/products/carrots", { name: "Carrots" });
const price   = c.createPrice("https://your-farm.example/products/carrots#price", { value: 2.5 });
const offer   = c.createOffer("https://your-farm.example/products/carrots#offer", { hasPrice: price });
```

## Dereferenceability

If you want consumers to actually resolve an `@id`, serve something there.
The DFC context is a good precedent — the connectors emit a context URL and
the document is meaningless without it, so the URL resolves to real content.

A pragmatic pattern, if you can host one endpoint:

```text
https://your-farm.example/dfc/{id}
  → 303 to the canonical URL, or
  → application/ld+json for a DFC node, or
  → 404
```

You do not have to serve the object itself. A redirect is enough to make the
identifier resolvable, and that is what most of the value is.

## Importing someone else's identifiers

When you read a foreign document, **keep the identifiers as they are**:

```typescript
const objects = c.import(foreignDocument);   // semanticId is theirs
```

Re-minting them into your own namespace means every reference inside the
document now points at something that is not there, and you have no way to
tell which of the original identifiers mattered. If you need a local handle,
keep it in your own field rather than overwriting the identity.

## Legacy `Enterprise`

`dfc-b:Enterprise` was renamed to `dfc-b:Organization` in DFC v2.0. Import
maps it for you. If you are migrating your own data, do the rename
deliberately and keep a mapping table — you will not be able to tell from the
document alone which of your old `Enterprise` nodes were ever re-published.

## Checklist

- [ ] Every `@id` is under a domain you control
- [ ] The domain dereferences, or you accept it will not
- [ ] Identifiers derive from identity, not from editable attributes
- [ ] Sub-resources use fragments off a shared base
- [ ] Foreign identifiers are preserved on import
- [ ] No two nodes in one document share an `@id`

## See also

- [Identifiers](../concepts/identifiers.md) — accepted forms and round-trip
  behaviour
- [Relationships](../concepts/relationships.md) — how references serialise
- [Build a catalog](build-a-catalog.md) — a worked example
