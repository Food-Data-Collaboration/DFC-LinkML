// Class from DFC Business Ontology: #ProductOptionValue
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";

export interface ProductOptionValueParams extends WhatSubjectParams {}
export class ProductOptionValue extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:ProductOptionValue";
  }



  constructor(
    semanticId: string,
    params?: ProductOptionValueParams,
  ) {
    super(semanticId, params);
    this.semanticType = ProductOptionValue.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(ProductOptionValue.SEMANTIC_TYPE, ProductOptionValue);
  }
}
