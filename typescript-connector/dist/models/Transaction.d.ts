import { HowSubject, type HowSubjectParams } from "./HowSubject.js";
import type { Agent } from "./Agent.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
export interface TransactionParams extends HowSubjectParams {
    invoiceNumber?: string;
    quantity?: number;
    concerns?: string[];
    hasPrice?: string;
    from?: Agent | string;
    hasQuantity?: QuantitativeValue | string;
    to?: Agent | string;
}
export declare class Transaction extends HowSubject {
    static get SEMANTIC_TYPE(): string;
    invoiceNumber?: string;
    quantity?: number;
    concerns?: string[];
    hasPrice?: string;
    from?: Agent | string;
    hasQuantity?: QuantitativeValue | string;
    to?: Agent | string;
    constructor(semanticId: string, params?: TransactionParams);
}
