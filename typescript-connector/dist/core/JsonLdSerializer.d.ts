import { SemanticObject } from "./SemanticObject.js";
export declare class JsonLdSerializer {
    private context;
    constructor(context?: unknown);
    serialize(...objects: SemanticObject[]): Record<string, unknown>;
    private serializeObject;
}
