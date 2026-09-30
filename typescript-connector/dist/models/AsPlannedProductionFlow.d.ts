import { ProductionFlow, type ProductionFlowParams } from "./ProductionFlow.js";
/**
 * Constructor parameters for {@link AsPlannedProductionFlow}.
 */
export interface AsPlannedProductionFlowParams extends ProductionFlowParams {
}
/**
 * A DFC `dfc-b:AsPlannedProductionFlow`, serialized with `@type:
 *   dfc-b:AsPlannedProductionFlow`.
 * Class hierarchy: `ProductionFlow` -> `AsPlannedProductionFlow`.
 */
export declare class AsPlannedProductionFlow extends ProductionFlow {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: AsPlannedProductionFlowParams);
}
