import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";

/**
 * Constructor parameters for {@link Weight}.
 */
export interface WeightParams extends QuantitativeValueParams {}

/**
 * A DFC `dfc-b:Weight`, serialized with `@type: dfc-b:Weight`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing` ->
 *   `QuantitativeValue` -> `Weight`.
 */
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
