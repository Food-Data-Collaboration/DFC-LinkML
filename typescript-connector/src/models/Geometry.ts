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
    this.registerSemanticProperty("https://purl.org/geojson/vocab#coordinates", () => this.coordinates);
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(Geometry.SEMANTIC_TYPE, Geometry);
  }
}
