// Class from DFC Business Ontology: #ShippingOption
import { SemanticObject } from "../core/SemanticObject.js";
import { HowSubject } from "./HowSubject.js";
export class ShippingOption extends HowSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:ShippingOption";
    }
    endDate;
    fee;
    quantity;
    startDate;
    optionOf;
    selectedBy;
    hasQuantity;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.endDate = params?.endDate;
        this.fee = params?.fee;
        this.quantity = params?.quantity;
        this.startDate = params?.startDate;
        this.optionOf = params?.optionOf;
        this.selectedBy = params?.selectedBy;
        this.hasQuantity = params?.hasQuantity;
        this.semanticType = ShippingOption.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:ShippingOption:end_date", () => this.endDate);
        this.registerSemanticProperty("dfc-b:ShippingOption:fee", () => this.fee);
        this.registerSemanticProperty("dfc-b:ShippingOption:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:ShippingOption:start_date", () => this.startDate);
        this.registerSemanticProperty("dfc-b:ShippingOption:option_of", () => this.optionOf);
        this.registerSemanticProperty("dfc-b:ShippingOption:selected_by", () => this.selectedBy);
        this.registerSemanticProperty("dfc-b:ShippingOption:has_quantity", () => this.hasQuantity);
    }
    static {
        SemanticObject.typeRegistry.set(ShippingOption.SEMANTIC_TYPE, ShippingOption);
    }
}
