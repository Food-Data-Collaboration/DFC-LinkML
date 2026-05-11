// Class from DFC Business Ontology: #LocalizedProduct
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";

export interface LocalizedProductParams extends WhatSubjectParams {
  image?: string;
  cost?: number;
  quantity?: number;
  constituedBy?: string;
  consumedBy?: string;
  hasReference?: string;
  producedBy?: string;
  representedBy?: string;
  hasQuantity?: QuantitativeValue;
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
  hasReference?: string;
  producedBy?: string;
  representedBy?: string;
  hasQuantity?: QuantitativeValue;

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
    this.hasReference = params?.hasReference;
    this.producedBy = params?.producedBy;
    this.representedBy = params?.representedBy;
    this.hasQuantity = params?.hasQuantity;
    this.semanticType = LocalizedProduct.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:LocalizedProduct:image", () => this.image);
    this.registerSemanticProperty("dfc-b:LocalizedProduct:cost", () => this.cost);
    this.registerSemanticProperty("dfc-b:LocalizedProduct:quantity", () => this.quantity);
    this.registerSemanticProperty("dfc-b:LocalizedProduct:constitued_by", () => this.constituedBy);
    this.registerSemanticProperty("dfc-b:LocalizedProduct:consumed_by", () => this.consumedBy);
    this.registerSemanticProperty("dfc-b:LocalizedProduct:has_reference", () => this.hasReference);
    this.registerSemanticProperty("dfc-b:LocalizedProduct:produced_by", () => this.producedBy);
    this.registerSemanticProperty("dfc-b:LocalizedProduct:represented_by", () => this.representedBy);
    this.registerSemanticProperty("dfc-b:LocalizedProduct:has_quantity", () => this.hasQuantity);
  }
  static {
    SemanticObject.typeRegistry.set(LocalizedProduct.SEMANTIC_TYPE, LocalizedProduct);
  }
}
