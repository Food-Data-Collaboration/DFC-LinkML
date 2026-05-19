// Class from DFC Business Ontology: #TheoriticalStock
import { SemanticObject } from "../core/SemanticObject.js";
import { Stock } from "./Stock.js";
export class TheoriticalStock extends Stock {
    static get SEMANTIC_TYPE() {
        return "dfc-b:TheoriticalStock";
    }
    constitutes;
    localizedBy;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.constitutes = params?.constitutes;
        this.localizedBy = params?.localizedBy;
        this.semanticType = TheoriticalStock.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:TheoriticalStock:constitutes", () => this.constitutes);
        this.registerSemanticProperty("dfc-b:TheoriticalStock:localized_by", () => this.localizedBy);
    }
    static {
        SemanticObject.typeRegistry.set(TheoriticalStock.SEMANTIC_TYPE, TheoriticalStock);
    }
}
