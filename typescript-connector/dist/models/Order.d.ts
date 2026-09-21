import { SemanticObject } from "../core/SemanticObject.js";
import type { Agent } from "./Agent.js";
import type { OrderLine } from "./OrderLine.js";
import type { SaleSession } from "./SaleSession.js";
import type { ShippingOption } from "./ShippingOption.js";
export interface OrderParams {
    discount?: number;
    orderNumber?: string;
    hasFulfilmentStatus?: string;
    hasOrderStatus?: string;
    hasPaymentMethod?: string;
    hasPaymentStatus?: string;
    soldBy?: string;
    uses?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    belongsTo?: SaleSession | string;
    hasPart?: OrderLine | string;
    orderedBy?: Agent | string;
    selects?: (ShippingOption | string)[];
}
export declare class Order extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    discount?: number;
    orderNumber?: string;
    hasFulfilmentStatus?: string;
    hasOrderStatus?: string;
    hasPaymentMethod?: string;
    hasPaymentStatus?: string;
    soldBy?: string;
    uses?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    belongsTo?: SaleSession | string;
    hasPart?: OrderLine | string;
    orderedBy?: Agent | string;
    selects?: (ShippingOption | string)[];
    constructor(semanticId: string, params?: OrderParams);
}
