// Class from DFC Business Ontology: #Temperature
import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue } from "./QuantitativeValue.js";
export class Temperature extends QuantitativeValue {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Temperature";
    }
    isTemperatureOf;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.isTemperatureOf = params?.isTemperatureOf;
        this.semanticType = Temperature.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Temperature:is_temperature_of", () => this.isTemperatureOf);
    }
    static {
        SemanticObject.typeRegistry.set(Temperature.SEMANTIC_TYPE, Temperature);
    }
}
