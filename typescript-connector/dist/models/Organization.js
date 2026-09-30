import { SemanticObject } from "../core/SemanticObject.js";
import { Agent } from "./Agent.js";
/**
 * A DFC `dfc-b:Organization`, serialized with `@type: dfc-b:Organization`.
 * Class hierarchy: `Who_Subject` -> `Agent` -> `Organization`.
 * Own DFC properties: vatNumber, vatStatus, enterpriseId,
 *   hasTemplateSaleSession, isCertifiedBy, affiliates, defines,
 *   hasMainContact, maintains, manages, proposes, supplies, transforms.
 */
export class Organization extends Agent {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Organization";
    }
    /**
     * Any Tax Registration Number that is applicable to the Enterprise, in
     *   the jurisdiction the Enterprise is operating in.
     *
     * Serializes as `dfc-b:VATnumber`.
     */
    vatNumber;
    /**
     * Indicates whether the Enterprise charges VAT or not
     *
     * Serializes as `dfc-b:VATstatus`.
     */
    vatStatus;
    /**
     * Serializes as `dfc-b:enterpriseID`.
     */
    enterpriseId;
    /**
     * Serializes as `dfc-b:hasTemplateSaleSession`.
     */
    hasTemplateSaleSession;
    /**
     * Serializes as `dfc-b:isCertifiedBy`.
     */
    isCertifiedBy;
    /**
     * Enterprises that the Person is affliated to
     *
     * Serializes as `dfc-b:affiliates`.
     */
    affiliates;
    /**
     * Defines any/all categories of Customer utilised by the Enterprise for
     *   segmentation (primarily for pricing, potentially also for marketing)
     *
     * Serializes as `dfc-b:defines`.
     */
    defines;
    /**
     * The Person, if any, who is a principal contact for this physical
     *   location
     *
     * Serializes as `dfc-b:hasMainContact`.
     */
    hasMainContact;
    /**
     * A set of reference of defined products
     *
     * Serializes as `dfc-b:maintains`.
     */
    maintains;
    /**
     * A reference of a defined product in a catalog managed by an enterprise
     *
     * Serializes as `dfc-b:manages`.
     */
    manages;
    /**
     * All TechnicalProducts proposed by the Enterprise
     *
     * Serializes as `dfc-b:proposes`.
     */
    proposes;
    /**
     * All Products supplied by the Enterprise
     *
     * Serializes as `dfc-b:supplies`.
     */
    supplies;
    /**
     * Any PlannedLocalTransformations owned by the Enterprise
     *
     * Serializes as `dfc-b:transforms`.
     */
    transforms;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.vatNumber = params?.vatNumber;
        this.vatStatus = params?.vatStatus;
        this.enterpriseId = params?.enterpriseId;
        this.hasTemplateSaleSession = params?.hasTemplateSaleSession;
        this.isCertifiedBy = params?.isCertifiedBy;
        this.affiliates = params?.affiliates;
        this.defines = params?.defines;
        this.hasMainContact = params?.hasMainContact;
        this.maintains = params?.maintains;
        this.manages = params?.manages;
        this.proposes = params?.proposes;
        this.supplies = params?.supplies;
        this.transforms = params?.transforms;
        this.semanticType = Organization.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:VATnumber", () => this.vatNumber);
        this.registerSemanticProperty("dfc-b:VATstatus", () => this.vatStatus);
        this.registerSemanticProperty("dfc-b:enterpriseID", () => this.enterpriseId);
        this.registerSemanticProperty("dfc-b:hasTemplateSaleSession", () => this.hasTemplateSaleSession);
        this.registerSemanticProperty("dfc-b:isCertifiedBy", () => this.isCertifiedBy);
        this.registerSemanticProperty("dfc-b:affiliates", () => this.affiliates);
        this.registerSemanticProperty("dfc-b:defines", () => this.defines);
        this.registerSemanticProperty("dfc-b:hasMainContact", () => this.hasMainContact);
        this.registerSemanticProperty("dfc-b:maintains", () => this.maintains);
        this.registerSemanticProperty("dfc-b:manages", () => this.manages);
        this.registerSemanticProperty("dfc-b:proposes", () => this.proposes);
        this.registerSemanticProperty("dfc-b:supplies", () => this.supplies);
        this.registerSemanticProperty("dfc-b:transforms", () => this.transforms);
    }
    static {
        SemanticObject.typeRegistry.set(Organization.SEMANTIC_TYPE, Organization);
    }
}
