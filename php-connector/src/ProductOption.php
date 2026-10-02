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

use DataFoodConsortium\Connector\ProductOptionValue;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\WhatSubject;

class ProductOption extends WhatSubject implements IProductOption
{
    public const SEMANTIC_TYPE = 'dfc-b:ProductOption';

    private array|ProductOptionValue|string|SemanticObject|null $referenceProductOptionValue = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->referenceProductOptionValue = $params['referenceProductOptionValue'] ?? [];
        $this->registerSemanticProperty('dfc-b:hasReferenceProductOptionValue', fn() => $this->referenceProductOptionValue);
    }
    public function getReferenceProductOptionValue(): array|ProductOptionValue|string|SemanticObject|null
    {
        return $this->referenceProductOptionValue;
    }

    public function setReferenceProductOptionValue(array|ProductOptionValue|string|SemanticObject|null $referenceProductOptionValue): static
    {
        $this->referenceProductOptionValue = $referenceProductOptionValue;
        return $this;
    }

    public function addReferenceProductOptionValue(ProductOptionValue|string|SemanticObject $referenceProductOptionValue): static
    {
        if ($this->referenceProductOptionValue === null) {
            $this->referenceProductOptionValue = [];
        } elseif (!is_array($this->referenceProductOptionValue)) {
            $this->referenceProductOptionValue = [$this->referenceProductOptionValue];
        }
        $this->referenceProductOptionValue[] = $referenceProductOptionValue;
        return $this;
    }

    public function removeReferenceProductOptionValue(ProductOptionValue|string|SemanticObject $referenceProductOptionValue): void
    {
        if ($this->referenceProductOptionValue === null) {
            return;
        }
        if (!is_array($this->referenceProductOptionValue)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->referenceProductOptionValue === $referenceProductOptionValue) {
                $this->referenceProductOptionValue = [];
            }
            return;
        }
        $key = array_search($referenceProductOptionValue, $this->referenceProductOptionValue, true);
        if ($key !== false) {
            unset($this->referenceProductOptionValue[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->referenceProductOptionValue = array_values($this->referenceProductOptionValue);
        }
    }
}
