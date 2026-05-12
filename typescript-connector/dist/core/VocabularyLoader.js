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
        const graph = jsonData["@graph"] || [];
        for (const entry of graph) {
            const types = entry["@type"];
            if (Array.isArray(types) && types.includes("skos:Concept")) {
                const notation = (entry["skos:notation"] || entry["skos:prefLabel"]);
                concepts[notation] = entry;
            }
        }
        this.vocabularies.set(name, concepts);
        return this;
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
