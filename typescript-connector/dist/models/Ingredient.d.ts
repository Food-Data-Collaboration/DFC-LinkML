import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
export interface IngredientParams extends WhatSubjectParams {
    composedOf?: string;
    isIngredientOf?: string;
    hasQuantity?: QuantitativeValue | string;
}
export declare class Ingredient extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    composedOf?: string;
    isIngredientOf?: string;
    hasQuantity?: QuantitativeValue | string;
    constructor(semanticId: string, params?: IngredientParams);
}
