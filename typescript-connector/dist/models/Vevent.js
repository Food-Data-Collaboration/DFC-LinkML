// Class from DFC Business Ontology: #Vevent
import { SemanticObject } from "../core/SemanticObject.js";
export class Vevent extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Vevent";
    }
    dtend;
    dtstart;
    date;
    description;
    name;
    characteristicOf;
    hasDimension;
    rrule;
    constructor(semanticId, params) {
        super(semanticId);
        this.dtend = params?.dtend;
        this.dtstart = params?.dtstart;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.rrule = params?.rrule;
        this.semanticType = Vevent.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Vevent:dtend", () => this.dtend);
        this.registerSemanticProperty("dfc-b:Vevent:dtstart", () => this.dtstart);
        this.registerSemanticProperty("dfc-b:Vevent:date", () => this.date);
        this.registerSemanticProperty("dfc-b:Vevent:description", () => this.description);
        this.registerSemanticProperty("dfc-b:Vevent:name", () => this.name);
        this.registerSemanticProperty("dfc-b:Vevent:characteristic_of", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:Vevent:has_dimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:Vevent:rrule", () => this.rrule);
    }
    static {
        SemanticObject.typeRegistry.set(Vevent.SEMANTIC_TYPE, Vevent);
    }
}
