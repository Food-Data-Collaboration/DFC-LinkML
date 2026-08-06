// Class from DFC Business Ontology: #LocalizedProduct
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
export class LocalizedProduct extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:LocalizedProduct";
    }
    image;
    cost;
    quantity;
    constituedBy;
    consumedBy;
    hasReference;
    producedBy;
    representedBy;
    hasQuantity;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.image = params?.image;
        this.cost = params?.cost;
        this.quantity = params?.quantity;
        this.constituedBy = params?.constituedBy;
        this.consumedBy = params?.consumedBy;
        this.hasReference = params?.hasReference;
        this.producedBy = params?.producedBy;
        this.representedBy = params?.representedBy;
        this.hasQuantity = params?.hasQuantity;
        this.semanticType = LocalizedProduct.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Image", () => this.image);
        this.registerSemanticProperty("dfc-b:cost", () => this.cost);
        this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:constituedBy", () => this.constituedBy);
        this.registerSemanticProperty("dfc-b:consumedBy", () => this.consumedBy);
        this.registerSemanticProperty("dfc-b:hasReference", () => this.hasReference);
        this.registerSemanticProperty("dfc-b:producedBy", () => this.producedBy);
        this.registerSemanticProperty("dfc-b:representedBy", () => this.representedBy);
        this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
    }
    static {
        SemanticObject.typeRegistry.set(LocalizedProduct.SEMANTIC_TYPE, LocalizedProduct);
    }
}
