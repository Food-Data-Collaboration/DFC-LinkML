<?php

declare(strict_types=1);

namespace DataFoodConsortium\Connector\Tests;

use DataFoodConsortium\Connector\Connector;
use DataFoodConsortium\Connector\Organization;
use PHPUnit\Framework\TestCase;

/**
 * import() must distinguish "this document held no DFC nodes" from "this input
 * was unreadable".
 *
 * Both used to produce an empty array, because json_decode() returns null on a
 * syntax error and the result was coerced with is_array() without ever checking
 * json_last_error(). For a caller ingesting JSON-LD from an untrusted party
 * that is the worst possible failure mode: a malformed POST became a 2xx no-op
 * and the client's data was silently lost.
 *
 * TypeScript and Ruby already raised on these inputs, so this also pins PHP to
 * the same contract as the other two connectors rather than inventing a third
 * behaviour.
 */
final class ImportRejectsUnreadableInputTest extends TestCase
{
    private Connector $connector;

    protected function setUp(): void
    {
        $this->connector = new Connector();
    }

    /**
     * @return iterable<string, array{string}>
     */
    public static function unreadableInput(): iterable
    {
        yield 'not JSON at all'      => ['{not json'];
        yield 'empty string'         => [''];
        yield 'truncated object'     => ['{"@id": "https://example.org/o/1"'];
        yield 'bare null'            => ['null'];
        yield 'bare number'          => ['123'];
        yield 'bare string'          => ['"Acme"'];
        yield 'bare boolean'         => ['true'];
    }

    /**
     * @dataProvider unreadableInput
     */
    public function testThrowsOnUnreadableInput(string $input): void
    {
        $this->expectException(\JsonException::class);
        $this->connector->import($input);
    }

    /**
     * A parsed document that simply contains no DFC nodes is a truthful empty
     * result and must not become an error, or callers cannot ingest legitimately
     * sparse documents.
     *
     * @return iterable<string, array{string}>
     */
    public static function emptyButReadableInput(): iterable
    {
        yield 'unrelated object'   => ['{"foo":"bar"}'];
        yield 'empty @graph'       => ['{"@graph":[]}'];
        yield 'empty list'         => ['[]'];
        yield 'node without @id'   => ['[{"@type":"dfc-b:Organization"}]'];
        yield 'unknown @type'      => ['{"@id":"https://example.org/x/1","@type":"dfc-b:NotAThing"}'];
    }

    /**
     * @dataProvider emptyButReadableInput
     */
    public function testReturnsEmptyArrayForReadableInputWithNoNodes(string $input): void
    {
        self::assertSame([], $this->connector->import($input));
    }

    /**
     * A root-level array is a normal JSON-LD document shape, not an error. Only
     * the missing @id explains an empty result — reported as a dropped-array bug
     * in issue #36, where the test case carried no @id.
     */
    public function testImportsRootLevelArrayWithIds(): void
    {
        $objects = $this->connector->import(sprintf(
            '[{"@context":"%s","@id":"https://example.org/o/1","@type":"dfc-b:Organization","dfc-b:name":"Acme"}]',
            $this->connector->getContextUrl()
        ));

        self::assertCount(1, $objects);
        self::assertInstanceOf(Organization::class, $objects[0]);
    }

    /**
     * The fix must not disturb the ordinary path.
     */
    public function testStillImportsAWellFormedDocument(): void
    {
        $objects = $this->connector->import(sprintf(
            '{"@context":"%s","@id":"https://example.org/o/1","@type":"dfc-b:Organization","dfc-b:name":"Acme"}',
            $this->connector->getContextUrl()
        ));

        self::assertCount(1, $objects);
        self::assertInstanceOf(Organization::class, $objects[0]);
    }
}