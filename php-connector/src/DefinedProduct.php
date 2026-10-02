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
    private string|SemanticObject|array|null $brand = null;
    private string|SemanticObject|array|null $claim = null;
    private float|string|SemanticObject|array|null $percentageOfAlcoholByVolume = null;
    private float|string|SemanticObject|array|null $lifetime = null;
    private array|string|SemanticObject|null $physicalCharacteristics = [];
    private float|string|SemanticObject|array|null $quantity = null;
    private string|SemanticObject|array|null $specificCondition = null;
    private array|string|SemanticObject|null $composes = [];
    private array|string|SemanticObject|null $consumedBy = [];
    private array|string|SemanticObject|null $allergenCharacteristic = [];
    private string|SemanticObject|array|null $hasBrand = null;
    private string|SemanticObject|array|null $certification = null;
    private string|SemanticObject|array|null $characteristic = null;
    private array|string|SemanticObject|null $hasClaim = [];
    private string|SemanticObject|array|null $containerInformation = null;
    private string|SemanticObject|array|null $geographicalOrigin = null;
    private string|SemanticObject|array|null $ingredient = null;
    private string|SemanticObject|array|null $labellingCharacteristic = null;
    private array|string|SemanticObject|null $natureOrigin = [];
    private array|string|SemanticObject|null $nutrientCharacteristic = [];
    private array|string|SemanticObject|null $partOrigin = [];
    private array|string|SemanticObject|null $physicalCharacteristic = [];
    private string|SemanticObject|array|null $type = null;
    private string|SemanticObject|array|null $unit = null;
    private array|string|SemanticObject|null $variant = [];
    private string|SemanticObject|array|null $processOf = null;
    private QuantitativeValue|string|SemanticObject|array|null $hasQuantity = null;
    private array|ProductOption|string|SemanticObject|null $referenceProductOption = [];
    private array|CatalogItem|string|SemanticObject|null $referencedBy = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->image = $params['image'] ?? null;
        $this->url = $params['url'] ?? null;
        $this->brand = $params['brand'] ?? null;
        $this->claim = $params['claim'] ?? null;
        $this->percentageOfAlcoholByVolume = $params['percentageOfAlcoholByVolume'] ?? null;
        $this->lifetime = $params['lifetime'] ?? null;
        $this->physicalCharacteristics = $params['physicalCharacteristics'] ?? [];
        $this->quantity = $params['quantity'] ?? null;
        $this->specificCondition = $params['specificCondition'] ?? null;
        $this->composes = $params['composes'] ?? [];
        $this->consumedBy = $params['consumedBy'] ?? [];
        $this->allergenCharacteristic = $params['allergenCharacteristic'] ?? [];
        $this->hasBrand = $params['hasBrand'] ?? null;
        $this->certification = $params['certification'] ?? null;
        $this->characteristic = $params['characteristic'] ?? null;
        $this->hasClaim = $params['hasClaim'] ?? [];
        $this->containerInformation = $params['containerInformation'] ?? null;
        $this->geographicalOrigin = $params['geographicalOrigin'] ?? null;
        $this->ingredient = $params['ingredient'] ?? null;
        $this->labellingCharacteristic = $params['labellingCharacteristic'] ?? null;
        $this->natureOrigin = $params['natureOrigin'] ?? [];
        $this->nutrientCharacteristic = $params['nutrientCharacteristic'] ?? [];
        $this->partOrigin = $params['partOrigin'] ?? [];
        $this->physicalCharacteristic = $params['physicalCharacteristic'] ?? [];
        $this->type = $params['type'] ?? null;
        $this->unit = $params['unit'] ?? null;
        $this->variant = $params['variant'] ?? [];
        $this->processOf = $params['processOf'] ?? null;
        $this->hasQuantity = $params['hasQuantity'] ?? null;
        $this->referenceProductOption = $params['referenceProductOption'] ?? [];
        $this->referencedBy = $params['referencedBy'] ?? [];
        $this->registerSemanticProperty('dfc-b:Image', fn() => $this->image);
        $this->registerSemanticProperty('dfc-b:URL', fn() => $this->url);
        $this->registerSemanticProperty('dfc-b:brand', fn() => $this->brand);
        $this->registerSemanticProperty('dfc-b:claim', fn() => $this->claim);
        $this->registerSemanticProperty('dfc-b:hasPercentageOfAlcoholByVolume', fn() => $this->percentageOfAlcoholByVolume);
        $this->registerSemanticProperty('dfc-b:lifetime', fn() => $this->lifetime);
        $this->registerSemanticProperty('dfc-b:physicalCharacteristics', fn() => $this->physicalCharacteristics);
        $this->registerSemanticProperty('dfc-b:quantity', fn() => $this->quantity);
        $this->registerSemanticProperty('dfc-b:specificCondition', fn() => $this->specificCondition);
        $this->registerSemanticProperty('dfc-b:composes', fn() => $this->composes);
        $this->registerSemanticProperty('dfc-b:consumedBy', fn() => $this->consumedBy);
        $this->registerSemanticProperty('dfc-b:hasAllergenCharacteristic', fn() => $this->allergenCharacteristic);
        $this->registerSemanticProperty('dfc-b:hasBrand', fn() => $this->hasBrand);
        $this->registerSemanticProperty('dfc-b:hasCertification', fn() => $this->certification);
        $this->registerSemanticProperty('dfc-b:hasCharacteristic', fn() => $this->characteristic);
        $this->registerSemanticProperty('dfc-b:hasClaim', fn() => $this->hasClaim);
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
        $this->registerSemanticProperty('dfc-b:hasQuantity', fn() => $this->hasQuantity);
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

    public function getBrand(): string|SemanticObject|array|null
    {
        return $this->brand;
    }

    public function setBrand(string|SemanticObject|array|null $brand): static
    {
        $this->brand = $brand;
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
        if ($this->physicalCharacteristics === null) {
            return;
        }
        if (!is_array($this->physicalCharacteristics)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->physicalCharacteristics === $physicalCharacteristics) {
                $this->physicalCharacteristics = [];
            }
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

    public function getQuantity(): float|string|SemanticObject|array|null
    {
        return $this->quantity;
    }

    public function setQuantity(float|string|SemanticObject|array|null $quantity): static
    {
        $this->quantity = $quantity;
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
        if ($this->composes === null) {
            return;
        }
        if (!is_array($this->composes)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->composes === $composes) {
                $this->composes = [];
            }
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

    public function getConsumedBy(): array|string|SemanticObject|null
    {
        return $this->consumedBy;
    }

    public function setConsumedBy(array|string|SemanticObject|null $consumedBy): static
    {
        $this->consumedBy = $consumedBy;
        return $this;
    }

    public function addConsumedBy(string|SemanticObject $consumedBy): static
    {
        if ($this->consumedBy === null) {
            $this->consumedBy = [];
        } elseif (!is_array($this->consumedBy)) {
            $this->consumedBy = [$this->consumedBy];
        }
        $this->consumedBy[] = $consumedBy;
        return $this;
    }

    public function removeConsumedBy(string|SemanticObject $consumedBy): void
    {
        if ($this->consumedBy === null) {
            return;
        }
        if (!is_array($this->consumedBy)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->consumedBy === $consumedBy) {
                $this->consumedBy = [];
            }
            return;
        }
        $key = array_search($consumedBy, $this->consumedBy, true);
        if ($key !== false) {
            unset($this->consumedBy[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->consumedBy = array_values($this->consumedBy);
        }
    }

    public function getAllergenCharacteristic(): array|string|SemanticObject|null
    {
        return $this->allergenCharacteristic;
    }

    public function setAllergenCharacteristic(array|string|SemanticObject|null $allergenCharacteristic): static
    {
        $this->allergenCharacteristic = $allergenCharacteristic;
        return $this;
    }

    public function addAllergenCharacteristic(string|SemanticObject $allergenCharacteristic): static
    {
        if ($this->allergenCharacteristic === null) {
            $this->allergenCharacteristic = [];
        } elseif (!is_array($this->allergenCharacteristic)) {
            $this->allergenCharacteristic = [$this->allergenCharacteristic];
        }
        $this->allergenCharacteristic[] = $allergenCharacteristic;
        return $this;
    }

    public function removeAllergenCharacteristic(string|SemanticObject $allergenCharacteristic): void
    {
        if ($this->allergenCharacteristic === null) {
            return;
        }
        if (!is_array($this->allergenCharacteristic)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->allergenCharacteristic === $allergenCharacteristic) {
                $this->allergenCharacteristic = [];
            }
            return;
        }
        $key = array_search($allergenCharacteristic, $this->allergenCharacteristic, true);
        if ($key !== false) {
            unset($this->allergenCharacteristic[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->allergenCharacteristic = array_values($this->allergenCharacteristic);
        }
    }

    public function getHasBrand(): string|SemanticObject|array|null
    {
        return $this->hasBrand;
    }

    public function setHasBrand(string|SemanticObject|array|null $hasBrand): static
    {
        $this->hasBrand = $hasBrand;
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

    public function getHasClaim(): array|string|SemanticObject|null
    {
        return $this->hasClaim;
    }

    public function setHasClaim(array|string|SemanticObject|null $hasClaim): static
    {
        $this->hasClaim = $hasClaim;
        return $this;
    }

    public function addHasClaim(string|SemanticObject $hasClaim): static
    {
        if ($this->hasClaim === null) {
            $this->hasClaim = [];
        } elseif (!is_array($this->hasClaim)) {
            $this->hasClaim = [$this->hasClaim];
        }
        $this->hasClaim[] = $hasClaim;
        return $this;
    }

    public function removeHasClaim(string|SemanticObject $hasClaim): void
    {
        if ($this->hasClaim === null) {
            return;
        }
        if (!is_array($this->hasClaim)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->hasClaim === $hasClaim) {
                $this->hasClaim = [];
            }
            return;
        }
        $key = array_search($hasClaim, $this->hasClaim, true);
        if ($key !== false) {
            unset($this->hasClaim[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->hasClaim = array_values($this->hasClaim);
        }
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

    public function getNatureOrigin(): array|string|SemanticObject|null
    {
        return $this->natureOrigin;
    }

    public function setNatureOrigin(array|string|SemanticObject|null $natureOrigin): static
    {
        $this->natureOrigin = $natureOrigin;
        return $this;
    }

    public function addNatureOrigin(string|SemanticObject $natureOrigin): static
    {
        if ($this->natureOrigin === null) {
            $this->natureOrigin = [];
        } elseif (!is_array($this->natureOrigin)) {
            $this->natureOrigin = [$this->natureOrigin];
        }
        $this->natureOrigin[] = $natureOrigin;
        return $this;
    }

    public function removeNatureOrigin(string|SemanticObject $natureOrigin): void
    {
        if ($this->natureOrigin === null) {
            return;
        }
        if (!is_array($this->natureOrigin)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->natureOrigin === $natureOrigin) {
                $this->natureOrigin = [];
            }
            return;
        }
        $key = array_search($natureOrigin, $this->natureOrigin, true);
        if ($key !== false) {
            unset($this->natureOrigin[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->natureOrigin = array_values($this->natureOrigin);
        }
    }

    public function getNutrientCharacteristic(): array|string|SemanticObject|null
    {
        return $this->nutrientCharacteristic;
    }

    public function setNutrientCharacteristic(array|string|SemanticObject|null $nutrientCharacteristic): static
    {
        $this->nutrientCharacteristic = $nutrientCharacteristic;
        return $this;
    }

    public function addNutrientCharacteristic(string|SemanticObject $nutrientCharacteristic): static
    {
        if ($this->nutrientCharacteristic === null) {
            $this->nutrientCharacteristic = [];
        } elseif (!is_array($this->nutrientCharacteristic)) {
            $this->nutrientCharacteristic = [$this->nutrientCharacteristic];
        }
        $this->nutrientCharacteristic[] = $nutrientCharacteristic;
        return $this;
    }

    public function removeNutrientCharacteristic(string|SemanticObject $nutrientCharacteristic): void
    {
        if ($this->nutrientCharacteristic === null) {
            return;
        }
        if (!is_array($this->nutrientCharacteristic)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->nutrientCharacteristic === $nutrientCharacteristic) {
                $this->nutrientCharacteristic = [];
            }
            return;
        }
        $key = array_search($nutrientCharacteristic, $this->nutrientCharacteristic, true);
        if ($key !== false) {
            unset($this->nutrientCharacteristic[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->nutrientCharacteristic = array_values($this->nutrientCharacteristic);
        }
    }

    public function getPartOrigin(): array|string|SemanticObject|null
    {
        return $this->partOrigin;
    }

    public function setPartOrigin(array|string|SemanticObject|null $partOrigin): static
    {
        $this->partOrigin = $partOrigin;
        return $this;
    }

    public function addPartOrigin(string|SemanticObject $partOrigin): static
    {
        if ($this->partOrigin === null) {
            $this->partOrigin = [];
        } elseif (!is_array($this->partOrigin)) {
            $this->partOrigin = [$this->partOrigin];
        }
        $this->partOrigin[] = $partOrigin;
        return $this;
    }

    public function removePartOrigin(string|SemanticObject $partOrigin): void
    {
        if ($this->partOrigin === null) {
            return;
        }
        if (!is_array($this->partOrigin)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->partOrigin === $partOrigin) {
                $this->partOrigin = [];
            }
            return;
        }
        $key = array_search($partOrigin, $this->partOrigin, true);
        if ($key !== false) {
            unset($this->partOrigin[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->partOrigin = array_values($this->partOrigin);
        }
    }

    public function getPhysicalCharacteristic(): array|string|SemanticObject|null
    {
        return $this->physicalCharacteristic;
    }

    public function setPhysicalCharacteristic(array|string|SemanticObject|null $physicalCharacteristic): static
    {
        $this->physicalCharacteristic = $physicalCharacteristic;
        return $this;
    }

    public function addPhysicalCharacteristic(string|SemanticObject $physicalCharacteristic): static
    {
        if ($this->physicalCharacteristic === null) {
            $this->physicalCharacteristic = [];
        } elseif (!is_array($this->physicalCharacteristic)) {
            $this->physicalCharacteristic = [$this->physicalCharacteristic];
        }
        $this->physicalCharacteristic[] = $physicalCharacteristic;
        return $this;
    }

    public function removePhysicalCharacteristic(string|SemanticObject $physicalCharacteristic): void
    {
        if ($this->physicalCharacteristic === null) {
            return;
        }
        if (!is_array($this->physicalCharacteristic)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->physicalCharacteristic === $physicalCharacteristic) {
                $this->physicalCharacteristic = [];
            }
            return;
        }
        $key = array_search($physicalCharacteristic, $this->physicalCharacteristic, true);
        if ($key !== false) {
            unset($this->physicalCharacteristic[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->physicalCharacteristic = array_values($this->physicalCharacteristic);
        }
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

    public function getVariant(): array|string|SemanticObject|null
    {
        return $this->variant;
    }

    public function setVariant(array|string|SemanticObject|null $variant): static
    {
        $this->variant = $variant;
        return $this;
    }

    public function addVariant(string|SemanticObject $variant): static
    {
        if ($this->variant === null) {
            $this->variant = [];
        } elseif (!is_array($this->variant)) {
            $this->variant = [$this->variant];
        }
        $this->variant[] = $variant;
        return $this;
    }

    public function removeVariant(string|SemanticObject $variant): void
    {
        if ($this->variant === null) {
            return;
        }
        if (!is_array($this->variant)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->variant === $variant) {
                $this->variant = [];
            }
            return;
        }
        $key = array_search($variant, $this->variant, true);
        if ($key !== false) {
            unset($this->variant[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->variant = array_values($this->variant);
        }
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

    public function getHasQuantity(): QuantitativeValue|string|SemanticObject|array|null
    {
        return $this->hasQuantity;
    }

    public function setHasQuantity(QuantitativeValue|string|SemanticObject|array|null $hasQuantity): static
    {
        $this->hasQuantity = $hasQuantity;
        return $this;
    }

    public function getReferenceProductOption(): array|ProductOption|string|SemanticObject|null
    {
        return $this->referenceProductOption;
    }

    public function setReferenceProductOption(array|ProductOption|string|SemanticObject|null $referenceProductOption): static
    {
        $this->referenceProductOption = $referenceProductOption;
        return $this;
    }

    public function addReferenceProductOption(ProductOption|string|SemanticObject $referenceProductOption): static
    {
        if ($this->referenceProductOption === null) {
            $this->referenceProductOption = [];
        } elseif (!is_array($this->referenceProductOption)) {
            $this->referenceProductOption = [$this->referenceProductOption];
        }
        $this->referenceProductOption[] = $referenceProductOption;
        return $this;
    }

    public function removeReferenceProductOption(ProductOption|string|SemanticObject $referenceProductOption): void
    {
        if ($this->referenceProductOption === null) {
            return;
        }
        if (!is_array($this->referenceProductOption)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->referenceProductOption === $referenceProductOption) {
                $this->referenceProductOption = [];
            }
            return;
        }
        $key = array_search($referenceProductOption, $this->referenceProductOption, true);
        if ($key !== false) {
            unset($this->referenceProductOption[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->referenceProductOption = array_values($this->referenceProductOption);
        }
    }

    public function getReferencedBy(): array|CatalogItem|string|SemanticObject|null
    {
        return $this->referencedBy;
    }

    public function setReferencedBy(array|CatalogItem|string|SemanticObject|null $referencedBy): static
    {
        $this->referencedBy = $referencedBy;
        return $this;
    }

    public function addReferencedBy(CatalogItem|string|SemanticObject $referencedBy): static
    {
        if ($this->referencedBy === null) {
            $this->referencedBy = [];
        } elseif (!is_array($this->referencedBy)) {
            $this->referencedBy = [$this->referencedBy];
        }
        $this->referencedBy[] = $referencedBy;
        return $this;
    }

    public function removeReferencedBy(CatalogItem|string|SemanticObject $referencedBy): void
    {
        if ($this->referencedBy === null) {
            return;
        }
        if (!is_array($this->referencedBy)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->referencedBy === $referencedBy) {
                $this->referencedBy = [];
            }
            return;
        }
        $key = array_search($referencedBy, $this->referencedBy, true);
        if ($key !== false) {
            unset($this->referencedBy[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->referencedBy = array_values($this->referencedBy);
        }
    }
}
