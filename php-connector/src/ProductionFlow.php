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

use DataFoodConsortium\Connector\QuantitativeValue;
use DataFoodConsortium\Connector\SemanticObject;

class ProductionFlow extends SemanticObject implements IProductionFlow
{
    public const SEMANTIC_TYPE = 'dfc-b:ProductionFlow';

    private float|string|SemanticObject|array|null $quantityValue = null;
    private string|SemanticObject|array|null $outputOf = null;
    private array|string|SemanticObject|null $produces = [];
    private string|SemanticObject|array|null $date = null;
    private string|SemanticObject|array|null $description = null;
    private string|SemanticObject|array|null $name = null;
    private string|SemanticObject|array|null $characteristicOf = null;
    private string|SemanticObject|array|null $dimension = null;
    private QuantitativeValue|string|SemanticObject|array|null $quantity = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->quantityValue = $params['quantityValue'] ?? null;
        $this->outputOf = $params['outputOf'] ?? null;
        $this->produces = $params['produces'] ?? [];
        $this->date = $params['date'] ?? null;
        $this->description = $params['description'] ?? null;
        $this->name = $params['name'] ?? null;
        $this->characteristicOf = $params['characteristicOf'] ?? null;
        $this->dimension = $params['dimension'] ?? null;
        $this->quantity = $params['quantity'] ?? null;
        $this->registerSemanticProperty('dfc-b:quantity', fn() => $this->quantityValue);
        $this->registerSemanticProperty('dfc-b:outputOf', fn() => $this->outputOf);
        $this->registerSemanticProperty('dfc-b:produces', fn() => $this->produces);
        $this->registerSemanticProperty('dfc-b:date', fn() => $this->date);
        $this->registerSemanticProperty('dfc-b:description', fn() => $this->description);
        $this->registerSemanticProperty('dfc-b:name', fn() => $this->name);
        $this->registerSemanticProperty('dfc-b:characteristicOf', fn() => $this->characteristicOf);
        $this->registerSemanticProperty('dfc-b:hasDimension', fn() => $this->dimension);
        $this->registerSemanticProperty('dfc-b:hasQuantity', fn() => $this->quantity);
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

    public function getOutputOf(): string|SemanticObject|array|null
    {
        return $this->outputOf;
    }

    public function setOutputOf(string|SemanticObject|array|null $outputOf): static
    {
        $this->outputOf = $outputOf;
        return $this;
    }

    public function getProduces(): array|string|SemanticObject|null
    {
        return $this->produces;
    }

    public function setProduces(array|string|SemanticObject|null $produces): static
    {
        $this->produces = $produces;
        return $this;
    }

    public function addProduces(string|SemanticObject $produces): static
    {
        if ($this->produces === null) {
            $this->produces = [];
        } elseif (!is_array($this->produces)) {
            $this->produces = [$this->produces];
        }
        $this->produces[] = $produces;
        return $this;
    }

    public function removeProduces(string|SemanticObject $produces): void
    {
        if ($this->produces === null) {
            return;
        }
        if (!is_array($this->produces)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->produces === $produces) {
                $this->produces = [];
            }
            return;
        }
        $key = array_search($produces, $this->produces, true);
        if ($key !== false) {
            unset($this->produces[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->produces = array_values($this->produces);
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

    public function getQuantity(): QuantitativeValue|string|SemanticObject|array|null
    {
        return $this->quantity;
    }

    public function setQuantity(QuantitativeValue|string|SemanticObject|array|null $quantity): static
    {
        $this->quantity = $quantity;
        return $this;
    }
}
