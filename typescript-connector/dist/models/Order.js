import { SemanticObject } from "../core/SemanticObject.js";
/**
 * A DFC `dfc-b:Order`, serialized with `@type: dfc-b:Order`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: discount, orderNumber, hasFulfilmentStatus,
 *   hasOrderStatus, hasPaymentMethod, hasPaymentStatus, soldBy, uses, date,
 *   description, name, characteristicOf, hasDimension, belongsTo, hasPart,
 *   orderedBy, selects.
 */
export class Order extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Order";
    }
    /**
     * Any discount applied to the Price
     *
     * Serializes as `dfc-b:discount`.
     */
    discount;
    /**
     * The Order Number on the parent platform
     *
     * Serializes as `dfc-b:orderNumber`.
     */
    orderNumber;
    /**
     * The Fulfilment State in which the Order is. See expectations around
     *   Order flow controls for further details
     *
     * Serializes as `dfc-b:hasFulfilmentStatus`.
     */
    hasFulfilmentStatus;
    /**
     * The state in which the Order is. See expectations around Order flow
     *   controls for further details
     *
     * Serializes as `dfc-b:hasOrderStatus`.
     */
    hasOrderStatus;
    /**
     * The PaymentMethod associated with the Order (e.g. Cash, Stripe etc)
     *
     * Serializes as `dfc-b:hasPaymentMethod`.
     */
    hasPaymentMethod;
    /**
     * The Payment State in which the Order is. See expectations around Order
     *   flow controls for further details
     *
     * Serializes as `dfc-b:hasPaymentStatus`.
     */
    hasPaymentStatus;
    /**
     * The entity responsible for the sale (could be the Enterprise or a
     *   Salesperson within that Enterprise, or a third party)
     *
     * Serializes as `dfc-b:soldBy`.
     */
    soldBy;
    /**
     * *** DEPRECATED *** Use `refersTo` instead.The Address the delivery will
     *   be/was made to
     *
     * Serializes as `dfc-b:uses`.
     */
    uses;
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
     * A Customer (as an Agent) can belong to a particular CustomerCategory as
     *   defined by the owning Enterprise
     *
     * Serializes as `dfc-b:belongsTo`.
     */
    belongsTo;
    /**
     * All OrderLines that make up the Order
     *
     * Serializes as `dfc-b:hasPart`.
     */
    hasPart;
    /**
     * Serializes as `dfc-b:orderedBy`.
     */
    orderedBy;
    /**
     * The method of shipping selected for the ORder (e.g. Overnight courier,
     *   same-day delivery, economy delivery )
     *
     * Serializes as `dfc-b:selects`.
     */
    selects;
    constructor(semanticId, params) {
        super(semanticId);
        this.discount = params?.discount;
        this.orderNumber = params?.orderNumber;
        this.hasFulfilmentStatus = params?.hasFulfilmentStatus;
        this.hasOrderStatus = params?.hasOrderStatus;
        this.hasPaymentMethod = params?.hasPaymentMethod;
        this.hasPaymentStatus = params?.hasPaymentStatus;
        this.soldBy = params?.soldBy;
        this.uses = params?.uses;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.belongsTo = params?.belongsTo;
        this.hasPart = params?.hasPart;
        this.orderedBy = params?.orderedBy;
        this.selects = params?.selects;
        this.semanticType = Order.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:discount", () => this.discount);
        this.registerSemanticProperty("dfc-b:orderNumber", () => this.orderNumber);
        this.registerSemanticProperty("dfc-b:hasFulfilmentStatus", () => this.hasFulfilmentStatus);
        this.registerSemanticProperty("dfc-b:hasOrderStatus", () => this.hasOrderStatus);
        this.registerSemanticProperty("dfc-b:hasPaymentMethod", () => this.hasPaymentMethod);
        this.registerSemanticProperty("dfc-b:hasPaymentStatus", () => this.hasPaymentStatus);
        this.registerSemanticProperty("dfc-b:soldBy", () => this.soldBy);
        this.registerSemanticProperty("dfc-b:uses", () => this.uses);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:belongsTo", () => this.belongsTo);
        this.registerSemanticProperty("dfc-b:hasPart", () => this.hasPart);
        this.registerSemanticProperty("dfc-b:orderedBy", () => this.orderedBy);
        this.registerSemanticProperty("dfc-b:selects", () => this.selects);
    }
    static {
        SemanticObject.typeRegistry.set(Order.SEMANTIC_TYPE, Order);
    }
}
