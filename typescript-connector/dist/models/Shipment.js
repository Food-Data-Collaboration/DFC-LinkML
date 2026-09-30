import { SemanticObject } from "../core/SemanticObject.js";
/**
 * A DFC `dfc-b:Shipment`, serialized with `@type: dfc-b:Shipment`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: endDate, startDate, isShippedIn, transports, date,
 *   description, name, characteristicOf, hasDimension, endsAt, startsAt.
 */
export class Shipment extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Shipment";
    }
    /**
     * The date/time that the Sales Session ends
     *
     * Serializes as `dfc-b:endDate`.
     */
    endDate;
    /**
     * The date/time that the Sales Session starts
     *
     * Serializes as `dfc-b:startDate`.
     */
    startDate;
    /**
     * Serializes as `dfc-b:isShippedIn`.
     */
    isShippedIn;
    /**
     * The Stock that is transported by a Shipment.
     *
     * Serializes as `dfc-b:transports`.
     */
    transports;
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
     * The destination of the Shipment.
     *
     * Serializes as `dfc-b:endsAt`.
     */
    endsAt;
    /**
     * The origin point of the Shipment.
     *
     * Serializes as `dfc-b:startsAt`.
     */
    startsAt;
    constructor(semanticId, params) {
        super(semanticId);
        this.endDate = params?.endDate;
        this.startDate = params?.startDate;
        this.isShippedIn = params?.isShippedIn;
        this.transports = params?.transports;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.endsAt = params?.endsAt;
        this.startsAt = params?.startsAt;
        this.semanticType = Shipment.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:endDate", () => this.endDate);
        this.registerSemanticProperty("dfc-b:startDate", () => this.startDate);
        this.registerSemanticProperty("dfc-b:isShippedIn", () => this.isShippedIn);
        this.registerSemanticProperty("dfc-b:transports", () => this.transports);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:endsAt", () => this.endsAt);
        this.registerSemanticProperty("dfc-b:startsAt", () => this.startsAt);
    }
    static {
        SemanticObject.typeRegistry.set(Shipment.SEMANTIC_TYPE, Shipment);
    }
}
