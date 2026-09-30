import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";
import type { Shipment } from "./Shipment.js";
/**
 * Constructor parameters for {@link Step}.
 *
 * Own DFC properties: arrivalDate, duration, isStepOf, delivery, pickUp.
 *
 * Inherited parameters come from {@link WhereSubjectParams}.
 */
export interface StepParams extends WhereSubjectParams {
    /**
     * Serializes as `dfc-b:arrivalDate`.
     */
    arrivalDate?: string;
    /**
     * Serializes as `dfc-b:duration`.
     */
    duration?: string;
    /**
     * Serializes as `dfc-b:isStepOf`.
     */
    isStepOf?: string;
    /**
     * Serializes as `dfc-b:delivery`.
     */
    delivery?: Shipment | string;
    /**
     * Serializes as `dfc-b:pickUp`.
     */
    pickUp?: Shipment | string;
}
/**
 * A DFC `dfc-b:Step`, serialized with `@type: dfc-b:Step`.
 * Class hierarchy: `Where_Subject` -> `Step`.
 * Own DFC properties: arrivalDate, duration, isStepOf, delivery, pickUp.
 */
export declare class Step extends WhereSubject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:arrivalDate`.
     */
    arrivalDate?: string;
    /**
     * Serializes as `dfc-b:duration`.
     */
    duration?: string;
    /**
     * Serializes as `dfc-b:isStepOf`.
     */
    isStepOf?: string;
    /**
     * Serializes as `dfc-b:delivery`.
     */
    delivery?: Shipment | string;
    /**
     * Serializes as `dfc-b:pickUp`.
     */
    pickUp?: Shipment | string;
    constructor(semanticId: string, params?: StepParams);
}
