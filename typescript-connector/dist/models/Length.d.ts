import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";
/**
 * Constructor parameters for {@link Length}.
 */
export interface LengthParams extends QuantitativeValueParams {
}
/**
 * A DFC `dfc-b:Length`, serialized with `@type: dfc-b:Length`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing` ->
 *   `QuantitativeValue` -> `Length`.
 */
export declare class Length extends QuantitativeValue {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: LengthParams);
}
