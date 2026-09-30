import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";

/**
 * Constructor parameters for {@link ProductOptionValue}.
 */
export interface ProductOptionValueParams extends WhatSubjectParams {}

/**
 * A DFC `dfc-b:ProductOptionValue`, serialized with `@type:
 *   dfc-b:ProductOptionValue`.
 * Class hierarchy: `What_Subject` -> `ProductOptionValue`.
 */
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
