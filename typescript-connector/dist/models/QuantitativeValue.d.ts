import { RepresentedThing, type RepresentedThingParams } from "./RepresentedThing.js";
export interface QuantitativeValueParams extends RepresentedThingParams {
    value?: number;
    hasUnit?: string;
}
export declare class QuantitativeValue extends RepresentedThing {
    static get SEMANTIC_TYPE(): string;
    value?: number;
    hasUnit?: string;
    constructor(semanticId: string, params?: QuantitativeValueParams);
}
