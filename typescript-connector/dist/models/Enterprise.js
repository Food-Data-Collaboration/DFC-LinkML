import { SemanticObject } from "../core/SemanticObject.js";
import { Organization } from "./Organization.js";
/**
 * A DFC `dfc-b:Enterprise`, serialized with `@type: dfc-b:Enterprise`.
 * Class hierarchy: `Who_Subject` -> `Agent` -> `Organization` ->
 *   `Enterprise`.
 */
export class Enterprise extends Organization {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Enterprise";
    }
    constructor(semanticId, params) {
        super(semanticId, params);
        this.semanticType = Enterprise.SEMANTIC_TYPE;
    }
    static {
        SemanticObject.typeRegistry.set(Enterprise.SEMANTIC_TYPE, Enterprise);
    }
}
