import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";
import type { Agent } from "./Agent.js";
import type { TechnicalProduct } from "./TechnicalProduct.js";
export interface FunctionalProductParams extends DefinedProductParams {
    requestedBy?: Agent | string;
    satisfiedBy?: TechnicalProduct | string;
}
export declare class FunctionalProduct extends DefinedProduct {
    static get SEMANTIC_TYPE(): string;
    requestedBy?: Agent | string;
    satisfiedBy?: TechnicalProduct | string;
    constructor(semanticId: string, params?: FunctionalProductParams);
}
