// Class from DFC Business Ontology: #Price
import { SemanticObject } from "../core/SemanticObject.js";

export interface PriceParams {
  vatRate?: number;
  isPriceOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
}
export class Price extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Price";
  }

  vatRate?: number;
  isPriceOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;

  constructor(
    semanticId: string,
    params?: PriceParams,
  ) {
    super(semanticId);
    this.vatRate = params?.vatRate;
    this.isPriceOf = params?.isPriceOf;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = Price.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:Price:vat_rate", () => this.vatRate);
    this.registerSemanticProperty("dfc-b:Price:is_price_of", () => this.isPriceOf);
    this.registerSemanticProperty("dfc-b:Price:date", () => this.date);
    this.registerSemanticProperty("dfc-b:Price:description", () => this.description);
    this.registerSemanticProperty("dfc-b:Price:name", () => this.name);
    this.registerSemanticProperty("dfc-b:Price:characteristic_of", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:Price:has_dimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(Price.SEMANTIC_TYPE, Price);
  }
}
