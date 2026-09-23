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
use DataFoodConsortium\Connector\SemanticObject;

class Person extends Agent implements IPerson
{
    public const SEMANTIC_TYPE = 'dfc-b:Person';

    private string|SemanticObject|array|null $familyName = null;
    private string|SemanticObject|array|null $firstName = null;
    private string|SemanticObject|array|null $mainContactOf = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->familyName = $params['familyName'] ?? null;
        $this->firstName = $params['firstName'] ?? null;
        $this->mainContactOf = $params['mainContactOf'] ?? null;
        $this->registerSemanticProperty('dfc-b:familyName', fn() => $this->familyName);
        $this->registerSemanticProperty('dfc-b:firstName', fn() => $this->firstName);
        $this->registerSemanticProperty('dfc-b:mainContactOf', fn() => $this->mainContactOf);
    }
    public function getFamilyName(): string|SemanticObject|array|null
    {
        return $this->familyName;
    }

    public function setFamilyName(string|SemanticObject|array|null $familyName): static
    {
        $this->familyName = $familyName;
        return $this;
    }

    public function getFirstName(): string|SemanticObject|array|null
    {
        return $this->firstName;
    }

    public function setFirstName(string|SemanticObject|array|null $firstName): static
    {
        $this->firstName = $firstName;
        return $this;
    }

    public function getMainContactOf(): string|SemanticObject|array|null
    {
        return $this->mainContactOf;
    }

    public function setMainContactOf(string|SemanticObject|array|null $mainContactOf): static
    {
        $this->mainContactOf = $mainContactOf;
        return $this;
    }
}
