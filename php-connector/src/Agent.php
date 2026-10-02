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
use DataFoodConsortium\Connector\CustomerCategory;
use DataFoodConsortium\Connector\FunctionalProduct;
use DataFoodConsortium\Connector\Order;
use DataFoodConsortium\Connector\Person;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\WhoSubject;

class Agent extends WhoSubject implements IAgent
{
    public const SEMANTIC_TYPE = 'dfc-b:Agent';

    private string|SemanticObject|array|null $email = null;
    private string|SemanticObject|array|null $logo = null;
    private array|string|SemanticObject|null $websitePage = [];
    private array|string|SemanticObject|null $hasPhoneNumber = [];
    private array|string|SemanticObject|null $socialMedia = [];
    private array|string|SemanticObject|null $owns = [];
    private array|string|SemanticObject|null $sells = [];
    private Person|string|SemanticObject|array|null $affiliatedTo = null;
    private array|Address|string|SemanticObject|null $address = [];
    private array|CustomerCategory|string|SemanticObject|null $isMemberOf = [];
    private array|Order|string|SemanticObject|null $orders = [];
    private array|FunctionalProduct|string|SemanticObject|null $requests = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->email = $params['email'] ?? null;
        $this->logo = $params['logo'] ?? null;
        $this->websitePage = $params['websitePage'] ?? [];
        $this->hasPhoneNumber = $params['hasPhoneNumber'] ?? [];
        $this->socialMedia = $params['socialMedia'] ?? [];
        $this->owns = $params['owns'] ?? [];
        $this->sells = $params['sells'] ?? [];
        $this->affiliatedTo = $params['affiliatedTo'] ?? null;
        $this->address = $params['address'] ?? [];
        $this->isMemberOf = $params['isMemberOf'] ?? [];
        $this->orders = $params['orders'] ?? [];
        $this->requests = $params['requests'] ?? [];
        $this->registerSemanticProperty('dfc-b:email', fn() => $this->email);
        $this->registerSemanticProperty('dfc-b:logo', fn() => $this->logo);
        $this->registerSemanticProperty('dfc-b:websitePage', fn() => $this->websitePage);
        $this->registerSemanticProperty('dfc-b:hasPhoneNumber', fn() => $this->hasPhoneNumber);
        $this->registerSemanticProperty('dfc-b:hasSocialMedia', fn() => $this->socialMedia);
        $this->registerSemanticProperty('dfc-b:owns', fn() => $this->owns);
        $this->registerSemanticProperty('dfc-b:sells', fn() => $this->sells);
        $this->registerSemanticProperty('dfc-b:affiliatedTo', fn() => $this->affiliatedTo);
        $this->registerSemanticProperty('dfc-b:hasAddress', fn() => $this->address);
        $this->registerSemanticProperty('dfc-b:isMemberOf', fn() => $this->isMemberOf);
        $this->registerSemanticProperty('dfc-b:orders', fn() => $this->orders);
        $this->registerSemanticProperty('dfc-b:requests', fn() => $this->requests);
    }
    public function getEmail(): string|SemanticObject|array|null
    {
        return $this->email;
    }

    public function setEmail(string|SemanticObject|array|null $email): static
    {
        $this->email = $email;
        return $this;
    }

    public function getLogo(): string|SemanticObject|array|null
    {
        return $this->logo;
    }

    public function setLogo(string|SemanticObject|array|null $logo): static
    {
        $this->logo = $logo;
        return $this;
    }

    public function getWebsitePage(): array|string|SemanticObject|null
    {
        return $this->websitePage;
    }

    public function setWebsitePage(array|string|SemanticObject|null $websitePage): static
    {
        $this->websitePage = $websitePage;
        return $this;
    }

    public function addWebsitePage(string|SemanticObject $websitePage): static
    {
        if ($this->websitePage === null) {
            $this->websitePage = [];
        } elseif (!is_array($this->websitePage)) {
            $this->websitePage = [$this->websitePage];
        }
        $this->websitePage[] = $websitePage;
        return $this;
    }

    public function removeWebsitePage(string|SemanticObject $websitePage): void
    {
        if ($this->websitePage === null) {
            return;
        }
        if (!is_array($this->websitePage)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->websitePage === $websitePage) {
                $this->websitePage = [];
            }
            return;
        }
        $key = array_search($websitePage, $this->websitePage, true);
        if ($key !== false) {
            unset($this->websitePage[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->websitePage = array_values($this->websitePage);
        }
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

    public function getSocialMedia(): array|string|SemanticObject|null
    {
        return $this->socialMedia;
    }

    public function setSocialMedia(array|string|SemanticObject|null $socialMedia): static
    {
        $this->socialMedia = $socialMedia;
        return $this;
    }

    public function addSocialMedia(string|SemanticObject $socialMedia): static
    {
        if ($this->socialMedia === null) {
            $this->socialMedia = [];
        } elseif (!is_array($this->socialMedia)) {
            $this->socialMedia = [$this->socialMedia];
        }
        $this->socialMedia[] = $socialMedia;
        return $this;
    }

    public function removeSocialMedia(string|SemanticObject $socialMedia): void
    {
        if ($this->socialMedia === null) {
            return;
        }
        if (!is_array($this->socialMedia)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->socialMedia === $socialMedia) {
                $this->socialMedia = [];
            }
            return;
        }
        $key = array_search($socialMedia, $this->socialMedia, true);
        if ($key !== false) {
            unset($this->socialMedia[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->socialMedia = array_values($this->socialMedia);
        }
    }

    public function getOwns(): array|string|SemanticObject|null
    {
        return $this->owns;
    }

    public function setOwns(array|string|SemanticObject|null $owns): static
    {
        $this->owns = $owns;
        return $this;
    }

    public function addOwns(string|SemanticObject $owns): static
    {
        if ($this->owns === null) {
            $this->owns = [];
        } elseif (!is_array($this->owns)) {
            $this->owns = [$this->owns];
        }
        $this->owns[] = $owns;
        return $this;
    }

    public function removeOwns(string|SemanticObject $owns): void
    {
        if ($this->owns === null) {
            return;
        }
        if (!is_array($this->owns)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->owns === $owns) {
                $this->owns = [];
            }
            return;
        }
        $key = array_search($owns, $this->owns, true);
        if ($key !== false) {
            unset($this->owns[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->owns = array_values($this->owns);
        }
    }

    public function getSells(): array|string|SemanticObject|null
    {
        return $this->sells;
    }

    public function setSells(array|string|SemanticObject|null $sells): static
    {
        $this->sells = $sells;
        return $this;
    }

    public function addSells(string|SemanticObject $sells): static
    {
        if ($this->sells === null) {
            $this->sells = [];
        } elseif (!is_array($this->sells)) {
            $this->sells = [$this->sells];
        }
        $this->sells[] = $sells;
        return $this;
    }

    public function removeSells(string|SemanticObject $sells): void
    {
        if ($this->sells === null) {
            return;
        }
        if (!is_array($this->sells)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->sells === $sells) {
                $this->sells = [];
            }
            return;
        }
        $key = array_search($sells, $this->sells, true);
        if ($key !== false) {
            unset($this->sells[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->sells = array_values($this->sells);
        }
    }

    public function getAffiliatedTo(): Person|string|SemanticObject|array|null
    {
        return $this->affiliatedTo;
    }

    public function setAffiliatedTo(Person|string|SemanticObject|array|null $affiliatedTo): static
    {
        $this->affiliatedTo = $affiliatedTo;
        return $this;
    }

    public function getAddress(): array|Address|string|SemanticObject|null
    {
        return $this->address;
    }

    public function setAddress(array|Address|string|SemanticObject|null $address): static
    {
        $this->address = $address;
        return $this;
    }

    public function addAddress(Address|string|SemanticObject $address): static
    {
        if ($this->address === null) {
            $this->address = [];
        } elseif (!is_array($this->address)) {
            $this->address = [$this->address];
        }
        $this->address[] = $address;
        return $this;
    }

    public function removeAddress(Address|string|SemanticObject $address): void
    {
        if ($this->address === null) {
            return;
        }
        if (!is_array($this->address)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->address === $address) {
                $this->address = [];
            }
            return;
        }
        $key = array_search($address, $this->address, true);
        if ($key !== false) {
            unset($this->address[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->address = array_values($this->address);
        }
    }

    public function getIsMemberOf(): array|CustomerCategory|string|SemanticObject|null
    {
        return $this->isMemberOf;
    }

    public function setIsMemberOf(array|CustomerCategory|string|SemanticObject|null $isMemberOf): static
    {
        $this->isMemberOf = $isMemberOf;
        return $this;
    }

    public function addIsMemberOf(CustomerCategory|string|SemanticObject $isMemberOf): static
    {
        if ($this->isMemberOf === null) {
            $this->isMemberOf = [];
        } elseif (!is_array($this->isMemberOf)) {
            $this->isMemberOf = [$this->isMemberOf];
        }
        $this->isMemberOf[] = $isMemberOf;
        return $this;
    }

    public function removeIsMemberOf(CustomerCategory|string|SemanticObject $isMemberOf): void
    {
        if ($this->isMemberOf === null) {
            return;
        }
        if (!is_array($this->isMemberOf)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->isMemberOf === $isMemberOf) {
                $this->isMemberOf = [];
            }
            return;
        }
        $key = array_search($isMemberOf, $this->isMemberOf, true);
        if ($key !== false) {
            unset($this->isMemberOf[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->isMemberOf = array_values($this->isMemberOf);
        }
    }

    public function getOrders(): array|Order|string|SemanticObject|null
    {
        return $this->orders;
    }

    public function setOrders(array|Order|string|SemanticObject|null $orders): static
    {
        $this->orders = $orders;
        return $this;
    }

    public function addOrders(Order|string|SemanticObject $orders): static
    {
        if ($this->orders === null) {
            $this->orders = [];
        } elseif (!is_array($this->orders)) {
            $this->orders = [$this->orders];
        }
        $this->orders[] = $orders;
        return $this;
    }

    public function removeOrders(Order|string|SemanticObject $orders): void
    {
        if ($this->orders === null) {
            return;
        }
        if (!is_array($this->orders)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->orders === $orders) {
                $this->orders = [];
            }
            return;
        }
        $key = array_search($orders, $this->orders, true);
        if ($key !== false) {
            unset($this->orders[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->orders = array_values($this->orders);
        }
    }

    public function getRequests(): array|FunctionalProduct|string|SemanticObject|null
    {
        return $this->requests;
    }

    public function setRequests(array|FunctionalProduct|string|SemanticObject|null $requests): static
    {
        $this->requests = $requests;
        return $this;
    }

    public function addRequests(FunctionalProduct|string|SemanticObject $requests): static
    {
        if ($this->requests === null) {
            $this->requests = [];
        } elseif (!is_array($this->requests)) {
            $this->requests = [$this->requests];
        }
        $this->requests[] = $requests;
        return $this;
    }

    public function removeRequests(FunctionalProduct|string|SemanticObject $requests): void
    {
        if ($this->requests === null) {
            return;
        }
        if (!is_array($this->requests)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->requests === $requests) {
                $this->requests = [];
            }
            return;
        }
        $key = array_search($requests, $this->requests, true);
        if ($key !== false) {
            unset($this->requests[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->requests = array_values($this->requests);
        }
    }
}
