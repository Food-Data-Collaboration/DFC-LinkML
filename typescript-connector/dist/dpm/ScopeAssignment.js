import { HAS_ASSIGNED_SCOPES, RDF_LIST, SCOPE_TERM } from "./DfcTerms.js";
import { Scope } from "./Scope.js";
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
export class ScopeAssignment {
    /** `@id` of the platform or organisation holding the scopes. */
    subject;
    /** The assigned scopes, in the order given. */
    scopes;
    /**
     * @param subject `@id` of the platform or organisation.
     * @param scopes The scopes assigned to it.
     */
    constructor(subject, scopes) {
        if (typeof subject !== "string" || subject.length === 0) {
            throw new Error("ScopeAssignment subject must be a non-empty @id");
        }
        this.subject = subject;
        this.scopes = [...scopes];
    }
    /**
     * Whether this assignment includes a scope.
     *
     * @param scope A scope, or its `skos:notation`.
     */
    has(scope) {
        const notation = typeof scope === "string" ? scope : scope.notation;
        return this.scopes.some((s) => s.notation === notation);
    }
    /**
     * The scopes this assignment carries that the catalogue does not recognise.
     *
     * Assignment import never drops what it does not understand — silently
     * discarding a scope would be an authorisation decision made invisibly. This
     * method surfaces the same data so a caller can reject it, warn, or forward
     * it to a newer DPM.
     */
    unknown(catalogue) {
        return this.scopes.filter((s) => !catalogue.contains(s.notation));
    }
    /**
     * This assignment as the JSON-LD the DPM reads and writes.
     *
     * @returns `{"@id": …, "dfc-t:hasAssignedScopes": {"@type": "rdf:List", "@list": […]}}`.
     */
    toJSON() {
        return {
            "@id": this.subject,
            [HAS_ASSIGNED_SCOPES]: {
                "@type": RDF_LIST,
                "@list": this.scopes.map((s) => s.toJSON()),
            },
        };
    }
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
    static fromJSON(node, subject, catalogue) {
        const { id, list } = ScopeAssignment.unwrapList(node);
        const resolvedSubject = id ?? subject;
        if (resolvedSubject === undefined) {
            throw new Error("ScopeAssignment.fromJSON needs the platform @id: pass it explicitly when the document carries none");
        }
        const scopes = list.map((element) => {
            const record = ScopeAssignment.asRecord(element, "scope node");
            const notation = record[SCOPE_TERM];
            if (typeof notation !== "string" || notation.length === 0) {
                throw new Error(`DPM scope node carries no "${SCOPE_TERM}" literal: ${JSON.stringify(element)}`);
            }
            const idInNode = record["@id"];
            if (typeof idInNode === "string" && idInNode.length > 0) {
                return new Scope(notation, idInNode);
            }
            return new Scope(notation, catalogue?.byNotation(notation)?.iri ?? notation);
        });
        return new ScopeAssignment(resolvedSubject, scopes);
    }
    /** e.g. `ScopeAssignment(https://x/platform[2 scopes])`. */
    toString() {
        return `ScopeAssignment(${this.subject}[${this.scopes.length} scopes])`;
    }
    /**
     * Peels the document down to its `@list` and `@id`, at whatever nesting.
     */
    static unwrapList(node) {
        if (Array.isArray(node)) {
            return { id: undefined, list: node };
        }
        const record = ScopeAssignment.asRecord(node, "assignment");
        const id = typeof record["@id"] === "string" ? record["@id"] : undefined;
        const relation = record[HAS_ASSIGNED_SCOPES];
        if (relation === undefined) {
            if (Array.isArray(record["@list"])) {
                return { id, list: record["@list"] };
            }
            throw new Error(`DPM assignment carries no "${HAS_ASSIGNED_SCOPES}" and no "@list": ${JSON.stringify(node)}`);
        }
        if (Array.isArray(relation)) {
            return { id, list: relation };
        }
        const nested = ScopeAssignment.asRecord(relation, `"${HAS_ASSIGNED_SCOPES}" value`);
        if (!Array.isArray(nested["@list"])) {
            throw new Error(`"${HAS_ASSIGNED_SCOPES}" carries no "@list"`);
        }
        return { id, list: nested["@list"] };
    }
    static asRecord(node, what) {
        if (node === null || typeof node !== "object" || Array.isArray(node)) {
            throw new Error(`Not a DPM ${what}: ${JSON.stringify(node)}`);
        }
        return node;
    }
}
