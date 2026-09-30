import { SemanticObject } from "../core/SemanticObject.js";
import { HowSubject, type HowSubjectParams } from "./HowSubject.js";
import type { Agent } from "./Agent.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";

/**
 * Constructor parameters for {@link Transaction}.
 *
 * Own DFC properties: invoiceNumber, quantity, concerns, hasPrice, from,
 *   hasQuantity, to.
 *
 * Inherited parameters come from {@link HowSubjectParams}.
 */
export interface TransactionParams extends HowSubjectParams {
  /**
   * Serializes as `dfc-b:invoiceNumber`.
   */
  invoiceNumber?: string;
  /**
   * DEPRECATE
   *
   * Serializes as `dfc-b:quantity`.
   */
  quantity?: number;
  /**
   * The Product that has been ordered (1 and only 1)
   *
   * Serializes as `dfc-b:concerns`.
   */
  concerns?: string[];
  /**
   * The offered Price for the Product listed in the CatalogItem for this
   *   cateogry of Customer
   *
   * Serializes as `dfc-b:hasPrice`.
   */
  hasPrice?: string;
  /**
   * Serializes as `dfc-b:from`.
   */
  from?: Agent | string;
  /**
   * The actual numeric value of the Price, in the currency unit specified
   *   with hasUnit
   *
   * Serializes as `dfc-b:hasQuantity`.
   */
  hasQuantity?: QuantitativeValue | string;
  /**
   * Serializes as `dfc-b:to`.
   */
  to?: Agent | string;
}

/**
 * A DFC `dfc-b:Transaction`, serialized with `@type: dfc-b:Transaction`.
 * Class hierarchy: `How_Subject` -> `Transaction`.
 * Own DFC properties: invoiceNumber, quantity, concerns, hasPrice, from,
 *   hasQuantity, to.
 */
export class Transaction extends HowSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Transaction";
  }

  /**
   * Serializes as `dfc-b:invoiceNumber`.
   */
  invoiceNumber?: string;
  /**
   * DEPRECATE
   *
   * Serializes as `dfc-b:quantity`.
   */
  quantity?: number;
  /**
   * The Product that has been ordered (1 and only 1)
   *
   * Serializes as `dfc-b:concerns`.
   */
  concerns?: string[];
  /**
   * The offered Price for the Product listed in the CatalogItem for this
   *   cateogry of Customer
   *
   * Serializes as `dfc-b:hasPrice`.
   */
  hasPrice?: string;
  /**
   * Serializes as `dfc-b:from`.
   */
  from?: Agent | string;
  /**
   * The actual numeric value of the Price, in the currency unit specified
   *   with hasUnit
   *
   * Serializes as `dfc-b:hasQuantity`.
   */
  hasQuantity?: QuantitativeValue | string;
  /**
   * Serializes as `dfc-b:to`.
   */
  to?: Agent | string;

  constructor(
    semanticId: string,
    params?: TransactionParams,
  ) {
    super(semanticId, params);
    this.invoiceNumber = params?.invoiceNumber;
    this.quantity = params?.quantity;
    this.concerns = params?.concerns;
    this.hasPrice = params?.hasPrice;
    this.from = params?.from;
    this.hasQuantity = params?.hasQuantity;
    this.to = params?.to;
    this.semanticType = Transaction.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:invoiceNumber", () => this.invoiceNumber);
    this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
    this.registerSemanticProperty("dfc-b:concerns", () => this.concerns);
    this.registerSemanticProperty("dfc-b:hasPrice", () => this.hasPrice);
    this.registerSemanticProperty("dfc-b:from", () => this.from);
    this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
    this.registerSemanticProperty("dfc-b:to", () => this.to);
  }
  static {
    SemanticObject.typeRegistry.set(Transaction.SEMANTIC_TYPE, Transaction);
  }
}
