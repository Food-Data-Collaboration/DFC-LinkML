import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";
import type { FunctionalProduct } from "./FunctionalProduct.js";
import type { Organization } from "./Organization.js";
import type { SuppliedProduct } from "./SuppliedProduct.js";
export interface TechnicalProductParams extends DefinedProductParams {
    industrializedBy?: SuppliedProduct | string;
    proposedBy?: Organization | string;
    satisfies?: (FunctionalProduct | string)[];
}
export declare class TechnicalProduct extends DefinedProduct {
    static get SEMANTIC_TYPE(): string;
    industrializedBy?: SuppliedProduct | string;
    proposedBy?: Organization | string;
    satisfies?: (FunctionalProduct | string)[];
    constructor(semanticId: string, params?: TechnicalProductParams);
}
