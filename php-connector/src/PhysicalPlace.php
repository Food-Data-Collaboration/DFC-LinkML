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
use DataFoodConsortium\Connector\Feature;
use DataFoodConsortium\Connector\OpeningHoursSpecification;
use DataFoodConsortium\Connector\Person;
use DataFoodConsortium\Connector\Place;
use DataFoodConsortium\Connector\RealStock;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\TheoriticalStock;

class PhysicalPlace extends Place implements IPhysicalPlace
{
    public const SEMANTIC_TYPE = 'dfc-b:PhysicalPlace';

    private string|SemanticObject|array|null $phoneNumber = null;
    private Address|string|SemanticObject|array|null $address = null;
    private Feature|string|SemanticObject|array|null $geoJsonFeature = null;
    private Person|string|SemanticObject|array|null $mainContact = null;
    private OpeningHoursSpecification|string|SemanticObject|array|null $isOpenDuring = null;
    private array|TheoriticalStock|string|SemanticObject|null $localizes = [];
    private array|RealStock|string|SemanticObject|null $stores = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->phoneNumber = $params['phoneNumber'] ?? null;
        $this->address = $params['address'] ?? null;
        $this->geoJsonFeature = $params['geoJsonFeature'] ?? null;
        $this->mainContact = $params['mainContact'] ?? null;
        $this->isOpenDuring = $params['isOpenDuring'] ?? null;
        $this->localizes = $params['localizes'] ?? [];
        $this->stores = $params['stores'] ?? [];
        $this->registerSemanticProperty('dfc-b:hasPhoneNumber', fn() => $this->phoneNumber);
        $this->registerSemanticProperty('dfc-b:hasAddress', fn() => $this->address);
        $this->registerSemanticProperty('dfc-b:hasGeoJsonFeature', fn() => $this->geoJsonFeature);
        $this->registerSemanticProperty('dfc-b:hasMainContact', fn() => $this->mainContact);
        $this->registerSemanticProperty('dfc-b:isOpenDuring', fn() => $this->isOpenDuring);
        $this->registerSemanticProperty('dfc-b:localizes', fn() => $this->localizes);
        $this->registerSemanticProperty('dfc-b:stores', fn() => $this->stores);
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

    public function getAddress(): Address|string|SemanticObject|array|null
    {
        return $this->address;
    }

    public function setAddress(Address|string|SemanticObject|array|null $address): static
    {
        $this->address = $address;
        return $this;
    }

    public function getGeoJsonFeature(): Feature|string|SemanticObject|array|null
    {
        return $this->geoJsonFeature;
    }

    public function setGeoJsonFeature(Feature|string|SemanticObject|array|null $geoJsonFeature): static
    {
        $this->geoJsonFeature = $geoJsonFeature;
        return $this;
    }

    public function getMainContact(): Person|string|SemanticObject|array|null
    {
        return $this->mainContact;
    }

    public function setMainContact(Person|string|SemanticObject|array|null $mainContact): static
    {
        $this->mainContact = $mainContact;
        return $this;
    }

    public function getIsOpenDuring(): OpeningHoursSpecification|string|SemanticObject|array|null
    {
        return $this->isOpenDuring;
    }

    public function setIsOpenDuring(OpeningHoursSpecification|string|SemanticObject|array|null $isOpenDuring): static
    {
        $this->isOpenDuring = $isOpenDuring;
        return $this;
    }

    public function getLocalizes(): array|TheoriticalStock|string|SemanticObject|null
    {
        return $this->localizes;
    }

    public function setLocalizes(array|TheoriticalStock|string|SemanticObject|null $localizes): static
    {
        $this->localizes = $localizes;
        return $this;
    }

    public function addLocalizes(TheoriticalStock|string|SemanticObject $localizes): static
    {
        if ($this->localizes === null) {
            $this->localizes = [];
        } elseif (!is_array($this->localizes)) {
            $this->localizes = [$this->localizes];
        }
        $this->localizes[] = $localizes;
        return $this;
    }

    public function removeLocalizes(TheoriticalStock|string|SemanticObject $localizes): void
    {
        if (!is_array($this->localizes)) {
            return;
        }
        $key = array_search($localizes, $this->localizes, true);
        if ($key !== false) {
            unset($this->localizes[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->localizes = array_values($this->localizes);
        }
    }

    public function getStores(): array|RealStock|string|SemanticObject|null
    {
        return $this->stores;
    }

    public function setStores(array|RealStock|string|SemanticObject|null $stores): static
    {
        $this->stores = $stores;
        return $this;
    }

    public function addStores(RealStock|string|SemanticObject $stores): static
    {
        if ($this->stores === null) {
            $this->stores = [];
        } elseif (!is_array($this->stores)) {
            $this->stores = [$this->stores];
        }
        $this->stores[] = $stores;
        return $this;
    }

    public function removeStores(RealStock|string|SemanticObject $stores): void
    {
        if (!is_array($this->stores)) {
            return;
        }
        $key = array_search($stores, $this->stores, true);
        if ($key !== false) {
            unset($this->stores[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->stores = array_values($this->stores);
        }
    }
}
