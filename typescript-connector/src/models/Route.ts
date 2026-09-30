import { SemanticObject } from "../core/SemanticObject.js";
import { WhereSubject, type WhereSubjectParams } from "./WhereSubject.js";
import type { Feature } from "./Feature.js";

/**
 * Constructor parameters for {@link Route}.
 *
 * Own DFC properties: hasStep, useVehicle, hasGeoJsonFeature.
 *
 * Inherited parameters come from {@link WhereSubjectParams}.
 */
export interface RouteParams extends WhereSubjectParams {
  /**
   * Serializes as `dfc-b:hasStep`.
   */
  hasStep?: string;
  /**
   * Serializes as `dfc-b:useVehicle`.
   */
  useVehicle?: string;
  /**
   * Serializes as `dfc-b:hasGeoJsonFeature`.
   */
  hasGeoJsonFeature?: Feature | string;
}

/**
 * A DFC `dfc-b:Route`, serialized with `@type: dfc-b:Route`.
 * Class hierarchy: `Where_Subject` -> `Route`.
 * Own DFC properties: hasStep, useVehicle, hasGeoJsonFeature.
 */
export class Route extends WhereSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Route";
  }

  /**
   * Serializes as `dfc-b:hasStep`.
   */
  hasStep?: string;
  /**
   * Serializes as `dfc-b:useVehicle`.
   */
  useVehicle?: string;
  /**
   * Serializes as `dfc-b:hasGeoJsonFeature`.
   */
  hasGeoJsonFeature?: Feature | string;

  constructor(
    semanticId: string,
    params?: RouteParams,
  ) {
    super(semanticId, params);
    this.hasStep = params?.hasStep;
    this.useVehicle = params?.useVehicle;
    this.hasGeoJsonFeature = params?.hasGeoJsonFeature;
    this.semanticType = Route.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:hasStep", () => this.hasStep);
    this.registerSemanticProperty("dfc-b:useVehicle", () => this.useVehicle);
    this.registerSemanticProperty("dfc-b:hasGeoJsonFeature", () => this.hasGeoJsonFeature);
  }
  static {
    SemanticObject.typeRegistry.set(Route.SEMANTIC_TYPE, Route);
  }
}
