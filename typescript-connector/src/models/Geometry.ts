// Class from DFC Business Ontology: #Geometry
import { SemanticObject } from "../core/SemanticObject.js";

export interface GeometryParams {
  coordinates?: string[];
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
}
export class Geometry extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Geometry";
  }

  coordinates?: string[];
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;

  constructor(
    semanticId: string,
    params?: GeometryParams,
  ) {
    super(semanticId);
    this.coordinates = params?.coordinates;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = Geometry.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:Geometry:coordinates", () => this.coordinates);
    this.registerSemanticProperty("dfc-b:Geometry:date", () => this.date);
    this.registerSemanticProperty("dfc-b:Geometry:description", () => this.description);
    this.registerSemanticProperty("dfc-b:Geometry:name", () => this.name);
    this.registerSemanticProperty("dfc-b:Geometry:characteristic_of", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:Geometry:has_dimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(Geometry.SEMANTIC_TYPE, Geometry);
  }
}
