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
use DataFoodConsortium\Connector\WhatSubject;

class SocialMedia extends WhatSubject implements ISocialMedia
{
    public const SEMANTIC_TYPE = 'dfc-b:SocialMedia';

    private array|string|SemanticObject|null $websitePage = [];
    private string|SemanticObject|array|null $socialMediaOf = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->websitePage = $params['websitePage'] ?? [];
        $this->socialMediaOf = $params['socialMediaOf'] ?? null;
        $this->registerSemanticProperty('dfc-b:websitePage', fn() => $this->websitePage);
        $this->registerSemanticProperty('dfc-b:socialMediaOf', fn() => $this->socialMediaOf);
    }
    public function getWebsitePage(): array|string|SemanticObject|null
    {
        return $this->websitePage;
    }

    public function setWebsitePage(array|string|SemanticObject|null $websitePage): static
    {
        $this->websitePage = $websitePage;
        return $this;
    }

    public function addWebsitePage(string|SemanticObject $websitePage): static
    {
        if ($this->websitePage === null) {
            $this->websitePage = [];
        } elseif (!is_array($this->websitePage)) {
            $this->websitePage = [$this->websitePage];
        }
        $this->websitePage[] = $websitePage;
        return $this;
    }

    public function removeWebsitePage(string|SemanticObject $websitePage): void
    {
        if ($this->websitePage === null) {
            return;
        }
        if (!is_array($this->websitePage)) {
            // Singular shape (setX stored a scalar as-is): clear on match.
            if ($this->websitePage === $websitePage) {
                $this->websitePage = [];
            }
            return;
        }
        $key = array_search($websitePage, $this->websitePage, true);
        if ($key !== false) {
            unset($this->websitePage[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->websitePage = array_values($this->websitePage);
        }
    }

    public function getSocialMediaOf(): string|SemanticObject|array|null
    {
        return $this->socialMediaOf;
    }

    public function setSocialMediaOf(string|SemanticObject|array|null $socialMediaOf): static
    {
        $this->socialMediaOf = $socialMediaOf;
        return $this;
    }
}
