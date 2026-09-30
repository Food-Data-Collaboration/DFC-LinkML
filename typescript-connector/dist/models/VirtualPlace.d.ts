import { Place, type PlaceParams } from "./Place.js";
/**
 * Constructor parameters for {@link VirtualPlace}.
 *
 * Own DFC properties: url, websitePage.
 *
 * Inherited parameters come from {@link PlaceParams}.
 */
export interface VirtualPlaceParams extends PlaceParams {
    /**
     * The Universal Resource Locator address of the virtual place
     *
     * Serializes as `dfc-b:URL`.
     */
    url?: string;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:websitePage`.
     */
    websitePage?: string;
}
/**
 * A DFC `dfc-b:VirtualPlace`, serialized with `@type: dfc-b:VirtualPlace`.
 * Class hierarchy: `Where_Subject` -> `Place` -> `VirtualPlace`.
 * Own DFC properties: url, websitePage.
 */
export declare class VirtualPlace extends Place {
    static get SEMANTIC_TYPE(): string;
    /**
     * The Universal Resource Locator address of the virtual place
     *
     * Serializes as `dfc-b:URL`.
     */
    url?: string;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:websitePage`.
     */
    websitePage?: string;
    constructor(semanticId: string, params?: VirtualPlaceParams);
}
