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

use DataFoodConsortium\Connector\Coordination;
use DataFoodConsortium\Connector\Place;
use DataFoodConsortium\Connector\QuantitativeValue;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\ShippingOption;

class SaleSession extends SemanticObject implements ISaleSession
{
    public const SEMANTIC_TYPE = 'dfc-b:SaleSession';

    private string|SemanticObject|array|null $endDate = null;
    private float|string|SemanticObject|array|null $quantityValue = null;
    private string|SemanticObject|array|null $startDate = null;
    private array|string|SemanticObject|null $holds = [];
    private array|string|SemanticObject|null $lists = [];
    private string|SemanticObject|array|null $date = null;
    private string|SemanticObject|array|null $description = null;
    private string|SemanticObject|array|null $name = null;
    private string|SemanticObject|array|null $characteristicOf = null;
    private string|SemanticObject|array|null $dimension = null;
    private ShippingOption|string|SemanticObject|array|null $option = null;
    private QuantitativeValue|string|SemanticObject|array|null $quantity = null;
    private Place|string|SemanticObject|array|null $hostedAt = null;
    private Coordination|string|SemanticObject|array|null $objectOf = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->endDate = $params['endDate'] ?? null;
        $this->quantityValue = $params['quantityValue'] ?? null;
        $this->startDate = $params['startDate'] ?? null;
        $this->holds = $params['holds'] ?? [];
        $this->lists = $params['lists'] ?? [];
        $this->date = $params['date'] ?? null;
        $this->description = $params['description'] ?? null;
        $this->name = $params['name'] ?? null;
        $this->characteristicOf = $params['characteristicOf'] ?? null;
        $this->dimension = $params['dimension'] ?? null;
        $this->option = $params['option'] ?? null;
        $this->quantity = $params['quantity'] ?? null;
        $this->hostedAt = $params['hostedAt'] ?? null;
        $this->objectOf = $params['objectOf'] ?? null;
        $this->registerSemanticProperty('dfc-b:endDate', fn() => $this->endDate);
        $this->registerSemanticProperty('dfc-b:quantity', fn() => $this->quantityValue);
        $this->registerSemanticProperty('dfc-b:startDate', fn() => $this->startDate);
        $this->registerSemanticProperty('dfc-b:holds', fn() => $this->holds);
        $this->registerSemanticProperty('dfc-b:lists', fn() => $this->lists);
        $this->registerSemanticProperty('dfc-b:date', fn() => $this->date);
        $this->registerSemanticProperty('dfc-b:description', fn() => $this->description);
        $this->registerSemanticProperty('dfc-b:name', fn() => $this->name);
        $this->registerSemanticProperty('dfc-b:characteristicOf', fn() => $this->characteristicOf);
        $this->registerSemanticProperty('dfc-b:hasDimension', fn() => $this->dimension);
        $this->registerSemanticProperty('dfc-b:hasOption', fn() => $this->option);
        $this->registerSemanticProperty('dfc-b:hasQuantity', fn() => $this->quantity);
        $this->registerSemanticProperty('dfc-b:hostedAt', fn() => $this->hostedAt);
        $this->registerSemanticProperty('dfc-b:objectOf', fn() => $this->objectOf);
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

    public function getQuantityValue(): float|string|SemanticObject|array|null
    {
        return $this->quantityValue;
    }

    public function setQuantityValue(float|string|SemanticObject|array|null $quantityValue): static
    {
        $this->quantityValue = $quantityValue;
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

    public function getHolds(): array|string|SemanticObject|null
    {
        return $this->holds;
    }

    public function setHolds(array|string|SemanticObject|null $holds): static
    {
        $this->holds = $holds;
        return $this;
    }

    public function addHolds(string|SemanticObject $holds): static
    {
        if ($this->holds === null) {
            $this->holds = [];
        } elseif (!is_array($this->holds)) {
            $this->holds = [$this->holds];
        }
        $this->holds[] = $holds;
        return $this;
    }

    public function removeHolds(string|SemanticObject $holds): void
    {
        if (!is_array($this->holds)) {
            return;
        }
        $key = array_search($holds, $this->holds, true);
        if ($key !== false) {
            unset($this->holds[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->holds = array_values($this->holds);
        }
    }

    public function getLists(): array|string|SemanticObject|null
    {
        return $this->lists;
    }

    public function setLists(array|string|SemanticObject|null $lists): static
    {
        $this->lists = $lists;
        return $this;
    }

    public function addLists(string|SemanticObject $lists): static
    {
        if ($this->lists === null) {
            $this->lists = [];
        } elseif (!is_array($this->lists)) {
            $this->lists = [$this->lists];
        }
        $this->lists[] = $lists;
        return $this;
    }

    public function removeLists(string|SemanticObject $lists): void
    {
        if (!is_array($this->lists)) {
            return;
        }
        $key = array_search($lists, $this->lists, true);
        if ($key !== false) {
            unset($this->lists[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->lists = array_values($this->lists);
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

    public function getOption(): ShippingOption|string|SemanticObject|array|null
    {
        return $this->option;
    }

    public function setOption(ShippingOption|string|SemanticObject|array|null $option): static
    {
        $this->option = $option;
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

    public function getHostedAt(): Place|string|SemanticObject|array|null
    {
        return $this->hostedAt;
    }

    public function setHostedAt(Place|string|SemanticObject|array|null $hostedAt): static
    {
        $this->hostedAt = $hostedAt;
        return $this;
    }

    public function getObjectOf(): Coordination|string|SemanticObject|array|null
    {
        return $this->objectOf;
    }

    public function setObjectOf(Coordination|string|SemanticObject|array|null $objectOf): static
    {
        $this->objectOf = $objectOf;
        return $this;
    }
}
