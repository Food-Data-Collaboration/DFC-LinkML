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
    this.registerSemanticProperty("dfc-b:SuppliedProduct:availability_time", () => this.availabilityTime);
    this.registerSemanticProperty("dfc-b:SuppliedProduct:delivery_condition", () => this.deliveryCondition);
    this.registerSemanticProperty("dfc-b:SuppliedProduct:frozen", () => this.frozen);
    this.registerSemanticProperty("dfc-b:SuppliedProduct:refrigerated", () => this.refrigerated);
    this.registerSemanticProperty("dfc-b:SuppliedProduct:total_theoritical_stock", () => this.totalTheoriticalStock);
    this.registerSemanticProperty("dfc-b:SuppliedProduct:has_temperature", () => this.hasTemperature);
    this.registerSemanticProperty("dfc-b:SuppliedProduct:industrializes", () => this.industrializes);
    this.registerSemanticProperty("dfc-b:SuppliedProduct:produced_by", () => this.producedBy);
    this.registerSemanticProperty("dfc-b:SuppliedProduct:reference_of", () => this.referenceOf);
    this.registerSemanticProperty("dfc-b:SuppliedProduct:supplied_by", () => this.suppliedBy);
  }
  static {
    SemanticObject.typeRegistry.set(SuppliedProduct.SEMANTIC_TYPE, SuppliedProduct);
  }
}
