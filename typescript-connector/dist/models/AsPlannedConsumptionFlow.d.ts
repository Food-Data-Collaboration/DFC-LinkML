import { ConsumptionFlow, type ConsumptionFlowParams } from "./ConsumptionFlow.js";
export interface AsPlannedConsumptionFlowParams extends ConsumptionFlowParams {
}
export declare class AsPlannedConsumptionFlow extends ConsumptionFlow {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: AsPlannedConsumptionFlowParams);
}
