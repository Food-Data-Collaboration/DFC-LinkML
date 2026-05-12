// Class from DFC Business Ontology: #ProductBatch
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";

export interface ProductBatchParams extends WhatSubjectParams {
  batchNumber?: string;
  bestBeforeDate?: string;
  expiryDate?: string;
  productionDate?: string;
  identifies?: string[];
  traces?: string[];
}
export class ProductBatch extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:ProductBatch";
  }

  batchNumber?: string;
  bestBeforeDate?: string;
  expiryDate?: string;
  productionDate?: string;
  identifies?: string[];
  traces?: string[];

  constructor(
    semanticId: string,
    params?: ProductBatchParams,
  ) {
    super(semanticId, params);
    this.batchNumber = params?.batchNumber;
    this.bestBeforeDate = params?.bestBeforeDate;
    this.expiryDate = params?.expiryDate;
    this.productionDate = params?.productionDate;
    this.identifies = params?.identifies;
    this.traces = params?.traces;
    this.semanticType = ProductBatch.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:ProductBatch:batch_number", () => this.batchNumber);
    this.registerSemanticProperty("dfc-b:ProductBatch:best_before_date", () => this.bestBeforeDate);
    this.registerSemanticProperty("dfc-b:ProductBatch:expiry_date", () => this.expiryDate);
    this.registerSemanticProperty("dfc-b:ProductBatch:production_date", () => this.productionDate);
    this.registerSemanticProperty("dfc-b:ProductBatch:identifies", () => this.identifies);
    this.registerSemanticProperty("dfc-b:ProductBatch:traces", () => this.traces);
  }
  static {
    SemanticObject.typeRegistry.set(ProductBatch.SEMANTIC_TYPE, ProductBatch);
  }
}
