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
        this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:consumes", () => this.consumes);
        this.registerSemanticProperty("dfc-b:inputOf", () => this.inputOf);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
    }
    static {
        SemanticObject.typeRegistry.set(ConsumptionFlow.SEMANTIC_TYPE, ConsumptionFlow);
    }
}
