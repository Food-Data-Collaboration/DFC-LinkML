import { SemanticObject } from "../core/SemanticObject.js";
import type { Concept } from "./Concept.js";
/**
 * Constructor parameters for {@link LabellingCharacteristic}.
 *
 * Own DFC properties: labellingCharacteristicOf, date, description, name,
 *   characteristicOf, hasDimension, hasLabellingDimension.
 */
export interface LabellingCharacteristicParams {
    /**
     * Serializes as `dfc-b:labellingCharacteristicOf`.
     */
    labellingCharacteristicOf?: string;
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
     * Serializes as `dfc-b:hasLabellingDimension`.
     */
    hasLabellingDimension?: Concept | string;
}
/**
 * A DFC `dfc-b:LabellingCharacteristic`, serialized with `@type:
 *   dfc-b:LabellingCharacteristic`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: labellingCharacteristicOf, date, description, name,
 *   characteristicOf, hasDimension, hasLabellingDimension.
 */
export declare class LabellingCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:labellingCharacteristicOf`.
     */
    labellingCharacteristicOf?: string;
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
     * Serializes as `dfc-b:hasLabellingDimension`.
     */
    hasLabellingDimension?: Concept | string;
    constructor(semanticId: string, params?: LabellingCharacteristicParams);
}
