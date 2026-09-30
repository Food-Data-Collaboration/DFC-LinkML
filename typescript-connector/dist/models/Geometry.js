import { SemanticObject } from "../core/SemanticObject.js";
/**
 * A DFC `dfc-b:Geometry`, serialized with `@type: dfc-b:Geometry`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: coordinates, date, description, name,
 *   characteristicOf, hasDimension.
 */
export class Geometry extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Geometry";
    }
    /**
     * Serializes as `https://purl.org/geojson/vocab#coordinates`.
     */
    coordinates;
    /**
     * Serializes as `dfc-b:date`.
     */
    date;
    /**
     * Serializes as `dfc-b:description`.
     */
    description;
    /**
     * Name of the Enterprise
     *
     * Serializes as `dfc-b:name`.
     */
    name;
    /**
     * Serializes as `dfc-b:characteristicOf`.
     */
    characteristicOf;
    /**
     * Serializes as `dfc-b:hasDimension`.
     */
    hasDimension;
    constructor(semanticId, params) {
        super(semanticId);
        this.coordinates = params?.coordinates;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.semanticType = Geometry.SEMANTIC_TYPE;
        this.registerSemanticProperty("https://purl.org/geojson/vocab#coordinates", () => this.coordinates);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
    }
    static {
        SemanticObject.typeRegistry.set(Geometry.SEMANTIC_TYPE, Geometry);
    }
}
