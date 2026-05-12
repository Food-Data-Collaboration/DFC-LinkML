import { ProductionFlow, type ProductionFlowParams } from "./ProductionFlow.js";
export interface AsRealizedProductionFlowParams extends ProductionFlowParams {
}
export declare class AsRealizedProductionFlow extends ProductionFlow {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: AsRealizedProductionFlowParams);
}
