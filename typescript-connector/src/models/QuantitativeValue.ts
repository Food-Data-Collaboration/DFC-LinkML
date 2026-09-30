import { SemanticObject } from "../core/SemanticObject.js";
import { RepresentedThing, type RepresentedThingParams } from "./RepresentedThing.js";

/**
 * Constructor parameters for {@link QuantitativeValue}.
 *
 * Own DFC properties: value, hasUnit.
 *
 * Inherited parameters come from {@link RepresentedThingParams}.
 */
export interface QuantitativeValueParams extends RepresentedThingParams {
  /**
   * Serializes as `dfc-b:value`.
   */
  value?: number;
  /**
   * A Currency Unit. listed within the skos:concept of CurrencyUnit in the
   *   measures.rdf
   *
   * Serializes as `dfc-b:hasUnit`.
   */
  hasUnit?: string;
}

/**
 * A DFC `dfc-b:QuantitativeValue`, serialized with `@type:
 *   dfc-b:QuantitativeValue`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing` ->
 *   `QuantitativeValue`.
 * Own DFC properties: value, hasUnit.
 */
export class QuantitativeValue extends RepresentedThing {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:QuantitativeValue";
  }

  /**
   * Serializes as `dfc-b:value`.
   */
  value?: number;
  /**
   * A Currency Unit. listed within the skos:concept of CurrencyUnit in the
   *   measures.rdf
   *
   * Serializes as `dfc-b:hasUnit`.
   */
  hasUnit?: string;

  constructor(
    semanticId: string,
    params?: QuantitativeValueParams,
  ) {
    super(semanticId, params);
    this.value = params?.value;
    this.hasUnit = params?.hasUnit;
    this.semanticType = QuantitativeValue.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:value", () => this.value);
    this.registerSemanticProperty("dfc-b:hasUnit", () => this.hasUnit);
  }
  static {
    SemanticObject.typeRegistry.set(QuantitativeValue.SEMANTIC_TYPE, QuantitativeValue);
  }
}
