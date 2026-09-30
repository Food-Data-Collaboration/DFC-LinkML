import { ProductionFlow, type ProductionFlowParams } from "./ProductionFlow.js";
/**
 * Constructor parameters for {@link AsPlannedLocalProductionFlow}.
 */
export interface AsPlannedLocalProductionFlowParams extends ProductionFlowParams {
}
/**
 * A DFC `dfc-b:AsPlannedLocalProductionFlow`, serialized with `@type:
 *   dfc-b:AsPlannedLocalProductionFlow`.
 * Class hierarchy: `ProductionFlow` -> `AsPlannedLocalProductionFlow`.
 */
export declare class AsPlannedLocalProductionFlow extends ProductionFlow {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: AsPlannedLocalProductionFlowParams);
}
