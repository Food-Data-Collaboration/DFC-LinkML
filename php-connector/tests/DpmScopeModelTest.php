<?php

namespace DataFoodConsortium\Connector\Tests;

use DataFoodConsortium\Connector\Dpm\Scope;
use DataFoodConsortium\Connector\Dpm\ScopeAssignment;
use DataFoodConsortium\Connector\Dpm\ScopeCatalogue;
use PHPUnit\Framework\TestCase;

/**
 * The DPM scope model.
 *
 * Scope is a coarse API gate (ADR-0009/ADR-0014): an assignment is necessary
 * but never sufficient, and the grant layer that decides individual operations
 * is separate. These tests cover the assignment relation only — what a platform
 * is allowed to ask for — not whether any particular request is authorised.
 *
 * The wire shape is the one Food-Data-Collaboration/data-sharing-module reads
 * and writes. Its dfc-t: prefix resolves to a GitHub blob URL in the
 * Startinblox context, and hasAssignedScopes is undeclared in the published
 * Technical Ontology, so these strings are matched literally.
 */
final class DpmScopeModelTest extends TestCase
{
    private ScopeCatalogue $catalogue;
    private string $subjectId = 'https://data.example.com/platform/p1';
    private string $readEnterpriseIri =
        'http://w3id.org/dfc/taxonomies/scopes.rdf#ReadEnterprise';

    protected function setUp(): void
    {
        $this->catalogue = ScopeCatalogue::bundled();
    }

    /**
     * The reference client's payload shape, as it appears on the wire.
     *
     * The surrounding document also carries
     * "@context": "https://cdn.startinblox.com/owl/context-bis.jsonld". The
     * model deliberately does not own that: the context belongs to whatever
     * document the relation is attached to, and the connector's export sets it.
     */
    private function wirePayload(string $id, array $entries): array
    {
        return [
            '@id' => $id,
            'dfc-t:hasAssignedScopes' => ['@type' => 'rdf:List', '@list' => $entries],
        ];
    }

    private function readEnterprise(string $iri): array
    {
        return ['@id' => $iri, 'dfc-t:scope' => 'ReadEnterprise', '@type' => 'dfc-t:Scope'];
    }

    public function testDerivesItsNotionSetFromTheBundledTaxonomy(): void
    {
        $notations = array_map(
            fn(Scope $scope): string => $scope->notation,
            $this->catalogue->all()
        );
        sort($notations);

        $this->assertSame(
            ['ReadEnterprise', 'ReadOrders', 'ReadProducts',
             'WriteEnterprise', 'WriteOrders', 'WriteProducts'],
            $notations
        );
    }

    public function testGivesUnversionedConceptIris(): void
    {
        // The bundled JSON-LD prefixes dfc-s: with the versioned directory, so
        // expanding it would yield …/v2.0.0/scopes.rdf#…, which does not resolve.
        $this->assertSame(
            $this->readEnterpriseIri,
            $this->catalogue->fetch('ReadEnterprise')->iri
        );
    }

    public function testRefusesANotationTheTaxonomyDoesNotDeclare(): void
    {
        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/Unknown DFC scope/');

        $this->catalogue->fetch('ReadEverything');
    }

    public function testExportsTheReferenceClientsListShape(): void
    {
        $assignment = new ScopeAssignment(
            $this->subjectId,
            [$this->catalogue->fetch('ReadEnterprise')]
        );

        $this->assertSame(
            $this->wirePayload($this->subjectId, [$this->readEnterprise($this->readEnterpriseIri)]),
            $assignment->toArray()
        );
    }

    public function testSurvivesAnExportImportReexportRoundTrip(): void
    {
        $original = new ScopeAssignment($this->subjectId, [
            $this->catalogue->fetch('ReadEnterprise'),
            $this->catalogue->fetch('WriteOrders'),
        ]);

        $exported = $original->toArray();
        $imported = ScopeAssignment::fromArray($exported, null, $this->catalogue);

        $this->assertSame($this->subjectId, $imported->subject);
        $this->assertSame(
            ['ReadEnterprise', 'WriteOrders'],
            array_map(fn(Scope $scope): string => $scope->notation, $imported->scopes)
        );
        // Both halves of scope identity survive: the IRI the UI matches on and
        // the notation that is authoritative.
        $this->assertSame($this->readEnterpriseIri, $imported->scopes[0]->iri);
        $this->assertSame($exported, $imported->toArray());
    }

    public function testKeepsAScopeItDoesNotRecognise(): void
    {
        // Discarding it would be an authorisation decision made invisibly.
        $payload = $this->wirePayload($this->subjectId, [
            $this->readEnterprise($this->readEnterpriseIri),
            ['@id' => 'http://example.org/scopes#ReadEverything',
             'dfc-t:scope' => 'ReadEverything',
             '@type' => 'dfc-t:Scope'],
        ]);

        $assignment = ScopeAssignment::fromArray($payload, null, $this->catalogue);

        $this->assertCount(2, $assignment->scopes);
        $this->assertSame(
            ['ReadEverything'],
            array_map(fn(Scope $scope): string => $scope->notation, $assignment->unknown($this->catalogue))
        );
    }

    public function testAcceptsTheBareArrayTheDpmServesForRequestedScopes(): void
    {
        $assignment = ScopeAssignment::fromArray(
            [$this->readEnterprise($this->readEnterpriseIri)],
            $this->subjectId,
            $this->catalogue
        );

        $this->assertSame($this->subjectId, $assignment->subject);
        $this->assertTrue($assignment->has('ReadEnterprise'));
    }

    public function testNeedsASubjectFromSomewhere(): void
    {
        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/platform @id/');

        ScopeAssignment::fromArray([], null, $this->catalogue);
    }

    public function testAnswersByNotationNotByIri(): void
    {
        $assignment = new ScopeAssignment($this->subjectId, [
            new Scope('ReadEnterprise', 'https://elsewhere.example/scopes#ReadEnterprise'),
        ]);

        $this->assertTrue($assignment->has('ReadEnterprise'));
        $this->assertTrue($assignment->has($this->catalogue->fetch('ReadEnterprise')));
        $this->assertFalse($assignment->has('WriteOrders'));
    }
}
