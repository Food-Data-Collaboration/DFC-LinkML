import { SemanticObject } from "../core/SemanticObject.js";

/**
 * Constructor parameters for {@link Properties}.
 *
 * Own DFC properties: date, description, name, characteristicOf,
 *   hasDimension.
 */
export interface PropertiesParams {
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
 * A DFC `dfc-b:Properties`, serialized with `@type: dfc-b:Properties`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: date, description, name, characteristicOf,
 *   hasDimension.
 */
export class Properties extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Properties";
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
    params?: PropertiesParams,
  ) {
    super(semanticId);
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = Properties.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(Properties.SEMANTIC_TYPE, Properties);
  }
}
