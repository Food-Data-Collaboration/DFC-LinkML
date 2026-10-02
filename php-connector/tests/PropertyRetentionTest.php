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
        // `country` is owl:deprecated but in domain for Address, so it
        // round-trips. The property name is the slot's own: `country` maps to
        // dfc-b:country, as in TypeScript and Ruby.
        $address = $this->connector->createAddress('https://x/1', [
            'country' => 'FR',
        ]);
        $out = json_decode($this->connector->export($address), true);
        $this->assertSame('FR', $out['dfc-b:country']);
        $this->assertInstanceOf(Address::class, $address);
    }

    /**
     * Data-plane parity: the five bare/has_ collision pairs.
     *
     * PHP strips the `has_` prefix, so `has_country` and `country` both
     * wanted the property name `country`. The generator used to rename the
     * *bare* slot to `countryName`, which transposed the two property names
     * relative to their slots -- the same property name emitted a different
     * predicate per language. Each slot now keeps its own name.
     *
     * Note this was an API-naming fault, not a wire fault: pre-fix PHP emitted
     * the correct predicates (dfc-b:quantity, dfc-b:phoneNumber) under the
     * transposed names. Only the property names were wrong.
     */
    public function testCollisionPairsKeepTheirOwnPropertyNames(): void
    {
        $cases = [
            ['Address', 'country', 'dfc-b:country', ['country' => 'FR']],
            ['Address', 'hasCountry', 'dfc-b:hasCountry', ['hasCountry' => 'FR']],
            ['DefinedProduct', 'quantity', 'dfc-b:quantity', ['quantity' => 1.0]],
            ['DefinedProduct', 'hasQuantity', 'dfc-b:hasQuantity', ['hasQuantity' => 3.0]],
            ['DefinedProduct', 'brand', 'dfc-b:brand', ['brand' => 'Acme']],
            ['DefinedProduct', 'hasBrand', 'dfc-b:hasBrand', ['hasBrand' => 'Acme']],
            ['PhoneNumber', 'phoneNumber', 'dfc-b:phoneNumber', ['phoneNumber' => '+33']],
            ['Agent', 'hasPhoneNumber', 'dfc-b:hasPhoneNumber', ['hasPhoneNumber' => '+33']],
        ];
        foreach ($cases as [$class, $prop, $predicate, $params]) {
            $factory = 'create' . $class;
            $obj = $this->connector->$factory('https://x/' . md5($prop), $params);
            $out = json_decode($this->connector->export($obj), true);
            $this->assertArrayHasKey(
                $predicate,
                $out,
                "{$class}::{$prop} should emit {$predicate}"
            );
            $this->assertEquals(
                $params[$prop],
                $out[$predicate],
                "{$class}::{$prop} value"
            );
        }
    }

    /**
     * `phone_number` and `has_phone_number` have disjoint domains
     * (PhoneNumber vs Agent/PhysicalPlace), so this pair never collided and
     * was never transposed. Adding it to the keep-the-`has_`-prefix table
     * only renamed Agent's property `phoneNumber` -> `hasPhoneNumber`, to
     * match TypeScript and Ruby. What matters here is that the rename did not
     * disturb the two bindings themselves: each class keeps its own predicate.
     */
    public function testPhoneNumberPairKeepsItsOwnPropertyNames(): void
    {
        // phone_number's domain is PhoneNumber, so Agent drops it by domain
        // checking -- but PhoneNumber itself must keep it.
        $phone = $this->connector->createPhoneNumber('https://x/1', [
            'phoneNumber' => '+33',
        ]);
        $out = json_decode($this->connector->export($phone), true);
        $this->assertSame('+33', $out['dfc-b:phoneNumber']);

        $agent = $this->connector->createAgent('https://x/2', [
            'phoneNumber' => '+33',
        ]);
        $agentOut = json_decode($this->connector->export($agent), true);
        $this->assertArrayNotHasKey('dfc-b:phoneNumber', $agentOut);
    }
}
