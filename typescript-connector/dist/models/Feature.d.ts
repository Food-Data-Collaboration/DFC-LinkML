import { SemanticObject } from "../core/SemanticObject.js";
import type { Geometry } from "./Geometry.js";
import type { Properties } from "./Properties.js";
export interface FeatureParams {
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    geometry?: Geometry;
    properties?: Properties[];
}
export declare class Feature extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    geometry?: Geometry;
    properties?: Properties[];
    constructor(semanticId: string, params?: FeatureParams);
}
