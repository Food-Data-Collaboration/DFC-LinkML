import { RepresentedThing, type RepresentedThingParams } from "./RepresentedThing.js";
/**
 * Constructor parameters for {@link QuantitativeValue}.
 *
 * Own DFC properties: value, hasUnit.
 *
 * Inherited parameters come from {@link RepresentedThingParams}.
 */
export interface QuantitativeValueParams extends RepresentedThingParams {
    /**
     * Serializes as `dfc-b:value`.
     */
    value?: number;
    /**
     * A Currency Unit. listed within the skos:concept of CurrencyUnit in the
     *   measures.rdf
     *
     * Serializes as `dfc-b:hasUnit`.
     */
    hasUnit?: string;
}
/**
 * A DFC `dfc-b:QuantitativeValue`, serialized with `@type:
 *   dfc-b:QuantitativeValue`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing` ->
 *   `QuantitativeValue`.
 * Own DFC properties: value, hasUnit.
 */
export declare class QuantitativeValue extends RepresentedThing {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:value`.
     */
    value?: number;
    /**
     * A Currency Unit. listed within the skos:concept of CurrencyUnit in the
     *   measures.rdf
     *
     * Serializes as `dfc-b:hasUnit`.
     */
    hasUnit?: string;
    constructor(semanticId: string, params?: QuantitativeValueParams);
}
