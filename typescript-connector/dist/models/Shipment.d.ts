import { SemanticObject } from "../core/SemanticObject.js";
import type { PhysicalPlace } from "./PhysicalPlace.js";
/**
 * Constructor parameters for {@link Shipment}.
 *
 * Own DFC properties: endDate, startDate, isShippedIn, transports, date,
 *   description, name, characteristicOf, hasDimension, endsAt, startsAt.
 */
export interface ShipmentParams {
    /**
     * The date/time that the Sales Session ends
     *
     * Serializes as `dfc-b:endDate`.
     */
    endDate?: string;
    /**
     * The date/time that the Sales Session starts
     *
     * Serializes as `dfc-b:startDate`.
     */
    startDate?: string;
    /**
     * Serializes as `dfc-b:isShippedIn`.
     */
    isShippedIn?: string;
    /**
     * The Stock that is transported by a Shipment.
     *
     * Serializes as `dfc-b:transports`.
     */
    transports?: string[];
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
     * The destination of the Shipment.
     *
     * Serializes as `dfc-b:endsAt`.
     */
    endsAt?: PhysicalPlace | string;
    /**
     * The origin point of the Shipment.
     *
     * Serializes as `dfc-b:startsAt`.
     */
    startsAt?: PhysicalPlace | string;
}
/**
 * A DFC `dfc-b:Shipment`, serialized with `@type: dfc-b:Shipment`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: endDate, startDate, isShippedIn, transports, date,
 *   description, name, characteristicOf, hasDimension, endsAt, startsAt.
 */
export declare class Shipment extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * The date/time that the Sales Session ends
     *
     * Serializes as `dfc-b:endDate`.
     */
    endDate?: string;
    /**
     * The date/time that the Sales Session starts
     *
     * Serializes as `dfc-b:startDate`.
     */
    startDate?: string;
    /**
     * Serializes as `dfc-b:isShippedIn`.
     */
    isShippedIn?: string;
    /**
     * The Stock that is transported by a Shipment.
     *
     * Serializes as `dfc-b:transports`.
     */
    transports?: string[];
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
     * The destination of the Shipment.
     *
     * Serializes as `dfc-b:endsAt`.
     */
    endsAt?: PhysicalPlace | string;
    /**
     * The origin point of the Shipment.
     *
     * Serializes as `dfc-b:startsAt`.
     */
    startsAt?: PhysicalPlace | string;
    constructor(semanticId: string, params?: ShipmentParams);
}
