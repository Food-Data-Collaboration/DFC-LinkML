// Class from DFC Business Ontology: #Weight
import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";

export interface WeightParams extends QuantitativeValueParams {}
export class Weight extends QuantitativeValue {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Weight";
  }



  constructor(
    semanticId: string,
    params?: WeightParams,
  ) {
    super(semanticId, params);
    this.semanticType = Weight.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(Weight.SEMANTIC_TYPE, Weight);
  }
}
