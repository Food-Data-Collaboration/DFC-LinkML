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
use DataFoodConsortium\Connector\ShippingOption;

class PickupOption extends ShippingOption implements IPickupOption
{
    public const SEMANTIC_TYPE = 'dfc-b:PickupOption';

    private string|SemanticObject|array|null $pickedUpAt = null;
    private array|string|SemanticObject|null $uses = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->pickedUpAt = $params['pickedUpAt'] ?? null;
        $this->uses = $params['uses'] ?? [];
        $this->registerSemanticProperty('dfc-b:pickedUpAt', fn() => $this->pickedUpAt);
        $this->registerSemanticProperty('dfc-b:uses', fn() => $this->uses);
    }
    public function getPickedUpAt(): string|SemanticObject|array|null
    {
        return $this->pickedUpAt;
    }

    public function setPickedUpAt(string|SemanticObject|array|null $pickedUpAt): static
    {
        $this->pickedUpAt = $pickedUpAt;
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
}
