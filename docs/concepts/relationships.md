# Relationships

DFC is a graph: most interesting classes point at other classes rather than
carrying only scalars. This page explains how those pointers become JSON-LD
links, and the one shape rule that differs between single and multiple
values.

## An object property is a pointer, not a copy

In the model, a property whose range is a DFC class holds an instance:

```typescript
const carrots = c.createSuppliedProduct({ semanticId: "https://example.com/p/1", name: "Carrots" });
const farm = c.createOrganization({ semanticId: "https://example.com/org/1", name: "Acme" });

carrots.suppliedBy = farm;   // the instance, not a string
```

On export that becomes a link by `@id`, never an inline copy:

```json
{
  "@id": "https://example.com/p/1",
  "@type": "dfc-b:SuppliedProduct",
  "dfc-b:suppliedBy": "https://example.com/org/1"
}
```

The referenced object has to be passed to `export()` as well, or it is
missing from the document entirely:

```typescript
await c.export(carrots, farm);   // both, or the link dangles
```

The connectors do not verify that a referenced `@id` is present in the
document. A dangling link is valid JSON-LD and will fail silently on the
consuming side.

## Import resolves links back to instances

The reverse happens on import. When a property value matches an `@id` of
another object in the same document, you get the instance, not the string:

```typescript
const [product, org] = c.import(doc);
product.suppliedBy === org; // true, if both were in the document
```

If the target is *not* in the document, the raw value is kept instead — a
string, not a fabricated object. So `suppliedBy` is an instance when the
graph is closed and a string when it is open.

## Inverses are not computed

The ontology declares inverse pairs — `supplied_by` and `supplies`,
`part_of` and `has_part`. Setting one does not set the other:

```typescript
org.supplies = [carrots];
carrots.suppliedBy;   // still undefined
```

This keeps the model honest: a round trip preserves exactly what you set, and
nothing is invented. It also means you may need to set both sides yourself if
you export only one of them.

## One value or many: the shape rule

This is the subtle part, and it is where the three connectors had a real bug
before it was caught.

A property carrying a **single** reference serialises as a scalar, even when
you set it as a one-element array:

```typescript
org.supplies = [carrots];
JSON.parse(await c.export(org, carrots))["dfc-b:supplies"];
// "https://example.com/p/1"  — a scalar, not ["https://example.com/p/1"]
```

Two or more stay an array. This is not a LinkML quirk: it is what JSON-LD
compaction does for properties that are not `@list` or `@set`, and it is what
the original DFC connectors do. Confirmed against the original Ruby
connector:

| values set | serialised as |
|---|---|
| 1 | scalar |
| 2 | array |
| 0 | key absent |

The rule is enforced in all three connectors, and the PHP one does it without
a JSON-LD library — it skips compaction entirely, so it has to apply the
collapse itself. That is the kind of detail that only shows up if you
actually export a one-element collection, which is why it is written down
here and pinned by `php-connector/tests/ExportShapeTest.php`.

**Practical consequence:** never assert on the JSON shape of a single-valued
property. If you need to distinguish, check the language, not the document.

## Inverse direction, same rule

`suppliedBy` is single-valued and `supplies` is a collection, so they
serialise differently even when describing the same edge. A `supplies` array
of one collapses to a scalar; a `suppliedBy` of one is already scalar. Both
re-import as a scalar, which the model types as a single instance.

## Reference

- [Model reference: `Organization`](../reference/model/classes/Organization.md)
  for the full property table
- [`supplied_by`](../reference/model/properties/supplied_by.md) and its
  declared inverse
- [Identifiers](identifiers.md) for what a valid `@id` looks like
