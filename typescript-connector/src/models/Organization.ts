// Class from DFC Business Ontology: #Organization
import { SemanticObject } from "../core/SemanticObject.js";
import { Agent, type AgentParams } from "./Agent.js";
import type { AsPlannedLocalTransformation } from "./AsPlannedLocalTransformation.js";
import type { Catalog } from "./Catalog.js";
import type { CatalogItem } from "./CatalogItem.js";
import type { CustomerCategory } from "./CustomerCategory.js";
import type { Person } from "./Person.js";
import type { SuppliedProduct } from "./SuppliedProduct.js";
import type { TechnicalProduct } from "./TechnicalProduct.js";

export interface OrganizationParams extends AgentParams {
  vatNumber?: string;
  vatStatus?: boolean;
  enterpriseId?: string;
  hasTemplateSaleSession?: string;
  isCertifiedBy?: string;
  affiliates?: (Organization | string)[];
  defines?: (CustomerCategory | string)[];
  hasMainContact?: Person | string;
  maintains?: (Catalog | string)[];
  manages?: (CatalogItem | string)[];
  proposes?: (TechnicalProduct | string)[];
  supplies?: (SuppliedProduct | string)[];
  transforms?: (AsPlannedLocalTransformation | string)[];
}
export class Organization extends Agent {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Organization";
  }

  vatNumber?: string;
  vatStatus?: boolean;
  enterpriseId?: string;
  hasTemplateSaleSession?: string;
  isCertifiedBy?: string;
  affiliates?: (Organization | string)[];
  defines?: (CustomerCategory | string)[];
  hasMainContact?: Person | string;
  maintains?: (Catalog | string)[];
  manages?: (CatalogItem | string)[];
  proposes?: (TechnicalProduct | string)[];
  supplies?: (SuppliedProduct | string)[];
  transforms?: (AsPlannedLocalTransformation | string)[];

  constructor(
    semanticId: string,
    params?: OrganizationParams,
  ) {
    super(semanticId, params);
    this.vatNumber = params?.vatNumber;
    this.vatStatus = params?.vatStatus;
    this.enterpriseId = params?.enterpriseId;
    this.hasTemplateSaleSession = params?.hasTemplateSaleSession;
    this.isCertifiedBy = params?.isCertifiedBy;
    this.affiliates = params?.affiliates;
    this.defines = params?.defines;
    this.hasMainContact = params?.hasMainContact;
    this.maintains = params?.maintains;
    this.manages = params?.manages;
    this.proposes = params?.proposes;
    this.supplies = params?.supplies;
    this.transforms = params?.transforms;
    this.semanticType = Organization.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:VATnumber", () => this.vatNumber);
    this.registerSemanticProperty("dfc-b:VATstatus", () => this.vatStatus);
    this.registerSemanticProperty("dfc-b:enterpriseID", () => this.enterpriseId);
    this.registerSemanticProperty("dfc-b:hasTemplateSaleSession", () => this.hasTemplateSaleSession);
    this.registerSemanticProperty("dfc-b:isCertifiedBy", () => this.isCertifiedBy);
    this.registerSemanticProperty("dfc-b:affiliates", () => this.affiliates);
    this.registerSemanticProperty("dfc-b:defines", () => this.defines);
    this.registerSemanticProperty("dfc-b:hasMainContact", () => this.hasMainContact);
    this.registerSemanticProperty("dfc-b:maintains", () => this.maintains);
    this.registerSemanticProperty("dfc-b:manages", () => this.manages);
    this.registerSemanticProperty("dfc-b:proposes", () => this.proposes);
    this.registerSemanticProperty("dfc-b:supplies", () => this.supplies);
    this.registerSemanticProperty("dfc-b:transforms", () => this.transforms);
  }
  static {
    SemanticObject.typeRegistry.set(Organization.SEMANTIC_TYPE, Organization);
  }
}
