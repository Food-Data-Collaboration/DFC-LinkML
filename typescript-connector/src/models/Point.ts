// Class from DFC Business Ontology: #Point
import { SemanticObject } from "../core/SemanticObject.js";
import { Geometry, type GeometryParams } from "./Geometry.js";

export interface PointParams extends GeometryParams {}
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
