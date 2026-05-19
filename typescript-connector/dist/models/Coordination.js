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
        this.registerSemanticProperty("dfc-b:Coordination:margin_percent", () => this.marginPercent);
        this.registerSemanticProperty("dfc-b:Coordination:coordinated_by", () => this.coordinatedBy);
        this.registerSemanticProperty("dfc-b:Coordination:has_object", () => this.hasObject);
        this.registerSemanticProperty("dfc-b:Coordination:date", () => this.date);
        this.registerSemanticProperty("dfc-b:Coordination:description", () => this.description);
        this.registerSemanticProperty("dfc-b:Coordination:name", () => this.name);
        this.registerSemanticProperty("dfc-b:Coordination:characteristic_of", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:Coordination:has_dimension", () => this.hasDimension);
    }
    static {
        SemanticObject.typeRegistry.set(Coordination.SEMANTIC_TYPE, Coordination);
    }
}
