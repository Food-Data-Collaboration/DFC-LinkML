import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";
/**
 * Constructor parameters for {@link Weight}.
 */
export interface WeightParams extends QuantitativeValueParams {
}
/**
 * A DFC `dfc-b:Weight`, serialized with `@type: dfc-b:Weight`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing` ->
 *   `QuantitativeValue` -> `Weight`.
 */
export declare class Weight extends QuantitativeValue {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: WeightParams);
}
