// Class from DFC Business Ontology: #Stock
import { SemanticObject } from "../core/SemanticObject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";

export interface StockParams {
  availabilityDate?: string;
  quantity?: number;
  transportedBy?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  hasQuantity?: QuantitativeValue;
}
export class Stock extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Stock";
  }

  availabilityDate?: string;
  quantity?: number;
  transportedBy?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  hasQuantity?: QuantitativeValue;

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
