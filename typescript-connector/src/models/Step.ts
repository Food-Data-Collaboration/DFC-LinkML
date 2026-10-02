import { SemanticObject } from "../core/SemanticObject.js";
import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";
import type { Shipment } from "./Shipment.js";

/**
 * Constructor parameters for {@link Step}.
 *
 * Own DFC properties: arrivalDate, duration, isStepOf, delivery, pickUp.
 *
 * Inherited parameters come from {@link WhereSubjectParams}.
 */
export interface StepParams extends WhereSubjectParams {
  /**
   * Serializes as `dfc-b:arrivalDate`.
   */
  arrivalDate?: string;
  /**
   * Serializes as `dfc-b:duration`.
   */
  duration?: string;
  /**
   * Serializes as `dfc-b:isStepOf`.
   */
  isStepOf?: string[];
  /**
   * Serializes as `dfc-b:delivery`.
   */
  delivery?: (Shipment | string)[];
  /**
   * Serializes as `dfc-b:pickUp`.
   */
  pickUp?: (Shipment | string)[];
}

/**
 * A DFC `dfc-b:Step`, serialized with `@type: dfc-b:Step`.
 * Class hierarchy: `Where_Subject` -> `Step`.
 * Own DFC properties: arrivalDate, duration, isStepOf, delivery, pickUp.
 */
export class Step extends WhereSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Step";
  }

  /**
   * Serializes as `dfc-b:arrivalDate`.
   */
  arrivalDate?: string;
  /**
   * Serializes as `dfc-b:duration`.
   */
  duration?: string;
  /**
   * Serializes as `dfc-b:isStepOf`.
   */
  isStepOf?: string[];
  /**
   * Serializes as `dfc-b:delivery`.
   */
  delivery?: (Shipment | string)[];
  /**
   * Serializes as `dfc-b:pickUp`.
   */
  pickUp?: (Shipment | string)[];

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
