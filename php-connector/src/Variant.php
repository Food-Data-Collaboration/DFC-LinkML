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

    private array|string|SemanticObject|null $isVariantOf = [];
    private array|VariantCaracteristic|string|SemanticObject|null $variantCaracteristic = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->isVariantOf = $params['isVariantOf'] ?? [];
        $this->variantCaracteristic = $params['variantCaracteristic'] ?? [];
        $this->registerSemanticProperty('dfc-b:isVariantOf', fn() => $this->isVariantOf);
        $this->registerSemanticProperty('dfc-b:hasVariantCaracteristic', fn() => $this->variantCaracteristic);
    }
    public function getIsVariantOf(): array|string|SemanticObject|null
    {
        return $this->isVariantOf;
    }

    public function setIsVariantOf(array|string|SemanticObject|null $isVariantOf): static
    {
        $this->isVariantOf = $isVariantOf;
        return $this;
    }

    public function addIsVariantOf(string|SemanticObject $isVariantOf): static
    {
        if ($this->isVariantOf === null) {
            $this->isVariantOf = [];
        } elseif (!is_array($this->isVariantOf)) {
            $this->isVariantOf = [$this->isVariantOf];
        }
        $this->isVariantOf[] = $isVariantOf;
        return $this;
    }

    public function removeIsVariantOf(string|SemanticObject $isVariantOf): void
    {
        if ($this->isVariantOf === null) {
            return;
        }
        if (!is_array($this->isVariantOf)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->isVariantOf === $isVariantOf) {
                $this->isVariantOf = [];
            }
            return;
        }
        $key = array_search($isVariantOf, $this->isVariantOf, true);
        if ($key !== false) {
            unset($this->isVariantOf[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->isVariantOf = array_values($this->isVariantOf);
        }
    }

    public function getVariantCaracteristic(): array|VariantCaracteristic|string|SemanticObject|null
    {
        return $this->variantCaracteristic;
    }

    public function setVariantCaracteristic(array|VariantCaracteristic|string|SemanticObject|null $variantCaracteristic): static
    {
        $this->variantCaracteristic = $variantCaracteristic;
        return $this;
    }

    public function addVariantCaracteristic(VariantCaracteristic|string|SemanticObject $variantCaracteristic): static
    {
        if ($this->variantCaracteristic === null) {
            $this->variantCaracteristic = [];
        } elseif (!is_array($this->variantCaracteristic)) {
            $this->variantCaracteristic = [$this->variantCaracteristic];
        }
        $this->variantCaracteristic[] = $variantCaracteristic;
        return $this;
    }

    public function removeVariantCaracteristic(VariantCaracteristic|string|SemanticObject $variantCaracteristic): void
    {
        if ($this->variantCaracteristic === null) {
            return;
        }
        if (!is_array($this->variantCaracteristic)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->variantCaracteristic === $variantCaracteristic) {
                $this->variantCaracteristic = [];
            }
            return;
        }
        $key = array_search($variantCaracteristic, $this->variantCaracteristic, true);
        if ($key !== false) {
            unset($this->variantCaracteristic[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->variantCaracteristic = array_values($this->variantCaracteristic);
        }
    }
}
