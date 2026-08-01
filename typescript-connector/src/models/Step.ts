// Class from DFC Business Ontology: #Step
import { SemanticObject } from "../core/SemanticObject.js";
import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";
import type { Shipment } from "./Shipment.js";

export interface StepParams extends WhereSubjectParams {
  arrivalDate?: string;
  duration?: string;
  isStepOf?: string;
  delivery?: Shipment;
  pickUp?: Shipment;
}
export class Step extends WhereSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Step";
  }

  arrivalDate?: string;
  duration?: string;
  isStepOf?: string;
  delivery?: Shipment;
  pickUp?: Shipment;

  constructor(
    semanticId: string,
    params?: StepParams,
  ) {
    super(semanticId, params);
    this.arrivalDate = params?.arrivalDate;
    this.duration = params?.duration;
    this.isStepOf = params?.isStepOf;
    this.delivery = params?.delivery;
    this.pickUp = params?.pickUp;
    this.semanticType = Step.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:arrivalDate", () => this.arrivalDate);
    this.registerSemanticProperty("dfc-b:duration", () => this.duration);
    this.registerSemanticProperty("dfc-b:isStepOf", () => this.isStepOf);
    this.registerSemanticProperty("dfc-b:delivery", () => this.delivery);
    this.registerSemanticProperty("dfc-b:pickUp", () => this.pickUp);
  }
  static {
    SemanticObject.typeRegistry.set(Step.SEMANTIC_TYPE, Step);
  }
}
