import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { ProductOptionValue } from "./ProductOptionValue.js";

/**
 * Constructor parameters for {@link ProductOption}.
 *
 * Own DFC properties: hasReferenceProductOptionValue.
 *
 * Inherited parameters come from {@link WhatSubjectParams}.
 */
export interface ProductOptionParams extends WhatSubjectParams {
  /**
   * Serializes as `dfc-b:hasReferenceProductOptionValue`.
   */
  hasReferenceProductOptionValue?: (ProductOptionValue | string)[];
}

/**
 * A DFC `dfc-b:ProductOption`, serialized with `@type:
 *   dfc-b:ProductOption`.
 * Class hierarchy: `What_Subject` -> `ProductOption`.
 * Own DFC properties: hasReferenceProductOptionValue.
 */
export class ProductOption extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:ProductOption";
  }

  /**
   * Serializes as `dfc-b:hasReferenceProductOptionValue`.
   */
  hasReferenceProductOptionValue?: (ProductOptionValue | string)[];

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
