import { DitributedRepresentation, type DitributedRepresentationParams } from "./DitributedRepresentation.js";
/**
 * Constructor parameters for {@link RepresentedThing}.
 */
export interface RepresentedThingParams extends DitributedRepresentationParams {
}
/**
 * A DFC `dfc-b:RepresentedThing`, serialized with `@type:
 *   dfc-b:RepresentedThing`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing`.
 */
export declare class RepresentedThing extends DitributedRepresentation {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: RepresentedThingParams);
}
