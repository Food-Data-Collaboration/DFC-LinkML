import { Agent, type AgentParams } from "./Agent.js";
export interface OrganizationParams extends AgentParams {
    vatNumber?: string;
    vatStatus?: boolean;
    organizationId?: string;
    affiliates?: string[];
    defines?: string[];
    hasMainContact?: string;
    hasTemplateSaleSession?: string;
    isCertifiedBy?: string;
    maintains?: string[];
    manages?: string[];
    proposes?: string[];
    supplies?: string[];
    transforms?: string[];
}
export declare class Organization extends Agent {
    static get SEMANTIC_TYPE(): string;
    vatNumber?: string;
    vatStatus?: boolean;
    organizationId?: string;
    affiliates?: string[];
    defines?: string[];
    hasMainContact?: string;
    hasTemplateSaleSession?: string;
    isCertifiedBy?: string;
    maintains?: string[];
    manages?: string[];
    proposes?: string[];
    supplies?: string[];
    transforms?: string[];
    constructor(semanticId: string, params?: OrganizationParams);
}
