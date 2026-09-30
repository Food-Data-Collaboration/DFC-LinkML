import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue } from "./QuantitativeValue.js";
/**
 * A DFC `dfc-b:Weight`, serialized with `@type: dfc-b:Weight`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing` ->
 *   `QuantitativeValue` -> `Weight`.
 */
export class Weight extends QuantitativeValue {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Weight";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = Weight.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(Weight.SEMANTIC_TYPE, Weight);
    }
}
