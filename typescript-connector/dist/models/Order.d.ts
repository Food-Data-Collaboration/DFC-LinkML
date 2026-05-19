import { SemanticObject } from "../core/SemanticObject.js";
export interface OrderParams {
    discount?: number;
    orderNumber?: string;
    belongsTo?: string;
    hasFulfilmentStatus?: string;
    hasOrderStatus?: string;
    hasPart?: string;
    hasPaymentMethod?: string;
    hasPaymentStatus?: string;
    orderedBy?: string;
    selects?: string[];
    soldBy?: string;
    uses?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
}
export declare class Order extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    discount?: number;
    orderNumber?: string;
    belongsTo?: string;
    hasFulfilmentStatus?: string;
    hasOrderStatus?: string;
    hasPart?: string;
    hasPaymentMethod?: string;
    hasPaymentStatus?: string;
    orderedBy?: string;
    selects?: string[];
    soldBy?: string;
    uses?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    constructor(semanticId: string, params?: OrderParams);
}
