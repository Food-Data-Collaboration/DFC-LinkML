import { SemanticObject } from "../core/SemanticObject.js";
import type { CatalogItem } from "./CatalogItem.js";
import type { CustomerCategory } from "./CustomerCategory.js";

/**
 * Constructor parameters for {@link Offer}.
 *
 * Own DFC properties: discount, stockLimitation, concernedBy, hasPrice,
 *   listedIn, date, description, name, characteristicOf, hasDimension,
 *   offers, offersTo.
 */
export interface OfferParams {
  /**
   * Any discount applied to the Price
   *
   * Serializes as `dfc-b:discount`.
   */
  discount?: number;
  /**
   * Any limit on the stock of this particular listing. This ay differ from
   *   stock limits on the Product (for example if the Product is listed in
   *   multiple catalogues)
   *
   * Serializes as `dfc-b:stockLimitation`.
   */
  stockLimitation?: number;
  /**
   * Any/All Order Lines that relate to this Product
   *
   * Serializes as `dfc-b:concernedBy`.
   */
  concernedBy?: string;
  /**
   * The offered Price for the Product listed in the CatalogItem for this
   *   cateogry of Customer
   *
   * Serializes as `dfc-b:hasPrice`.
   */
  hasPrice?: string;
  /**
   * All Sales Sessions that this Offer is listed in
   *
   * Serializes as `dfc-b:listedIn`.
   */
  listedIn?: string;
  /**
   * Serializes as `dfc-b:date`.
   */
  date?: string;
  /**
   * Serializes as `dfc-b:description`.
   */
  description?: string;
  /**
   * Name of the Enterprise
   *
   * Serializes as `dfc-b:name`.
   */
  name?: string;
  /**
   * Serializes as `dfc-b:characteristicOf`.
   */
  characteristicOf?: string;
  /**
   * Serializes as `dfc-b:hasDimension`.
   */
  hasDimension?: string;
  /**
   * The (1 & only 1) CatalogItem that this Offer relates to
   *
   * Serializes as `dfc-b:offers`.
   */
  offers?: (CatalogItem | string)[];
  /**
   * The (1 & only 1) CustomerCategory that is eligible for this Offer
   *
   * Serializes as `dfc-b:offersTo`.
   */
  offersTo?: (CustomerCategory | string)[];
}

/**
 * A DFC `dfc-b:Offer`, serialized with `@type: dfc-b:Offer`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: discount, stockLimitation, concernedBy, hasPrice,
 *   listedIn, date, description, name, characteristicOf, hasDimension,
 *   offers, offersTo.
 */
export class Offer extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Offer";
  }

  /**
   * Any discount applied to the Price
   *
   * Serializes as `dfc-b:discount`.
   */
  discount?: number;
  /**
   * Any limit on the stock of this particular listing. This ay differ from
   *   stock limits on the Product (for example if the Product is listed in
   *   multiple catalogues)
   *
   * Serializes as `dfc-b:stockLimitation`.
   */
  stockLimitation?: number;
  /**
   * Any/All Order Lines that relate to this Product
   *
   * Serializes as `dfc-b:concernedBy`.
   */
  concernedBy?: string;
  /**
   * The offered Price for the Product listed in the CatalogItem for this
   *   cateogry of Customer
   *
   * Serializes as `dfc-b:hasPrice`.
   */
  hasPrice?: string;
  /**
   * All Sales Sessions that this Offer is listed in
   *
   * Serializes as `dfc-b:listedIn`.
   */
  listedIn?: string;
  /**
   * Serializes as `dfc-b:date`.
   */
  date?: string;
  /**
   * Serializes as `dfc-b:description`.
   */
  description?: string;
  /**
   * Name of the Enterprise
   *
   * Serializes as `dfc-b:name`.
   */
  name?: string;
  /**
   * Serializes as `dfc-b:characteristicOf`.
   */
  characteristicOf?: string;
  /**
   * Serializes as `dfc-b:hasDimension`.
   */
  hasDimension?: string;
  /**
   * The (1 & only 1) CatalogItem that this Offer relates to
   *
   * Serializes as `dfc-b:offers`.
   */
  offers?: (CatalogItem | string)[];
  /**
   * The (1 & only 1) CustomerCategory that is eligible for this Offer
   *
   * Serializes as `dfc-b:offersTo`.
   */
  offersTo?: (CustomerCategory | string)[];

  constructor(
    semanticId: string,
    params?: OfferParams,
  ) {
    super(semanticId);
    this.discount = params?.discount;
    this.stockLimitation = params?.stockLimitation;
    this.concernedBy = params?.concernedBy;
    this.hasPrice = params?.hasPrice;
    this.listedIn = params?.listedIn;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.offers = params?.offers;
    this.offersTo = params?.offersTo;
    this.semanticType = Offer.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:discount", () => this.discount);
    this.registerSemanticProperty("dfc-b:stockLimitation", () => this.stockLimitation);
    this.registerSemanticProperty("dfc-b:concernedBy", () => this.concernedBy);
    this.registerSemanticProperty("dfc-b:hasPrice", () => this.hasPrice);
    this.registerSemanticProperty("dfc-b:listedIn", () => this.listedIn);
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
    this.registerSemanticProperty("dfc-b:offers", () => this.offers);
    this.registerSemanticProperty("dfc-b:offersTo", () => this.offersTo);
  }
  static {
    SemanticObject.typeRegistry.set(Offer.SEMANTIC_TYPE, Offer);
  }
}
