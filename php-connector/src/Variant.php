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

use DataFoodConsortium\Connector\DefinedProduct;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\VariantCaracteristic;

class Variant extends DefinedProduct implements IVariant
{
    public const SEMANTIC_TYPE = 'dfc-b:Variant';

    private string|SemanticObject|array|null $isVariantOf = null;
    private VariantCaracteristic|string|SemanticObject|array|null $variantCaracteristic = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->isVariantOf = $params['isVariantOf'] ?? null;
        $this->variantCaracteristic = $params['variantCaracteristic'] ?? null;
        $this->registerSemanticProperty('dfc-b:isVariantOf', fn() => $this->isVariantOf);
        $this->registerSemanticProperty('dfc-b:hasVariantCaracteristic', fn() => $this->variantCaracteristic);
    }
    public function getIsVariantOf(): string|SemanticObject|array|null
    {
        return $this->isVariantOf;
    }

    public function setIsVariantOf(string|SemanticObject|array|null $isVariantOf): static
    {
        $this->isVariantOf = $isVariantOf;
        return $this;
    }

    public function getVariantCaracteristic(): VariantCaracteristic|string|SemanticObject|array|null
    {
        return $this->variantCaracteristic;
    }

    public function setVariantCaracteristic(VariantCaracteristic|string|SemanticObject|array|null $variantCaracteristic): static
    {
        $this->variantCaracteristic = $variantCaracteristic;
        return $this;
    }
}
