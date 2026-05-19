// Class from DFC Business Ontology: #Brand
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";

export interface BrandParams extends WhatSubjectParams {
  brandOf?: string;
  ownedBy?: string;
}
export class Brand extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Brand";
  }

  brandOf?: string;
  ownedBy?: string;

  constructor(
    semanticId: string,
    params?: BrandParams,
  ) {
    super(semanticId, params);
    this.brandOf = params?.brandOf;
    this.ownedBy = params?.ownedBy;
    this.semanticType = Brand.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:Brand:brand_of", () => this.brandOf);
    this.registerSemanticProperty("dfc-b:Brand:owned_by", () => this.ownedBy);
  }
  static {
    SemanticObject.typeRegistry.set(Brand.SEMANTIC_TYPE, Brand);
  }
}
