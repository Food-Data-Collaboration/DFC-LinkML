// Class from DFC Business Ontology: #PhysicalPlace
import { SemanticObject } from "../core/SemanticObject.js";
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
export class PhysicalPlace extends Place {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:PhysicalPlace";
  }

  hasPhoneNumber?: string;
  hasAddress?: Address | string;
  hasGeoJsonFeature?: Feature | string;
  hasMainContact?: Person | string;
  isOpenDuring?: OpeningHoursSpecification | string;
  localizes?: (TheoriticalStock | string)[];
  stores?: (RealStock | string)[];

  constructor(
    semanticId: string,
    params?: PhysicalPlaceParams,
  ) {
    super(semanticId, params);
    this.hasPhoneNumber = params?.hasPhoneNumber;
    this.hasAddress = params?.hasAddress;
    this.hasGeoJsonFeature = params?.hasGeoJsonFeature;
    this.hasMainContact = params?.hasMainContact;
    this.isOpenDuring = params?.isOpenDuring;
    this.localizes = params?.localizes;
    this.stores = params?.stores;
    this.semanticType = PhysicalPlace.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:hasPhoneNumber", () => this.hasPhoneNumber);
    this.registerSemanticProperty("dfc-b:hasAddress", () => this.hasAddress);
    this.registerSemanticProperty("dfc-b:hasGeoJsonFeature", () => this.hasGeoJsonFeature);
    this.registerSemanticProperty("dfc-b:hasMainContact", () => this.hasMainContact);
    this.registerSemanticProperty("dfc-b:isOpenDuring", () => this.isOpenDuring);
    this.registerSemanticProperty("dfc-b:localizes", () => this.localizes);
    this.registerSemanticProperty("dfc-b:stores", () => this.stores);
  }
  static {
    SemanticObject.typeRegistry.set(PhysicalPlace.SEMANTIC_TYPE, PhysicalPlace);
  }
}
