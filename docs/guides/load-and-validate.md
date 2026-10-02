# Read and validate JSON-LD

Taking a document you did not write. The connectors will happily import it
and hand you back model objects — but they will not tell you it was wrong.
This guide covers what you get, what you lose, and where you have to check
things yourself.

## Import returns an array, always

```typescript
const objects = c.import(jsonld);

for (const o of objects) {
  console.log(o.semanticType, o.semanticId);
}
```

Even for a single-node document. The shape of the input does not change the
shape of the return, so you never need to special-case it:

| Input | `import()` returns |
|---|---|
| One node, no `@graph` | 1-element array |
| One node in a `@graph` | 1-element array |
| Many nodes | N-element array |
| Empty | empty array |

## Identify nodes by `@id`

There is no `getByType` helper. Build your own index — it is the pattern the
tutorials use and the one the conformance suite checks:

```typescript
const byId = new Map(objects.map(o => [o.semanticId, o]));
const farm = byId.get("https://example.com/farm/1");
```

`import()` also accepts an already-parsed object, so you do not have to
`JSON.parse` first:

```typescript
const objects = c.import(JSON.parse(rawText));
```

## What you cannot rely on

### Unknown types are skipped, not reported

A `@type` with no matching DFC class does not raise. The node is dropped and
you get a shorter array:

```typescript
const objects = c.import({ "@id": "https://x/1", "@type": "dfc-b:NotAThing" });
objects.length;  // 0
```

**Check the length.** If you expect N nodes and get fewer, that is your only
signal. Compare against the input:

```typescript
const expected = (input["@graph"] ?? [input]).length;
if (objects.length !== expected) {
  throw new Error(`dropped ${expected - objects.length} node(s)`);
}
```

### Unknown predicates are dropped

Predicates the model does not declare are discarded and do not come back on
re-export. This is lossy and it is the same in all three connectors:

```typescript
const input = {
  "@id": "https://x/1", "@type": "dfc-b:Organization",
  "dfc-b:name": "Acme",
  "https://your.org/internal-id": "SKU-1",   // gone
};
const [org] = c.import(input);
await c.export(org);   // no "https://your.org/internal-id"
```

**If your own terms are mixed into the document, capture them before
importing.** You cannot get them back out through the connector.

The full rule — including that deprecated properties *are* kept, and that
known properties on the wrong class are dropped — is in
[property retention](../concepts/validation.md#property-retention).

### References resolve only within the document

A property pointing at an `@id` present in the same document comes back as
the model instance. One that is not present comes back as a **string**:

```typescript
const [product, org] = c.import(closedGraph);
product.suppliedBy === org;          // true: target was in the document

const [orphan] = c.import(openGraph);
typeof orphan.suppliedBy;            // "string": target was not
```

So the same property has two possible types depending on the input. If you
need the object, make sure the graph is closed.

### Nothing is checked

No type, range, cardinality, or vocabulary check happens. A `dfc-b:hasUnit`
of `dfc-m:NotAUnit` imports and re-exports cleanly. A `dfc-b:value` of
`"not a number"` does too.

The [validation concept page](../concepts/validation.md) explains why the
connectors are built this way and where the four levels of validation
actually stand. In short: **only SHACL ships.**

## Legacy documents

`dfc-b:Enterprise` is mapped to `dfc-b:Organization` on import, following the
DFC v2.0 rename:

```typescript
const [org] = c.import({ "@id": "https://x/1", "@type": "dfc-b:Enterprise" });
org.semanticType;  // "dfc-b:Organization"
```

This is one-way. You cannot export an `Enterprise`.

## What to check yourself

In rough order of value:

1. **Node count.** Compare input and output lengths. Catches unknown types.
2. **Round-trip fidelity.** Re-export and diff, ignoring key order. Catches
   dropped predicates and shape changes.
3. **Your own business rules.** Prices positive, dates ordered, references
   resolvable.
4. **SHACL**, if you need cross-node constraints. The shapes are in `shacl/`;
   see [validation](../concepts/validation.md#3-shacl--implemented).

A minimal guard, before you trust an import:

```typescript
function importStrict(c: Connector, input: unknown): SemanticObject[] {
  const objects = c.import(input as Record<string, unknown>);
  const expected = ((input as any)["@graph"] ?? [input]).length;
  if (objects.length !== expected) {
    throw new Error(`import dropped ${expected - objects.length} of ${expected} nodes`);
  }
  return objects;
}
```

## See also

- [Validation](../concepts/validation.md) — the four levels, what ships
- [Identifiers](handle-identifiers.md) — choosing `@id`s for what you emit
- [JSON-LD round trip](../getting-started/jsonld-roundtrip.md) — the
  executed tutorial
