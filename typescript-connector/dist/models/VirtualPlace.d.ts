import { Place, type PlaceParams } from "./Place.js";
export interface VirtualPlaceParams extends PlaceParams {
    url?: string;
    websitePage?: string;
}
export declare class VirtualPlace extends Place {
    static get SEMANTIC_TYPE(): string;
    url?: string;
    websitePage?: string;
    constructor(semanticId: string, params?: VirtualPlaceParams);
}
