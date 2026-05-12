import { SemanticObject } from "../core/SemanticObject.js";
export interface ConceptParams {
    certificateOf?: string;
    claimOf?: string;
    containerInformationOf?: string;
    geographicalOriginOf?: string;
    natureOriginOf?: string;
    partOriginOf?: string;
    typeOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
}
export declare class Concept extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    certificateOf?: string;
    claimOf?: string;
    containerInformationOf?: string;
    geographicalOriginOf?: string;
    natureOriginOf?: string;
    partOriginOf?: string;
    typeOf?: string;
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    constructor(semanticId: string, params?: ConceptParams);
}
