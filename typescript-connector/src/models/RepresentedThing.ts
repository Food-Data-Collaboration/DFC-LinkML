// Class from DFC Business Ontology: #RepresentedThing
import { SemanticObject } from "../core/SemanticObject.js";
import { DitributedRepresentation, type DitributedRepresentationParams } from "./DitributedRepresentation.js";

export interface RepresentedThingParams extends DitributedRepresentationParams {}
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
