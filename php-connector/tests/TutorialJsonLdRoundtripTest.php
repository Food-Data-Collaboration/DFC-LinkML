<?php

declare(strict_types=1);

namespace DataFoodConsortium\Connector\Tests;

use DataFoodConsortium\Connector\Connector;
use DataFoodConsortium\Connector\Organization;
use DataFoodConsortium\Connector\Price;
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

    /**
     * Price is declared in the OWL as an intersectionOf QuantitativeValue, so
     * value/hasUnit are inherited rather than asserted on the class. A
     * converter that reads only the asserted class silently drops them.
     */
    public function testCarriesPropertiesInheritedFromASuperclass(): void
    {
        $connector = new Connector();
        $price = $connector->createPrice('https://example.org/price/1', [
            'value' => 42.5, // inherited from QuantitativeValue
            'vatRate' => 5.5, // declared on Price
            // Named `unit` here and in Ruby, `hasUnit` in TypeScript: each
            // derives the property name from the local part of the
            // `dfc-b:hasUnit` predicate. The wire format is identical.
            'unit' => 'dfc-m:EUR', // inherited from QuantitativeValue
        ]);

        $doc = json_decode($connector->export($price), true);
        $this->assertSame(42.5, $doc['dfc-b:value']);
        $this->assertSame('dfc-m:EUR', $doc['dfc-b:hasUnit']);
        $this->assertSame(5.5, $doc['dfc-b:VATrate']);

        $back = $connector->import($doc)[0];
        $this->assertInstanceOf(Price::class, $back);
        $this->assertSame(42.5, $back->getValue());
        $this->assertSame('dfc-m:EUR', $back->getUnit());
        $this->assertSame(5.5, $back->getVatRate());
    }
}
