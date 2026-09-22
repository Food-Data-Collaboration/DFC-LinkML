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

use DataFoodConsortium\Connector\PhysicalProduct;
use DataFoodConsortium\Connector\RealStock;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\WhatSubject;

class ProductBatch extends WhatSubject implements IProductBatch
{
    public const SEMANTIC_TYPE = 'dfc-b:ProductBatch';

    private string|SemanticObject|array|null $batchNumber = null;
    private string|SemanticObject|array|null $bestBeforeDate = null;
    private string|SemanticObject|array|null $expiryDate = null;
    private string|SemanticObject|array|null $productionDate = null;
    private array|RealStock|string|SemanticObject|null $identifies = [];
    private array|PhysicalProduct|string|SemanticObject|null $traces = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->batchNumber = $params['batchNumber'] ?? null;
        $this->bestBeforeDate = $params['bestBeforeDate'] ?? null;
        $this->expiryDate = $params['expiryDate'] ?? null;
        $this->productionDate = $params['productionDate'] ?? null;
        $this->identifies = $params['identifies'] ?? [];
        $this->traces = $params['traces'] ?? [];
        $this->registerSemanticProperty('dfc-b:batchNumber', fn() => $this->batchNumber);
        $this->registerSemanticProperty('dfc-b:bestBeforeDate', fn() => $this->bestBeforeDate);
        $this->registerSemanticProperty('dfc-b:expiryDate', fn() => $this->expiryDate);
        $this->registerSemanticProperty('dfc-b:productionDate', fn() => $this->productionDate);
        $this->registerSemanticProperty('dfc-b:identifies', fn() => $this->identifies);
        $this->registerSemanticProperty('dfc-b:traces', fn() => $this->traces);
    }
    public function getBatchNumber(): string|SemanticObject|array|null
    {
        return $this->batchNumber;
    }

    public function setBatchNumber(string|SemanticObject|array|null $batchNumber): static
    {
        $this->batchNumber = $batchNumber;
        return $this;
    }

    public function getBestBeforeDate(): string|SemanticObject|array|null
    {
        return $this->bestBeforeDate;
    }

    public function setBestBeforeDate(string|SemanticObject|array|null $bestBeforeDate): static
    {
        $this->bestBeforeDate = $bestBeforeDate;
        return $this;
    }

    public function getExpiryDate(): string|SemanticObject|array|null
    {
        return $this->expiryDate;
    }

    public function setExpiryDate(string|SemanticObject|array|null $expiryDate): static
    {
        $this->expiryDate = $expiryDate;
        return $this;
    }

    public function getProductionDate(): string|SemanticObject|array|null
    {
        return $this->productionDate;
    }

    public function setProductionDate(string|SemanticObject|array|null $productionDate): static
    {
        $this->productionDate = $productionDate;
        return $this;
    }

    public function getIdentifies(): array|RealStock|string|SemanticObject|null
    {
        return $this->identifies;
    }

    public function setIdentifies(array|RealStock|string|SemanticObject|null $identifies): static
    {
        $this->identifies = $identifies;
        return $this;
    }

    public function addIdentifies(RealStock|string|SemanticObject $identifies): static
    {
        if ($this->identifies === null) {
            $this->identifies = [];
        } elseif (!is_array($this->identifies)) {
            $this->identifies = [$this->identifies];
        }
        $this->identifies[] = $identifies;
        return $this;
    }

    public function removeIdentifies(RealStock|string|SemanticObject $identifies): void
    {
        if (!is_array($this->identifies)) {
            return;
        }
        $key = array_search($identifies, $this->identifies, true);
        if ($key !== false) {
            unset($this->identifies[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->identifies = array_values($this->identifies);
        }
    }

    public function getTraces(): array|PhysicalProduct|string|SemanticObject|null
    {
        return $this->traces;
    }

    public function setTraces(array|PhysicalProduct|string|SemanticObject|null $traces): static
    {
        $this->traces = $traces;
        return $this;
    }

    public function addTraces(PhysicalProduct|string|SemanticObject $traces): static
    {
        if ($this->traces === null) {
            $this->traces = [];
        } elseif (!is_array($this->traces)) {
            $this->traces = [$this->traces];
        }
        $this->traces[] = $traces;
        return $this;
    }

    public function removeTraces(PhysicalProduct|string|SemanticObject $traces): void
    {
        if (!is_array($this->traces)) {
            return;
        }
        $key = array_search($traces, $this->traces, true);
        if ($key !== false) {
            unset($this->traces[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->traces = array_values($this->traces);
        }
    }
}
