import { ConsumptionFlow, type ConsumptionFlowParams } from "./ConsumptionFlow.js";
/**
 * Constructor parameters for {@link AsRealizedConsumptionFlow}.
 */
export interface AsRealizedConsumptionFlowParams extends ConsumptionFlowParams {
}
/**
 * A DFC `dfc-b:AsRealizedConsumptionFlow`, serialized with `@type:
 *   dfc-b:AsRealizedConsumptionFlow`.
 * Class hierarchy: `ConsumptionFlow` -> `AsRealizedConsumptionFlow`.
 */
export declare class AsRealizedConsumptionFlow extends ConsumptionFlow {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: AsRealizedConsumptionFlowParams);
}
