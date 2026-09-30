import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { Agent } from "./Agent.js";
/**
 * Constructor parameters for {@link Brand}.
 *
 * Own DFC properties: brandOf, ownedBy.
 *
 * Inherited parameters come from {@link WhatSubjectParams}.
 */
export interface BrandParams extends WhatSubjectParams {
    /**
     * Serializes as `dfc-b:brandOf`.
     */
    brandOf?: string;
    /**
     * Serializes as `dfc-b:ownedBy`.
     */
    ownedBy?: Agent | string;
}
/**
 * A DFC `dfc-b:Brand`, serialized with `@type: dfc-b:Brand`.
 * Class hierarchy: `What_Subject` -> `Brand`.
 * Own DFC properties: brandOf, ownedBy.
 */
export declare class Brand extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Serializes as `dfc-b:brandOf`.
     */
    brandOf?: string;
    /**
     * Serializes as `dfc-b:ownedBy`.
     */
    ownedBy?: Agent | string;
    constructor(semanticId: string, params?: BrandParams);
}
