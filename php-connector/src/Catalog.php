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

use DataFoodConsortium\Connector\Organization;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\WhereSubject;

class Catalog extends WhereSubject implements ICatalog
{
    public const SEMANTIC_TYPE = 'dfc-b:Catalog';

    private string|SemanticObject|array|null $endDate = null;
    private string|SemanticObject|array|null $startDate = null;
    private array|string|SemanticObject|null $lists = [];
    private Organization|string|SemanticObject|array|null $maintainedBy = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->endDate = $params['endDate'] ?? null;
        $this->startDate = $params['startDate'] ?? null;
        $this->lists = $params['lists'] ?? [];
        $this->maintainedBy = $params['maintainedBy'] ?? null;
        $this->registerSemanticProperty('dfc-b:endDate', fn() => $this->endDate);
        $this->registerSemanticProperty('dfc-b:startDate', fn() => $this->startDate);
        $this->registerSemanticProperty('dfc-b:lists', fn() => $this->lists);
        $this->registerSemanticProperty('dfc-b:maintainedBy', fn() => $this->maintainedBy);
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

    public function getStartDate(): string|SemanticObject|array|null
    {
        return $this->startDate;
    }

    public function setStartDate(string|SemanticObject|array|null $startDate): static
    {
        $this->startDate = $startDate;
        return $this;
    }

    public function getLists(): array|string|SemanticObject|null
    {
        return $this->lists;
    }

    public function setLists(array|string|SemanticObject|null $lists): static
    {
        $this->lists = $lists;
        return $this;
    }

    public function addLists(string|SemanticObject $lists): static
    {
        if ($this->lists === null) {
            $this->lists = [];
        } elseif (!is_array($this->lists)) {
            $this->lists = [$this->lists];
        }
        $this->lists[] = $lists;
        return $this;
    }

    public function removeLists(string|SemanticObject $lists): void
    {
        if (!is_array($this->lists)) {
            return;
        }
        $key = array_search($lists, $this->lists, true);
        if ($key !== false) {
            unset($this->lists[$key]);
        }
    }

    public function getMaintainedBy(): Organization|string|SemanticObject|array|null
    {
        return $this->maintainedBy;
    }

    public function setMaintainedBy(Organization|string|SemanticObject|array|null $maintainedBy): static
    {
        $this->maintainedBy = $maintainedBy;
        return $this;
    }
}
