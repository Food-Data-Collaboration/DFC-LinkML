// Class from DFC Business Ontology: #AsRealizedTransformation
import { SemanticObject } from "../core/SemanticObject.js";
import { Transformation } from "./Transformation.js";
export class AsRealizedTransformation extends Transformation {
    static get SEMANTIC_TYPE() {
        return "dfc-b:AsRealizedTransformation";
    }
    cost;
    endDate;
    startDate;
    hasInput;
    hasOutput;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.cost = params?.cost;
        this.endDate = params?.endDate;
        this.startDate = params?.startDate;
        this.hasInput = params?.hasInput;
        this.hasOutput = params?.hasOutput;
        this.semanticType = AsRealizedTransformation.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:cost", () => this.cost);
        this.registerSemanticProperty("dfc-b:endDate", () => this.endDate);
        this.registerSemanticProperty("dfc-b:startDate", () => this.startDate);
        this.registerSemanticProperty("dfc-b:hasInput", () => this.hasInput);
        this.registerSemanticProperty("dfc-b:hasOutput", () => this.hasOutput);
    }
    static {
        SemanticObject.typeRegistry.set(AsRealizedTransformation.SEMANTIC_TYPE, AsRealizedTransformation);
    }
}
