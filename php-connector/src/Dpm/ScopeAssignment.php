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
 * The scopes assigned to one platform or organisation.
 *
 * This is the assignment *relation* — "this platform may do these six things" —
 * not an authorisation decision. Scope is a coarse API gate: an assignment is
 * necessary but never sufficient (see ADR-0009 and ADR-0014), and the grant
 * layer that decides individual operations is separate from this data.
 *
 * The assignment table is deployment state, differing per installation and per
 * consent decision, which is why it is a hand-written model rather than a class
 * generated from the LinkML schema.
 */
final class ScopeAssignment
{
    private const SUBJECT_ERROR =
        'ScopeAssignment::fromArray needs the platform @id: pass it explicitly '
        . 'when the document carries none';

    /**
     * @param string $subject @id of the platform or organisation holding the scopes.
     * @param Scope[] $scopes The assigned scopes, in the order given.
     */
    public function __construct(
        public readonly string $subject,
        public readonly array $scopes
    ) {
        if ($subject === '') {
            throw new \InvalidArgumentException('ScopeAssignment subject must be a non-empty @id');
        }
    }

    /**
     * Whether this assignment includes a scope.
     *
     * @param Scope|string $scope A scope, or its skos:notation.
     */
    public function has(Scope|string $scope): bool
    {
        $notation = is_string($scope) ? $scope : $scope->notation;
        foreach ($this->scopes as $assigned) {
            if ($assigned->notation === $notation) {
                return true;
            }
        }
        return false;
    }

    /**
     * The scopes this assignment carries that the catalogue does not recognise.
     *
     * Assignment import never drops what it does not understand — silently
     * discarding a scope would be an authorisation decision made invisibly. This
     * reports the same data so a caller can reject it, warn, or forward it to a
     * newer DPM.
     *
     * @return Scope[]
     */
    public function unknown(ScopeCatalogue $catalogue): array
    {
        return array_values(array_filter(
            $this->scopes,
            fn(Scope $scope): bool => !$catalogue->contains($scope->notation)
        ));
    }

    /**
     * This assignment as the JSON-LD the DPM reads and writes.
     *
     * @return array<string, mixed>
     */
    public function toArray(): array
    {
        return [
            '@id' => $this->subject,
            DfcTerms::HAS_ASSIGNED_SCOPES => [
                '@type' => DfcTerms::RDF_LIST,
                '@list' => array_map(fn(Scope $scope): array => $scope->toArray(), $this->scopes),
            ],
        ];
    }

    /**
     * Reads an assignment from a DPM document.
     *
     * Tolerant of the shapes that occur in practice: the whole document, the
     * dfc-t:hasAssignedScopes value on its own, the @list wrapper, and a bare
     * array (which is what the DPM serves for requestedScopes).
     *
     * Nothing is dropped on the way in. An element the catalogue does not
     * recognise is kept as-is and reported by unknown().
     *
     * @param mixed $node The document, list wrapper or array to read.
     * @param string|null $subject @id to use when $node does not carry one.
     * @throws \InvalidArgumentException When no subject is available, or an element is malformed.
     */
    public static function fromArray(
        mixed $node,
        ?string $subject = null,
        ?ScopeCatalogue $catalogue = null
    ): self {
        [$id, $list] = self::unwrapList($node);
        $resolved = $id ?? $subject;
        if ($resolved === null) {
            throw new \InvalidArgumentException(self::SUBJECT_ERROR);
        }

        $scopes = array_map(
            fn(mixed $element): Scope => self::fromElement($element, $catalogue),
            $list
        );
        return new self($resolved, $scopes);
    }

    public function __toString(): string
    {
        return 'ScopeAssignment(' . $this->subject . '[' . count($this->scopes) . ' scopes])';
    }

    /**
     * @return array{0: string|null, 1: array<int, mixed>}
     */
    private static function unwrapList(mixed $node): array
    {
        if (is_array($node) && array_is_list($node)) {
            return [null, $node];
        }
        if (!is_array($node)) {
            throw new \InvalidArgumentException('Not a DPM assignment: ' . json_encode($node));
        }

        $id = $node['@id'] ?? null;
        $id = (is_string($id) && $id !== '') ? $id : null;

        $relation = $node[DfcTerms::HAS_ASSIGNED_SCOPES] ?? null;
        if ($relation === null) {
            if (isset($node['@list']) && is_array($node['@list'])) {
                return [$id, $node['@list']];
            }
            throw new \InvalidArgumentException(
                'DPM assignment carries no ' . DfcTerms::HAS_ASSIGNED_SCOPES
                . ' and no @list: ' . json_encode($node)
            );
        }
        if (is_array($relation) && array_is_list($relation)) {
            return [$id, $relation];
        }
        if (!is_array($relation) || !isset($relation['@list']) || !is_array($relation['@list'])) {
            throw new \InvalidArgumentException(
                DfcTerms::HAS_ASSIGNED_SCOPES . ' carries no @list'
            );
        }
        return [$id, $relation['@list']];
    }

    private static function fromElement(mixed $element, ?ScopeCatalogue $catalogue): Scope
    {
        if (!is_array($element)) {
            throw new \InvalidArgumentException('DPM scope node is not an object: ' . json_encode($element));
        }

        $notation = $element[DfcTerms::SCOPE_TERM] ?? null;
        if (!is_string($notation) || $notation === '') {
            throw new \InvalidArgumentException(
                'DPM scope node carries no ' . DfcTerms::SCOPE_TERM
                . ' literal: ' . json_encode($element)
            );
        }

        $id = $element['@id'] ?? null;
        if (is_string($id) && $id !== '') {
            return new Scope($notation, $id);
        }
        $known = $catalogue?->byNotation($notation);
        return new Scope($notation, $known?->iri ?? $notation);
    }
}
