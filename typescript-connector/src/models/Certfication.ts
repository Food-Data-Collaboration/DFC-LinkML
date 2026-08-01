// Class from DFC Business Ontology: #Certfication
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";

export interface CertficationParams extends WhatSubjectParams {
  certiferReference?: string;
  certificationScore?: string;
  operatorId?: string;
  certifies?: string[];
}
export class Certfication extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Certfication";
  }

  certiferReference?: string;
  certificationScore?: string;
  operatorId?: string;
  certifies?: string[];

  constructor(
    semanticId: string,
    params?: CertficationParams,
  ) {
    super(semanticId, params);
    this.certiferReference = params?.certiferReference;
    this.certificationScore = params?.certificationScore;
    this.operatorId = params?.operatorId;
    this.certifies = params?.certifies;
    this.semanticType = Certfication.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:certiferReference", () => this.certiferReference);
    this.registerSemanticProperty("dfc-b:certificationScore", () => this.certificationScore);
    this.registerSemanticProperty("dfc-b:operatorId", () => this.operatorId);
    this.registerSemanticProperty("dfc-b:certifies", () => this.certifies);
  }
  static {
    SemanticObject.typeRegistry.set(Certfication.SEMANTIC_TYPE, Certfication);
  }
}
