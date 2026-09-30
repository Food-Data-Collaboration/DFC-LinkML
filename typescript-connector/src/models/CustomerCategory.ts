import { SemanticObject } from "../core/SemanticObject.js";
import { WhoSubject, type WhoSubjectParams } from "./WhoSubject.js";
import type { Organization } from "./Organization.js";

/**
 * Constructor parameters for {@link CustomerCategory}.
 *
 * Own DFC properties: hasMember, hasOffer, definedBy.
 *
 * Inherited parameters come from {@link WhoSubjectParams}.
 */
export interface CustomerCategoryParams extends WhoSubjectParams {
  /**
   * Serializes as `dfc-b:hasMember`.
   */
  hasMember?: string;
  /**
   * Serializes as `dfc-b:hasOffer`.
   */
  hasOffer?: string;
  /**
   * Determines which Enterprise has defined the CustomerCategory
   *
   * Serializes as `dfc-b:definedBy`.
   */
  definedBy?: Organization | string;
}

/**
 * A DFC `dfc-b:CustomerCategory`, serialized with `@type:
 *   dfc-b:CustomerCategory`.
 * Class hierarchy: `Who_Subject` -> `CustomerCategory`.
 * Own DFC properties: hasMember, hasOffer, definedBy.
 */
export class CustomerCategory extends WhoSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:CustomerCategory";
  }

  /**
   * Serializes as `dfc-b:hasMember`.
   */
  hasMember?: string;
  /**
   * Serializes as `dfc-b:hasOffer`.
   */
  hasOffer?: string;
  /**
   * Determines which Enterprise has defined the CustomerCategory
   *
   * Serializes as `dfc-b:definedBy`.
   */
  definedBy?: Organization | string;

  constructor(
    semanticId: string,
    params?: CustomerCategoryParams,
  ) {
    super(semanticId, params);
    this.hasMember = params?.hasMember;
    this.hasOffer = params?.hasOffer;
    this.definedBy = params?.definedBy;
    this.semanticType = CustomerCategory.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:hasMember", () => this.hasMember);
    this.registerSemanticProperty("dfc-b:hasOffer", () => this.hasOffer);
    this.registerSemanticProperty("dfc-b:definedBy", () => this.definedBy);
  }
  static {
    SemanticObject.typeRegistry.set(CustomerCategory.SEMANTIC_TYPE, CustomerCategory);
  }
}
