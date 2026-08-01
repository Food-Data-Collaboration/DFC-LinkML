// Class from DFC Business Ontology: #AsPlannedLocalTransformation
import { SemanticObject } from "../core/SemanticObject.js";
import { Transformation } from "./Transformation.js";
export class AsPlannedLocalTransformation extends Transformation {
    static get SEMANTIC_TYPE() {
        return "dfc-b:AsPlannedLocalTransformation";
    }
    cost;
    endDate;
    startDate;
    hasInput;
    hasOutput;
    transformedBy;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.cost = params?.cost;
        this.endDate = params?.endDate;
        this.startDate = params?.startDate;
        this.hasInput = params?.hasInput;
        this.hasOutput = params?.hasOutput;
        this.transformedBy = params?.transformedBy;
        this.semanticType = AsPlannedLocalTransformation.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:cost", () => this.cost);
        this.registerSemanticProperty("dfc-b:endDate", () => this.endDate);
        this.registerSemanticProperty("dfc-b:startDate", () => this.startDate);
        this.registerSemanticProperty("dfc-b:hasInput", () => this.hasInput);
        this.registerSemanticProperty("dfc-b:hasOutput", () => this.hasOutput);
        this.registerSemanticProperty("dfc-b:transformedBy", () => this.transformedBy);
    }
    static {
        SemanticObject.typeRegistry.set(AsPlannedLocalTransformation.SEMANTIC_TYPE, AsPlannedLocalTransformation);
    }
}
