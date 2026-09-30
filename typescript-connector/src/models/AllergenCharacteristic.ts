import { SemanticObject } from "../core/SemanticObject.js";
import type { Concept } from "./Concept.js";

/**
 * Constructor parameters for {@link AllergenCharacteristic}.
 *
 * Own DFC properties: allergenCharacteristicOf, date, description, name,
 *   characteristicOf, hasDimension, hasAllergenDimension.
 */
export interface AllergenCharacteristicParams {
  /**
   * Serializes as `dfc-b:allergenCharacteristicOf`.
   */
  allergenCharacteristicOf?: string;
  /**
   * Serializes as `dfc-b:date`.
   */
  date?: string;
  /**
   * Serializes as `dfc-b:description`.
   */
  description?: string;
  /**
   * Name of the Enterprise
   *
   * Serializes as `dfc-b:name`.
   */
  name?: string;
  /**
   * Serializes as `dfc-b:characteristicOf`.
   */
  characteristicOf?: string;
  /**
   * Serializes as `dfc-b:hasDimension`.
   */
  hasDimension?: string;
  /**
   * Serializes as `dfc-b:hasAllergenDimension`.
   */
  hasAllergenDimension?: Concept | string;
}

/**
 * A DFC `dfc-b:AllergenCharacteristic`, serialized with `@type:
 *   dfc-b:AllergenCharacteristic`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: allergenCharacteristicOf, date, description, name,
 *   characteristicOf, hasDimension, hasAllergenDimension.
 */
export class AllergenCharacteristic extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:AllergenCharacteristic";
  }

  /**
   * Serializes as `dfc-b:allergenCharacteristicOf`.
   */
  allergenCharacteristicOf?: string;
  /**
   * Serializes as `dfc-b:date`.
   */
  date?: string;
  /**
   * Serializes as `dfc-b:description`.
   */
  description?: string;
  /**
   * Name of the Enterprise
   *
   * Serializes as `dfc-b:name`.
   */
  name?: string;
  /**
   * Serializes as `dfc-b:characteristicOf`.
   */
  characteristicOf?: string;
  /**
   * Serializes as `dfc-b:hasDimension`.
   */
  hasDimension?: string;
  /**
   * Serializes as `dfc-b:hasAllergenDimension`.
   */
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
