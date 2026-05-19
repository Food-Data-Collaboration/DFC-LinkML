// Class from DFC Business Ontology: #VirtualPlace
import { SemanticObject } from "../core/SemanticObject.js";
import { Place, type PlaceParams } from "./Place.js";

export interface VirtualPlaceParams extends PlaceParams {
  url?: string;
  websitePage?: string;
}
export class VirtualPlace extends Place {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:VirtualPlace";
  }

  url?: string;
  websitePage?: string;

  constructor(
    semanticId: string,
    params?: VirtualPlaceParams,
  ) {
    super(semanticId, params);
    this.url = params?.url;
    this.websitePage = params?.websitePage;
    this.semanticType = VirtualPlace.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:VirtualPlace:url", () => this.url);
    this.registerSemanticProperty("dfc-b:VirtualPlace:website_page", () => this.websitePage);
  }
  static {
    SemanticObject.typeRegistry.set(VirtualPlace.SEMANTIC_TYPE, VirtualPlace);
  }
}
