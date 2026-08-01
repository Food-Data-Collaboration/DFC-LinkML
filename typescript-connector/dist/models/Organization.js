// Class from DFC Business Ontology: #Organization
import { SemanticObject } from "../core/SemanticObject.js";
import { Agent } from "./Agent.js";
export class Organization extends Agent {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Organization";
    }
    vatNumber;
    vatStatus;
    enterpriseId;
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
        this.enterpriseId = params?.enterpriseId;
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
        this.registerSemanticProperty("dfc-b:VATnumber", () => this.vatNumber);
        this.registerSemanticProperty("dfc-b:VATstatus", () => this.vatStatus);
        this.registerSemanticProperty("dfc-b:enterpriseID", () => this.enterpriseId);
        this.registerSemanticProperty("dfc-b:affiliates", () => this.affiliates);
        this.registerSemanticProperty("dfc-b:defines", () => this.defines);
        this.registerSemanticProperty("dfc-b:hasMainContact", () => this.hasMainContact);
        this.registerSemanticProperty("dfc-b:hasTemplateSaleSession", () => this.hasTemplateSaleSession);
        this.registerSemanticProperty("dfc-b:isCertifiedBy", () => this.isCertifiedBy);
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
