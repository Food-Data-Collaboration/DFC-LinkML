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
use DataFoodConsortium\Connector\WhoSubject;

class CustomerCategory extends WhoSubject implements ICustomerCategory
{
    public const SEMANTIC_TYPE = 'dfc-b:CustomerCategory';

    private string|SemanticObject|array|null $member = null;
    private string|SemanticObject|array|null $offer = null;
    private Organization|string|SemanticObject|array|null $definedBy = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->member = $params['member'] ?? null;
        $this->offer = $params['offer'] ?? null;
        $this->definedBy = $params['definedBy'] ?? null;
        $this->registerSemanticProperty('dfc-b:hasMember', fn() => $this->member);
        $this->registerSemanticProperty('dfc-b:hasOffer', fn() => $this->offer);
        $this->registerSemanticProperty('dfc-b:definedBy', fn() => $this->definedBy);
    }
    public function getMember(): string|SemanticObject|array|null
    {
        return $this->member;
    }

    public function setMember(string|SemanticObject|array|null $member): static
    {
        $this->member = $member;
        return $this;
    }

    public function getOffer(): string|SemanticObject|array|null
    {
        return $this->offer;
    }

    public function setOffer(string|SemanticObject|array|null $offer): static
    {
        $this->offer = $offer;
        return $this;
    }

    public function getDefinedBy(): Organization|string|SemanticObject|array|null
    {
        return $this->definedBy;
    }

    public function setDefinedBy(Organization|string|SemanticObject|array|null $definedBy): static
    {
        $this->definedBy = $definedBy;
        return $this;
    }
}
