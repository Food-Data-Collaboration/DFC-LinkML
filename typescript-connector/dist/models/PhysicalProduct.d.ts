import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { Agent } from "./Agent.js";
import type { LocalizedProduct } from "./LocalizedProduct.js";
import type { ProductBatch } from "./ProductBatch.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
/**
 * Constructor parameters for {@link PhysicalProduct}.
 *
 * Own DFC properties: image, quantity, concernedBy, constituedBy,
 *   consumedBy, fulfills, producedBy, hasQuantity, ownedBy, represents,
 *   tracedBy.
 *
 * Inherited parameters come from {@link WhatSubjectParams}.
 */
export interface PhysicalProductParams extends WhatSubjectParams {
    /**
     * A URL for an image of the Product
     *
     * Serializes as `dfc-b:Image`.
     */
    image?: string;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity?: number;
    /**
     * Any/All Order Lines that relate to this Product
     *
     * Serializes as `dfc-b:concernedBy`.
     */
    concernedBy?: string;
    /**
     * Serializes as `dfc-b:constituedBy`.
     */
    constituedBy?: string[];
    /**
     * The ConsmuptionFlow by which the Product is transformed into other
     *   Products
     *
     * Serializes as `dfc-b:consumedBy`.
     */
    consumedBy?: string[];
    /**
     * Serializes as `dfc-b:fulfills`.
     */
    fulfills?: string[];
    /**
     * Link to another SuppleidProduct that is produced by this Product
     *
     * Serializes as `dfc-b:producedBy`.
     */
    producedBy?: string[];
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity?: QuantitativeValue | string;
    /**
     * Serializes as `dfc-b:ownedBy`.
     */
    ownedBy?: Agent | string;
    /**
     * Serializes as `dfc-b:represents`.
     */
    represents?: (LocalizedProduct | string)[];
    /**
     * Serializes as `dfc-b:tracedBy`.
     */
    tracedBy?: (ProductBatch | string)[];
}
/**
 * A DFC `dfc-b:PhysicalProduct`, serialized with `@type:
 *   dfc-b:PhysicalProduct`.
 * Class hierarchy: `What_Subject` -> `PhysicalProduct`.
 * Own DFC properties: image, quantity, concernedBy, constituedBy,
 *   consumedBy, fulfills, producedBy, hasQuantity, ownedBy, represents,
 *   tracedBy.
 */
export declare class PhysicalProduct extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    /**
     * A URL for an image of the Product
     *
     * Serializes as `dfc-b:Image`.
     */
    image?: string;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity?: number;
    /**
     * Any/All Order Lines that relate to this Product
     *
     * Serializes as `dfc-b:concernedBy`.
     */
    concernedBy?: string;
    /**
     * Serializes as `dfc-b:constituedBy`.
     */
    constituedBy?: string[];
    /**
     * The ConsmuptionFlow by which the Product is transformed into other
     *   Products
     *
     * Serializes as `dfc-b:consumedBy`.
     */
    consumedBy?: string[];
    /**
     * Serializes as `dfc-b:fulfills`.
     */
    fulfills?: string[];
    /**
     * Link to another SuppleidProduct that is produced by this Product
     *
     * Serializes as `dfc-b:producedBy`.
     */
    producedBy?: string[];
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity?: QuantitativeValue | string;
    /**
     * Serializes as `dfc-b:ownedBy`.
     */
    ownedBy?: Agent | string;
    /**
     * Serializes as `dfc-b:represents`.
     */
    represents?: (LocalizedProduct | string)[];
    /**
     * Serializes as `dfc-b:tracedBy`.
     */
    tracedBy?: (ProductBatch | string)[];
    constructor(semanticId: string, params?: PhysicalProductParams);
}
