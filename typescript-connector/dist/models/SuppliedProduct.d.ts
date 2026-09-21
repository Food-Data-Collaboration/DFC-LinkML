import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";
import type { LocalizedProduct } from "./LocalizedProduct.js";
import type { Organization } from "./Organization.js";
import type { TechnicalProduct } from "./TechnicalProduct.js";
export interface SuppliedProductParams extends DefinedProductParams {
    availabilityTime?: string;
    deliveryCondition?: string;
    frozen?: boolean;
    refrigerated?: boolean;
    totalTheoriticalStock?: number;
    hasTemperature?: string;
    producedBy?: string;
    industrializes?: (TechnicalProduct | string)[];
    referenceOf?: LocalizedProduct | string;
    suppliedBy?: Organization | string;
}
export declare class SuppliedProduct extends DefinedProduct {
    static get SEMANTIC_TYPE(): string;
    availabilityTime?: string;
    deliveryCondition?: string;
    frozen?: boolean;
    refrigerated?: boolean;
    totalTheoriticalStock?: number;
    hasTemperature?: string;
    producedBy?: string;
    industrializes?: (TechnicalProduct | string)[];
    referenceOf?: LocalizedProduct | string;
    suppliedBy?: Organization | string;
    constructor(semanticId: string, params?: SuppliedProductParams);
}
