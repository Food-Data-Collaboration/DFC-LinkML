// Class from DFC Business Ontology: #PhysicalProduct
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
export class PhysicalProduct extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:PhysicalProduct";
    }
    image;
    quantity;
    concernedBy;
    constituedBy;
    consumedBy;
    fulfills;
    ownedBy;
    producedBy;
    represents;
    tracedBy;
    hasQuantity;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.image = params?.image;
        this.quantity = params?.quantity;
        this.concernedBy = params?.concernedBy;
        this.constituedBy = params?.constituedBy;
        this.consumedBy = params?.consumedBy;
        this.fulfills = params?.fulfills;
        this.ownedBy = params?.ownedBy;
        this.producedBy = params?.producedBy;
        this.represents = params?.represents;
        this.tracedBy = params?.tracedBy;
        this.hasQuantity = params?.hasQuantity;
        this.semanticType = PhysicalProduct.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Image", () => this.image);
        this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:concernedBy", () => this.concernedBy);
        this.registerSemanticProperty("dfc-b:constituedBy", () => this.constituedBy);
        this.registerSemanticProperty("dfc-b:consumedBy", () => this.consumedBy);
        this.registerSemanticProperty("dfc-b:fulfills", () => this.fulfills);
        this.registerSemanticProperty("dfc-b:ownedBy", () => this.ownedBy);
        this.registerSemanticProperty("dfc-b:producedBy", () => this.producedBy);
        this.registerSemanticProperty("dfc-b:represents", () => this.represents);
        this.registerSemanticProperty("dfc-b:tracedBy", () => this.tracedBy);
        this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
    }
    static {
        SemanticObject.typeRegistry.set(PhysicalProduct.SEMANTIC_TYPE, PhysicalProduct);
    }
}
