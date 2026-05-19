import { Agent, type AgentParams } from "./Agent.js";
export interface PersonParams extends AgentParams {
    familyName?: string;
    firstName?: string;
    mainContactOf?: string;
}
export declare class Person extends Agent {
    static get SEMANTIC_TYPE(): string;
    familyName?: string;
    firstName?: string;
    mainContactOf?: string;
    constructor(semanticId: string, params?: PersonParams);
}
