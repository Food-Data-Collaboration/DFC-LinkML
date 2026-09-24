// Class from DFC Business Ontology: #Price
import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";

export interface PriceParams extends QuantitativeValueParams {
  vatRate?: number;
  isPriceOf?: string;
}
export class Price extends QuantitativeValue {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Price";
  }

  vatRate?: number;
  isPriceOf?: string;

  constructor(
    semanticId: string,
    params?: PriceParams,
  ) {
    super(semanticId, params);
    this.vatRate = params?.vatRate;
    this.isPriceOf = params?.isPriceOf;
    this.semanticType = Price.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:VATrate", () => this.vatRate);
    this.registerSemanticProperty("dfc-b:isPriceOf", () => this.isPriceOf);
  }
  static {
    SemanticObject.typeRegistry.set(Price.SEMANTIC_TYPE, Price);
  }
}
