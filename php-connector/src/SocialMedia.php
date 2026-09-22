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

    private string|SemanticObject|array|null $websitePage = null;
    private string|SemanticObject|array|null $socialMediaOf = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->websitePage = $params['websitePage'] ?? null;
        $this->socialMediaOf = $params['socialMediaOf'] ?? null;
        $this->registerSemanticProperty('dfc-b:websitePage', fn() => $this->websitePage);
        $this->registerSemanticProperty('dfc-b:socialMediaOf', fn() => $this->socialMediaOf);
    }
    public function getWebsitePage(): string|SemanticObject|array|null
    {
        return $this->websitePage;
    }

    public function setWebsitePage(string|SemanticObject|array|null $websitePage): static
    {
        $this->websitePage = $websitePage;
        return $this;
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
