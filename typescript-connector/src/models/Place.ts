// Class from DFC Business Ontology: #Place
import { SemanticObject } from "../core/SemanticObject.js";
import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";
import type { SaleSession } from "./SaleSession.js";

export interface PlaceParams extends WhereSubjectParams {
  hosts?: (SaleSession | string)[];
}
export class Place extends WhereSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Place";
  }

  hosts?: (SaleSession | string)[];

  constructor(
    semanticId: string,
    params?: PlaceParams,
  ) {
    super(semanticId, params);
    this.hosts = params?.hosts;
    this.semanticType = Place.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:hosts", () => this.hosts);
  }
  static {
    SemanticObject.typeRegistry.set(Place.SEMANTIC_TYPE, Place);
  }
}
