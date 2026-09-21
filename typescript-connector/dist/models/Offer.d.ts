import { SemanticObject } from "../core/SemanticObject.js";
import type { CatalogItem } from "./CatalogItem.js";
import type { CustomerCategory } from "./CustomerCategory.js";
export interface OfferParams {
    discount?: number;
    stockLimitation?: number;
    concernedBy?: string;
    hasPrice?: string;
    listedIn?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    offers?: (CatalogItem | string)[];
    offersTo?: (CustomerCategory | string)[];
}
export declare class Offer extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    discount?: number;
    stockLimitation?: number;
    concernedBy?: string;
    hasPrice?: string;
    listedIn?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    offers?: (CatalogItem | string)[];
    offersTo?: (CustomerCategory | string)[];
    constructor(semanticId: string, params?: OfferParams);
}
