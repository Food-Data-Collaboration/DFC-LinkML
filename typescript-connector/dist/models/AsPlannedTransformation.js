// Class from DFC Business Ontology: #AsPlannedTransformation
import { SemanticObject } from "../core/SemanticObject.js";
import { Transformation } from "./Transformation.js";
export class AsPlannedTransformation extends Transformation {
    static get SEMANTIC_TYPE() {
        return "dfc-b:AsPlannedTransformation";
    }
    hasInput;
    hasOutput;
    hasTransformationType;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.hasInput = params?.hasInput;
        this.hasOutput = params?.hasOutput;
        this.hasTransformationType = params?.hasTransformationType;
        this.semanticType = AsPlannedTransformation.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:AsPlannedTransformation:has_input", () => this.hasInput);
        this.registerSemanticProperty("dfc-b:AsPlannedTransformation:has_output", () => this.hasOutput);
        this.registerSemanticProperty("dfc-b:AsPlannedTransformation:has_transformation_type", () => this.hasTransformationType);
    }
    static {
        SemanticObject.typeRegistry.set(AsPlannedTransformation.SEMANTIC_TYPE, AsPlannedTransformation);
    }
}
