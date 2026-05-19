// Class from DFC Business Ontology: #NutrientCharacteristic
import { SemanticObject } from "../core/SemanticObject.js";

export interface NutrientCharacteristicParams {
  hasNutrientDimension?: string;
  nutrientCharacteristicOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
}
export class NutrientCharacteristic extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:NutrientCharacteristic";
  }

  hasNutrientDimension?: string;
  nutrientCharacteristicOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;

  constructor(
    semanticId: string,
    params?: NutrientCharacteristicParams,
  ) {
    super(semanticId);
    this.hasNutrientDimension = params?.hasNutrientDimension;
    this.nutrientCharacteristicOf = params?.nutrientCharacteristicOf;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = NutrientCharacteristic.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:NutrientCharacteristic:has_nutrient_dimension", () => this.hasNutrientDimension);
    this.registerSemanticProperty("dfc-b:NutrientCharacteristic:nutrient_characteristic_of", () => this.nutrientCharacteristicOf);
    this.registerSemanticProperty("dfc-b:NutrientCharacteristic:date", () => this.date);
    this.registerSemanticProperty("dfc-b:NutrientCharacteristic:description", () => this.description);
    this.registerSemanticProperty("dfc-b:NutrientCharacteristic:name", () => this.name);
    this.registerSemanticProperty("dfc-b:NutrientCharacteristic:characteristic_of", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:NutrientCharacteristic:has_dimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(NutrientCharacteristic.SEMANTIC_TYPE, NutrientCharacteristic);
  }
}
