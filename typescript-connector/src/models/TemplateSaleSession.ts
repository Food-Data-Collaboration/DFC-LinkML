// Class from DFC Business Ontology: #TemplateSaleSession
import { SemanticObject } from "../core/SemanticObject.js";

export interface TemplateSaleSessionParams {
  hostedAt?: string;
  isTemplateSaleSessionOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
}
export class TemplateSaleSession extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:TemplateSaleSession";
  }

  hostedAt?: string;
  isTemplateSaleSessionOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;

  constructor(
    semanticId: string,
    params?: TemplateSaleSessionParams,
  ) {
    super(semanticId);
    this.hostedAt = params?.hostedAt;
    this.isTemplateSaleSessionOf = params?.isTemplateSaleSessionOf;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = TemplateSaleSession.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:hostedAt", () => this.hostedAt);
    this.registerSemanticProperty("dfc-b:isTemplateSaleSessionOf", () => this.isTemplateSaleSessionOf);
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(TemplateSaleSession.SEMANTIC_TYPE, TemplateSaleSession);
  }
}
