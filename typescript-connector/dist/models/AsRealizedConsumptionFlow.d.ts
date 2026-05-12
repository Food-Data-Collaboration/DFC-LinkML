import { ConsumptionFlow, type ConsumptionFlowParams } from "./ConsumptionFlow.js";
export interface AsRealizedConsumptionFlowParams extends ConsumptionFlowParams {
}
export declare class AsRealizedConsumptionFlow extends ConsumptionFlow {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: AsRealizedConsumptionFlowParams);
}
