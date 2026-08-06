// Class from DFC Business Ontology: #PaymentMethod
import { SemanticObject } from "../core/SemanticObject.js";
import { HowSubject, type HowSubjectParams } from "./HowSubject.js";

export interface PaymentMethodParams extends HowSubjectParams {
  paymentMethodProvider?: string;
  paymentMethodType?: string;
  hasPrice?: string;
  paidWith?: string;
}
export class PaymentMethod extends HowSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:PaymentMethod";
  }

  paymentMethodProvider?: string;
  paymentMethodType?: string;
  hasPrice?: string;
  paidWith?: string;

  constructor(
    semanticId: string,
    params?: PaymentMethodParams,
  ) {
    super(semanticId, params);
    this.paymentMethodProvider = params?.paymentMethodProvider;
    this.paymentMethodType = params?.paymentMethodType;
    this.hasPrice = params?.hasPrice;
    this.paidWith = params?.paidWith;
    this.semanticType = PaymentMethod.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:paymentMethodProvider", () => this.paymentMethodProvider);
    this.registerSemanticProperty("dfc-b:paymentMethodType", () => this.paymentMethodType);
    this.registerSemanticProperty("dfc-b:hasPrice", () => this.hasPrice);
    this.registerSemanticProperty("dfc-b:paidWith", () => this.paidWith);
  }
  static {
    SemanticObject.typeRegistry.set(PaymentMethod.SEMANTIC_TYPE, PaymentMethod);
  }
}
