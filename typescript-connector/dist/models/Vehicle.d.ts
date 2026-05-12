import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { OpeningHoursSpecification } from "./OpeningHoursSpecification.js";
import type { PhysicalPlace } from "./PhysicalPlace.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
export interface VehicleParams extends WhatSubjectParams {
    frozen?: boolean;
    refrigerated?: boolean;
    ships?: string[];
    usedInRoute?: string;
    basedAt?: PhysicalPlace;
    hasQuantity?: QuantitativeValue;
    isAvailableDuring?: OpeningHoursSpecification;
}
export declare class Vehicle extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    frozen?: boolean;
    refrigerated?: boolean;
    ships?: string[];
    usedInRoute?: string;
    basedAt?: PhysicalPlace;
    hasQuantity?: QuantitativeValue;
    isAvailableDuring?: OpeningHoursSpecification;
    constructor(semanticId: string, params?: VehicleParams);
}
