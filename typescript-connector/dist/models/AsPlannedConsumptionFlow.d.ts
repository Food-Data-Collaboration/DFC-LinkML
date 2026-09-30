import { ConsumptionFlow, type ConsumptionFlowParams } from "./ConsumptionFlow.js";
/**
 * Constructor parameters for {@link AsPlannedConsumptionFlow}.
 */
export interface AsPlannedConsumptionFlowParams extends ConsumptionFlowParams {
}
/**
 * A DFC `dfc-b:AsPlannedConsumptionFlow`, serialized with `@type:
 *   dfc-b:AsPlannedConsumptionFlow`.
 * Class hierarchy: `ConsumptionFlow` -> `AsPlannedConsumptionFlow`.
 */
export declare class AsPlannedConsumptionFlow extends ConsumptionFlow {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: AsPlannedConsumptionFlowParams);
}
