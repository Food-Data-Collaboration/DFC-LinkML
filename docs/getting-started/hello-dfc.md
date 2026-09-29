# Hello DFC

Your first DFC document in under five minutes. Pick your language — the
concepts are identical.

## Install

```bash
# TypeScript (published to jsr.io; the CLI writes the .npmrc entry for you)
npx jsr add @siol-data/linkml-connector

# Ruby
gem install dfc-linkml-connector

# PHP
composer require fooddatacollaboration/linkml-connector
```

## Create an organization

```typescript
import { Connector } from "@siol-data/linkml-connector";

const c = new Connector();
const org = c.createOrganization({
  semanticId: "https://example.org/organization/farm-1",
  name: "Example Farm",
});
```

```ruby
require "dfc_linkml_connector"

connector = DfcLinkmlConnector::Core::Connector.new
org = DfcLinkmlConnector::Models::Organization.new(
  "https://example.org/organization/farm-1", name: "Example Farm"
)
```

```php
use DataFoodConsortium\Connector\Connector;

$connector = new Connector();
$org = $connector->createOrganization("https://example.org/organization/farm-1", [
    "name" => "Example Farm",
]);
```

## Link a product

```typescript
const carrots = c.createSuppliedProduct({
  semanticId: "https://example.org/product/carrots-1",
  name: "Organic carrots",
});
org.supplies = [carrots];
```

```ruby
carrots = DfcLinkmlConnector::Models::SuppliedProduct.new(
  "https://example.org/product/carrots-1", name: "Organic carrots"
)
org.supplies = [carrots]
```

```php
$carrots = $connector->createSuppliedProduct("https://example.org/product/carrots-1", [
    "name" => "Organic carrots",
]);
$org->setSupplies([$carrots]);
```

## Export to JSON-LD

```typescript
const doc = JSON.parse(await c.export(org, carrots));
```

```ruby
doc = JSON.parse(connector.export(org, carrots))
```

```php
$doc = json_decode($connector->export($org, $carrots), true);
```

The result is a JSON-LD document with official DFC predicates
(`dfc-b:name`, `dfc-b:supplies`, …) and a versioned `@context` URL:

```json
{
  "@context": "https://w3id.org/dfc/ontology/v2.0.0/context/context_2.0.0.json",
  "@graph": [
    {
      "@id": "https://example.org/organization/farm-1",
      "@type": "dfc-b:Organization",
      "dfc-b:name": "Example Farm",
      "dfc-b:supplies": "https://example.org/product/carrots-1"
    },
    {
      "@id": "https://example.org/product/carrots-1",
      "@type": "dfc-b:SuppliedProduct",
      "dfc-b:name": "Organic carrots"
    }
  ]
}
```

Every code block on this page is executed as a test in CI
(`typescript-connector/test/tutorial-hello.test.ts`,
`ruby-gem/spec/tutorial_hello_spec.rb`,
`php-connector/tests/TutorialHelloTest.php`) — the docs cannot rot.

Next: [JSON-LD round trip](jsonld-roundtrip.md).
