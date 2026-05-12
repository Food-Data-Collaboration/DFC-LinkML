import { SemanticObject } from "../core/SemanticObject.js";
export interface OfferParams {
    discount?: number;
    stockLimitation?: number;
    concernedBy?: string;
    hasPrice?: string;
    listedIn?: string;
    offers?: string[];
    offersTo?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
}
export declare class Offer extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    discount?: number;
    stockLimitation?: number;
    concernedBy?: string;
    hasPrice?: string;
    listedIn?: string;
    offers?: string[];
    offersTo?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    constructor(semanticId: string, params?: OfferParams);
}
