// Class from DFC Business Ontology: #FunctionalProduct
import { SemanticObject } from "../core/SemanticObject.js";
import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";

export interface FunctionalProductParams extends DefinedProductParams {
  requestedBy?: string;
  satisfiedBy?: string;
}
export class FunctionalProduct extends DefinedProduct {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:FunctionalProduct";
  }

  requestedBy?: string;
  satisfiedBy?: string;

  constructor(
    semanticId: string,
    params?: FunctionalProductParams,
  ) {
    super(semanticId, params);
    this.requestedBy = params?.requestedBy;
    this.satisfiedBy = params?.satisfiedBy;
    this.semanticType = FunctionalProduct.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:FunctionalProduct:requested_by", () => this.requestedBy);
    this.registerSemanticProperty("dfc-b:FunctionalProduct:satisfied_by", () => this.satisfiedBy);
  }
  static {
    SemanticObject.typeRegistry.set(FunctionalProduct.SEMANTIC_TYPE, FunctionalProduct);
  }
}
