// Class from DFC Business Ontology: #Person
import { SemanticObject } from "../core/SemanticObject.js";
import { Agent } from "./Agent.js";
export class Person extends Agent {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Person";
    }
    familyName;
    firstName;
    mainContactOf;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.familyName = params?.familyName;
        this.firstName = params?.firstName;
        this.mainContactOf = params?.mainContactOf;
        this.semanticType = Person.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Person:family_name", () => this.familyName);
        this.registerSemanticProperty("dfc-b:Person:first_name", () => this.firstName);
        this.registerSemanticProperty("dfc-b:Person:main_contact_of", () => this.mainContactOf);
    }
    static {
        SemanticObject.typeRegistry.set(Person.SEMANTIC_TYPE, Person);
    }
}
