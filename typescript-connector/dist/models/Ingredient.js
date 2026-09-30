import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
/**
 * A DFC `dfc-b:Ingredient`, serialized with `@type: dfc-b:Ingredient`.
 * Class hierarchy: `What_Subject` -> `Ingredient`.
 * Own DFC properties: composedOf, isIngredientOf, hasQuantity.
 */
export class Ingredient extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Ingredient";
    }
    /**
     * Cette propriété représente la composition d'un produit défini par un
     *   ensemble d'ingrédients.
     *
     * Serializes as `dfc-b:composedOf`.
     */
    composedOf;
    /**
     * Serializes as `dfc-b:isIngredientOf`.
     */
    isIngredientOf;
    /**
     * The actual numeric value of the Price, in the currency unit specified
     *   with hasUnit
     *
     * Serializes as `dfc-b:hasQuantity`.
     */
    hasQuantity;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.composedOf = params?.composedOf;
        this.isIngredientOf = params?.isIngredientOf;
        this.hasQuantity = params?.hasQuantity;
        this.semanticType = Ingredient.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:composedOf", () => this.composedOf);
        this.registerSemanticProperty("dfc-b:isIngredientOf", () => this.isIngredientOf);
        this.registerSemanticProperty("dfc-b:hasQuantity", () => this.hasQuantity);
    }
    static {
        SemanticObject.typeRegistry.set(Ingredient.SEMANTIC_TYPE, Ingredient);
    }
}
