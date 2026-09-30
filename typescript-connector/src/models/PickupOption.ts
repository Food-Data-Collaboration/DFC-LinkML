import { SemanticObject } from "../core/SemanticObject.js";
import { ShippingOption, type ShippingOptionParams } from "./ShippingOption.js";

/**
 * Constructor parameters for {@link PickupOption}.
 *
 * Own DFC properties: pickedUpAt, uses.
 *
 * Inherited parameters come from {@link ShippingOptionParams}.
 */
export interface PickupOptionParams extends ShippingOptionParams {
  /**
   * Serializes as `dfc-b:pickedUpAt`.
   */
  pickedUpAt?: string;
  /**
   * *** DEPRECATED *** Use `refersTo` instead.The Address the delivery will
   *   be/was made to
   *
   * Serializes as `dfc-b:uses`.
   */
  uses?: string[];
}

/**
 * A DFC `dfc-b:PickupOption`, serialized with `@type: dfc-b:PickupOption`.
 * Class hierarchy: `How_Subject` -> `ShippingOption` -> `PickupOption`.
 * Own DFC properties: pickedUpAt, uses.
 */
export class PickupOption extends ShippingOption {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:PickupOption";
  }

  /**
   * Serializes as `dfc-b:pickedUpAt`.
   */
  pickedUpAt?: string;
  /**
   * *** DEPRECATED *** Use `refersTo` instead.The Address the delivery will
   *   be/was made to
   *
   * Serializes as `dfc-b:uses`.
   */
  uses?: string[];

  constructor(
    semanticId: string,
    params?: PickupOptionParams,
  ) {
    super(semanticId, params);
    this.pickedUpAt = params?.pickedUpAt;
    this.uses = params?.uses;
    this.semanticType = PickupOption.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:pickedUpAt", () => this.pickedUpAt);
    this.registerSemanticProperty("dfc-b:uses", () => this.uses);
  }
  static {
    SemanticObject.typeRegistry.set(PickupOption.SEMANTIC_TYPE, PickupOption);
  }
}
