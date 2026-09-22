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
use DataFoodConsortium\Connector\Offer;
use DataFoodConsortium\Connector\Organization;
use DataFoodConsortium\Connector\SemanticObject;

class CatalogItem extends SemanticObject implements ICatalogItem
{
    public const SEMANTIC_TYPE = 'dfc-b:CatalogItem';

    private string|SemanticObject|array|null $extraAvailabilityTime = null;
    private string|SemanticObject|array|null $extraDeliveryCondition = null;
    private string|SemanticObject|array|null $sku = null;
    private float|string|SemanticObject|array|null $stockLimitation = null;
    private string|SemanticObject|array|null $listedIn = null;
    private string|SemanticObject|array|null $date = null;
    private string|SemanticObject|array|null $description = null;
    private string|SemanticObject|array|null $name = null;
    private string|SemanticObject|array|null $characteristicOf = null;
    private string|SemanticObject|array|null $dimension = null;
    private Organization|string|SemanticObject|array|null $managedBy = null;
    private Offer|string|SemanticObject|array|null $offeredThrough = null;
    private array|DefinedProduct|string|SemanticObject|null $references = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->extraAvailabilityTime = $params['extraAvailabilityTime'] ?? null;
        $this->extraDeliveryCondition = $params['extraDeliveryCondition'] ?? null;
        $this->sku = $params['sku'] ?? null;
        $this->stockLimitation = $params['stockLimitation'] ?? null;
        $this->listedIn = $params['listedIn'] ?? null;
        $this->date = $params['date'] ?? null;
        $this->description = $params['description'] ?? null;
        $this->name = $params['name'] ?? null;
        $this->characteristicOf = $params['characteristicOf'] ?? null;
        $this->dimension = $params['dimension'] ?? null;
        $this->managedBy = $params['managedBy'] ?? null;
        $this->offeredThrough = $params['offeredThrough'] ?? null;
        $this->references = $params['references'] ?? [];
        $this->registerSemanticProperty('dfc-b:extraAvailabilityTime', fn() => $this->extraAvailabilityTime);
        $this->registerSemanticProperty('dfc-b:extraDeliveryCondition', fn() => $this->extraDeliveryCondition);
        $this->registerSemanticProperty('dfc-b:sku', fn() => $this->sku);
        $this->registerSemanticProperty('dfc-b:stockLimitation', fn() => $this->stockLimitation);
        $this->registerSemanticProperty('dfc-b:listedIn', fn() => $this->listedIn);
        $this->registerSemanticProperty('dfc-b:date', fn() => $this->date);
        $this->registerSemanticProperty('dfc-b:description', fn() => $this->description);
        $this->registerSemanticProperty('dfc-b:name', fn() => $this->name);
        $this->registerSemanticProperty('dfc-b:characteristicOf', fn() => $this->characteristicOf);
        $this->registerSemanticProperty('dfc-b:hasDimension', fn() => $this->dimension);
        $this->registerSemanticProperty('dfc-b:managedBy', fn() => $this->managedBy);
        $this->registerSemanticProperty('dfc-b:offeredThrough', fn() => $this->offeredThrough);
        $this->registerSemanticProperty('dfc-b:references', fn() => $this->references);
    }
    public function getExtraAvailabilityTime(): string|SemanticObject|array|null
    {
        return $this->extraAvailabilityTime;
    }

    public function setExtraAvailabilityTime(string|SemanticObject|array|null $extraAvailabilityTime): static
    {
        $this->extraAvailabilityTime = $extraAvailabilityTime;
        return $this;
    }

    public function getExtraDeliveryCondition(): string|SemanticObject|array|null
    {
        return $this->extraDeliveryCondition;
    }

    public function setExtraDeliveryCondition(string|SemanticObject|array|null $extraDeliveryCondition): static
    {
        $this->extraDeliveryCondition = $extraDeliveryCondition;
        return $this;
    }

    public function getSku(): string|SemanticObject|array|null
    {
        return $this->sku;
    }

    public function setSku(string|SemanticObject|array|null $sku): static
    {
        $this->sku = $sku;
        return $this;
    }

    public function getStockLimitation(): float|string|SemanticObject|array|null
    {
        return $this->stockLimitation;
    }

    public function setStockLimitation(float|string|SemanticObject|array|null $stockLimitation): static
    {
        $this->stockLimitation = $stockLimitation;
        return $this;
    }

    public function getListedIn(): string|SemanticObject|array|null
    {
        return $this->listedIn;
    }

    public function setListedIn(string|SemanticObject|array|null $listedIn): static
    {
        $this->listedIn = $listedIn;
        return $this;
    }

    public function getDate(): string|SemanticObject|array|null
    {
        return $this->date;
    }

    public function setDate(string|SemanticObject|array|null $date): static
    {
        $this->date = $date;
        return $this;
    }

    public function getDescription(): string|SemanticObject|array|null
    {
        return $this->description;
    }

    public function setDescription(string|SemanticObject|array|null $description): static
    {
        $this->description = $description;
        return $this;
    }

    public function getName(): string|SemanticObject|array|null
    {
        return $this->name;
    }

    public function setName(string|SemanticObject|array|null $name): static
    {
        $this->name = $name;
        return $this;
    }

    public function getCharacteristicOf(): string|SemanticObject|array|null
    {
        return $this->characteristicOf;
    }

    public function setCharacteristicOf(string|SemanticObject|array|null $characteristicOf): static
    {
        $this->characteristicOf = $characteristicOf;
        return $this;
    }

    public function getDimension(): string|SemanticObject|array|null
    {
        return $this->dimension;
    }

    public function setDimension(string|SemanticObject|array|null $dimension): static
    {
        $this->dimension = $dimension;
        return $this;
    }

    public function getManagedBy(): Organization|string|SemanticObject|array|null
    {
        return $this->managedBy;
    }

    public function setManagedBy(Organization|string|SemanticObject|array|null $managedBy): static
    {
        $this->managedBy = $managedBy;
        return $this;
    }

    public function getOfferedThrough(): Offer|string|SemanticObject|array|null
    {
        return $this->offeredThrough;
    }

    public function setOfferedThrough(Offer|string|SemanticObject|array|null $offeredThrough): static
    {
        $this->offeredThrough = $offeredThrough;
        return $this;
    }

    public function getReferences(): array|DefinedProduct|string|SemanticObject|null
    {
        return $this->references;
    }

    public function setReferences(array|DefinedProduct|string|SemanticObject|null $references): static
    {
        $this->references = $references;
        return $this;
    }

    public function addReferences(DefinedProduct|string|SemanticObject $references): static
    {
        if ($this->references === null) {
            $this->references = [];
        } elseif (!is_array($this->references)) {
            $this->references = [$this->references];
        }
        $this->references[] = $references;
        return $this;
    }

    public function removeReferences(DefinedProduct|string|SemanticObject $references): void
    {
        if ($this->references === null) {
            return;
        }
        if (!is_array($this->references)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->references === $references) {
                $this->references = [];
            }
            return;
        }
        $key = array_search($references, $this->references, true);
        if ($key !== false) {
            unset($this->references[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->references = array_values($this->references);
        }
    }
}
