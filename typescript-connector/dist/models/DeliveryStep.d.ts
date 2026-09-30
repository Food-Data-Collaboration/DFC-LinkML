import { Step, type StepParams } from "./Step.js";
/**
 * Constructor parameters for {@link DeliveryStep}.
 */
export interface DeliveryStepParams extends StepParams {
}
/**
 * A DFC `dfc-b:DeliveryStep`, serialized with `@type: dfc-b:DeliveryStep`.
 * Class hierarchy: `Where_Subject` -> `Step` -> `DeliveryStep`.
 */
export declare class DeliveryStep extends Step {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: DeliveryStepParams);
}
