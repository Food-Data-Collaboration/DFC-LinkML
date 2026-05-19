// Class from DFC Business Ontology: #Individual
import { SemanticObject } from "../core/SemanticObject.js";

export interface IndividualParams {
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
}
export class Individual extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Individual";
  }

  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;

  constructor(
    semanticId: string,
    params?: IndividualParams,
  ) {
    super(semanticId);
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = Individual.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:Individual:date", () => this.date);
    this.registerSemanticProperty("dfc-b:Individual:description", () => this.description);
    this.registerSemanticProperty("dfc-b:Individual:name", () => this.name);
    this.registerSemanticProperty("dfc-b:Individual:characteristic_of", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:Individual:has_dimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(Individual.SEMANTIC_TYPE, Individual);
  }
}
