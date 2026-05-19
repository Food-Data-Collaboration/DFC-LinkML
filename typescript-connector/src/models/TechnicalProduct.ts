// Class from DFC Business Ontology: #TechnicalProduct
import { SemanticObject } from "../core/SemanticObject.js";
import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";

export interface TechnicalProductParams extends DefinedProductParams {
  industrializedBy?: string;
  proposedBy?: string;
  satisfies?: string[];
}
export class TechnicalProduct extends DefinedProduct {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:TechnicalProduct";
  }

  industrializedBy?: string;
  proposedBy?: string;
  satisfies?: string[];

  constructor(
    semanticId: string,
    params?: TechnicalProductParams,
  ) {
    super(semanticId, params);
    this.industrializedBy = params?.industrializedBy;
    this.proposedBy = params?.proposedBy;
    this.satisfies = params?.satisfies;
    this.semanticType = TechnicalProduct.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:TechnicalProduct:industrialized_by", () => this.industrializedBy);
    this.registerSemanticProperty("dfc-b:TechnicalProduct:proposed_by", () => this.proposedBy);
    this.registerSemanticProperty("dfc-b:TechnicalProduct:satisfies", () => this.satisfies);
  }
  static {
    SemanticObject.typeRegistry.set(TechnicalProduct.SEMANTIC_TYPE, TechnicalProduct);
  }
}
