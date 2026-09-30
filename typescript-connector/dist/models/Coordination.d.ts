import { SemanticObject } from "../core/SemanticObject.js";
import type { Organization } from "./Organization.js";
import type { SaleSession } from "./SaleSession.js";
/**
 * Constructor parameters for {@link Coordination}.
 *
 * Own DFC properties: marginPercent, date, description, name,
 *   characteristicOf, hasDimension, coordinatedBy, hasObject.
 */
export interface CoordinationParams {
    /**
     * The percentage margin the coordinating Enterprise is charging as
     *   comission for managing the Sales Session (from 0-100%)
     *
     * Serializes as `dfc-b:marginPercent`.
     */
    marginPercent?: number;
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
     * Confirms the Enterprise Coordinates certain SaleSessions, and defines
     *   margin %age that the Enterprise takes for managing the SaleSession
     *
     * Serializes as `dfc-b:coordinatedBy`.
     */
    coordinatedBy?: Organization | string;
    /**
     * The Sales Session that is subject to the coordination
     *
     * Serializes as `dfc-b:hasObject`.
     */
    hasObject?: SaleSession | string;
}
/**
 * A DFC `dfc-b:Coordination`, serialized with `@type: dfc-b:Coordination`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: marginPercent, date, description, name,
 *   characteristicOf, hasDimension, coordinatedBy, hasObject.
 */
export declare class Coordination extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * The percentage margin the coordinating Enterprise is charging as
     *   comission for managing the Sales Session (from 0-100%)
     *
     * Serializes as `dfc-b:marginPercent`.
     */
    marginPercent?: number;
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
     * Confirms the Enterprise Coordinates certain SaleSessions, and defines
     *   margin %age that the Enterprise takes for managing the SaleSession
     *
     * Serializes as `dfc-b:coordinatedBy`.
     */
    coordinatedBy?: Organization | string;
    /**
     * The Sales Session that is subject to the coordination
     *
     * Serializes as `dfc-b:hasObject`.
     */
    hasObject?: SaleSession | string;
    constructor(semanticId: string, params?: CoordinationParams);
}
