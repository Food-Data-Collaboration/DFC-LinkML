import { SemanticObject } from "../core/SemanticObject.js";
import { DitributedRepresentation, type DitributedRepresentationParams } from "./DitributedRepresentation.js";

/**
 * Constructor parameters for {@link Platform}.
 */
export interface PlatformParams extends DitributedRepresentationParams {}

/**
 * A DFC `dfc-b:Platform`, serialized with `@type: dfc-b:Platform`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `Platform`.
 */
export class Platform extends DitributedRepresentation {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Platform";
  }



  constructor(
    semanticId: string,
    params?: PlatformParams,
  ) {
    super(semanticId, params);
    this.semanticType = Platform.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(Platform.SEMANTIC_TYPE, Platform);
  }
}
