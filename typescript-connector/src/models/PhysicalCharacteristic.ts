import { SemanticObject } from "../core/SemanticObject.js";
import type { Concept } from "./Concept.js";

/**
 * Constructor parameters for {@link PhysicalCharacteristic}.
 *
 * Own DFC properties: physicalCharacteristicOf, date, description, name,
 *   characteristicOf, hasDimension, hasPhysicalDimension.
 */
export interface PhysicalCharacteristicParams {
  /**
   * Serializes as `dfc-b:physicalCharacteristicOf`.
   */
  physicalCharacteristicOf?: string;
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
   * Serializes as `dfc-b:hasPhysicalDimension`.
   */
  hasPhysicalDimension?: Concept | string;
}

/**
 * A DFC `dfc-b:PhysicalCharacteristic`, serialized with `@type:
 *   dfc-b:PhysicalCharacteristic`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: physicalCharacteristicOf, date, description, name,
 *   characteristicOf, hasDimension, hasPhysicalDimension.
 */
export class PhysicalCharacteristic extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:PhysicalCharacteristic";
  }

  /**
   * Serializes as `dfc-b:physicalCharacteristicOf`.
   */
  physicalCharacteristicOf?: string;
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
   * Serializes as `dfc-b:hasPhysicalDimension`.
   */
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
