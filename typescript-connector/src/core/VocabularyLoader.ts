export class VocabularyLoader {
  private taxonomyVersion: string;
  private vocabularies: Map<string, Record<string, unknown>>;

  constructor(taxonomyVersion: string = "2.0.0") {
    this.taxonomyVersion = taxonomyVersion;
    this.vocabularies = new Map();
  }

  get taxonomyBaseUrl(): string {
    return `https://w3id.org/dfc/taxonomies/v$this.taxonomyVersion`;
  }

  load(name: string, jsonData: Record<string, unknown>): this {
    const concepts: Record<string, unknown> = {};
    const graph = (jsonData["@graph"] as Array<Record<string, unknown>>) || [];
    for (const entry of graph) {
      const types = entry["@type"];
      if (Array.isArray(types) && types.includes("skos:Concept")) {
        const notation = (entry["skos:notation"] || entry["skos:prefLabel"]) as string;
        concepts[notation] = entry;
      }
    }
    this.vocabularies.set(name, concepts);
    return this;
  }

  async loadFromUrl(name: string): Promise<this> {
    const url = `${this.taxonomyBaseUrl}/${name.toLowerCase()}.json`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch taxonomy from ${url}: ${response.status}`);
    }
    const jsonData = await response.json() as Record<string, unknown>;
    return this.load(name, jsonData);
  }

  vocabulary(name: string): Record<string, unknown> {
    return this.vocabularies.get(name) || {};
  }

  facet(key?: string): unknown {
    return key ? this.vocabulary("Facet")[key] : this.vocabulary("Facet");
  }

  measure(key?: string): unknown {
    return key ? this.vocabulary("Measure")[key] : this.vocabulary("Measure");
  }

  product_type(key?: string): unknown {
    return key ? this.vocabulary("ProductType")[key] : this.vocabulary("ProductType");
  }

  scope(key?: string): unknown {
    return key ? this.vocabulary("Scope")[key] : this.vocabulary("Scope");
  }

  vocabulary_term(key?: string): unknown {
    return key ? this.vocabulary("VocabularyTerm")[key] : this.vocabulary("VocabularyTerm");
  }

}
