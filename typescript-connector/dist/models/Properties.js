// Class from DFC Business Ontology: #Properties
import { SemanticObject } from "../core/SemanticObject.js";
export class Properties extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Properties";
    }
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    constructor(semanticId, params) {
        super(semanticId);
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.semanticType = Properties.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Properties:date", () => this.date);
        this.registerSemanticProperty("dfc-b:Properties:description", () => this.description);
        this.registerSemanticProperty("dfc-b:Properties:name", () => this.name);
        this.registerSemanticProperty("dfc-b:Properties:characteristic_of", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:Properties:has_dimension", () => this.hasDimension);
    }
    static {
        SemanticObject.typeRegistry.set(Properties.SEMANTIC_TYPE, Properties);
    }
}
