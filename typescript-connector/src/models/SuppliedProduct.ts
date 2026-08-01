// Class from DFC Business Ontology: #SuppliedProduct
import { SemanticObject } from "../core/SemanticObject.js";
import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";

export interface SuppliedProductParams extends DefinedProductParams {
  availabilityTime?: string;
  deliveryCondition?: string;
  frozen?: boolean;
  refrigerated?: boolean;
  totalTheoriticalStock?: number;
  hasTemperature?: string;
  industrializes?: string[];
  producedBy?: string;
  referenceOf?: string;
  suppliedBy?: string;
}
export class SuppliedProduct extends DefinedProduct {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:SuppliedProduct";
  }

  availabilityTime?: string;
  deliveryCondition?: string;
  frozen?: boolean;
  refrigerated?: boolean;
  totalTheoriticalStock?: number;
  hasTemperature?: string;
  industrializes?: string[];
  producedBy?: string;
  referenceOf?: string;
  suppliedBy?: string;

  constructor(
    semanticId: string,
    params?: SuppliedProductParams,
  ) {
    super(semanticId, params);
    this.availabilityTime = params?.availabilityTime;
    this.deliveryCondition = params?.deliveryCondition;
    this.frozen = params?.frozen;
    this.refrigerated = params?.refrigerated;
    this.totalTheoriticalStock = params?.totalTheoriticalStock;
    this.hasTemperature = params?.hasTemperature;
    this.industrializes = params?.industrializes;
    this.producedBy = params?.producedBy;
    this.referenceOf = params?.referenceOf;
    this.suppliedBy = params?.suppliedBy;
    this.semanticType = SuppliedProduct.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:availabilityTime", () => this.availabilityTime);
    this.registerSemanticProperty("dfc-b:deliveryCondition", () => this.deliveryCondition);
    this.registerSemanticProperty("dfc-b:frozen", () => this.frozen);
    this.registerSemanticProperty("dfc-b:refrigerated", () => this.refrigerated);
    this.registerSemanticProperty("dfc-b:totalTheoriticalStock", () => this.totalTheoriticalStock);
    this.registerSemanticProperty("dfc-b:hasTemperature", () => this.hasTemperature);
    this.registerSemanticProperty("dfc-b:industrializes", () => this.industrializes);
    this.registerSemanticProperty("dfc-b:producedBy", () => this.producedBy);
    this.registerSemanticProperty("dfc-b:referenceOf", () => this.referenceOf);
    this.registerSemanticProperty("dfc-b:suppliedBy", () => this.suppliedBy);
  }
  static {
    SemanticObject.typeRegistry.set(SuppliedProduct.SEMANTIC_TYPE, SuppliedProduct);
  }
}
