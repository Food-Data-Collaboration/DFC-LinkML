import { ProductionFlow, type ProductionFlowParams } from "./ProductionFlow.js";
/**
 * Constructor parameters for {@link AsRealizedProductionFlow}.
 */
export interface AsRealizedProductionFlowParams extends ProductionFlowParams {
}
/**
 * A DFC `dfc-b:AsRealizedProductionFlow`, serialized with `@type:
 *   dfc-b:AsRealizedProductionFlow`.
 * Class hierarchy: `ProductionFlow` -> `AsRealizedProductionFlow`.
 */
export declare class AsRealizedProductionFlow extends ProductionFlow {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: AsRealizedProductionFlowParams);
}
