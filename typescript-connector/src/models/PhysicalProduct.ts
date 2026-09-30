import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { Agent } from "./Agent.js";
import type { LocalizedProduct } from "./LocalizedProduct.js";
import type { ProductBatch } from "./ProductBatch.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";

/**
 * Constructor parameters for {@link PhysicalProduct}.
 *
 * Own DFC properties: image, quantity, concernedBy, constituedBy,
 *   consumedBy, fulfills, producedBy, hasQuantity, ownedBy, represents,
 *   tracedBy.
 *
 * Inherited parameters come from {@link WhatSubjectParams}.
 */
export interface PhysicalProductParams extends WhatSubjectParams {
  /**
   * A URL for an image of the Product
   *
   * Serializes as `dfc-b:Image`.
   */
  image?: string;
  /**
   * DEPRECATE
   *
   * Serializes as `dfc-b:quantity`.
   */
  quantity?: number;
  /**
   * Any/All Order Lines that relate to this Product
   *
   * Serializes as `dfc-b:concernedBy`.
   */
  concernedBy?: string;
  /**
   * Serializes as `dfc-b:constituedBy`.
   */
  constituedBy?: string;
  /**
   * The ConsmuptionFlow by which the Product is transformed into other
   *   Products
   *
   * Serializes as `dfc-b:consumedBy`.
   */
  consumedBy?: string;
  /**
   * Serializes as `dfc-b:fulfills`.
   */
  fulfills?: string[];
  /**
   * Link to another SuppleidProduct that is produced by this Product
   *
   * Serializes as `dfc-b:producedBy`.
   */
  producedBy?: string;
  /**
   * The actual numeric value of the Price, in the currency unit specified
   *   with hasUnit
   *
   * Serializes as `dfc-b:hasQuantity`.
   */
  hasQuantity?: QuantitativeValue | string;
  /**
   * Serializes as `dfc-b:ownedBy`.
   */
  ownedBy?: Agent | string;
  /**
   * Serializes as `dfc-b:represents`.
   */
  represents?: (LocalizedProduct | string)[];
  /**
   * Serializes as `dfc-b:tracedBy`.
   */
  tracedBy?: ProductBatch | string;
}

/**
 * A DFC `dfc-b:PhysicalProduct`, serialized with `@type:
 *   dfc-b:PhysicalProduct`.
 * Class hierarchy: `What_Subject` -> `PhysicalProduct`.
 * Own DFC properties: image, quantity, concernedBy, constituedBy,
 *   consumedBy, fulfills, producedBy, hasQuantity, ownedBy, represents,
 *   tracedBy.
 */
export class PhysicalProduct extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:PhysicalProduct";
  }

  /**
   * A URL for an image of the Product
   *
   * Serializes as `dfc-b:Image`.
   */
  image?: string;
  /**
   * DEPRECATE
   *
   * Serializes as `dfc-b:quantity`.
   */
  quantity?: number;
  /**
   * Any/All Order Lines that relate to this Product
   *
   * Serializes as `dfc-b:concernedBy`.
   */
  concernedBy?: string;
  /**
   * Serializes as `dfc-b:constituedBy`.
   */
  constituedBy?: string;
  /**
   * The ConsmuptionFlow by which the Product is transformed into other
   *   Products
   *
   * Serializes as `dfc-b:consumedBy`.
   */
  consumedBy?: string;
  /**
   * Serializes as `dfc-b:fulfills`.
   */
  fulfills?: string[];
  /**
   * Link to another SuppleidProduct that is produced by this Product
   *
   * Serializes as `dfc-b:producedBy`.
   */
  producedBy?: string;
  /**
   * The actual numeric value of the Price, in the currency unit specified
   *   with hasUnit
   *
   * Serializes as `dfc-b:hasQuantity`.
   */
  hasQuantity?: QuantitativeValue | string;
  /**
   * Serializes as `dfc-b:ownedBy`.
   */
  ownedBy?: Agent | string;
  /**
   * Serializes as `dfc-b:represents`.
   */
  represents?: (LocalizedProduct | string)[];
  /**
   * Serializes as `dfc-b:tracedBy`.
   */
  tracedBy?: ProductBatch | string;

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
