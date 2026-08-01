// Class from DFC Business Ontology: #SaleSession
import { SemanticObject } from "../core/SemanticObject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";

export interface SaleSessionParams {
  endDate?: string;
  quantity?: number;
  startDate?: string;
  hasOption?: string;
  holds?: string[];
  hostedAt?: string;
  lists?: string[];
  objectOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  hasQuantity?: QuantitativeValue;
}
export class SaleSession extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:SaleSession";
  }

  endDate?: string;
  quantity?: number;
  startDate?: string;
  hasOption?: string;
  holds?: string[];
  hostedAt?: string;
  lists?: string[];
  objectOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  hasQuantity?: QuantitativeValue;

  constructor(
    semanticId: string,
    params?: SaleSessionParams,
  ) {
    super(semanticId);
    this.endDate = params?.endDate;
    this.quantity = params?.quantity;
    this.startDate = params?.startDate;
    this.hasOption = params?.hasOption;
    this.holds = params?.holds;
    this.hostedAt = params?.hostedAt;
    this.lists = params?.lists;
    this.objectOf = params?.objectOf;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.hasQuantity = params?.hasQuantity;
    this.semanticType = SaleSession.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:endDate", () => this.endDate);
    this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
    this.registerSemanticProperty("dfc-b:startDate", () => this.startDate);
    this.registerSemanticProperty("dfc-b:hasOption", () => this.hasOption);
    this.registerSemanticProperty("dfc-b:holds", () => this.holds);
    this.registerSemanticProperty("dfc-b:hostedAt", () => this.hostedAt);
    this.registerSemanticProperty("dfc-b:lists", () => this.lists);
    this.registerSemanticProperty("dfc-b:objectOf", () => this.objectOf);
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
    this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
  }
  static {
    SemanticObject.typeRegistry.set(SaleSession.SEMANTIC_TYPE, SaleSession);
  }
}
