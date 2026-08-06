// Class from DFC Business Ontology: #Concept
import { SemanticObject } from "../core/SemanticObject.js";

export interface ConceptParams {
  certificateOf?: string;
  claimOf?: string;
  containerInformationOf?: string;
  geographicalOriginOf?: string;
  natureOriginOf?: string;
  partOriginOf?: string;
  typeOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
}
export class Concept extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Concept";
  }

  certificateOf?: string;
  claimOf?: string;
  containerInformationOf?: string;
  geographicalOriginOf?: string;
  natureOriginOf?: string;
  partOriginOf?: string;
  typeOf?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;

  constructor(
    semanticId: string,
    params?: ConceptParams,
  ) {
    super(semanticId);
    this.certificateOf = params?.certificateOf;
    this.claimOf = params?.claimOf;
    this.containerInformationOf = params?.containerInformationOf;
    this.geographicalOriginOf = params?.geographicalOriginOf;
    this.natureOriginOf = params?.natureOriginOf;
    this.partOriginOf = params?.partOriginOf;
    this.typeOf = params?.typeOf;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = Concept.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:certificateOf", () => this.certificateOf);
    this.registerSemanticProperty("dfc-b:claimOf", () => this.claimOf);
    this.registerSemanticProperty("dfc-b:containerInformationOf", () => this.containerInformationOf);
    this.registerSemanticProperty("dfc-b:geographicalOriginOf", () => this.geographicalOriginOf);
    this.registerSemanticProperty("dfc-b:natureOriginOf", () => this.natureOriginOf);
    this.registerSemanticProperty("dfc-b:partOriginOf", () => this.partOriginOf);
    this.registerSemanticProperty("dfc-b:typeOf", () => this.typeOf);
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(Concept.SEMANTIC_TYPE, Concept);
  }
}
