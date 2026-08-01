// Class from DFC Business Ontology: #Vehicle
import { SemanticObject } from "../core/SemanticObject.js";
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
export class Vehicle extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Vehicle";
  }

  frozen?: boolean;
  refrigerated?: boolean;
  ships?: string[];
  usedInRoute?: string;
  basedAt?: PhysicalPlace;
  hasQuantity?: QuantitativeValue;
  isAvailableDuring?: OpeningHoursSpecification;

  constructor(
    semanticId: string,
    params?: VehicleParams,
  ) {
    super(semanticId, params);
    this.frozen = params?.frozen;
    this.refrigerated = params?.refrigerated;
    this.ships = params?.ships;
    this.usedInRoute = params?.usedInRoute;
    this.basedAt = params?.basedAt;
    this.hasQuantity = params?.hasQuantity;
    this.isAvailableDuring = params?.isAvailableDuring;
    this.semanticType = Vehicle.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:frozen", () => this.frozen);
    this.registerSemanticProperty("dfc-b:refrigerated", () => this.refrigerated);
    this.registerSemanticProperty("dfc-b:ships", () => this.ships);
    this.registerSemanticProperty("dfc-b:usedInRoute", () => this.usedInRoute);
    this.registerSemanticProperty("dfc-b:basedAt", () => this.basedAt);
    this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
    this.registerSemanticProperty("dfc-b:isAvailableDuring", () => this.isAvailableDuring);
  }
  static {
    SemanticObject.typeRegistry.set(Vehicle.SEMANTIC_TYPE, Vehicle);
  }
}
