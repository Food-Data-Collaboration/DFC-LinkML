import { SemanticObject } from "../core/SemanticObject.js";
import { Place } from "./Place.js";
/**
 * A DFC `dfc-b:PhysicalPlace`, serialized with `@type:
 *   dfc-b:PhysicalPlace`.
 * Class hierarchy: `Where_Subject` -> `Place` -> `PhysicalPlace`.
 * Own DFC properties: hasPhoneNumber, hasAddress, hasGeoJsonFeature,
 *   hasMainContact, isOpenDuring, localizes, stores.
 */
export class PhysicalPlace extends Place {
    static get SEMANTIC_TYPE() {
        return "dfc-b:PhysicalPlace";
    }
    /**
     * Phone Number relating to the Agent
     *
     * Serializes as `dfc-b:hasPhoneNumber`.
     */
    hasPhoneNumber;
    /**
     * Address of Agent
     *
     * Serializes as `dfc-b:hasAddress`.
     */
    hasAddress;
    /**
     * Serializes as `dfc-b:hasGeoJsonFeature`.
     */
    hasGeoJsonFeature;
    /**
     * The Person, if any, who is a principal contact for this physical
     *   location
     *
     * Serializes as `dfc-b:hasMainContact`.
     */
    hasMainContact;
    /**
     * Schedule during which the Physical Place is accessible, may indicate it
     *   is open to the public or just for business.
     *
     * Serializes as `dfc-b:isOpenDuring`.
     */
    isOpenDuring;
    /**
     * Any theoretical stock that is associated with this location
     *
     * Serializes as `dfc-b:localizes`.
     */
    localizes;
    /**
     * Any real stock that is associated with this location
     *
     * Serializes as `dfc-b:stores`.
     */
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
