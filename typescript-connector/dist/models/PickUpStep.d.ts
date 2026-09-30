import { Step, type StepParams } from "./Step.js";
/**
 * Constructor parameters for {@link PickUpStep}.
 */
export interface PickUpStepParams extends StepParams {
}
/**
 * A DFC `dfc-b:PickUpStep`, serialized with `@type: dfc-b:PickUpStep`.
 * Class hierarchy: `Where_Subject` -> `Step` -> `PickUpStep`.
 */
export declare class PickUpStep extends Step {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: PickUpStepParams);
}
