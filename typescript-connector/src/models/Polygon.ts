import { SemanticObject } from "../core/SemanticObject.js";
import { Geometry, type GeometryParams } from "./Geometry.js";

/**
 * Constructor parameters for {@link Polygon}.
 */
export interface PolygonParams extends GeometryParams {}

/**
 * A DFC `dfc-b:Polygon`, serialized with `@type: dfc-b:Polygon`.
 * Class hierarchy: `Geometry` -> `Polygon`.
 */
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
