import { Place, type PlaceParams } from "./Place.js";
import type { Address } from "./Address.js";
import type { Feature } from "./Feature.js";
import type { OpeningHoursSpecification } from "./OpeningHoursSpecification.js";
import type { Person } from "./Person.js";
import type { RealStock } from "./RealStock.js";
import type { TheoriticalStock } from "./TheoriticalStock.js";
export interface PhysicalPlaceParams extends PlaceParams {
    hasPhoneNumber?: string;
    hasAddress?: Address | string;
    hasGeoJsonFeature?: Feature | string;
    hasMainContact?: Person | string;
    isOpenDuring?: OpeningHoursSpecification | string;
    localizes?: (TheoriticalStock | string)[];
    stores?: (RealStock | string)[];
}
export declare class PhysicalPlace extends Place {
    static get SEMANTIC_TYPE(): string;
    hasPhoneNumber?: string;
    hasAddress?: Address | string;
    hasGeoJsonFeature?: Feature | string;
    hasMainContact?: Person | string;
    isOpenDuring?: OpeningHoursSpecification | string;
    localizes?: (TheoriticalStock | string)[];
    stores?: (RealStock | string)[];
    constructor(semanticId: string, params?: PhysicalPlaceParams);
}
