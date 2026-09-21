// Class from DFC Business Ontology: #FunctionalProduct
import { SemanticObject } from "../core/SemanticObject.js";
import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";
import type { Agent } from "./Agent.js";
import type { TechnicalProduct } from "./TechnicalProduct.js";

export interface FunctionalProductParams extends DefinedProductParams {
  requestedBy?: Agent | string;
  satisfiedBy?: TechnicalProduct | string;
}
export class FunctionalProduct extends DefinedProduct {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:FunctionalProduct";
  }

  requestedBy?: Agent | string;
  satisfiedBy?: TechnicalProduct | string;

  constructor(
    semanticId: string,
    params?: FunctionalProductParams,
  ) {
    super(semanticId, params);
    this.requestedBy = params?.requestedBy;
    this.satisfiedBy = params?.satisfiedBy;
    this.semanticType = FunctionalProduct.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:requestedBy", () => this.requestedBy);
    this.registerSemanticProperty("dfc-b:satisfiedBy", () => this.satisfiedBy);
  }
  static {
    SemanticObject.typeRegistry.set(FunctionalProduct.SEMANTIC_TYPE, FunctionalProduct);
  }
}
