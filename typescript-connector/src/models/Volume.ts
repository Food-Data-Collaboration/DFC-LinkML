// Class from DFC Business Ontology: #Volume
import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";

export interface VolumeParams extends QuantitativeValueParams {}
export class Volume extends QuantitativeValue {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Volume";
  }



  constructor(
    semanticId: string,
    params?: VolumeParams,
  ) {
    super(semanticId, params);
    this.semanticType = Volume.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(Volume.SEMANTIC_TYPE, Volume);
  }
}
