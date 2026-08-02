export declare class VocabularyLoader {
    private static readonly BUNDLED;
    private taxonomyVersion;
    private ontologyVersion;
    private vocabularies;
    constructor(taxonomyVersion?: string, ontologyVersion?: string);
    loadBundled(): this;
    bundledData(name: string): Record<string, unknown>;
    get taxonomyBaseUrl(): string;
    load(name: string, jsonData: Record<string, unknown>): this;
    loadFromUrl(name: string): Promise<this>;
    vocabulary(name: string): Record<string, unknown>;
    facet(key?: string): unknown;
    measure(key?: string): unknown;
    product_type(key?: string): unknown;
    scope(key?: string): unknown;
    vocabulary_term(key?: string): unknown;
}
