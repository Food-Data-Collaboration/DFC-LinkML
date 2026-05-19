// Class from DFC Business Ontology: #Collection
import { SemanticObject } from "../core/SemanticObject.js";

export interface CollectionParams {
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
}
export class Collection extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Collection";
  }

  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;

  constructor(
    semanticId: string,
    params?: CollectionParams,
  ) {
    super(semanticId);
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = Collection.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:Collection:date", () => this.date);
    this.registerSemanticProperty("dfc-b:Collection:description", () => this.description);
    this.registerSemanticProperty("dfc-b:Collection:name", () => this.name);
    this.registerSemanticProperty("dfc-b:Collection:characteristic_of", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:Collection:has_dimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(Collection.SEMANTIC_TYPE, Collection);
  }
}
