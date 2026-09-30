import { SemanticObject } from "../core/SemanticObject.js";
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
export class SocialMedia extends WhatSubject {
  static get SEMANTIC_TYPE(): string {
    return "dfc-b:SocialMedia";
  }

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

  constructor(
    semanticId: string,
    params?: SocialMediaParams,
  ) {
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
