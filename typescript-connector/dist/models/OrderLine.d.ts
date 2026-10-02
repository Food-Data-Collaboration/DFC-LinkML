import { SemanticObject } from "../core/SemanticObject.js";
import type { Order } from "./Order.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
/**
 * Constructor parameters for {@link OrderLine}.
 *
 * Own DFC properties: discount, quantity, concerns, hasPrice,
 *   isFulfilledBy, date, description, name, characteristicOf, hasDimension,
 *   hasQuantity, partOf.
 */
export interface OrderLineParams {
    /**
     * Any discount applied to the Price
     *
     * Serializes as `dfc-b:discount`.
     */
    discount?: number;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity?: number;
    /**
     * The Product that has been ordered (1 and only 1)
     *
     * Serializes as `dfc-b:concerns`.
     */
    concerns?: string;
    /**
     * The offered Price for the Product listed in the CatalogItem for this
     *   cateogry of Customer
     *
     * Serializes as `dfc-b:hasPrice`.
     */
    hasPrice?: string;
    /**
     * Serializes as `dfc-b:isFulfilledBy`.
     */
    isFulfilledBy?: string;
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
    /**
     * The Order this OrderLine is associated with (1 and only 1)
     *
     * Serializes as `dfc-b:partOf`.
     */
    partOf?: Order | string;
}
/**
 * A DFC `dfc-b:OrderLine`, serialized with `@type: dfc-b:OrderLine`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: discount, quantity, concerns, hasPrice,
 *   isFulfilledBy, date, description, name, characteristicOf, hasDimension,
 *   hasQuantity, partOf.
 */
export declare class OrderLine extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Any discount applied to the Price
     *
     * Serializes as `dfc-b:discount`.
     */
    discount?: number;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity?: number;
    /**
     * The Product that has been ordered (1 and only 1)
     *
     * Serializes as `dfc-b:concerns`.
     */
    concerns?: string;
    /**
     * The offered Price for the Product listed in the CatalogItem for this
     *   cateogry of Customer
     *
     * Serializes as `dfc-b:hasPrice`.
     */
    hasPrice?: string;
    /**
     * Serializes as `dfc-b:isFulfilledBy`.
     */
    isFulfilledBy?: string;
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
    /**
     * The Order this OrderLine is associated with (1 and only 1)
     *
     * Serializes as `dfc-b:partOf`.
     */
    partOf?: Order | string;
    constructor(semanticId: string, params?: OrderLineParams);
}
