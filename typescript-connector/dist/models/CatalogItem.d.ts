import { SemanticObject } from "../core/SemanticObject.js";
import type { DefinedProduct } from "./DefinedProduct.js";
import type { Offer } from "./Offer.js";
import type { Organization } from "./Organization.js";
/**
 * Constructor parameters for {@link CatalogItem}.
 *
 * Own DFC properties: extraAvailabilityTime, extraDeliveryCondition, sku,
 *   stockLimitation, listedIn, date, description, name, characteristicOf,
 *   hasDimension, managedBy, offeredThrough, references.
 */
export interface CatalogItemParams {
    /**
     * Additional lead time for catalog item. To be appended to
     *   AvailabilityTime
     *
     * Serializes as `dfc-b:extraAvailabilityTime`.
     */
    extraAvailabilityTime?: string;
    /**
     * Additional devilery conditions for this item (append to any Devliery
     *   Condition set at Product level)
     *
     * Serializes as `dfc-b:extraDeliveryCondition`.
     */
    extraDeliveryCondition?: string;
    /**
     * Only a general "SKU" id is proposed for now. Agents using GTIN could
     *   use GTIN as SKU but other IDs than GTIN can be used.
     *
     * Serializes as `dfc-b:sku`.
     */
    sku?: string;
    /**
     * Any limit on the stock of this particular listing. This ay differ from
     *   stock limits on the Product (for example if the Product is listed in
     *   multiple catalogues)
     *
     * Serializes as `dfc-b:stockLimitation`.
     */
    stockLimitation?: number;
    /**
     * All Sales Sessions that this Offer is listed in
     *
     * Serializes as `dfc-b:listedIn`.
     */
    listedIn?: string;
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
     * The Enterprise that manages the CatalogItem (may differ from the owner
     *   of the Product)
     *
     * Serializes as `dfc-b:managedBy`.
     */
    managedBy?: Organization | string;
    /**
     * All Offers that this Catalog Item is offered to categories of customer
     *   through
     *
     * Serializes as `dfc-b:offeredThrough`.
     */
    offeredThrough?: Offer | string;
    /**
     * The Product that the CatalogItem is listing for sale
     *
     * Serializes as `dfc-b:references`.
     */
    references?: (DefinedProduct | string)[];
}
/**
 * A DFC `dfc-b:CatalogItem`, serialized with `@type: dfc-b:CatalogItem`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: extraAvailabilityTime, extraDeliveryCondition, sku,
 *   stockLimitation, listedIn, date, description, name, characteristicOf,
 *   hasDimension, managedBy, offeredThrough, references.
 */
export declare class CatalogItem extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Additional lead time for catalog item. To be appended to
     *   AvailabilityTime
     *
     * Serializes as `dfc-b:extraAvailabilityTime`.
     */
    extraAvailabilityTime?: string;
    /**
     * Additional devilery conditions for this item (append to any Devliery
     *   Condition set at Product level)
     *
     * Serializes as `dfc-b:extraDeliveryCondition`.
     */
    extraDeliveryCondition?: string;
    /**
     * Only a general "SKU" id is proposed for now. Agents using GTIN could
     *   use GTIN as SKU but other IDs than GTIN can be used.
     *
     * Serializes as `dfc-b:sku`.
     */
    sku?: string;
    /**
     * Any limit on the stock of this particular listing. This ay differ from
     *   stock limits on the Product (for example if the Product is listed in
     *   multiple catalogues)
     *
     * Serializes as `dfc-b:stockLimitation`.
     */
    stockLimitation?: number;
    /**
     * All Sales Sessions that this Offer is listed in
     *
     * Serializes as `dfc-b:listedIn`.
     */
    listedIn?: string;
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
     * The Enterprise that manages the CatalogItem (may differ from the owner
     *   of the Product)
     *
     * Serializes as `dfc-b:managedBy`.
     */
    managedBy?: Organization | string;
    /**
     * All Offers that this Catalog Item is offered to categories of customer
     *   through
     *
     * Serializes as `dfc-b:offeredThrough`.
     */
    offeredThrough?: Offer | string;
    /**
     * The Product that the CatalogItem is listing for sale
     *
     * Serializes as `dfc-b:references`.
     */
    references?: (DefinedProduct | string)[];
    constructor(semanticId: string, params?: CatalogItemParams);
}
