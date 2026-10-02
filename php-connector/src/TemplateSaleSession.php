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

use DataFoodConsortium\Connector\Place;
use DataFoodConsortium\Connector\SemanticObject;

class TemplateSaleSession extends SemanticObject implements ITemplateSaleSession
{
    public const SEMANTIC_TYPE = 'dfc-b:TemplateSaleSession';

    private array|string|SemanticObject|null $isTemplateSaleSessionOf = [];
    private string|SemanticObject|array|null $date = null;
    private string|SemanticObject|array|null $description = null;
    private string|SemanticObject|array|null $name = null;
    private string|SemanticObject|array|null $characteristicOf = null;
    private string|SemanticObject|array|null $dimension = null;
    private array|Place|string|SemanticObject|null $hostedAt = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->isTemplateSaleSessionOf = $params['isTemplateSaleSessionOf'] ?? [];
        $this->date = $params['date'] ?? null;
        $this->description = $params['description'] ?? null;
        $this->name = $params['name'] ?? null;
        $this->characteristicOf = $params['characteristicOf'] ?? null;
        $this->dimension = $params['dimension'] ?? null;
        $this->hostedAt = $params['hostedAt'] ?? [];
        $this->registerSemanticProperty('dfc-b:isTemplateSaleSessionOf', fn() => $this->isTemplateSaleSessionOf);
        $this->registerSemanticProperty('dfc-b:date', fn() => $this->date);
        $this->registerSemanticProperty('dfc-b:description', fn() => $this->description);
        $this->registerSemanticProperty('dfc-b:name', fn() => $this->name);
        $this->registerSemanticProperty('dfc-b:characteristicOf', fn() => $this->characteristicOf);
        $this->registerSemanticProperty('dfc-b:hasDimension', fn() => $this->dimension);
        $this->registerSemanticProperty('dfc-b:hostedAt', fn() => $this->hostedAt);
    }
    public function getIsTemplateSaleSessionOf(): array|string|SemanticObject|null
    {
        return $this->isTemplateSaleSessionOf;
    }

    public function setIsTemplateSaleSessionOf(array|string|SemanticObject|null $isTemplateSaleSessionOf): static
    {
        $this->isTemplateSaleSessionOf = $isTemplateSaleSessionOf;
        return $this;
    }

    public function addIsTemplateSaleSessionOf(string|SemanticObject $isTemplateSaleSessionOf): static
    {
        if ($this->isTemplateSaleSessionOf === null) {
            $this->isTemplateSaleSessionOf = [];
        } elseif (!is_array($this->isTemplateSaleSessionOf)) {
            $this->isTemplateSaleSessionOf = [$this->isTemplateSaleSessionOf];
        }
        $this->isTemplateSaleSessionOf[] = $isTemplateSaleSessionOf;
        return $this;
    }

    public function removeIsTemplateSaleSessionOf(string|SemanticObject $isTemplateSaleSessionOf): void
    {
        if ($this->isTemplateSaleSessionOf === null) {
            return;
        }
        if (!is_array($this->isTemplateSaleSessionOf)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->isTemplateSaleSessionOf === $isTemplateSaleSessionOf) {
                $this->isTemplateSaleSessionOf = [];
            }
            return;
        }
        $key = array_search($isTemplateSaleSessionOf, $this->isTemplateSaleSessionOf, true);
        if ($key !== false) {
            unset($this->isTemplateSaleSessionOf[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->isTemplateSaleSessionOf = array_values($this->isTemplateSaleSessionOf);
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

    public function getHostedAt(): array|Place|string|SemanticObject|null
    {
        return $this->hostedAt;
    }

    public function setHostedAt(array|Place|string|SemanticObject|null $hostedAt): static
    {
        $this->hostedAt = $hostedAt;
        return $this;
    }

    public function addHostedAt(Place|string|SemanticObject $hostedAt): static
    {
        if ($this->hostedAt === null) {
            $this->hostedAt = [];
        } elseif (!is_array($this->hostedAt)) {
            $this->hostedAt = [$this->hostedAt];
        }
        $this->hostedAt[] = $hostedAt;
        return $this;
    }

    public function removeHostedAt(Place|string|SemanticObject $hostedAt): void
    {
        if ($this->hostedAt === null) {
            return;
        }
        if (!is_array($this->hostedAt)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->hostedAt === $hostedAt) {
                $this->hostedAt = [];
            }
            return;
        }
        $key = array_search($hostedAt, $this->hostedAt, true);
        if ($key !== false) {
            unset($this->hostedAt[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->hostedAt = array_values($this->hostedAt);
        }
    }
}
