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

use DataFoodConsortium\Connector\HowSubject;
use DataFoodConsortium\Connector\SemanticObject;

class PaymentMethod extends HowSubject implements IPaymentMethod
{
    public const SEMANTIC_TYPE = 'dfc-b:PaymentMethod';

    private string|SemanticObject|array|null $paymentMethodProvider = null;
    private string|SemanticObject|array|null $paymentMethodType = null;
    private string|SemanticObject|array|null $price = null;
    private string|SemanticObject|array|null $paidWith = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->paymentMethodProvider = $params['paymentMethodProvider'] ?? null;
        $this->paymentMethodType = $params['paymentMethodType'] ?? null;
        $this->price = $params['price'] ?? null;
        $this->paidWith = $params['paidWith'] ?? null;
        $this->registerSemanticProperty('dfc-b:paymentMethodProvider', fn() => $this->paymentMethodProvider);
        $this->registerSemanticProperty('dfc-b:paymentMethodType', fn() => $this->paymentMethodType);
        $this->registerSemanticProperty('dfc-b:hasPrice', fn() => $this->price);
        $this->registerSemanticProperty('dfc-b:paidWith', fn() => $this->paidWith);
    }
    public function getPaymentMethodProvider(): string|SemanticObject|array|null
    {
        return $this->paymentMethodProvider;
    }

    public function setPaymentMethodProvider(string|SemanticObject|array|null $paymentMethodProvider): static
    {
        $this->paymentMethodProvider = $paymentMethodProvider;
        return $this;
    }

    public function getPaymentMethodType(): string|SemanticObject|array|null
    {
        return $this->paymentMethodType;
    }

    public function setPaymentMethodType(string|SemanticObject|array|null $paymentMethodType): static
    {
        $this->paymentMethodType = $paymentMethodType;
        return $this;
    }

    public function getPrice(): string|SemanticObject|array|null
    {
        return $this->price;
    }

    public function setPrice(string|SemanticObject|array|null $price): static
    {
        $this->price = $price;
        return $this;
    }

    public function getPaidWith(): string|SemanticObject|array|null
    {
        return $this->paidWith;
    }

    public function setPaidWith(string|SemanticObject|array|null $paidWith): static
    {
        $this->paidWith = $paidWith;
        return $this;
    }
}
