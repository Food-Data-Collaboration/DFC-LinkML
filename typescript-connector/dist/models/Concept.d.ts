import { SemanticObject } from "../core/SemanticObject.js";
/**
 * Constructor parameters for {@link Concept}.
 *
 * Own DFC properties: certificateOf, claimOf, containerInformationOf,
 *   geographicalOriginOf, natureOriginOf, partOriginOf, typeOf, date,
 *   description, name, characteristicOf, hasDimension.
 */
export interface ConceptParams {
    /**
     * Serializes as `dfc-b:certificateOf`.
     */
    certificateOf?: string;
    /**
     * Serializes as `dfc-b:claimOf`.
     */
    claimOf?: string;
    /**
     * Serializes as `dfc-b:containerInformationOf`.
     */
    containerInformationOf?: string;
    /**
     * Serializes as `dfc-b:geographicalOriginOf`.
     */
    geographicalOriginOf?: string;
    /**
     * Serializes as `dfc-b:natureOriginOf`.
     */
    natureOriginOf?: string;
    /**
     * Serializes as `dfc-b:partOriginOf`.
     */
    partOriginOf?: string;
    /**
     * Serializes as `dfc-b:typeOf`.
     */
    typeOf?: string;
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
 * A DFC `dfc-b:Concept`, serialized with `@type: dfc-b:Concept`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: certificateOf, claimOf, containerInformationOf,
 *   geographicalOriginOf, natureOriginOf, partOriginOf, typeOf, date,
 *   description, name, characteristicOf, hasDimension.
 */
export declare class Concept extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:certificateOf`.
     */
    certificateOf?: string;
    /**
     * Serializes as `dfc-b:claimOf`.
     */
    claimOf?: string;
    /**
     * Serializes as `dfc-b:containerInformationOf`.
     */
    containerInformationOf?: string;
    /**
     * Serializes as `dfc-b:geographicalOriginOf`.
     */
    geographicalOriginOf?: string;
    /**
     * Serializes as `dfc-b:natureOriginOf`.
     */
    natureOriginOf?: string;
    /**
     * Serializes as `dfc-b:partOriginOf`.
     */
    partOriginOf?: string;
    /**
     * Serializes as `dfc-b:typeOf`.
     */
    typeOf?: string;
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
    constructor(semanticId: string, params?: ConceptParams);
}
