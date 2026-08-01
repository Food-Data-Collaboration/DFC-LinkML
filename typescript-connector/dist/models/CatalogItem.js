// Class from DFC Business Ontology: #CatalogItem
import { SemanticObject } from "../core/SemanticObject.js";
export class CatalogItem extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:CatalogItem";
    }
    extraAvailabilityTime;
    extraDeliveryCondition;
    sku;
    stockLimitation;
    listedIn;
    managedBy;
    offeredThrough;
    references;
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    constructor(semanticId, params) {
        super(semanticId);
        this.extraAvailabilityTime = params?.extraAvailabilityTime;
        this.extraDeliveryCondition = params?.extraDeliveryCondition;
        this.sku = params?.sku;
        this.stockLimitation = params?.stockLimitation;
        this.listedIn = params?.listedIn;
        this.managedBy = params?.managedBy;
        this.offeredThrough = params?.offeredThrough;
        this.references = params?.references;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.semanticType = CatalogItem.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:extraAvailabilityTime", () => this.extraAvailabilityTime);
        this.registerSemanticProperty("dfc-b:extraDeliveryCondition", () => this.extraDeliveryCondition);
        this.registerSemanticProperty("dfc-b:sku", () => this.sku);
        this.registerSemanticProperty("dfc-b:stockLimitation", () => this.stockLimitation);
        this.registerSemanticProperty("dfc-b:listedIn", () => this.listedIn);
        this.registerSemanticProperty("dfc-b:managedBy", () => this.managedBy);
        this.registerSemanticProperty("dfc-b:offeredThrough", () => this.offeredThrough);
        this.registerSemanticProperty("dfc-b:references", () => this.references);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
    }
    static {
        SemanticObject.typeRegistry.set(CatalogItem.SEMANTIC_TYPE, CatalogItem);
    }
}
