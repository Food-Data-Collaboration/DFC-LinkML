import { Agent, type AgentParams } from "./Agent.js";
export interface EnterpriseParams extends AgentParams {
}
export declare class Enterprise extends Agent {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: EnterpriseParams);
}
