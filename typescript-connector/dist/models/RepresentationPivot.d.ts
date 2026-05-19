import { DitributedRepresentation, type DitributedRepresentationParams } from "./DitributedRepresentation.js";
export interface RepresentationPivotParams extends DitributedRepresentationParams {
}
export declare class RepresentationPivot extends DitributedRepresentation {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: RepresentationPivotParams);
}
