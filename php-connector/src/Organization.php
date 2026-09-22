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

use DataFoodConsortium\Connector\Agent;
use DataFoodConsortium\Connector\AsPlannedLocalTransformation;
use DataFoodConsortium\Connector\Catalog;
use DataFoodConsortium\Connector\CatalogItem;
use DataFoodConsortium\Connector\CustomerCategory;
use DataFoodConsortium\Connector\Person;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\SuppliedProduct;
use DataFoodConsortium\Connector\TechnicalProduct;

class Organization extends Agent implements IOrganization
{
    public const SEMANTIC_TYPE = 'dfc-b:Organization';

    private string|SemanticObject|array|null $vatNumber = null;
    private bool|string|SemanticObject|array|null $vatStatus = null;
    private string|SemanticObject|array|null $enterpriseId = null;
    private string|SemanticObject|array|null $templateSaleSession = null;
    private string|SemanticObject|array|null $isCertifiedBy = null;
    private array|Organization|string|SemanticObject|null $affiliates = [];
    private array|CustomerCategory|string|SemanticObject|null $defines = [];
    private Person|string|SemanticObject|array|null $mainContact = null;
    private array|Catalog|string|SemanticObject|null $maintains = [];
    private array|CatalogItem|string|SemanticObject|null $manages = [];
    private array|TechnicalProduct|string|SemanticObject|null $proposes = [];
    private array|SuppliedProduct|string|SemanticObject|null $supplies = [];
    private array|AsPlannedLocalTransformation|string|SemanticObject|null $transforms = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->vatNumber = $params['vatNumber'] ?? null;
        $this->vatStatus = $params['vatStatus'] ?? null;
        $this->enterpriseId = $params['enterpriseId'] ?? null;
        $this->templateSaleSession = $params['templateSaleSession'] ?? null;
        $this->isCertifiedBy = $params['isCertifiedBy'] ?? null;
        $this->affiliates = $params['affiliates'] ?? [];
        $this->defines = $params['defines'] ?? [];
        $this->mainContact = $params['mainContact'] ?? null;
        $this->maintains = $params['maintains'] ?? [];
        $this->manages = $params['manages'] ?? [];
        $this->proposes = $params['proposes'] ?? [];
        $this->supplies = $params['supplies'] ?? [];
        $this->transforms = $params['transforms'] ?? [];
        $this->registerSemanticProperty('dfc-b:VATnumber', fn() => $this->vatNumber);
        $this->registerSemanticProperty('dfc-b:VATstatus', fn() => $this->vatStatus);
        $this->registerSemanticProperty('dfc-b:enterpriseID', fn() => $this->enterpriseId);
        $this->registerSemanticProperty('dfc-b:hasTemplateSaleSession', fn() => $this->templateSaleSession);
        $this->registerSemanticProperty('dfc-b:isCertifiedBy', fn() => $this->isCertifiedBy);
        $this->registerSemanticProperty('dfc-b:affiliates', fn() => $this->affiliates);
        $this->registerSemanticProperty('dfc-b:defines', fn() => $this->defines);
        $this->registerSemanticProperty('dfc-b:hasMainContact', fn() => $this->mainContact);
        $this->registerSemanticProperty('dfc-b:maintains', fn() => $this->maintains);
        $this->registerSemanticProperty('dfc-b:manages', fn() => $this->manages);
        $this->registerSemanticProperty('dfc-b:proposes', fn() => $this->proposes);
        $this->registerSemanticProperty('dfc-b:supplies', fn() => $this->supplies);
        $this->registerSemanticProperty('dfc-b:transforms', fn() => $this->transforms);
    }
    public function getVatNumber(): string|SemanticObject|array|null
    {
        return $this->vatNumber;
    }

    public function setVatNumber(string|SemanticObject|array|null $vatNumber): static
    {
        $this->vatNumber = $vatNumber;
        return $this;
    }

    public function getVatStatus(): bool|string|SemanticObject|array|null
    {
        return $this->vatStatus;
    }

    public function setVatStatus(bool|string|SemanticObject|array|null $vatStatus): static
    {
        $this->vatStatus = $vatStatus;
        return $this;
    }

    public function getEnterpriseId(): string|SemanticObject|array|null
    {
        return $this->enterpriseId;
    }

    public function setEnterpriseId(string|SemanticObject|array|null $enterpriseId): static
    {
        $this->enterpriseId = $enterpriseId;
        return $this;
    }

    public function getTemplateSaleSession(): string|SemanticObject|array|null
    {
        return $this->templateSaleSession;
    }

    public function setTemplateSaleSession(string|SemanticObject|array|null $templateSaleSession): static
    {
        $this->templateSaleSession = $templateSaleSession;
        return $this;
    }

    public function getIsCertifiedBy(): string|SemanticObject|array|null
    {
        return $this->isCertifiedBy;
    }

    public function setIsCertifiedBy(string|SemanticObject|array|null $isCertifiedBy): static
    {
        $this->isCertifiedBy = $isCertifiedBy;
        return $this;
    }

    public function getAffiliates(): array|Organization|string|SemanticObject|null
    {
        return $this->affiliates;
    }

    public function setAffiliates(array|Organization|string|SemanticObject|null $affiliates): static
    {
        $this->affiliates = $affiliates;
        return $this;
    }

    public function addAffiliates(Organization|string|SemanticObject $affiliates): static
    {
        if ($this->affiliates === null) {
            $this->affiliates = [];
        } elseif (!is_array($this->affiliates)) {
            $this->affiliates = [$this->affiliates];
        }
        $this->affiliates[] = $affiliates;
        return $this;
    }

    public function removeAffiliates(Organization|string|SemanticObject $affiliates): void
    {
        if (!is_array($this->affiliates)) {
            return;
        }
        $key = array_search($affiliates, $this->affiliates, true);
        if ($key !== false) {
            unset($this->affiliates[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->affiliates = array_values($this->affiliates);
        }
    }

    public function getDefines(): array|CustomerCategory|string|SemanticObject|null
    {
        return $this->defines;
    }

    public function setDefines(array|CustomerCategory|string|SemanticObject|null $defines): static
    {
        $this->defines = $defines;
        return $this;
    }

    public function addDefines(CustomerCategory|string|SemanticObject $defines): static
    {
        if ($this->defines === null) {
            $this->defines = [];
        } elseif (!is_array($this->defines)) {
            $this->defines = [$this->defines];
        }
        $this->defines[] = $defines;
        return $this;
    }

    public function removeDefines(CustomerCategory|string|SemanticObject $defines): void
    {
        if (!is_array($this->defines)) {
            return;
        }
        $key = array_search($defines, $this->defines, true);
        if ($key !== false) {
            unset($this->defines[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->defines = array_values($this->defines);
        }
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

    public function getMaintains(): array|Catalog|string|SemanticObject|null
    {
        return $this->maintains;
    }

    public function setMaintains(array|Catalog|string|SemanticObject|null $maintains): static
    {
        $this->maintains = $maintains;
        return $this;
    }

    public function addMaintains(Catalog|string|SemanticObject $maintains): static
    {
        if ($this->maintains === null) {
            $this->maintains = [];
        } elseif (!is_array($this->maintains)) {
            $this->maintains = [$this->maintains];
        }
        $this->maintains[] = $maintains;
        return $this;
    }

    public function removeMaintains(Catalog|string|SemanticObject $maintains): void
    {
        if (!is_array($this->maintains)) {
            return;
        }
        $key = array_search($maintains, $this->maintains, true);
        if ($key !== false) {
            unset($this->maintains[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->maintains = array_values($this->maintains);
        }
    }

    public function getManages(): array|CatalogItem|string|SemanticObject|null
    {
        return $this->manages;
    }

    public function setManages(array|CatalogItem|string|SemanticObject|null $manages): static
    {
        $this->manages = $manages;
        return $this;
    }

    public function addManages(CatalogItem|string|SemanticObject $manages): static
    {
        if ($this->manages === null) {
            $this->manages = [];
        } elseif (!is_array($this->manages)) {
            $this->manages = [$this->manages];
        }
        $this->manages[] = $manages;
        return $this;
    }

    public function removeManages(CatalogItem|string|SemanticObject $manages): void
    {
        if (!is_array($this->manages)) {
            return;
        }
        $key = array_search($manages, $this->manages, true);
        if ($key !== false) {
            unset($this->manages[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->manages = array_values($this->manages);
        }
    }

    public function getProposes(): array|TechnicalProduct|string|SemanticObject|null
    {
        return $this->proposes;
    }

    public function setProposes(array|TechnicalProduct|string|SemanticObject|null $proposes): static
    {
        $this->proposes = $proposes;
        return $this;
    }

    public function addProposes(TechnicalProduct|string|SemanticObject $proposes): static
    {
        if ($this->proposes === null) {
            $this->proposes = [];
        } elseif (!is_array($this->proposes)) {
            $this->proposes = [$this->proposes];
        }
        $this->proposes[] = $proposes;
        return $this;
    }

    public function removeProposes(TechnicalProduct|string|SemanticObject $proposes): void
    {
        if (!is_array($this->proposes)) {
            return;
        }
        $key = array_search($proposes, $this->proposes, true);
        if ($key !== false) {
            unset($this->proposes[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->proposes = array_values($this->proposes);
        }
    }

    public function getSupplies(): array|SuppliedProduct|string|SemanticObject|null
    {
        return $this->supplies;
    }

    public function setSupplies(array|SuppliedProduct|string|SemanticObject|null $supplies): static
    {
        $this->supplies = $supplies;
        return $this;
    }

    public function addSupplies(SuppliedProduct|string|SemanticObject $supplies): static
    {
        if ($this->supplies === null) {
            $this->supplies = [];
        } elseif (!is_array($this->supplies)) {
            $this->supplies = [$this->supplies];
        }
        $this->supplies[] = $supplies;
        return $this;
    }

    public function removeSupplies(SuppliedProduct|string|SemanticObject $supplies): void
    {
        if (!is_array($this->supplies)) {
            return;
        }
        $key = array_search($supplies, $this->supplies, true);
        if ($key !== false) {
            unset($this->supplies[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->supplies = array_values($this->supplies);
        }
    }

    public function getTransforms(): array|AsPlannedLocalTransformation|string|SemanticObject|null
    {
        return $this->transforms;
    }

    public function setTransforms(array|AsPlannedLocalTransformation|string|SemanticObject|null $transforms): static
    {
        $this->transforms = $transforms;
        return $this;
    }

    public function addTransforms(AsPlannedLocalTransformation|string|SemanticObject $transforms): static
    {
        if ($this->transforms === null) {
            $this->transforms = [];
        } elseif (!is_array($this->transforms)) {
            $this->transforms = [$this->transforms];
        }
        $this->transforms[] = $transforms;
        return $this;
    }

    public function removeTransforms(AsPlannedLocalTransformation|string|SemanticObject $transforms): void
    {
        if (!is_array($this->transforms)) {
            return;
        }
        $key = array_search($transforms, $this->transforms, true);
        if ($key !== false) {
            unset($this->transforms[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->transforms = array_values($this->transforms);
        }
    }
}
