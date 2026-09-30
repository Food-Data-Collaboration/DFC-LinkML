import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { Agent } from "./Agent.js";

/**
 * Constructor parameters for {@link Brand}.
 *
 * Own DFC properties: brandOf, ownedBy.
 *
 * Inherited parameters come from {@link WhatSubjectParams}.
 */
export interface BrandParams extends WhatSubjectParams {
  /**
   * Serializes as `dfc-b:brandOf`.
   */
  brandOf?: string;
  /**
   * Serializes as `dfc-b:ownedBy`.
   */
  ownedBy?: Agent | string;
}

/**
 * A DFC `dfc-b:Brand`, serialized with `@type: dfc-b:Brand`.
 * Class hierarchy: `What_Subject` -> `Brand`.
 * Own DFC properties: brandOf, ownedBy.
 */
export class Brand extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Brand";
  }

  /**
   * Serializes as `dfc-b:brandOf`.
   */
  brandOf?: string;
  /**
   * Serializes as `dfc-b:ownedBy`.
   */
  ownedBy?: Agent | string;

  constructor(
    semanticId: string,
    params?: BrandParams,
  ) {
    super(semanticId, params);
    this.brandOf = params?.brandOf;
    this.ownedBy = params?.ownedBy;
    this.semanticType = Brand.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:brandOf", () => this.brandOf);
    this.registerSemanticProperty("dfc-b:ownedBy", () => this.ownedBy);
  }
  static {
    SemanticObject.typeRegistry.set(Brand.SEMANTIC_TYPE, Brand);
  }
}
