<?php

/*
 * MIT License
 *
 * Copyright (c) 2024 Data Food Consortium
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/
namespace DataFoodConsortium\Connector;

use DataFoodConsortium\Connector\QuantitativeValue;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\WhatSubject;

class Ingredient extends WhatSubject implements IIngredient
{
    public const SEMANTIC_TYPE = 'dfc-b:Ingredient';

    private string|SemanticObject|array|null $composedOf = null;
    private string|SemanticObject|array|null $isIngredientOf = null;
    private QuantitativeValue|string|SemanticObject|array|null $quantity = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->composedOf = $params['composedOf'] ?? null;
        $this->isIngredientOf = $params['isIngredientOf'] ?? null;
        $this->quantity = $params['quantity'] ?? null;
        $this->registerSemanticProperty('dfc-b:composedOf', fn() => $this->composedOf);
        $this->registerSemanticProperty('dfc-b:isIngredientOf', fn() => $this->isIngredientOf);
        $this->registerSemanticProperty('dfc-b:hasQuantity', fn() => $this->quantity);
    }
    public function getComposedOf(): string|SemanticObject|array|null
    {
        return $this->composedOf;
    }

    public function setComposedOf(string|SemanticObject|array|null $composedOf): static
    {
        $this->composedOf = $composedOf;
        return $this;
    }

    public function getIsIngredientOf(): string|SemanticObject|array|null
    {
        return $this->isIngredientOf;
    }

    public function setIsIngredientOf(string|SemanticObject|array|null $isIngredientOf): static
    {
        $this->isIngredientOf = $isIngredientOf;
        return $this;
    }

    public function getQuantity(): QuantitativeValue|string|SemanticObject|array|null
    {
        return $this->quantity;
    }

    public function setQuantity(QuantitativeValue|string|SemanticObject|array|null $quantity): static
    {
        $this->quantity = $quantity;
        return $this;
    }
}
