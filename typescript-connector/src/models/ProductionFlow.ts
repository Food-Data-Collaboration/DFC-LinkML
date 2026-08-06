// Class from DFC Business Ontology: #ProductionFlow
import { SemanticObject } from "../core/SemanticObject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";

export interface ProductionFlowParams {
  quantity?: number;
  outputOf?: string;
  produces?: string[];
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  hasQuantity?: QuantitativeValue;
}
export class ProductionFlow extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:ProductionFlow";
  }

  quantity?: number;
  outputOf?: string;
  produces?: string[];
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  hasQuantity?: QuantitativeValue;

  constructor(
    semanticId: string,
    params?: ProductionFlowParams,
  ) {
    super(semanticId);
    this.quantity = params?.quantity;
    this.outputOf = params?.outputOf;
    this.produces = params?.produces;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.hasQuantity = params?.hasQuantity;
    this.semanticType = ProductionFlow.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
    this.registerSemanticProperty("dfc-b:outputOf", () => this.outputOf);
    this.registerSemanticProperty("dfc-b:produces", () => this.produces);
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
    this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
  }
  static {
    SemanticObject.typeRegistry.set(ProductionFlow.SEMANTIC_TYPE, ProductionFlow);
  }
}
