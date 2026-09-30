import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
/**
 * A DFC `dfc-b:PhysicalProduct`, serialized with `@type:
 *   dfc-b:PhysicalProduct`.
 * Class hierarchy: `What_Subject` -> `PhysicalProduct`.
 * Own DFC properties: image, quantity, concernedBy, constituedBy,
 *   consumedBy, fulfills, producedBy, hasQuantity, ownedBy, represents,
 *   tracedBy.
 */
export class PhysicalProduct extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:PhysicalProduct";
    }
    /**
     * A URL for an image of the Product
     *
     * Serializes as `dfc-b:Image`.
     */
    image;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity;
    /**
     * Any/All Order Lines that relate to this Product
     *
     * Serializes as `dfc-b:concernedBy`.
     */
    concernedBy;
    /**
     * Serializes as `dfc-b:constituedBy`.
     */
    constituedBy;
    /**
     * The ConsmuptionFlow by which the Product is transformed into other
     *   Products
     *
     * Serializes as `dfc-b:consumedBy`.
     */
    consumedBy;
    /**
     * Serializes as `dfc-b:fulfills`.
     */
    fulfills;
    /**
     * Link to another SuppleidProduct that is produced by this Product
     *
     * Serializes as `dfc-b:producedBy`.
     */
    producedBy;
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity;
    /**
     * Serializes as `dfc-b:ownedBy`.
     */
    ownedBy;
    /**
     * Serializes as `dfc-b:represents`.
     */
    represents;
    /**
     * Serializes as `dfc-b:tracedBy`.
     */
    tracedBy;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.image = params?.image;
        this.quantity = params?.quantity;
        this.concernedBy = params?.concernedBy;
        this.constituedBy = params?.constituedBy;
        this.consumedBy = params?.consumedBy;
        this.fulfills = params?.fulfills;
        this.producedBy = params?.producedBy;
        this.hasQuantity = params?.hasQuantity;
        this.ownedBy = params?.ownedBy;
        this.represents = params?.represents;
        this.tracedBy = params?.tracedBy;
        this.semanticType = PhysicalProduct.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Image", () => this.image);
        this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:concernedBy", () => this.concernedBy);
        this.registerSemanticProperty("dfc-b:constituedBy", () => this.constituedBy);
        this.registerSemanticProperty("dfc-b:consumedBy", () => this.consumedBy);
        this.registerSemanticProperty("dfc-b:fulfills", () => this.fulfills);
        this.registerSemanticProperty("dfc-b:producedBy", () => this.producedBy);
        this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
        this.registerSemanticProperty("dfc-b:ownedBy", () => this.ownedBy);
        this.registerSemanticProperty("dfc-b:represents", () => this.represents);
        this.registerSemanticProperty("dfc-b:tracedBy", () => this.tracedBy);
    }
    static {
        SemanticObject.typeRegistry.set(PhysicalProduct.SEMANTIC_TYPE, PhysicalProduct);
    }
}
