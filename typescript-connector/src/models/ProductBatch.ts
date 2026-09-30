import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { PhysicalProduct } from "./PhysicalProduct.js";
import type { RealStock } from "./RealStock.js";

/**
 * Constructor parameters for {@link ProductBatch}.
 *
 * Own DFC properties: batchNumber, bestBeforeDate, expiryDate,
 *   productionDate, identifies, traces.
 *
 * Inherited parameters come from {@link WhatSubjectParams}.
 */
export interface ProductBatchParams extends WhatSubjectParams {
  /**
   * Serializes as `dfc-b:batchNumber`.
   */
  batchNumber?: string;
  /**
   * " à consommer de préférence avant le… " : après cette date, le produit
   *   peut perdre une partie ou la totalité de ses qualités sans présenter un
   *   danger pour la santé : par exemple le café peut perdre son arôme.
   *
   * Serializes as `dfc-b:bestBeforeDate`.
   */
  bestBeforeDate?: string;
  /**
   * Serializes as `dfc-b:expiryDate`.
   */
  expiryDate?: string;
  /**
   * Serializes as `dfc-b:productionDate`.
   */
  productionDate?: string;
  /**
   * Serializes as `dfc-b:identifies`.
   */
  identifies?: (RealStock | string)[];
  /**
   * Serializes as `dfc-b:traces`.
   */
  traces?: (PhysicalProduct | string)[];
}

/**
 * A DFC `dfc-b:ProductBatch`, serialized with `@type: dfc-b:ProductBatch`.
 * Class hierarchy: `What_Subject` -> `ProductBatch`.
 * Own DFC properties: batchNumber, bestBeforeDate, expiryDate,
 *   productionDate, identifies, traces.
 */
export class ProductBatch extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:ProductBatch";
  }

  /**
   * Serializes as `dfc-b:batchNumber`.
   */
  batchNumber?: string;
  /**
   * " à consommer de préférence avant le… " : après cette date, le produit
   *   peut perdre une partie ou la totalité de ses qualités sans présenter un
   *   danger pour la santé : par exemple le café peut perdre son arôme.
   *
   * Serializes as `dfc-b:bestBeforeDate`.
   */
  bestBeforeDate?: string;
  /**
   * Serializes as `dfc-b:expiryDate`.
   */
  expiryDate?: string;
  /**
   * Serializes as `dfc-b:productionDate`.
   */
  productionDate?: string;
  /**
   * Serializes as `dfc-b:identifies`.
   */
  identifies?: (RealStock | string)[];
  /**
   * Serializes as `dfc-b:traces`.
   */
  traces?: (PhysicalProduct | string)[];

  constructor(
    semanticId: string,
    params?: ProductBatchParams,
  ) {
    super(semanticId, params);
    this.batchNumber = params?.batchNumber;
    this.bestBeforeDate = params?.bestBeforeDate;
    this.expiryDate = params?.expiryDate;
    this.productionDate = params?.productionDate;
    this.identifies = params?.identifies;
    this.traces = params?.traces;
    this.semanticType = ProductBatch.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:batchNumber", () => this.batchNumber);
    this.registerSemanticProperty("dfc-b:bestBeforeDate", () => this.bestBeforeDate);
    this.registerSemanticProperty("dfc-b:expiryDate", () => this.expiryDate);
    this.registerSemanticProperty("dfc-b:productionDate", () => this.productionDate);
    this.registerSemanticProperty("dfc-b:identifies", () => this.identifies);
    this.registerSemanticProperty("dfc-b:traces", () => this.traces);
  }
  static {
    SemanticObject.typeRegistry.set(ProductBatch.SEMANTIC_TYPE, ProductBatch);
  }
}
