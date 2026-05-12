import { Step, type StepParams } from "./Step.js";
export interface PickUpStepParams extends StepParams {
}
export declare class PickUpStep extends Step {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: PickUpStepParams);
}
