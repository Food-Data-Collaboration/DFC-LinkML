import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";
/**
 * Constructor parameters for {@link Volume}.
 */
export interface VolumeParams extends QuantitativeValueParams {
}
/**
 * A DFC `dfc-b:Volume`, serialized with `@type: dfc-b:Volume`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing` ->
 *   `QuantitativeValue` -> `Volume`.
 */
export declare class Volume extends QuantitativeValue {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: VolumeParams);
}
