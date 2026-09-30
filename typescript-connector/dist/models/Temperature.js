import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue } from "./QuantitativeValue.js";
/**
 * A DFC `dfc-b:Temperature`, serialized with `@type: dfc-b:Temperature`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing` ->
 *   `QuantitativeValue` -> `Temperature`.
 * Own DFC properties: isTemperatureOf.
 */
export class Temperature extends QuantitativeValue {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Temperature";
    }
    /**
     * Serializes as `dfc-b:isTemperatureOf`.
     */
    isTemperatureOf;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.isTemperatureOf = params?.isTemperatureOf;
        this.semanticType = Temperature.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:isTemperatureOf", () => this.isTemperatureOf);
    }
    static {
        SemanticObject.typeRegistry.set(Temperature.SEMANTIC_TYPE, Temperature);
    }
}
