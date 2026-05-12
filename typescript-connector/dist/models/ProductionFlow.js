// Class from DFC Business Ontology: #ProductionFlow
import { SemanticObject } from "../core/SemanticObject.js";
export class ProductionFlow extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:ProductionFlow";
    }
    quantity;
    outputOf;
    produces;
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    hasQuantity;
    constructor(semanticId, params) {
        super(semanticId);
        this.quantity = params?.quantity;
        this.outputOf = params?.outputOf;
        this.produces = params?.produces;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.hasQuantity = params?.hasQuantity;
        this.semanticType = ProductionFlow.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:ProductionFlow:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:ProductionFlow:output_of", () => this.outputOf);
        this.registerSemanticProperty("dfc-b:ProductionFlow:produces", () => this.produces);
        this.registerSemanticProperty("dfc-b:ProductionFlow:date", () => this.date);
        this.registerSemanticProperty("dfc-b:ProductionFlow:description", () => this.description);
        this.registerSemanticProperty("dfc-b:ProductionFlow:name", () => this.name);
        this.registerSemanticProperty("dfc-b:ProductionFlow:characteristic_of", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:ProductionFlow:has_dimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:ProductionFlow:has_quantity", () => this.hasQuantity);
    }
    static {
        SemanticObject.typeRegistry.set(ProductionFlow.SEMANTIC_TYPE, ProductionFlow);
    }
}
