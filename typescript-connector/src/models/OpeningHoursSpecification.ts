import { SemanticObject } from "../core/SemanticObject.js";

/**
 * Constructor parameters for {@link OpeningHoursSpecification}.
 *
 * Own DFC properties: dayOfWeek, opens, closes, date, description, name,
 *   characteristicOf, hasDimension.
 */
export interface OpeningHoursSpecificationParams {
  /**
   * Serializes as `https://schema.org/dayOfWeek`.
   */
  dayOfWeek?: string;
  /**
   * Serializes as `https://schema.org/opens`.
   */
  opens?: string[];
  /**
   * Serializes as `dfc-b:closes`.
   */
  closes?: string[];
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
 * A DFC `dfc-b:OpeningHoursSpecification`, serialized with `@type:
 *   dfc-b:OpeningHoursSpecification`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: dayOfWeek, opens, closes, date, description, name,
 *   characteristicOf, hasDimension.
 */
export class OpeningHoursSpecification extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:OpeningHoursSpecification";
  }

  /**
   * Serializes as `https://schema.org/dayOfWeek`.
   */
  dayOfWeek?: string;
  /**
   * Serializes as `https://schema.org/opens`.
   */
  opens?: string[];
  /**
   * Serializes as `dfc-b:closes`.
   */
  closes?: string[];
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
    params?: OpeningHoursSpecificationParams,
  ) {
    super(semanticId);
    this.dayOfWeek = params?.dayOfWeek;
    this.opens = params?.opens;
    this.closes = params?.closes;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = OpeningHoursSpecification.SEMANTIC_TYPE;
    this.registerSemanticProperty("https://schema.org/dayOfWeek", () => this.dayOfWeek);
    this.registerSemanticProperty("https://schema.org/opens", () => this.opens);
    this.registerSemanticProperty("dfc-b:closes", () => this.closes);
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(OpeningHoursSpecification.SEMANTIC_TYPE, OpeningHoursSpecification);
  }
}
