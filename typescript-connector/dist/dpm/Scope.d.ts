/**
 * One DFC authorisation scope, such as `ReadEnterprise`.
 *
 * A scope is identified by its `skos:notation`, and that literal is the only
 * canonical key. The taxonomy's term IRIs are unversioned
 * (`…/taxonomies/scopes.rdf#ReadEnterprise`) even when they are fetched through
 * the `/v2.0.0/` URL, so keying on the IRI would make a taxonomy version bump
 * look like a revocation of every grant the platform has ever been given.
 */
export declare class Scope {
    /** `skos:notation`. The stable identity of this scope. */
    readonly notation: string;
    /** The concept IRI, in the form the DPM stores and the wire carries. */
    readonly iri: string;
    /**
     * @param notation `skos:notation`, e.g. `"ReadEnterprise"`. Must be non-empty.
     * @param iri Concept IRI, e.g. `"…/scopes.rdf#ReadEnterprise"`.
     */
    constructor(notation: string, iri: string);
    /**
     * Whether two scopes denote the same scope.
     *
     * Compares the notation, not the IRI, so a scope read off the wire matches
     * its catalogue entry even when the payload carries a differently-namespaced
     * IRI.
     */
    equals(other: Scope): boolean;
    /**
     * This scope as one element of a DPM assignment list.
     *
     * @returns `{"@id": …, "dfc-t:scope": …, "@type": "dfc-t:Scope"}`.
     */
    toJSON(): Record<string, string>;
    /**
     * Reads one element of a DPM assignment list.
     *
     * Missing `@id` is tolerated: the notation is authoritative, so the IRI can
     * be derived from it by the catalogue.
     *
     * @param node A JSON-LD scope node, or the `skos:notation` literal.
     * @param iri IRI to use when the node does not carry one.
     */
    static fromJSON(node: unknown, iri?: string): Scope;
    /** e.g. `Scope(ReadEnterprise)`. */
    toString(): string;
}
