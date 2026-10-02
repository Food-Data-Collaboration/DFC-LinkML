import { Place, type PlaceParams } from "./Place.js";
import type { Address } from "./Address.js";
import type { Feature } from "./Feature.js";
import type { OpeningHoursSpecification } from "./OpeningHoursSpecification.js";
import type { Person } from "./Person.js";
import type { RealStock } from "./RealStock.js";
import type { TheoriticalStock } from "./TheoriticalStock.js";
/**
 * Constructor parameters for {@link PhysicalPlace}.
 *
 * Own DFC properties: hasPhoneNumber, hasAddress, hasGeoJsonFeature,
 *   hasMainContact, isOpenDuring, localizes, stores.
 *
 * Inherited parameters come from {@link PlaceParams}.
 */
export interface PhysicalPlaceParams extends PlaceParams {
    /**
     * Phone Number relating to the Agent
     *
     * Serializes as `dfc-b:hasPhoneNumber`.
     */
    hasPhoneNumber?: string[];
    /**
     * Address of Agent
     *
     * Serializes as `dfc-b:hasAddress`.
     */
    hasAddress?: Address | string;
    /**
     * Serializes as `dfc-b:hasGeoJsonFeature`.
     */
    hasGeoJsonFeature?: (Feature | string)[];
    /**
     * The Person, if any, who is a principal contact for this physical
     *   location
     *
     * Serializes as `dfc-b:hasMainContact`.
     */
    hasMainContact?: (Person | string)[];
    /**
     * Schedule during which the Physical Place is accessible, may indicate it
     *   is open to the public or just for business.
     *
     * Serializes as `dfc-b:isOpenDuring`.
     */
    isOpenDuring?: OpeningHoursSpecification | string;
    /**
     * Any theoretical stock that is associated with this location
     *
     * Serializes as `dfc-b:localizes`.
     */
    localizes?: (TheoriticalStock | string)[];
    /**
     * Any real stock that is associated with this location
     *
     * Serializes as `dfc-b:stores`.
     */
    stores?: (RealStock | string)[];
}
/**
 * A DFC `dfc-b:PhysicalPlace`, serialized with `@type:
 *   dfc-b:PhysicalPlace`.
 * Class hierarchy: `Where_Subject` -> `Place` -> `PhysicalPlace`.
 * Own DFC properties: hasPhoneNumber, hasAddress, hasGeoJsonFeature,
 *   hasMainContact, isOpenDuring, localizes, stores.
 */
export declare class PhysicalPlace extends Place {
    static get SEMANTIC_TYPE(): string;
    /**
     * Phone Number relating to the Agent
     *
     * Serializes as `dfc-b:hasPhoneNumber`.
     */
    hasPhoneNumber?: string[];
    /**
     * Address of Agent
     *
     * Serializes as `dfc-b:hasAddress`.
     */
    hasAddress?: Address | string;
    /**
     * Serializes as `dfc-b:hasGeoJsonFeature`.
     */
    hasGeoJsonFeature?: (Feature | string)[];
    /**
     * The Person, if any, who is a principal contact for this physical
     *   location
     *
     * Serializes as `dfc-b:hasMainContact`.
     */
    hasMainContact?: (Person | string)[];
    /**
     * Schedule during which the Physical Place is accessible, may indicate it
     *   is open to the public or just for business.
     *
     * Serializes as `dfc-b:isOpenDuring`.
     */
    isOpenDuring?: OpeningHoursSpecification | string;
    /**
     * Any theoretical stock that is associated with this location
     *
     * Serializes as `dfc-b:localizes`.
     */
    localizes?: (TheoriticalStock | string)[];
    /**
     * Any real stock that is associated with this location
     *
     * Serializes as `dfc-b:stores`.
     */
    stores?: (RealStock | string)[];
    constructor(semanticId: string, params?: PhysicalPlaceParams);
}
