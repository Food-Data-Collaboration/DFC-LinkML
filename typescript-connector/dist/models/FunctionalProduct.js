// Class from DFC Business Ontology: #FunctionalProduct
import { SemanticObject } from "../core/SemanticObject.js";
import { DefinedProduct } from "./DefinedProduct.js";
export class FunctionalProduct extends DefinedProduct {
    static get SEMANTIC_TYPE() {
        return "dfc-b:FunctionalProduct";
    }
    requestedBy;
    satisfiedBy;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.requestedBy = params?.requestedBy;
        this.satisfiedBy = params?.satisfiedBy;
        this.semanticType = FunctionalProduct.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:FunctionalProduct:requested_by", () => this.requestedBy);
        this.registerSemanticProperty("dfc-b:FunctionalProduct:satisfied_by", () => this.satisfiedBy);
    }
    static {
        SemanticObject.typeRegistry.set(FunctionalProduct.SEMANTIC_TYPE, FunctionalProduct);
    }
}
