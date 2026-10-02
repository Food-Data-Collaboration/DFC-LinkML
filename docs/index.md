# DFC LinkML SDK

TypeScript, Ruby, and PHP connectors for the [Data Food Consortium
(DFC)](https://datafoodconsortium.org/) standard, generated from the DFC
LinkML schema and pinned to DFC v2.0.0.

All three connectors are generated from one schema, so they agree on data
plane, predicates, and round-trip behaviour. Where they differ it is
naming, and the differences are documented rather than smoothed over.

## Install

=== "TypeScript"

    ```bash
    npx jsr add @siol-data/linkml-connector
    ```

    Published to [jsr.io](https://jsr.io/@siol-data/linkml-connector). That
    writes an `@jsr:registry` line to your `.npmrc` and adds the dependency,
    so plain `npm install` works afterwards.

=== "Ruby"

    ```bash
    gem install dfc-linkml-connector
    ```

=== "PHP"

    ```bash
    composer require siol-data/dfc-connector
    ```

    packagist.org reads `composer.json` from the repository root of
    [DFC-LinkML](https://github.com/Food-Data-Collaboration/DFC-LinkML), so
    this installs from that repo directly.

## Hello, DFC

```typescript
import { Connector } from "@siol-data/linkml-connector";

const c = new Connector();

const org = c.createOrganization("https://example.com/org/1", {
  name: "Acme Farms",
});

console.log(await c.export(org));
```

```ruby
connector = DfcLinkmlConnector::Core::Connector.new
org = DfcLinkmlConnector::Models::Organization.new(
  "https://example.com/org/1", name: "Acme Farms"
)
puts connector.export(org)
```

```php
$connector = new \DataFoodConsortium\Connector\Connector();
$org = $connector->createOrganization("https://example.com/org/1", [
    'name' => 'Acme Farms',
]);
echo $connector->export($org);
```

```json
{
  "@context": "https://w3id.org/dfc/ontology/v2.0.0/context/context_2.0.0.json",
  "@id": "https://example.com/org/1",
  "@type": "dfc-b:Organization",
  "dfc-b:name": "Acme Farms"
}
```

TypeScript and Ruby emit `@context` first and PHP emits it last. The content
is identical; only the key order differs, and JSON key order carries no
meaning. Do not compare exported documents byte-for-byte — the
[round-trip tutorial](getting-started/jsonld-roundtrip.md) explains why.

## Where to go next

=== "I am new here"

    Start with [hello-dfc](getting-started/hello-dfc.md), then the
    [JSON-LD round trip](getting-started/jsonld-roundtrip.md). Together they
    are about five minutes and cover construct, export, and import.

=== "I am migrating from the original connectors"

    Read the [migration guide](migration-guide.md) first — it maps the
    original API to this one property by property. The
    [API gap tables](api-gaps-typescript.md) and
    [Ruby gaps](api-gaps-ruby.md) are generated and exact; the guide is the
    narrative around them.

=== "I need to do something specific"

    Task-oriented recipes in the [guides](guides/index.md):
    [build a catalog](guides/build-a-catalog.md),
    [read and validate JSON-LD](guides/load-and-validate.md),
    [handle identifiers](guides/handle-identifiers.md), and
    [work offline](guides/work-offline.md).

=== "I need to look something up"

    The [model reference](reference/model/index.md) is generated from the
    schema: 89 classes, 255 properties, and the five controlled vocabularies
    with every concept. The
    [API reference](reference/api/index.md) is parsed from the three
    connector sources, so it cannot describe a method that does not exist.

=== "I want to know why it works this way"

    The [concepts](concepts/index.md) section explains identifiers,
    relationships, context and versioning, vocabularies, and validation —
    including which of those the toolchain actually implements.

=== "I am working on the SDK itself"

    [Architecture](architecture.md) for how generation fits together,
    [generation](generation.md) for the pipeline and how to run it,
    [SDK contract](sdk-contract.md) for the cross-language surface the three
    connectors are held to, and [licensing](licensing.md) for why there are
    two licences.

## The mental model in four lines

- **Objects are yours.** You choose the `@id`; the connectors never
  generate or validate one.
- **Relationships are links, not copies.** A reference serialises as an
  `@id`, and a single-valued one is a scalar even if you set a one-element
  array.
- **The context is a URL and it is bundled.** v2.0.0 works entirely offline.
- **Nothing validates your data.** The connectors preserve and normalise;
  they do not reject. A round trip keeps only what the schema says the class
  can hold, so your own predicates do not survive it. See
  [property retention](concepts/validation.md#property-retention).

## Project links

- [Repository](https://github.com/Food-Data-Collaboration/DFC-LinkML)
- [DFC standard](https://datafoodconsortium.org/)
- [Ontology v2.0.0](https://w3id.org/dfc/ontology/v2.0.0/)
- [Issues](https://github.com/Food-Data-Collaboration/DFC-LinkML/issues)

## Licence

The generated connectors are MIT licensed. The LinkML codebase that generates
them is AGPLv3 — see the [licence notes](licensing.md).
