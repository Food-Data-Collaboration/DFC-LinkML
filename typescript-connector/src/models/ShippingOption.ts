import { SemanticObject } from "../core/SemanticObject.js";
import { HowSubject, type HowSubjectParams } from "./HowSubject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
import type { SaleSession } from "./SaleSession.js";

/**
 * Constructor parameters for {@link ShippingOption}.
 *
 * Own DFC properties: endDate, fee, quantity, startDate, selectedBy,
 *   hasQuantity, optionOf.
 *
 * Inherited parameters come from {@link HowSubjectParams}.
 */
export interface ShippingOptionParams extends HowSubjectParams {
  /**
   * The date/time that the Sales Session ends
   *
   * Serializes as `dfc-b:endDate`.
   */
  endDate?: string;
  /**
   * The value of any fee associated with the Shipping Option
   *
   * Serializes as `dfc-b:fee`.
   */
  fee?: number;
  /**
   * DEPRECATE
   *
   * Serializes as `dfc-b:quantity`.
   */
  quantity?: number;
  /**
   * The date/time that the Sales Session starts
   *
   * Serializes as `dfc-b:startDate`.
   */
  startDate?: string;
  /**
   * Serializes as `dfc-b:selectedBy`.
   */
  selectedBy?: string;
  /**
   * The actual numeric value of the Price, in the currency unit specified
   *   with hasUnit
   *
   * Serializes as `dfc-b:hasQuantity`.
   */
  hasQuantity?: QuantitativeValue | string;
  /**
   * All Sales Sessions the ShippingOption is available for selection
   *   during.
   *
   * Serializes as `dfc-b:optionOf`.
   */
  optionOf?: SaleSession | string;
}

/**
 * A DFC `dfc-b:ShippingOption`, serialized with `@type:
 *   dfc-b:ShippingOption`.
 * Class hierarchy: `How_Subject` -> `ShippingOption`.
 * Own DFC properties: endDate, fee, quantity, startDate, selectedBy,
 *   hasQuantity, optionOf.
 */
export class ShippingOption extends HowSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:ShippingOption";
  }

  /**
   * The date/time that the Sales Session ends
   *
   * Serializes as `dfc-b:endDate`.
   */
  endDate?: string;
  /**
   * The value of any fee associated with the Shipping Option
   *
   * Serializes as `dfc-b:fee`.
   */
  fee?: number;
  /**
   * DEPRECATE
   *
   * Serializes as `dfc-b:quantity`.
   */
  quantity?: number;
  /**
   * The date/time that the Sales Session starts
   *
   * Serializes as `dfc-b:startDate`.
   */
  startDate?: string;
  /**
   * Serializes as `dfc-b:selectedBy`.
   */
  selectedBy?: string;
  /**
   * The actual numeric value of the Price, in the currency unit specified
   *   with hasUnit
   *
   * Serializes as `dfc-b:hasQuantity`.
   */
  hasQuantity?: QuantitativeValue | string;
  /**
   * All Sales Sessions the ShippingOption is available for selection
   *   during.
   *
   * Serializes as `dfc-b:optionOf`.
   */
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
