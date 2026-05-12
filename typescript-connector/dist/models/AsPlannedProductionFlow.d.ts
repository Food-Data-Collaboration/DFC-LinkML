import { ProductionFlow, type ProductionFlowParams } from "./ProductionFlow.js";
export interface AsPlannedProductionFlowParams extends ProductionFlowParams {
}
export declare class AsPlannedProductionFlow extends ProductionFlow {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: AsPlannedProductionFlowParams);
}
