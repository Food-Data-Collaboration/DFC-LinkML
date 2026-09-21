// Class from DFC Business Ontology: #CustomerCategory
import { SemanticObject } from "../core/SemanticObject.js";
import { WhoSubject, type WhoSubjectParams } from "./WhoSubject.js";
import type { Organization } from "./Organization.js";

export interface CustomerCategoryParams extends WhoSubjectParams {
  hasMember?: string;
  hasOffer?: string;
  definedBy?: Organization | string;
}
export class CustomerCategory extends WhoSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:CustomerCategory";
  }

  hasMember?: string;
  hasOffer?: string;
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
