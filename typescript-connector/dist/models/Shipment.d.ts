import { SemanticObject } from "../core/SemanticObject.js";
import type { PhysicalPlace } from "./PhysicalPlace.js";
export interface ShipmentParams {
    endDate?: string;
    startDate?: string;
    isShippedIn?: string;
    transports?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    endsAt?: PhysicalPlace;
    startsAt?: PhysicalPlace;
}
export declare class Shipment extends SemanticObject {
    static get SEMANTIC_TYPE(): string;
    endDate?: string;
    startDate?: string;
    isShippedIn?: string;
    transports?: string[];
    date?: string;
    description?: string;
    name?: string;
    characteristicOf?: string;
    hasDimension?: string;
    endsAt?: PhysicalPlace;
    startsAt?: PhysicalPlace;
    constructor(semanticId: string, params?: ShipmentParams);
}
