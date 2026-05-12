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
