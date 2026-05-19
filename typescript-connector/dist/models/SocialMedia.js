// Class from DFC Business Ontology: #SocialMedia
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
export class SocialMedia extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:SocialMedia";
    }
    websitePage;
    socialMediaOf;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.websitePage = params?.websitePage;
        this.socialMediaOf = params?.socialMediaOf;
        this.semanticType = SocialMedia.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:SocialMedia:website_page", () => this.websitePage);
        this.registerSemanticProperty("dfc-b:SocialMedia:social_media_of", () => this.socialMediaOf);
    }
    static {
        SemanticObject.typeRegistry.set(SocialMedia.SEMANTIC_TYPE, SocialMedia);
    }
}
