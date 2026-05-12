// Class from DFC Business Ontology: #Where_Subject
import { SemanticObject } from "../core/SemanticObject.js";

export interface WhereSubjectParams {
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
}
export class WhereSubject extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Where_Subject";
  }

  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;

  constructor(
    semanticId: string,
    params?: WhereSubjectParams,
  ) {
    super(semanticId);
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = WhereSubject.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:Where_Subject:date", () => this.date);
    this.registerSemanticProperty("dfc-b:Where_Subject:description", () => this.description);
    this.registerSemanticProperty("dfc-b:Where_Subject:name", () => this.name);
    this.registerSemanticProperty("dfc-b:Where_Subject:characteristic_of", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:Where_Subject:has_dimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(WhereSubject.SEMANTIC_TYPE, WhereSubject);
  }
}
