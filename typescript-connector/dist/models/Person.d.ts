import { Agent, type AgentParams } from "./Agent.js";
/**
 * Constructor parameters for {@link Person}.
 *
 * Own DFC properties: familyName, firstName, mainContactOf.
 *
 * Inherited parameters come from {@link AgentParams}.
 */
export interface PersonParams extends AgentParams {
    /**
     * Family name or surname of Person
     *
     * Serializes as `dfc-b:familyName`.
     */
    familyName?: string;
    /**
     * First name of Person
     *
     * Serializes as `dfc-b:firstName`.
     */
    firstName?: string;
    /**
     * An Enterprise that the Person is the Main Contact for
     *
     * Serializes as `dfc-b:mainContactOf`.
     */
    mainContactOf?: string;
}
/**
 * A DFC `dfc-b:Person`, serialized with `@type: dfc-b:Person`.
 * Class hierarchy: `Who_Subject` -> `Agent` -> `Person`.
 * Own DFC properties: familyName, firstName, mainContactOf.
 */
export declare class Person extends Agent {
    static get SEMANTIC_TYPE(): string;
    /**
     * Family name or surname of Person
     *
     * Serializes as `dfc-b:familyName`.
     */
    familyName?: string;
    /**
     * First name of Person
     *
     * Serializes as `dfc-b:firstName`.
     */
    firstName?: string;
    /**
     * An Enterprise that the Person is the Main Contact for
     *
     * Serializes as `dfc-b:mainContactOf`.
     */
    mainContactOf?: string;
    constructor(semanticId: string, params?: PersonParams);
}
