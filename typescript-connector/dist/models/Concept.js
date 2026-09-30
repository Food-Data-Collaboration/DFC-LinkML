import { SemanticObject } from "../core/SemanticObject.js";
/**
 * A DFC `dfc-b:Concept`, serialized with `@type: dfc-b:Concept`.
 * Root of its hierarchy; extends the connector `SemanticObject` base.
 * Own DFC properties: certificateOf, claimOf, containerInformationOf,
 *   geographicalOriginOf, natureOriginOf, partOriginOf, typeOf, date,
 *   description, name, characteristicOf, hasDimension.
 */
export class Concept extends SemanticObject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Concept";
    }
    /**
     * Serializes as `dfc-b:certificateOf`.
     */
    certificateOf;
    /**
     * Serializes as `dfc-b:claimOf`.
     */
    claimOf;
    /**
     * Serializes as `dfc-b:containerInformationOf`.
     */
    containerInformationOf;
    /**
     * Serializes as `dfc-b:geographicalOriginOf`.
     */
    geographicalOriginOf;
    /**
     * Serializes as `dfc-b:natureOriginOf`.
     */
    natureOriginOf;
    /**
     * Serializes as `dfc-b:partOriginOf`.
     */
    partOriginOf;
    /**
     * Serializes as `dfc-b:typeOf`.
     */
    typeOf;
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
    constructor(semanticId, params) {
        super(semanticId);
        this.certificateOf = params?.certificateOf;
        this.claimOf = params?.claimOf;
        this.containerInformationOf = params?.containerInformationOf;
        this.geographicalOriginOf = params?.geographicalOriginOf;
        this.natureOriginOf = params?.natureOriginOf;
        this.partOriginOf = params?.partOriginOf;
        this.typeOf = params?.typeOf;
        this.date = params?.date;
        this.description = params?.description;
        this.name = params?.name;
        this.characteristicOf = params?.characteristicOf;
        this.hasDimension = params?.hasDimension;
        this.semanticType = Concept.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:certificateOf", () => this.certificateOf);
        this.registerSemanticProperty("dfc-b:claimOf", () => this.claimOf);
        this.registerSemanticProperty("dfc-b:containerInformationOf", () => this.containerInformationOf);
        this.registerSemanticProperty("dfc-b:geographicalOriginOf", () => this.geographicalOriginOf);
        this.registerSemanticProperty("dfc-b:natureOriginOf", () => this.natureOriginOf);
        this.registerSemanticProperty("dfc-b:partOriginOf", () => this.partOriginOf);
        this.registerSemanticProperty("dfc-b:typeOf", () => this.typeOf);
        this.registerSemanticProperty("dfc-b:date", () => this.date);
        this.registerSemanticProperty("dfc-b:description", () => this.description);
        this.registerSemanticProperty("dfc-b:name", () => this.name);
        this.registerSemanticProperty("dfc-b:characteristicOf", () => this.characteristicOf);
        this.registerSemanticProperty("dfc-b:hasDimension", () => this.hasDimension);
    }
    static {
        SemanticObject.typeRegistry.set(Concept.SEMANTIC_TYPE, Concept);
    }
}
