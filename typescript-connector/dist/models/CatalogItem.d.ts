import { SemanticObject } from "../core/SemanticObject.js";
export interface CatalogItemParams {
    extraAvailabilityTime?: string;
    extraDeliveryCondition?: string;
    sku?: string;
    stockLimitation?: number;
    listedIn?: string;
    managedBy?: string;
    offeredThrough?: string;
    references?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
}
export declare class CatalogItem extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    extraAvailabilityTime?: string;
    extraDeliveryCondition?: string;
    sku?: string;
    stockLimitation?: number;
    listedIn?: string;
    managedBy?: string;
    offeredThrough?: string;
    references?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    constructor(semanticId: string, params?: CatalogItemParams);
}
