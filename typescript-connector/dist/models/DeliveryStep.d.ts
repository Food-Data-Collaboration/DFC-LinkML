import { Step, type StepParams } from "./Step.js";
export interface DeliveryStepParams extends StepParams {
}
export declare class DeliveryStep extends Step {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: DeliveryStepParams);
}
