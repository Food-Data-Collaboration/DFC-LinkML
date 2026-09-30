import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";

/**
 * Constructor parameters for {@link Length}.
 */
export interface LengthParams extends QuantitativeValueParams {}

/**
 * A DFC `dfc-b:Length`, serialized with `@type: dfc-b:Length`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing` ->
 *   `QuantitativeValue` -> `Length`.
 */
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
