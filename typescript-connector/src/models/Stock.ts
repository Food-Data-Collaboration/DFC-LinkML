import { SemanticObject } from "../core/SemanticObject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";

/**
 * Constructor parameters for {@link Stock}.
 *
 * Own DFC properties: availabilityDate, quantity, transportedBy, date,
 *   description, name, characteristicOf, hasDimension, hasQuantity.
 */
export interface StockParams {
  /**
   * "The date from which the product is available from the information
   *   provider, including seasonal or temporary product and services."
   *   (source : GS1 model)
   *
   * Serializes as `dfc-b:availabilityDate`.
   */
  availabilityDate?: string;
  /**
   * DEPRECATE
   *
   * Serializes as `dfc-b:quantity`.
   */
  quantity?: number;
  /**
   * The Shipment that transports Stock.
   *
   * Serializes as `dfc-b:transportedBy`.
   */
  transportedBy?: string;
  /**
   * Serializes as `dfc-b:date`.
   */
  date?: string;
  /**
   * Serializes as `dfc-b:description`.
   */
  description?: string;
  /**
   * Name of the Enterprise
   *
   * Serializes as `dfc-b:name`.
   */
  name?: string;
  /**
   * Serializes as `dfc-b:characteristicOf`.
   */
  characteristicOf?: string;
  /**
   * Serializes as `dfc-b:hasDimension`.
   */
  hasDimension?: string;
  /**
   * The actual numeric value of the Price, in the currency unit specified
   *   with hasUnit
   *
   * Serializes as `dfc-b:hasQuantity`.
   */
  hasQuantity?: QuantitativeValue | string;
}

/**
 * A DFC `dfc-b:Stock`, serialized with `@type: dfc-b:Stock`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: availabilityDate, quantity, transportedBy, date,
 *   description, name, characteristicOf, hasDimension, hasQuantity.
 */
export class Stock extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Stock";
  }

  /**
   * "The date from which the product is available from the information
   *   provider, including seasonal or temporary product and services."
   *   (source : GS1 model)
   *
   * Serializes as `dfc-b:availabilityDate`.
   */
  availabilityDate?: string;
  /**
   * DEPRECATE
   *
   * Serializes as `dfc-b:quantity`.
   */
  quantity?: number;
  /**
   * The Shipment that transports Stock.
   *
   * Serializes as `dfc-b:transportedBy`.
   */
  transportedBy?: string;
  /**
   * Serializes as `dfc-b:date`.
   */
  date?: string;
  /**
   * Serializes as `dfc-b:description`.
   */
  description?: string;
  /**
   * Name of the Enterprise
   *
   * Serializes as `dfc-b:name`.
   */
  name?: string;
  /**
   * Serializes as `dfc-b:characteristicOf`.
   */
  characteristicOf?: string;
  /**
   * Serializes as `dfc-b:hasDimension`.
   */
  hasDimension?: string;
  /**
   * The actual numeric value of the Price, in the currency unit specified
   *   with hasUnit
   *
   * Serializes as `dfc-b:hasQuantity`.
   */
  hasQuantity?: QuantitativeValue | string;

  constructor(
    semanticId: string,
    params?: StockParams,
  ) {
    super(semanticId);
    this.availabilityDate = params?.availabilityDate;
    this.quantity = params?.quantity;
    this.transportedBy = params?.transportedBy;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.hasQuantity = params?.hasQuantity;
    this.semanticType = Stock.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:availabilityDate", () => this.availabilityDate);
    this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
    this.registerSemanticProperty("dfc-b:transportedBy", () => this.transportedBy);
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
    this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
  }
  static {
    SemanticObject.typeRegistry.set(Stock.SEMANTIC_TYPE, Stock);
  }
}
