import { SemanticObject } from "../core/SemanticObject.js";
/**
 * A DFC `dfc-b:TemplateSaleSession`, serialized with `@type:
 *   dfc-b:TemplateSaleSession`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: isTemplateSaleSessionOf, date, description, name,
 *   characteristicOf, hasDimension, hostedAt.
 */
export class TemplateSaleSession extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:TemplateSaleSession";
    }
    /**
     * Serializes as `dfc-b:isTemplateSaleSessionOf`.
     */
    isTemplateSaleSessionOf;
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
     * The location the session is hosted at. This could be a physical (e.g. a
     *   shop or market) or virtual place (e.g. online store).
     *
     * Serializes as `dfc-b:hostedAt`.
     */
    hostedAt;
    constructor(semanticId, params) {
        super(semanticId);
        this.isTemplateSaleSessionOf = params?.isTemplateSaleSessionOf;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.hostedAt = params?.hostedAt;
        this.semanticType = TemplateSaleSession.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:isTemplateSaleSessionOf", () => this.isTemplateSaleSessionOf);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
        this.registerSemanticProperty("dfc-b:hostedAt", () => this.hostedAt);
    }
    static {
        SemanticObject.typeRegistry.set(TemplateSaleSession.SEMANTIC_TYPE, TemplateSaleSession);
    }
}
