import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
export interface CertficationParams extends WhatSubjectParams {
    certiferReference?: string;
    certificationScore?: string;
    operatorId?: string;
    certifies?: string[];
}
export declare class Certfication extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    certiferReference?: string;
    certificationScore?: string;
    operatorId?: string;
    certifies?: string[];
    constructor(semanticId: string, params?: CertficationParams);
}
