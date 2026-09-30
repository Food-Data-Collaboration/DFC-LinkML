import { SemanticObject } from "../core/SemanticObject.js";
import type { Coordination } from "./Coordination.js";
import type { Place } from "./Place.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
import type { ShippingOption } from "./ShippingOption.js";
/**
 * Constructor parameters for {@link SaleSession}.
 *
 * Own DFC properties: endDate, quantity, startDate, holds, lists, date,
 *   description, name, characteristicOf, hasDimension, hasOption,
 *   hasQuantity, hostedAt, objectOf.
 */
export interface SaleSessionParams {
    /**
     * The date/time that the Sales Session ends
     *
     * Serializes as `dfc-b:endDate`.
     */
    endDate?: string;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity?: number;
    /**
     * The date/time that the Sales Session starts
     *
     * Serializes as `dfc-b:startDate`.
     */
    startDate?: string;
    /**
     * All Orders that were made during the Sales Session
     *
     * Serializes as `dfc-b:holds`.
     */
    holds?: string[];
    /**
     * All Items (which refer to a SuppliedProduct) that are part of the
     *   Catalog
     *
     * Serializes as `dfc-b:lists`.
     */
    lists?: string[];
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
     * Any (and all) ShippingOptions that are available for the session
     *
     * Serializes as `dfc-b:hasOption`.
     */
    hasOption?: ShippingOption | string;
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity?: QuantitativeValue | string;
    /**
     * The location the session is hosted at. This could be a physical (e.g. a
     *   shop or market) or virtual place (e.g. online store).
     *
     * Serializes as `dfc-b:hostedAt`.
     */
    hostedAt?: Place | string;
    /**
     * The Coordination (that defines which Enterprise coordinates the Sales
     *   Sesison)
     *
     * Serializes as `dfc-b:objectOf`.
     */
    objectOf?: Coordination | string;
}
/**
 * A DFC `dfc-b:SaleSession`, serialized with `@type: dfc-b:SaleSession`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: endDate, quantity, startDate, holds, lists, date,
 *   description, name, characteristicOf, hasDimension, hasOption,
 *   hasQuantity, hostedAt, objectOf.
 */
export declare class SaleSession extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * The date/time that the Sales Session ends
     *
     * Serializes as `dfc-b:endDate`.
     */
    endDate?: string;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity?: number;
    /**
     * The date/time that the Sales Session starts
     *
     * Serializes as `dfc-b:startDate`.
     */
    startDate?: string;
    /**
     * All Orders that were made during the Sales Session
     *
     * Serializes as `dfc-b:holds`.
     */
    holds?: string[];
    /**
     * All Items (which refer to a SuppliedProduct) that are part of the
     *   Catalog
     *
     * Serializes as `dfc-b:lists`.
     */
    lists?: string[];
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
     * Any (and all) ShippingOptions that are available for the session
     *
     * Serializes as `dfc-b:hasOption`.
     */
    hasOption?: ShippingOption | string;
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity?: QuantitativeValue | string;
    /**
     * The location the session is hosted at. This could be a physical (e.g. a
     *   shop or market) or virtual place (e.g. online store).
     *
     * Serializes as `dfc-b:hostedAt`.
     */
    hostedAt?: Place | string;
    /**
     * The Coordination (that defines which Enterprise coordinates the Sales
     *   Sesison)
     *
     * Serializes as `dfc-b:objectOf`.
     */
    objectOf?: Coordination | string;
    constructor(semanticId: string, params?: SaleSessionParams);
}
