import { HowSubject, type HowSubjectParams } from "./HowSubject.js";
export interface PaymentMethodParams extends HowSubjectParams {
    paymentMethodProvider?: string;
    paymentMethodType?: string;
    hasPrice?: string;
    paidWith?: string;
}
export declare class PaymentMethod extends HowSubject {
    static get SEMANTIC_TYPE(): string;
    paymentMethodProvider?: string;
    paymentMethodType?: string;
    hasPrice?: string;
    paidWith?: string;
    constructor(semanticId: string, params?: PaymentMethodParams);
}
