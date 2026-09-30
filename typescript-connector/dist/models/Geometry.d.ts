import { SemanticObject } from "../core/SemanticObject.js";
/**
 * Constructor parameters for {@link Geometry}.
 *
 * Own DFC properties: coordinates, date, description, name,
 *   characteristicOf, hasDimension.
 */
export interface GeometryParams {
    /**
     * Serializes as `https://purl.org/geojson/vocab#coordinates`.
     */
    coordinates?: string[];
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
}
/**
 * A DFC `dfc-b:Geometry`, serialized with `@type: dfc-b:Geometry`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: coordinates, date, description, name,
 *   characteristicOf, hasDimension.
 */
export declare class Geometry extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `https://purl.org/geojson/vocab#coordinates`.
     */
    coordinates?: string[];
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
    constructor(semanticId: string, params?: GeometryParams);
}
