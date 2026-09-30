import { SemanticObject } from "../core/SemanticObject.js";

/**
 * Constructor parameters for {@link Individual}.
 *
 * Own DFC properties: date, description, name, characteristicOf,
 *   hasDimension.
 */
export interface IndividualParams {
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
}

/**
 * A DFC `dfc-b:Individual`, serialized with `@type: dfc-b:Individual`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: date, description, name, characteristicOf,
 *   hasDimension.
 */
export class Individual extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Individual";
  }

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

  constructor(
    semanticId: string,
    params?: IndividualParams,
  ) {
    super(semanticId);
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = Individual.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(Individual.SEMANTIC_TYPE, Individual);
  }
}
