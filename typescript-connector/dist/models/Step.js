// Class from DFC Business Ontology: #Step
import { SemanticObject } from "../core/SemanticObject.js";
import { WhereSubject } from "./WhereSubject.js";
export class Step extends WhereSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Step";
    }
    arrivalDate;
    duration;
    isStepOf;
    delivery;
    pickUp;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.arrivalDate = params?.arrivalDate;
        this.duration = params?.duration;
        this.isStepOf = params?.isStepOf;
        this.delivery = params?.delivery;
        this.pickUp = params?.pickUp;
        this.semanticType = Step.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Step:arrival_date", () => this.arrivalDate);
        this.registerSemanticProperty("dfc-b:Step:duration", () => this.duration);
        this.registerSemanticProperty("dfc-b:Step:is_step_of", () => this.isStepOf);
        this.registerSemanticProperty("dfc-b:Step:delivery", () => this.delivery);
        this.registerSemanticProperty("dfc-b:Step:pick_up", () => this.pickUp);
    }
    static {
        SemanticObject.typeRegistry.set(Step.SEMANTIC_TYPE, Step);
    }
}
