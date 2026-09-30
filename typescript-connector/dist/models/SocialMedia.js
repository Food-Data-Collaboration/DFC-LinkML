import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
/**
 * A DFC `dfc-b:SocialMedia`, serialized with `@type: dfc-b:SocialMedia`.
 * Class hierarchy: `What_Subject` -> `SocialMedia`.
 * Own DFC properties: websitePage, socialMediaOf.
 */
export class SocialMedia extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:SocialMedia";
    }
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:websitePage`.
     */
    websitePage;
    /**
     * Serializes as `dfc-b:socialMediaOf`.
     */
    socialMediaOf;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.websitePage = params?.websitePage;
        this.socialMediaOf = params?.socialMediaOf;
        this.semanticType = SocialMedia.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:websitePage", () => this.websitePage);
        this.registerSemanticProperty("dfc-b:socialMediaOf", () => this.socialMediaOf);
    }
    static {
        SemanticObject.typeRegistry.set(SocialMedia.SEMANTIC_TYPE, SocialMedia);
    }
}
