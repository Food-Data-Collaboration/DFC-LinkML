// Class from DFC Business Ontology: #CustomerCategory
import { SemanticObject } from "../core/SemanticObject.js";
import { WhoSubject } from "./WhoSubject.js";
export class CustomerCategory extends WhoSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:CustomerCategory";
    }
    hasMember;
    hasOffer;
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
