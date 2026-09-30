import { DitributedRepresentation, type DitributedRepresentationParams } from "./DitributedRepresentation.js";
/**
 * Constructor parameters for {@link Platform}.
 */
export interface PlatformParams extends DitributedRepresentationParams {
}
/**
 * A DFC `dfc-b:Platform`, serialized with `@type: dfc-b:Platform`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `Platform`.
 */
export declare class Platform extends DitributedRepresentation {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: PlatformParams);
}
