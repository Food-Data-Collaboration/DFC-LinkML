import { Scope } from "./Scope.js";
/**
 * The DFC authorisation scopes the connector knows about.
 *
 * The notation set is derived from the bundled v2.0.0 `scopes` taxonomy, so
 * adding a scope upstream is picked up by regeneration rather than by editing
 * this file. The concept IRIs are deliberately *not* derived from that data:
 * the bundled JSON-LD context prefixes `dfc-s:` with the versioned directory,
 * so expanding it yields `…/v2.0.0/scopes.rdf#ReadEnterprise`, whereas the RDF
 * that actually dereferences — and the IRI the DPM stores and the reference
 * client compares — is the unversioned `…/scopes.rdf#ReadEnterprise`. Hence the
 * fixed template below.
 */
export declare class ScopeCatalogue {
    /** Namespace the taxonomy's scope concept IRIs live in. Unversioned. */
    static readonly IRI_BASE = "http://w3id.org/dfc/taxonomies/scopes.rdf#";
    private readonly scopes;
    private readonly notationIndex;
    private readonly iriIndex;
    /**
     * @param scopes Every scope the catalogue should offer.
     */
    constructor(scopes: Scope[]);
    /**
     * The catalogue built from the taxonomy shipped with the package.
     *
     * Works offline; nothing is fetched.
     */
    static bundled(): ScopeCatalogue;
    /** Every scope, in taxonomy order. */
    all(): readonly Scope[];
    /**
     * Looks a scope up by its `skos:notation`.
     *
     * @returns The scope, or `undefined` when the notation is unknown.
     */
    byNotation(notation: string): Scope | undefined;
    /**
     * Looks a scope up by concept IRI.
     *
     * @returns The scope, or `undefined` when the IRI is unknown.
     */
    byIri(iri: string): Scope | undefined;
    /** Whether the catalogue recognises this notation. */
    contains(notation: string): boolean;
    /**
     * The scope for this notation.
     *
     * @throws Error when the notation is not in the taxonomy.
     */
    require(notation: string): Scope;
}
