// Class from DFC Business Ontology: #QuantitativeValue
import { SemanticObject } from "../core/SemanticObject.js";
import { RepresentedThing, type RepresentedThingParams } from "./RepresentedThing.js";

export interface QuantitativeValueParams extends RepresentedThingParams {
  value?: number;
  hasUnit?: string;
}
export class QuantitativeValue extends RepresentedThing {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:QuantitativeValue";
  }

  value?: number;
  hasUnit?: string;

  constructor(
    semanticId: string,
    params?: QuantitativeValueParams,
  ) {
    super(semanticId, params);
    this.value = params?.value;
    this.hasUnit = params?.hasUnit;
    this.semanticType = QuantitativeValue.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:QuantitativeValue:value", () => this.value);
    this.registerSemanticProperty("dfc-b:QuantitativeValue:has_unit", () => this.hasUnit);
  }
  static {
    SemanticObject.typeRegistry.set(QuantitativeValue.SEMANTIC_TYPE, QuantitativeValue);
  }
}
