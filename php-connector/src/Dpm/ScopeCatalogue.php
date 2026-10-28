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
namespace DataFoodConsortium\Connector\Dpm;

/**
 * The DFC authorisation scopes the connector knows about.
 *
 * The notation set is derived from the bundled v2.0.0 scopes taxonomy, so
 * adding a scope upstream is picked up by regeneration rather than by editing
 * this file. The concept IRIs are deliberately *not* derived from that data:
 * the bundled JSON-LD context prefixes dfc-s: with the versioned directory, so
 * expanding it yields …/v2.0.0/scopes.rdf#ReadEnterprise, whereas the RDF that
 * actually dereferences — and the IRI the DPM stores and the reference client
 * compares — is the unversioned …/scopes.rdf#ReadEnterprise. Hence the fixed
 * template below.
 */
final class ScopeCatalogue
{
    /** Namespace the taxonomy's scope concept IRIs live in. Unversioned. */
    public const IRI_BASE = 'http://w3id.org/dfc/taxonomies/scopes.rdf#';

    /** Compact and expanded forms, since the bundled JSON-LD uses the former. */
    private const SKOS_CONCEPT = [
        'skos:Concept',
        'http://www.w3.org/2004/02/skos/core#Concept',
    ];

    private const SKOS_NOTATION = [
        'skos:notation',
        'http://www.w3.org/2004/02/skos/core#notation',
    ];

    /** @var Scope[] every scope, in taxonomy order. */
    private array $scopes;

    /** @var array<string, Scope> keyed on skos:notation. */
    private array $byNotation;

    /** @var array<string, Scope> keyed on concept IRI. */
    private array $byIri;

    /**
     * @param Scope[] $scopes Every scope the catalogue should offer.
     */
    public function __construct(array $scopes)
    {
        $this->scopes = array_values($scopes);
        $this->byNotation = [];
        $this->byIri = [];
        foreach ($scopes as $scope) {
            $this->byNotation[$scope->notation] = $scope;
            $this->byIri[$scope->iri] = $scope;
        }
    }

    /**
     * The bundled taxonomy's JSON-LD file, as shipped with the package.
     *
     * Offline: nothing is fetched.
     */
    public static function bundledPath(): string
    {
        return __DIR__ . '/../../vocabularies/scope.jsonld';
    }

    /**
     * The catalogue built from the taxonomy shipped with the package.
     *
     * @throws \RuntimeException When the bundled taxonomy is missing or empty.
     */
    public static function bundled(): self
    {
        $raw = file_get_contents(self::bundledPath());
        if ($raw === false) {
            throw new \RuntimeException('Cannot read bundled scope taxonomy at ' . self::bundledPath());
        }
        $graph = json_decode($raw, true)['@graph'] ?? null;
        if (!is_array($graph)) {
            throw new \RuntimeException('Bundled scope taxonomy has no @graph');
        }

        $scopes = [];
        foreach ($graph as $entry) {
            if (!is_array($entry) || !self::isConcept($entry)) {
                continue;
            }
            $scope = self::fromConcept($entry);
            if ($scope !== null) {
                $scopes[] = $scope;
            }
        }
        if ($scopes === []) {
            throw new \RuntimeException('Bundled scope taxonomy declares no skos:Concept');
        }
        return new self($scopes);
    }

    /** @return Scope[] every scope, in taxonomy order. */
    public function all(): array
    {
        return $this->scopes;
    }

    /**
     * Looks a scope up by its skos:notation.
     *
     * @return Scope|null Null when the notation is unknown.
     */
    public function byNotation(string $notation): ?Scope
    {
        return $this->byNotation[$notation] ?? null;
    }

    /**
     * Looks a scope up by concept IRI.
     *
     * @return Scope|null Null when the IRI is unknown.
     */
    public function byIri(string $iri): ?Scope
    {
        return $this->byIri[$iri] ?? null;
    }

    /** Whether the catalogue recognises this notation. */
    public function contains(string $notation): bool
    {
        return isset($this->byNotation[$notation]);
    }

    /**
     * The scope for this notation.
     *
     * @throws \InvalidArgumentException When the notation is not in the taxonomy.
     */
    public function fetch(string $notation): Scope
    {
        $scope = $this->byNotation($notation);
        if ($scope === null) {
            throw new \InvalidArgumentException(
                'Unknown DFC scope "' . $notation . '". Known scopes: '
                . implode(', ', array_keys($this->byNotation))
            );
        }
        return $scope;
    }

    /**
     * @param array<string, mixed> $entry
     */
    private static function isConcept(array $entry): bool
    {
        $types = $entry['@type'] ?? [];
        foreach ((array) $types as $type) {
            if (in_array($type, self::SKOS_CONCEPT, true)) {
                return true;
            }
        }
        return false;
    }

    /**
     * @param array<string, mixed> $entry
     */
    private static function fromConcept(array $entry): ?Scope
    {
        foreach (self::SKOS_NOTATION as $key) {
            $notation = $entry[$key] ?? null;
            if (is_string($notation) && $notation !== '') {
                return new Scope($notation, self::IRI_BASE . $notation);
            }
        }
        return null;
    }
}
