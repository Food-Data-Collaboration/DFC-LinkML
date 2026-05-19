// Class from DFC Business Ontology: #How_Subject
import { SemanticObject } from "../core/SemanticObject.js";

export interface HowSubjectParams {
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
}
export class HowSubject extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:How_Subject";
  }

  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;

  constructor(
    semanticId: string,
    params?: HowSubjectParams,
  ) {
    super(semanticId);
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = HowSubject.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:How_Subject:date", () => this.date);
    this.registerSemanticProperty("dfc-b:How_Subject:description", () => this.description);
    this.registerSemanticProperty("dfc-b:How_Subject:name", () => this.name);
    this.registerSemanticProperty("dfc-b:How_Subject:characteristic_of", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:How_Subject:has_dimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(HowSubject.SEMANTIC_TYPE, HowSubject);
  }
}
