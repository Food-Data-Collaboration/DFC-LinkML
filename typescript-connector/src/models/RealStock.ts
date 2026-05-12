// Class from DFC Business Ontology: #RealStock
import { SemanticObject } from "../core/SemanticObject.js";
import { Stock, type StockParams } from "./Stock.js";

export interface RealStockParams extends StockParams {
  constitutes?: string[];
  identifiedBy?: string;
  storedIn?: string;
}
export class RealStock extends Stock {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:RealStock";
  }

  constitutes?: string[];
  identifiedBy?: string;
  storedIn?: string;

  constructor(
    semanticId: string,
    params?: RealStockParams,
  ) {
    super(semanticId, params);
    this.constitutes = params?.constitutes;
    this.identifiedBy = params?.identifiedBy;
    this.storedIn = params?.storedIn;
    this.semanticType = RealStock.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:RealStock:constitutes", () => this.constitutes);
    this.registerSemanticProperty("dfc-b:RealStock:identified_by", () => this.identifiedBy);
    this.registerSemanticProperty("dfc-b:RealStock:stored_in", () => this.storedIn);
  }
  static {
    SemanticObject.typeRegistry.set(RealStock.SEMANTIC_TYPE, RealStock);
  }
}
