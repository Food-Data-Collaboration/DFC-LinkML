import { SemanticObject } from "../core/SemanticObject.js";
/**
 * A DFC `dfc-b:Feature`, serialized with `@type: dfc-b:Feature`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: date, description, name, characteristicOf,
 *   hasDimension, geometry, properties.
 */
export class Feature extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Feature";
    }
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
    /**
     * Serializes as `https://purl.org/geojson/vocab#geometry`.
     */
    geometry;
    /**
     * Serializes as `https://purl.org/geojson/vocab#properties`.
     */
    properties;
    constructor(semanticId, params) {
        super(semanticId);
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.geometry = params?.geometry;
        this.properties = params?.properties;
        this.semanticType = Feature.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
        this.registerSemanticProperty("https://purl.org/geojson/vocab#geometry", () => this.geometry);
        this.registerSemanticProperty("https://purl.org/geojson/vocab#properties", () => this.properties);
    }
    static {
        SemanticObject.typeRegistry.set(Feature.SEMANTIC_TYPE, Feature);
    }
}
