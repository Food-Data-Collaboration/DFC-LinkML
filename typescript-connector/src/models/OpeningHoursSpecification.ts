// Class from DFC Business Ontology: #OpeningHoursSpecification
import { SemanticObject } from "../core/SemanticObject.js";

export interface OpeningHoursSpecificationParams {
  dayOfWeek?: string;
  opens?: string[];
  closes?: string[];
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
}
export class OpeningHoursSpecification extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:OpeningHoursSpecification";
  }

  dayOfWeek?: string;
  opens?: string[];
  closes?: string[];
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
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
    this.registerSemanticProperty("dfc-b:OpeningHoursSpecification:day_of_week", () => this.dayOfWeek);
    this.registerSemanticProperty("dfc-b:OpeningHoursSpecification:opens", () => this.opens);
    this.registerSemanticProperty("dfc-b:OpeningHoursSpecification:closes", () => this.closes);
    this.registerSemanticProperty("dfc-b:OpeningHoursSpecification:date", () => this.date);
    this.registerSemanticProperty("dfc-b:OpeningHoursSpecification:description", () => this.description);
    this.registerSemanticProperty("dfc-b:OpeningHoursSpecification:name", () => this.name);
    this.registerSemanticProperty("dfc-b:OpeningHoursSpecification:characteristic_of", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:OpeningHoursSpecification:has_dimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(OpeningHoursSpecification.SEMANTIC_TYPE, OpeningHoursSpecification);
  }
}
