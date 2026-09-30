import { SemanticObject } from "../core/SemanticObject.js";
import { WhoSubject } from "./WhoSubject.js";
/**
 * A DFC `dfc-b:CustomerCategory`, serialized with `@type:
 *   dfc-b:CustomerCategory`.
 * Class hierarchy: `Who_Subject` -> `CustomerCategory`.
 * Own DFC properties: hasMember, hasOffer, definedBy.
 */
export class CustomerCategory extends WhoSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:CustomerCategory";
    }
    /**
     * Serializes as `dfc-b:hasMember`.
     */
    hasMember;
    /**
     * Serializes as `dfc-b:hasOffer`.
     */
    hasOffer;
    /**
     * Determines which Enterprise has defined the CustomerCategory
     *
     * Serializes as `dfc-b:definedBy`.
     */
    definedBy;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.hasMember = params?.hasMember;
        this.hasOffer = params?.hasOffer;
        this.definedBy = params?.definedBy;
        this.semanticType = CustomerCategory.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:hasMember", () => this.hasMember);
        this.registerSemanticProperty("dfc-b:hasOffer", () => this.hasOffer);
        this.registerSemanticProperty("dfc-b:definedBy", () => this.definedBy);
    }
    static {
        SemanticObject.typeRegistry.set(CustomerCategory.SEMANTIC_TYPE, CustomerCategory);
    }
}
