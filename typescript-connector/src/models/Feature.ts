// Class from DFC Business Ontology: #Feature
import { SemanticObject } from "../core/SemanticObject.js";
import type { Geometry } from "./Geometry.js";
import type { Properties } from "./Properties.js";

export interface FeatureParams {
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  geometry?: Geometry;
  properties?: Properties[];
}
export class Feature extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Feature";
  }

  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  geometry?: Geometry;
  properties?: Properties[];

  constructor(
    semanticId: string,
    params?: FeatureParams,
  ) {
    super(semanticId);
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.geometry = params?.geometry;
    this.properties = params?.properties;
    this.semanticType = Feature.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:Feature:date", () => this.date);
    this.registerSemanticProperty("dfc-b:Feature:description", () => this.description);
    this.registerSemanticProperty("dfc-b:Feature:name", () => this.name);
    this.registerSemanticProperty("dfc-b:Feature:characteristic_of", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:Feature:has_dimension", () => this.hasDimension);
    this.registerSemanticProperty("dfc-b:Feature:geometry", () => this.geometry);
    this.registerSemanticProperty("dfc-b:Feature:properties", () => this.properties);
  }
  static {
    SemanticObject.typeRegistry.set(Feature.SEMANTIC_TYPE, Feature);
  }
}
