// Class from DFC Business Ontology: #DFC_DitributedRepresentation
import { SemanticObject } from "../core/SemanticObject.js";

export interface DitributedRepresentationParams {
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
}
export class DitributedRepresentation extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:DFC_DitributedRepresentation";
  }

  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;

  constructor(
    semanticId: string,
    params?: DitributedRepresentationParams,
  ) {
    super(semanticId);
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = DitributedRepresentation.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:DFC_DitributedRepresentation:date", () => this.date);
    this.registerSemanticProperty("dfc-b:DFC_DitributedRepresentation:description", () => this.description);
    this.registerSemanticProperty("dfc-b:DFC_DitributedRepresentation:name", () => this.name);
    this.registerSemanticProperty("dfc-b:DFC_DitributedRepresentation:characteristic_of", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:DFC_DitributedRepresentation:has_dimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(DitributedRepresentation.SEMANTIC_TYPE, DitributedRepresentation);
  }
}
