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

use DataFoodConsortium\Connector\PhysicalPlace;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\Stock;

class TheoriticalStock extends Stock implements ITheoriticalStock
{
    public const SEMANTIC_TYPE = 'dfc-b:TheoriticalStock';

    private array|string|SemanticObject|null $constitutes = [];
    private PhysicalPlace|string|SemanticObject|array|null $localizedBy = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->constitutes = $params['constitutes'] ?? [];
        $this->localizedBy = $params['localizedBy'] ?? null;
        $this->registerSemanticProperty('dfc-b:constitutes', fn() => $this->constitutes);
        $this->registerSemanticProperty('dfc-b:localizedBy', fn() => $this->localizedBy);
    }
    public function getConstitutes(): array|string|SemanticObject|null
    {
        return $this->constitutes;
    }

    public function setConstitutes(array|string|SemanticObject|null $constitutes): static
    {
        $this->constitutes = $constitutes;
        return $this;
    }

    public function addConstitutes(string|SemanticObject $constitutes): static
    {
        if ($this->constitutes === null) {
            $this->constitutes = [];
        } elseif (!is_array($this->constitutes)) {
            $this->constitutes = [$this->constitutes];
        }
        $this->constitutes[] = $constitutes;
        return $this;
    }

    public function removeConstitutes(string|SemanticObject $constitutes): void
    {
        if (!is_array($this->constitutes)) {
            return;
        }
        $key = array_search($constitutes, $this->constitutes, true);
        if ($key !== false) {
            unset($this->constitutes[$key]);
        }
    }

    public function getLocalizedBy(): PhysicalPlace|string|SemanticObject|array|null
    {
        return $this->localizedBy;
    }

    public function setLocalizedBy(PhysicalPlace|string|SemanticObject|array|null $localizedBy): static
    {
        $this->localizedBy = $localizedBy;
        return $this;
    }
}
