// Class from DFC Business Ontology: #Vevent
import { SemanticObject } from "../core/SemanticObject.js";
import type { ValueRECUR } from "./ValueRECUR.js";

export interface VeventParams {
  dtend?: string;
  dtstart?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  rrule?: ValueRECUR;
}
export class Vevent extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Vevent";
  }

  dtend?: string;
  dtstart?: string;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
  rrule?: ValueRECUR;

  constructor(
    semanticId: string,
    params?: VeventParams,
  ) {
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
    this.registerSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#dtend", () => this.dtend);
    this.registerSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#dtstart", () => this.dtstart);
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
    this.registerSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#rrule", () => this.rrule);
  }
  static {
    SemanticObject.typeRegistry.set(Vevent.SEMANTIC_TYPE, Vevent);
  }
}
