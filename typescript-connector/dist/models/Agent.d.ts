import { WhoSubject, type WhoSubjectParams } from "./WhoSubject.js";
export interface AgentParams extends WhoSubjectParams {
    email?: string;
    logo?: string;
    websitePage?: string;
    affiliatedTo?: string;
    hasAddress?: string;
    hasPhoneNumber?: string;
    hasSocialMedia?: string;
    isMemberOf?: string;
    orders?: string[];
    owns?: string[];
    requests?: string[];
    sells?: string[];
}
export declare class Agent extends WhoSubject {
    static get SEMANTIC_TYPE(): string;
    email?: string;
    logo?: string;
    websitePage?: string;
    affiliatedTo?: string;
    hasAddress?: string;
    hasPhoneNumber?: string;
    hasSocialMedia?: string;
    isMemberOf?: string;
    orders?: string[];
    owns?: string[];
    requests?: string[];
    sells?: string[];
    constructor(semanticId: string, params?: AgentParams);
}
