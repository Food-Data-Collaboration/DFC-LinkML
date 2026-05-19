// Class from DFC Business Ontology: #PhysicalCharacteristic
import { SemanticObject } from "../core/SemanticObject.js";
export class PhysicalCharacteristic extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:PhysicalCharacteristic";
    }
    hasPhysicalDimension;
    physicalCharacteristicOf;
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    constructor(semanticId, params) {
        super(semanticId);
        this.hasPhysicalDimension = params?.hasPhysicalDimension;
        this.physicalCharacteristicOf = params?.physicalCharacteristicOf;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.semanticType = PhysicalCharacteristic.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:PhysicalCharacteristic:has_physical_dimension", () => this.hasPhysicalDimension);
        this.registerSemanticProperty("dfc-b:PhysicalCharacteristic:physical_characteristic_of", () => this.physicalCharacteristicOf);
        this.registerSemanticProperty("dfc-b:PhysicalCharacteristic:date", () => this.date);
        this.registerSemanticProperty("dfc-b:PhysicalCharacteristic:description", () => this.description);
        this.registerSemanticProperty("dfc-b:PhysicalCharacteristic:name", () => this.name);
        this.registerSemanticProperty("dfc-b:PhysicalCharacteristic:characteristic_of", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:PhysicalCharacteristic:has_dimension", () => this.hasDimension);
    }
    static {
        SemanticObject.typeRegistry.set(PhysicalCharacteristic.SEMANTIC_TYPE, PhysicalCharacteristic);
    }
}
