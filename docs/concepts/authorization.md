# Authorization

What a platform is allowed to do with DFC data. This page is about the *data*
side: the scope vocabulary, the assignment relation, and why the SDK models
them the way it does. Token acquisition and the OIDC protocol layer are
separate, and are not in this release.

## Four things that are easy to conflate

Authorisation involves four different kinds of thing, and mixing them up is the
usual source of bugs:

| | What it is | Where it lives |
|---|---|---|
| Schema | What a thing *is* — the classes, their properties, their cardinalities | The LinkML schema, generated into the connectors |
| State | What a particular installation decided: which platform holds which scopes, and which grant backs that | Your store; modelled by hand in `dpm/` |
| Token | Who is calling, and what the issuer vouched for | OIDC; not in this release |
| Policy | Whether *this* request is allowed | Your code, typically a policy decision point |

Everything generated from the schema is schema. The DPM scope model is state.
Keeping them apart is why `ScopeAssignment` is a hand-written type rather than a
generated class: the assignment table differs per installation and per consent
decision, so generating it would conflate state with structure — the same error
as treating a missing cardinality restriction as evidence of multiplicity, see
[Cardinality](cardinality.md).

## Scope is a coarse gate

The DFC's own decisions say so. ADR-0009 (policy decision point) and ADR-0014
(scopes) both treat an OAuth scope as an API gate, not a permission:

- a request carrying a valid scope the platform was never granted is denied;
- a request carrying a grant that the scope set does not cover is denied.

So an assignment answers "may this platform reach this API at all", never "may
it read *this* order". `ScopeAssignment` exposes `has()` and `unknown()` for
exactly that gate; deciding individual operations stays in your policy layer.

## Identity: the notation, not the IRI

The six scopes are [`Scope`](../reference/model/Scope.md) concepts in the
[Scope vocabulary](vocabularies.md#the-bundled-copy), such as `ReadEnterprise`.
Each has both a `skos:notation` literal and a concept IRI, and the IRI is the
unversioned

```
http://w3id.org/dfc/taxonomies/scopes.rdf#ReadEnterprise
```

even though the file is fetched from `/v2.0.0/`. The version is in the fetch
URL, not in the term itself.

Two consequences follow, and the SDK handles both:

- Keying on the IRI would make a taxonomy version bump look like a revocation of
  every grant the platform has ever been given. The model keys on the notation
  and stores the IRI beside it, so the two can disagree without losing identity.
- The bundled JSON-LD context prefixes `dfc-s:` with the *versioned* directory,
  so expanding the compacted `dfc-s:ReadEnterprise` yields an IRI that does not
  dereference. `ScopeCatalogue` therefore takes only the notation from the
  bundled taxonomy and derives each IRI from a fixed unversioned template.

## Unknown scopes are surfaced, never dropped

```typescript
const assignment = ScopeAssignment.fromJSON(payload, platformId, catalogue);
const unrecognised = assignment.unknown(catalogue);
```

Import keeps a scope it does not recognise and reports it. Dropping it silently
would be an authorisation decision made invisibly, which is the opposite of the
connectors' deliberate behaviour towards
[unknown predicates](validation.md#property-retention), where a lossy round trip
is documented and accepted. Here it is not acceptable, because the thing being
lost is the thing that grants access.

## The wire terms are a de-facto extension

The assignment relation is not in the DFC ontology. `dfc-t:hasAssignedScopes`,
`dfc-t:Scope` and `dfc-t:scope` are undeclared in the published Technical
Ontology, and the `dfc-t:` prefix in the reference client's context resolves to
a GitHub blob URL rather than the w3id namespace the rest of DFC uses.

They are a de-facto extension defined by
`Food-Data-Collaboration/data-sharing-module`, which is what the SDK has to
interoperate with, so the exact strings are pinned once in `DfcTerms` rather than
derived from the ontology.

## When ADR-0014 lands

ADR-0014 would rename every scope to `dfc:<domain>.<operation>`. It is still
*Proposed*, not Accepted, and the renaming needs a consortium release — the SDK
does not adopt it unilaterally. Because the notation is the key everywhere in
this model, adopting it later is a data change rather than a code change.

## See also

- [Vocabularies](vocabularies.md) — where the six scopes come from
- [Model reference](../reference/model/index.md) — the generated classes
- [Validation](validation.md) — what the connectors do and do not reject
