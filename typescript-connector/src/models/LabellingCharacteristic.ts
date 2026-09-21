// Class from DFC Business Ontology: #LabellingCharacteristic
import { SemanticObject } from "../core/SemanticObject.js";
import type { Concept } from "./Concept.js";

export interface LabellingCharacteristicParams {
  labellingCharacteristicOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  hasLabellingDimension?: Concept | string;
}
export class LabellingCharacteristic extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:LabellingCharacteristic";
  }

  labellingCharacteristicOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  hasLabellingDimension?: Concept | string;

  constructor(
    semanticId: string,
    params?: LabellingCharacteristicParams,
  ) {
    super(semanticId);
    this.labellingCharacteristicOf = params?.labellingCharacteristicOf;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.hasLabellingDimension = params?.hasLabellingDimension;
    this.semanticType = LabellingCharacteristic.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:labellingCharacteristicOf", () => this.labellingCharacteristicOf);
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
    this.registerSemanticProperty("dfc-b:hasLabellingDimension", () => this.hasLabellingDimension);
  }
  static {
    SemanticObject.typeRegistry.set(LabellingCharacteristic.SEMANTIC_TYPE, LabellingCharacteristic);
  }
}
