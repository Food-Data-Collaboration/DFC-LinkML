// Class from DFC Business Ontology: #Temperature
import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";

export interface TemperatureParams extends QuantitativeValueParams {
  isTemperatureOf?: string;
}
export class Temperature extends QuantitativeValue {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Temperature";
  }

  isTemperatureOf?: string;

  constructor(
    semanticId: string,
    params?: TemperatureParams,
  ) {
    super(semanticId, params);
    this.isTemperatureOf = params?.isTemperatureOf;
    this.semanticType = Temperature.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:Temperature:is_temperature_of", () => this.isTemperatureOf);
  }
  static {
    SemanticObject.typeRegistry.set(Temperature.SEMANTIC_TYPE, Temperature);
  }
}
