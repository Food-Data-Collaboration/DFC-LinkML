// Class from DFC Business Ontology: #Platform
import { SemanticObject } from "../core/SemanticObject.js";
import { DitributedRepresentation, type DitributedRepresentationParams } from "./DitributedRepresentation.js";

export interface PlatformParams extends DitributedRepresentationParams {}
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
