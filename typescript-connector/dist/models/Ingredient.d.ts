import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
export interface IngredientParams extends WhatSubjectParams {
    composedOf?: string;
    isIngredientOf?: string;
    hasQuantity?: QuantitativeValue;
}
export declare class Ingredient extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    composedOf?: string;
    isIngredientOf?: string;
    hasQuantity?: QuantitativeValue;
    constructor(semanticId: string, params?: IngredientParams);
}
