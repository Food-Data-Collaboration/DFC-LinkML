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

class PhoneNumber extends WhatSubject implements IPhoneNumber
{
    public const SEMANTIC_TYPE = 'dfc-b:PhoneNumber';

    private string|SemanticObject|array|null $countryCode = null;
    private string|SemanticObject|array|null $phoneNumber = null;
    private string|SemanticObject|array|null $phoneNumberOf = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->countryCode = $params['countryCode'] ?? null;
        $this->phoneNumber = $params['phoneNumber'] ?? null;
        $this->phoneNumberOf = $params['phoneNumberOf'] ?? null;
        $this->registerSemanticProperty('dfc-b:countryCode', fn() => $this->countryCode);
        $this->registerSemanticProperty('dfc-b:phoneNumber', fn() => $this->phoneNumber);
        $this->registerSemanticProperty('dfc-b:phoneNumberOf', fn() => $this->phoneNumberOf);
    }
    public function getCountryCode(): string|SemanticObject|array|null
    {
        return $this->countryCode;
    }

    public function setCountryCode(string|SemanticObject|array|null $countryCode): static
    {
        $this->countryCode = $countryCode;
        return $this;
    }

    public function getPhoneNumber(): string|SemanticObject|array|null
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(string|SemanticObject|array|null $phoneNumber): static
    {
        $this->phoneNumber = $phoneNumber;
        return $this;
    }

    public function getPhoneNumberOf(): string|SemanticObject|array|null
    {
        return $this->phoneNumberOf;
    }

    public function setPhoneNumberOf(string|SemanticObject|array|null $phoneNumberOf): static
    {
        $this->phoneNumberOf = $phoneNumberOf;
        return $this;
    }
}
