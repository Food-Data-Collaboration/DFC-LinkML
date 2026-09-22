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

use DataFoodConsortium\Connector\DefinedProduct;
use DataFoodConsortium\Connector\FunctionalProduct;
use DataFoodConsortium\Connector\Organization;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\SuppliedProduct;

class TechnicalProduct extends DefinedProduct implements ITechnicalProduct
{
    public const SEMANTIC_TYPE = 'dfc-b:TechnicalProduct';

    private SuppliedProduct|string|SemanticObject|array|null $industrializedBy = null;
    private Organization|string|SemanticObject|array|null $proposedBy = null;
    private array|FunctionalProduct|string|SemanticObject|null $satisfies = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->industrializedBy = $params['industrializedBy'] ?? null;
        $this->proposedBy = $params['proposedBy'] ?? null;
        $this->satisfies = $params['satisfies'] ?? [];
        $this->registerSemanticProperty('dfc-b:industrializedBy', fn() => $this->industrializedBy);
        $this->registerSemanticProperty('dfc-b:proposedBy', fn() => $this->proposedBy);
        $this->registerSemanticProperty('dfc-b:satisfies', fn() => $this->satisfies);
    }
    public function getIndustrializedBy(): SuppliedProduct|string|SemanticObject|array|null
    {
        return $this->industrializedBy;
    }

    public function setIndustrializedBy(SuppliedProduct|string|SemanticObject|array|null $industrializedBy): static
    {
        $this->industrializedBy = $industrializedBy;
        return $this;
    }

    public function getProposedBy(): Organization|string|SemanticObject|array|null
    {
        return $this->proposedBy;
    }

    public function setProposedBy(Organization|string|SemanticObject|array|null $proposedBy): static
    {
        $this->proposedBy = $proposedBy;
        return $this;
    }

    public function getSatisfies(): array|FunctionalProduct|string|SemanticObject|null
    {
        return $this->satisfies;
    }

    public function setSatisfies(array|FunctionalProduct|string|SemanticObject|null $satisfies): static
    {
        $this->satisfies = $satisfies;
        return $this;
    }

    public function addSatisfies(FunctionalProduct|string|SemanticObject $satisfies): static
    {
        if ($this->satisfies === null) {
            $this->satisfies = [];
        } elseif (!is_array($this->satisfies)) {
            $this->satisfies = [$this->satisfies];
        }
        $this->satisfies[] = $satisfies;
        return $this;
    }

    public function removeSatisfies(FunctionalProduct|string|SemanticObject $satisfies): void
    {
        if ($this->satisfies === null) {
            return;
        }
        if (!is_array($this->satisfies)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->satisfies === $satisfies) {
                $this->satisfies = [];
            }
            return;
        }
        $key = array_search($satisfies, $this->satisfies, true);
        if ($key !== false) {
            unset($this->satisfies[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->satisfies = array_values($this->satisfies);
        }
    }
}
