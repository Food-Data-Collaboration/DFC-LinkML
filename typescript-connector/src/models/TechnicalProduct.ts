// Class from DFC Business Ontology: #TechnicalProduct
import { SemanticObject } from "../core/SemanticObject.js";
import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";
import type { FunctionalProduct } from "./FunctionalProduct.js";
import type { Organization } from "./Organization.js";
import type { SuppliedProduct } from "./SuppliedProduct.js";

export interface TechnicalProductParams extends DefinedProductParams {
  industrializedBy?: SuppliedProduct | string;
  proposedBy?: Organization | string;
  satisfies?: (FunctionalProduct | string)[];
}
export class TechnicalProduct extends DefinedProduct {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:TechnicalProduct";
  }

  industrializedBy?: SuppliedProduct | string;
  proposedBy?: Organization | string;
  satisfies?: (FunctionalProduct | string)[];

  constructor(
    semanticId: string,
    params?: TechnicalProductParams,
  ) {
    super(semanticId, params);
    this.industrializedBy = params?.industrializedBy;
    this.proposedBy = params?.proposedBy;
    this.satisfies = params?.satisfies;
    this.semanticType = TechnicalProduct.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:industrializedBy", () => this.industrializedBy);
    this.registerSemanticProperty("dfc-b:proposedBy", () => this.proposedBy);
    this.registerSemanticProperty("dfc-b:satisfies", () => this.satisfies);
  }
  static {
    SemanticObject.typeRegistry.set(TechnicalProduct.SEMANTIC_TYPE, TechnicalProduct);
  }
}
