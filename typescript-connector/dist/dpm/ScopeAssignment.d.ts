import { Scope } from "./Scope.js";
import { ScopeCatalogue } from "./ScopeCatalogue.js";
/**
 * The scopes assigned to one platform or organisation.
 *
 * This is the assignment *relation* — "this platform may do these six things" —
 * not an authorisation decision. Scope is a coarse API gate: an assignment is
 * necessary but never sufficient (see ADR-0009 and ADR-0014), and the grant
 * layer that decides individual operations is separate from this data.
 *
 * The assignment table is deployment state, differing per installation and per
 * consent decision, which is why it is a hand-written model rather than a class
 * generated from the LinkML schema.
 */
export declare class ScopeAssignment {
    /** `@id` of the platform or organisation holding the scopes. */
    readonly subject: string;
    /** The assigned scopes, in the order given. */
    readonly scopes: readonly Scope[];
    /**
     * @param subject `@id` of the platform or organisation.
     * @param scopes The scopes assigned to it.
     */
    constructor(subject: string, scopes: Scope[]);
    /**
     * Whether this assignment includes a scope.
     *
     * @param scope A scope, or its `skos:notation`.
     */
    has(scope: Scope | string): boolean;
    /**
     * The scopes this assignment carries that the catalogue does not recognise.
     *
     * Assignment import never drops what it does not understand — silently
     * discarding a scope would be an authorisation decision made invisibly. This
     * method surfaces the same data so a caller can reject it, warn, or forward
     * it to a newer DPM.
     */
    unknown(catalogue: ScopeCatalogue): Scope[];
    /**
     * This assignment as the JSON-LD the DPM reads and writes.
     *
     * @returns `{"@id": …, "dfc-t:hasAssignedScopes": {"@type": "rdf:List", "@list": […]}}`.
     */
    toJSON(): Record<string, unknown>;
    /**
     * Reads an assignment from a DPM document.
     *
     * Tolerant of the shapes that occur in practice: the whole document, the
     * `dfc-t:hasAssignedScopes` value on its own, the `@list` wrapper, and a bare
     * array (which is what the DPM serves for `requestedScopes`).
     *
     * Nothing is dropped on the way in. An element the catalogue does not
     * recognise is kept as-is and reported by {@link unknown}.
     *
     * @param node The document, list wrapper or array to read.
     * @param subject `@id` to use when `node` does not carry one.
     * @param catalogue Catalogue used to resolve an element that carries only a
     *   `dfc-t:scope` literal and no `@id`.
     * @throws Error when no subject is available, or an element is malformed.
     */
    static fromJSON(node: unknown, subject?: string, catalogue?: ScopeCatalogue): ScopeAssignment;
    /** e.g. `ScopeAssignment(https://x/platform[2 scopes])`. */
    toString(): string;
    /**
     * Peels the document down to its `@list` and `@id`, at whatever nesting.
     */
    private static unwrapList;
    private static asRecord;
}
