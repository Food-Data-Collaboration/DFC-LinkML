// Class from DFC Business Ontology: #Place
import { SemanticObject } from "../core/SemanticObject.js";
import { WhereSubject } from "./WhereSubject.js";
export class Place extends WhereSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Place";
    }
    hosts;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.hosts = params?.hosts;
        this.semanticType = Place.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Place:hosts", () => this.hosts);
    }
    static {
        SemanticObject.typeRegistry.set(Place.SEMANTIC_TYPE, Place);
    }
}
