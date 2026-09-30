import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";

/**
 * Constructor parameters for {@link Volume}.
 */
export interface VolumeParams extends QuantitativeValueParams {}

/**
 * A DFC `dfc-b:Volume`, serialized with `@type: dfc-b:Volume`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing` ->
 *   `QuantitativeValue` -> `Volume`.
 */
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
