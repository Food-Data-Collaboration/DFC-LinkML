// Class from DFC Business Ontology: #Offer
import { SemanticObject } from "../core/SemanticObject.js";

export interface OfferParams {
  discount?: number;
  stockLimitation?: number;
  concernedBy?: string;
  hasPrice?: string;
  listedIn?: string;
  offers?: string[];
  offersTo?: string[];
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
}
export class Offer extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Offer";
  }

  discount?: number;
  stockLimitation?: number;
  concernedBy?: string;
  hasPrice?: string;
  listedIn?: string;
  offers?: string[];
  offersTo?: string[];
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;

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
    this.offers = params?.offers;
    this.offersTo = params?.offersTo;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = Offer.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:discount", () => this.discount);
    this.registerSemanticProperty("dfc-b:stockLimitation", () => this.stockLimitation);
    this.registerSemanticProperty("dfc-b:concernedBy", () => this.concernedBy);
    this.registerSemanticProperty("dfc-b:hasPrice", () => this.hasPrice);
    this.registerSemanticProperty("dfc-b:listedIn", () => this.listedIn);
    this.registerSemanticProperty("dfc-b:offers", () => this.offers);
    this.registerSemanticProperty("dfc-b:offersTo", () => this.offersTo);
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(Offer.SEMANTIC_TYPE, Offer);
  }
}
