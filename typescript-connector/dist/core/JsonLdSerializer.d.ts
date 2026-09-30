import { SemanticObject } from "./SemanticObject.js";
/**
 * Combines one or more {@link SemanticObject} instances into a JSON-LD
 * document, running the `jsonld` compaction pass.
 *
 * A single object is emitted as a bare node; two or more are wrapped in a
 * `@graph` array. `@context` is always emitted as a URL string rather than
 * an inline object, so documents stay compact and shareable.
 *
 * The {@link Connector} uses this internally; you rarely need it directly.
 */
export declare class JsonLdSerializer {
    private context;
    /** @param context The `@context` to attach, normally a context URL string. */
    constructor(context?: unknown);
    /**
     * Serializes objects to a JSON-LD document.
     *
     * @returns A bare node for one object, otherwise a `@graph` document.
     */
    serialize(...objects: SemanticObject[]): Record<string, unknown>;
    private serializeObject;
}
