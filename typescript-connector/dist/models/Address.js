// Class from DFC Business Ontology: #Address
import { SemanticObject } from "../core/SemanticObject.js";
import { WhereSubject } from "./WhereSubject.js";
export class Address extends WhereSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Address";
    }
    city;
    country;
    latitude;
    longitude;
    postcode;
    region;
    street;
    addressOf;
    hasCountry;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.city = params?.city;
        this.country = params?.country;
        this.latitude = params?.latitude;
        this.longitude = params?.longitude;
        this.postcode = params?.postcode;
        this.region = params?.region;
        this.street = params?.street;
        this.addressOf = params?.addressOf;
        this.hasCountry = params?.hasCountry;
        this.semanticType = Address.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Address:city", () => this.city);
        this.registerSemanticProperty("dfc-b:Address:country", () => this.country);
        this.registerSemanticProperty("dfc-b:Address:latitude", () => this.latitude);
        this.registerSemanticProperty("dfc-b:Address:longitude", () => this.longitude);
        this.registerSemanticProperty("dfc-b:Address:postcode", () => this.postcode);
        this.registerSemanticProperty("dfc-b:Address:region", () => this.region);
        this.registerSemanticProperty("dfc-b:Address:street", () => this.street);
        this.registerSemanticProperty("dfc-b:Address:address_of", () => this.addressOf);
        this.registerSemanticProperty("dfc-b:Address:has_country", () => this.hasCountry);
    }
    static {
        SemanticObject.typeRegistry.set(Address.SEMANTIC_TYPE, Address);
    }
}
