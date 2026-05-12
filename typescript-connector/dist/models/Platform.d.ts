import { DitributedRepresentation, type DitributedRepresentationParams } from "./DitributedRepresentation.js";
export interface PlatformParams extends DitributedRepresentationParams {
}
export declare class Platform extends DitributedRepresentation {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: PlatformParams);
}
