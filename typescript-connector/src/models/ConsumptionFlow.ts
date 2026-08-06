// Class from DFC Business Ontology: #ConsumptionFlow
import { SemanticObject } from "../core/SemanticObject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";

export interface ConsumptionFlowParams {
  quantity?: number;
  consumes?: string[];
  inputOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  hasQuantity?: QuantitativeValue;
}
export class ConsumptionFlow extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:ConsumptionFlow";
  }

  quantity?: number;
  consumes?: string[];
  inputOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  hasQuantity?: QuantitativeValue;

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
