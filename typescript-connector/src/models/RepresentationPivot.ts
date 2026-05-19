// Class from DFC Business Ontology: #RepresentationPivot
import { SemanticObject } from "../core/SemanticObject.js";
import { DitributedRepresentation, type DitributedRepresentationParams } from "./DitributedRepresentation.js";

export interface RepresentationPivotParams extends DitributedRepresentationParams {}
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
