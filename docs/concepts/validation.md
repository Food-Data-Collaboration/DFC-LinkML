# Validation

What "valid" means for a DFC document, and which of those meanings this
toolchain actually implements.

The short version: **only one of the four levels below ships today.** SHACL
shapes exist; the other three do not. Nothing in the connectors validates
your data, and the connectors are not the right place to look for that.

## The four levels

| # | Level | Mechanism | Status |
|---|---|---|---|
| 1 | JSON / schema | JSON Schema over the document | **not implemented** |
| 2 | LinkML model | `linkml-validate` over instances | **not implemented** |
| 3 | SHACL / RDF | SHACL shapes against the RDF graph | **implemented** |
| 4 | Application | your own rules | yours to write |

These are not interchangeable. A graph can be well-formed RDF, satisfy every
SHACL shape, and still be wrong for your business.

## 1. JSON Schema — not implemented

No JSON Schema is generated from the LinkML schema, and there is nothing in
the toolchain to produce one. The reason is structural rather than an
oversight: a DFC document is a *graph* whose shape depends on which nodes are
present, not a tree with a fixed field list. JSON Schema would validate the
serialisation, not the model — it would accept a `dfc-b:supplies` pointing at
an `@id` that appears nowhere in the document, which is the failure that
actually matters.

If you need one anyway, `linkml-schemas` can emit JSON Schema from the same
`src/dfc_business_linkml_v2_0.yaml`. It is not wired into `make generate` or
CI here, so treat any output as unversioned against this repository.

## 2. LinkML model validation — not implemented

LinkML ships a validator that checks instances against the schema: ranges,
cardinality, required properties. It is not run in CI here, and the
connectors do not embed it.

**The schema could not support full validation even if it were run.** Every
slot in the schema carries a description, a range, and a domain, and none
carries `required` or `multivalued`. So the schema models *which properties
exist and what they may point at*, and nothing about *how many* or *whether*.
Cardinality in the generated connectors is decided by a heuristic on the
property name — a trailing `s` makes it a collection — which is a
convenience for code generation, not a modelling decision. The generated
[model reference](../reference/model/index.md) says so on every page rather
than inventing a cardinality column.

## 3. SHACL — implemented

This is the one that works. `shacl/` holds SHACL shapes generated from the
schema, currently the enum constraints:

```text
shacl/dfc_business.shacl.ttl
shacl/dfc_technical.shacl.ttl
```

SHACL is the right tool for this job: it reasons over an RDF graph, so it can
express "this property must be a member of this SKOS concept scheme", which is
the constraint DFC most needs and which tree-shaped validation cannot
express.

It runs on the RDF, not on the connector's in-memory objects. That is a real
distinction and the source of a common confusion: **the connectors produce
JSON-LD, and SHACL wants RDF.** There is a supported path — the `json-ld`
library used by the TypeScript connector is a full JSON-LD processor, so
`toRDF` is available:

```typescript
import jsonld from "jsonld";
import { Connector } from "@siol-data/linkml-connector";

const c = new Connector();
const doc = JSON.parse(await c.export(org));
const context = await c.getContext();
const nquads = await jsonld.toRDF(doc, { format: "application/n-quads" });
```

Then validate `nquads` against the shapes with any SHACL engine (pySHACL,
TopBraid SHACL, or the W3C validator). This is not automated in CI; the shapes
are generated and shipped, the validation is yours to run.

## 4. Application-level — yours

Everything specific to your deployment: a product must have a price, a farm
must be in your region, a delivery must precede a pickup. None of this is
knowable from the DFC model, and the connectors make no attempt at it.

## What the connectors do instead

They **preserve** and they **normalise**, but they do not **reject**:

- **Unknown terms are dropped.** A predicate the model does not declare is
  discarded on import and does not appear on re-export. Verified identical in
  all three connectors. This is lossy — see below.
- **Unknown types fail differently.** A `@type` with no matching class does
  not raise; it is skipped.
- **Legacy types are mapped.** `dfc-b:Enterprise` becomes
  `dfc-b:Organization`, following the DFC v2.0 rename, in all three
  connectors.
- **Dangling references pass through.** A property pointing at an `@id` not in
  the document is kept as a string.

### The unknown-field caveat, concretely

```typescript
const doc = {
  "@id": "https://example.org/o/1",
  "@type": "dfc-b:Organization",
  "dfc-b:name": "Acme",
  "https://example.org/who#invented": "someone",   // your own extension
  "dfc-b:totallyMadeUp": "value",
};

const back = c.import(doc)[0];
JSON.parse(await c.export(back));
// keys: @context, @id, @type, dfc-b:name
// both unknown terms are gone
```

If your deployment mixes DFC predicates with your own, **do not round-trip
through the connectors** without capturing the extras first. The conformance
suite in `tests/conformance/` covers known-shape round trips; it does not
cover extension preservation, because the behaviour is that extensions are
not preserved.

## Where to put your own checks

A three-layer approach, in increasing cost:

1. **At construction.** Assert on the object before export. Cheapest, and the
   only layer that can give a good error message with a stack trace.
2. **After export, before sending.** Round-trip it and compare against your
   input if you care about lossiness.
3. **In your data pipeline.** SHACL over the graph, once your graph is
   assembled, if you need cross-node rules.

## Reference

- [Model reference](../reference/model/index.md) — what the schema does and
  does not constrain
- [Relationships](relationships.md) — dangling references
- [Context and versioning](context-and-versioning.md) — why a context is not
  validation
- `shacl/` — the generated shapes
