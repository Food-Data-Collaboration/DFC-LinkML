import { SemanticObject } from "../core/SemanticObject.js";
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
export class Person extends Agent {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Person";
  }

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

  constructor(
    semanticId: string,
    params?: PersonParams,
  ) {
    super(semanticId, params);
    this.familyName = params?.familyName;
    this.firstName = params?.firstName;
    this.mainContactOf = params?.mainContactOf;
    this.semanticType = Person.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:familyName", () => this.familyName);
    this.registerSemanticProperty("dfc-b:firstName", () => this.firstName);
    this.registerSemanticProperty("dfc-b:mainContactOf", () => this.mainContactOf);
  }
  static {
    SemanticObject.typeRegistry.set(Person.SEMANTIC_TYPE, Person);
  }
}
