import { SemanticObject } from "../core/SemanticObject.js";
import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";
import type { SaleSession } from "./SaleSession.js";

/**
 * Constructor parameters for {@link Place}.
 *
 * Own DFC properties: hosts.
 *
 * Inherited parameters come from {@link WhereSubjectParams}.
 */
export interface PlaceParams extends WhereSubjectParams {
  /**
   * All Sales Sessions that have been, are being or will be hosted at this
   *   location
   *
   * Serializes as `dfc-b:hosts`.
   */
  hosts?: (SaleSession | string)[];
}

/**
 * A DFC `dfc-b:Place`, serialized with `@type: dfc-b:Place`.
 * Class hierarchy: `Where_Subject` -> `Place`.
 * Own DFC properties: hosts.
 */
export class Place extends WhereSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Place";
  }

  /**
   * All Sales Sessions that have been, are being or will be hosted at this
   *   location
   *
   * Serializes as `dfc-b:hosts`.
   */
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
