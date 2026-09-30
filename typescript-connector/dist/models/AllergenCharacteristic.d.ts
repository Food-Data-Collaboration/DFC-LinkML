import { SemanticObject } from "../core/SemanticObject.js";
import type { Concept } from "./Concept.js";
/**
 * Constructor parameters for {@link AllergenCharacteristic}.
 *
 * Own DFC properties: allergenCharacteristicOf, date, description, name,
 *   characteristicOf, hasDimension, hasAllergenDimension.
 */
export interface AllergenCharacteristicParams {
    /**
     * Serializes as `dfc-b:allergenCharacteristicOf`.
     */
    allergenCharacteristicOf?: string;
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
     * Serializes as `dfc-b:hasAllergenDimension`.
     */
    hasAllergenDimension?: Concept | string;
}
/**
 * A DFC `dfc-b:AllergenCharacteristic`, serialized with `@type:
 *   dfc-b:AllergenCharacteristic`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: allergenCharacteristicOf, date, description, name,
 *   characteristicOf, hasDimension, hasAllergenDimension.
 */
export declare class AllergenCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:allergenCharacteristicOf`.
     */
    allergenCharacteristicOf?: string;
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
     * Serializes as `dfc-b:hasAllergenDimension`.
     */
    hasAllergenDimension?: Concept | string;
    constructor(semanticId: string, params?: AllergenCharacteristicParams);
}
