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

use DataFoodConsortium\Connector\PhysicalPlace;
use DataFoodConsortium\Connector\SemanticObject;

class Shipment extends SemanticObject implements IShipment
{
    public const SEMANTIC_TYPE = 'dfc-b:Shipment';

    private string|SemanticObject|array|null $endDate = null;
    private string|SemanticObject|array|null $startDate = null;
    private string|SemanticObject|array|null $isShippedIn = null;
    private array|string|SemanticObject|null $transports = [];
    private string|SemanticObject|array|null $date = null;
    private string|SemanticObject|array|null $description = null;
    private string|SemanticObject|array|null $name = null;
    private string|SemanticObject|array|null $characteristicOf = null;
    private string|SemanticObject|array|null $dimension = null;
    private PhysicalPlace|string|SemanticObject|array|null $endsAt = null;
    private PhysicalPlace|string|SemanticObject|array|null $startsAt = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->endDate = $params['endDate'] ?? null;
        $this->startDate = $params['startDate'] ?? null;
        $this->isShippedIn = $params['isShippedIn'] ?? null;
        $this->transports = $params['transports'] ?? [];
        $this->date = $params['date'] ?? null;
        $this->description = $params['description'] ?? null;
        $this->name = $params['name'] ?? null;
        $this->characteristicOf = $params['characteristicOf'] ?? null;
        $this->dimension = $params['dimension'] ?? null;
        $this->endsAt = $params['endsAt'] ?? null;
        $this->startsAt = $params['startsAt'] ?? null;
        $this->registerSemanticProperty('dfc-b:endDate', fn() => $this->endDate);
        $this->registerSemanticProperty('dfc-b:startDate', fn() => $this->startDate);
        $this->registerSemanticProperty('dfc-b:isShippedIn', fn() => $this->isShippedIn);
        $this->registerSemanticProperty('dfc-b:transports', fn() => $this->transports);
        $this->registerSemanticProperty('dfc-b:date', fn() => $this->date);
        $this->registerSemanticProperty('dfc-b:description', fn() => $this->description);
        $this->registerSemanticProperty('dfc-b:name', fn() => $this->name);
        $this->registerSemanticProperty('dfc-b:characteristicOf', fn() => $this->characteristicOf);
        $this->registerSemanticProperty('dfc-b:hasDimension', fn() => $this->dimension);
        $this->registerSemanticProperty('dfc-b:endsAt', fn() => $this->endsAt);
        $this->registerSemanticProperty('dfc-b:startsAt', fn() => $this->startsAt);
    }
    public function getEndDate(): string|SemanticObject|array|null
    {
        return $this->endDate;
    }

    public function setEndDate(string|SemanticObject|array|null $endDate): static
    {
        $this->endDate = $endDate;
        return $this;
    }

    public function getStartDate(): string|SemanticObject|array|null
    {
        return $this->startDate;
    }

    public function setStartDate(string|SemanticObject|array|null $startDate): static
    {
        $this->startDate = $startDate;
        return $this;
    }

    public function getIsShippedIn(): string|SemanticObject|array|null
    {
        return $this->isShippedIn;
    }

    public function setIsShippedIn(string|SemanticObject|array|null $isShippedIn): static
    {
        $this->isShippedIn = $isShippedIn;
        return $this;
    }

    public function getTransports(): array|string|SemanticObject|null
    {
        return $this->transports;
    }

    public function setTransports(array|string|SemanticObject|null $transports): static
    {
        $this->transports = $transports;
        return $this;
    }

    public function addTransports(string|SemanticObject $transports): static
    {
        if ($this->transports === null) {
            $this->transports = [];
        } elseif (!is_array($this->transports)) {
            $this->transports = [$this->transports];
        }
        $this->transports[] = $transports;
        return $this;
    }

    public function removeTransports(string|SemanticObject $transports): void
    {
        if (!is_array($this->transports)) {
            return;
        }
        $key = array_search($transports, $this->transports, true);
        if ($key !== false) {
            unset($this->transports[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->transports = array_values($this->transports);
        }
    }

    public function getDate(): string|SemanticObject|array|null
    {
        return $this->date;
    }

    public function setDate(string|SemanticObject|array|null $date): static
    {
        $this->date = $date;
        return $this;
    }

    public function getDescription(): string|SemanticObject|array|null
    {
        return $this->description;
    }

    public function setDescription(string|SemanticObject|array|null $description): static
    {
        $this->description = $description;
        return $this;
    }

    public function getName(): string|SemanticObject|array|null
    {
        return $this->name;
    }

    public function setName(string|SemanticObject|array|null $name): static
    {
        $this->name = $name;
        return $this;
    }

    public function getCharacteristicOf(): string|SemanticObject|array|null
    {
        return $this->characteristicOf;
    }

    public function setCharacteristicOf(string|SemanticObject|array|null $characteristicOf): static
    {
        $this->characteristicOf = $characteristicOf;
        return $this;
    }

    public function getDimension(): string|SemanticObject|array|null
    {
        return $this->dimension;
    }

    public function setDimension(string|SemanticObject|array|null $dimension): static
    {
        $this->dimension = $dimension;
        return $this;
    }

    public function getEndsAt(): PhysicalPlace|string|SemanticObject|array|null
    {
        return $this->endsAt;
    }

    public function setEndsAt(PhysicalPlace|string|SemanticObject|array|null $endsAt): static
    {
        $this->endsAt = $endsAt;
        return $this;
    }

    public function getStartsAt(): PhysicalPlace|string|SemanticObject|array|null
    {
        return $this->startsAt;
    }

    public function setStartsAt(PhysicalPlace|string|SemanticObject|array|null $startsAt): static
    {
        $this->startsAt = $startsAt;
        return $this;
    }
}
