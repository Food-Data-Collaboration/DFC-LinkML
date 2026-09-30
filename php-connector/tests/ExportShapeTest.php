<?php

declare(strict_types=1);

namespace DataFoodConsortium\Connector\Tests;

use DataFoodConsortium\Connector\Connector;
use PHPUnit\Framework\TestCase;

/**
 * Export shape of collection-valued properties.
 *
 * A sequence of exactly one collapses to a scalar; two or more stay an
 * array. This mirrors JSON-LD compaction, which the TypeScript and Ruby
 * connectors get from the `jsonld` library at runtime, and the original DFC
 * connectors. PHP has no `ml/json-ld` runtime dep, so the collapse has to
 * happen in SemanticObject::toJsonLd() or the exported shape diverges.
 *
 * Covered for both reference collections (supplies) and literal collections
 * (icaltzd:byday) so the rule is not reference-specific.
 */
final class ExportShapeTest extends TestCase
{
    private const ICAL_BYDAY = 'http://www.w3.org/2002/12/cal/icaltzd#byday';

    private function entry(array $doc, string $idNeedle): array
    {
        $entries = isset($doc['@graph']) ? $doc['@graph'] : [$doc];
        foreach ($entries as $e) {
            if (str_contains((string) $e['@id'], $idNeedle)) {
                return $e;
            }
        }
        $this->fail("no entry matching $idNeedle");
    }

    public function testSingleReferenceCollapsesToScalar(): void
    {
        $c = new Connector();
        $p = $c->createSuppliedProduct('https://example.org/p/0', ['name' => 'P0']);
        $org = $c->createOrganization('https://example.org/o/1', ['name' => 'F']);
        $org->setSupplies([$p]);

        $entry = $this->entry(json_decode($c->export($org, $p), true), '/o/1');
        $this->assertSame('https://example.org/p/0', $entry['dfc-b:supplies']);
    }

    public function testTwoReferencesStayAnArray(): void
    {
        $c = new Connector();
        $a = $c->createSuppliedProduct('https://example.org/p/0', ['name' => 'P0']);
        $b = $c->createSuppliedProduct('https://example.org/p/1', ['name' => 'P1']);
        $org = $c->createOrganization('https://example.org/o/1', ['name' => 'F']);
        $org->setSupplies([$a, $b]);

        $entry = $this->entry(json_decode($c->export($org, $a, $b), true), '/o/1');
        $this->assertSame(
            ['https://example.org/p/0', 'https://example.org/p/1'],
            $entry['dfc-b:supplies']
        );
    }

    public function testSingleLiteralCollapsesToScalar(): void
    {
        $c = new Connector();
        $r = $c->createValueRECUR('https://example.org/r/1', ['byday' => ['MO']]);

        $entry = $this->entry(json_decode($c->export($r), true), '/r/1');
        $this->assertSame('MO', $entry[self::ICAL_BYDAY]);
    }

    public function testTwoLiteralsStayAnArray(): void
    {
        $c = new Connector();
        $r = $c->createValueRECUR('https://example.org/r/1', ['byday' => ['MO', 'TU']]);

        $entry = $this->entry(json_decode($c->export($r), true), '/r/1');
        $this->assertSame(['MO', 'TU'], $entry[self::ICAL_BYDAY]);
    }

    public function testScalarInputIsLeftAlone(): void
    {
        $c = new Connector();
        $r = $c->createValueRECUR('https://example.org/r/1', ['byday' => 'MO']);

        $entry = $this->entry(json_decode($c->export($r), true), '/r/1');
        $this->assertSame('MO', $entry[self::ICAL_BYDAY]);
    }

    public function testEmptySequenceIsOmitted(): void
    {
        $c = new Connector();
        $org = $c->createOrganization('https://example.org/o/1', ['name' => 'F']);

        $entry = $this->entry(json_decode($c->export($org), true), '/o/1');
        $this->assertArrayNotHasKey('dfc-b:supplies', $entry);
    }
}
