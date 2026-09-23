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

use DataFoodConsortium\Connector\SemanticObject;

class ValueRECUR extends SemanticObject implements IValueRECUR
{
    public const SEMANTIC_TYPE = 'dfc-b:Value_RECUR';

    private string|SemanticObject|array|null $byday = null;
    private string|SemanticObject|array|null $bymonth = null;
    private string|SemanticObject|array|null $freq = null;
    private int|string|SemanticObject|array|null $interval = null;
    private string|SemanticObject|array|null $date = null;
    private string|SemanticObject|array|null $description = null;
    private string|SemanticObject|array|null $name = null;
    private string|SemanticObject|array|null $characteristicOf = null;
    private string|SemanticObject|array|null $dimension = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->byday = $params['byday'] ?? null;
        $this->bymonth = $params['bymonth'] ?? null;
        $this->freq = $params['freq'] ?? null;
        $this->interval = $params['interval'] ?? null;
        $this->date = $params['date'] ?? null;
        $this->description = $params['description'] ?? null;
        $this->name = $params['name'] ?? null;
        $this->characteristicOf = $params['characteristicOf'] ?? null;
        $this->dimension = $params['dimension'] ?? null;
        $this->registerSemanticProperty('http://www.w3.org/2002/12/cal/icaltzd#byday', fn() => $this->byday);
        $this->registerSemanticProperty('http://www.w3.org/2002/12/cal/icaltzd#bymonth', fn() => $this->bymonth);
        $this->registerSemanticProperty('http://www.w3.org/2002/12/cal/icaltzd#freq', fn() => $this->freq);
        $this->registerSemanticProperty('http://www.w3.org/2002/12/cal/icaltzd#interval', fn() => $this->interval);
        $this->registerSemanticProperty('dfc-b:date', fn() => $this->date);
        $this->registerSemanticProperty('dfc-b:description', fn() => $this->description);
        $this->registerSemanticProperty('dfc-b:name', fn() => $this->name);
        $this->registerSemanticProperty('dfc-b:characteristicOf', fn() => $this->characteristicOf);
        $this->registerSemanticProperty('dfc-b:hasDimension', fn() => $this->dimension);
    }
    public function getByday(): string|SemanticObject|array|null
    {
        return $this->byday;
    }

    public function setByday(string|SemanticObject|array|null $byday): static
    {
        $this->byday = $byday;
        return $this;
    }

    public function getBymonth(): string|SemanticObject|array|null
    {
        return $this->bymonth;
    }

    public function setBymonth(string|SemanticObject|array|null $bymonth): static
    {
        $this->bymonth = $bymonth;
        return $this;
    }

    public function getFreq(): string|SemanticObject|array|null
    {
        return $this->freq;
    }

    public function setFreq(string|SemanticObject|array|null $freq): static
    {
        $this->freq = $freq;
        return $this;
    }

    public function getInterval(): int|string|SemanticObject|array|null
    {
        return $this->interval;
    }

    public function setInterval(int|string|SemanticObject|array|null $interval): static
    {
        $this->interval = $interval;
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
}
