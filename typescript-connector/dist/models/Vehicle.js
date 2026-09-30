import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
/**
 * A DFC `dfc-b:Vehicle`, serialized with `@type: dfc-b:Vehicle`.
 * Class hierarchy: `What_Subject` -> `Vehicle`.
 * Own DFC properties: frozen, refrigerated, ships, usedInRoute, basedAt,
 *   hasQuantity, isAvailableDuring.
 */
export class Vehicle extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Vehicle";
    }
    /**
     * Defines if the parent class supports or requires refrigeration to a
     *   safe temperature to maintain frozen products.
     *
     * Serializes as `dfc-b:frozen`.
     */
    frozen;
    /**
     * Defines if the parent class supports or requires refrigeration to a
     *   safe temperature to maintain refrigerated products (typically 0-5°C).
     *
     * Serializes as `dfc-b:refrigerated`.
     */
    refrigerated;
    /**
     * Serializes as `dfc-b:ships`.
     */
    ships;
    /**
     * Serializes as `dfc-b:usedInRoute`.
     */
    usedInRoute;
    /**
     * Serializes as `dfc-b:basedAt`.
     */
    basedAt;
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity;
    /**
     * Operating window of the Vehicle.
     *
     * Serializes as `dfc-b:isAvailableDuring`.
     */
    isAvailableDuring;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.frozen = params?.frozen;
        this.refrigerated = params?.refrigerated;
        this.ships = params?.ships;
        this.usedInRoute = params?.usedInRoute;
        this.basedAt = params?.basedAt;
        this.hasQuantity = params?.hasQuantity;
        this.isAvailableDuring = params?.isAvailableDuring;
        this.semanticType = Vehicle.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:frozen", () => this.frozen);
        this.registerSemanticProperty("dfc-b:refrigerated", () => this.refrigerated);
        this.registerSemanticProperty("dfc-b:ships", () => this.ships);
        this.registerSemanticProperty("dfc-b:usedInRoute", () => this.usedInRoute);
        this.registerSemanticProperty("dfc-b:basedAt", () => this.basedAt);
        this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
        this.registerSemanticProperty("dfc-b:isAvailableDuring", () => this.isAvailableDuring);
    }
    static {
        SemanticObject.typeRegistry.set(Vehicle.SEMANTIC_TYPE, Vehicle);
    }
}
