// Class from DFC Business Ontology: #ConsumptionFlow
import { SemanticObject } from "../core/SemanticObject.js";
export class ConsumptionFlow extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:ConsumptionFlow";
    }
    quantity;
    consumes;
    inputOf;
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    hasQuantity;
    constructor(semanticId, params) {
        super(semanticId);
        this.quantity = params?.quantity;
        this.consumes = params?.consumes;
        this.inputOf = params?.inputOf;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.hasQuantity = params?.hasQuantity;
        this.semanticType = ConsumptionFlow.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:ConsumptionFlow:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:ConsumptionFlow:consumes", () => this.consumes);
        this.registerSemanticProperty("dfc-b:ConsumptionFlow:input_of", () => this.inputOf);
        this.registerSemanticProperty("dfc-b:ConsumptionFlow:date", () => this.date);
        this.registerSemanticProperty("dfc-b:ConsumptionFlow:description", () => this.description);
        this.registerSemanticProperty("dfc-b:ConsumptionFlow:name", () => this.name);
        this.registerSemanticProperty("dfc-b:ConsumptionFlow:characteristic_of", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:ConsumptionFlow:has_dimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:ConsumptionFlow:has_quantity", () => this.hasQuantity);
    }
    static {
        SemanticObject.typeRegistry.set(ConsumptionFlow.SEMANTIC_TYPE, ConsumptionFlow);
    }
}
