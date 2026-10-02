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
use DataFoodConsortium\Connector\Transformation;

class AsPlannedTransformation extends Transformation implements IAsPlannedTransformation
{
    public const SEMANTIC_TYPE = 'dfc-b:AsPlannedTransformation';

    private array|string|SemanticObject|null $input = [];
    private array|string|SemanticObject|null $output = [];
    private string|SemanticObject|array|null $transformationType = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->input = $params['input'] ?? [];
        $this->output = $params['output'] ?? [];
        $this->transformationType = $params['transformationType'] ?? null;
        $this->registerSemanticProperty('dfc-b:hasInput', fn() => $this->input);
        $this->registerSemanticProperty('dfc-b:hasOutput', fn() => $this->output);
        $this->registerSemanticProperty('dfc-b:hasTransformationType', fn() => $this->transformationType);
    }
    public function getInput(): array|string|SemanticObject|null
    {
        return $this->input;
    }

    public function setInput(array|string|SemanticObject|null $input): static
    {
        $this->input = $input;
        return $this;
    }

    public function addInput(string|SemanticObject $input): static
    {
        if ($this->input === null) {
            $this->input = [];
        } elseif (!is_array($this->input)) {
            $this->input = [$this->input];
        }
        $this->input[] = $input;
        return $this;
    }

    public function removeInput(string|SemanticObject $input): void
    {
        if ($this->input === null) {
            return;
        }
        if (!is_array($this->input)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->input === $input) {
                $this->input = [];
            }
            return;
        }
        $key = array_search($input, $this->input, true);
        if ($key !== false) {
            unset($this->input[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->input = array_values($this->input);
        }
    }

    public function getOutput(): array|string|SemanticObject|null
    {
        return $this->output;
    }

    public function setOutput(array|string|SemanticObject|null $output): static
    {
        $this->output = $output;
        return $this;
    }

    public function addOutput(string|SemanticObject $output): static
    {
        if ($this->output === null) {
            $this->output = [];
        } elseif (!is_array($this->output)) {
            $this->output = [$this->output];
        }
        $this->output[] = $output;
        return $this;
    }

    public function removeOutput(string|SemanticObject $output): void
    {
        if ($this->output === null) {
            return;
        }
        if (!is_array($this->output)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->output === $output) {
                $this->output = [];
            }
            return;
        }
        $key = array_search($output, $this->output, true);
        if ($key !== false) {
            unset($this->output[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->output = array_values($this->output);
        }
    }

    public function getTransformationType(): string|SemanticObject|array|null
    {
        return $this->transformationType;
    }

    public function setTransformationType(string|SemanticObject|array|null $transformationType): static
    {
        $this->transformationType = $transformationType;
        return $this;
    }
}
