import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { OpeningHoursSpecification } from "./OpeningHoursSpecification.js";
import type { PhysicalPlace } from "./PhysicalPlace.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
/**
 * Constructor parameters for {@link Vehicle}.
 *
 * Own DFC properties: frozen, refrigerated, ships, usedInRoute, basedAt,
 *   hasQuantity, isAvailableDuring.
 *
 * Inherited parameters come from {@link WhatSubjectParams}.
 */
export interface VehicleParams extends WhatSubjectParams {
    /**
     * Defines if the parent class supports or requires refrigeration to a
     *   safe temperature to maintain frozen products.
     *
     * Serializes as `dfc-b:frozen`.
     */
    frozen?: boolean;
    /**
     * Defines if the parent class supports or requires refrigeration to a
     *   safe temperature to maintain refrigerated products (typically 0-5°C).
     *
     * Serializes as `dfc-b:refrigerated`.
     */
    refrigerated?: boolean;
    /**
     * Serializes as `dfc-b:ships`.
     */
    ships?: string[];
    /**
     * Serializes as `dfc-b:usedInRoute`.
     */
    usedInRoute?: string;
    /**
     * Serializes as `dfc-b:basedAt`.
     */
    basedAt?: PhysicalPlace | string;
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity?: QuantitativeValue | string;
    /**
     * Operating window of the Vehicle.
     *
     * Serializes as `dfc-b:isAvailableDuring`.
     */
    isAvailableDuring?: OpeningHoursSpecification | string;
}
/**
 * A DFC `dfc-b:Vehicle`, serialized with `@type: dfc-b:Vehicle`.
 * Class hierarchy: `What_Subject` -> `Vehicle`.
 * Own DFC properties: frozen, refrigerated, ships, usedInRoute, basedAt,
 *   hasQuantity, isAvailableDuring.
 */
export declare class Vehicle extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Defines if the parent class supports or requires refrigeration to a
     *   safe temperature to maintain frozen products.
     *
     * Serializes as `dfc-b:frozen`.
     */
    frozen?: boolean;
    /**
     * Defines if the parent class supports or requires refrigeration to a
     *   safe temperature to maintain refrigerated products (typically 0-5°C).
     *
     * Serializes as `dfc-b:refrigerated`.
     */
    refrigerated?: boolean;
    /**
     * Serializes as `dfc-b:ships`.
     */
    ships?: string[];
    /**
     * Serializes as `dfc-b:usedInRoute`.
     */
    usedInRoute?: string;
    /**
     * Serializes as `dfc-b:basedAt`.
     */
    basedAt?: PhysicalPlace | string;
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity?: QuantitativeValue | string;
    /**
     * Operating window of the Vehicle.
     *
     * Serializes as `dfc-b:isAvailableDuring`.
     */
    isAvailableDuring?: OpeningHoursSpecification | string;
    constructor(semanticId: string, params?: VehicleParams);
}
