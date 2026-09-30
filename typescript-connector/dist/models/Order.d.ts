import { SemanticObject } from "../core/SemanticObject.js";
import type { Agent } from "./Agent.js";
import type { OrderLine } from "./OrderLine.js";
import type { SaleSession } from "./SaleSession.js";
import type { ShippingOption } from "./ShippingOption.js";
/**
 * Constructor parameters for {@link Order}.
 *
 * Own DFC properties: discount, orderNumber, hasFulfilmentStatus,
 *   hasOrderStatus, hasPaymentMethod, hasPaymentStatus, soldBy, uses, date,
 *   description, name, characteristicOf, hasDimension, belongsTo, hasPart,
 *   orderedBy, selects.
 */
export interface OrderParams {
    /**
     * Any discount applied to the Price
     *
     * Serializes as `dfc-b:discount`.
     */
    discount?: number;
    /**
     * The Order Number on the parent platform
     *
     * Serializes as `dfc-b:orderNumber`.
     */
    orderNumber?: string;
    /**
     * The Fulfilment State in which the Order is. See expectations around
     *   Order flow controls for further details
     *
     * Serializes as `dfc-b:hasFulfilmentStatus`.
     */
    hasFulfilmentStatus?: string;
    /**
     * The state in which the Order is. See expectations around Order flow
     *   controls for further details
     *
     * Serializes as `dfc-b:hasOrderStatus`.
     */
    hasOrderStatus?: string;
    /**
     * The PaymentMethod associated with the Order (e.g. Cash, Stripe etc)
     *
     * Serializes as `dfc-b:hasPaymentMethod`.
     */
    hasPaymentMethod?: string;
    /**
     * The Payment State in which the Order is. See expectations around Order
     *   flow controls for further details
     *
     * Serializes as `dfc-b:hasPaymentStatus`.
     */
    hasPaymentStatus?: string;
    /**
     * The entity responsible for the sale (could be the Enterprise or a
     *   Salesperson within that Enterprise, or a third party)
     *
     * Serializes as `dfc-b:soldBy`.
     */
    soldBy?: string;
    /**
     * *** DEPRECATED *** Use `refersTo` instead.The Address the delivery will
     *   be/was made to
     *
     * Serializes as `dfc-b:uses`.
     */
    uses?: string[];
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
     * A Customer (as an Agent) can belong to a particular CustomerCategory as
     *   defined by the owning Enterprise
     *
     * Serializes as `dfc-b:belongsTo`.
     */
    belongsTo?: SaleSession | string;
    /**
     * All OrderLines that make up the Order
     *
     * Serializes as `dfc-b:hasPart`.
     */
    hasPart?: OrderLine | string;
    /**
     * Serializes as `dfc-b:orderedBy`.
     */
    orderedBy?: Agent | string;
    /**
     * The method of shipping selected for the ORder (e.g. Overnight courier,
     *   same-day delivery, economy delivery )
     *
     * Serializes as `dfc-b:selects`.
     */
    selects?: (ShippingOption | string)[];
}
/**
 * A DFC `dfc-b:Order`, serialized with `@type: dfc-b:Order`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: discount, orderNumber, hasFulfilmentStatus,
 *   hasOrderStatus, hasPaymentMethod, hasPaymentStatus, soldBy, uses, date,
 *   description, name, characteristicOf, hasDimension, belongsTo, hasPart,
 *   orderedBy, selects.
 */
export declare class Order extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Any discount applied to the Price
     *
     * Serializes as `dfc-b:discount`.
     */
    discount?: number;
    /**
     * The Order Number on the parent platform
     *
     * Serializes as `dfc-b:orderNumber`.
     */
    orderNumber?: string;
    /**
     * The Fulfilment State in which the Order is. See expectations around
     *   Order flow controls for further details
     *
     * Serializes as `dfc-b:hasFulfilmentStatus`.
     */
    hasFulfilmentStatus?: string;
    /**
     * The state in which the Order is. See expectations around Order flow
     *   controls for further details
     *
     * Serializes as `dfc-b:hasOrderStatus`.
     */
    hasOrderStatus?: string;
    /**
     * The PaymentMethod associated with the Order (e.g. Cash, Stripe etc)
     *
     * Serializes as `dfc-b:hasPaymentMethod`.
     */
    hasPaymentMethod?: string;
    /**
     * The Payment State in which the Order is. See expectations around Order
     *   flow controls for further details
     *
     * Serializes as `dfc-b:hasPaymentStatus`.
     */
    hasPaymentStatus?: string;
    /**
     * The entity responsible for the sale (could be the Enterprise or a
     *   Salesperson within that Enterprise, or a third party)
     *
     * Serializes as `dfc-b:soldBy`.
     */
    soldBy?: string;
    /**
     * *** DEPRECATED *** Use `refersTo` instead.The Address the delivery will
     *   be/was made to
     *
     * Serializes as `dfc-b:uses`.
     */
    uses?: string[];
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
     * A Customer (as an Agent) can belong to a particular CustomerCategory as
     *   defined by the owning Enterprise
     *
     * Serializes as `dfc-b:belongsTo`.
     */
    belongsTo?: SaleSession | string;
    /**
     * All OrderLines that make up the Order
     *
     * Serializes as `dfc-b:hasPart`.
     */
    hasPart?: OrderLine | string;
    /**
     * Serializes as `dfc-b:orderedBy`.
     */
    orderedBy?: Agent | string;
    /**
     * The method of shipping selected for the ORder (e.g. Overnight courier,
     *   same-day delivery, economy delivery )
     *
     * Serializes as `dfc-b:selects`.
     */
    selects?: (ShippingOption | string)[];
    constructor(semanticId: string, params?: OrderParams);
}
