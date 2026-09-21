// Class from DFC Business Ontology: #ShippingOption
import { SemanticObject } from "../core/SemanticObject.js";
import { HowSubject, type HowSubjectParams } from "./HowSubject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
import type { SaleSession } from "./SaleSession.js";

export interface ShippingOptionParams extends HowSubjectParams {
  endDate?: string;
  fee?: number;
  quantity?: number;
  startDate?: string;
  selectedBy?: string;
  hasQuantity?: QuantitativeValue | string;
  optionOf?: SaleSession | string;
}
export class ShippingOption extends HowSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:ShippingOption";
  }

  endDate?: string;
  fee?: number;
  quantity?: number;
  startDate?: string;
  selectedBy?: string;
  hasQuantity?: QuantitativeValue | string;
  optionOf?: SaleSession | string;

  constructor(
    semanticId: string,
    params?: ShippingOptionParams,
  ) {
    super(semanticId, params);
    this.endDate = params?.endDate;
    this.fee = params?.fee;
    this.quantity = params?.quantity;
    this.startDate = params?.startDate;
    this.selectedBy = params?.selectedBy;
    this.hasQuantity = params?.hasQuantity;
    this.optionOf = params?.optionOf;
    this.semanticType = ShippingOption.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:endDate", () => this.endDate);
    this.registerSemanticProperty("dfc-b:fee", () => this.fee);
    this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
    this.registerSemanticProperty("dfc-b:startDate", () => this.startDate);
    this.registerSemanticProperty("dfc-b:selectedBy", () => this.selectedBy);
    this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
    this.registerSemanticProperty("dfc-b:optionOf", () => this.optionOf);
  }
  static {
    SemanticObject.typeRegistry.set(ShippingOption.SEMANTIC_TYPE, ShippingOption);
  }
}
