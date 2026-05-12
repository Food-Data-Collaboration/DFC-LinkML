import { ConsumptionFlow, type ConsumptionFlowParams } from "./ConsumptionFlow.js";
export interface AsPlannedLocalConsumptionFlowParams extends ConsumptionFlowParams {
}
export declare class AsPlannedLocalConsumptionFlow extends ConsumptionFlow {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: AsPlannedLocalConsumptionFlowParams);
}
