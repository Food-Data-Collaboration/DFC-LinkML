import { SemanticObject } from "../core/SemanticObject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";

/**
 * Constructor parameters for {@link ConsumptionFlow}.
 *
 * Own DFC properties: quantity, consumes, inputOf, date, description, name,
 *   characteristicOf, hasDimension, hasQuantity.
 */
export interface ConsumptionFlowParams {
  /**
   * DEPRECATE
   *
   * Serializes as `dfc-b:quantity`.
   */
  quantity?: number;
  /**
   * The product consumed by the Transformation
   *
   * Serializes as `dfc-b:consumes`.
   */
  consumes?: string[];
  /**
   * The transformation the consumed product is inputed into
   *
   * Serializes as `dfc-b:inputOf`.
   */
  inputOf?: string;
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
 * A DFC `dfc-b:ConsumptionFlow`, serialized with `@type:
 *   dfc-b:ConsumptionFlow`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: quantity, consumes, inputOf, date, description, name,
 *   characteristicOf, hasDimension, hasQuantity.
 */
export class ConsumptionFlow extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:ConsumptionFlow";
  }

  /**
   * DEPRECATE
   *
   * Serializes as `dfc-b:quantity`.
   */
  quantity?: number;
  /**
   * The product consumed by the Transformation
   *
   * Serializes as `dfc-b:consumes`.
   */
  consumes?: string[];
  /**
   * The transformation the consumed product is inputed into
   *
   * Serializes as `dfc-b:inputOf`.
   */
  inputOf?: string;
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
    params?: ConsumptionFlowParams,
  ) {
    super(semanticId);
    this.quantity = params?.quantity;
    this.consumes = params?.consumes;
    this.inputOf = params?.inputOf;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.hasQuantity = params?.hasQuantity;
    this.semanticType = ConsumptionFlow.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
    this.registerSemanticProperty("dfc-b:consumes", () => this.consumes);
    this.registerSemanticProperty("dfc-b:inputOf", () => this.inputOf);
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
    this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
  }
  static {
    SemanticObject.typeRegistry.set(ConsumptionFlow.SEMANTIC_TYPE, ConsumptionFlow);
  }
}
