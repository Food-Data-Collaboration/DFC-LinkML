# Cardinality

How many values a property may hold, where that comes from, and why the
collection side is not in the ontology.

## What the ontology actually states

DFC v2.0.0 declares multiplicity in exactly one direction. The converter reads
two things, and they need different LinkML shapes:

| Ontology construct | Count | Becomes |
|---|---|---|
| `rdfs:subClassOf` restriction with a cardinality facet | 42 class/property pairs, across 25 classes | `slot_usage` on the class |
| `owl:FunctionalProperty` | 34 properties | slot-level `maximum_cardinality: 1` |

Every one of those 42 restrictions is a singleton — `owl:cardinality 1`,
`owl:minCardinality 1` or `owl:qualifiedCardinality 1`. There is no
`owl:maxCardinality` anywhere in the ontology.

So the ontology answers "may this hold more than one?" only by saying nothing,
and says nothing about what *is* multi-valued. Absence of a restriction is not
evidence of multiplicity in an open-world model: it means the ontology does not
care, not that repetition is allowed. Deriving collections from silence is
exactly the mistake the old plural-name heuristic made.

## Why restrictions are class-scoped

A restriction names the class it applies to, so it becomes a class-scoped
`slot_usage` rather than a slot-level flag. `hasAddress` is the clearest case:

- `PhysicalPlace ⊑ =1 hasAddress` — the ontology restricts it
- `Agent` says nothing — so an `Organization` may hold several addresses

`Agent` and `PhysicalPlace` are siblings under `DFC_BusinessOntology_Subject`,
so neither inherits from the other and a slot-level flag would be wrong for one
of them. In the connectors this produces a genuinely 1:n relationship: a
`PhysicalPlace` has one address, an `Agent` has many, and an address may be
shared by many agents.

The same split applies to `hasMainContact` (scalar on `Organization`, collection
on `PhysicalPlace`) and `listedIn` (scalar on `CatalogItem`, collection on
`Offer`).

## Resolution order

The three generators share one resolver (`scripts/cardinality.py`). First match
wins:

1. class-scoped `slot_usage` with `maximum_cardinality: 1` → scalar
2. slot-level `maximum_cardinality: 1` → scalar
3. slot-level `multivalued: true` → collection
4. the plural-name heuristic → collection if the slot name looks plural

Step 4 is a last resort and is the only guess in the chain. It reads
`characteristic`, `claims`, `certifications` and friends, then falls back to
"does the name end in `s` or `ies`". That last rule has a blind spot: the guard
against pluralising `address` also silences `has_address`, which is why an
`Organization` could not hold two addresses until step 3 existed.

## Where the collection side comes from

`config/dfc-default.yaml`, under `cardinality.multi_valued`. Each entry is a
slot the ontology is silent about but that the original DFC v2 connectors model
as a collection — verified by reading their accessor shapes rather than a
spec: each is read through `getSemanticPropertyAll`, written through
`addSemanticProperty*`, and usually also exposed with an `add*` accessor and an
array-typed setter.

The ontology cannot supply this, so the list is curated input and is documented
as such. A test asserts that it stays in step with the schema and never
contradicts an ontology singleton.

## Validation

`minimum_cardinality: 1` exists on all 42 restrictions. It is **not** enforced
in the constructors: a data-plane connector has to accept partially built
objects, and requiring `Organization.hasMainContact` or
`SuppliedProduct.totalTheoriticalStock` at construction would make ordinary
documents unusable. Each connector exposes `validate()` instead, which reports
the properties the ontology requires and that the object does not carry.

This is why [validation.md](validation.md) records SHACL as the only shipped
validation layer and points here for where the constraint data comes from.

## What still is not modelled

- **Minimum cardinality above 1** — the ontology never states one.
- **Collections inferred from the ontology** — impossible until DFC declares
  `owl:maxCardinality`. See the issue drafted against
  [datafoodconsortium/ontology](https://github.com/datafoodconsortium/ontology).
- **Functional properties the reference connectors contradict** — `email`,
  `URL` and `hasCertification` are declared `owl:FunctionalProperty`, but the
  official connectors expose all three as collections. The ontology wins here,
  so our connectors treat them as scalars and the divergence is documented.
