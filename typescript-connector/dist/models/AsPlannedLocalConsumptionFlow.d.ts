import { ConsumptionFlow, type ConsumptionFlowParams } from "./ConsumptionFlow.js";
/**
 * Constructor parameters for {@link AsPlannedLocalConsumptionFlow}.
 */
export interface AsPlannedLocalConsumptionFlowParams extends ConsumptionFlowParams {
}
/**
 * A DFC `dfc-b:AsPlannedLocalConsumptionFlow`, serialized with `@type:
 *   dfc-b:AsPlannedLocalConsumptionFlow`.
 * Class hierarchy: `ConsumptionFlow` -> `AsPlannedLocalConsumptionFlow`.
 */
export declare class AsPlannedLocalConsumptionFlow extends ConsumptionFlow {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: AsPlannedLocalConsumptionFlowParams);
}
