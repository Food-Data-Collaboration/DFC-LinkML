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

class SemanticObject
{
    private static array $typeRegistry = [];

    public static function getTypeRegistry(): array
    {
        return self::$typeRegistry;
    }

    public static function registerType(string $semanticType, string $className): void
    {
        self::$typeRegistry[$semanticType] = $className;
    }

    private string $semanticId;
    protected string $semanticType = '';
    private array $semanticProperties = [];

    public function __construct(string $semanticId)
    {
        $this->semanticId = $semanticId;
    }

    public function getSemanticId(): string
    {
        return $this->semanticId;
    }

    public function getSemanticType(): string
    {
        return $this->semanticType;
    }

    public function setSemanticType(string $type): void
    {
        $this->semanticType = $type;
    }

    public function registerSemanticProperty(string $predicate, callable $getter): void
    {
        $this->semanticProperties[$predicate] = $getter;
    }

    public function getSemanticPropertyValue(string $predicate): mixed
    {
        if (isset($this->semanticProperties[$predicate])) {
            return ($this->semanticProperties[$predicate])();
        }
        return null;
    }

    public function getSemanticProperties(): array
    {
        $result = [];
        foreach ($this->semanticProperties as $predicate => $getter) {
            $value = $getter();
            if ($value !== null) {
                $result[$predicate] = $value;
            }
        }
        return $result;
    }

    public function toJsonLd(?array $context = null): array
    {
        $result = [
            "@id" => $this->semanticId,
            "@type" => $this->semanticType,
        ];

        if ($context !== null) {
            $result["@context"] = $context;
        }

        foreach ($this->semanticProperties as $predicate => $getter) {
            $value = $getter();
            if ($value === null) continue;

            if (is_array($value)) {
                if (empty($value)) continue;
                $result[$predicate] = array_map(function ($v) {
                    return $v instanceof self ? $v->getSemanticId() : $v;
                }, $value);
            } elseif ($value instanceof self) {
                $result[$predicate] = $value->getSemanticId();
            } else {
                $result[$predicate] = $value;
            }
        }

        return $result;
    }

    public function toJson(?array $context = null): string
    {
        return json_encode($this->toJsonLd($context), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }
}
