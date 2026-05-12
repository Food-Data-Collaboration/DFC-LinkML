// Class from DFC Business Ontology: #LabellingCharacteristic
import { SemanticObject } from "../core/SemanticObject.js";
export class LabellingCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:LabellingCharacteristic";
    }
    hasLabellingDimension;
    labellingCharacteristicOf;
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    constructor(semanticId, params) {
        super(semanticId);
        this.hasLabellingDimension = params?.hasLabellingDimension;
        this.labellingCharacteristicOf = params?.labellingCharacteristicOf;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.semanticType = LabellingCharacteristic.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:LabellingCharacteristic:has_labelling_dimension", () => this.hasLabellingDimension);
        this.registerSemanticProperty("dfc-b:LabellingCharacteristic:labelling_characteristic_of", () => this.labellingCharacteristicOf);
        this.registerSemanticProperty("dfc-b:LabellingCharacteristic:date", () => this.date);
        this.registerSemanticProperty("dfc-b:LabellingCharacteristic:description", () => this.description);
        this.registerSemanticProperty("dfc-b:LabellingCharacteristic:name", () => this.name);
        this.registerSemanticProperty("dfc-b:LabellingCharacteristic:characteristic_of", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:LabellingCharacteristic:has_dimension", () => this.hasDimension);
    }
    static {
        SemanticObject.typeRegistry.set(LabellingCharacteristic.SEMANTIC_TYPE, LabellingCharacteristic);
    }
}
