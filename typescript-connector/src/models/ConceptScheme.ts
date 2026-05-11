// Class from DFC Business Ontology: #ConceptScheme
import { SemanticObject } from "../core/SemanticObject.js";

export interface ConceptSchemeParams {
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
}
export class ConceptScheme extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:ConceptScheme";
  }

  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;

  constructor(
    semanticId: string,
    params?: ConceptSchemeParams,
  ) {
    super(semanticId);
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = ConceptScheme.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:ConceptScheme:date", () => this.date);
    this.registerSemanticProperty("dfc-b:ConceptScheme:description", () => this.description);
    this.registerSemanticProperty("dfc-b:ConceptScheme:name", () => this.name);
    this.registerSemanticProperty("dfc-b:ConceptScheme:characteristic_of", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:ConceptScheme:has_dimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(ConceptScheme.SEMANTIC_TYPE, ConceptScheme);
  }
}
