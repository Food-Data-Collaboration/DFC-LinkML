// Class from DFC Business Ontology: #OrderLine
import { SemanticObject } from "../core/SemanticObject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";

export interface OrderLineParams {
  discount?: number;
  quantity?: number;
  concerns?: string[];
  hasPrice?: string;
  isFulfilledBy?: string;
  partOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  hasQuantity?: QuantitativeValue;
}
export class OrderLine extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:OrderLine";
  }

  discount?: number;
  quantity?: number;
  concerns?: string[];
  hasPrice?: string;
  isFulfilledBy?: string;
  partOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  hasQuantity?: QuantitativeValue;

  constructor(
    semanticId: string,
    params?: OrderLineParams,
  ) {
    super(semanticId);
    this.discount = params?.discount;
    this.quantity = params?.quantity;
    this.concerns = params?.concerns;
    this.hasPrice = params?.hasPrice;
    this.isFulfilledBy = params?.isFulfilledBy;
    this.partOf = params?.partOf;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.hasQuantity = params?.hasQuantity;
    this.semanticType = OrderLine.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:OrderLine:discount", () => this.discount);
    this.registerSemanticProperty("dfc-b:OrderLine:quantity", () => this.quantity);
    this.registerSemanticProperty("dfc-b:OrderLine:concerns", () => this.concerns);
    this.registerSemanticProperty("dfc-b:OrderLine:has_price", () => this.hasPrice);
    this.registerSemanticProperty("dfc-b:OrderLine:is_fulfilled_by", () => this.isFulfilledBy);
    this.registerSemanticProperty("dfc-b:OrderLine:part_of", () => this.partOf);
    this.registerSemanticProperty("dfc-b:OrderLine:date", () => this.date);
    this.registerSemanticProperty("dfc-b:OrderLine:description", () => this.description);
    this.registerSemanticProperty("dfc-b:OrderLine:name", () => this.name);
    this.registerSemanticProperty("dfc-b:OrderLine:characteristic_of", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:OrderLine:has_dimension", () => this.hasDimension);
    this.registerSemanticProperty("dfc-b:OrderLine:has_quantity", () => this.hasQuantity);
  }
  static {
    SemanticObject.typeRegistry.set(OrderLine.SEMANTIC_TYPE, OrderLine);
  }
}
