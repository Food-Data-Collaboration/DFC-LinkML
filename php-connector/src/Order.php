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
use DataFoodConsortium\Connector\OrderLine;
use DataFoodConsortium\Connector\SaleSession;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\ShippingOption;

class Order extends SemanticObject implements IOrder
{
    public const SEMANTIC_TYPE = 'dfc-b:Order';

    private float|string|SemanticObject|array|null $discount = null;
    private string|SemanticObject|array|null $orderNumber = null;
    private string|SemanticObject|array|null $fulfilmentStatus = null;
    private string|SemanticObject|array|null $orderStatus = null;
    private string|SemanticObject|array|null $paymentMethod = null;
    private string|SemanticObject|array|null $paymentStatus = null;
    private string|SemanticObject|array|null $soldBy = null;
    private string|SemanticObject|array|null $uses = null;
    private string|SemanticObject|array|null $date = null;
    private string|SemanticObject|array|null $description = null;
    private string|SemanticObject|array|null $name = null;
    private string|SemanticObject|array|null $characteristicOf = null;
    private string|SemanticObject|array|null $dimension = null;
    private SaleSession|string|SemanticObject|array|null $belongsTo = null;
    private array|OrderLine|string|SemanticObject|null $part = [];
    private Agent|string|SemanticObject|array|null $orderedBy = null;
    private ShippingOption|string|SemanticObject|array|null $selects = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->discount = $params['discount'] ?? null;
        $this->orderNumber = $params['orderNumber'] ?? null;
        $this->fulfilmentStatus = $params['fulfilmentStatus'] ?? null;
        $this->orderStatus = $params['orderStatus'] ?? null;
        $this->paymentMethod = $params['paymentMethod'] ?? null;
        $this->paymentStatus = $params['paymentStatus'] ?? null;
        $this->soldBy = $params['soldBy'] ?? null;
        $this->uses = $params['uses'] ?? null;
        $this->date = $params['date'] ?? null;
        $this->description = $params['description'] ?? null;
        $this->name = $params['name'] ?? null;
        $this->characteristicOf = $params['characteristicOf'] ?? null;
        $this->dimension = $params['dimension'] ?? null;
        $this->belongsTo = $params['belongsTo'] ?? null;
        $this->part = $params['part'] ?? [];
        $this->orderedBy = $params['orderedBy'] ?? null;
        $this->selects = $params['selects'] ?? null;
        $this->registerSemanticProperty('dfc-b:discount', fn() => $this->discount);
        $this->registerSemanticProperty('dfc-b:orderNumber', fn() => $this->orderNumber);
        $this->registerSemanticProperty('dfc-b:hasFulfilmentStatus', fn() => $this->fulfilmentStatus);
        $this->registerSemanticProperty('dfc-b:hasOrderStatus', fn() => $this->orderStatus);
        $this->registerSemanticProperty('dfc-b:hasPaymentMethod', fn() => $this->paymentMethod);
        $this->registerSemanticProperty('dfc-b:hasPaymentStatus', fn() => $this->paymentStatus);
        $this->registerSemanticProperty('dfc-b:soldBy', fn() => $this->soldBy);
        $this->registerSemanticProperty('dfc-b:uses', fn() => $this->uses);
        $this->registerSemanticProperty('dfc-b:date', fn() => $this->date);
        $this->registerSemanticProperty('dfc-b:description', fn() => $this->description);
        $this->registerSemanticProperty('dfc-b:name', fn() => $this->name);
        $this->registerSemanticProperty('dfc-b:characteristicOf', fn() => $this->characteristicOf);
        $this->registerSemanticProperty('dfc-b:hasDimension', fn() => $this->dimension);
        $this->registerSemanticProperty('dfc-b:belongsTo', fn() => $this->belongsTo);
        $this->registerSemanticProperty('dfc-b:hasPart', fn() => $this->part);
        $this->registerSemanticProperty('dfc-b:orderedBy', fn() => $this->orderedBy);
        $this->registerSemanticProperty('dfc-b:selects', fn() => $this->selects);
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

    public function getOrderNumber(): string|SemanticObject|array|null
    {
        return $this->orderNumber;
    }

    public function setOrderNumber(string|SemanticObject|array|null $orderNumber): static
    {
        $this->orderNumber = $orderNumber;
        return $this;
    }

    public function getFulfilmentStatus(): string|SemanticObject|array|null
    {
        return $this->fulfilmentStatus;
    }

    public function setFulfilmentStatus(string|SemanticObject|array|null $fulfilmentStatus): static
    {
        $this->fulfilmentStatus = $fulfilmentStatus;
        return $this;
    }

    public function getOrderStatus(): string|SemanticObject|array|null
    {
        return $this->orderStatus;
    }

    public function setOrderStatus(string|SemanticObject|array|null $orderStatus): static
    {
        $this->orderStatus = $orderStatus;
        return $this;
    }

    public function getPaymentMethod(): string|SemanticObject|array|null
    {
        return $this->paymentMethod;
    }

    public function setPaymentMethod(string|SemanticObject|array|null $paymentMethod): static
    {
        $this->paymentMethod = $paymentMethod;
        return $this;
    }

    public function getPaymentStatus(): string|SemanticObject|array|null
    {
        return $this->paymentStatus;
    }

    public function setPaymentStatus(string|SemanticObject|array|null $paymentStatus): static
    {
        $this->paymentStatus = $paymentStatus;
        return $this;
    }

    public function getSoldBy(): string|SemanticObject|array|null
    {
        return $this->soldBy;
    }

    public function setSoldBy(string|SemanticObject|array|null $soldBy): static
    {
        $this->soldBy = $soldBy;
        return $this;
    }

    public function getUses(): string|SemanticObject|array|null
    {
        return $this->uses;
    }

    public function setUses(string|SemanticObject|array|null $uses): static
    {
        $this->uses = $uses;
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

    public function getBelongsTo(): SaleSession|string|SemanticObject|array|null
    {
        return $this->belongsTo;
    }

    public function setBelongsTo(SaleSession|string|SemanticObject|array|null $belongsTo): static
    {
        $this->belongsTo = $belongsTo;
        return $this;
    }

    public function getPart(): array|OrderLine|string|SemanticObject|null
    {
        return $this->part;
    }

    public function setPart(array|OrderLine|string|SemanticObject|null $part): static
    {
        $this->part = $part;
        return $this;
    }

    public function addPart(OrderLine|string|SemanticObject $part): static
    {
        if ($this->part === null) {
            $this->part = [];
        } elseif (!is_array($this->part)) {
            $this->part = [$this->part];
        }
        $this->part[] = $part;
        return $this;
    }

    public function removePart(OrderLine|string|SemanticObject $part): void
    {
        if ($this->part === null) {
            return;
        }
        if (!is_array($this->part)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->part === $part) {
                $this->part = [];
            }
            return;
        }
        $key = array_search($part, $this->part, true);
        if ($key !== false) {
            unset($this->part[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->part = array_values($this->part);
        }
    }

    public function getOrderedBy(): Agent|string|SemanticObject|array|null
    {
        return $this->orderedBy;
    }

    public function setOrderedBy(Agent|string|SemanticObject|array|null $orderedBy): static
    {
        $this->orderedBy = $orderedBy;
        return $this;
    }

    public function getSelects(): ShippingOption|string|SemanticObject|array|null
    {
        return $this->selects;
    }

    public function setSelects(ShippingOption|string|SemanticObject|array|null $selects): static
    {
        $this->selects = $selects;
        return $this;
    }
}
