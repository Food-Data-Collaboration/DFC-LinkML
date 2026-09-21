// Class from DFC Business Ontology: #LocalizedProduct
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { PhysicalProduct } from "./PhysicalProduct.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
import type { SuppliedProduct } from "./SuppliedProduct.js";

export interface LocalizedProductParams extends WhatSubjectParams {
  image?: string;
  cost?: number;
  quantity?: number;
  constituedBy?: string;
  consumedBy?: string;
  producedBy?: string;
  hasQuantity?: QuantitativeValue | string;
  hasReference?: SuppliedProduct | string;
  representedBy?: PhysicalProduct | string;
}
export class LocalizedProduct extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:LocalizedProduct";
  }

  image?: string;
  cost?: number;
  quantity?: number;
  constituedBy?: string;
  consumedBy?: string;
  producedBy?: string;
  hasQuantity?: QuantitativeValue | string;
  hasReference?: SuppliedProduct | string;
  representedBy?: PhysicalProduct | string;

  constructor(
    semanticId: string,
    params?: LocalizedProductParams,
  ) {
    super(semanticId, params);
    this.image = params?.image;
    this.cost = params?.cost;
    this.quantity = params?.quantity;
    this.constituedBy = params?.constituedBy;
    this.consumedBy = params?.consumedBy;
    this.producedBy = params?.producedBy;
    this.hasQuantity = params?.hasQuantity;
    this.hasReference = params?.hasReference;
    this.representedBy = params?.representedBy;
    this.semanticType = LocalizedProduct.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:Image", () => this.image);
    this.registerSemanticProperty("dfc-b:cost", () => this.cost);
    this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
    this.registerSemanticProperty("dfc-b:constituedBy", () => this.constituedBy);
    this.registerSemanticProperty("dfc-b:consumedBy", () => this.consumedBy);
    this.registerSemanticProperty("dfc-b:producedBy", () => this.producedBy);
    this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
    this.registerSemanticProperty("dfc-b:hasReference", () => this.hasReference);
    this.registerSemanticProperty("dfc-b:representedBy", () => this.representedBy);
  }
  static {
    SemanticObject.typeRegistry.set(LocalizedProduct.SEMANTIC_TYPE, LocalizedProduct);
  }
}
