import { SemanticObject } from "../core/SemanticObject.js";
import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";

/**
 * Constructor parameters for {@link Address}.
 *
 * Own DFC properties: city, country, latitude, longitude, postcode, region,
 *   street, addressOf, hasCountry.
 *
 * Inherited parameters come from {@link WhereSubjectParams}.
 */
export interface AddressParams extends WhereSubjectParams {
  /**
   * The postal city (may be a town) that the address is located within
   *
   * Serializes as `dfc-b:city`.
   */
  city?: string;
  /**
   * The ISO country that the address is located within
   *
   * Serializes as `dfc-b:country`.
   */
  country?: string;
  /**
   * numeric latitude of the Address location
   *
   * Serializes as `dfc-b:latitude`.
   */
  latitude?: number;
  /**
   * numeric longitude of the Address location
   *
   * Serializes as `dfc-b:longitude`.
   */
  longitude?: number;
  /**
   * The code defined by the relevant authority that facilitates mail
   *   delivery to that address
   *
   * Serializes as `dfc-b:postcode`.
   */
  postcode?: string;
  /**
   * The Region (adminstrative district below Country) the Address is
   *   located within
   *
   * Serializes as `dfc-b:region`.
   */
  region?: string;
  /**
   * Street part of the address. May also be referred to as "first line of
   *   address" in some locales. Generally includes a street name and building
   *   name or number (in any order)
   *
   * Serializes as `dfc-b:street`.
   */
  street?: string;
  /**
   * The Agent (Person or Enterprise) or PhysicalPlace that the Address
   *   relates to
   *
   * Serializes as `dfc-b:addressOf`.
   */
  addressOf?: string;
  /**
   * Serializes as `dfc-b:hasCountry`.
   */
  hasCountry?: string;
}

/**
 * A DFC `dfc-b:Address`, serialized with `@type: dfc-b:Address`.
 * Class hierarchy: `Where_Subject` -> `Address`.
 * Own DFC properties: city, country, latitude, longitude, postcode, region,
 *   street, addressOf, hasCountry.
 */
export class Address extends WhereSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Address";
  }

  /**
   * The postal city (may be a town) that the address is located within
   *
   * Serializes as `dfc-b:city`.
   */
  city?: string;
  /**
   * The ISO country that the address is located within
   *
   * Serializes as `dfc-b:country`.
   */
  country?: string;
  /**
   * numeric latitude of the Address location
   *
   * Serializes as `dfc-b:latitude`.
   */
  latitude?: number;
  /**
   * numeric longitude of the Address location
   *
   * Serializes as `dfc-b:longitude`.
   */
  longitude?: number;
  /**
   * The code defined by the relevant authority that facilitates mail
   *   delivery to that address
   *
   * Serializes as `dfc-b:postcode`.
   */
  postcode?: string;
  /**
   * The Region (adminstrative district below Country) the Address is
   *   located within
   *
   * Serializes as `dfc-b:region`.
   */
  region?: string;
  /**
   * Street part of the address. May also be referred to as "first line of
   *   address" in some locales. Generally includes a street name and building
   *   name or number (in any order)
   *
   * Serializes as `dfc-b:street`.
   */
  street?: string;
  /**
   * The Agent (Person or Enterprise) or PhysicalPlace that the Address
   *   relates to
   *
   * Serializes as `dfc-b:addressOf`.
   */
  addressOf?: string;
  /**
   * Serializes as `dfc-b:hasCountry`.
   */
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
