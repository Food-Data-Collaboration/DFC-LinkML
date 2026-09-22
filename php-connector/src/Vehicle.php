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

use DataFoodConsortium\Connector\OpeningHoursSpecification;
use DataFoodConsortium\Connector\PhysicalPlace;
use DataFoodConsortium\Connector\QuantitativeValue;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\WhatSubject;

class Vehicle extends WhatSubject implements IVehicle
{
    public const SEMANTIC_TYPE = 'dfc-b:Vehicle';

    private bool|string|SemanticObject|array|null $frozen = null;
    private bool|string|SemanticObject|array|null $refrigerated = null;
    private array|string|SemanticObject|null $ships = [];
    private string|SemanticObject|array|null $usedInRoute = null;
    private PhysicalPlace|string|SemanticObject|array|null $basedAt = null;
    private QuantitativeValue|string|SemanticObject|array|null $quantity = null;
    private OpeningHoursSpecification|string|SemanticObject|array|null $isAvailableDuring = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->frozen = $params['frozen'] ?? null;
        $this->refrigerated = $params['refrigerated'] ?? null;
        $this->ships = $params['ships'] ?? [];
        $this->usedInRoute = $params['usedInRoute'] ?? null;
        $this->basedAt = $params['basedAt'] ?? null;
        $this->quantity = $params['quantity'] ?? null;
        $this->isAvailableDuring = $params['isAvailableDuring'] ?? null;
        $this->registerSemanticProperty('dfc-b:frozen', fn() => $this->frozen);
        $this->registerSemanticProperty('dfc-b:refrigerated', fn() => $this->refrigerated);
        $this->registerSemanticProperty('dfc-b:ships', fn() => $this->ships);
        $this->registerSemanticProperty('dfc-b:usedInRoute', fn() => $this->usedInRoute);
        $this->registerSemanticProperty('dfc-b:basedAt', fn() => $this->basedAt);
        $this->registerSemanticProperty('dfc-b:hasQuantity', fn() => $this->quantity);
        $this->registerSemanticProperty('dfc-b:isAvailableDuring', fn() => $this->isAvailableDuring);
    }
    public function getFrozen(): bool|string|SemanticObject|array|null
    {
        return $this->frozen;
    }

    public function setFrozen(bool|string|SemanticObject|array|null $frozen): static
    {
        $this->frozen = $frozen;
        return $this;
    }

    public function getRefrigerated(): bool|string|SemanticObject|array|null
    {
        return $this->refrigerated;
    }

    public function setRefrigerated(bool|string|SemanticObject|array|null $refrigerated): static
    {
        $this->refrigerated = $refrigerated;
        return $this;
    }

    public function getShips(): array|string|SemanticObject|null
    {
        return $this->ships;
    }

    public function setShips(array|string|SemanticObject|null $ships): static
    {
        $this->ships = $ships;
        return $this;
    }

    public function addShips(string|SemanticObject $ships): static
    {
        if ($this->ships === null) {
            $this->ships = [];
        } elseif (!is_array($this->ships)) {
            $this->ships = [$this->ships];
        }
        $this->ships[] = $ships;
        return $this;
    }

    public function removeShips(string|SemanticObject $ships): void
    {
        if (!is_array($this->ships)) {
            return;
        }
        $key = array_search($ships, $this->ships, true);
        if ($key !== false) {
            unset($this->ships[$key]);
        }
    }

    public function getUsedInRoute(): string|SemanticObject|array|null
    {
        return $this->usedInRoute;
    }

    public function setUsedInRoute(string|SemanticObject|array|null $usedInRoute): static
    {
        $this->usedInRoute = $usedInRoute;
        return $this;
    }

    public function getBasedAt(): PhysicalPlace|string|SemanticObject|array|null
    {
        return $this->basedAt;
    }

    public function setBasedAt(PhysicalPlace|string|SemanticObject|array|null $basedAt): static
    {
        $this->basedAt = $basedAt;
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

    public function getIsAvailableDuring(): OpeningHoursSpecification|string|SemanticObject|array|null
    {
        return $this->isAvailableDuring;
    }

    public function setIsAvailableDuring(OpeningHoursSpecification|string|SemanticObject|array|null $isAvailableDuring): static
    {
        $this->isAvailableDuring = $isAvailableDuring;
        return $this;
    }
}
