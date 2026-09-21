// Class from DFC Business Ontology: #DeliveryOption
import { SemanticObject } from "../core/SemanticObject.js";
import { ShippingOption, type ShippingOptionParams } from "./ShippingOption.js";
import type { Address } from "./Address.js";

export interface DeliveryOptionParams extends ShippingOptionParams {
  accessibilityInfo?: string;
  deliveryConstraint?: string;
  deliveredAt?: string;
  uses?: string[];
  refersTo?: Address | string;
}
export class DeliveryOption extends ShippingOption {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:DeliveryOption";
  }

  accessibilityInfo?: string;
  deliveryConstraint?: string;
  deliveredAt?: string;
  uses?: string[];
  refersTo?: Address | string;

  constructor(
    semanticId: string,
    params?: DeliveryOptionParams,
  ) {
    super(semanticId, params);
    this.accessibilityInfo = params?.accessibilityInfo;
    this.deliveryConstraint = params?.deliveryConstraint;
    this.deliveredAt = params?.deliveredAt;
    this.uses = params?.uses;
    this.refersTo = params?.refersTo;
    this.semanticType = DeliveryOption.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:accessibilityInfo", () => this.accessibilityInfo);
    this.registerSemanticProperty("dfc-b:deliveryConstraint", () => this.deliveryConstraint);
    this.registerSemanticProperty("dfc-b:deliveredAt", () => this.deliveredAt);
    this.registerSemanticProperty("dfc-b:uses", () => this.uses);
    this.registerSemanticProperty("dfc-b:refersTo", () => this.refersTo);
  }
  static {
    SemanticObject.typeRegistry.set(DeliveryOption.SEMANTIC_TYPE, DeliveryOption);
  }
}
