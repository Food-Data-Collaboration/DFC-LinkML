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
use DataFoodConsortium\Connector\WhatSubject;

class Certfication extends WhatSubject implements ICertfication
{
    public const SEMANTIC_TYPE = 'dfc-b:Certfication';

    private string|SemanticObject|array|null $certiferReference = null;
    private string|SemanticObject|array|null $certificationScore = null;
    private string|SemanticObject|array|null $operatorId = null;
    private array|string|SemanticObject|null $certifies = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->certiferReference = $params['certiferReference'] ?? null;
        $this->certificationScore = $params['certificationScore'] ?? null;
        $this->operatorId = $params['operatorId'] ?? null;
        $this->certifies = $params['certifies'] ?? [];
        $this->registerSemanticProperty('dfc-b:certiferReference', fn() => $this->certiferReference);
        $this->registerSemanticProperty('dfc-b:certificationScore', fn() => $this->certificationScore);
        $this->registerSemanticProperty('dfc-b:operatorId', fn() => $this->operatorId);
        $this->registerSemanticProperty('dfc-b:certifies', fn() => $this->certifies);
    }
    public function getCertiferReference(): string|SemanticObject|array|null
    {
        return $this->certiferReference;
    }

    public function setCertiferReference(string|SemanticObject|array|null $certiferReference): static
    {
        $this->certiferReference = $certiferReference;
        return $this;
    }

    public function getCertificationScore(): string|SemanticObject|array|null
    {
        return $this->certificationScore;
    }

    public function setCertificationScore(string|SemanticObject|array|null $certificationScore): static
    {
        $this->certificationScore = $certificationScore;
        return $this;
    }

    public function getOperatorId(): string|SemanticObject|array|null
    {
        return $this->operatorId;
    }

    public function setOperatorId(string|SemanticObject|array|null $operatorId): static
    {
        $this->operatorId = $operatorId;
        return $this;
    }

    public function getCertifies(): array|string|SemanticObject|null
    {
        return $this->certifies;
    }

    public function setCertifies(array|string|SemanticObject|null $certifies): static
    {
        $this->certifies = $certifies;
        return $this;
    }

    public function addCertifies(string|SemanticObject $certifies): static
    {
        if ($this->certifies === null) {
            $this->certifies = [];
        } elseif (!is_array($this->certifies)) {
            $this->certifies = [$this->certifies];
        }
        $this->certifies[] = $certifies;
        return $this;
    }

    public function removeCertifies(string|SemanticObject $certifies): void
    {
        if (!is_array($this->certifies)) {
            return;
        }
        $key = array_search($certifies, $this->certifies, true);
        if ($key !== false) {
            unset($this->certifies[$key]);
        }
    }
}
