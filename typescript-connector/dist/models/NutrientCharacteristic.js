// Class from DFC Business Ontology: #NutrientCharacteristic
import { SemanticObject } from "../core/SemanticObject.js";
export class NutrientCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:NutrientCharacteristic";
    }
    nutrientCharacteristicOf;
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    hasNutrientDimension;
    constructor(semanticId, params) {
        super(semanticId);
        this.nutrientCharacteristicOf = params?.nutrientCharacteristicOf;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.hasNutrientDimension = params?.hasNutrientDimension;
        this.semanticType = NutrientCharacteristic.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:nutrientCharacteristicOf", () => this.nutrientCharacteristicOf);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:hasNutrientDimension", () => this.hasNutrientDimension);
    }
    static {
        SemanticObject.typeRegistry.set(NutrientCharacteristic.SEMANTIC_TYPE, NutrientCharacteristic);
    }
}
