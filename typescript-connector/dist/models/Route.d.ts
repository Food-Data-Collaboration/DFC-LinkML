import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";
import type { Feature } from "./Feature.js";
/**
 * Constructor parameters for {@link Route}.
 *
 * Own DFC properties: hasStep, useVehicle, hasGeoJsonFeature.
 *
 * Inherited parameters come from {@link WhereSubjectParams}.
 */
export interface RouteParams extends WhereSubjectParams {
    /**
     * Serializes as `dfc-b:hasStep`.
     */
    hasStep?: string;
    /**
     * Serializes as `dfc-b:useVehicle`.
     */
    useVehicle?: string;
    /**
     * Serializes as `dfc-b:hasGeoJsonFeature`.
     */
    hasGeoJsonFeature?: Feature | string;
}
/**
 * A DFC `dfc-b:Route`, serialized with `@type: dfc-b:Route`.
 * Class hierarchy: `Where_Subject` -> `Route`.
 * Own DFC properties: hasStep, useVehicle, hasGeoJsonFeature.
 */
export declare class Route extends WhereSubject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:hasStep`.
     */
    hasStep?: string;
    /**
     * Serializes as `dfc-b:useVehicle`.
     */
    useVehicle?: string;
    /**
     * Serializes as `dfc-b:hasGeoJsonFeature`.
     */
    hasGeoJsonFeature?: Feature | string;
    constructor(semanticId: string, params?: RouteParams);
}
