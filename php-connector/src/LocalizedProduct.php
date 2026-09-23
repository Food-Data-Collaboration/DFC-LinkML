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

use DataFoodConsortium\Connector\PhysicalProduct;
use DataFoodConsortium\Connector\QuantitativeValue;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\SuppliedProduct;
use DataFoodConsortium\Connector\WhatSubject;

class LocalizedProduct extends WhatSubject implements ILocalizedProduct
{
    public const SEMANTIC_TYPE = 'dfc-b:LocalizedProduct';

    private string|SemanticObject|array|null $image = null;
    private float|string|SemanticObject|array|null $cost = null;
    private float|string|SemanticObject|array|null $quantityValue = null;
    private string|SemanticObject|array|null $constituedBy = null;
    private string|SemanticObject|array|null $consumedBy = null;
    private string|SemanticObject|array|null $producedBy = null;
    private QuantitativeValue|string|SemanticObject|array|null $quantity = null;
    private SuppliedProduct|string|SemanticObject|array|null $reference = null;
    private PhysicalProduct|string|SemanticObject|array|null $representedBy = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->image = $params['image'] ?? null;
        $this->cost = $params['cost'] ?? null;
        $this->quantityValue = $params['quantityValue'] ?? null;
        $this->constituedBy = $params['constituedBy'] ?? null;
        $this->consumedBy = $params['consumedBy'] ?? null;
        $this->producedBy = $params['producedBy'] ?? null;
        $this->quantity = $params['quantity'] ?? null;
        $this->reference = $params['reference'] ?? null;
        $this->representedBy = $params['representedBy'] ?? null;
        $this->registerSemanticProperty('dfc-b:Image', fn() => $this->image);
        $this->registerSemanticProperty('dfc-b:cost', fn() => $this->cost);
        $this->registerSemanticProperty('dfc-b:quantity', fn() => $this->quantityValue);
        $this->registerSemanticProperty('dfc-b:constituedBy', fn() => $this->constituedBy);
        $this->registerSemanticProperty('dfc-b:consumedBy', fn() => $this->consumedBy);
        $this->registerSemanticProperty('dfc-b:producedBy', fn() => $this->producedBy);
        $this->registerSemanticProperty('dfc-b:hasQuantity', fn() => $this->quantity);
        $this->registerSemanticProperty('dfc-b:hasReference', fn() => $this->reference);
        $this->registerSemanticProperty('dfc-b:representedBy', fn() => $this->representedBy);
    }
    public function getImage(): string|SemanticObject|array|null
    {
        return $this->image;
    }

    public function setImage(string|SemanticObject|array|null $image): static
    {
        $this->image = $image;
        return $this;
    }

    public function getCost(): float|string|SemanticObject|array|null
    {
        return $this->cost;
    }

    public function setCost(float|string|SemanticObject|array|null $cost): static
    {
        $this->cost = $cost;
        return $this;
    }

    public function getQuantityValue(): float|string|SemanticObject|array|null
    {
        return $this->quantityValue;
    }

    public function setQuantityValue(float|string|SemanticObject|array|null $quantityValue): static
    {
        $this->quantityValue = $quantityValue;
        return $this;
    }

    public function getConstituedBy(): string|SemanticObject|array|null
    {
        return $this->constituedBy;
    }

    public function setConstituedBy(string|SemanticObject|array|null $constituedBy): static
    {
        $this->constituedBy = $constituedBy;
        return $this;
    }

    public function getConsumedBy(): string|SemanticObject|array|null
    {
        return $this->consumedBy;
    }

    public function setConsumedBy(string|SemanticObject|array|null $consumedBy): static
    {
        $this->consumedBy = $consumedBy;
        return $this;
    }

    public function getProducedBy(): string|SemanticObject|array|null
    {
        return $this->producedBy;
    }

    public function setProducedBy(string|SemanticObject|array|null $producedBy): static
    {
        $this->producedBy = $producedBy;
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

    public function getReference(): SuppliedProduct|string|SemanticObject|array|null
    {
        return $this->reference;
    }

    public function setReference(SuppliedProduct|string|SemanticObject|array|null $reference): static
    {
        $this->reference = $reference;
        return $this;
    }

    public function getRepresentedBy(): PhysicalProduct|string|SemanticObject|array|null
    {
        return $this->representedBy;
    }

    public function setRepresentedBy(PhysicalProduct|string|SemanticObject|array|null $representedBy): static
    {
        $this->representedBy = $representedBy;
        return $this;
    }
}
