/**
 * Base class for every DFC model object.
 *
 * A `SemanticObject` carries a stable `semanticId` and a set of predicates
 * that are serialized into JSON-LD. Subclasses register their properties in
 * the constructor via {@link registerSemanticProperty}, mapping an original
 * DFC predicate (for example `dfc-b:name`) to a getter for the property.
 *
 * Every generated DFC class (`Organization`, `SuppliedProduct`, `Price`, ...)
 * extends this, directly or through its ancestors.
 *
 * @example
 * ```ts
 * const org = c.createOrganization("https://example.org/org/1", { name: "Acme" });
 * org.getRegisteredPredicates(); // ["dfc-b:name"]
 * org.toJsonLd();                 // { "@id": ..., "@type": "dfc-b:Organization", ... }
 * ```
 */
export class SemanticObject {
    /** Maps a DFC type predicate to its class, populated as model modules load. */
    static typeRegistry = new Map();
    /** The DFC type predicate for this class, e.g. `dfc-b:Organization`. */
    static get SEMANTIC_TYPE() {
        return "";
    }
    /** The object's stable identity, serialized as `@id`. */
    semanticId;
    /** The DFC type predicate, serialized as `@type`. */
    semanticType = "";
    semanticProperties = new Map();
    constructor(semanticId) {
        this.semanticId = semanticId;
    }
    /**
     * Registers a property so it is emitted on export.
     *
     * @param predicate Original DFC predicate, e.g. `dfc-b:vatNumber`.
     * @param getter Returns the current value; called at export time.
     */
    registerSemanticProperty(predicate, getter) {
        this.semanticProperties.set(predicate, getter);
    }
    /** All DFC predicates registered on this object. */
    getRegisteredPredicates() {
        return [...this.semanticProperties.keys()];
    }
    /** The current value of one registered predicate, or `undefined`. */
    getRegisteredValue(predicate) {
        const getter = this.semanticProperties.get(predicate);
        return getter ? getter() : undefined;
    }
    /**
     * Serializes this object to a JSON-LD node.
     *
     * Nested objects are emitted as `{"@id": ...}` references. A sequence of
     * exactly one is collapsed to a scalar, matching JSON-LD compaction.
     *
     * @param context Optional `@context` to attach to the node.
     */
    toJsonLd(context) {
        const result = {
            "@id": this.semanticId,
            "@type": this.semanticType,
        };
        if (context) {
            result["@context"] = context;
        }
        for (const [predicate, getter] of this.semanticProperties) {
            const value = getter();
            if (value === undefined || value === null)
                continue;
            if (Array.isArray(value)) {
                if (value.length === 0)
                    continue;
                result[predicate] = value.map((v) => v instanceof SemanticObject ? { "@id": v.semanticId } : v);
            }
            else if (value instanceof SemanticObject) {
                result[predicate] = { "@id": value.semanticId };
            }
            else {
                result[predicate] = value;
            }
        }
        return result;
    }
    /** Serializes this object to a pretty-printed JSON-LD string. */
    toJson(context) {
        return JSON.stringify(this.toJsonLd(context), null, 2);
    }
}
