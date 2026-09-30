import { DefinedProduct, type DefinedProductParams } from "./DefinedProduct.js";
import type { Agent } from "./Agent.js";
import type { TechnicalProduct } from "./TechnicalProduct.js";
/**
 * Constructor parameters for {@link FunctionalProduct}.
 *
 * Own DFC properties: requestedBy, satisfiedBy.
 *
 * Inherited parameters come from {@link DefinedProductParams}.
 */
export interface FunctionalProductParams extends DefinedProductParams {
    /**
     * Serializes as `dfc-b:requestedBy`.
     */
    requestedBy?: Agent | string;
    /**
     * Serializes as `dfc-b:satisfiedBy`.
     */
    satisfiedBy?: TechnicalProduct | string;
}
/**
 * A DFC `dfc-b:FunctionalProduct`, serialized with `@type:
 *   dfc-b:FunctionalProduct`.
 * Class hierarchy: `What_Subject` -> `DefinedProduct` ->
 *   `FunctionalProduct`.
 * Own DFC properties: requestedBy, satisfiedBy.
 */
export declare class FunctionalProduct extends DefinedProduct {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:requestedBy`.
     */
    requestedBy?: Agent | string;
    /**
     * Serializes as `dfc-b:satisfiedBy`.
     */
    satisfiedBy?: TechnicalProduct | string;
    constructor(semanticId: string, params?: FunctionalProductParams);
}
