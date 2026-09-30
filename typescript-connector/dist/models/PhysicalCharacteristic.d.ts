import { SemanticObject } from "../core/SemanticObject.js";
import type { Concept } from "./Concept.js";
/**
 * Constructor parameters for {@link PhysicalCharacteristic}.
 *
 * Own DFC properties: physicalCharacteristicOf, date, description, name,
 *   characteristicOf, hasDimension, hasPhysicalDimension.
 */
export interface PhysicalCharacteristicParams {
    /**
     * Serializes as `dfc-b:physicalCharacteristicOf`.
     */
    physicalCharacteristicOf?: string;
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
     * Serializes as `dfc-b:hasPhysicalDimension`.
     */
    hasPhysicalDimension?: Concept | string;
}
/**
 * A DFC `dfc-b:PhysicalCharacteristic`, serialized with `@type:
 *   dfc-b:PhysicalCharacteristic`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: physicalCharacteristicOf, date, description, name,
 *   characteristicOf, hasDimension, hasPhysicalDimension.
 */
export declare class PhysicalCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:physicalCharacteristicOf`.
     */
    physicalCharacteristicOf?: string;
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
     * Serializes as `dfc-b:hasPhysicalDimension`.
     */
    hasPhysicalDimension?: Concept | string;
    constructor(semanticId: string, params?: PhysicalCharacteristicParams);
}
