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

use DataFoodConsortium\Connector\Address;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\ShippingOption;

class DeliveryOption extends ShippingOption implements IDeliveryOption
{
    public const SEMANTIC_TYPE = 'dfc-b:DeliveryOption';

    private string|SemanticObject|array|null $accessibilityInfo = null;
    private string|SemanticObject|array|null $deliveryConstraint = null;
    private string|SemanticObject|array|null $deliveredAt = null;
    private array|string|SemanticObject|null $uses = [];
    private Address|string|SemanticObject|array|null $refersTo = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->accessibilityInfo = $params['accessibilityInfo'] ?? null;
        $this->deliveryConstraint = $params['deliveryConstraint'] ?? null;
        $this->deliveredAt = $params['deliveredAt'] ?? null;
        $this->uses = $params['uses'] ?? [];
        $this->refersTo = $params['refersTo'] ?? null;
        $this->registerSemanticProperty('dfc-b:accessibilityInfo', fn() => $this->accessibilityInfo);
        $this->registerSemanticProperty('dfc-b:deliveryConstraint', fn() => $this->deliveryConstraint);
        $this->registerSemanticProperty('dfc-b:deliveredAt', fn() => $this->deliveredAt);
        $this->registerSemanticProperty('dfc-b:uses', fn() => $this->uses);
        $this->registerSemanticProperty('dfc-b:refersTo', fn() => $this->refersTo);
    }
    public function getAccessibilityInfo(): string|SemanticObject|array|null
    {
        return $this->accessibilityInfo;
    }

    public function setAccessibilityInfo(string|SemanticObject|array|null $accessibilityInfo): static
    {
        $this->accessibilityInfo = $accessibilityInfo;
        return $this;
    }

    public function getDeliveryConstraint(): string|SemanticObject|array|null
    {
        return $this->deliveryConstraint;
    }

    public function setDeliveryConstraint(string|SemanticObject|array|null $deliveryConstraint): static
    {
        $this->deliveryConstraint = $deliveryConstraint;
        return $this;
    }

    public function getDeliveredAt(): string|SemanticObject|array|null
    {
        return $this->deliveredAt;
    }

    public function setDeliveredAt(string|SemanticObject|array|null $deliveredAt): static
    {
        $this->deliveredAt = $deliveredAt;
        return $this;
    }

    public function getUses(): array|string|SemanticObject|null
    {
        return $this->uses;
    }

    public function setUses(array|string|SemanticObject|null $uses): static
    {
        $this->uses = $uses;
        return $this;
    }

    public function addUses(string|SemanticObject $uses): static
    {
        if ($this->uses === null) {
            $this->uses = [];
        } elseif (!is_array($this->uses)) {
            $this->uses = [$this->uses];
        }
        $this->uses[] = $uses;
        return $this;
    }

    public function removeUses(string|SemanticObject $uses): void
    {
        if ($this->uses === null) {
            return;
        }
        if (!is_array($this->uses)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->uses === $uses) {
                $this->uses = [];
            }
            return;
        }
        $key = array_search($uses, $this->uses, true);
        if ($key !== false) {
            unset($this->uses[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->uses = array_values($this->uses);
        }
    }

    public function getRefersTo(): Address|string|SemanticObject|array|null
    {
        return $this->refersTo;
    }

    public function setRefersTo(Address|string|SemanticObject|array|null $refersTo): static
    {
        $this->refersTo = $refersTo;
        return $this;
    }
}
