// Class from DFC Business Ontology: #PhysicalProduct
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";

export interface PhysicalProductParams extends WhatSubjectParams {
  image?: string;
  quantity?: number;
  concernedBy?: string;
  constituedBy?: string;
  consumedBy?: string;
  fulfills?: string[];
  ownedBy?: string;
  producedBy?: string;
  represents?: string[];
  tracedBy?: string;
  hasQuantity?: QuantitativeValue;
}
export class PhysicalProduct extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:PhysicalProduct";
  }

  image?: string;
  quantity?: number;
  concernedBy?: string;
  constituedBy?: string;
  consumedBy?: string;
  fulfills?: string[];
  ownedBy?: string;
  producedBy?: string;
  represents?: string[];
  tracedBy?: string;
  hasQuantity?: QuantitativeValue;

  constructor(
    semanticId: string,
    params?: PhysicalProductParams,
  ) {
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
