import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { PhysicalProduct } from "./PhysicalProduct.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
import type { SuppliedProduct } from "./SuppliedProduct.js";
/**
 * Constructor parameters for {@link LocalizedProduct}.
 *
 * Own DFC properties: image, cost, quantity, constituedBy, consumedBy,
 *   producedBy, hasQuantity, hasReference, representedBy.
 *
 * Inherited parameters come from {@link WhatSubjectParams}.
 */
export interface LocalizedProductParams extends WhatSubjectParams {
    /**
     * A URL for an image of the Product
     *
     * Serializes as `dfc-b:Image`.
     */
    image?: string;
    /**
     * Serializes as `dfc-b:cost`.
     */
    cost?: number;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity?: number;
    /**
     * Serializes as `dfc-b:constituedBy`.
     */
    constituedBy?: string;
    /**
     * The ConsmuptionFlow by which the Product is transformed into other
     *   Products
     *
     * Serializes as `dfc-b:consumedBy`.
     */
    consumedBy?: string;
    /**
     * Link to another SuppleidProduct that is produced by this Product
     *
     * Serializes as `dfc-b:producedBy`.
     */
    producedBy?: string;
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity?: QuantitativeValue | string;
    /**
     * Serializes as `dfc-b:hasReference`.
     */
    hasReference?: SuppliedProduct | string;
    /**
     * Serializes as `dfc-b:representedBy`.
     */
    representedBy?: PhysicalProduct | string;
}
/**
 * A DFC `dfc-b:LocalizedProduct`, serialized with `@type:
 *   dfc-b:LocalizedProduct`.
 * Class hierarchy: `What_Subject` -> `LocalizedProduct`.
 * Own DFC properties: image, cost, quantity, constituedBy, consumedBy,
 *   producedBy, hasQuantity, hasReference, representedBy.
 */
export declare class LocalizedProduct extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    /**
     * A URL for an image of the Product
     *
     * Serializes as `dfc-b:Image`.
     */
    image?: string;
    /**
     * Serializes as `dfc-b:cost`.
     */
    cost?: number;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity?: number;
    /**
     * Serializes as `dfc-b:constituedBy`.
     */
    constituedBy?: string;
    /**
     * The ConsmuptionFlow by which the Product is transformed into other
     *   Products
     *
     * Serializes as `dfc-b:consumedBy`.
     */
    consumedBy?: string;
    /**
     * Link to another SuppleidProduct that is produced by this Product
     *
     * Serializes as `dfc-b:producedBy`.
     */
    producedBy?: string;
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity?: QuantitativeValue | string;
    /**
     * Serializes as `dfc-b:hasReference`.
     */
    hasReference?: SuppliedProduct | string;
    /**
     * Serializes as `dfc-b:representedBy`.
     */
    representedBy?: PhysicalProduct | string;
    constructor(semanticId: string, params?: LocalizedProductParams);
}
