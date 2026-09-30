import { SemanticObject } from "../core/SemanticObject.js";
import { Transformation } from "./Transformation.js";
/**
 * A DFC `dfc-b:AsPlannedLocalTransformation`, serialized with `@type:
 *   dfc-b:AsPlannedLocalTransformation`.
 * Class hierarchy: `How_Subject` -> `Transformation` ->
 *   `AsPlannedLocalTransformation`.
 * Own DFC properties: cost, endDate, startDate, hasInput, hasOutput,
 *   transformedBy.
 */
export class AsPlannedLocalTransformation extends Transformation {
    static get SEMANTIC_TYPE() {
        return "dfc-b:AsPlannedLocalTransformation";
    }
    /**
     * Serializes as `dfc-b:cost`.
     */
    cost;
    /**
     * The date/time that the Sales Session ends
     *
     * Serializes as `dfc-b:endDate`.
     */
    endDate;
    /**
     * The date/time that the Sales Session starts
     *
     * Serializes as `dfc-b:startDate`.
     */
    startDate;
    /**
     * The PlannedConsumptionFlow that is the input of the
     *   PlannedTransformation
     *
     * Serializes as `dfc-b:hasInput`.
     */
    hasInput;
    /**
     * The PlannedProductionFlow that is the output of the
     *   PlannedTransformation
     *
     * Serializes as `dfc-b:hasOutput`.
     */
    hasOutput;
    /**
     * Serializes as `dfc-b:transformedBy`.
     */
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
