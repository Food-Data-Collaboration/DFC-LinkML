// Class from DFC Business Ontology: #Organization
import { SemanticObject } from "../core/SemanticObject.js";
import { Agent } from "./Agent.js";
export class Organization extends Agent {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Organization";
    }
    vatNumber;
    vatStatus;
    organizationId;
    affiliates;
    defines;
    hasMainContact;
    hasTemplateSaleSession;
    isCertifiedBy;
    maintains;
    manages;
    proposes;
    supplies;
    transforms;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.vatNumber = params?.vatNumber;
        this.vatStatus = params?.vatStatus;
        this.organizationId = params?.organizationId;
        this.affiliates = params?.affiliates;
        this.defines = params?.defines;
        this.hasMainContact = params?.hasMainContact;
        this.hasTemplateSaleSession = params?.hasTemplateSaleSession;
        this.isCertifiedBy = params?.isCertifiedBy;
        this.maintains = params?.maintains;
        this.manages = params?.manages;
        this.proposes = params?.proposes;
        this.supplies = params?.supplies;
        this.transforms = params?.transforms;
        this.semanticType = Organization.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:Organization:vat_number", () => this.vatNumber);
        this.registerSemanticProperty("dfc-b:Organization:vat_status", () => this.vatStatus);
        this.registerSemanticProperty("dfc-b:Organization:organization_id", () => this.organizationId);
        this.registerSemanticProperty("dfc-b:Organization:affiliates", () => this.affiliates);
        this.registerSemanticProperty("dfc-b:Organization:defines", () => this.defines);
        this.registerSemanticProperty("dfc-b:Organization:has_main_contact", () => this.hasMainContact);
        this.registerSemanticProperty("dfc-b:Organization:has_template_sale_session", () => this.hasTemplateSaleSession);
        this.registerSemanticProperty("dfc-b:Organization:is_certified_by", () => this.isCertifiedBy);
        this.registerSemanticProperty("dfc-b:Organization:maintains", () => this.maintains);
        this.registerSemanticProperty("dfc-b:Organization:manages", () => this.manages);
        this.registerSemanticProperty("dfc-b:Organization:proposes", () => this.proposes);
        this.registerSemanticProperty("dfc-b:Organization:supplies", () => this.supplies);
        this.registerSemanticProperty("dfc-b:Organization:transforms", () => this.transforms);
    }
    static {
        SemanticObject.typeRegistry.set(Organization.SEMANTIC_TYPE, Organization);
    }
}
