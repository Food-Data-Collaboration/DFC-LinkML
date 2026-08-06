// Class from DFC Business Ontology: #Coordination
import { SemanticObject } from "../core/SemanticObject.js";
export class Coordination extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Coordination";
    }
    marginPercent;
    coordinatedBy;
    hasObject;
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    constructor(semanticId, params) {
        super(semanticId);
        this.marginPercent = params?.marginPercent;
        this.coordinatedBy = params?.coordinatedBy;
        this.hasObject = params?.hasObject;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.semanticType = Coordination.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:marginPercent", () => this.marginPercent);
        this.registerSemanticProperty("dfc-b:coordinatedBy", () => this.coordinatedBy);
        this.registerSemanticProperty("dfc-b:hasObject", () => this.hasObject);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
    }
    static {
        SemanticObject.typeRegistry.set(Coordination.SEMANTIC_TYPE, Coordination);
    }
}
