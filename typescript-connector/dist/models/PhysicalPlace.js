// Class from DFC Business Ontology: #PhysicalPlace
import { SemanticObject } from "../core/SemanticObject.js";
import { Place } from "./Place.js";
export class PhysicalPlace extends Place {
    static get SEMANTIC_TYPE() {
        return "dfc-b:PhysicalPlace";
    }
    hasAddress;
    hasMainContact;
    hasPhoneNumber;
    localizes;
    stores;
    hasGeoJsonFeature;
    isOpenDuring;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.hasAddress = params?.hasAddress;
        this.hasMainContact = params?.hasMainContact;
        this.hasPhoneNumber = params?.hasPhoneNumber;
        this.localizes = params?.localizes;
        this.stores = params?.stores;
        this.hasGeoJsonFeature = params?.hasGeoJsonFeature;
        this.isOpenDuring = params?.isOpenDuring;
        this.semanticType = PhysicalPlace.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:PhysicalPlace:has_address", () => this.hasAddress);
        this.registerSemanticProperty("dfc-b:PhysicalPlace:has_main_contact", () => this.hasMainContact);
        this.registerSemanticProperty("dfc-b:PhysicalPlace:has_phone_number", () => this.hasPhoneNumber);
        this.registerSemanticProperty("dfc-b:PhysicalPlace:localizes", () => this.localizes);
        this.registerSemanticProperty("dfc-b:PhysicalPlace:stores", () => this.stores);
        this.registerSemanticProperty("dfc-b:PhysicalPlace:has_geo_json_feature", () => this.hasGeoJsonFeature);
        this.registerSemanticProperty("dfc-b:PhysicalPlace:is_open_during", () => this.isOpenDuring);
    }
    static {
        SemanticObject.typeRegistry.set(PhysicalPlace.SEMANTIC_TYPE, PhysicalPlace);
    }
}
