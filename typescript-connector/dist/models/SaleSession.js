// Class from DFC Business Ontology: #SaleSession
import { SemanticObject } from "../core/SemanticObject.js";
export class SaleSession extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:SaleSession";
    }
    endDate;
    quantity;
    startDate;
    holds;
    lists;
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    hasOption;
    hasQuantity;
    hostedAt;
    objectOf;
    constructor(semanticId, params) {
        super(semanticId);
        this.endDate = params?.endDate;
        this.quantity = params?.quantity;
        this.startDate = params?.startDate;
        this.holds = params?.holds;
        this.lists = params?.lists;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.hasOption = params?.hasOption;
        this.hasQuantity = params?.hasQuantity;
        this.hostedAt = params?.hostedAt;
        this.objectOf = params?.objectOf;
        this.semanticType = SaleSession.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:endDate", () => this.endDate);
        this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:startDate", () => this.startDate);
        this.registerSemanticProperty("dfc-b:holds", () => this.holds);
        this.registerSemanticProperty("dfc-b:lists", () => this.lists);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:hasOption", () => this.hasOption);
        this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
        this.registerSemanticProperty("dfc-b:hostedAt", () => this.hostedAt);
        this.registerSemanticProperty("dfc-b:objectOf", () => this.objectOf);
    }
    static {
        SemanticObject.typeRegistry.set(SaleSession.SEMANTIC_TYPE, SaleSession);
    }
}
