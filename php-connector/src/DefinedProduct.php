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

use DataFoodConsortium\Connector\CatalogItem;
use DataFoodConsortium\Connector\ProductOption;
use DataFoodConsortium\Connector\QuantitativeValue;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\WhatSubject;

class DefinedProduct extends WhatSubject implements IDefinedProduct
{
    public const SEMANTIC_TYPE = 'dfc-b:DefinedProduct';

    private string|SemanticObject|array|null $image = null;
    private string|SemanticObject|array|null $url = null;
    private string|SemanticObject|array|null $brandName = null;
    private string|SemanticObject|array|null $claimText = null;
    private float|string|SemanticObject|array|null $percentageOfAlcoholByVolume = null;
    private float|string|SemanticObject|array|null $lifetime = null;
    private array|string|SemanticObject|null $physicalCharacteristics = [];
    private float|string|SemanticObject|array|null $quantityValue = null;
    private string|SemanticObject|array|null $specificCondition = null;
    private array|string|SemanticObject|null $composes = [];
    private string|SemanticObject|array|null $consumedBy = null;
    private string|SemanticObject|array|null $allergenCharacteristic = null;
    private string|SemanticObject|array|null $brand = null;
    private string|SemanticObject|array|null $certification = null;
    private string|SemanticObject|array|null $characteristic = null;
    private string|SemanticObject|array|null $claim = null;
    private string|SemanticObject|array|null $containerInformation = null;
    private string|SemanticObject|array|null $geographicalOrigin = null;
    private string|SemanticObject|array|null $ingredient = null;
    private string|SemanticObject|array|null $labellingCharacteristic = null;
    private string|SemanticObject|array|null $natureOrigin = null;
    private string|SemanticObject|array|null $nutrientCharacteristic = null;
    private string|SemanticObject|array|null $partOrigin = null;
    private string|SemanticObject|array|null $physicalCharacteristic = null;
    private string|SemanticObject|array|null $type = null;
    private string|SemanticObject|array|null $unit = null;
    private string|SemanticObject|array|null $variant = null;
    private string|SemanticObject|array|null $processOf = null;
    private QuantitativeValue|string|SemanticObject|array|null $quantity = null;
    private ProductOption|string|SemanticObject|array|null $referenceProductOption = null;
    private CatalogItem|string|SemanticObject|array|null $referencedBy = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->image = $params['image'] ?? null;
        $this->url = $params['url'] ?? null;
        $this->brandName = $params['brandName'] ?? null;
        $this->claimText = $params['claimText'] ?? null;
        $this->percentageOfAlcoholByVolume = $params['percentageOfAlcoholByVolume'] ?? null;
        $this->lifetime = $params['lifetime'] ?? null;
        $this->physicalCharacteristics = $params['physicalCharacteristics'] ?? [];
        $this->quantityValue = $params['quantityValue'] ?? null;
        $this->specificCondition = $params['specificCondition'] ?? null;
        $this->composes = $params['composes'] ?? [];
        $this->consumedBy = $params['consumedBy'] ?? null;
        $this->allergenCharacteristic = $params['allergenCharacteristic'] ?? null;
        $this->brand = $params['brand'] ?? null;
        $this->certification = $params['certification'] ?? null;
        $this->characteristic = $params['characteristic'] ?? null;
        $this->claim = $params['claim'] ?? null;
        $this->containerInformation = $params['containerInformation'] ?? null;
        $this->geographicalOrigin = $params['geographicalOrigin'] ?? null;
        $this->ingredient = $params['ingredient'] ?? null;
        $this->labellingCharacteristic = $params['labellingCharacteristic'] ?? null;
        $this->natureOrigin = $params['natureOrigin'] ?? null;
        $this->nutrientCharacteristic = $params['nutrientCharacteristic'] ?? null;
        $this->partOrigin = $params['partOrigin'] ?? null;
        $this->physicalCharacteristic = $params['physicalCharacteristic'] ?? null;
        $this->type = $params['type'] ?? null;
        $this->unit = $params['unit'] ?? null;
        $this->variant = $params['variant'] ?? null;
        $this->processOf = $params['processOf'] ?? null;
        $this->quantity = $params['quantity'] ?? null;
        $this->referenceProductOption = $params['referenceProductOption'] ?? null;
        $this->referencedBy = $params['referencedBy'] ?? null;
        $this->registerSemanticProperty('dfc-b:Image', fn() => $this->image);
        $this->registerSemanticProperty('dfc-b:URL', fn() => $this->url);
        $this->registerSemanticProperty('dfc-b:brand', fn() => $this->brandName);
        $this->registerSemanticProperty('dfc-b:claim', fn() => $this->claimText);
        $this->registerSemanticProperty('dfc-b:hasPercentageOfAlcoholByVolume', fn() => $this->percentageOfAlcoholByVolume);
        $this->registerSemanticProperty('dfc-b:lifetime', fn() => $this->lifetime);
        $this->registerSemanticProperty('dfc-b:physicalCharacteristics', fn() => $this->physicalCharacteristics);
        $this->registerSemanticProperty('dfc-b:quantity', fn() => $this->quantityValue);
        $this->registerSemanticProperty('dfc-b:specificCondition', fn() => $this->specificCondition);
        $this->registerSemanticProperty('dfc-b:composes', fn() => $this->composes);
        $this->registerSemanticProperty('dfc-b:consumedBy', fn() => $this->consumedBy);
        $this->registerSemanticProperty('dfc-b:hasAllergenCharacteristic', fn() => $this->allergenCharacteristic);
        $this->registerSemanticProperty('dfc-b:hasBrand', fn() => $this->brand);
        $this->registerSemanticProperty('dfc-b:hasCertification', fn() => $this->certification);
        $this->registerSemanticProperty('dfc-b:hasCharacteristic', fn() => $this->characteristic);
        $this->registerSemanticProperty('dfc-b:hasClaim', fn() => $this->claim);
        $this->registerSemanticProperty('dfc-b:hasContainerInformation', fn() => $this->containerInformation);
        $this->registerSemanticProperty('dfc-b:hasGeographicalOrigin', fn() => $this->geographicalOrigin);
        $this->registerSemanticProperty('dfc-b:hasIngredient', fn() => $this->ingredient);
        $this->registerSemanticProperty('dfc-b:hasLabellingCharacteristic', fn() => $this->labellingCharacteristic);
        $this->registerSemanticProperty('dfc-b:hasNatureOrigin', fn() => $this->natureOrigin);
        $this->registerSemanticProperty('dfc-b:hasNutrientCharacteristic', fn() => $this->nutrientCharacteristic);
        $this->registerSemanticProperty('dfc-b:hasPartOrigin', fn() => $this->partOrigin);
        $this->registerSemanticProperty('dfc-b:hasPhysicalCharacteristic', fn() => $this->physicalCharacteristic);
        $this->registerSemanticProperty('dfc-b:hasType', fn() => $this->type);
        $this->registerSemanticProperty('dfc-b:hasUnit', fn() => $this->unit);
        $this->registerSemanticProperty('dfc-b:hasVariant', fn() => $this->variant);
        $this->registerSemanticProperty('dfc-b:processOf', fn() => $this->processOf);
        $this->registerSemanticProperty('dfc-b:hasQuantity', fn() => $this->quantity);
        $this->registerSemanticProperty('dfc-b:hasReferenceProductOption', fn() => $this->referenceProductOption);
        $this->registerSemanticProperty('dfc-b:referencedBy', fn() => $this->referencedBy);
    }
    public function getImage(): string|SemanticObject|array|null
    {
        return $this->image;
    }

    public function setImage(string|SemanticObject|array|null $image): static
    {
        $this->image = $image;
        return $this;
    }

    public function getUrl(): string|SemanticObject|array|null
    {
        return $this->url;
    }

    public function setUrl(string|SemanticObject|array|null $url): static
    {
        $this->url = $url;
        return $this;
    }

    public function getBrandName(): string|SemanticObject|array|null
    {
        return $this->brandName;
    }

    public function setBrandName(string|SemanticObject|array|null $brandName): static
    {
        $this->brandName = $brandName;
        return $this;
    }

    public function getClaimText(): string|SemanticObject|array|null
    {
        return $this->claimText;
    }

    public function setClaimText(string|SemanticObject|array|null $claimText): static
    {
        $this->claimText = $claimText;
        return $this;
    }

    public function getPercentageOfAlcoholByVolume(): float|string|SemanticObject|array|null
    {
        return $this->percentageOfAlcoholByVolume;
    }

    public function setPercentageOfAlcoholByVolume(float|string|SemanticObject|array|null $percentageOfAlcoholByVolume): static
    {
        $this->percentageOfAlcoholByVolume = $percentageOfAlcoholByVolume;
        return $this;
    }

    public function getLifetime(): float|string|SemanticObject|array|null
    {
        return $this->lifetime;
    }

    public function setLifetime(float|string|SemanticObject|array|null $lifetime): static
    {
        $this->lifetime = $lifetime;
        return $this;
    }

    public function getPhysicalCharacteristics(): array|string|SemanticObject|null
    {
        return $this->physicalCharacteristics;
    }

    public function setPhysicalCharacteristics(array|string|SemanticObject|null $physicalCharacteristics): static
    {
        $this->physicalCharacteristics = $physicalCharacteristics;
        return $this;
    }

    public function addPhysicalCharacteristics(string|SemanticObject $physicalCharacteristics): static
    {
        if ($this->physicalCharacteristics === null) {
            $this->physicalCharacteristics = [];
        } elseif (!is_array($this->physicalCharacteristics)) {
            $this->physicalCharacteristics = [$this->physicalCharacteristics];
        }
        $this->physicalCharacteristics[] = $physicalCharacteristics;
        return $this;
    }

    public function removePhysicalCharacteristics(string|SemanticObject $physicalCharacteristics): void
    {
        if (!is_array($this->physicalCharacteristics)) {
            return;
        }
        $key = array_search($physicalCharacteristics, $this->physicalCharacteristics, true);
        if ($key !== false) {
            unset($this->physicalCharacteristics[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->physicalCharacteristics = array_values($this->physicalCharacteristics);
        }
    }

    public function getQuantityValue(): float|string|SemanticObject|array|null
    {
        return $this->quantityValue;
    }

    public function setQuantityValue(float|string|SemanticObject|array|null $quantityValue): static
    {
        $this->quantityValue = $quantityValue;
        return $this;
    }

    public function getSpecificCondition(): string|SemanticObject|array|null
    {
        return $this->specificCondition;
    }

    public function setSpecificCondition(string|SemanticObject|array|null $specificCondition): static
    {
        $this->specificCondition = $specificCondition;
        return $this;
    }

    public function getComposes(): array|string|SemanticObject|null
    {
        return $this->composes;
    }

    public function setComposes(array|string|SemanticObject|null $composes): static
    {
        $this->composes = $composes;
        return $this;
    }

    public function addComposes(string|SemanticObject $composes): static
    {
        if ($this->composes === null) {
            $this->composes = [];
        } elseif (!is_array($this->composes)) {
            $this->composes = [$this->composes];
        }
        $this->composes[] = $composes;
        return $this;
    }

    public function removeComposes(string|SemanticObject $composes): void
    {
        if (!is_array($this->composes)) {
            return;
        }
        $key = array_search($composes, $this->composes, true);
        if ($key !== false) {
            unset($this->composes[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->composes = array_values($this->composes);
        }
    }

    public function getConsumedBy(): string|SemanticObject|array|null
    {
        return $this->consumedBy;
    }

    public function setConsumedBy(string|SemanticObject|array|null $consumedBy): static
    {
        $this->consumedBy = $consumedBy;
        return $this;
    }

    public function getAllergenCharacteristic(): string|SemanticObject|array|null
    {
        return $this->allergenCharacteristic;
    }

    public function setAllergenCharacteristic(string|SemanticObject|array|null $allergenCharacteristic): static
    {
        $this->allergenCharacteristic = $allergenCharacteristic;
        return $this;
    }

    public function getBrand(): string|SemanticObject|array|null
    {
        return $this->brand;
    }

    public function setBrand(string|SemanticObject|array|null $brand): static
    {
        $this->brand = $brand;
        return $this;
    }

    public function getCertification(): string|SemanticObject|array|null
    {
        return $this->certification;
    }

    public function setCertification(string|SemanticObject|array|null $certification): static
    {
        $this->certification = $certification;
        return $this;
    }

    public function getCharacteristic(): string|SemanticObject|array|null
    {
        return $this->characteristic;
    }

    public function setCharacteristic(string|SemanticObject|array|null $characteristic): static
    {
        $this->characteristic = $characteristic;
        return $this;
    }

    public function getClaim(): string|SemanticObject|array|null
    {
        return $this->claim;
    }

    public function setClaim(string|SemanticObject|array|null $claim): static
    {
        $this->claim = $claim;
        return $this;
    }

    public function getContainerInformation(): string|SemanticObject|array|null
    {
        return $this->containerInformation;
    }

    public function setContainerInformation(string|SemanticObject|array|null $containerInformation): static
    {
        $this->containerInformation = $containerInformation;
        return $this;
    }

    public function getGeographicalOrigin(): string|SemanticObject|array|null
    {
        return $this->geographicalOrigin;
    }

    public function setGeographicalOrigin(string|SemanticObject|array|null $geographicalOrigin): static
    {
        $this->geographicalOrigin = $geographicalOrigin;
        return $this;
    }

    public function getIngredient(): string|SemanticObject|array|null
    {
        return $this->ingredient;
    }

    public function setIngredient(string|SemanticObject|array|null $ingredient): static
    {
        $this->ingredient = $ingredient;
        return $this;
    }

    public function getLabellingCharacteristic(): string|SemanticObject|array|null
    {
        return $this->labellingCharacteristic;
    }

    public function setLabellingCharacteristic(string|SemanticObject|array|null $labellingCharacteristic): static
    {
        $this->labellingCharacteristic = $labellingCharacteristic;
        return $this;
    }

    public function getNatureOrigin(): string|SemanticObject|array|null
    {
        return $this->natureOrigin;
    }

    public function setNatureOrigin(string|SemanticObject|array|null $natureOrigin): static
    {
        $this->natureOrigin = $natureOrigin;
        return $this;
    }

    public function getNutrientCharacteristic(): string|SemanticObject|array|null
    {
        return $this->nutrientCharacteristic;
    }

    public function setNutrientCharacteristic(string|SemanticObject|array|null $nutrientCharacteristic): static
    {
        $this->nutrientCharacteristic = $nutrientCharacteristic;
        return $this;
    }

    public function getPartOrigin(): string|SemanticObject|array|null
    {
        return $this->partOrigin;
    }

    public function setPartOrigin(string|SemanticObject|array|null $partOrigin): static
    {
        $this->partOrigin = $partOrigin;
        return $this;
    }

    public function getPhysicalCharacteristic(): string|SemanticObject|array|null
    {
        return $this->physicalCharacteristic;
    }

    public function setPhysicalCharacteristic(string|SemanticObject|array|null $physicalCharacteristic): static
    {
        $this->physicalCharacteristic = $physicalCharacteristic;
        return $this;
    }

    public function getType(): string|SemanticObject|array|null
    {
        return $this->type;
    }

    public function setType(string|SemanticObject|array|null $type): static
    {
        $this->type = $type;
        return $this;
    }

    public function getUnit(): string|SemanticObject|array|null
    {
        return $this->unit;
    }

    public function setUnit(string|SemanticObject|array|null $unit): static
    {
        $this->unit = $unit;
        return $this;
    }

    public function getVariant(): string|SemanticObject|array|null
    {
        return $this->variant;
    }

    public function setVariant(string|SemanticObject|array|null $variant): static
    {
        $this->variant = $variant;
        return $this;
    }

    public function getProcessOf(): string|SemanticObject|array|null
    {
        return $this->processOf;
    }

    public function setProcessOf(string|SemanticObject|array|null $processOf): static
    {
        $this->processOf = $processOf;
        return $this;
    }

    public function getQuantity(): QuantitativeValue|string|SemanticObject|array|null
    {
        return $this->quantity;
    }

    public function setQuantity(QuantitativeValue|string|SemanticObject|array|null $quantity): static
    {
        $this->quantity = $quantity;
        return $this;
    }

    public function getReferenceProductOption(): ProductOption|string|SemanticObject|array|null
    {
        return $this->referenceProductOption;
    }

    public function setReferenceProductOption(ProductOption|string|SemanticObject|array|null $referenceProductOption): static
    {
        $this->referenceProductOption = $referenceProductOption;
        return $this;
    }

    public function getReferencedBy(): CatalogItem|string|SemanticObject|array|null
    {
        return $this->referencedBy;
    }

    public function setReferencedBy(CatalogItem|string|SemanticObject|array|null $referencedBy): static
    {
        $this->referencedBy = $referencedBy;
        return $this;
    }
}
