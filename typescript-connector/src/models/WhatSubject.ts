// Class from DFC Business Ontology: #What_Subject
import { SemanticObject } from "../core/SemanticObject.js";

export interface WhatSubjectParams {
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
}
export class WhatSubject extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:What_Subject";
  }

  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;

  constructor(
    semanticId: string,
    params?: WhatSubjectParams,
  ) {
    super(semanticId);
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = WhatSubject.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(WhatSubject.SEMANTIC_TYPE, WhatSubject);
  }
}
