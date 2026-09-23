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

use DataFoodConsortium\Connector\Agent;
use DataFoodConsortium\Connector\DefinedProduct;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\TechnicalProduct;

class FunctionalProduct extends DefinedProduct implements IFunctionalProduct
{
    public const SEMANTIC_TYPE = 'dfc-b:FunctionalProduct';

    private Agent|string|SemanticObject|array|null $requestedBy = null;
    private TechnicalProduct|string|SemanticObject|array|null $satisfiedBy = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->requestedBy = $params['requestedBy'] ?? null;
        $this->satisfiedBy = $params['satisfiedBy'] ?? null;
        $this->registerSemanticProperty('dfc-b:requestedBy', fn() => $this->requestedBy);
        $this->registerSemanticProperty('dfc-b:satisfiedBy', fn() => $this->satisfiedBy);
    }
    public function getRequestedBy(): Agent|string|SemanticObject|array|null
    {
        return $this->requestedBy;
    }

    public function setRequestedBy(Agent|string|SemanticObject|array|null $requestedBy): static
    {
        $this->requestedBy = $requestedBy;
        return $this;
    }

    public function getSatisfiedBy(): TechnicalProduct|string|SemanticObject|array|null
    {
        return $this->satisfiedBy;
    }

    public function setSatisfiedBy(TechnicalProduct|string|SemanticObject|array|null $satisfiedBy): static
    {
        $this->satisfiedBy = $satisfiedBy;
        return $this;
    }
}
