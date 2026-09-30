import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
/**
 * Constructor parameters for {@link SocialMedia}.
 *
 * Own DFC properties: websitePage, socialMediaOf.
 *
 * Inherited parameters come from {@link WhatSubjectParams}.
 */
export interface SocialMediaParams extends WhatSubjectParams {
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:websitePage`.
     */
    websitePage?: string;
    /**
     * Serializes as `dfc-b:socialMediaOf`.
     */
    socialMediaOf?: string;
}
/**
 * A DFC `dfc-b:SocialMedia`, serialized with `@type: dfc-b:SocialMedia`.
 * Class hierarchy: `What_Subject` -> `SocialMedia`.
 * Own DFC properties: websitePage, socialMediaOf.
 */
export declare class SocialMedia extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:websitePage`.
     */
    websitePage?: string;
    /**
     * Serializes as `dfc-b:socialMediaOf`.
     */
    socialMediaOf?: string;
    constructor(semanticId: string, params?: SocialMediaParams);
}
