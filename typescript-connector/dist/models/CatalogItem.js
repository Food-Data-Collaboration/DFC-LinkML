import { SemanticObject } from "../core/SemanticObject.js";
/**
 * A DFC `dfc-b:CatalogItem`, serialized with `@type: dfc-b:CatalogItem`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: extraAvailabilityTime, extraDeliveryCondition, sku,
 *   stockLimitation, listedIn, date, description, name, characteristicOf,
 *   hasDimension, managedBy, offeredThrough, references.
 */
export class CatalogItem extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:CatalogItem";
    }
    /**
     * Additional lead time for catalog item. To be appended to
     *   AvailabilityTime
     *
     * Serializes as `dfc-b:extraAvailabilityTime`.
     */
    extraAvailabilityTime;
    /**
     * Additional devilery conditions for this item (append to any Devliery
     *   Condition set at Product level)
     *
     * Serializes as `dfc-b:extraDeliveryCondition`.
     */
    extraDeliveryCondition;
    /**
     * Only a general "SKU" id is proposed for now. Agents using GTIN could
     *   use GTIN as SKU but other IDs than GTIN can be used.
     *
     * Serializes as `dfc-b:sku`.
     */
    sku;
    /**
     * Any limit on the stock of this particular listing. This ay differ from
     *   stock limits on the Product (for example if the Product is listed in
     *   multiple catalogues)
     *
     * Serializes as `dfc-b:stockLimitation`.
     */
    stockLimitation;
    /**
     * All Sales Sessions that this Offer is listed in
     *
     * Serializes as `dfc-b:listedIn`.
     */
    listedIn;
    /**
     * Serializes as `dfc-b:date`.
     */
    date;
    /**
     * Serializes as `dfc-b:description`.
     */
    description;
    /**
     * Name of the Enterprise
     *
     * Serializes as `dfc-b:name`.
     */
    name;
    /**
     * Serializes as `dfc-b:characteristicOf`.
     */
    characteristicOf;
    /**
     * Serializes as `dfc-b:hasDimension`.
     */
    hasDimension;
    /**
     * The Enterprise that manages the CatalogItem (may differ from the owner
     *   of the Product)
     *
     * Serializes as `dfc-b:managedBy`.
     */
    managedBy;
    /**
     * All Offers that this Catalog Item is offered to categories of customer
     *   through
     *
     * Serializes as `dfc-b:offeredThrough`.
     */
    offeredThrough;
    /**
     * The Product that the CatalogItem is listing for sale
     *
     * Serializes as `dfc-b:references`.
     */
    references;
    constructor(semanticId, params) {
        super(semanticId);
        this.extraAvailabilityTime = params?.extraAvailabilityTime;
        this.extraDeliveryCondition = params?.extraDeliveryCondition;
        this.sku = params?.sku;
        this.stockLimitation = params?.stockLimitation;
        this.listedIn = params?.listedIn;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.managedBy = params?.managedBy;
        this.offeredThrough = params?.offeredThrough;
        this.references = params?.references;
        this.semanticType = CatalogItem.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:extraAvailabilityTime", () => this.extraAvailabilityTime);
        this.registerSemanticProperty("dfc-b:extraDeliveryCondition", () => this.extraDeliveryCondition);
        this.registerSemanticProperty("dfc-b:sku", () => this.sku);
        this.registerSemanticProperty("dfc-b:stockLimitation", () => this.stockLimitation);
        this.registerSemanticProperty("dfc-b:listedIn", () => this.listedIn);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:managedBy", () => this.managedBy);
        this.registerSemanticProperty("dfc-b:offeredThrough", () => this.offeredThrough);
        this.registerSemanticProperty("dfc-b:references", () => this.references);
    }
    static {
        SemanticObject.typeRegistry.set(CatalogItem.SEMANTIC_TYPE, CatalogItem);
    }
}
