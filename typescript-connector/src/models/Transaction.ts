// Class from DFC Business Ontology: #Transaction
import { SemanticObject } from "../core/SemanticObject.js";
import { HowSubject, type HowSubjectParams } from "./HowSubject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";

export interface TransactionParams extends HowSubjectParams {
  invoiceNumber?: string;
  quantity?: number;
  concerns?: string[];
  from?: string;
  hasPrice?: string;
  to?: string;
  hasQuantity?: QuantitativeValue;
}
export class Transaction extends HowSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Transaction";
  }

  invoiceNumber?: string;
  quantity?: number;
  concerns?: string[];
  from?: string;
  hasPrice?: string;
  to?: string;
  hasQuantity?: QuantitativeValue;

  constructor(
    semanticId: string,
    params?: TransactionParams,
  ) {
    super(semanticId, params);
    this.invoiceNumber = params?.invoiceNumber;
    this.quantity = params?.quantity;
    this.concerns = params?.concerns;
    this.from = params?.from;
    this.hasPrice = params?.hasPrice;
    this.to = params?.to;
    this.hasQuantity = params?.hasQuantity;
    this.semanticType = Transaction.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:invoiceNumber", () => this.invoiceNumber);
    this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
    this.registerSemanticProperty("dfc-b:concerns", () => this.concerns);
    this.registerSemanticProperty("dfc-b:from", () => this.from);
    this.registerSemanticProperty("dfc-b:hasPrice", () => this.hasPrice);
    this.registerSemanticProperty("dfc-b:to", () => this.to);
    this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
  }
  static {
    SemanticObject.typeRegistry.set(Transaction.SEMANTIC_TYPE, Transaction);
  }
}
