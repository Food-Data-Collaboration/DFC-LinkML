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

use DataFoodConsortium\Connector\RepresentedThing;
use DataFoodConsortium\Connector\SemanticObject;

class QuantitativeValue extends RepresentedThing implements IQuantitativeValue
{
    public const SEMANTIC_TYPE = 'dfc-b:QuantitativeValue';

    private float|string|SemanticObject|array|null $value = null;
    private string|SemanticObject|array|null $unit = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->value = $params['value'] ?? null;
        $this->unit = $params['unit'] ?? null;
        $this->registerSemanticProperty('dfc-b:value', fn() => $this->value);
        $this->registerSemanticProperty('dfc-b:hasUnit', fn() => $this->unit);
    }
    public function getValue(): float|string|SemanticObject|array|null
    {
        return $this->value;
    }

    public function setValue(float|string|SemanticObject|array|null $value): static
    {
        $this->value = $value;
        return $this;
    }

    public function getUnit(): string|SemanticObject|array|null
    {
        return $this->unit;
    }

    public function setUnit(string|SemanticObject|array|null $unit): static
    {
        $this->unit = $unit;
        return $this;
    }
}
