import { SemanticObject } from "../core/SemanticObject.js";
/**
 * A DFC `dfc-b:ConsumptionFlow`, serialized with `@type:
 *   dfc-b:ConsumptionFlow`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: quantity, consumes, inputOf, date, description, name,
 *   characteristicOf, hasDimension, hasQuantity.
 */
export class ConsumptionFlow extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:ConsumptionFlow";
    }
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:quantity`.
     */
    quantity;
    /**
     * The product consumed by the Transformation
     *
     * Serializes as `dfc-b:consumes`.
     */
    consumes;
    /**
     * The transformation the consumed product is inputed into
     *
     * Serializes as `dfc-b:inputOf`.
     */
    inputOf;
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
        this.consumes = params?.consumes;
        this.inputOf = params?.inputOf;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.hasQuantity = params?.hasQuantity;
        this.semanticType = ConsumptionFlow.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:quantity", () => this.quantity);
        this.registerSemanticProperty("dfc-b:consumes", () => this.consumes);
        this.registerSemanticProperty("dfc-b:inputOf", () => this.inputOf);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
    }
    static {
        SemanticObject.typeRegistry.set(ConsumptionFlow.SEMANTIC_TYPE, ConsumptionFlow);
    }
}
