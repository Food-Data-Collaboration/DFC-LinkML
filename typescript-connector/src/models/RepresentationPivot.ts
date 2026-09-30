import { SemanticObject } from "../core/SemanticObject.js";
import { DitributedRepresentation, type DitributedRepresentationParams } from "./DitributedRepresentation.js";

/**
 * Constructor parameters for {@link RepresentationPivot}.
 */
export interface RepresentationPivotParams extends DitributedRepresentationParams {}

/**
 * A DFC `dfc-b:RepresentationPivot`, serialized with `@type:
 *   dfc-b:RepresentationPivot`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentationPivot`.
 */
export class RepresentationPivot extends DitributedRepresentation {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:RepresentationPivot";
  }



  constructor(
    semanticId: string,
    params?: RepresentationPivotParams,
  ) {
    super(semanticId, params);
    this.semanticType = RepresentationPivot.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(RepresentationPivot.SEMANTIC_TYPE, RepresentationPivot);
  }
}
