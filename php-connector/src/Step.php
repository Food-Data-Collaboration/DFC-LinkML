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

use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\Shipment;
use DataFoodConsortium\Connector\WhereSubject;

class Step extends WhereSubject implements IStep
{
    public const SEMANTIC_TYPE = 'dfc-b:Step';

    private string|SemanticObject|array|null $arrivalDate = null;
    private string|SemanticObject|array|null $duration = null;
    private array|string|SemanticObject|null $isStepOf = [];
    private array|Shipment|string|SemanticObject|null $delivery = [];
    private array|Shipment|string|SemanticObject|null $pickUp = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->arrivalDate = $params['arrivalDate'] ?? null;
        $this->duration = $params['duration'] ?? null;
        $this->isStepOf = $params['isStepOf'] ?? [];
        $this->delivery = $params['delivery'] ?? [];
        $this->pickUp = $params['pickUp'] ?? [];
        $this->registerSemanticProperty('dfc-b:arrivalDate', fn() => $this->arrivalDate);
        $this->registerSemanticProperty('dfc-b:duration', fn() => $this->duration);
        $this->registerSemanticProperty('dfc-b:isStepOf', fn() => $this->isStepOf);
        $this->registerSemanticProperty('dfc-b:delivery', fn() => $this->delivery);
        $this->registerSemanticProperty('dfc-b:pickUp', fn() => $this->pickUp);
    }
    public function getArrivalDate(): string|SemanticObject|array|null
    {
        return $this->arrivalDate;
    }

    public function setArrivalDate(string|SemanticObject|array|null $arrivalDate): static
    {
        $this->arrivalDate = $arrivalDate;
        return $this;
    }

    public function getDuration(): string|SemanticObject|array|null
    {
        return $this->duration;
    }

    public function setDuration(string|SemanticObject|array|null $duration): static
    {
        $this->duration = $duration;
        return $this;
    }

    public function getIsStepOf(): array|string|SemanticObject|null
    {
        return $this->isStepOf;
    }

    public function setIsStepOf(array|string|SemanticObject|null $isStepOf): static
    {
        $this->isStepOf = $isStepOf;
        return $this;
    }

    public function addIsStepOf(string|SemanticObject $isStepOf): static
    {
        if ($this->isStepOf === null) {
            $this->isStepOf = [];
        } elseif (!is_array($this->isStepOf)) {
            $this->isStepOf = [$this->isStepOf];
        }
        $this->isStepOf[] = $isStepOf;
        return $this;
    }

    public function removeIsStepOf(string|SemanticObject $isStepOf): void
    {
        if ($this->isStepOf === null) {
            return;
        }
        if (!is_array($this->isStepOf)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->isStepOf === $isStepOf) {
                $this->isStepOf = [];
            }
            return;
        }
        $key = array_search($isStepOf, $this->isStepOf, true);
        if ($key !== false) {
            unset($this->isStepOf[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->isStepOf = array_values($this->isStepOf);
        }
    }

    public function getDelivery(): array|Shipment|string|SemanticObject|null
    {
        return $this->delivery;
    }

    public function setDelivery(array|Shipment|string|SemanticObject|null $delivery): static
    {
        $this->delivery = $delivery;
        return $this;
    }

    public function addDelivery(Shipment|string|SemanticObject $delivery): static
    {
        if ($this->delivery === null) {
            $this->delivery = [];
        } elseif (!is_array($this->delivery)) {
            $this->delivery = [$this->delivery];
        }
        $this->delivery[] = $delivery;
        return $this;
    }

    public function removeDelivery(Shipment|string|SemanticObject $delivery): void
    {
        if ($this->delivery === null) {
            return;
        }
        if (!is_array($this->delivery)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->delivery === $delivery) {
                $this->delivery = [];
            }
            return;
        }
        $key = array_search($delivery, $this->delivery, true);
        if ($key !== false) {
            unset($this->delivery[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->delivery = array_values($this->delivery);
        }
    }

    public function getPickUp(): array|Shipment|string|SemanticObject|null
    {
        return $this->pickUp;
    }

    public function setPickUp(array|Shipment|string|SemanticObject|null $pickUp): static
    {
        $this->pickUp = $pickUp;
        return $this;
    }

    public function addPickUp(Shipment|string|SemanticObject $pickUp): static
    {
        if ($this->pickUp === null) {
            $this->pickUp = [];
        } elseif (!is_array($this->pickUp)) {
            $this->pickUp = [$this->pickUp];
        }
        $this->pickUp[] = $pickUp;
        return $this;
    }

    public function removePickUp(Shipment|string|SemanticObject $pickUp): void
    {
        if ($this->pickUp === null) {
            return;
        }
        if (!is_array($this->pickUp)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->pickUp === $pickUp) {
                $this->pickUp = [];
            }
            return;
        }
        $key = array_search($pickUp, $this->pickUp, true);
        if ($key !== false) {
            unset($this->pickUp[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->pickUp = array_values($this->pickUp);
        }
    }
}
