<?php

namespace DataFoodConsortium\Connector\Tests;

use DataFoodConsortium\Connector\Connector;
use DataFoodConsortium\Connector\Order;
use DataFoodConsortium\Connector\OrderLine;
use DataFoodConsortium\Connector\Organization;
use PHPUnit\Framework\TestCase;

/**
 * validate() reports what the ontology requires and the object lacks.
 *
 * The constraint data is the 42 class-scoped `rdfs:subClassOf` restrictions,
 * every one of which is a singleton. Constructors deliberately stay permissive:
 * enforcing these would reject ordinary documents, so they are opt-in here.
 */
final class ValidateTest extends TestCase
{
    private Connector $connector;

    protected function setUp(): void
    {
        $this->connector = new Connector();
    }

    /** @return list<string> */
    private function slots(array $issues): array
    {
        $slots = array_map(static fn (array $i): string => $i['slot'], $issues);
        sort($slots);

        return $slots;
    }

    public function testReportsEveryOntologyRequiredPropertyThatIsAbsent(): void
    {
        // Order is restricted to exactly one each of belongsTo, orderedBy,
        // selects and uses.
        $this->assertSame(
            ['belongs_to', 'ordered_by', 'selects', 'uses'],
            $this->slots($this->connector->validate(new Order('https://x/o1', ['orderNumber' => 'A1'])))
        );
    }

    public function testCarriesThePredicateSoTheReportCanBeActedOn(): void
    {
        $issue = $this->connector->validate(new Order('https://x/o1'))[0];
        $this->assertStringStartsWith('dfc-b:', $issue['predicate']);
        $this->assertSame('dfc-b:Order', $issue['semanticType']);
        $this->assertSame('https://x/o1', $issue['semanticId']);
    }

    public function testDropsAPropertyFromTheReportOnceItIsSet(): void
    {
        $full = new Order('https://x/o2', [
            'orderNumber' => 'A2',
            'belongsTo' => 'https://x/sale',
            'orderedBy' => 'https://x/org',
            'selects' => 'https://x/opt',
            'uses' => 'https://x/step',
        ]);
        $this->assertSame([], $this->connector->validate($full));
    }

    public function testInheritsAnAncestorRestriction(): void
    {
        $org = new Organization('https://x/org', ['name' => 'SIO']);
        $this->assertSame(['has_main_contact'], $this->slots($this->connector->validate($org)));
    }

    public function testSaysNothingAboutAClassTheOntologyDoesNotRestrict(): void
    {
        // An Organization carries hasAddress, but the ontology restricts that on
        // PhysicalPlace only -- so Agent is unconstrained and must not be flagged.
        $org = new Organization('https://x/org2', ['mainContact' => 'https://x/p']);
        $this->assertSame([], $this->connector->validate($org));
    }

    public function testAcceptsSeveralObjectsAtOnce(): void
    {
        $types = array_map(
            static fn (array $i): string => $i['semanticType'],
            $this->connector->validate(new Order('https://x/o3'), new Organization('https://x/org3'))
        );
        $this->assertContains('dfc-b:Order', $types);
        $this->assertContains('dfc-b:Organization', $types);
    }

    public function testDoesNotThrowOnAnObjectThatFails(): void
    {
        // That is the whole point: report, do not refuse.
        $this->assertSame(
            ['concerns', 'part_of'],
            $this->slots($this->connector->validate(new OrderLine('https://x/l1')))
        );
    }
}
