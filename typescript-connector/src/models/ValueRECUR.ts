// Class from DFC Business Ontology: #Value_RECUR
import { SemanticObject } from "../core/SemanticObject.js";

export interface ValueRECURParams {
  byday?: string;
  bymonth?: string;
  freq?: string;
  interval?: number;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;
}
export class ValueRECUR extends SemanticObject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:Value_RECUR";
  }

  byday?: string;
  bymonth?: string;
  freq?: string;
  interval?: number;
  date?: string;
  description?: string;
  name?: string;
  characteristicOf?: string;
  hasDimension?: string;

  constructor(
    semanticId: string,
    params?: ValueRECURParams,
  ) {
    super(semanticId);
    this.byday = params?.byday;
    this.bymonth = params?.bymonth;
    this.freq = params?.freq;
    this.interval = params?.interval;
    this.date = params?.date;
    this.description = params?.description;
    this.name = params?.name;
    this.characteristicOf = params?.characteristicOf;
    this.hasDimension = params?.hasDimension;
    this.semanticType = ValueRECUR.SEMANTIC_TYPE;
    this.registerSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#byday", () => this.byday);
    this.registerSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#bymonth", () => this.bymonth);
    this.registerSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#freq", () => this.freq);
    this.registerSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#interval", () => this.interval);
    this.registerSemanticProperty("dfc-b:date", () => this.date);
    this.registerSemanticProperty("dfc-b:description", () => this.description);
    this.registerSemanticProperty("dfc-b:name", () => this.name);
    this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(ValueRECUR.SEMANTIC_TYPE, ValueRECUR);
  }
}
