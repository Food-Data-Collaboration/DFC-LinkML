import { Organization, type OrganizationParams } from "./Organization.js";
/**
 * Constructor parameters for {@link Enterprise}.
 */
export interface EnterpriseParams extends OrganizationParams {
}
/**
 * A DFC `dfc-b:Enterprise`, serialized with `@type: dfc-b:Enterprise`.
 * Class hierarchy: `Who_Subject` -> `Agent` -> `Organization` ->
 *   `Enterprise`.
 */
export declare class Enterprise extends Organization {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: EnterpriseParams);
}
