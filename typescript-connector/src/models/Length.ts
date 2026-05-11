// Class from DFC Business Ontology: #Length
import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";

export interface LengthParams extends QuantitativeValueParams {}
export class Length extends QuantitativeValue {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Length";
  }



  constructor(
    semanticId: string,
    params?: LengthParams,
  ) {
    super(semanticId, params);
    this.semanticType = Length.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(Length.SEMANTIC_TYPE, Length);
  }
}
