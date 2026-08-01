// Class from DFC Business Ontology: #AllergenCharacteristic
import { SemanticObject } from "../core/SemanticObject.js";
export class AllergenCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:AllergenCharacteristic";
    }
    allergenCharacteristicOf;
    hasAllergenDimension;
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    constructor(semanticId, params) {
        super(semanticId);
        this.allergenCharacteristicOf = params?.allergenCharacteristicOf;
        this.hasAllergenDimension = params?.hasAllergenDimension;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.semanticType = AllergenCharacteristic.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:allergenCharacteristicOf", () => this.allergenCharacteristicOf);
        this.registerSemanticProperty("dfc-b:hasAllergenDimension", () => this.hasAllergenDimension);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
    }
    static {
        SemanticObject.typeRegistry.set(AllergenCharacteristic.SEMANTIC_TYPE, AllergenCharacteristic);
    }
}
