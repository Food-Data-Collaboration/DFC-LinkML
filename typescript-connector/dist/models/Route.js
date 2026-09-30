import { SemanticObject } from "../core/SemanticObject.js";
import { WhereSubject } from "./WhereSubject.js";
/**
 * A DFC `dfc-b:Route`, serialized with `@type: dfc-b:Route`.
 * Class hierarchy: `Where_Subject` -> `Route`.
 * Own DFC properties: hasStep, useVehicle, hasGeoJsonFeature.
 */
export class Route extends WhereSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Route";
    }
    /**
     * Serializes as `dfc-b:hasStep`.
     */
    hasStep;
    /**
     * Serializes as `dfc-b:useVehicle`.
     */
    useVehicle;
    /**
     * Serializes as `dfc-b:hasGeoJsonFeature`.
     */
    hasGeoJsonFeature;
    constructor(semanticId, params) {
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
