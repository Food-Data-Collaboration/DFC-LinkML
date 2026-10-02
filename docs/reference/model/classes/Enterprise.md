# Enterprise (deprecated)

!!! warning

    **`Enterprise` is deprecated and should not be used in new data.**

    It is equivalent to [`Organization`](Organization.md) under `owl:equivalentClass`, which is what the DFC v2.0.0 ontology asserts.

## Reading legacy data

Importing a document that uses `Enterprise` still works. The connectors map the legacy type onto `Organization` automatically, so a document written against an older DFC version loads without rewriting:

```typescript
const [org] = c.import({ "@id": "https://example.org/o/1", "@type": "dfc-b:Enterprise" });
org.semanticType;  // "dfc-b:Organization"
```

This is one-way. You cannot export a `Enterprise`.

## Reference

- Predicate: `dfc-b:Enterprise`
- Subclass of: `Agent`
- Source: [`owl:deprecated` in the DFC v2.0.0 ontology]
