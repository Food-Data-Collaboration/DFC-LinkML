// Class from DFC Business Ontology: #Order
import { SemanticObject } from "../core/SemanticObject.js";

export interface OrderParams {
  discount?: number;
  orderNumber?: string;
  belongsTo?: string;
  hasFulfilmentStatus?: string;
  hasOrderStatus?: string;
  hasPart?: string;
  hasPaymentMethod?: string;
  hasPaymentStatus?: string;
  orderedBy?: string;
  selects?: string[];
  soldBy?: string;
  uses?: string[];
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
}
export class Order extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Order";
  }

  discount?: number;
  orderNumber?: string;
  belongsTo?: string;
  hasFulfilmentStatus?: string;
  hasOrderStatus?: string;
  hasPart?: string;
  hasPaymentMethod?: string;
  hasPaymentStatus?: string;
  orderedBy?: string;
  selects?: string[];
  soldBy?: string;
  uses?: string[];
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;

  constructor(
    semanticId: string,
    params?: OrderParams,
  ) {
    super(semanticId);
    this.discount = params?.discount;
    this.orderNumber = params?.orderNumber;
    this.belongsTo = params?.belongsTo;
    this.hasFulfilmentStatus = params?.hasFulfilmentStatus;
    this.hasOrderStatus = params?.hasOrderStatus;
    this.hasPart = params?.hasPart;
    this.hasPaymentMethod = params?.hasPaymentMethod;
    this.hasPaymentStatus = params?.hasPaymentStatus;
    this.orderedBy = params?.orderedBy;
    this.selects = params?.selects;
    this.soldBy = params?.soldBy;
    this.uses = params?.uses;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = Order.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:Order:discount", () => this.discount);
    this.registerSemanticProperty("dfc-b:Order:order_number", () => this.orderNumber);
    this.registerSemanticProperty("dfc-b:Order:belongs_to", () => this.belongsTo);
    this.registerSemanticProperty("dfc-b:Order:has_fulfilment_status", () => this.hasFulfilmentStatus);
    this.registerSemanticProperty("dfc-b:Order:has_order_status", () => this.hasOrderStatus);
    this.registerSemanticProperty("dfc-b:Order:has_part", () => this.hasPart);
    this.registerSemanticProperty("dfc-b:Order:has_payment_method", () => this.hasPaymentMethod);
    this.registerSemanticProperty("dfc-b:Order:has_payment_status", () => this.hasPaymentStatus);
    this.registerSemanticProperty("dfc-b:Order:ordered_by", () => this.orderedBy);
    this.registerSemanticProperty("dfc-b:Order:selects", () => this.selects);
    this.registerSemanticProperty("dfc-b:Order:sold_by", () => this.soldBy);
    this.registerSemanticProperty("dfc-b:Order:uses", () => this.uses);
    this.registerSemanticProperty("dfc-b:Order:date", () => this.date);
    this.registerSemanticProperty("dfc-b:Order:description", () => this.description);
    this.registerSemanticProperty("dfc-b:Order:name", () => this.name);
    this.registerSemanticProperty("dfc-b:Order:characteristic_of", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:Order:has_dimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(Order.SEMANTIC_TYPE, Order);
  }
}
