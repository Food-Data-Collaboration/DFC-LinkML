/**
 * Loads the SKOS controlled vocabularies that DFC models refer to: facets,
 * measures, product types, scopes, and vocabulary terms.
 *
 * The bundled v2.0.0 vocabularies ship with the package and are loaded on
 * construction, so construct, export, and import all work offline. Loading a
 * different taxonomy version is opt-in via {@link VocabularyLoader.load}.
 *
 * Most callers use {@link Connector} instead, which wraps this loader.
 */
export declare class VocabularyLoader {
    private static readonly BUNDLED;
    private taxonomyVersion;
    private ontologyVersion;
    private vocabularies;
    /**
     * @param taxonomyVersion Version of the SKOS taxonomies to load.
     * @param ontologyVersion Version of the DFC ontology whose context to use.
     */
    constructor(taxonomyVersion?: string, ontologyVersion?: string);
    /** Loads the bundled vocabularies, replacing any currently loaded data. */
    loadBundled(): this;
    /** The raw bundled data for one vocabulary, or an empty object. */
    bundledData(name: string): Record<string, unknown>;
    /** Base URL of the SKOS taxonomies for the loaded taxonomy version. */
    get taxonomyBaseUrl(): string;
    /**
     * Loads a vocabulary from SKOS JSON-LD, keeping every `skos:Concept` found.
     *
     * @param name Vocabulary name, e.g. `Facet`.
     * @param jsonData A node, an array of nodes, or a document with `@graph`.
     */
    load(name: string, jsonData: Record<string, unknown>): this;
    private extractConceptKey;
    loadFromUrl(name: string): Promise<this>;
    private static readonly URL_TO_KEY;
    vocabulary(name: string): Record<string, unknown>;
    facet(key?: string): unknown;
    measure(key?: string): unknown;
    product_type(key?: string): unknown;
    scope(key?: string): unknown;
    vocabulary_term(key?: string): unknown;
}
