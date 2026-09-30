import { SemanticObject } from "../core/SemanticObject.js";
import { Geometry, type GeometryParams } from "./Geometry.js";

/**
 * Constructor parameters for {@link Point}.
 */
export interface PointParams extends GeometryParams {}

/**
 * A DFC `dfc-b:Point`, serialized with `@type: dfc-b:Point`.
 * Class hierarchy: `Geometry` -> `Point`.
 */
export class Point extends Geometry {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Point";
  }



  constructor(
    semanticId: string,
    params?: PointParams,
  ) {
    super(semanticId, params);
    this.semanticType = Point.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(Point.SEMANTIC_TYPE, Point);
  }
}
