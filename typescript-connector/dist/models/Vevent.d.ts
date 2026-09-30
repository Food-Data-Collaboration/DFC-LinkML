import { SemanticObject } from "../core/SemanticObject.js";
import type { ValueRECUR } from "./ValueRECUR.js";
/**
 * Constructor parameters for {@link Vevent}.
 *
 * Own DFC properties: dtend, dtstart, date, description, name,
 *   characteristicOf, hasDimension, rrule.
 */
export interface VeventParams {
    /**
     * Serializes as `http://www.w3.org/2002/12/cal/icaltzd#dtend`.
     */
    dtend?: string;
    /**
     * Serializes as `http://www.w3.org/2002/12/cal/icaltzd#dtstart`.
     */
    dtstart?: string;
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
     * Serializes as `http://www.w3.org/2002/12/cal/icaltzd#rrule`.
     */
    rrule?: ValueRECUR | string;
}
/**
 * A DFC `dfc-b:Vevent`, serialized with `@type: dfc-b:Vevent`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: dtend, dtstart, date, description, name,
 *   characteristicOf, hasDimension, rrule.
 */
export declare class Vevent extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `http://www.w3.org/2002/12/cal/icaltzd#dtend`.
     */
    dtend?: string;
    /**
     * Serializes as `http://www.w3.org/2002/12/cal/icaltzd#dtstart`.
     */
    dtstart?: string;
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
     * Serializes as `http://www.w3.org/2002/12/cal/icaltzd#rrule`.
     */
    rrule?: ValueRECUR | string;
    constructor(semanticId: string, params?: VeventParams);
}
