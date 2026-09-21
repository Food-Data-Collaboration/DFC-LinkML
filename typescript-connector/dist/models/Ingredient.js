// Class from DFC Business Ontology: #Ingredient
import { SemanticObject } from "../core/SemanticObject.js";
import { WhatSubject } from "./WhatSubject.js";
export class Ingredient extends WhatSubject {
    static get SEMANTIC_TYPE() {
        return "dfc-b:Ingredient";
    }
    composedOf;
    isIngredientOf;
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
