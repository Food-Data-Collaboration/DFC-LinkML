import { SemanticObject } from "../core/SemanticObject.js";
/**
 * A DFC `dfc-b:SaleSession`, serialized with `@type: dfc-b:SaleSession`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: endDate, quantity, startDate, holds, lists, date,
 *   description, name, characteristicOf, hasDimension, hasOption,
 *   hasQuantity, hostedAt, objectOf.
 */
export class SaleSession extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:SaleSession";
    }
    /**
     * The date/time that the Sales Session ends
     *
     * Serializes as `dfc-b:endDate`.
     */
    endDate;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity;
    /**
     * The date/time that the Sales Session starts
     *
     * Serializes as `dfc-b:startDate`.
     */
    startDate;
    /**
     * All Orders that were made during the Sales Session
     *
     * Serializes as `dfc-b:holds`.
     */
    holds;
    /**
     * All Items (which refer to a SuppliedProduct) that are part of the
     *   Catalog
     *
     * Serializes as `dfc-b:lists`.
     */
    lists;
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
     * Any (and all) ShippingOptions that are available for the session
     *
     * Serializes as `dfc-b:hasOption`.
     */
    hasOption;
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity;
    /**
     * The location the session is hosted at. This could be a physical (e.g. a
     *   shop or market) or virtual place (e.g. online store).
     *
     * Serializes as `dfc-b:hostedAt`.
     */
    hostedAt;
    /**
     * The Coordination (that defines which Enterprise coordinates the Sales
     *   Sesison)
     *
     * Serializes as `dfc-b:objectOf`.
     */
    objectOf;
    constructor(semanticId, params) {
        super(semanticId);
        this.endDate = params?.endDate;
        this.quantity = params?.quantity;
        this.startDate = params?.startDate;
        this.holds = params?.holds;
        this.lists = params?.lists;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.hasOption = params?.hasOption;
        this.hasQuantity = params?.hasQuantity;
        this.hostedAt = params?.hostedAt;
        this.objectOf = params?.objectOf;
        this.semanticType = SaleSession.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:endDate", () => this.endDate);
        this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:startDate", () => this.startDate);
        this.registerSemanticProperty("dfc-b:holds", () => this.holds);
        this.registerSemanticProperty("dfc-b:lists", () => this.lists);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:hasOption", () => this.hasOption);
        this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
        this.registerSemanticProperty("dfc-b:hostedAt", () => this.hostedAt);
        this.registerSemanticProperty("dfc-b:objectOf", () => this.objectOf);
    }
    static {
        SemanticObject.typeRegistry.set(SaleSession.SEMANTIC_TYPE, SaleSession);
    }
}
