import { SemanticObject } from "../core/SemanticObject.js";
import type { DefinedProduct } from "./DefinedProduct.js";
import type { Offer } from "./Offer.js";
import type { Organization } from "./Organization.js";
export interface CatalogItemParams {
    extraAvailabilityTime?: string;
    extraDeliveryCondition?: string;
    sku?: string;
    stockLimitation?: number;
    listedIn?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    managedBy?: Organization | string;
    offeredThrough?: Offer | string;
    references?: (DefinedProduct | string)[];
}
export declare class CatalogItem extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    extraAvailabilityTime?: string;
    extraDeliveryCondition?: string;
    sku?: string;
    stockLimitation?: number;
    listedIn?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    managedBy?: Organization | string;
    offeredThrough?: Offer | string;
    references?: (DefinedProduct | string)[];
    constructor(semanticId: string, params?: CatalogItemParams);
}
