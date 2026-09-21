import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";
import type { Feature } from "./Feature.js";
export interface RouteParams extends WhereSubjectParams {
    hasStep?: string;
    useVehicle?: string;
    hasGeoJsonFeature?: Feature | string;
}
export declare class Route extends WhereSubject {
    static get SEMANTIC_TYPE(): string;
    hasStep?: string;
    useVehicle?: string;
    hasGeoJsonFeature?: Feature | string;
    constructor(semanticId: string, params?: RouteParams);
}
