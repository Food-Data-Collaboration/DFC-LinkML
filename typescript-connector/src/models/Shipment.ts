// Class from DFC Business Ontology: #Shipment
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
export class Shipment extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Shipment";
  }

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

  constructor(
    semanticId: string,
    params?: ShipmentParams,
  ) {
    super(semanticId);
    this.endDate = params?.endDate;
    this.startDate = params?.startDate;
    this.isShippedIn = params?.isShippedIn;
    this.transports = params?.transports;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.endsAt = params?.endsAt;
    this.startsAt = params?.startsAt;
    this.semanticType = Shipment.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:Shipment:end_date", () => this.endDate);
    this.registerSemanticProperty("dfc-b:Shipment:start_date", () => this.startDate);
    this.registerSemanticProperty("dfc-b:Shipment:is_shipped_in", () => this.isShippedIn);
    this.registerSemanticProperty("dfc-b:Shipment:transports", () => this.transports);
    this.registerSemanticProperty("dfc-b:Shipment:date", () => this.date);
    this.registerSemanticProperty("dfc-b:Shipment:description", () => this.description);
    this.registerSemanticProperty("dfc-b:Shipment:name", () => this.name);
    this.registerSemanticProperty("dfc-b:Shipment:characteristic_of", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:Shipment:has_dimension", () => this.hasDimension);
    this.registerSemanticProperty("dfc-b:Shipment:ends_at", () => this.endsAt);
    this.registerSemanticProperty("dfc-b:Shipment:starts_at", () => this.startsAt);
  }
  static {
    SemanticObject.typeRegistry.set(Shipment.SEMANTIC_TYPE, Shipment);
  }
}
