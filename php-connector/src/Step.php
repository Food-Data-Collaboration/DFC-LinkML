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
    private string|SemanticObject|array|null $isStepOf = null;
    private Shipment|string|SemanticObject|array|null $delivery = null;
    private Shipment|string|SemanticObject|array|null $pickUp = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->arrivalDate = $params['arrivalDate'] ?? null;
        $this->duration = $params['duration'] ?? null;
        $this->isStepOf = $params['isStepOf'] ?? null;
        $this->delivery = $params['delivery'] ?? null;
        $this->pickUp = $params['pickUp'] ?? null;
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

    public function getIsStepOf(): string|SemanticObject|array|null
    {
        return $this->isStepOf;
    }

    public function setIsStepOf(string|SemanticObject|array|null $isStepOf): static
    {
        $this->isStepOf = $isStepOf;
        return $this;
    }

    public function getDelivery(): Shipment|string|SemanticObject|array|null
    {
        return $this->delivery;
    }

    public function setDelivery(Shipment|string|SemanticObject|array|null $delivery): static
    {
        $this->delivery = $delivery;
        return $this;
    }

    public function getPickUp(): Shipment|string|SemanticObject|array|null
    {
        return $this->pickUp;
    }

    public function setPickUp(Shipment|string|SemanticObject|array|null $pickUp): static
    {
        $this->pickUp = $pickUp;
        return $this;
    }
}
