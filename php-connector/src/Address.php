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
use DataFoodConsortium\Connector\WhereSubject;

class Address extends WhereSubject implements IAddress
{
    public const SEMANTIC_TYPE = 'dfc-b:Address';

    private string|SemanticObject|array|null $city = null;
    private string|SemanticObject|array|null $countryName = null;
    private float|string|SemanticObject|array|null $latitude = null;
    private float|string|SemanticObject|array|null $longitude = null;
    private string|SemanticObject|array|null $postcode = null;
    private string|SemanticObject|array|null $region = null;
    private string|SemanticObject|array|null $street = null;
    private string|SemanticObject|array|null $addressOf = null;
    private string|SemanticObject|array|null $country = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->city = $params['city'] ?? null;
        $this->countryName = $params['countryName'] ?? null;
        $this->latitude = $params['latitude'] ?? null;
        $this->longitude = $params['longitude'] ?? null;
        $this->postcode = $params['postcode'] ?? null;
        $this->region = $params['region'] ?? null;
        $this->street = $params['street'] ?? null;
        $this->addressOf = $params['addressOf'] ?? null;
        $this->country = $params['country'] ?? null;
        $this->registerSemanticProperty('dfc-b:city', fn() => $this->city);
        $this->registerSemanticProperty('dfc-b:country', fn() => $this->countryName);
        $this->registerSemanticProperty('dfc-b:latitude', fn() => $this->latitude);
        $this->registerSemanticProperty('dfc-b:longitude', fn() => $this->longitude);
        $this->registerSemanticProperty('dfc-b:postcode', fn() => $this->postcode);
        $this->registerSemanticProperty('dfc-b:region', fn() => $this->region);
        $this->registerSemanticProperty('dfc-b:street', fn() => $this->street);
        $this->registerSemanticProperty('dfc-b:addressOf', fn() => $this->addressOf);
        $this->registerSemanticProperty('dfc-b:hasCountry', fn() => $this->country);
    }
    public function getCity(): string|SemanticObject|array|null
    {
        return $this->city;
    }

    public function setCity(string|SemanticObject|array|null $city): static
    {
        $this->city = $city;
        return $this;
    }

    public function getCountryName(): string|SemanticObject|array|null
    {
        return $this->countryName;
    }

    public function setCountryName(string|SemanticObject|array|null $countryName): static
    {
        $this->countryName = $countryName;
        return $this;
    }

    public function getLatitude(): float|string|SemanticObject|array|null
    {
        return $this->latitude;
    }

    public function setLatitude(float|string|SemanticObject|array|null $latitude): static
    {
        $this->latitude = $latitude;
        return $this;
    }

    public function getLongitude(): float|string|SemanticObject|array|null
    {
        return $this->longitude;
    }

    public function setLongitude(float|string|SemanticObject|array|null $longitude): static
    {
        $this->longitude = $longitude;
        return $this;
    }

    public function getPostcode(): string|SemanticObject|array|null
    {
        return $this->postcode;
    }

    public function setPostcode(string|SemanticObject|array|null $postcode): static
    {
        $this->postcode = $postcode;
        return $this;
    }

    public function getRegion(): string|SemanticObject|array|null
    {
        return $this->region;
    }

    public function setRegion(string|SemanticObject|array|null $region): static
    {
        $this->region = $region;
        return $this;
    }

    public function getStreet(): string|SemanticObject|array|null
    {
        return $this->street;
    }

    public function setStreet(string|SemanticObject|array|null $street): static
    {
        $this->street = $street;
        return $this;
    }

    public function getAddressOf(): string|SemanticObject|array|null
    {
        return $this->addressOf;
    }

    public function setAddressOf(string|SemanticObject|array|null $addressOf): static
    {
        $this->addressOf = $addressOf;
        return $this;
    }

    public function getCountry(): string|SemanticObject|array|null
    {
        return $this->country;
    }

    public function setCountry(string|SemanticObject|array|null $country): static
    {
        $this->country = $country;
        return $this;
    }
}
