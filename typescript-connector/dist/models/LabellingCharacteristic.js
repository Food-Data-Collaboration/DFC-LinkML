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
        this.registerSemanticProperty("dfc-b:hasLabellingDimension", () => this.hasLabellingDimension);
        this.registerSemanticProperty("dfc-b:labellingCharacteristicOf", () => this.labellingCharacteristicOf);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
    }
    static {
        SemanticObject.typeRegistry.set(LabellingCharacteristic.SEMANTIC_TYPE, LabellingCharacteristic);
    }
}
