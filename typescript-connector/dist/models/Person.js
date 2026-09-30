import { SemanticObject } from "../core/SemanticObject.js";
import { Agent } from "./Agent.js";
/**
 * A DFC `dfc-b:Person`, serialized with `@type: dfc-b:Person`.
 * Class hierarchy: `Who_Subject` -> `Agent` -> `Person`.
 * Own DFC properties: familyName, firstName, mainContactOf.
 */
export class Person extends Agent {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Person";
    }
    /**
     * Family name or surname of Person
     *
     * Serializes as `dfc-b:familyName`.
     */
    familyName;
    /**
     * First name of Person
     *
     * Serializes as `dfc-b:firstName`.
     */
    firstName;
    /**
     * An Enterprise that the Person is the Main Contact for
     *
     * Serializes as `dfc-b:mainContactOf`.
     */
    mainContactOf;
    constructor(semanticId, params) {
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
