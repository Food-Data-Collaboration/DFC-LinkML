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

class Concept extends SemanticObject implements IConcept
{
    public const SEMANTIC_TYPE = 'dfc-b:Concept';

    private string|SemanticObject|array|null $certificateOf = null;
    private string|SemanticObject|array|null $claimOf = null;
    private string|SemanticObject|array|null $containerInformationOf = null;
    private string|SemanticObject|array|null $geographicalOriginOf = null;
    private string|SemanticObject|array|null $natureOriginOf = null;
    private string|SemanticObject|array|null $partOriginOf = null;
    private string|SemanticObject|array|null $typeOf = null;
    private string|SemanticObject|array|null $date = null;
    private string|SemanticObject|array|null $description = null;
    private string|SemanticObject|array|null $name = null;
    private string|SemanticObject|array|null $characteristicOf = null;
    private string|SemanticObject|array|null $dimension = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->certificateOf = $params['certificateOf'] ?? null;
        $this->claimOf = $params['claimOf'] ?? null;
        $this->containerInformationOf = $params['containerInformationOf'] ?? null;
        $this->geographicalOriginOf = $params['geographicalOriginOf'] ?? null;
        $this->natureOriginOf = $params['natureOriginOf'] ?? null;
        $this->partOriginOf = $params['partOriginOf'] ?? null;
        $this->typeOf = $params['typeOf'] ?? null;
        $this->date = $params['date'] ?? null;
        $this->description = $params['description'] ?? null;
        $this->name = $params['name'] ?? null;
        $this->characteristicOf = $params['characteristicOf'] ?? null;
        $this->dimension = $params['dimension'] ?? null;
        $this->registerSemanticProperty('dfc-b:certificateOf', fn() => $this->certificateOf);
        $this->registerSemanticProperty('dfc-b:claimOf', fn() => $this->claimOf);
        $this->registerSemanticProperty('dfc-b:containerInformationOf', fn() => $this->containerInformationOf);
        $this->registerSemanticProperty('dfc-b:geographicalOriginOf', fn() => $this->geographicalOriginOf);
        $this->registerSemanticProperty('dfc-b:natureOriginOf', fn() => $this->natureOriginOf);
        $this->registerSemanticProperty('dfc-b:partOriginOf', fn() => $this->partOriginOf);
        $this->registerSemanticProperty('dfc-b:typeOf', fn() => $this->typeOf);
        $this->registerSemanticProperty('dfc-b:date', fn() => $this->date);
        $this->registerSemanticProperty('dfc-b:description', fn() => $this->description);
        $this->registerSemanticProperty('dfc-b:name', fn() => $this->name);
        $this->registerSemanticProperty('dfc-b:characteristicOf', fn() => $this->characteristicOf);
        $this->registerSemanticProperty('dfc-b:hasDimension', fn() => $this->dimension);
    }
    public function getCertificateOf(): string|SemanticObject|array|null
    {
        return $this->certificateOf;
    }

    public function setCertificateOf(string|SemanticObject|array|null $certificateOf): static
    {
        $this->certificateOf = $certificateOf;
        return $this;
    }

    public function getClaimOf(): string|SemanticObject|array|null
    {
        return $this->claimOf;
    }

    public function setClaimOf(string|SemanticObject|array|null $claimOf): static
    {
        $this->claimOf = $claimOf;
        return $this;
    }

    public function getContainerInformationOf(): string|SemanticObject|array|null
    {
        return $this->containerInformationOf;
    }

    public function setContainerInformationOf(string|SemanticObject|array|null $containerInformationOf): static
    {
        $this->containerInformationOf = $containerInformationOf;
        return $this;
    }

    public function getGeographicalOriginOf(): string|SemanticObject|array|null
    {
        return $this->geographicalOriginOf;
    }

    public function setGeographicalOriginOf(string|SemanticObject|array|null $geographicalOriginOf): static
    {
        $this->geographicalOriginOf = $geographicalOriginOf;
        return $this;
    }

    public function getNatureOriginOf(): string|SemanticObject|array|null
    {
        return $this->natureOriginOf;
    }

    public function setNatureOriginOf(string|SemanticObject|array|null $natureOriginOf): static
    {
        $this->natureOriginOf = $natureOriginOf;
        return $this;
    }

    public function getPartOriginOf(): string|SemanticObject|array|null
    {
        return $this->partOriginOf;
    }

    public function setPartOriginOf(string|SemanticObject|array|null $partOriginOf): static
    {
        $this->partOriginOf = $partOriginOf;
        return $this;
    }

    public function getTypeOf(): string|SemanticObject|array|null
    {
        return $this->typeOf;
    }

    public function setTypeOf(string|SemanticObject|array|null $typeOf): static
    {
        $this->typeOf = $typeOf;
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
}
