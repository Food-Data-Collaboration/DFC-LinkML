import { SemanticObject } from "../core/SemanticObject.js";
import type { Geometry } from "./Geometry.js";
import type { Properties } from "./Properties.js";
/**
 * Constructor parameters for {@link Feature}.
 *
 * Own DFC properties: date, description, name, characteristicOf,
 *   hasDimension, geometry, properties.
 */
export interface FeatureParams {
    /**
     * Serializes as `dfc-b:date`.
     */
    date?: string;
    /**
     * Serializes as `dfc-b:description`.
     */
    description?: string;
    /**
     * Name of the Enterprise
     *
     * Serializes as `dfc-b:name`.
     */
    name?: string;
    /**
     * Serializes as `dfc-b:characteristicOf`.
     */
    characteristicOf?: string;
    /**
     * Serializes as `dfc-b:hasDimension`.
     */
    hasDimension?: string;
    /**
     * Serializes as `https://purl.org/geojson/vocab#geometry`.
     */
    geometry?: Geometry | string;
    /**
     * Serializes as `https://purl.org/geojson/vocab#properties`.
     */
    properties?: (Properties | string)[];
}
/**
 * A DFC `dfc-b:Feature`, serialized with `@type: dfc-b:Feature`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: date, description, name, characteristicOf,
 *   hasDimension, geometry, properties.
 */
export declare class Feature extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:date`.
     */
    date?: string;
    /**
     * Serializes as `dfc-b:description`.
     */
    description?: string;
    /**
     * Name of the Enterprise
     *
     * Serializes as `dfc-b:name`.
     */
    name?: string;
    /**
     * Serializes as `dfc-b:characteristicOf`.
     */
    characteristicOf?: string;
    /**
     * Serializes as `dfc-b:hasDimension`.
     */
    hasDimension?: string;
    /**
     * Serializes as `https://purl.org/geojson/vocab#geometry`.
     */
    geometry?: Geometry | string;
    /**
     * Serializes as `https://purl.org/geojson/vocab#properties`.
     */
    properties?: (Properties | string)[];
    constructor(semanticId: string, params?: FeatureParams);
}
