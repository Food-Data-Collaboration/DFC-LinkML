import { Geometry, type GeometryParams } from "./Geometry.js";
/**
 * Constructor parameters for {@link Point}.
 */
export interface PointParams extends GeometryParams {
}
/**
 * A DFC `dfc-b:Point`, serialized with `@type: dfc-b:Point`.
 * Class hierarchy: `Geometry` -> `Point`.
 */
export declare class Point extends Geometry {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: PointParams);
}
