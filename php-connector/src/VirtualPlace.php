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

use DataFoodConsortium\Connector\Place;
use DataFoodConsortium\Connector\SemanticObject;

class VirtualPlace extends Place implements IVirtualPlace
{
    public const SEMANTIC_TYPE = 'dfc-b:VirtualPlace';

    private string|SemanticObject|array|null $url = null;
    private string|SemanticObject|array|null $websitePage = null;

    public function __construct(
        string $semanticId,
        array $params = []
    ) {
                parent::__construct($semanticId, $params ?? []);
        $this->semanticType = self::SEMANTIC_TYPE;
        $this->url = $params['url'] ?? null;
        $this->websitePage = $params['websitePage'] ?? null;
        $this->registerSemanticProperty('dfc-b:URL', fn() => $this->url);
        $this->registerSemanticProperty('dfc-b:websitePage', fn() => $this->websitePage);
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

    public function getWebsitePage(): string|SemanticObject|array|null
    {
        return $this->websitePage;
    }

    public function setWebsitePage(string|SemanticObject|array|null $websitePage): static
    {
        $this->websitePage = $websitePage;
        return $this;
    }
}
