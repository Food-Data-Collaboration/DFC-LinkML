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
        this.registerSemanticProperty("dfc-b:PhysicalProduct:image", () => this.image);
        this.registerSemanticProperty("dfc-b:PhysicalProduct:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:PhysicalProduct:concerned_by", () => this.concernedBy);
        this.registerSemanticProperty("dfc-b:PhysicalProduct:constitued_by", () => this.constituedBy);
        this.registerSemanticProperty("dfc-b:PhysicalProduct:consumed_by", () => this.consumedBy);
        this.registerSemanticProperty("dfc-b:PhysicalProduct:fulfills", () => this.fulfills);
        this.registerSemanticProperty("dfc-b:PhysicalProduct:owned_by", () => this.ownedBy);
        this.registerSemanticProperty("dfc-b:PhysicalProduct:produced_by", () => this.producedBy);
        this.registerSemanticProperty("dfc-b:PhysicalProduct:represents", () => this.represents);
        this.registerSemanticProperty("dfc-b:PhysicalProduct:traced_by", () => this.tracedBy);
        this.registerSemanticProperty("dfc-b:PhysicalProduct:has_quantity", () => this.hasQuantity);
    }
    static {
        SemanticObject.typeRegistry.set(PhysicalProduct.SEMANTIC_TYPE, PhysicalProduct);
    }
}
