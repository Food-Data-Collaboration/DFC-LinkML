// Class from DFC Business Ontology: #PhysicalCharacteristic
import { SemanticObject } from "../core/SemanticObject.js";
export class PhysicalCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:PhysicalCharacteristic";
    }
    physicalCharacteristicOf;
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    hasPhysicalDimension;
    constructor(semanticId, params) {
        super(semanticId);
        this.physicalCharacteristicOf = params?.physicalCharacteristicOf;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.hasPhysicalDimension = params?.hasPhysicalDimension;
        this.semanticType = PhysicalCharacteristic.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:physicalCharacteristicOf", () => this.physicalCharacteristicOf);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:hasPhysicalDimension", () => this.hasPhysicalDimension);
    }
    static {
        SemanticObject.typeRegistry.set(PhysicalCharacteristic.SEMANTIC_TYPE, PhysicalCharacteristic);
    }
}
