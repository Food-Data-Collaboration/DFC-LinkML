// Class from DFC Business Ontology: #PhoneNumber
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";

export interface PhoneNumberParams extends WhatSubjectParams {
  countryCode?: string;
  phoneNumber?: string;
  phoneNumberOf?: string;
}
export class PhoneNumber extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:PhoneNumber";
  }

  countryCode?: string;
  phoneNumber?: string;
  phoneNumberOf?: string;

  constructor(
    semanticId: string,
    params?: PhoneNumberParams,
  ) {
    super(semanticId, params);
    this.countryCode = params?.countryCode;
    this.phoneNumber = params?.phoneNumber;
    this.phoneNumberOf = params?.phoneNumberOf;
    this.semanticType = PhoneNumber.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:PhoneNumber:country_code", () => this.countryCode);
    this.registerSemanticProperty("dfc-b:PhoneNumber:phone_number", () => this.phoneNumber);
    this.registerSemanticProperty("dfc-b:PhoneNumber:phone_number_of", () => this.phoneNumberOf);
  }
  static {
    SemanticObject.typeRegistry.set(PhoneNumber.SEMANTIC_TYPE, PhoneNumber);
  }
}
