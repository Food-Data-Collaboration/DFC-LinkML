<?php

declare(strict_types=1);

namespace DataFoodConsortium\Connector\Tests;

use DataFoodConsortium\Connector\Connector;
use DataFoodConsortium\Connector\Offer;
use DataFoodConsortium\Connector\Organization;
use PHPUnit\Framework\TestCase;

final class ConnectorTest extends TestCase
{
    private Connector $connector;

    protected function setUp(): void
    {
        $this->connector = new Connector();
    }

    public function testExportSingleUsesOfficialPredicatesAndContextUrl(): void
    {
        $org = $this->connector->createOrganization('http://example.com/org1', [
            'name' => 'Farm Org',
            'vatNumber' => 'FR12345678901',
        ]);
        $doc = json_decode($this->connector->export($org), true);
        $this->assertSame('dfc-b:Organization', $doc['@type']);
        $this->assertSame('FR12345678901', $doc['dfc-b:VATnumber']);
        $this->assertSame($this->connector->getContextUrl(), $doc['@context']);
        $this->assertArrayNotHasKey('@graph', $doc);
    }

    public function testExportMultipleWrapsInGraph(): void
    {
        $a = $this->connector->createOrganization('http://example.com/org1', ['name' => 'A']);
        $b = $this->connector->createOrganization('http://example.com/org2', ['name' => 'B']);
        $doc = json_decode($this->connector->export($a, $b), true);
        $this->assertCount(2, $doc['@graph']);
        $this->assertSame($this->connector->getContextUrl(), $doc['@context']);
    }

    public function testImportAlwaysReturnsArray(): void
    {
        $org = $this->connector->createOrganization('http://example.com/org1', ['name' => 'A']);
        $result = $this->connector->import($this->connector->export($org));
        $this->assertIsArray($result);
        $this->assertCount(1, $result);
        $this->assertInstanceOf(Organization::class, $result[0]);
    }

    public function testImportLegacyEnterpriseAsOrganization(): void
    {
        $result = $this->connector->import(json_encode(['@graph' => [[
            '@id' => 'http://example.com/legacy-org',
            '@type' => 'dfc-b:Enterprise',
            'dfc-b:VATnumber' => 'FR12345678901',
            'dfc-b:name' => 'Legacy Org',
        ]]]));
        $this->assertCount(1, $result);
        $this->assertInstanceOf(Organization::class, $result[0]);
        $this->assertSame('FR12345678901', $result[0]->getVatNumber());
    }

    public function testImportArrayType(): void
    {
        $result = $this->connector->import(json_encode(['@graph' => [[
            '@id' => '_:price1',
            '@type' => ['dfc-b:Price', 'dfc-b:Price'],
            'dfc-b:VATrate' => 5.5,
        ]]]));
        $this->assertCount(1, $result);
        $this->assertSame('_:price1', $result[0]->getSemanticId());
    }

    public function testImportResolvesReferences(): void
    {
        $org = $this->connector->createOrganization('http://example.com/org1', ['name' => 'A']);
        $order = $this->connector->createOrder('http://example.com/order1', ['orderNumber' => 'ORD-1']);
        $order->setOrderedBy('http://example.com/org1');
        $back = $this->connector->import($this->connector->export($org, $order));
        $this->assertCount(2, $back);
        $reexported = null;
        foreach ($back as $o) {
            if ($o->getSemanticId() === 'http://example.com/order1') {
                $reexported = $o;
            }
        }
        $this->assertNotNull($reexported);
        $client = $reexported->getOrderedBy();
        $this->assertInstanceOf(Organization::class, $client);
        $this->assertSame('http://example.com/org1', $client->getSemanticId());
    }

    public function testRoundTripsEmbeddedValueObjectsWithoutId(): void
    {
        $result = $this->connector->import(json_encode([
            '@context' => $this->connector->getContextUrl(),
            '@graph' => [[
                '@id' => 'http://example.com/offer1',
                '@type' => 'dfc-b:Offer',
                'dfc-b:hasPrice' => ['@type' => 'dfc-b:Price', 'dfc-b:VATrate' => 5.5],
            ]],
        ]));
        $this->assertCount(1, $result);
        $this->assertInstanceOf(Offer::class, $result[0]);
        $this->assertSame(['@type' => 'dfc-b:Price', 'dfc-b:VATrate' => 5.5], $result[0]->getPrice());
        $doc = json_decode($this->connector->export($result[0]), true);
        $this->assertSame(['@type' => 'dfc-b:Price', 'dfc-b:VATrate' => 5.5], $doc['dfc-b:hasPrice']);
    }

    public function testExposesNestedTaxonomyMapsThroughGetters(): void
    {
        $this->assertArrayHasKey('aocfr', $this->connector->getFacet());
        $this->assertArrayHasKey('kg', $this->connector->getMeasure());
        $this->assertArrayHasKey('readorders', $this->connector->getScope());
    }

    public function testRemovingMiddleElementKeepsJsonArrayShape(): void
    {
        $a = $this->connector->createOrganization('http://example.com/a', ['name' => 'A']);
        $b = $this->connector->createOrganization('http://example.com/b', ['name' => 'B']);
        $d = $this->connector->createOrganization('http://example.com/d', ['name' => 'D']);
        $o = $this->connector->createOrganization('http://example.com/o', []);
        $o->setAffiliates([$a, $b, $d]);
        $o->removeAffiliates($b);
        $doc = json_decode($this->connector->export($o), true);
        // Without reindexing, unset() leaves key gaps and json_encode emits
        // an object instead of an array (shape change on re-export).
        $this->assertSame(
            ['http://example.com/a', 'http://example.com/d'],
            array_values($doc['dfc-b:affiliates'])
        );
        $this->assertSame(
            ['http://example.com/a', 'http://example.com/d'],
            $doc['dfc-b:affiliates']
        );
    }

    public function testEnterpriseCarriesOrganizationAttributes(): void
    {
        $ent = $this->connector->createEnterprise('http://example.com/ent1', [
            'name' => 'Ent',
            'vatNumber' => 'FR12345678901',
        ]);
        $this->assertSame('FR12345678901', $ent->getVatNumber());
        $doc = json_decode($this->connector->export($ent), true);
        $this->assertSame('dfc-b:Enterprise', $doc['@type']);
        $imported = $this->connector->import($doc);
        $this->assertInstanceOf(Organization::class, $imported[0]);
    }
}
