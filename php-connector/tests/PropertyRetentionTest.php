<?php

declare(strict_types=1);

namespace DataFoodConsortium\Connector\Tests;

use DataFoodConsortium\Connector\Address;
use DataFoodConsortium\Connector\Connector;
use DataFoodConsortium\Connector\Organization;
use DataFoodConsortium\Connector\Person;
use PHPUnit\Framework\TestCase;

/**
 * Executed version of docs/concepts/validation.md "Property retention".
 *
 * PHP takes the no-compaction path (predicates are written as original
 * CURIEs), so this confirms the retention rules do not depend on a JSON-LD
 * library being present.
 */
final class PropertyRetentionTest extends TestCase
{
    private Connector $connector;

    protected function setUp(): void
    {
        $this->connector = new Connector();
    }

    /** @return string[] exported keys, minus @context */
    private function reexportKeys(array $doc): array
    {
        $objects = $this->connector->import($doc);
        if ($objects === []) {
            return [];
        }
        $out = json_decode($this->connector->export($objects[0]), true);
        return array_values(array_diff(array_keys($out), ['@context']));
    }

    public function testKeepsAPropertyDeclaredOnTheClass(): void
    {
        $this->assertContains(
            'dfc-b:city',
            $this->reexportKeys([
                '@id' => 'https://x/1', '@type' => 'dfc-b:Address',
                'dfc-b:city' => 'Rennes',
            ])
        );
    }

    public function testKeepsADeprecatedPropertyThatIsInDomain(): void
    {
        // `country` is owl:deprecated in the ontology. Excluded from the
        // reference, but it must still round-trip.
        $this->assertContains(
            'dfc-b:country',
            $this->reexportKeys([
                '@id' => 'https://x/1', '@type' => 'dfc-b:Address',
                'dfc-b:country' => 'FR',
            ])
        );
    }

    public function testDropsAKnownPropertyUsedOnTheWrongClass(): void
    {
        $keys = $this->reexportKeys([
            '@id' => 'https://x/1', '@type' => 'dfc-b:Address',
            'dfc-b:VATrate' => 5.5,
        ]);
        $this->assertNotContains('dfc-b:VATrate', $keys);
        $this->assertContains('@id', $keys);
    }

    public function testDropsAForeignTerm(): void
    {
        $this->assertSame(
            ['@id', '@type', 'dfc-b:name'],
            $this->reexportKeys([
                '@id' => 'https://x/1', '@type' => 'dfc-b:Organization',
                'dfc-b:name' => 'Acme',
                'https://your.org/id' => 'S',
            ])
        );
    }

    public function testDropsAnInventedDfcBPredicate(): void
    {
        $this->assertSame(
            ['@id', '@type', 'dfc-b:name'],
            $this->reexportKeys([
                '@id' => 'https://x/1', '@type' => 'dfc-b:Organization',
                'dfc-b:name' => 'Acme',
                'dfc-b:totallyMadeUp' => 'value',
            ])
        );
    }

    public function testDropsASlotWhoseSchemaDomainNamesNoDfcClass(): void
    {
        // hasFacet is in the schema and the predicate map, but no generated
        // class registers it, so it is unreachable through the model.
        $this->assertNotContains(
            'dfc-b:hasFacet',
            $this->reexportKeys([
                '@id' => 'https://x/1', '@type' => 'dfc-b:Address',
                'dfc-b:hasFacet' => 'dfc-f:Organic',
            ])
        );
    }

    public function testMapsALegacyTypeInsteadOfDroppingTheNode(): void
    {
        $objects = $this->connector->import([
            '@id' => 'https://x/1', '@type' => 'dfc-b:Enterprise',
            'dfc-b:name' => 'Acme',
        ]);
        $this->assertCount(1, $objects);
        $this->assertInstanceOf(Organization::class, $objects[0]);
        $this->assertSame('dfc-b:Organization', $objects[0]->getSemanticType());
    }

    public function testDropsTheWholeNodeForAnUnknownType(): void
    {
        $objects = $this->connector->import([
            '@id' => 'https://x/1', '@type' => 'dfc-b:NotAThing',
            'dfc-b:name' => 'Acme',
        ]);
        $this->assertCount(0, $objects);
    }

    public function testKeepsADanglingReferenceAsAString(): void
    {
        $objects = $this->connector->import(['@graph' => [[
            '@id' => 'https://x/1', '@type' => 'dfc-b:Organization',
            'dfc-b:hasMainContact' => 'https://x/absent',
        ]]]);
        $this->assertCount(1, $objects);
        $this->assertSame('https://x/absent', $objects[0]->getMainContact());
    }

    public function testResolvesAReferenceWhenTheTargetIsInTheDocument(): void
    {
        $objects = $this->connector->import(['@graph' => [
            ['@id' => 'https://x/1', '@type' => 'dfc-b:Organization'],
            [
                '@id' => 'https://x/2', '@type' => 'dfc-b:Organization',
                'dfc-b:hasMainContact' => 'https://x/person',
            ],
            ['@id' => 'https://x/person', '@type' => 'dfc-b:Person'],
        ]]);
        $withContact = null;
        foreach ($objects as $o) {
            if ($o->getSemanticId() === 'https://x/2') {
                $withContact = $o;
            }
        }
        $this->assertInstanceOf(Person::class, $withContact->getMainContact());
    }

    public function testTheDeprecatedInReferenceClassStillExports(): void
    {
        $org = $this->connector->createEnterprise('https://x/1', ['name' => 'Acme']);
        $out = json_decode($this->connector->export($org), true);
        $this->assertSame('dfc-b:Enterprise', $out['@type']);
    }

    public function testTheDeprecatedInReferencePropertyIsStillSettable(): void
    {
        // PHP exposes the deprecated dfc-b:country as `countryName` and
        // dfc-b:hasCountry as `country` -- the inverse of TypeScript and
        // Ruby, which map `country` to dfc-b:country. See the note in
        // docs/concepts/validation.md; this asserts PHP's actual behaviour so
        // the divergence is recorded rather than incidental.
        $address = $this->connector->createAddress('https://x/1', [
            'countryName' => 'France',
        ]);
        $out = json_decode($this->connector->export($address), true);
        $this->assertSame('France', $out['dfc-b:country']);
        $this->assertInstanceOf(Address::class, $address);
    }

    public function testCountryAndHasCountryAreTransposedInPhp(): void
    {
        // Pins a real cross-connector divergence: TS and Ruby both write
        // `country` -> dfc-b:country, PHP writes it to dfc-b:hasCountry.
        $address = $this->connector->createAddress('https://x/1', [
            'country' => 'FR',
        ]);
        $out = json_decode($this->connector->export($address), true);
        $this->assertSame('FR', $out['dfc-b:hasCountry']);
        $this->assertArrayNotHasKey('dfc-b:country', $out);
    }
}
