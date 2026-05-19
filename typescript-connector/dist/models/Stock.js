// Class from DFC Business Ontology: #Stock
import { SemanticObject } from "../core/SemanticObject.js";
export class Stock extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Stock";
    }
    availabilityDate;
    quantity;
    transportedBy;
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    hasQuantity;
    constructor(semanticId, params) {
        super(semanticId);
        this.availabilityDate = params?.availabilityDate;
        this.quantity = params?.quantity;
        this.transportedBy = params?.transportedBy;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.hasQuantity = params?.hasQuantity;
        this.semanticType = Stock.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Stock:availability_date", () => this.availabilityDate);
        this.registerSemanticProperty("dfc-b:Stock:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:Stock:transported_by", () => this.transportedBy);
        this.registerSemanticProperty("dfc-b:Stock:date", () => this.date);
        this.registerSemanticProperty("dfc-b:Stock:description", () => this.description);
        this.registerSemanticProperty("dfc-b:Stock:name", () => this.name);
        this.registerSemanticProperty("dfc-b:Stock:characteristic_of", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:Stock:has_dimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:Stock:has_quantity", () => this.hasQuantity);
    }
    static {
        SemanticObject.typeRegistry.set(Stock.SEMANTIC_TYPE, Stock);
    }
}
