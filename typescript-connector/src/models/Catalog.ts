import { SemanticObject } from "../core/SemanticObject.js";
import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";
import type { Organization } from "./Organization.js";

/**
 * Constructor parameters for {@link Catalog}.
 *
 * Own DFC properties: endDate, startDate, lists, maintainedBy.
 *
 * Inherited parameters come from {@link WhereSubjectParams}.
 */
export interface CatalogParams extends WhereSubjectParams {
  /**
   * The date/time that the Sales Session ends
   *
   * Serializes as `dfc-b:endDate`.
   */
  endDate?: string;
  /**
   * The date/time that the Sales Session starts
   *
   * Serializes as `dfc-b:startDate`.
   */
  startDate?: string;
  /**
   * All Items (which refer to a SuppliedProduct) that are part of the
   *   Catalog
   *
   * Serializes as `dfc-b:lists`.
   */
  lists?: string[];
  /**
   * The Enterprise that maintains the Catalog (may differ from the owner of
   *   the Products)
   *
   * Serializes as `dfc-b:maintainedBy`.
   */
  maintainedBy?: Organization | string;
}

/**
 * A DFC `dfc-b:Catalog`, serialized with `@type: dfc-b:Catalog`.
 * Class hierarchy: `Where_Subject` -> `Catalog`.
 * Own DFC properties: endDate, startDate, lists, maintainedBy.
 */
export class Catalog extends WhereSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Catalog";
  }

  /**
   * The date/time that the Sales Session ends
   *
   * Serializes as `dfc-b:endDate`.
   */
  endDate?: string;
  /**
   * The date/time that the Sales Session starts
   *
   * Serializes as `dfc-b:startDate`.
   */
  startDate?: string;
  /**
   * All Items (which refer to a SuppliedProduct) that are part of the
   *   Catalog
   *
   * Serializes as `dfc-b:lists`.
   */
  lists?: string[];
  /**
   * The Enterprise that maintains the Catalog (may differ from the owner of
   *   the Products)
   *
   * Serializes as `dfc-b:maintainedBy`.
   */
  maintainedBy?: Organization | string;

  constructor(
    semanticId: string,
    params?: CatalogParams,
  ) {
    super(semanticId, params);
    this.endDate = params?.endDate;
    this.startDate = params?.startDate;
    this.lists = params?.lists;
    this.maintainedBy = params?.maintainedBy;
    this.semanticType = Catalog.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:endDate", () => this.endDate);
    this.registerSemanticProperty("dfc-b:startDate", () => this.startDate);
    this.registerSemanticProperty("dfc-b:lists", () => this.lists);
    this.registerSemanticProperty("dfc-b:maintainedBy", () => this.maintainedBy);
  }
  static {
    SemanticObject.typeRegistry.set(Catalog.SEMANTIC_TYPE, Catalog);
  }
}
