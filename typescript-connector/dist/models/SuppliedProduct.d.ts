import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";
export interface SuppliedProductParams extends DefinedProductParams {
    availabilityTime?: string;
    deliveryCondition?: string;
    frozen?: boolean;
    refrigerated?: boolean;
    totalTheoriticalStock?: number;
    hasTemperature?: string;
    industrializes?: string[];
    producedBy?: string;
    referenceOf?: string;
    suppliedBy?: string;
}
export declare class SuppliedProduct extends DefinedProduct {
    static get SEMANTIC_TYPE(): string;
    availabilityTime?: string;
    deliveryCondition?: string;
    frozen?: boolean;
    refrigerated?: boolean;
    totalTheoriticalStock?: number;
    hasTemperature?: string;
    industrializes?: string[];
    producedBy?: string;
    referenceOf?: string;
    suppliedBy?: string;
    constructor(semanticId: string, params?: SuppliedProductParams);
}
