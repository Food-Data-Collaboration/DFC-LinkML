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
use DataFoodConsortium\Connector\HowSubject;
use DataFoodConsortium\Connector\QuantitativeValue;
use DataFoodConsortium\Connector\SemanticObject;

class Transaction extends HowSubject implements ITransaction
{
    public const SEMANTIC_TYPE = 'dfc-b:Transaction';

    private string|SemanticObject|array|null $invoiceNumber = null;
    private float|string|SemanticObject|array|null $quantityValue = null;
    private array|string|SemanticObject|null $concerns = [];
    private string|SemanticObject|array|null $price = null;
    private Agent|string|SemanticObject|array|null $from = null;
    private QuantitativeValue|string|SemanticObject|array|null $quantity = null;
    private Agent|string|SemanticObject|array|null $to = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->invoiceNumber = $params['invoiceNumber'] ?? null;
        $this->quantityValue = $params['quantityValue'] ?? null;
        $this->concerns = $params['concerns'] ?? [];
        $this->price = $params['price'] ?? null;
        $this->from = $params['from'] ?? null;
        $this->quantity = $params['quantity'] ?? null;
        $this->to = $params['to'] ?? null;
        $this->registerSemanticProperty('dfc-b:invoiceNumber', fn() => $this->invoiceNumber);
        $this->registerSemanticProperty('dfc-b:quantity', fn() => $this->quantityValue);
        $this->registerSemanticProperty('dfc-b:concerns', fn() => $this->concerns);
        $this->registerSemanticProperty('dfc-b:hasPrice', fn() => $this->price);
        $this->registerSemanticProperty('dfc-b:from', fn() => $this->from);
        $this->registerSemanticProperty('dfc-b:hasQuantity', fn() => $this->quantity);
        $this->registerSemanticProperty('dfc-b:to', fn() => $this->to);
    }
    public function getInvoiceNumber(): string|SemanticObject|array|null
    {
        return $this->invoiceNumber;
    }

    public function setInvoiceNumber(string|SemanticObject|array|null $invoiceNumber): static
    {
        $this->invoiceNumber = $invoiceNumber;
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
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->concerns = array_values($this->concerns);
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

    public function getFrom(): Agent|string|SemanticObject|array|null
    {
        return $this->from;
    }

    public function setFrom(Agent|string|SemanticObject|array|null $from): static
    {
        $this->from = $from;
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

    public function getTo(): Agent|string|SemanticObject|array|null
    {
        return $this->to;
    }

    public function setTo(Agent|string|SemanticObject|array|null $to): static
    {
        $this->to = $to;
        return $this;
    }
}
