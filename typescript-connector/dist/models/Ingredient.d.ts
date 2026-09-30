import { WhatSubject, type WhatSubjectParams } from "./WhatSubject.js";
import type { QuantitativeValue } from "./QuantitativeValue.js";
/**
 * Constructor parameters for {@link Ingredient}.
 *
 * Own DFC properties: composedOf, isIngredientOf, hasQuantity.
 *
 * Inherited parameters come from {@link WhatSubjectParams}.
 */
export interface IngredientParams extends WhatSubjectParams {
    /**
     * Cette propriété représente la composition d'un produit défini par un
     *   ensemble d'ingrédients.
     *
     * Serializes as `dfc-b:composedOf`.
     */
    composedOf?: string;
    /**
     * Serializes as `dfc-b:isIngredientOf`.
     */
    isIngredientOf?: string;
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity?: QuantitativeValue | string;
}
/**
 * A DFC `dfc-b:Ingredient`, serialized with `@type: dfc-b:Ingredient`.
 * Class hierarchy: `What_Subject` -> `Ingredient`.
 * Own DFC properties: composedOf, isIngredientOf, hasQuantity.
 */
export declare class Ingredient extends WhatSubject {
    static get SEMANTIC_TYPE(): string;
    /**
     * Cette propriété représente la composition d'un produit défini par un
     *   ensemble d'ingrédients.
     *
     * Serializes as `dfc-b:composedOf`.
     */
    composedOf?: string;
    /**
     * Serializes as `dfc-b:isIngredientOf`.
     */
    isIngredientOf?: string;
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity?: QuantitativeValue | string;
    constructor(semanticId: string, params?: IngredientParams);
}
