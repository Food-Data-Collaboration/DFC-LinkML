import { Geometry, type GeometryParams } from "./Geometry.js";
export interface PointParams extends GeometryParams {
}
export declare class Point extends Geometry {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: PointParams);
}
