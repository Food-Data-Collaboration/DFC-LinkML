import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";
import type { Shipment } from "./Shipment.js";
export interface StepParams extends WhereSubjectParams {
    arrivalDate?: string;
    duration?: string;
    isStepOf?: string;
    delivery?: Shipment;
    pickUp?: Shipment;
}
export declare class Step extends WhereSubject {
    static get SEMANTIC_TYPE(): string;
    arrivalDate?: string;
    duration?: string;
    isStepOf?: string;
    delivery?: Shipment;
    pickUp?: Shipment;
    constructor(semanticId: string, params?: StepParams);
}
