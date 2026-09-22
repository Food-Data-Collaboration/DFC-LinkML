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

use DataFoodConsortium\Connector\SaleSession;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\WhereSubject;

class Place extends WhereSubject implements IPlace
{
    public const SEMANTIC_TYPE = 'dfc-b:Place';

    private array|SaleSession|string|SemanticObject|null $hosts = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->hosts = $params['hosts'] ?? [];
        $this->registerSemanticProperty('dfc-b:hosts', fn() => $this->hosts);
    }
    public function getHosts(): array|SaleSession|string|SemanticObject|null
    {
        return $this->hosts;
    }

    public function setHosts(array|SaleSession|string|SemanticObject|null $hosts): static
    {
        $this->hosts = $hosts;
        return $this;
    }

    public function addHosts(SaleSession|string|SemanticObject $hosts): static
    {
        if ($this->hosts === null) {
            $this->hosts = [];
        } elseif (!is_array($this->hosts)) {
            $this->hosts = [$this->hosts];
        }
        $this->hosts[] = $hosts;
        return $this;
    }

    public function removeHosts(SaleSession|string|SemanticObject $hosts): void
    {
        if ($this->hosts === null) {
            return;
        }
        if (!is_array($this->hosts)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->hosts === $hosts) {
                $this->hosts = [];
            }
            return;
        }
        $key = array_search($hosts, $this->hosts, true);
        if ($key !== false) {
            unset($this->hosts[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->hosts = array_values($this->hosts);
        }
    }
}
