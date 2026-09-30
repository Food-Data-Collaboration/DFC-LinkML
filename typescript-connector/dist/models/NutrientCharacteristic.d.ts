import { SemanticObject } from "../core/SemanticObject.js";
import type { Concept } from "./Concept.js";
/**
 * Constructor parameters for {@link NutrientCharacteristic}.
 *
 * Own DFC properties: nutrientCharacteristicOf, date, description, name,
 *   characteristicOf, hasDimension, hasNutrientDimension.
 */
export interface NutrientCharacteristicParams {
    /**
     * Serializes as `dfc-b:nutrientCharacteristicOf`.
     */
    nutrientCharacteristicOf?: string;
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
     * Serializes as `dfc-b:hasNutrientDimension`.
     */
    hasNutrientDimension?: Concept | string;
}
/**
 * A DFC `dfc-b:NutrientCharacteristic`, serialized with `@type:
 *   dfc-b:NutrientCharacteristic`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: nutrientCharacteristicOf, date, description, name,
 *   characteristicOf, hasDimension, hasNutrientDimension.
 */
export declare class NutrientCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:nutrientCharacteristicOf`.
     */
    nutrientCharacteristicOf?: string;
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
     * Serializes as `dfc-b:hasNutrientDimension`.
     */
    hasNutrientDimension?: Concept | string;
    constructor(semanticId: string, params?: NutrientCharacteristicParams);
}
