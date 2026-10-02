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

## Property retention

The connectors are **lossy on purpose**. A round trip keeps exactly what the
schema says a class can hold, and discards the rest — silently, in all three
connectors, with no warning and no error.

This is a deliberate design decision, not a limitation to work around. The
model is the contract: a `dfc-b:Organization` is defined to carry `dfc-b:name`
and its other declared properties. Carrying arbitrary terms forward would mean
the connectors asserted things about your data that the DFC model does not,
and re-exported documents would accumulate terms no consumer could interpret.

The cost is that a document mixing DFC predicates with your own does not
survive a round trip. Plan for that rather than discovering it.

### The rule

A property survives import **only if the generated model class for the node's
`@type` registers that predicate**. Three things follow, and they are often
conflated:

| Input | Round trip | Why |
|---|---|---|
| Property declared on the class or an ancestor | **kept** | the class registers it |
| Deprecated but declared, e.g. `dfc-b:country` on `Address` | **kept** | deprecation is metadata, not removal |
| Known property, wrong class, e.g. `dfc-b:vatRate` on `Address` | dropped | the class does not declare it |
| Your own term, e.g. `https://your.org/id` | dropped | not in the schema at all |
| Property whose schema `domain` names no DFC class, e.g. `dfc-b:hasFacet` | dropped | unreachable through the model — see below |

**Deprecated properties are retained.** This surprises people, and it is the
most common misreading: `owl:deprecated` in the ontology becomes
`deprecated: true` in the schema and is excluded from the
[reference](../reference/model/index.md), but the connectors still generate
it and still round-trip it. Deprecating something in the reference tells you
not to *start* using it; it does not make existing data unreadable. There is
no upgrade path, and no need for one.

**Wrong-class properties are dropped**, which is the rule people miss most
often. It is domain checking, and it happens whether or not the property
exists:

```typescript
const doc = { "@id": "https://x/1", "@type": "dfc-b:Address", "dfc-b:vatRate": 5.5 };
c.import(doc)[0];   // Address has no vatRate; it is silently absent after re-export
```

**14 schema properties are unreachable through the model classes.** Slots
whose `domain` names no DFC class — `hasFacet`, `suppliesTo`, `inScheme`,
`facetOf`, `broader`, `narrower`, `minValue`, `maxValue` and six others — are
declared in the schema and appear in the connectors' predicate maps, but no
generated class registers them, so they are dropped on import like any unknown
term. They exist in the JSON-LD context, not in the object model. Check the
[class page](../reference/model/classes/Address.md) for what a class actually
carries rather than assuming a predicate in the context implies a property.

### One caveat: `country` means different things in PHP

`country` and `hasCountry` are **transposed** in the PHP connector, and this
is a genuine cross-connector divergence, not a naming preference:

| Set this | TypeScript / Ruby emit | PHP emits |
|---|---|---|
| `country` | `dfc-b:country` | `dfc-b:hasCountry` |
| `countryName` | *(not a property)* | `dfc-b:country` |

The same property name produces a **different predicate** depending on the
language, so a document written in PHP is not interchangeable with one
written in TypeScript. It comes from `country` being in the PHP generator's
`BARE_SLOT_OVERRIDES` (renamed to `countryName` to disambiguate it from
`has_country`), which the TypeScript and Ruby generators do not apply.

If you move data between languages, check `Address` explicitly:

```typescript
const address = c.createAddress({ semanticId: "https://x/1", country: "FR" });
// TS/Ruby -> "dfc-b:country"   PHP -> "dfc-b:hasCountry"
```

`quantity` is in the same `BARE_SLOT_OVERRIDES` list, so the same caution
applies to it. This is worth reporting upstream; it is pinned by
`php-connector/tests/PropertyRetentionTest.php` so the current behaviour
cannot drift unnoticed.

### Nodes and types

- **An unknown `@type` drops the whole node.** It does not raise; the node
  simply is not in the returned array. Compare lengths if you expect N nodes.
- **A legacy type is mapped.** `dfc-b:Enterprise` becomes
  `dfc-b:Organization` on import, following the DFC v2.0 rename. That is a
  type *rename*, not a deprecation — the node is kept.
- **A dangling reference is kept as a string.** A property pointing at an
  `@id` absent from the document comes back as the raw value, not a fabricated
  object.

### Concretely

```typescript
const doc = {
  "@id": "https://example.org/o/1",
  "@type": "dfc-b:Organization",
  "dfc-b:name": "Acme",
  "https://example.org/who#invented": "someone",   // dropped
  "dfc-b:totallyMadeUp": "value",                   // dropped
};

const [org] = c.import(doc);
Object.keys(JSON.parse(await c.export(org)));
// ["@context", "@id", "@type", "dfc-b:name"]
```

If you mix your own terms into DFC documents, **capture them before import** —
there is no way to get them back out:

```typescript
const extras = Object.fromEntries(
  Object.entries(doc).filter(([k]) => k.startsWith("https://your.org/"))
);
// store `extras` keyed by @id, then re-attach on the way out
```

The conformance suite in `tests/conformance/` covers known-shape round trips.
Extension preservation is not tested because the behaviour is that
extensions are not preserved.

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
