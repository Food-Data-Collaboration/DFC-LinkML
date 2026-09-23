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

use DataFoodConsortium\Connector\Organization;
use DataFoodConsortium\Connector\SemanticObject;
use DataFoodConsortium\Connector\Transformation;

class AsPlannedLocalTransformation extends Transformation implements IAsPlannedLocalTransformation
{
    public const SEMANTIC_TYPE = 'dfc-b:AsPlannedLocalTransformation';

    private float|string|SemanticObject|array|null $cost = null;
    private string|SemanticObject|array|null $endDate = null;
    private string|SemanticObject|array|null $startDate = null;
    private string|SemanticObject|array|null $input = null;
    private string|SemanticObject|array|null $output = null;
    private Organization|string|SemanticObject|array|null $transformedBy = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->cost = $params['cost'] ?? null;
        $this->endDate = $params['endDate'] ?? null;
        $this->startDate = $params['startDate'] ?? null;
        $this->input = $params['input'] ?? null;
        $this->output = $params['output'] ?? null;
        $this->transformedBy = $params['transformedBy'] ?? null;
        $this->registerSemanticProperty('dfc-b:cost', fn() => $this->cost);
        $this->registerSemanticProperty('dfc-b:endDate', fn() => $this->endDate);
        $this->registerSemanticProperty('dfc-b:startDate', fn() => $this->startDate);
        $this->registerSemanticProperty('dfc-b:hasInput', fn() => $this->input);
        $this->registerSemanticProperty('dfc-b:hasOutput', fn() => $this->output);
        $this->registerSemanticProperty('dfc-b:transformedBy', fn() => $this->transformedBy);
    }
    public function getCost(): float|string|SemanticObject|array|null
    {
        return $this->cost;
    }

    public function setCost(float|string|SemanticObject|array|null $cost): static
    {
        $this->cost = $cost;
        return $this;
    }

    public function getEndDate(): string|SemanticObject|array|null
    {
        return $this->endDate;
    }

    public function setEndDate(string|SemanticObject|array|null $endDate): static
    {
        $this->endDate = $endDate;
        return $this;
    }

    public function getStartDate(): string|SemanticObject|array|null
    {
        return $this->startDate;
    }

    public function setStartDate(string|SemanticObject|array|null $startDate): static
    {
        $this->startDate = $startDate;
        return $this;
    }

    public function getInput(): string|SemanticObject|array|null
    {
        return $this->input;
    }

    public function setInput(string|SemanticObject|array|null $input): static
    {
        $this->input = $input;
        return $this;
    }

    public function getOutput(): string|SemanticObject|array|null
    {
        return $this->output;
    }

    public function setOutput(string|SemanticObject|array|null $output): static
    {
        $this->output = $output;
        return $this;
    }

    public function getTransformedBy(): Organization|string|SemanticObject|array|null
    {
        return $this->transformedBy;
    }

    public function setTransformedBy(Organization|string|SemanticObject|array|null $transformedBy): static
    {
        $this->transformedBy = $transformedBy;
        return $this;
    }
}
