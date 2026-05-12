// Class from DFC Business Ontology: #Catalog
import { SemanticObject } from "../core/SemanticObject.js";
import { WhereSubject } from "./WhereSubject.js";
export class Catalog extends WhereSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Catalog";
    }
    endDate;
    startDate;
    lists;
    maintainedBy;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.endDate = params?.endDate;
        this.startDate = params?.startDate;
        this.lists = params?.lists;
        this.maintainedBy = params?.maintainedBy;
        this.semanticType = Catalog.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Catalog:end_date", () => this.endDate);
        this.registerSemanticProperty("dfc-b:Catalog:start_date", () => this.startDate);
        this.registerSemanticProperty("dfc-b:Catalog:lists", () => this.lists);
        this.registerSemanticProperty("dfc-b:Catalog:maintained_by", () => this.maintainedBy);
    }
    static {
        SemanticObject.typeRegistry.set(Catalog.SEMANTIC_TYPE, Catalog);
    }
}
