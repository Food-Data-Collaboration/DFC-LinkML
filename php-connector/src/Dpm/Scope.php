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
 * One DFC authorisation scope, such as ReadEnterprise.
 *
 * A scope is identified by its skos:notation, and that literal is the only
 * canonical key. The taxonomy's term IRIs are unversioned
 * (…/taxonomies/scopes.rdf#ReadEnterprise) even when they are fetched through
 * the /v2.0.0/ URL, so keying on the IRI would make a taxonomy version bump
 * look like a revocation of every grant the platform has ever been given.
 */
final class Scope
{
    /**
     * @param string $notation skos:notation, e.g. "ReadEnterprise".
     * @param string $iri Concept IRI, e.g. "…/scopes.rdf#ReadEnterprise".
     */
    public function __construct(
        public readonly string $notation,
        public readonly string $iri
    ) {
        if ($notation === '') {
            throw new \InvalidArgumentException('Scope notation must be a non-empty string');
        }
    }

    /**
     * Whether two scopes denote the same scope.
     *
     * Compares the notation, not the IRI, so a scope read off the wire matches
     * its catalogue entry even when the payload carries a differently
     * namespaced IRI.
     */
    public function equals(self $other): bool
    {
        return $other->notation === $this->notation;
    }

    /**
     * This scope as one element of a DPM assignment list.
     *
     * @return array{"@id": string, "dfc-t:scope": string, "@type": string}
     */
    public function toArray(): array
    {
        return [
            '@id' => $this->iri,
            DfcTerms::SCOPE_TERM => $this->notation,
            '@type' => DfcTerms::SCOPE_TYPE,
        ];
    }

    /**
     * Reads one element of a DPM assignment list.
     *
     * A missing @id is tolerated: the notation is authoritative, so the IRI can
     * be derived from it by the catalogue.
     *
     * @param mixed $node A JSON-LD scope node, or the skos:notation literal.
     * @param string|null $iri IRI to use when the node does not carry one.
     * @throws \InvalidArgumentException When the node is not a scope node.
     */
    public static function fromArray(mixed $node, ?string $iri = null): self
    {
        if (is_string($node)) {
            return new self($node, $iri ?? $node);
        }
        if (!is_array($node)) {
            throw new \InvalidArgumentException(
                'Not a DPM scope node: ' . json_encode($node)
            );
        }

        $notation = $node[DfcTerms::SCOPE_TERM] ?? null;
        if (!is_string($notation) || $notation === '') {
            throw new \InvalidArgumentException(
                'DPM scope node carries no ' . DfcTerms::SCOPE_TERM
                . ' literal: ' . json_encode($node)
            );
        }

        $id = $node['@id'] ?? null;
        if (is_string($id) && $id !== '') {
            return new self($notation, $id);
        }
        return new self($notation, $iri ?? $notation);
    }

    public function __toString(): string
    {
        return 'Scope(' . $this->notation . ')';
    }
}
