import { SemanticObject } from "../core/SemanticObject.js";
import { Organization, type OrganizationParams } from "./Organization.js";

/**
 * Constructor parameters for {@link Enterprise}.
 */
export interface EnterpriseParams extends OrganizationParams {}

/**
 * A DFC `dfc-b:Enterprise`, serialized with `@type: dfc-b:Enterprise`.
 * Class hierarchy: `Who_Subject` -> `Agent` -> `Organization` ->
 *   `Enterprise`.
 */
export class Enterprise extends Organization {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Enterprise";
  }



  constructor(
    semanticId: string,
    params?: EnterpriseParams,
  ) {
    super(semanticId, params);
    this.semanticType = Enterprise.SEMANTIC_TYPE;
  }
  static {
    SemanticObject.typeRegistry.set(Enterprise.SEMANTIC_TYPE, Enterprise);
  }
}
