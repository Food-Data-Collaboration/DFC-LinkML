import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
/**
 * Constructor parameters for {@link Certfication}.
 *
 * Own DFC properties: certiferReference, certificationScore, operatorId,
 *   certifies.
 *
 * Inherited parameters come from {@link WhatSubjectParams}.
 */
export interface CertficationParams extends WhatSubjectParams {
    /**
     * Serializes as `dfc-b:certiferReference`.
     */
    certiferReference?: string;
    /**
     * Serializes as `dfc-b:certificationScore`.
     */
    certificationScore?: string;
    /**
     * Serializes as `dfc-b:operatorId`.
     */
    operatorId?: string;
    /**
     * Serializes as `dfc-b:certifies`.
     */
    certifies?: string[];
}
/**
 * A DFC `dfc-b:Certfication`, serialized with `@type: dfc-b:Certfication`.
 * Class hierarchy: `What_Subject` -> `Certfication`.
 * Own DFC properties: certiferReference, certificationScore, operatorId,
 *   certifies.
 */
export declare class Certfication extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:certiferReference`.
     */
    certiferReference?: string;
    /**
     * Serializes as `dfc-b:certificationScore`.
     */
    certificationScore?: string;
    /**
     * Serializes as `dfc-b:operatorId`.
     */
    operatorId?: string;
    /**
     * Serializes as `dfc-b:certifies`.
     */
    certifies?: string[];
    constructor(semanticId: string, params?: CertficationParams);
}
