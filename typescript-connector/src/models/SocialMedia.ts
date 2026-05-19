// Class from DFC Business Ontology: #SocialMedia
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";

export interface SocialMediaParams extends WhatSubjectParams {
  websitePage?: string;
  socialMediaOf?: string;
}
export class SocialMedia extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:SocialMedia";
  }

  websitePage?: string;
  socialMediaOf?: string;

  constructor(
    semanticId: string,
    params?: SocialMediaParams,
  ) {
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
