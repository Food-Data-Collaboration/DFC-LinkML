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
    private string|SemanticObject|array|null $websitePage = null;
    private string|SemanticObject|array|null $phoneNumber = null;
    private string|SemanticObject|array|null $socialMedia = null;
    private array|string|SemanticObject|null $owns = [];
    private array|string|SemanticObject|null $sells = [];
    private Person|string|SemanticObject|array|null $affiliatedTo = null;
    private Address|string|SemanticObject|array|null $address = null;
    private CustomerCategory|string|SemanticObject|array|null $isMemberOf = null;
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
        $this->websitePage = $params['websitePage'] ?? null;
        $this->phoneNumber = $params['phoneNumber'] ?? null;
        $this->socialMedia = $params['socialMedia'] ?? null;
        $this->owns = $params['owns'] ?? [];
        $this->sells = $params['sells'] ?? [];
        $this->affiliatedTo = $params['affiliatedTo'] ?? null;
        $this->address = $params['address'] ?? null;
        $this->isMemberOf = $params['isMemberOf'] ?? null;
        $this->orders = $params['orders'] ?? [];
        $this->requests = $params['requests'] ?? [];
        $this->registerSemanticProperty('dfc-b:email', fn() => $this->email);
        $this->registerSemanticProperty('dfc-b:logo', fn() => $this->logo);
        $this->registerSemanticProperty('dfc-b:websitePage', fn() => $this->websitePage);
        $this->registerSemanticProperty('dfc-b:hasPhoneNumber', fn() => $this->phoneNumber);
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

    public function getWebsitePage(): string|SemanticObject|array|null
    {
        return $this->websitePage;
    }

    public function setWebsitePage(string|SemanticObject|array|null $websitePage): static
    {
        $this->websitePage = $websitePage;
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

    public function getSocialMedia(): string|SemanticObject|array|null
    {
        return $this->socialMedia;
    }

    public function setSocialMedia(string|SemanticObject|array|null $socialMedia): static
    {
        $this->socialMedia = $socialMedia;
        return $this;
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
        if (!is_array($this->owns)) {
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
        if (!is_array($this->sells)) {
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

    public function getAddress(): Address|string|SemanticObject|array|null
    {
        return $this->address;
    }

    public function setAddress(Address|string|SemanticObject|array|null $address): static
    {
        $this->address = $address;
        return $this;
    }

    public function getIsMemberOf(): CustomerCategory|string|SemanticObject|array|null
    {
        return $this->isMemberOf;
    }

    public function setIsMemberOf(CustomerCategory|string|SemanticObject|array|null $isMemberOf): static
    {
        $this->isMemberOf = $isMemberOf;
        return $this;
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
        if (!is_array($this->orders)) {
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
        if (!is_array($this->requests)) {
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
