// Class from DFC Business Ontology: #Route
import { SemanticObject } from "../core/SemanticObject.js";
import { WhereSubject } from "./WhereSubject.js";
export class Route extends WhereSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Route";
    }
    hasStep;
    useVehicle;
    hasGeoJsonFeature;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.hasStep = params?.hasStep;
        this.useVehicle = params?.useVehicle;
        this.hasGeoJsonFeature = params?.hasGeoJsonFeature;
        this.semanticType = Route.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Route:has_step", () => this.hasStep);
        this.registerSemanticProperty("dfc-b:Route:use_vehicle", () => this.useVehicle);
        this.registerSemanticProperty("dfc-b:Route:has_geo_json_feature", () => this.hasGeoJsonFeature);
    }
    static {
        SemanticObject.typeRegistry.set(Route.SEMANTIC_TYPE, Route);
    }
}
