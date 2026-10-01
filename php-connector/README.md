# siol-data/linkml-connector

TypeScript, Ruby, and PHP connectors for the [Data Food Consortium (DFC)](https://datafoodconsortium.org/)
standard, generated from the DFC LinkML schema (v2.0.0).

This is the **PHP** package. It is MIT licensed, like the generated
connectors in this repository; the LinkML codebase that generates it is
AGPLv3 (see the repository root `LICENSE`).

## Install

```bash
composer require siol-data/linkml-connector
```

Requires PHP 8.1 or later. No PHP extension dependencies.

## Quick start

```php
<?php

require 'vendor/autoload.php';

use DataFoodConsortium\Connector\Connector;

$connector = new Connector();

$org = $connector->createOrganization('https://example.com/org/1', [
    'name' => 'Acme Farms',
]);

$carrots = $connector->createSuppliedProduct('https://example.com/product/1', [
    'name' => 'Organic carrots',
]);

$org->setSupplies([$carrots]);

echo $connector->export($org, $carrots);
```

`export()` returns a pretty-printed JSON-LD string. `@context` is emitted as
a URL, and predicates use their original short form (`dfc-b:name`, not
`dfc-b:Organization:name`).

## Importing

```php
$objects = $connector->import(file_get_contents('org.jsonld'));

foreach ($objects as $object) {
    echo get_class($object), ' ', $object->getSemanticId(), "\n";
}
```

`import()` always returns an array, even for a single-entry document. The
legacy `dfc-b:Enterprise` type is mapped to `Organization`, so documents
written against the original DFC connectors load without rewriting.

## Factory methods

Every DFC class has a `createX` factory on the connector, and the classes
themselves are exported for direct use:

```php
$price = $connector->createPrice('https://example.com/price/1', [
    'value' => 42.5,
    'vatRate' => 5.5,
]);
```

Note that `dfc-b:VATrate` is spelled `vatRate` in PHP, not `vat_rate`: the
property names follow the DFC predicate's local name in camelCase. See the
generated class for the exact spelling of any property.

## Working offline

The bundled v2.0.0 SKOS vocabularies (facets, measures, product types, scopes,
vocabulary terms) and the JSON-LD context ship with the package, so
construct, export, and import all work with no network access. Loading a
different taxonomy version is opt-in.

## Documentation

Full documentation, including the getting-started tutorials and the migration
guide from the original DFC connectors, is in the
[repository documentation](https://github.com/Food-Data-Collaboration/DFC-LinkML/tree/main/docs).

## Licence

MIT — see [LICENSE](LICENSE).

The `LICENSE` in the repository root covers the LinkML codebase that
generates this package and is licensed separately under AGPLv3.
