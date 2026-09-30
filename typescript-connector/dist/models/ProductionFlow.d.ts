import { SemanticObject } from "../core/SemanticObject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
/**
 * Constructor parameters for {@link ProductionFlow}.
 *
 * Own DFC properties: quantity, outputOf, produces, date, description,
 *   name, characteristicOf, hasDimension, hasQuantity.
 */
export interface ProductionFlowParams {
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity?: number;
    /**
     * The transformation the produced product is outputed from
     *
     * Serializes as `dfc-b:outputOf`.
     */
    outputOf?: string;
    /**
     * Link to another SuppleidProduct that is produced from this Product
     *
     * Serializes as `dfc-b:produces`.
     */
    produces?: string[];
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
 * A DFC `dfc-b:ProductionFlow`, serialized with `@type:
 *   dfc-b:ProductionFlow`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: quantity, outputOf, produces, date, description,
 *   name, characteristicOf, hasDimension, hasQuantity.
 */
export declare class ProductionFlow extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity?: number;
    /**
     * The transformation the produced product is outputed from
     *
     * Serializes as `dfc-b:outputOf`.
     */
    outputOf?: string;
    /**
     * Link to another SuppleidProduct that is produced from this Product
     *
     * Serializes as `dfc-b:produces`.
     */
    produces?: string[];
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
    constructor(semanticId: string, params?: ProductionFlowParams);
}
