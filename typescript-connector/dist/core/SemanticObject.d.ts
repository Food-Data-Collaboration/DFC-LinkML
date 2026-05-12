export declare class SemanticObject {
    static typeRegistry: Map<string, typeof SemanticObject>;
    static get SEMANTIC_TYPE(): string;
    semanticId: string;
    semanticType: string;
    private semanticProperties;
    constructor(semanticId: string);
    registerSemanticProperty(predicate: string, getter: () => unknown): void;
    toJsonLd(context?: unknown): Record<string, unknown>;
    toJson(context?: unknown): string;
}
