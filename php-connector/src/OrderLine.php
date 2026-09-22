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

use DataFoodConsortium\Connector\Order;
use DataFoodConsortium\Connector\QuantitativeValue;
use DataFoodConsortium\Connector\SemanticObject;

class OrderLine extends SemanticObject implements IOrderLine
{
    public const SEMANTIC_TYPE = 'dfc-b:OrderLine';

    private float|string|SemanticObject|array|null $discount = null;
    private float|string|SemanticObject|array|null $quantityValue = null;
    private array|string|SemanticObject|null $concerns = [];
    private string|SemanticObject|array|null $price = null;
    private string|SemanticObject|array|null $isFulfilledBy = null;
    private string|SemanticObject|array|null $date = null;
    private string|SemanticObject|array|null $description = null;
    private string|SemanticObject|array|null $name = null;
    private string|SemanticObject|array|null $characteristicOf = null;
    private string|SemanticObject|array|null $dimension = null;
    private QuantitativeValue|string|SemanticObject|array|null $quantity = null;
    private Order|string|SemanticObject|array|null $partOf = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->discount = $params['discount'] ?? null;
        $this->quantityValue = $params['quantityValue'] ?? null;
        $this->concerns = $params['concerns'] ?? [];
        $this->price = $params['price'] ?? null;
        $this->isFulfilledBy = $params['isFulfilledBy'] ?? null;
        $this->date = $params['date'] ?? null;
        $this->description = $params['description'] ?? null;
        $this->name = $params['name'] ?? null;
        $this->characteristicOf = $params['characteristicOf'] ?? null;
        $this->dimension = $params['dimension'] ?? null;
        $this->quantity = $params['quantity'] ?? null;
        $this->partOf = $params['partOf'] ?? null;
        $this->registerSemanticProperty('dfc-b:discount', fn() => $this->discount);
        $this->registerSemanticProperty('dfc-b:quantity', fn() => $this->quantityValue);
        $this->registerSemanticProperty('dfc-b:concerns', fn() => $this->concerns);
        $this->registerSemanticProperty('dfc-b:hasPrice', fn() => $this->price);
        $this->registerSemanticProperty('dfc-b:isFulfilledBy', fn() => $this->isFulfilledBy);
        $this->registerSemanticProperty('dfc-b:date', fn() => $this->date);
        $this->registerSemanticProperty('dfc-b:description', fn() => $this->description);
        $this->registerSemanticProperty('dfc-b:name', fn() => $this->name);
        $this->registerSemanticProperty('dfc-b:characteristicOf', fn() => $this->characteristicOf);
        $this->registerSemanticProperty('dfc-b:hasDimension', fn() => $this->dimension);
        $this->registerSemanticProperty('dfc-b:hasQuantity', fn() => $this->quantity);
        $this->registerSemanticProperty('dfc-b:partOf', fn() => $this->partOf);
    }
    public function getDiscount(): float|string|SemanticObject|array|null
    {
        return $this->discount;
    }

    public function setDiscount(float|string|SemanticObject|array|null $discount): static
    {
        $this->discount = $discount;
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

    public function getConcerns(): array|string|SemanticObject|null
    {
        return $this->concerns;
    }

    public function setConcerns(array|string|SemanticObject|null $concerns): static
    {
        $this->concerns = $concerns;
        return $this;
    }

    public function addConcerns(string|SemanticObject $concerns): static
    {
        if ($this->concerns === null) {
            $this->concerns = [];
        } elseif (!is_array($this->concerns)) {
            $this->concerns = [$this->concerns];
        }
        $this->concerns[] = $concerns;
        return $this;
    }

    public function removeConcerns(string|SemanticObject $concerns): void
    {
        if (!is_array($this->concerns)) {
            return;
        }
        $key = array_search($concerns, $this->concerns, true);
        if ($key !== false) {
            unset($this->concerns[$key]);
        }
    }

    public function getPrice(): string|SemanticObject|array|null
    {
        return $this->price;
    }

    public function setPrice(string|SemanticObject|array|null $price): static
    {
        $this->price = $price;
        return $this;
    }

    public function getIsFulfilledBy(): string|SemanticObject|array|null
    {
        return $this->isFulfilledBy;
    }

    public function setIsFulfilledBy(string|SemanticObject|array|null $isFulfilledBy): static
    {
        $this->isFulfilledBy = $isFulfilledBy;
        return $this;
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

    public function getQuantity(): QuantitativeValue|string|SemanticObject|array|null
    {
        return $this->quantity;
    }

    public function setQuantity(QuantitativeValue|string|SemanticObject|array|null $quantity): static
    {
        $this->quantity = $quantity;
        return $this;
    }

    public function getPartOf(): Order|string|SemanticObject|array|null
    {
        return $this->partOf;
    }

    public function setPartOf(Order|string|SemanticObject|array|null $partOf): static
    {
        $this->partOf = $partOf;
        return $this;
    }
}
