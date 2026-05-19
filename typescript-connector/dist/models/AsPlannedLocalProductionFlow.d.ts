import { ProductionFlow, type ProductionFlowParams } from "./ProductionFlow.js";
export interface AsPlannedLocalProductionFlowParams extends ProductionFlowParams {
}
export declare class AsPlannedLocalProductionFlow extends ProductionFlow {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: AsPlannedLocalProductionFlowParams);
}
