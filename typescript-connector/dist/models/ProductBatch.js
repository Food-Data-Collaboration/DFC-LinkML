// Class from DFC Business Ontology: #ProductBatch
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
export class ProductBatch extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:ProductBatch";
    }
    batchNumber;
    bestBeforeDate;
    expiryDate;
    productionDate;
    identifies;
    traces;
    constructor(semanticId, params) {
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
