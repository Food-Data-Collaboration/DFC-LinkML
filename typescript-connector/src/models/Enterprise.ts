// Class from DFC Business Ontology: #Enterprise
import { SemanticObject } from "../core/SemanticObject.js";
import { Organization, type OrganizationParams } from "./Organization.js";

export interface EnterpriseParams extends OrganizationParams {}
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
