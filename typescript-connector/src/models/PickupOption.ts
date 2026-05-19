// Class from DFC Business Ontology: #PickupOption
import { SemanticObject } from "../core/SemanticObject.js";
import { ShippingOption, type ShippingOptionParams } from "./ShippingOption.js";

export interface PickupOptionParams extends ShippingOptionParams {
  pickedUpAt?: string;
  uses?: string[];
}
export class PickupOption extends ShippingOption {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:PickupOption";
  }

  pickedUpAt?: string;
  uses?: string[];

  constructor(
    semanticId: string,
    params?: PickupOptionParams,
  ) {
    super(semanticId, params);
    this.pickedUpAt = params?.pickedUpAt;
    this.uses = params?.uses;
    this.semanticType = PickupOption.SEMANTIC_TYPE;
    this.registerSemanticProperty("dfc-b:PickupOption:picked_up_at", () => this.pickedUpAt);
    this.registerSemanticProperty("dfc-b:PickupOption:uses", () => this.uses);
  }
  static {
    SemanticObject.typeRegistry.set(PickupOption.SEMANTIC_TYPE, PickupOption);
  }
}
