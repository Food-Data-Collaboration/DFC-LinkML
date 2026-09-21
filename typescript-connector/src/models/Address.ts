// Class from DFC Business Ontology: #Address
import { SemanticObject } from "../core/SemanticObject.js";
import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";

export interface AddressParams extends WhereSubjectParams {
  city?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  postcode?: string;
  region?: string;
  street?: string;
  addressOf?: string;
  hasCountry?: string;
}
export class Address extends WhereSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Address";
  }

  city?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  postcode?: string;
  region?: string;
  street?: string;
  addressOf?: string;
  hasCountry?: string;

  constructor(
    semanticId: string,
    params?: AddressParams,
  ) {
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
    this.registerSemanticProperty("dfc-b:city", () => this.city);
    this.registerSemanticProperty("dfc-b:country", () => this.country);
    this.registerSemanticProperty("dfc-b:latitude", () => this.latitude);
    this.registerSemanticProperty("dfc-b:longitude", () => this.longitude);
    this.registerSemanticProperty("dfc-b:postcode", () => this.postcode);
    this.registerSemanticProperty("dfc-b:region", () => this.region);
    this.registerSemanticProperty("dfc-b:street", () => this.street);
    this.registerSemanticProperty("dfc-b:addressOf", () => this.addressOf);
    this.registerSemanticProperty("dfc-b:hasCountry", () => this.hasCountry);
  }
  static {
    SemanticObject.typeRegistry.set(Address.SEMANTIC_TYPE, Address);
  }
}
