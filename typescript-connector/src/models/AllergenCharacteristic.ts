// Class from DFC Business Ontology: #AllergenCharacteristic
import { SemanticObject } from "../core/SemanticObject.js";
import type { Concept } from "./Concept.js";

export interface AllergenCharacteristicParams {
  allergenCharacteristicOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  hasAllergenDimension?: Concept | string;
}
export class AllergenCharacteristic extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:AllergenCharacteristic";
  }

  allergenCharacteristicOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  hasAllergenDimension?: Concept | string;

  constructor(
    semanticId: string,
    params?: AllergenCharacteristicParams,
  ) {
    super(semanticId);
    this.allergenCharacteristicOf = params?.allergenCharacteristicOf;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.hasAllergenDimension = params?.hasAllergenDimension;
    this.semanticType = AllergenCharacteristic.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:allergenCharacteristicOf", () => this.allergenCharacteristicOf);
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
    this.registerSemanticProperty("dfc-b:hasAllergenDimension", () => this.hasAllergenDimension);
  }
  static {
    SemanticObject.typeRegistry.set(AllergenCharacteristic.SEMANTIC_TYPE, AllergenCharacteristic);
  }
}
