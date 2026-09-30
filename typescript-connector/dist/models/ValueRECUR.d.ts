import { SemanticObject } from "../core/SemanticObject.js";
/**
 * Constructor parameters for {@link ValueRECUR}.
 *
 * Own DFC properties: byday, bymonth, freq, interval, date, description,
 *   name, characteristicOf, hasDimension.
 */
export interface ValueRECURParams {
    /**
     * Serializes as `http://www.w3.org/2002/12/cal/icaltzd#byday`.
     */
    byday?: string;
    /**
     * Serializes as `http://www.w3.org/2002/12/cal/icaltzd#bymonth`.
     */
    bymonth?: string;
    /**
     * Serializes as `http://www.w3.org/2002/12/cal/icaltzd#freq`.
     */
    freq?: string;
    /**
     * Serializes as `http://www.w3.org/2002/12/cal/icaltzd#interval`.
     */
    interval?: number;
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
}
/**
 * A DFC `dfc-b:Value_RECUR`, serialized with `@type: dfc-b:Value_RECUR`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: byday, bymonth, freq, interval, date, description,
 *   name, characteristicOf, hasDimension.
 */
export declare class ValueRECUR extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `http://www.w3.org/2002/12/cal/icaltzd#byday`.
     */
    byday?: string;
    /**
     * Serializes as `http://www.w3.org/2002/12/cal/icaltzd#bymonth`.
     */
    bymonth?: string;
    /**
     * Serializes as `http://www.w3.org/2002/12/cal/icaltzd#freq`.
     */
    freq?: string;
    /**
     * Serializes as `http://www.w3.org/2002/12/cal/icaltzd#interval`.
     */
    interval?: number;
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
    constructor(semanticId: string, params?: ValueRECURParams);
}
