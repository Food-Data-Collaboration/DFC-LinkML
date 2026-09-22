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

class OpeningHoursSpecification extends SemanticObject implements IOpeningHoursSpecification
{
    public const SEMANTIC_TYPE = 'dfc-b:OpeningHoursSpecification';

    private string|SemanticObject|array|null $dayOfWeek = null;
    private array|string|SemanticObject|null $opens = [];
    private array|string|SemanticObject|null $closes = [];
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
        $this->dayOfWeek = $params['dayOfWeek'] ?? null;
        $this->opens = $params['opens'] ?? [];
        $this->closes = $params['closes'] ?? [];
        $this->date = $params['date'] ?? null;
        $this->description = $params['description'] ?? null;
        $this->name = $params['name'] ?? null;
        $this->characteristicOf = $params['characteristicOf'] ?? null;
        $this->dimension = $params['dimension'] ?? null;
        $this->registerSemanticProperty('https://schema.org/dayOfWeek', fn() => $this->dayOfWeek);
        $this->registerSemanticProperty('https://schema.org/opens', fn() => $this->opens);
        $this->registerSemanticProperty('dfc-b:closes', fn() => $this->closes);
        $this->registerSemanticProperty('dfc-b:date', fn() => $this->date);
        $this->registerSemanticProperty('dfc-b:description', fn() => $this->description);
        $this->registerSemanticProperty('dfc-b:name', fn() => $this->name);
        $this->registerSemanticProperty('dfc-b:characteristicOf', fn() => $this->characteristicOf);
        $this->registerSemanticProperty('dfc-b:hasDimension', fn() => $this->dimension);
    }
    public function getDayOfWeek(): string|SemanticObject|array|null
    {
        return $this->dayOfWeek;
    }

    public function setDayOfWeek(string|SemanticObject|array|null $dayOfWeek): static
    {
        $this->dayOfWeek = $dayOfWeek;
        return $this;
    }

    public function getOpens(): array|string|SemanticObject|null
    {
        return $this->opens;
    }

    public function setOpens(array|string|SemanticObject|null $opens): static
    {
        $this->opens = $opens;
        return $this;
    }

    public function addOpens(string|SemanticObject $opens): static
    {
        if ($this->opens === null) {
            $this->opens = [];
        } elseif (!is_array($this->opens)) {
            $this->opens = [$this->opens];
        }
        $this->opens[] = $opens;
        return $this;
    }

    public function removeOpens(string|SemanticObject $opens): void
    {
        if (!is_array($this->opens)) {
            return;
        }
        $key = array_search($opens, $this->opens, true);
        if ($key !== false) {
            unset($this->opens[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->opens = array_values($this->opens);
        }
    }

    public function getCloses(): array|string|SemanticObject|null
    {
        return $this->closes;
    }

    public function setCloses(array|string|SemanticObject|null $closes): static
    {
        $this->closes = $closes;
        return $this;
    }

    public function addCloses(string|SemanticObject $closes): static
    {
        if ($this->closes === null) {
            $this->closes = [];
        } elseif (!is_array($this->closes)) {
            $this->closes = [$this->closes];
        }
        $this->closes[] = $closes;
        return $this;
    }

    public function removeCloses(string|SemanticObject $closes): void
    {
        if (!is_array($this->closes)) {
            return;
        }
        $key = array_search($closes, $this->closes, true);
        if ($key !== false) {
            unset($this->closes[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->closes = array_values($this->closes);
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
}
