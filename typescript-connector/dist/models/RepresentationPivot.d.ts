import { DitributedRepresentation, type DitributedRepresentationParams } from "./DitributedRepresentation.js";
/**
 * Constructor parameters for {@link RepresentationPivot}.
 */
export interface RepresentationPivotParams extends DitributedRepresentationParams {
}
/**
 * A DFC `dfc-b:RepresentationPivot`, serialized with `@type:
 *   dfc-b:RepresentationPivot`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentationPivot`.
 */
export declare class RepresentationPivot extends DitributedRepresentation {
    static get SEMANTIC_TYPE(): string;
    constructor(semanticId: string, params?: RepresentationPivotParams);
}
