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
    this.registerSemanticProperty("dfc-b:Concept:certificate_of", () => this.certificateOf);
    this.registerSemanticProperty("dfc-b:Concept:claim_of", () => this.claimOf);
    this.registerSemanticProperty("dfc-b:Concept:container_information_of", () => this.containerInformationOf);
    this.registerSemanticProperty("dfc-b:Concept:geographical_origin_of", () => this.geographicalOriginOf);
    this.registerSemanticProperty("dfc-b:Concept:nature_origin_of", () => this.natureOriginOf);
    this.registerSemanticProperty("dfc-b:Concept:part_origin_of", () => this.partOriginOf);
    this.registerSemanticProperty("dfc-b:Concept:type_of", () => this.typeOf);
    this.registerSemanticProperty("dfc-b:Concept:date", () => this.date);
    this.registerSemanticProperty("dfc-b:Concept:description", () => this.description);
    this.registerSemanticProperty("dfc-b:Concept:name", () => this.name);
    this.registerSemanticProperty("dfc-b:Concept:characteristic_of", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:Concept:has_dimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(Concept.SEMANTIC_TYPE, Concept);
  }
}
