import bundledFacet from "../taxonomies/facet.js";
import bundledMeasure from "../taxonomies/measure.js";
import bundledProductType from "../taxonomies/product_type.js";
import bundledScope from "../taxonomies/scope.js";
import bundledVocabularyTerm from "../taxonomies/vocabulary_term.js";
export class VocabularyLoader {
    static BUNDLED = {
        Facet: bundledFacet,
        Measure: bundledMeasure,
        ProductType: bundledProductType,
        Scope: bundledScope,
        VocabularyTerm: bundledVocabularyTerm,
    };
    taxonomyVersion;
    ontologyVersion;
    vocabularies;
    // Bundled v2.0.0 vocabularies are loaded unconditionally by design — the
    // connector ships only that version offline. Callers requesting a different
    // taxonomyVersion must override via loadBundled/load.
    constructor(taxonomyVersion = "2.0.0", ontologyVersion = "2.0.0") {
        this.taxonomyVersion = taxonomyVersion;
        this.ontologyVersion = ontologyVersion;
        this.vocabularies = new Map();
        this.loadBundled();
    }
    loadBundled() {
        for (const [name, data] of Object.entries(VocabularyLoader.BUNDLED)) {
            this.load(name, data);
        }
        return this;
    }
    bundledData(name) {
        return VocabularyLoader.BUNDLED[name] || {};
    }
    get taxonomyBaseUrl() {
        return `https://w3id.org/dfc/taxonomies/v${this.taxonomyVersion}`;
    }
    load(name, jsonData) {
        const concepts = {};
        const sources = Array.isArray(jsonData) ? jsonData : [jsonData];
        for (const source of sources) {
            const graph = source["@graph"];
            if (!Array.isArray(graph))
                continue;
            for (const entry of graph) {
                if (typeof entry !== "object" || entry === null)
                    continue;
                const entryObj = entry;
                const types = entryObj["@type"];
                if (!Array.isArray(types))
                    continue;
                const isConcept = types.includes("skos:Concept") ||
                    types.includes("http://www.w3.org/2004/02/skos/core#Concept");
                if (!isConcept)
                    continue;
                const notation = this.extractConceptKey(entryObj);
                if (notation !== undefined) {
                    concepts[notation] = entryObj;
                }
            }
        }
        this.vocabularies.set(name, concepts);
        return this;
    }
    extractConceptKey(entry) {
        const candidates = [
            "skos:notation",
            "http://www.w3.org/2004/02/skos/core#notation",
            "skos:prefLabel",
            "http://www.w3.org/2004/02/skos/core#prefLabel",
        ];
        for (const field of candidates) {
            const value = entry[field];
            if (value === undefined || value === null)
                continue;
            if (typeof value === "string")
                return value;
            if (Array.isArray(value)) {
                for (const item of value) {
                    if (typeof item === "string")
                        return item;
                    if (typeof item === "object" && item !== null) {
                        const wrapped = item["@value"];
                        if (typeof wrapped === "string")
                            return wrapped;
                    }
                }
            }
        }
        return undefined;
    }
    async loadFromUrl(name) {
        const url = `${this.taxonomyBaseUrl}/${name}.json`;
        const response = await fetch(url, {
            headers: { "dfc-version": this.ontologyVersion },
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch taxonomy from ${url}: ${response.status}`);
        }
        const jsonData = await response.json();
        const key = VocabularyLoader.URL_TO_KEY[name.toLowerCase()] || name;
        return this.load(key, jsonData);
    }
    static URL_TO_KEY = {
        facets: "Facet",
        measures: "Measure",
        producttypes: "ProductType",
        scopes: "Scope",
        vocabularyterms: "VocabularyTerm",
    };
    vocabulary(name) {
        return this.vocabularies.get(name) || {};
    }
    facet(key) {
        return key ? this.vocabulary("Facet")[key] : this.vocabulary("Facet");
    }
    measure(key) {
        return key ? this.vocabulary("Measure")[key] : this.vocabulary("Measure");
    }
    product_type(key) {
        return key ? this.vocabulary("ProductType")[key] : this.vocabulary("ProductType");
    }
    scope(key) {
        return key ? this.vocabulary("Scope")[key] : this.vocabulary("Scope");
    }
    vocabulary_term(key) {
        return key ? this.vocabulary("VocabularyTerm")[key] : this.vocabulary("VocabularyTerm");
    }
}
