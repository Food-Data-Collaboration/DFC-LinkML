import { SemanticObject } from "../core/SemanticObject.js";
/**
 * Constructor parameters for {@link OpeningHoursSpecification}.
 *
 * Own DFC properties: dayOfWeek, opens, closes, date, description, name,
 *   characteristicOf, hasDimension.
 */
export interface OpeningHoursSpecificationParams {
    /**
     * Serializes as `https://schema.org/dayOfWeek`.
     */
    dayOfWeek?: string;
    /**
     * Serializes as `https://schema.org/opens`.
     */
    opens?: string[];
    /**
     * Serializes as `dfc-b:closes`.
     */
    closes?: string[];
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
 * A DFC `dfc-b:OpeningHoursSpecification`, serialized with `@type:
 *   dfc-b:OpeningHoursSpecification`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: dayOfWeek, opens, closes, date, description, name,
 *   characteristicOf, hasDimension.
 */
export declare class OpeningHoursSpecification extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `https://schema.org/dayOfWeek`.
     */
    dayOfWeek?: string;
    /**
     * Serializes as `https://schema.org/opens`.
     */
    opens?: string[];
    /**
     * Serializes as `dfc-b:closes`.
     */
    closes?: string[];
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
    constructor(semanticId: string, params?: OpeningHoursSpecificationParams);
}
