import { SemanticObject } from "../core/SemanticObject.js";
/**
 * A DFC `dfc-b:LabellingCharacteristic`, serialized with `@type:
 *   dfc-b:LabellingCharacteristic`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: labellingCharacteristicOf, date, description, name,
 *   characteristicOf, hasDimension, hasLabellingDimension.
 */
export class LabellingCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:LabellingCharacteristic";
    }
    /**
     * Serializes as `dfc-b:labellingCharacteristicOf`.
     */
    labellingCharacteristicOf;
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
     * Serializes as `dfc-b:hasLabellingDimension`.
     */
    hasLabellingDimension;
    constructor(semanticId, params) {
        super(semanticId);
        this.labellingCharacteristicOf = params?.labellingCharacteristicOf;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.hasLabellingDimension = params?.hasLabellingDimension;
        this.semanticType = LabellingCharacteristic.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:labellingCharacteristicOf", () => this.labellingCharacteristicOf);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:hasLabellingDimension", () => this.hasLabellingDimension);
    }
    static {
        SemanticObject.typeRegistry.set(LabellingCharacteristic.SEMANTIC_TYPE, LabellingCharacteristic);
    }
}
