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

    private array|string|SemanticObject|null $hasPhoneNumber = [];
    private Address|string|SemanticObject|array|null $address = null;
    private array|Feature|string|SemanticObject|null $geoJsonFeature = [];
    private array|Person|string|SemanticObject|null $mainContact = [];
    private OpeningHoursSpecification|string|SemanticObject|array|null $isOpenDuring = null;
    private array|TheoriticalStock|string|SemanticObject|null $localizes = [];
    private array|RealStock|string|SemanticObject|null $stores = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->hasPhoneNumber = $params['hasPhoneNumber'] ?? [];
        $this->address = $params['address'] ?? null;
        $this->geoJsonFeature = $params['geoJsonFeature'] ?? [];
        $this->mainContact = $params['mainContact'] ?? [];
        $this->isOpenDuring = $params['isOpenDuring'] ?? null;
        $this->localizes = $params['localizes'] ?? [];
        $this->stores = $params['stores'] ?? [];
        $this->registerSemanticProperty('dfc-b:hasPhoneNumber', fn() => $this->hasPhoneNumber);
        $this->registerSemanticProperty('dfc-b:hasAddress', fn() => $this->address);
        $this->registerSemanticProperty('dfc-b:hasGeoJsonFeature', fn() => $this->geoJsonFeature);
        $this->registerSemanticProperty('dfc-b:hasMainContact', fn() => $this->mainContact);
        $this->registerSemanticProperty('dfc-b:isOpenDuring', fn() => $this->isOpenDuring);
        $this->registerSemanticProperty('dfc-b:localizes', fn() => $this->localizes);
        $this->registerSemanticProperty('dfc-b:stores', fn() => $this->stores);
    }
    public function getHasPhoneNumber(): array|string|SemanticObject|null
    {
        return $this->hasPhoneNumber;
    }

    public function setHasPhoneNumber(array|string|SemanticObject|null $hasPhoneNumber): static
    {
        $this->hasPhoneNumber = $hasPhoneNumber;
        return $this;
    }

    public function addHasPhoneNumber(string|SemanticObject $hasPhoneNumber): static
    {
        if ($this->hasPhoneNumber === null) {
            $this->hasPhoneNumber = [];
        } elseif (!is_array($this->hasPhoneNumber)) {
            $this->hasPhoneNumber = [$this->hasPhoneNumber];
        }
        $this->hasPhoneNumber[] = $hasPhoneNumber;
        return $this;
    }

    public function removeHasPhoneNumber(string|SemanticObject $hasPhoneNumber): void
    {
        if ($this->hasPhoneNumber === null) {
            return;
        }
        if (!is_array($this->hasPhoneNumber)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->hasPhoneNumber === $hasPhoneNumber) {
                $this->hasPhoneNumber = [];
            }
            return;
        }
        $key = array_search($hasPhoneNumber, $this->hasPhoneNumber, true);
        if ($key !== false) {
            unset($this->hasPhoneNumber[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->hasPhoneNumber = array_values($this->hasPhoneNumber);
        }
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

    public function getGeoJsonFeature(): array|Feature|string|SemanticObject|null
    {
        return $this->geoJsonFeature;
    }

    public function setGeoJsonFeature(array|Feature|string|SemanticObject|null $geoJsonFeature): static
    {
        $this->geoJsonFeature = $geoJsonFeature;
        return $this;
    }

    public function addGeoJsonFeature(Feature|string|SemanticObject $geoJsonFeature): static
    {
        if ($this->geoJsonFeature === null) {
            $this->geoJsonFeature = [];
        } elseif (!is_array($this->geoJsonFeature)) {
            $this->geoJsonFeature = [$this->geoJsonFeature];
        }
        $this->geoJsonFeature[] = $geoJsonFeature;
        return $this;
    }

    public function removeGeoJsonFeature(Feature|string|SemanticObject $geoJsonFeature): void
    {
        if ($this->geoJsonFeature === null) {
            return;
        }
        if (!is_array($this->geoJsonFeature)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->geoJsonFeature === $geoJsonFeature) {
                $this->geoJsonFeature = [];
            }
            return;
        }
        $key = array_search($geoJsonFeature, $this->geoJsonFeature, true);
        if ($key !== false) {
            unset($this->geoJsonFeature[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->geoJsonFeature = array_values($this->geoJsonFeature);
        }
    }

    public function getMainContact(): array|Person|string|SemanticObject|null
    {
        return $this->mainContact;
    }

    public function setMainContact(array|Person|string|SemanticObject|null $mainContact): static
    {
        $this->mainContact = $mainContact;
        return $this;
    }

    public function addMainContact(Person|string|SemanticObject $mainContact): static
    {
        if ($this->mainContact === null) {
            $this->mainContact = [];
        } elseif (!is_array($this->mainContact)) {
            $this->mainContact = [$this->mainContact];
        }
        $this->mainContact[] = $mainContact;
        return $this;
    }

    public function removeMainContact(Person|string|SemanticObject $mainContact): void
    {
        if ($this->mainContact === null) {
            return;
        }
        if (!is_array($this->mainContact)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->mainContact === $mainContact) {
                $this->mainContact = [];
            }
            return;
        }
        $key = array_search($mainContact, $this->mainContact, true);
        if ($key !== false) {
            unset($this->mainContact[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->mainContact = array_values($this->mainContact);
        }
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
        if ($this->localizes === null) {
            return;
        }
        if (!is_array($this->localizes)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->localizes === $localizes) {
                $this->localizes = [];
            }
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
        if ($this->stores === null) {
            return;
        }
        if (!is_array($this->stores)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->stores === $stores) {
                $this->stores = [];
            }
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
