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

    private string|SemanticObject|array|null $step = null;
    private string|SemanticObject|array|null $useVehicle = null;
    private Feature|string|SemanticObject|array|null $geoJsonFeature = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->step = $params['step'] ?? null;
        $this->useVehicle = $params['useVehicle'] ?? null;
        $this->geoJsonFeature = $params['geoJsonFeature'] ?? null;
        $this->registerSemanticProperty('dfc-b:hasStep', fn() => $this->step);
        $this->registerSemanticProperty('dfc-b:useVehicle', fn() => $this->useVehicle);
        $this->registerSemanticProperty('dfc-b:hasGeoJsonFeature', fn() => $this->geoJsonFeature);
    }
    public function getStep(): string|SemanticObject|array|null
    {
        return $this->step;
    }

    public function setStep(string|SemanticObject|array|null $step): static
    {
        $this->step = $step;
        return $this;
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

    public function getGeoJsonFeature(): Feature|string|SemanticObject|array|null
    {
        return $this->geoJsonFeature;
    }

    public function setGeoJsonFeature(Feature|string|SemanticObject|array|null $geoJsonFeature): static
    {
        $this->geoJsonFeature = $geoJsonFeature;
        return $this;
    }
}
