import { SemanticObject } from "../core/SemanticObject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
/**
 * Constructor parameters for {@link ConsumptionFlow}.
 *
 * Own DFC properties: quantity, consumes, inputOf, date, description, name,
 *   characteristicOf, hasDimension, hasQuantity.
 */
export interface ConsumptionFlowParams {
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity?: number;
    /**
     * The product consumed by the Transformation
     *
     * Serializes as `dfc-b:consumes`.
     */
    consumes?: string[];
    /**
     * The transformation the consumed product is inputed into
     *
     * Serializes as `dfc-b:inputOf`.
     */
    inputOf?: string;
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
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity?: QuantitativeValue | string;
}
/**
 * A DFC `dfc-b:ConsumptionFlow`, serialized with `@type:
 *   dfc-b:ConsumptionFlow`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: quantity, consumes, inputOf, date, description, name,
 *   characteristicOf, hasDimension, hasQuantity.
 */
export declare class ConsumptionFlow extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity?: number;
    /**
     * The product consumed by the Transformation
     *
     * Serializes as `dfc-b:consumes`.
     */
    consumes?: string[];
    /**
     * The transformation the consumed product is inputed into
     *
     * Serializes as `dfc-b:inputOf`.
     */
    inputOf?: string;
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
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity?: QuantitativeValue | string;
    constructor(semanticId: string, params?: ConsumptionFlowParams);
}
