import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";

/**
 * Constructor parameters for {@link Temperature}.
 *
 * Own DFC properties: isTemperatureOf.
 *
 * Inherited parameters come from {@link QuantitativeValueParams}.
 */
export interface TemperatureParams extends QuantitativeValueParams {
  /**
   * Serializes as `dfc-b:isTemperatureOf`.
   */
  isTemperatureOf?: string;
}

/**
 * A DFC `dfc-b:Temperature`, serialized with `@type: dfc-b:Temperature`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing` ->
 *   `QuantitativeValue` -> `Temperature`.
 * Own DFC properties: isTemperatureOf.
 */
export class Temperature extends QuantitativeValue {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Temperature";
  }

  /**
   * Serializes as `dfc-b:isTemperatureOf`.
   */
  isTemperatureOf?: string;

  constructor(
    semanticId: string,
    params?: TemperatureParams,
  ) {
    super(semanticId, params);
    this.isTemperatureOf = params?.isTemperatureOf;
    this.semanticType = Temperature.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:isTemperatureOf", () => this.isTemperatureOf);
  }
  static {
    SemanticObject.typeRegistry.set(Temperature.SEMANTIC_TYPE, Temperature);
  }
}
