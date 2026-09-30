import { SemanticObject } from "../core/SemanticObject.js";
import { DitributedRepresentation, type DitributedRepresentationParams } from "./DitributedRepresentation.js";

/**
 * Constructor parameters for {@link RepresentedThing}.
 */
export interface RepresentedThingParams extends DitributedRepresentationParams {}

/**
 * A DFC `dfc-b:RepresentedThing`, serialized with `@type:
 *   dfc-b:RepresentedThing`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing`.
 */
export class RepresentedThing extends DitributedRepresentation {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:RepresentedThing";
  }



  constructor(
    semanticId: string,
    params?: RepresentedThingParams,
  ) {
    super(semanticId, params);
    this.semanticType = RepresentedThing.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(RepresentedThing.SEMANTIC_TYPE, RepresentedThing);
  }
}
