// Class from DFC Business Ontology: #TechnicalProduct
import { SemanticObject } from "../core/SemanticObject.js";
import { DefinedProduct } from "./DefinedProduct.js";
export class TechnicalProduct extends DefinedProduct {
    static get SEMANTIC_TYPE() {
        return "dfc-b:TechnicalProduct";
    }
    industrializedBy;
    proposedBy;
    satisfies;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.industrializedBy = params?.industrializedBy;
        this.proposedBy = params?.proposedBy;
        this.satisfies = params?.satisfies;
        this.semanticType = TechnicalProduct.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:TechnicalProduct:industrialized_by", () => this.industrializedBy);
        this.registerSemanticProperty("dfc-b:TechnicalProduct:proposed_by", () => this.proposedBy);
        this.registerSemanticProperty("dfc-b:TechnicalProduct:satisfies", () => this.satisfies);
    }
    static {
        SemanticObject.typeRegistry.set(TechnicalProduct.SEMANTIC_TYPE, TechnicalProduct);
    }
}
