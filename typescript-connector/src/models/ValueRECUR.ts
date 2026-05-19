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
    this.registerSemanticProperty("dfc-b:Value_RECUR:byday", () => this.byday);
    this.registerSemanticProperty("dfc-b:Value_RECUR:bymonth", () => this.bymonth);
    this.registerSemanticProperty("dfc-b:Value_RECUR:freq", () => this.freq);
    this.registerSemanticProperty("dfc-b:Value_RECUR:interval", () => this.interval);
    this.registerSemanticProperty("dfc-b:Value_RECUR:date", () => this.date);
    this.registerSemanticProperty("dfc-b:Value_RECUR:description", () => this.description);
    this.registerSemanticProperty("dfc-b:Value_RECUR:name", () => this.name);
    this.registerSemanticProperty("dfc-b:Value_RECUR:characteristic_of", () => this.characteristicOf);
    this.registerSemanticProperty("dfc-b:Value_RECUR:has_dimension", () => this.hasDimension);
  }
  static {
    SemanticObject.typeRegistry.set(ValueRECUR.SEMANTIC_TYPE, ValueRECUR);
  }
}
