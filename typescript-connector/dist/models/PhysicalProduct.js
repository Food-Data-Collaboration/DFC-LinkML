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
    producedBy;
    hasQuantity;
    ownedBy;
    represents;
    tracedBy;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.image = params?.image;
        this.quantity = params?.quantity;
        this.concernedBy = params?.concernedBy;
        this.constituedBy = params?.constituedBy;
        this.consumedBy = params?.consumedBy;
        this.fulfills = params?.fulfills;
        this.producedBy = params?.producedBy;
        this.hasQuantity = params?.hasQuantity;
        this.ownedBy = params?.ownedBy;
        this.represents = params?.represents;
        this.tracedBy = params?.tracedBy;
        this.semanticType = PhysicalProduct.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Image", () => this.image);
        this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:concernedBy", () => this.concernedBy);
        this.registerSemanticProperty("dfc-b:constituedBy", () => this.constituedBy);
        this.registerSemanticProperty("dfc-b:consumedBy", () => this.consumedBy);
        this.registerSemanticProperty("dfc-b:fulfills", () => this.fulfills);
        this.registerSemanticProperty("dfc-b:producedBy", () => this.producedBy);
        this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
        this.registerSemanticProperty("dfc-b:ownedBy", () => this.ownedBy);
        this.registerSemanticProperty("dfc-b:represents", () => this.represents);
        this.registerSemanticProperty("dfc-b:tracedBy", () => this.tracedBy);
    }
    static {
        SemanticObject.typeRegistry.set(PhysicalProduct.SEMANTIC_TYPE, PhysicalProduct);
    }
}
