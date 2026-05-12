import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
export interface SocialMediaParams extends WhatSubjectParams {
    websitePage?: string;
    socialMediaOf?: string;
}
export declare class SocialMedia extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    websitePage?: string;
    socialMediaOf?: string;
    constructor(semanticId: string, params?: SocialMediaParams);
}
