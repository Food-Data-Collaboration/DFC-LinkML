import { DitributedRepresentation, type DitributedRepresentationParams } from "./DitributedRepresentation.js";
export interface RepresentedThingParams extends DitributedRepresentationParams {
}
export declare class RepresentedThing extends DitributedRepresentation {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: RepresentedThingParams);
}
