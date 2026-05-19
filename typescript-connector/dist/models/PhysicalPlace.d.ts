import { Place, type PlaceParams } from "./Place.js";
import type { Feature } from "./Feature.js";
import type { OpeningHoursSpecification } from "./OpeningHoursSpecification.js";
export interface PhysicalPlaceParams extends PlaceParams {
    hasAddress?: string;
    hasMainContact?: string;
    hasPhoneNumber?: string;
    localizes?: string[];
    stores?: string[];
    hasGeoJsonFeature?: Feature;
    isOpenDuring?: OpeningHoursSpecification;
}
export declare class PhysicalPlace extends Place {
    static get SEMANTIC_TYPE(): string;
    hasAddress?: string;
    hasMainContact?: string;
    hasPhoneNumber?: string;
    localizes?: string[];
    stores?: string[];
    hasGeoJsonFeature?: Feature;
    isOpenDuring?: OpeningHoursSpecification;
    constructor(semanticId: string, params?: PhysicalPlaceParams);
}
