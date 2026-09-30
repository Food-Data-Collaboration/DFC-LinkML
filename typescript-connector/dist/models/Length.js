import { SemanticObject } from "../core/SemanticObject.js";
import { QuantitativeValue } from "./QuantitativeValue.js";
/**
 * A DFC `dfc-b:Length`, serialized with `@type: dfc-b:Length`.
 * Class hierarchy: `DFC_DitributedRepresentation` -> `RepresentedThing` ->
 *   `QuantitativeValue` -> `Length`.
 */
export class Length extends QuantitativeValue {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Length";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = Length.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(Length.SEMANTIC_TYPE, Length);
    }
}
