import { SemanticObject } from "../core/SemanticObject.js";
import { ShippingOption, type ShippingOptionParams } from "./ShippingOption.js";
import type { Address } from "./Address.js";

/**
 * Constructor parameters for {@link DeliveryOption}.
 *
 * Own DFC properties: accessibilityInfo, deliveryConstraint, deliveredAt,
 *   uses, refersTo.
 *
 * Inherited parameters come from {@link ShippingOptionParams}.
 */
export interface DeliveryOptionParams extends ShippingOptionParams {
  /**
   * Serializes as `dfc-b:accessibilityInfo`.
   */
  accessibilityInfo?: string;
  /**
   * Any constraints (time or physical) that are applied to the delivery
   *   (e.g. "9am-5pm Mon - Fri only", "only deliver after 6pm", or "Delivery
   *   to be left in porch")
   *
   * Serializes as `dfc-b:deliveryConstraint`.
   */
  deliveryConstraint?: string;
  /**
   * Serializes as `dfc-b:deliveredAt`.
   */
  deliveredAt?: string;
  /**
   * *** DEPRECATED *** Use `refersTo` instead.The Address the delivery will
   *   be/was made to
   *
   * Serializes as `dfc-b:uses`.
   */
  uses?: string[];
  /**
   * The Address the delivery will be/was made to
   *
   * Serializes as `dfc-b:refersTo`.
   */
  refersTo?: Address | string;
}

/**
 * A DFC `dfc-b:DeliveryOption`, serialized with `@type:
 *   dfc-b:DeliveryOption`.
 * Class hierarchy: `How_Subject` -> `ShippingOption` -> `DeliveryOption`.
 * Own DFC properties: accessibilityInfo, deliveryConstraint, deliveredAt,
 *   uses, refersTo.
 */
export class DeliveryOption extends ShippingOption {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:DeliveryOption";
  }

  /**
   * Serializes as `dfc-b:accessibilityInfo`.
   */
  accessibilityInfo?: string;
  /**
   * Any constraints (time or physical) that are applied to the delivery
   *   (e.g. "9am-5pm Mon - Fri only", "only deliver after 6pm", or "Delivery
   *   to be left in porch")
   *
   * Serializes as `dfc-b:deliveryConstraint`.
   */
  deliveryConstraint?: string;
  /**
   * Serializes as `dfc-b:deliveredAt`.
   */
  deliveredAt?: string;
  /**
   * *** DEPRECATED *** Use `refersTo` instead.The Address the delivery will
   *   be/was made to
   *
   * Serializes as `dfc-b:uses`.
   */
  uses?: string[];
  /**
   * The Address the delivery will be/was made to
   *
   * Serializes as `dfc-b:refersTo`.
   */
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
