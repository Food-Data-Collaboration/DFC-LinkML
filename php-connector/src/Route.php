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

use DataFoodConsortium\Connector\Feature;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\WhereSubject;

class Route extends WhereSubject implements IRoute
{
    public const SEMANTIC_TYPE = 'dfc-b:Route';

    private array|string|SemanticObject|null $step = [];
    private string|SemanticObject|array|null $useVehicle = null;
    private array|Feature|string|SemanticObject|null $geoJsonFeature = [];

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->step = $params['step'] ?? [];
        $this->useVehicle = $params['useVehicle'] ?? null;
        $this->geoJsonFeature = $params['geoJsonFeature'] ?? [];
        $this->registerSemanticProperty('dfc-b:hasStep', fn() => $this->step);
        $this->registerSemanticProperty('dfc-b:useVehicle', fn() => $this->useVehicle);
        $this->registerSemanticProperty('dfc-b:hasGeoJsonFeature', fn() => $this->geoJsonFeature);
    }
    public function getStep(): array|string|SemanticObject|null
    {
        return $this->step;
    }

    public function setStep(array|string|SemanticObject|null $step): static
    {
        $this->step = $step;
        return $this;
    }

    public function addStep(string|SemanticObject $step): static
    {
        if ($this->step === null) {
            $this->step = [];
        } elseif (!is_array($this->step)) {
            $this->step = [$this->step];
        }
        $this->step[] = $step;
        return $this;
    }

    public function removeStep(string|SemanticObject $step): void
    {
        if ($this->step === null) {
            return;
        }
        if (!is_array($this->step)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->step === $step) {
                $this->step = [];
            }
            return;
        }
        $key = array_search($step, $this->step, true);
        if ($key !== false) {
            unset($this->step[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->step = array_values($this->step);
        }
    }

    public function getUseVehicle(): string|SemanticObject|array|null
    {
        return $this->useVehicle;
    }

    public function setUseVehicle(string|SemanticObject|array|null $useVehicle): static
    {
        $this->useVehicle = $useVehicle;
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
}
