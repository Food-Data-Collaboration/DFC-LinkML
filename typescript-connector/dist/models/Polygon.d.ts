import { Geometry, type GeometryParams } from "./Geometry.js";
export interface PolygonParams extends GeometryParams {
}
export declare class Polygon extends Geometry {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: PolygonParams);
}
