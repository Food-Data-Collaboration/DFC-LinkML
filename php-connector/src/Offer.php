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

use DataFoodConsortium\Connector\CatalogItem;
use DataFoodConsortium\Connector\CustomerCategory;
use DataFoodConsortium\Connector\SemanticObject;

class Offer extends SemanticObject implements IOffer
{
    public const SEMANTIC_TYPE = 'dfc-b:Offer';

    private float|string|SemanticObject|array|null $discount = null;
    private float|string|SemanticObject|array|null $stockLimitation = null;
    private string|SemanticObject|array|null $concernedBy = null;
    private string|SemanticObject|array|null $price = null;
    private string|SemanticObject|array|null $listedIn = null;
    private string|SemanticObject|array|null $date = null;
    private string|SemanticObject|array|null $description = null;
    private string|SemanticObject|array|null $name = null;
    private string|SemanticObject|array|null $characteristicOf = null;
    private string|SemanticObject|array|null $dimension = null;
    private array|CatalogItem|string|SemanticObject|null $offers = [];
    private array|CustomerCategory|string|SemanticObject|null $offersTo = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->discount = $params['discount'] ?? null;
        $this->stockLimitation = $params['stockLimitation'] ?? null;
        $this->concernedBy = $params['concernedBy'] ?? null;
        $this->price = $params['price'] ?? null;
        $this->listedIn = $params['listedIn'] ?? null;
        $this->date = $params['date'] ?? null;
        $this->description = $params['description'] ?? null;
        $this->name = $params['name'] ?? null;
        $this->characteristicOf = $params['characteristicOf'] ?? null;
        $this->dimension = $params['dimension'] ?? null;
        $this->offers = $params['offers'] ?? [];
        $this->offersTo = $params['offersTo'] ?? [];
        $this->registerSemanticProperty('dfc-b:discount', fn() => $this->discount);
        $this->registerSemanticProperty('dfc-b:stockLimitation', fn() => $this->stockLimitation);
        $this->registerSemanticProperty('dfc-b:concernedBy', fn() => $this->concernedBy);
        $this->registerSemanticProperty('dfc-b:hasPrice', fn() => $this->price);
        $this->registerSemanticProperty('dfc-b:listedIn', fn() => $this->listedIn);
        $this->registerSemanticProperty('dfc-b:date', fn() => $this->date);
        $this->registerSemanticProperty('dfc-b:description', fn() => $this->description);
        $this->registerSemanticProperty('dfc-b:name', fn() => $this->name);
        $this->registerSemanticProperty('dfc-b:characteristicOf', fn() => $this->characteristicOf);
        $this->registerSemanticProperty('dfc-b:hasDimension', fn() => $this->dimension);
        $this->registerSemanticProperty('dfc-b:offers', fn() => $this->offers);
        $this->registerSemanticProperty('dfc-b:offersTo', fn() => $this->offersTo);
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

    public function getStockLimitation(): float|string|SemanticObject|array|null
    {
        return $this->stockLimitation;
    }

    public function setStockLimitation(float|string|SemanticObject|array|null $stockLimitation): static
    {
        $this->stockLimitation = $stockLimitation;
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

    public function getPrice(): string|SemanticObject|array|null
    {
        return $this->price;
    }

    public function setPrice(string|SemanticObject|array|null $price): static
    {
        $this->price = $price;
        return $this;
    }

    public function getListedIn(): string|SemanticObject|array|null
    {
        return $this->listedIn;
    }

    public function setListedIn(string|SemanticObject|array|null $listedIn): static
    {
        $this->listedIn = $listedIn;
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

    public function getOffers(): array|CatalogItem|string|SemanticObject|null
    {
        return $this->offers;
    }

    public function setOffers(array|CatalogItem|string|SemanticObject|null $offers): static
    {
        $this->offers = $offers;
        return $this;
    }

    public function addOffers(CatalogItem|string|SemanticObject $offers): static
    {
        if ($this->offers === null) {
            $this->offers = [];
        } elseif (!is_array($this->offers)) {
            $this->offers = [$this->offers];
        }
        $this->offers[] = $offers;
        return $this;
    }

    public function removeOffers(CatalogItem|string|SemanticObject $offers): void
    {
        if (!is_array($this->offers)) {
            return;
        }
        $key = array_search($offers, $this->offers, true);
        if ($key !== false) {
            unset($this->offers[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->offers = array_values($this->offers);
        }
    }

    public function getOffersTo(): array|CustomerCategory|string|SemanticObject|null
    {
        return $this->offersTo;
    }

    public function setOffersTo(array|CustomerCategory|string|SemanticObject|null $offersTo): static
    {
        $this->offersTo = $offersTo;
        return $this;
    }

    public function addOffersTo(CustomerCategory|string|SemanticObject $offersTo): static
    {
        if ($this->offersTo === null) {
            $this->offersTo = [];
        } elseif (!is_array($this->offersTo)) {
            $this->offersTo = [$this->offersTo];
        }
        $this->offersTo[] = $offersTo;
        return $this;
    }

    public function removeOffersTo(CustomerCategory|string|SemanticObject $offersTo): void
    {
        if (!is_array($this->offersTo)) {
            return;
        }
        $key = array_search($offersTo, $this->offersTo, true);
        if ($key !== false) {
            unset($this->offersTo[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->offersTo = array_values($this->offersTo);
        }
    }
}
