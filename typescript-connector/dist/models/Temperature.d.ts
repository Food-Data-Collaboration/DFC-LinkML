import { QuantitativeValue, type QuantitativeValueParams } from "./QuantitativeValue.js";
/**
 * Constructor parameters for {@link Temperature}.
 *
 * Own DFC properties: isTemperatureOf.
 *
 * Inherited parameters come from {@link QuantitativeValueParams}.
 */
export interface TemperatureParams extends QuantitativeValueParams {
    /**
     * Serializes as `dfc-b:isTemperatureOf`.
     */
    isTemperatureOf?: string;
}
/**
 * A DFC `dfc-b:Temperature`, serialized with `@type: dfc-b:Temperature`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing` ->
 *   `QuantitativeValue` -> `Temperature`.
 * Own DFC properties: isTemperatureOf.
 */
export declare class Temperature extends QuantitativeValue {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:isTemperatureOf`.
     */
    isTemperatureOf?: string;
    constructor(semanticId: string, params?: TemperatureParams);
}
