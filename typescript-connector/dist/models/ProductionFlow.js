import { SemanticObject } from "../core/SemanticObject.js";
/**
 * A DFC `dfc-b:ProductionFlow`, serialized with `@type:
 *   dfc-b:ProductionFlow`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: quantity, outputOf, produces, date, description,
 *   name, characteristicOf, hasDimension, hasQuantity.
 */
export class ProductionFlow extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:ProductionFlow";
    }
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity;
    /**
     * The transformation the produced product is outputed from
     *
     * Serializes as `dfc-b:outputOf`.
     */
    outputOf;
    /**
     * Link to another SuppleidProduct that is produced from this Product
     *
     * Serializes as `dfc-b:produces`.
     */
    produces;
    /**
     * Serializes as `dfc-b:date`.
     */
    date;
    /**
     * Serializes as `dfc-b:description`.
     */
    description;
    /**
     * Name of the Enterprise
     *
     * Serializes as `dfc-b:name`.
     */
    name;
    /**
     * Serializes as `dfc-b:characteristicOf`.
     */
    characteristicOf;
    /**
     * Serializes as `dfc-b:hasDimension`.
     */
    hasDimension;
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity;
    constructor(semanticId, params) {
        super(semanticId);
        this.quantity = params?.quantity;
        this.outputOf = params?.outputOf;
        this.produces = params?.produces;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.hasQuantity = params?.hasQuantity;
        this.semanticType = ProductionFlow.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:outputOf", () => this.outputOf);
        this.registerSemanticProperty("dfc-b:produces", () => this.produces);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
    }
    static {
        SemanticObject.typeRegistry.set(ProductionFlow.SEMANTIC_TYPE, ProductionFlow);
    }
}
