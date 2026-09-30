import { SemanticObject } from "../core/SemanticObject.js";
import { DefinedProduct } from "./DefinedProduct.js";
/**
 * A DFC `dfc-b:SuppliedProduct`, serialized with `@type:
 *   dfc-b:SuppliedProduct`.
 * Class hierarchy: `What_Subject` -> `DefinedProduct` -> `SuppliedProduct`.
 * Own DFC properties: availabilityTime, deliveryCondition, frozen,
 *   refrigerated, totalTheoriticalStock, hasTemperature, producedBy,
 *   industrializes, referenceOf, suppliedBy.
 */
export class SuppliedProduct extends DefinedProduct {
    static get SEMANTIC_TYPE() {
        return "dfc-b:SuppliedProduct";
    }
    /**
     * Lead time for supplying the product.
     *
     * Serializes as `dfc-b:availabilityTime`.
     */
    availabilityTime;
    /**
     * Any conditions of carriage/transport required by the product (e.g.
     *   Fragile, do not stack)
     *
     * Serializes as `dfc-b:deliveryCondition`.
     */
    deliveryCondition;
    /**
     * Defines if the parent class supports or requires refrigeration to a
     *   safe temperature to maintain frozen products.
     *
     * Serializes as `dfc-b:frozen`.
     */
    frozen;
    /**
     * Defines if the parent class supports or requires refrigeration to a
     *   safe temperature to maintain refrigerated products (typically 0-5°C).
     *
     * Serializes as `dfc-b:refrigerated`.
     */
    refrigerated;
    /**
     * Serializes as `dfc-b:totalTheoriticalStock`.
     */
    totalTheoriticalStock;
    /**
     * The maximum storage temperature required by the product (e.g. +5º C )
     *
     * Serializes as `dfc-b:hasTemperature`.
     */
    hasTemperature;
    /**
     * Link to another SuppleidProduct that is produced by this Product
     *
     * Serializes as `dfc-b:producedBy`.
     */
    producedBy;
    /**
     * The Technical Product that is created to industrialize this Supplied
     *   Product
     *
     * Serializes as `dfc-b:industrializes`.
     */
    industrializes;
    /**
     * The Localized Product that is created in reference to this Supplied
     *   Product
     *
     * Serializes as `dfc-b:referenceOf`.
     */
    referenceOf;
    /**
     * The Enterprise that supplies the Product
     *
     * Serializes as `dfc-b:suppliedBy`.
     */
    suppliedBy;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.availabilityTime = params?.availabilityTime;
        this.deliveryCondition = params?.deliveryCondition;
        this.frozen = params?.frozen;
        this.refrigerated = params?.refrigerated;
        this.totalTheoriticalStock = params?.totalTheoriticalStock;
        this.hasTemperature = params?.hasTemperature;
        this.producedBy = params?.producedBy;
        this.industrializes = params?.industrializes;
        this.referenceOf = params?.referenceOf;
        this.suppliedBy = params?.suppliedBy;
        this.semanticType = SuppliedProduct.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:availabilityTime", () => this.availabilityTime);
        this.registerSemanticProperty("dfc-b:deliveryCondition", () => this.deliveryCondition);
        this.registerSemanticProperty("dfc-b:frozen", () => this.frozen);
        this.registerSemanticProperty("dfc-b:refrigerated", () => this.refrigerated);
        this.registerSemanticProperty("dfc-b:totalTheoriticalStock", () => this.totalTheoriticalStock);
        this.registerSemanticProperty("dfc-b:hasTemperature", () => this.hasTemperature);
        this.registerSemanticProperty("dfc-b:producedBy", () => this.producedBy);
        this.registerSemanticProperty("dfc-b:industrializes", () => this.industrializes);
        this.registerSemanticProperty("dfc-b:referenceOf", () => this.referenceOf);
        this.registerSemanticProperty("dfc-b:suppliedBy", () => this.suppliedBy);
    }
    static {
        SemanticObject.typeRegistry.set(SuppliedProduct.SEMANTIC_TYPE, SuppliedProduct);
    }
}
