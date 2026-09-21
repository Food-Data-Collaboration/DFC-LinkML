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
