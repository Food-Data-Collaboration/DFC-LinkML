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

use DataFoodConsortium\Connector\Agent;
use DataFoodConsortium\Connector\LocalizedProduct;
use DataFoodConsortium\Connector\ProductBatch;
use DataFoodConsortium\Connector\QuantitativeValue;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\WhatSubject;

class PhysicalProduct extends WhatSubject implements IPhysicalProduct
{
    public const SEMANTIC_TYPE = 'dfc-b:PhysicalProduct';

    private string|SemanticObject|array|null $image = null;
    private float|string|SemanticObject|array|null $quantityValue = null;
    private string|SemanticObject|array|null $concernedBy = null;
    private string|SemanticObject|array|null $constituedBy = null;
    private string|SemanticObject|array|null $consumedBy = null;
    private array|string|SemanticObject|null $fulfills = [];
    private string|SemanticObject|array|null $producedBy = null;
    private QuantitativeValue|string|SemanticObject|array|null $quantity = null;
    private Agent|string|SemanticObject|array|null $ownedBy = null;
    private array|LocalizedProduct|string|SemanticObject|null $represents = [];
    private ProductBatch|string|SemanticObject|array|null $tracedBy = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->image = $params['image'] ?? null;
        $this->quantityValue = $params['quantityValue'] ?? null;
        $this->concernedBy = $params['concernedBy'] ?? null;
        $this->constituedBy = $params['constituedBy'] ?? null;
        $this->consumedBy = $params['consumedBy'] ?? null;
        $this->fulfills = $params['fulfills'] ?? [];
        $this->producedBy = $params['producedBy'] ?? null;
        $this->quantity = $params['quantity'] ?? null;
        $this->ownedBy = $params['ownedBy'] ?? null;
        $this->represents = $params['represents'] ?? [];
        $this->tracedBy = $params['tracedBy'] ?? null;
        $this->registerSemanticProperty('dfc-b:Image', fn() => $this->image);
        $this->registerSemanticProperty('dfc-b:quantity', fn() => $this->quantityValue);
        $this->registerSemanticProperty('dfc-b:concernedBy', fn() => $this->concernedBy);
        $this->registerSemanticProperty('dfc-b:constituedBy', fn() => $this->constituedBy);
        $this->registerSemanticProperty('dfc-b:consumedBy', fn() => $this->consumedBy);
        $this->registerSemanticProperty('dfc-b:fulfills', fn() => $this->fulfills);
        $this->registerSemanticProperty('dfc-b:producedBy', fn() => $this->producedBy);
        $this->registerSemanticProperty('dfc-b:hasQuantity', fn() => $this->quantity);
        $this->registerSemanticProperty('dfc-b:ownedBy', fn() => $this->ownedBy);
        $this->registerSemanticProperty('dfc-b:represents', fn() => $this->represents);
        $this->registerSemanticProperty('dfc-b:tracedBy', fn() => $this->tracedBy);
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

    public function getQuantityValue(): float|string|SemanticObject|array|null
    {
        return $this->quantityValue;
    }

    public function setQuantityValue(float|string|SemanticObject|array|null $quantityValue): static
    {
        $this->quantityValue = $quantityValue;
        return $this;
    }

    public function getConcernedBy(): string|SemanticObject|array|null
    {
        return $this->concernedBy;
    }

    public function setConcernedBy(string|SemanticObject|array|null $concernedBy): static
    {
        $this->concernedBy = $concernedBy;
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

    public function getFulfills(): array|string|SemanticObject|null
    {
        return $this->fulfills;
    }

    public function setFulfills(array|string|SemanticObject|null $fulfills): static
    {
        $this->fulfills = $fulfills;
        return $this;
    }

    public function addFulfills(string|SemanticObject $fulfills): static
    {
        if ($this->fulfills === null) {
            $this->fulfills = [];
        } elseif (!is_array($this->fulfills)) {
            $this->fulfills = [$this->fulfills];
        }
        $this->fulfills[] = $fulfills;
        return $this;
    }

    public function removeFulfills(string|SemanticObject $fulfills): void
    {
        if ($this->fulfills === null) {
            return;
        }
        if (!is_array($this->fulfills)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->fulfills === $fulfills) {
                $this->fulfills = [];
            }
            return;
        }
        $key = array_search($fulfills, $this->fulfills, true);
        if ($key !== false) {
            unset($this->fulfills[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->fulfills = array_values($this->fulfills);
        }
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

    public function getOwnedBy(): Agent|string|SemanticObject|array|null
    {
        return $this->ownedBy;
    }

    public function setOwnedBy(Agent|string|SemanticObject|array|null $ownedBy): static
    {
        $this->ownedBy = $ownedBy;
        return $this;
    }

    public function getRepresents(): array|LocalizedProduct|string|SemanticObject|null
    {
        return $this->represents;
    }

    public function setRepresents(array|LocalizedProduct|string|SemanticObject|null $represents): static
    {
        $this->represents = $represents;
        return $this;
    }

    public function addRepresents(LocalizedProduct|string|SemanticObject $represents): static
    {
        if ($this->represents === null) {
            $this->represents = [];
        } elseif (!is_array($this->represents)) {
            $this->represents = [$this->represents];
        }
        $this->represents[] = $represents;
        return $this;
    }

    public function removeRepresents(LocalizedProduct|string|SemanticObject $represents): void
    {
        if ($this->represents === null) {
            return;
        }
        if (!is_array($this->represents)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->represents === $represents) {
                $this->represents = [];
            }
            return;
        }
        $key = array_search($represents, $this->represents, true);
        if ($key !== false) {
            unset($this->represents[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->represents = array_values($this->represents);
        }
    }

    public function getTracedBy(): ProductBatch|string|SemanticObject|array|null
    {
        return $this->tracedBy;
    }

    public function setTracedBy(ProductBatch|string|SemanticObject|array|null $tracedBy): static
    {
        $this->tracedBy = $tracedBy;
        return $this;
    }
}
