import { SemanticObject } from "../core/SemanticObject.js";
import { HowSubject, type HowSubjectParams } from "./HowSubject.js";

/**
 * Constructor parameters for {@link Transformation}.
 */
export interface TransformationParams extends HowSubjectParams {}

/**
 * A DFC `dfc-b:Transformation`, serialized with `@type:
 *   dfc-b:Transformation`.
 * Class hierarchy: `How_Subject` -> `Transformation`.
 */
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
