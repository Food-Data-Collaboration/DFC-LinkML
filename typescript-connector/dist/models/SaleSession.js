// Class from DFC Business Ontology: #SaleSession
import { SemanticObject } from "../core/SemanticObject.js";
export class SaleSession extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:SaleSession";
    }
    endDate;
    quantity;
    startDate;
    hasOption;
    holds;
    hostedAt;
    lists;
    objectOf;
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    hasQuantity;
    constructor(semanticId, params) {
        super(semanticId);
        this.endDate = params?.endDate;
        this.quantity = params?.quantity;
        this.startDate = params?.startDate;
        this.hasOption = params?.hasOption;
        this.holds = params?.holds;
        this.hostedAt = params?.hostedAt;
        this.lists = params?.lists;
        this.objectOf = params?.objectOf;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.hasQuantity = params?.hasQuantity;
        this.semanticType = SaleSession.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:SaleSession:end_date", () => this.endDate);
        this.registerSemanticProperty("dfc-b:SaleSession:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:SaleSession:start_date", () => this.startDate);
        this.registerSemanticProperty("dfc-b:SaleSession:has_option", () => this.hasOption);
        this.registerSemanticProperty("dfc-b:SaleSession:holds", () => this.holds);
        this.registerSemanticProperty("dfc-b:SaleSession:hosted_at", () => this.hostedAt);
        this.registerSemanticProperty("dfc-b:SaleSession:lists", () => this.lists);
        this.registerSemanticProperty("dfc-b:SaleSession:object_of", () => this.objectOf);
        this.registerSemanticProperty("dfc-b:SaleSession:date", () => this.date);
        this.registerSemanticProperty("dfc-b:SaleSession:description", () => this.description);
        this.registerSemanticProperty("dfc-b:SaleSession:name", () => this.name);
        this.registerSemanticProperty("dfc-b:SaleSession:characteristic_of", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:SaleSession:has_dimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:SaleSession:has_quantity", () => this.hasQuantity);
    }
    static {
        SemanticObject.typeRegistry.set(SaleSession.SEMANTIC_TYPE, SaleSession);
    }
}
