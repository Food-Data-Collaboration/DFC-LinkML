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

use DataFoodConsortium\Connector\HowSubject;
use DataFoodConsortium\Connector\QuantitativeValue;
use DataFoodConsortium\Connector\SaleSession;
use DataFoodConsortium\Connector\SemanticObject;

class ShippingOption extends HowSubject implements IShippingOption
{
    public const SEMANTIC_TYPE = 'dfc-b:ShippingOption';

    private string|SemanticObject|array|null $endDate = null;
    private float|string|SemanticObject|array|null $fee = null;
    private float|string|SemanticObject|array|null $quantityValue = null;
    private string|SemanticObject|array|null $startDate = null;
    private string|SemanticObject|array|null $selectedBy = null;
    private QuantitativeValue|string|SemanticObject|array|null $quantity = null;
    private SaleSession|string|SemanticObject|array|null $optionOf = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->endDate = $params['endDate'] ?? null;
        $this->fee = $params['fee'] ?? null;
        $this->quantityValue = $params['quantityValue'] ?? null;
        $this->startDate = $params['startDate'] ?? null;
        $this->selectedBy = $params['selectedBy'] ?? null;
        $this->quantity = $params['quantity'] ?? null;
        $this->optionOf = $params['optionOf'] ?? null;
        $this->registerSemanticProperty('dfc-b:endDate', fn() => $this->endDate);
        $this->registerSemanticProperty('dfc-b:fee', fn() => $this->fee);
        $this->registerSemanticProperty('dfc-b:quantity', fn() => $this->quantityValue);
        $this->registerSemanticProperty('dfc-b:startDate', fn() => $this->startDate);
        $this->registerSemanticProperty('dfc-b:selectedBy', fn() => $this->selectedBy);
        $this->registerSemanticProperty('dfc-b:hasQuantity', fn() => $this->quantity);
        $this->registerSemanticProperty('dfc-b:optionOf', fn() => $this->optionOf);
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

    public function getFee(): float|string|SemanticObject|array|null
    {
        return $this->fee;
    }

    public function setFee(float|string|SemanticObject|array|null $fee): static
    {
        $this->fee = $fee;
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

    public function getSelectedBy(): string|SemanticObject|array|null
    {
        return $this->selectedBy;
    }

    public function setSelectedBy(string|SemanticObject|array|null $selectedBy): static
    {
        $this->selectedBy = $selectedBy;
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

    public function getOptionOf(): SaleSession|string|SemanticObject|array|null
    {
        return $this->optionOf;
    }

    public function setOptionOf(SaleSession|string|SemanticObject|array|null $optionOf): static
    {
        $this->optionOf = $optionOf;
        return $this;
    }
}
