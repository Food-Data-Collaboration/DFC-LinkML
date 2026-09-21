import { Organization, type OrganizationParams } from "./Organization.js";
export interface EnterpriseParams extends OrganizationParams {
}
export declare class Enterprise extends Organization {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: EnterpriseParams);
}
