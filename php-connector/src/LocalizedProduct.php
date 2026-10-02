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
    private float|string|SemanticObject|array|null $quantity = null;
    private array|string|SemanticObject|null $constituedBy = [];
    private array|string|SemanticObject|null $consumedBy = [];
    private array|string|SemanticObject|null $producedBy = [];
    private QuantitativeValue|string|SemanticObject|array|null $hasQuantity = null;
    private array|SuppliedProduct|string|SemanticObject|null $reference = [];
    private array|PhysicalProduct|string|SemanticObject|null $representedBy = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->image = $params['image'] ?? null;
        $this->cost = $params['cost'] ?? null;
        $this->quantity = $params['quantity'] ?? null;
        $this->constituedBy = $params['constituedBy'] ?? [];
        $this->consumedBy = $params['consumedBy'] ?? [];
        $this->producedBy = $params['producedBy'] ?? [];
        $this->hasQuantity = $params['hasQuantity'] ?? null;
        $this->reference = $params['reference'] ?? [];
        $this->representedBy = $params['representedBy'] ?? [];
        $this->registerSemanticProperty('dfc-b:Image', fn() => $this->image);
        $this->registerSemanticProperty('dfc-b:cost', fn() => $this->cost);
        $this->registerSemanticProperty('dfc-b:quantity', fn() => $this->quantity);
        $this->registerSemanticProperty('dfc-b:constituedBy', fn() => $this->constituedBy);
        $this->registerSemanticProperty('dfc-b:consumedBy', fn() => $this->consumedBy);
        $this->registerSemanticProperty('dfc-b:producedBy', fn() => $this->producedBy);
        $this->registerSemanticProperty('dfc-b:hasQuantity', fn() => $this->hasQuantity);
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

    public function getQuantity(): float|string|SemanticObject|array|null
    {
        return $this->quantity;
    }

    public function setQuantity(float|string|SemanticObject|array|null $quantity): static
    {
        $this->quantity = $quantity;
        return $this;
    }

    public function getConstituedBy(): array|string|SemanticObject|null
    {
        return $this->constituedBy;
    }

    public function setConstituedBy(array|string|SemanticObject|null $constituedBy): static
    {
        $this->constituedBy = $constituedBy;
        return $this;
    }

    public function addConstituedBy(string|SemanticObject $constituedBy): static
    {
        if ($this->constituedBy === null) {
            $this->constituedBy = [];
        } elseif (!is_array($this->constituedBy)) {
            $this->constituedBy = [$this->constituedBy];
        }
        $this->constituedBy[] = $constituedBy;
        return $this;
    }

    public function removeConstituedBy(string|SemanticObject $constituedBy): void
    {
        if ($this->constituedBy === null) {
            return;
        }
        if (!is_array($this->constituedBy)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->constituedBy === $constituedBy) {
                $this->constituedBy = [];
            }
            return;
        }
        $key = array_search($constituedBy, $this->constituedBy, true);
        if ($key !== false) {
            unset($this->constituedBy[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->constituedBy = array_values($this->constituedBy);
        }
    }

    public function getConsumedBy(): array|string|SemanticObject|null
    {
        return $this->consumedBy;
    }

    public function setConsumedBy(array|string|SemanticObject|null $consumedBy): static
    {
        $this->consumedBy = $consumedBy;
        return $this;
    }

    public function addConsumedBy(string|SemanticObject $consumedBy): static
    {
        if ($this->consumedBy === null) {
            $this->consumedBy = [];
        } elseif (!is_array($this->consumedBy)) {
            $this->consumedBy = [$this->consumedBy];
        }
        $this->consumedBy[] = $consumedBy;
        return $this;
    }

    public function removeConsumedBy(string|SemanticObject $consumedBy): void
    {
        if ($this->consumedBy === null) {
            return;
        }
        if (!is_array($this->consumedBy)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->consumedBy === $consumedBy) {
                $this->consumedBy = [];
            }
            return;
        }
        $key = array_search($consumedBy, $this->consumedBy, true);
        if ($key !== false) {
            unset($this->consumedBy[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->consumedBy = array_values($this->consumedBy);
        }
    }

    public function getProducedBy(): array|string|SemanticObject|null
    {
        return $this->producedBy;
    }

    public function setProducedBy(array|string|SemanticObject|null $producedBy): static
    {
        $this->producedBy = $producedBy;
        return $this;
    }

    public function addProducedBy(string|SemanticObject $producedBy): static
    {
        if ($this->producedBy === null) {
            $this->producedBy = [];
        } elseif (!is_array($this->producedBy)) {
            $this->producedBy = [$this->producedBy];
        }
        $this->producedBy[] = $producedBy;
        return $this;
    }

    public function removeProducedBy(string|SemanticObject $producedBy): void
    {
        if ($this->producedBy === null) {
            return;
        }
        if (!is_array($this->producedBy)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->producedBy === $producedBy) {
                $this->producedBy = [];
            }
            return;
        }
        $key = array_search($producedBy, $this->producedBy, true);
        if ($key !== false) {
            unset($this->producedBy[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->producedBy = array_values($this->producedBy);
        }
    }

    public function getHasQuantity(): QuantitativeValue|string|SemanticObject|array|null
    {
        return $this->hasQuantity;
    }

    public function setHasQuantity(QuantitativeValue|string|SemanticObject|array|null $hasQuantity): static
    {
        $this->hasQuantity = $hasQuantity;
        return $this;
    }

    public function getReference(): array|SuppliedProduct|string|SemanticObject|null
    {
        return $this->reference;
    }

    public function setReference(array|SuppliedProduct|string|SemanticObject|null $reference): static
    {
        $this->reference = $reference;
        return $this;
    }

    public function addReference(SuppliedProduct|string|SemanticObject $reference): static
    {
        if ($this->reference === null) {
            $this->reference = [];
        } elseif (!is_array($this->reference)) {
            $this->reference = [$this->reference];
        }
        $this->reference[] = $reference;
        return $this;
    }

    public function removeReference(SuppliedProduct|string|SemanticObject $reference): void
    {
        if ($this->reference === null) {
            return;
        }
        if (!is_array($this->reference)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->reference === $reference) {
                $this->reference = [];
            }
            return;
        }
        $key = array_search($reference, $this->reference, true);
        if ($key !== false) {
            unset($this->reference[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->reference = array_values($this->reference);
        }
    }

    public function getRepresentedBy(): array|PhysicalProduct|string|SemanticObject|null
    {
        return $this->representedBy;
    }

    public function setRepresentedBy(array|PhysicalProduct|string|SemanticObject|null $representedBy): static
    {
        $this->representedBy = $representedBy;
        return $this;
    }

    public function addRepresentedBy(PhysicalProduct|string|SemanticObject $representedBy): static
    {
        if ($this->representedBy === null) {
            $this->representedBy = [];
        } elseif (!is_array($this->representedBy)) {
            $this->representedBy = [$this->representedBy];
        }
        $this->representedBy[] = $representedBy;
        return $this;
    }

    public function removeRepresentedBy(PhysicalProduct|string|SemanticObject $representedBy): void
    {
        if ($this->representedBy === null) {
            return;
        }
        if (!is_array($this->representedBy)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->representedBy === $representedBy) {
                $this->representedBy = [];
            }
            return;
        }
        $key = array_search($representedBy, $this->representedBy, true);
        if ($key !== false) {
            unset($this->representedBy[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->representedBy = array_values($this->representedBy);
        }
    }
}
