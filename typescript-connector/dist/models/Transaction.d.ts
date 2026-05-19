import { HowSubject, type HowSubjectParams } from "./HowSubject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
export interface TransactionParams extends HowSubjectParams {
    invoiceNumber?: string;
    quantity?: number;
    concerns?: string[];
    from?: string;
    hasPrice?: string;
    to?: string;
    hasQuantity?: QuantitativeValue;
}
export declare class Transaction extends HowSubject {
    static get SEMANTIC_TYPE(): string;
    invoiceNumber?: string;
    quantity?: number;
    concerns?: string[];
    from?: string;
    hasPrice?: string;
    to?: string;
    hasQuantity?: QuantitativeValue;
    constructor(semanticId: string, params?: TransactionParams);
}
