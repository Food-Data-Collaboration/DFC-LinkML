import { Geometry, type GeometryParams } from "./Geometry.js";
/**
 * Constructor parameters for {@link Polygon}.
 */
export interface PolygonParams extends GeometryParams {
}
/**
 * A DFC `dfc-b:Polygon`, serialized with `@type: dfc-b:Polygon`.
 * Class hierarchy: `Geometry` -> `Polygon`.
 */
export declare class Polygon extends Geometry {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: PolygonParams);
}
