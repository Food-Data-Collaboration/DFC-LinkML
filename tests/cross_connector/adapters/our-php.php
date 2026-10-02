#!/usr/bin/env php
<?php
// Adapter for the DFC-LinkML PHP connector (local src).
// Subcommands:
//   capabilities            -> JSON classes/predicates map
//   export <scenario.json>  -> JSON-LD (reads scenario from file, writes to stdout)
//   import                  -> JSON-LD re-export (reads JSON-LD from stdin)

require __DIR__ . '/../../../php-connector/vendor/autoload.php';

use DataFoodConsortium\Connector\Connector;
use DataFoodConsortium\Connector\SemanticObject;

$subcommand = $argv[1] ?? null;

function readStdin(): string
{
    return file_get_contents('php://stdin');
}

// Canonical scenario param name => our-connector constructor param.
// PHP strips the `has_` prefix for object slots (`hasPart` -> `part`,
// `hasPrice` -> `price`) but keeps it for the five bare/has_ collision pairs
// (brand, claim, country, quantity, phone_number), so canonical `quantity`
// maps to `quantity` (the bare dfc-b:quantity slot) and `hasQuantity` to
// `hasQuantity`. tests/test_cross_connector_adapters.py pins every entry
// here against the generated classes, so a rename on the PHP side cannot
// silently turn into a dropped predicate.
const PARAM_MAP = [
    'dfc-b:Order' => ['orderNumber' => 'orderNumber', 'orderedBy' => 'orderedBy', 'hasPart' => 'part'],
    'dfc-b:OrderLine' => ['name' => 'name', 'quantity' => 'quantity', 'concerns' => 'concerns'],
    'dfc-b:SuppliedProduct' => ['name' => 'name', 'description' => 'description'],
    'dfc-b:Enterprise' => ['name' => 'name', 'description' => 'description', 'vatNumber' => 'vatNumber'],
    'dfc-b:Organization' => ['name' => 'name', 'description' => 'description', 'vatNumber' => 'vatNumber', 'hasAddress' => 'address'],
    'dfc-b:CatalogItem' => ['sku' => 'sku', 'references' => 'references', 'offeredThrough' => 'offeredThrough'],
    'dfc-b:Price' => ['vatRate' => 'vatRate'],
    'dfc-b:Offer' => ['name' => 'name', 'hasPrice' => 'price'],
    'dfc-b:Address' => ['street' => 'street', 'city' => 'city', 'postcode' => 'postcode',
        'region' => 'region', 'country' => 'country', 'hasCountry' => 'hasCountry'],
];

function capabilities(): void
{
    // Instantiating the connector registers all model types.
    new Connector();
    $classes = [];
    foreach (SemanticObject::getTypeRegistry() as $type => $class) {
        $probe = new $class('_:probe');
        $classes[$type] = array_keys($probe->getSemanticProperties());
        sort($classes[$type]);
    }
    echo json_encode(['name' => 'our-php', 'classes' => $classes], JSON_PRETTY_PRINT);
}

function resolveRefs(array $params): array
{
    // Declared by reference first: a closure cannot call itself by name, so the
    // recursive call needs the variable to already exist.
    $resolve = null;
    $resolve = static function ($value) use (&$resolve) {
        if (!is_array($value)) {
            return $value;
        }
        if (array_key_exists('$ref', $value)) {
            return $value['$ref'];
        }
        // A list of $ref entries has to be resolved element-wise; passing the
        // wrappers through makes the connector serialise them as blank nodes.
        return array_map($resolve, $value);
    };
    $out = [];
    foreach ($params as $k => $v) {
        $out[$k] = $resolve($v);
    }
    return $out;
}

function exportScenario(string $path): void
{
    $spec = json_decode(file_get_contents($path), true);
    $connector = new Connector();
    $instances = [];
    foreach ($spec['objects'] as $obj) {
        $class = 'DataFoodConsortium\\Connector\\' . preg_replace('/\Adfc-b:/', '', $obj['type']);
        if (!class_exists($class)) {
            fwrite(STDERR, "Unknown type {$obj['type']}\n");
            exit(1);
        }
        $map = PARAM_MAP[$obj['type']] ?? [];
        $translated = [];
        foreach (($obj['params'] ?? []) as $k => $v) {
            if (array_key_exists($k, $map)) {
                $translated[$map[$k]] = $v;
            }
        }
        $instances[] = new $class($obj['semanticId'], resolveRefs($translated));
    }
    echo $connector->export(...$instances);
}

function importData(): void
{
    $connector = new Connector();
    $objects = $connector->import(readStdin());
    echo $connector->export(...$objects);
}

switch ($subcommand) {
    case 'capabilities':
        capabilities();
        break;
    case 'export':
        exportScenario($argv[2]);
        break;
    case 'import':
        try {
            importData();
        } catch (\Throwable $e) {
            fwrite(STDERR, (string) $e);
            exit(1);
        }
        break;
    default:
        fwrite(STDERR, "usage: our-php.php {capabilities|export <scenario.json>|import}\n");
        exit(1);
}
