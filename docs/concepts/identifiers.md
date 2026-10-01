# Identifiers

Every DFC object has a stable identity that travels with it across systems.
This page explains what the connectors accept, what they preserve, and what
they refuse to do.

## The identifier is yours, not the SDK's

`semanticId` is the first argument to every factory. The connectors never
generate one, never rewrite one, and never require a particular form:

```typescript
const org = c.createOrganization("https://example.com/org/1", { name: "Acme" });
const price = c.createPrice("urn:uuid:8f14e45f", { value: 42.5 });
```

That last one matters: you are not locked into HTTP URIs because the field is
called an id. Anything you can write in a JSON-LD `@id` works.

## What is accepted

Verified against the TypeScript connector, identical in the other two:

| Form | Example | Result |
|---|---|---|
| Absolute IRI | `https://example.com/org/1` | preserved verbatim |
| URN | `urn:uuid:8f14e45f` | preserved verbatim |
| CURIE | `example:org2` | preserved verbatim |
| Relative / opaque | `org3` | preserved verbatim |
| Blank node | `_:b1` | preserved verbatim |

**No validation is performed.** The connectors will not tell you that `org3`
is not a resolvable IRI, because whether it *should* be resolvable is a
property of your data graph, not of the identifier alone. If you need that
check, do it in your own layer — see [validation](validation.md) for why the
connectors do not.

The one place a blank node is worth understanding: `_:b1` is scoped to the
document that contains it and has no meaning outside it. It is appropriate
for a node that exists only to be referenced once. Anything that must be
looked up later wants an IRI.

## What is preserved

The identifier is round-tripped exactly. Import reads `@id`; export writes it
back:

```typescript
const [back] = c.import(exported);
back.semanticId === "https://example.com/org/1"; // true
```

This is the reason the connectors take the identity as a separate argument
rather than inferring one from the content. A content-addressed identifier
would change every time a label changed, which breaks every reference to the
object everywhere. See [relationships](relationships.md) for how references
survive that.

## Identifier versus blank node in graphs

When you export several objects at once, the result is a `@graph`. Each
object keeps its own `@id`, and references between them are written as
`@id` values — the document is internally consistent either way:

```typescript
const doc = JSON.parse(await c.export(org, carrots));
// doc["@graph"] entries carry @id; dfc-b:supplies holds the other @id
```

Exporting a single object produces a bare node with no `@graph` wrapper.
Import accepts both, and always returns an array — see the
[JSON-LD round trip](../getting-started/jsonld-roundtrip.md) tutorial.

## Watch out

- **The identity is not a key.** Re-exporting a document whose two objects
  share an `@id` produces two entries with the same `@id`. The connectors
  will not deduplicate or complain.
- **A renamed object breaks its references.** Nothing in a DFC document links
  back to the object, so renaming an `@id` silently orphans every reference to
  it. There is no referential-integrity check.
- **Blank nodes are not stable across exports.** Two exports of the same
  in-memory graph will use the same `_:b1` only because you passed the same
  string. Let the connectors manage blank nodes and you have none to manage;
  there is no blank-node allocator.
