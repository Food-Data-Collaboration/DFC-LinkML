// Class from DFC Business Ontology: #CustomerCategory
import { SemanticObject } from "../core/SemanticObject.js";
import { WhoSubject } from "./WhoSubject.js";
export class CustomerCategory extends WhoSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:CustomerCategory";
    }
    definedBy;
    hasMember;
    hasOffer;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.definedBy = params?.definedBy;
        this.hasMember = params?.hasMember;
        this.hasOffer = params?.hasOffer;
        this.semanticType = CustomerCategory.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:CustomerCategory:defined_by", () => this.definedBy);
        this.registerSemanticProperty("dfc-b:CustomerCategory:has_member", () => this.hasMember);
        this.registerSemanticProperty("dfc-b:CustomerCategory:has_offer", () => this.hasOffer);
    }
    static {
        SemanticObject.typeRegistry.set(CustomerCategory.SEMANTIC_TYPE, CustomerCategory);
    }
}
