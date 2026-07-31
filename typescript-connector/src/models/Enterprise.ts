// Class from DFC Business Ontology: #Enterprise
import { SemanticObject } from "../core/SemanticObject.js";
import { Agent, type AgentParams } from "./Agent.js";

export interface EnterpriseParams extends AgentParams {}
export class Enterprise extends Agent {
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
