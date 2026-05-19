import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";
export interface TechnicalProductParams extends DefinedProductParams {
    industrializedBy?: string;
    proposedBy?: string;
    satisfies?: string[];
}
export declare class TechnicalProduct extends DefinedProduct {
    static get SEMANTIC_TYPE(): string;
    industrializedBy?: string;
    proposedBy?: string;
    satisfies?: string[];
    constructor(semanticId: string, params?: TechnicalProductParams);
}
