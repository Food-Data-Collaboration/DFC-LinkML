import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";
export interface FunctionalProductParams extends DefinedProductParams {
    requestedBy?: string;
    satisfiedBy?: string;
}
export declare class FunctionalProduct extends DefinedProduct {
    static get SEMANTIC_TYPE(): string;
    requestedBy?: string;
    satisfiedBy?: string;
    constructor(semanticId: string, params?: FunctionalProductParams);
}
