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
        this.registerSemanticProperty("dfc-b:CatalogItem:extra_availability_time", () => this.extraAvailabilityTime);
        this.registerSemanticProperty("dfc-b:CatalogItem:extra_delivery_condition", () => this.extraDeliveryCondition);
        this.registerSemanticProperty("dfc-b:CatalogItem:sku", () => this.sku);
        this.registerSemanticProperty("dfc-b:CatalogItem:stock_limitation", () => this.stockLimitation);
        this.registerSemanticProperty("dfc-b:CatalogItem:listed_in", () => this.listedIn);
        this.registerSemanticProperty("dfc-b:CatalogItem:managed_by", () => this.managedBy);
        this.registerSemanticProperty("dfc-b:CatalogItem:offered_through", () => this.offeredThrough);
        this.registerSemanticProperty("dfc-b:CatalogItem:references", () => this.references);
        this.registerSemanticProperty("dfc-b:CatalogItem:date", () => this.date);
        this.registerSemanticProperty("dfc-b:CatalogItem:description", () => this.description);
        this.registerSemanticProperty("dfc-b:CatalogItem:name", () => this.name);
        this.registerSemanticProperty("dfc-b:CatalogItem:characteristic_of", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:CatalogItem:has_dimension", () => this.hasDimension);
    }
    static {
        SemanticObject.typeRegistry.set(CatalogItem.SEMANTIC_TYPE, CatalogItem);
    }
}
