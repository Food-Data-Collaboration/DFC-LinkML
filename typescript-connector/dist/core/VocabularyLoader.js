export class VocabularyLoader {
    taxonomyVersion;
    vocabularies;
    constructor(taxonomyVersion = "2.0.0") {
        this.taxonomyVersion = taxonomyVersion;
        this.vocabularies = new Map();
    }
    get taxonomyBaseUrl() {
        return `https://w3id.org/dfc/taxonomies/v$this.taxonomyVersion`;
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
                const key = this.extractConceptKey(entryObj);
                if (key === undefined)
                    continue;
                concepts[key] = entryObj;
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
                        const v = item["@value"];
                        if (typeof v === "string")
                            return v;
                    }
                }
            }
        }
        return undefined;
    }
    async loadFromUrl(name) {
        const url = `${this.taxonomyBaseUrl}/${name.toLowerCase()}.json`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch taxonomy from ${url}: ${response.status}`);
        }
        const jsonData = await response.json();
        return this.load(name, jsonData);
    }
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
