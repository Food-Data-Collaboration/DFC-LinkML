// Class from DFC Business Ontology: #ProductOption
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { ProductOptionValue } from "./ProductOptionValue.js";

export interface ProductOptionParams extends WhatSubjectParams {
  hasReferenceProductOptionValue?: ProductOptionValue;
}
export class ProductOption extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:ProductOption";
  }

  hasReferenceProductOptionValue?: ProductOptionValue;

  constructor(
    semanticId: string,
    params?: ProductOptionParams,
  ) {
    super(semanticId, params);
    this.hasReferenceProductOptionValue = params?.hasReferenceProductOptionValue;
    this.semanticType = ProductOption.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:hasReferenceProductOptionValue", () => this.hasReferenceProductOptionValue);
  }
  static {
    SemanticObject.typeRegistry.set(ProductOption.SEMANTIC_TYPE, ProductOption);
  }
}
