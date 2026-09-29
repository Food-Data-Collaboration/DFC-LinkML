<?php

declare(strict_types=1);

namespace DataFoodConsortium\Connector\Tests;

use DataFoodConsortium\Connector\Connector;
use DataFoodConsortium\Connector\Organization;
use DataFoodConsortium\Connector\SuppliedProduct;
use PHPUnit\Framework\TestCase;

// Executed version of docs/getting-started/hello-dfc.md (PHP).
final class TutorialHelloTest extends TestCase
{
    public function testInstallsCreatesOrganizationAndExportsJsonLd(): void
    {
        $connector = new Connector();
        $org = $connector->createOrganization('https://example.org/organization/farm-1', [
            'name' => 'Example Farm',
        ]);
        $doc = json_decode($connector->export($org), true);
        $this->assertSame('dfc-b:Organization', $doc['@type']);
        $this->assertSame('Example Farm', $doc['dfc-b:name']);
        $this->assertSame($connector->getContextUrl(), $doc['@context']);
    }

    public function testCreatesProductAndLinksItToOrganization(): void
    {
        $connector = new Connector();
        $org = $connector->createOrganization('https://example.org/organization/farm-1', [
            'name' => 'Example Farm',
        ]);
        $carrots = $connector->createSuppliedProduct('https://example.org/product/carrots-1', [
            'name' => 'Organic carrots',
        ]);
        $org->setSupplies([$carrots]);
        $doc = json_decode($connector->export($org, $carrots), true);
        $byId = [];
        foreach ($doc['@graph'] as $e) {
            $byId[$e['@id']] = $e;
        }
        $this->assertSame(
            'https://example.org/product/carrots-1',
            $byId['https://example.org/organization/farm-1']['dfc-b:supplies']
        );
    }
}
