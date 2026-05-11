// Class from DFC Business Ontology: #Transformation
import { SemanticObject } from "../core/SemanticObject.js";
import { HowSubject, type HowSubjectParams } from "./HowSubject.js";

export interface TransformationParams extends HowSubjectParams {}
export class Transformation extends HowSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Transformation";
  }



  constructor(
    semanticId: string,
    params?: TransformationParams,
  ) {
    super(semanticId, params);
    this.semanticType = Transformation.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(Transformation.SEMANTIC_TYPE, Transformation);
  }
}
