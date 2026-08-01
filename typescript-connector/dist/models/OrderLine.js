// Class from DFC Business Ontology: #OrderLine
import { SemanticObject } from "../core/SemanticObject.js";
export class OrderLine extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:OrderLine";
    }
    discount;
    quantity;
    concerns;
    hasPrice;
    isFulfilledBy;
    partOf;
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    hasQuantity;
    constructor(semanticId, params) {
        super(semanticId);
        this.discount = params?.discount;
        this.quantity = params?.quantity;
        this.concerns = params?.concerns;
        this.hasPrice = params?.hasPrice;
        this.isFulfilledBy = params?.isFulfilledBy;
        this.partOf = params?.partOf;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.hasQuantity = params?.hasQuantity;
        this.semanticType = OrderLine.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:discount", () => this.discount);
        this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:concerns", () => this.concerns);
        this.registerSemanticProperty("dfc-b:hasPrice", () => this.hasPrice);
        this.registerSemanticProperty("dfc-b:isFulfilledBy", () => this.isFulfilledBy);
        this.registerSemanticProperty("dfc-b:partOf", () => this.partOf);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
    }
    static {
        SemanticObject.typeRegistry.set(OrderLine.SEMANTIC_TYPE, OrderLine);
    }
}
