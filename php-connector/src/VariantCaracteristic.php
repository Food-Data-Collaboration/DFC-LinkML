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

use DataFoodConsortium\Connector\ProductOption;
use DataFoodConsortium\Connector\ProductOptionValue;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\WhatSubject;

class VariantCaracteristic extends WhatSubject implements IVariantCaracteristic
{
    public const SEMANTIC_TYPE = 'dfc-b:VariantCaracteristic';

    private ProductOption|string|SemanticObject|array|null $productOption = null;
    private ProductOptionValue|string|SemanticObject|array|null $productOptionValue = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->productOption = $params['productOption'] ?? null;
        $this->productOptionValue = $params['productOptionValue'] ?? null;
        $this->registerSemanticProperty('dfc-b:hasProductOption', fn() => $this->productOption);
        $this->registerSemanticProperty('dfc-b:hasProductOptionValue', fn() => $this->productOptionValue);
    }
    public function getProductOption(): ProductOption|string|SemanticObject|array|null
    {
        return $this->productOption;
    }

    public function setProductOption(ProductOption|string|SemanticObject|array|null $productOption): static
    {
        $this->productOption = $productOption;
        return $this;
    }

    public function getProductOptionValue(): ProductOptionValue|string|SemanticObject|array|null
    {
        return $this->productOptionValue;
    }

    public function setProductOptionValue(ProductOptionValue|string|SemanticObject|array|null $productOptionValue): static
    {
        $this->productOptionValue = $productOptionValue;
        return $this;
    }
}
