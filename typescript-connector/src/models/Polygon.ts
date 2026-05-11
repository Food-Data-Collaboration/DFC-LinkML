// Class from DFC Business Ontology: #Polygon
import { SemanticObject } from "../core/SemanticObject.js";
import { Geometry, type GeometryParams } from "./Geometry.js";

export interface PolygonParams extends GeometryParams {}
export class Polygon extends Geometry {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Polygon";
  }



  constructor(
    semanticId: string,
    params?: PolygonParams,
  ) {
    super(semanticId, params);
    this.semanticType = Polygon.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(Polygon.SEMANTIC_TYPE, Polygon);
  }
}
