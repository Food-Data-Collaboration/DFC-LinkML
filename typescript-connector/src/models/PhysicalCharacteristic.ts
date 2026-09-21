// Class from DFC Business Ontology: #PhysicalCharacteristic
import { SemanticObject } from "../core/SemanticObject.js";
import type { Concept } from "./Concept.js";

export interface PhysicalCharacteristicParams {
  physicalCharacteristicOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  hasPhysicalDimension?: Concept | string;
}
export class PhysicalCharacteristic extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:PhysicalCharacteristic";
  }

  physicalCharacteristicOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  hasPhysicalDimension?: Concept | string;

  constructor(
    semanticId: string,
    params?: PhysicalCharacteristicParams,
  ) {
    super(semanticId);
    this.physicalCharacteristicOf = params?.physicalCharacteristicOf;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.hasPhysicalDimension = params?.hasPhysicalDimension;
    this.semanticType = PhysicalCharacteristic.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:physicalCharacteristicOf", () => this.physicalCharacteristicOf);
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
    this.registerSemanticProperty("dfc-b:hasPhysicalDimension", () => this.hasPhysicalDimension);
  }
  static {
    SemanticObject.typeRegistry.set(PhysicalCharacteristic.SEMANTIC_TYPE, PhysicalCharacteristic);
  }
}
