<?php

declare(strict_types=1);

namespace DataFoodConsortium\Connector\Tests;

use DataFoodConsortium\Connector\Connector;
use DataFoodConsortium\Connector\Organization;
use DataFoodConsortium\Connector\SuppliedProduct;
use PHPUnit\Framework\TestCase;

// Executed version of docs/getting-started/jsonld-roundtrip.md (PHP).
final class TutorialJsonLdRoundtripTest extends TestCase
{
    public function testExportedDocumentsReImportWithAllPropertiesIntact(): void
    {
        $connector = new Connector();
        $org = $connector->createOrganization('https://example.org/organization/farm-1', [
            'name' => 'Example Farm',
            'vatNumber' => 'FR12345678901',
            'description' => 'A test farm',
        ]);
        $carrots = $connector->createSuppliedProduct('https://example.org/product/carrots-1', [
            'name' => 'Organic carrots',
            'description' => 'Fresh carrots',
        ]);
        $org->setSupplies([$carrots]);

        $exported = json_decode($connector->export($org, $carrots), true);
        $imported = $connector->import($exported);

        $this->assertCount(2, $imported);
        $byId = [];
        foreach ($imported as $o) {
            $byId[$o->getSemanticId()] = $o;
        }
        $backOrg = $byId['https://example.org/organization/farm-1'] ?? null;
        $backCarrots = $byId['https://example.org/product/carrots-1'] ?? null;
        $this->assertInstanceOf(Organization::class, $backOrg);
        $this->assertSame('FR12345678901', $backOrg->getVatNumber());
        $this->assertSame('Organic carrots', $backCarrots->getName());

        // A single-object export is a bare array, still an array on import.
        $single = json_decode($connector->export($org), true);
        $this->assertIsArray($single);
        $backSingle = $connector->import($single);
        $this->assertCount(1, $backSingle);
        $this->assertSame('dfc-b:Organization', $backSingle[0]->getSemanticType());
    }
}
