/**
 * The JSON-LD terms the DPM wire contract uses.
 *
 * `hasAssignedScopes`, `Scope` and `scope` are a de-facto extension. They are
 * absent from the published DFC Technical Ontology, and their `dfc-t:` prefix
 * resolves to a GitHub blob URL rather than the w3id namespace the rest of the
 * DFC vocabulary uses. They are pinned here as exact strings because the
 * reference client in `Food-Data-Collaboration/data-sharing-module` matches on
 * them literally.
 */

/** The namespace `dfc-t:` resolves to in the DPM's JSON-LD context. */
export const DFC_TECHNICAL_NAMESPACE =
  "https://github.com/datafoodconsortium/ontology/blob/master/src/DFC_TechnicalOntology.owl#";

/** Compact form of {@link DFC_TECHNICAL_NAMESPACE}. */
export const DFC_TECHNICAL_PREFIX = "dfc-t:";

/** `dfc-t:hasAssignedScopes` — the relation from a platform to its scopes. */
export const HAS_ASSIGNED_SCOPES = "dfc-t:hasAssignedScopes";

/** `dfc-t:Scope` — the `@type` each element of that relation carries. */
export const SCOPE_TYPE = "dfc-t:Scope";

/** `dfc-t:scope` — the `skos:notation` literal inside each list element. */
export const SCOPE_TERM = "dfc-t:scope";

/** `rdf:List` — the `@type` of the list wrapper itself. */
export const RDF_LIST = "rdf:List";
