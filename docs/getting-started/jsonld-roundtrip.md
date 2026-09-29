# JSON-LD round trip

Export a document, re-import it, get your data back. This is the core
SDK contract, identical across languages.

## Export

```typescript
const c = new Connector();
const org = c.createOrganization({
  semanticId: "https://example.org/organization/farm-1",
  name: "Example Farm",
  vatNumber: "FR12345678901",
  description: "A test farm",
});
const carrots = c.createSuppliedProduct({
  semanticId: "https://example.org/product/carrots-1",
  name: "Organic carrots",
  description: "Fresh carrots",
});
org.supplies = [carrots];

const exported = JSON.parse(await c.export(org, carrots));
```

```ruby
connector = DfcLinkmlConnector::Core::Connector.new
org = DfcLinkmlConnector::Models::Organization.new(
  "https://example.org/organization/farm-1",
  name: "Example Farm", vatNumber: "FR12345678901", description: "A test farm"
)
carrots = DfcLinkmlConnector::Models::SuppliedProduct.new(
  "https://example.org/product/carrots-1",
  name: "Organic carrots", description: "Fresh carrots"
)
org.supplies = [carrots]

exported = JSON.parse(connector.export(org, carrots))
```

```php
$connector = new Connector();
$org = $connector->createOrganization("https://example.org/organization/farm-1", [
    "name" => "Example Farm",
    "vatNumber" => "FR12345678901",
    "description" => "A test farm",
]);
$carrots = $connector->createSuppliedProduct("https://example.org/product/carrots-1", [
    "name" => "Organic carrots",
    "description" => "Fresh carrots",
]);
$org->setSupplies([$carrots]);

$exported = json_decode($connector->export($org, $carrots), true);
```

## Import

```typescript
const imported = c.import(exported);
// always an array, even for a single-node document
const backOrg = imported.find((o) => o.semanticId === "https://example.org/organization/farm-1");
console.log(backOrg.vatNumber); // "FR12345678901"
```

```ruby
imported = connector.import(exported)
# always an array, even for a single-object document
back_org = imported.find { |o| o.semanticId == "https://example.org/organization/farm-1" }
puts back_org.vat_number # "FR12345678901"
```

```php
$imported = $connector->import($exported);
// always an array, even for a single-object document
$backOrg = $imported[array_search(
    "https://example.org/organization/farm-1",
    array_map(fn($o) => $o->getSemanticId(), $imported)
)];
echo $backOrg->getVatNumber(); // "FR12345678901"
```

## Guarantees

- **All properties survive** the round trip (scalar, collection, and
  relationship alike).
- **Single-node exports** are bare objects (no `@graph`); import still
  returns a 1-element array.
- **References resolve**: a relationship pointing at a node in the same
  document comes back as the model instance, not a string.
- **Legacy types**: `dfc-b:Enterprise` documents import as
  `dfc-b:Organization`.

Every code block on this page is executed as a test in CI
(`typescript-connector/test/tutorial-jsonld-roundtrip.test.ts`,
`ruby-gem/spec/tutorial_jsonld_roundtrip_spec.rb`,
`php-connector/tests/TutorialJsonLdRoundtripTest.php`).
