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
export declare class Organization extends Agent {
    static get SEMANTIC_TYPE(): string;
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
    constructor(semanticId: string, params?: OrganizationParams);
}
