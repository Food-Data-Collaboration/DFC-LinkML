// Class from DFC Business Ontology: #VariantCaracteristic
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { ProductOption } from "./ProductOption.js";
import type { ProductOptionValue } from "./ProductOptionValue.js";

export interface VariantCaracteristicParams extends WhatSubjectParams {
  hasProductOption?: ProductOption;
  hasProductOptionValue?: ProductOptionValue;
}
export class VariantCaracteristic extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:VariantCaracteristic";
  }

  hasProductOption?: ProductOption;
  hasProductOptionValue?: ProductOptionValue;

  constructor(
    semanticId: string,
    params?: VariantCaracteristicParams,
  ) {
    super(semanticId, params);
    this.hasProductOption = params?.hasProductOption;
    this.hasProductOptionValue = params?.hasProductOptionValue;
    this.semanticType = VariantCaracteristic.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:VariantCaracteristic:has_product_option", () => this.hasProductOption);
    this.registerSemanticProperty("dfc-b:VariantCaracteristic:has_product_option_value", () => this.hasProductOptionValue);
  }
  static {
    SemanticObject.typeRegistry.set(VariantCaracteristic.SEMANTIC_TYPE, VariantCaracteristic);
  }
}
