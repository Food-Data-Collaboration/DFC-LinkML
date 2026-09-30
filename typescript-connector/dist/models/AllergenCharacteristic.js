import { SemanticObject } from "../core/SemanticObject.js";
/**
 * A DFC `dfc-b:AllergenCharacteristic`, serialized with `@type:
 *   dfc-b:AllergenCharacteristic`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: allergenCharacteristicOf, date, description, name,
 *   characteristicOf, hasDimension, hasAllergenDimension.
 */
export class AllergenCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:AllergenCharacteristic";
    }
    /**
     * Serializes as `dfc-b:allergenCharacteristicOf`.
     */
    allergenCharacteristicOf;
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
     * Serializes as `dfc-b:hasAllergenDimension`.
     */
    hasAllergenDimension;
    constructor(semanticId, params) {
        super(semanticId);
        this.allergenCharacteristicOf = params?.allergenCharacteristicOf;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.hasAllergenDimension = params?.hasAllergenDimension;
        this.semanticType = AllergenCharacteristic.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:allergenCharacteristicOf", () => this.allergenCharacteristicOf);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:hasAllergenDimension", () => this.hasAllergenDimension);
    }
    static {
        SemanticObject.typeRegistry.set(AllergenCharacteristic.SEMANTIC_TYPE, AllergenCharacteristic);
    }
}
