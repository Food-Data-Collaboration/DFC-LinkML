// Class from DFC Business Ontology: #Transaction
import { SemanticObject } from "../core/SemanticObject.js";
import { HowSubject } from "./HowSubject.js";
export class Transaction extends HowSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Transaction";
    }
    invoiceNumber;
    quantity;
    concerns;
    from;
    hasPrice;
    to;
    hasQuantity;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.invoiceNumber = params?.invoiceNumber;
        this.quantity = params?.quantity;
        this.concerns = params?.concerns;
        this.from = params?.from;
        this.hasPrice = params?.hasPrice;
        this.to = params?.to;
        this.hasQuantity = params?.hasQuantity;
        this.semanticType = Transaction.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Transaction:invoice_number", () => this.invoiceNumber);
        this.registerSemanticProperty("dfc-b:Transaction:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:Transaction:concerns", () => this.concerns);
        this.registerSemanticProperty("dfc-b:Transaction:from", () => this.from);
        this.registerSemanticProperty("dfc-b:Transaction:has_price", () => this.hasPrice);
        this.registerSemanticProperty("dfc-b:Transaction:to", () => this.to);
        this.registerSemanticProperty("dfc-b:Transaction:has_quantity", () => this.hasQuantity);
    }
    static {
        SemanticObject.typeRegistry.set(Transaction.SEMANTIC_TYPE, Transaction);
    }
}
