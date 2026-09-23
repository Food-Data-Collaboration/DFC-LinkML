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
use DataFoodConsortium\Connector\LocalizedProduct;
use DataFoodConsortium\Connector\Organization;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\TechnicalProduct;

class SuppliedProduct extends DefinedProduct implements ISuppliedProduct
{
    public const SEMANTIC_TYPE = 'dfc-b:SuppliedProduct';

    private string|SemanticObject|array|null $availabilityTime = null;
    private string|SemanticObject|array|null $deliveryCondition = null;
    private bool|string|SemanticObject|array|null $frozen = null;
    private bool|string|SemanticObject|array|null $refrigerated = null;
    private float|string|SemanticObject|array|null $totalTheoriticalStock = null;
    private string|SemanticObject|array|null $temperature = null;
    private string|SemanticObject|array|null $producedBy = null;
    private array|TechnicalProduct|string|SemanticObject|null $industrializes = [];
    private LocalizedProduct|string|SemanticObject|array|null $referenceOf = null;
    private Organization|string|SemanticObject|array|null $suppliedBy = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->availabilityTime = $params['availabilityTime'] ?? null;
        $this->deliveryCondition = $params['deliveryCondition'] ?? null;
        $this->frozen = $params['frozen'] ?? null;
        $this->refrigerated = $params['refrigerated'] ?? null;
        $this->totalTheoriticalStock = $params['totalTheoriticalStock'] ?? null;
        $this->temperature = $params['temperature'] ?? null;
        $this->producedBy = $params['producedBy'] ?? null;
        $this->industrializes = $params['industrializes'] ?? [];
        $this->referenceOf = $params['referenceOf'] ?? null;
        $this->suppliedBy = $params['suppliedBy'] ?? null;
        $this->registerSemanticProperty('dfc-b:availabilityTime', fn() => $this->availabilityTime);
        $this->registerSemanticProperty('dfc-b:deliveryCondition', fn() => $this->deliveryCondition);
        $this->registerSemanticProperty('dfc-b:frozen', fn() => $this->frozen);
        $this->registerSemanticProperty('dfc-b:refrigerated', fn() => $this->refrigerated);
        $this->registerSemanticProperty('dfc-b:totalTheoriticalStock', fn() => $this->totalTheoriticalStock);
        $this->registerSemanticProperty('dfc-b:hasTemperature', fn() => $this->temperature);
        $this->registerSemanticProperty('dfc-b:producedBy', fn() => $this->producedBy);
        $this->registerSemanticProperty('dfc-b:industrializes', fn() => $this->industrializes);
        $this->registerSemanticProperty('dfc-b:referenceOf', fn() => $this->referenceOf);
        $this->registerSemanticProperty('dfc-b:suppliedBy', fn() => $this->suppliedBy);
    }
    public function getAvailabilityTime(): string|SemanticObject|array|null
    {
        return $this->availabilityTime;
    }

    public function setAvailabilityTime(string|SemanticObject|array|null $availabilityTime): static
    {
        $this->availabilityTime = $availabilityTime;
        return $this;
    }

    public function getDeliveryCondition(): string|SemanticObject|array|null
    {
        return $this->deliveryCondition;
    }

    public function setDeliveryCondition(string|SemanticObject|array|null $deliveryCondition): static
    {
        $this->deliveryCondition = $deliveryCondition;
        return $this;
    }

    public function getFrozen(): bool|string|SemanticObject|array|null
    {
        return $this->frozen;
    }

    public function setFrozen(bool|string|SemanticObject|array|null $frozen): static
    {
        $this->frozen = $frozen;
        return $this;
    }

    public function getRefrigerated(): bool|string|SemanticObject|array|null
    {
        return $this->refrigerated;
    }

    public function setRefrigerated(bool|string|SemanticObject|array|null $refrigerated): static
    {
        $this->refrigerated = $refrigerated;
        return $this;
    }

    public function getTotalTheoriticalStock(): float|string|SemanticObject|array|null
    {
        return $this->totalTheoriticalStock;
    }

    public function setTotalTheoriticalStock(float|string|SemanticObject|array|null $totalTheoriticalStock): static
    {
        $this->totalTheoriticalStock = $totalTheoriticalStock;
        return $this;
    }

    public function getTemperature(): string|SemanticObject|array|null
    {
        return $this->temperature;
    }

    public function setTemperature(string|SemanticObject|array|null $temperature): static
    {
        $this->temperature = $temperature;
        return $this;
    }

    public function getProducedBy(): string|SemanticObject|array|null
    {
        return $this->producedBy;
    }

    public function setProducedBy(string|SemanticObject|array|null $producedBy): static
    {
        $this->producedBy = $producedBy;
        return $this;
    }

    public function getIndustrializes(): array|TechnicalProduct|string|SemanticObject|null
    {
        return $this->industrializes;
    }

    public function setIndustrializes(array|TechnicalProduct|string|SemanticObject|null $industrializes): static
    {
        $this->industrializes = $industrializes;
        return $this;
    }

    public function addIndustrializes(TechnicalProduct|string|SemanticObject $industrializes): static
    {
        if ($this->industrializes === null) {
            $this->industrializes = [];
        } elseif (!is_array($this->industrializes)) {
            $this->industrializes = [$this->industrializes];
        }
        $this->industrializes[] = $industrializes;
        return $this;
    }

    public function removeIndustrializes(TechnicalProduct|string|SemanticObject $industrializes): void
    {
        if ($this->industrializes === null) {
            return;
        }
        if (!is_array($this->industrializes)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->industrializes === $industrializes) {
                $this->industrializes = [];
            }
            return;
        }
        $key = array_search($industrializes, $this->industrializes, true);
        if ($key !== false) {
            unset($this->industrializes[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->industrializes = array_values($this->industrializes);
        }
    }

    public function getReferenceOf(): LocalizedProduct|string|SemanticObject|array|null
    {
        return $this->referenceOf;
    }

    public function setReferenceOf(LocalizedProduct|string|SemanticObject|array|null $referenceOf): static
    {
        $this->referenceOf = $referenceOf;
        return $this;
    }

    public function getSuppliedBy(): Organization|string|SemanticObject|array|null
    {
        return $this->suppliedBy;
    }

    public function setSuppliedBy(Organization|string|SemanticObject|array|null $suppliedBy): static
    {
        $this->suppliedBy = $suppliedBy;
        return $this;
    }
}
