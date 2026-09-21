// Class from DFC Business Ontology: #PhysicalPlace
import { SemanticObject } from "../core/SemanticObject.js";
import { Place } from "./Place.js";
export class PhysicalPlace extends Place {
    static get SEMANTIC_TYPE() {
        return "dfc-b:PhysicalPlace";
    }
    hasPhoneNumber;
    hasAddress;
    hasGeoJsonFeature;
    hasMainContact;
    isOpenDuring;
    localizes;
    stores;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.hasPhoneNumber = params?.hasPhoneNumber;
        this.hasAddress = params?.hasAddress;
        this.hasGeoJsonFeature = params?.hasGeoJsonFeature;
        this.hasMainContact = params?.hasMainContact;
        this.isOpenDuring = params?.isOpenDuring;
        this.localizes = params?.localizes;
        this.stores = params?.stores;
        this.semanticType = PhysicalPlace.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:hasPhoneNumber", () => this.hasPhoneNumber);
        this.registerSemanticProperty("dfc-b:hasAddress", () => this.hasAddress);
        this.registerSemanticProperty("dfc-b:hasGeoJsonFeature", () => this.hasGeoJsonFeature);
        this.registerSemanticProperty("dfc-b:hasMainContact", () => this.hasMainContact);
        this.registerSemanticProperty("dfc-b:isOpenDuring", () => this.isOpenDuring);
        this.registerSemanticProperty("dfc-b:localizes", () => this.localizes);
        this.registerSemanticProperty("dfc-b:stores", () => this.stores);
    }
    static {
        SemanticObject.typeRegistry.set(PhysicalPlace.SEMANTIC_TYPE, PhysicalPlace);
    }
}
