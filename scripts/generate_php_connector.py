#!/usr/bin/env python3
"""
PHP connector generator from LinkML schema.

Generates a complete PHP package with semantic objects.
Architecture mirrors the Ruby/TypeScript generators:
- src/SemanticObject.php — base class
- src/Connector.php — instantiable connector
- src/{Interface}.php — trait-like capability interfaces
- src/I{Entity}.php — entity interfaces
- src/{Entity}.php — concrete model classes

Usage:
    python3 generate_php_connector.py [--schema SCHEMA] [--output DIR]
"""

import json
import re
import sys
import yaml
from pathlib import Path


def parse_schema(schema_path: str) -> dict:
    with open(schema_path, 'r') as f:
        schema = yaml.safe_load(f)
    return {
        'classes': schema.get('classes', {}),
        'slots': schema.get('slots', {}),
        'enums': schema.get('enums', {}),
        'prefixes': schema.get('prefixes', {}),
        'id': schema.get('id', ''),
        'name': schema.get('name', ''),
        'version': schema.get('version', '0.1.0'),
        'ontology_version': schema.get('ontology_version', schema.get('version', '0.1.0')),
        'taxonomy_version': schema.get('taxonomy_version', schema.get('version', '0.1.0')),
        'description': schema.get('description', ''),
    }


def to_php_class_name(name: str) -> str:
    """Convert a LinkML class name to a valid PHP class name."""
    name = re.sub(r'^DFC_BusinessOntology_', '', name)
    name = re.sub(r'^DFC_', '', name)
    parts = name.split('_')
    result = []
    for part in parts:
        if part[0].isupper() and len(part) > 1:
            result.append(part)
        else:
            result.append(part.capitalize())
    return ''.join(result)


def to_snake_case(name: str) -> str:
    name = re.sub(r'(?<!^)(?=[A-Z])', '_', name)
    return name.lower()


# Bare slot names that collide with has_X versions after has_ stripping.
# These get disambiguated property names and distinct interfaces.
BARE_SLOT_OVERRIDES = {
    'quantity': 'quantityValue',
    'brand': 'brandName',
    'claim': 'claimText',
    'country': 'countryName',
}


def to_php_property_name(slot_name: str) -> str:
    """Convert slot name to PHP property name (camelCase with has- prefix stripped)."""
    name = slot_name
    if name.startswith('has_'):
        name = name[4:]
    elif name.startswith('has') and len(name) > 3 and name[3].isupper():
        name = name[3:]
    if not name:
        return slot_name
    if name.startswith('_'):
        name = name[1:]
    parts = re.split(r'[_]+', name)
    result = parts[0].lower() + ''.join(p.capitalize() for p in parts[1:])
    special = {
        'uRL': 'url',
        'vATnumber': 'vatNumber',
        'vATrate': 'vatRate',
        'vATstatus': 'vatStatus',
        'enterpriseID': 'enterpriseId',
        'operatorID': 'operatorId',
    }
    result = special.get(result, result)
    # Disambiguate bare collision slots (e.g., bare 'quantity' vs has_quantity)
    is_has_prefixed = slot_name.startswith('has_') or (slot_name.startswith('has') and len(slot_name) > 3 and slot_name[3].isupper())
    if not is_has_prefixed and slot_name in BARE_SLOT_OVERRIDES:
        result = BARE_SLOT_OVERRIDES[slot_name]
    return result


def to_file_name(name: str) -> str:
    """Convert a class name to a PHP file name."""
    return name


# Generated parent-class overrides (schema class name -> schema class name).
# Currently used for owl:equivalentClass handling: when Enterprise carries no
# slots of its own but Organization does (DFC v2.0), Enterprise is generated
# as a subclass of Organization so the deprecated class keeps the full API.
# Computed from the schema in main().
_PARENT_OVERRIDES: dict[str, str] = {}


def _own_slots(class_name: str, schema_data: dict) -> set[str]:
    """Slots owned by a class: explicit list plus domain matches (no inheritance)."""
    classes = schema_data['classes']
    slots = schema_data['slots']
    own = set(classes.get(class_name, {}).get('slots', []))
    for slot_name, slot_data in slots.items():
        if slot_matches_class(slot_data, class_name):
            own.add(slot_name)
    return own


def _init_parent_overrides(schema_data: dict) -> None:
    """Compute generated parent-class overrides from the schema."""
    global _PARENT_OVERRIDES
    _PARENT_OVERRIDES = {}
    classes = schema_data.get('classes', {})
    if ('Enterprise' in classes and 'Organization' in classes
            and not _own_slots('Enterprise', schema_data)
            and _own_slots('Organization', schema_data)):
        _PARENT_OVERRIDES['Enterprise'] = 'Organization'


def _enterprise_alias(schema_data: dict) -> dict[str, str]:
    """Legacy type aliases, derived from the schema.

    DFC v2.0 renamed Enterprise to Organization (the old class is a
    deprecated equivalentClass stub), so imports canonicalize it. Schemas
    where Enterprise owns slots its target lacks (v1.16) get no alias.
    """
    classes = schema_data.get('classes', {})
    if 'Enterprise' not in classes or 'Organization' not in classes:
        return {}
    if _own_slots('Enterprise', schema_data) - _own_slots('Organization', schema_data):
        return {}
    return {'dfc-b:Enterprise': 'dfc-b:Organization'}


def predicate_for_slot(slot_name: str, slot_data: dict) -> str:
    """Compute the official JSON-LD predicate CURIE/URI for a slot.

    Uses the first alias (the original OWL property name), never the
    LinkML snake_case form, so predicates match the official connectors.
    """
    aliases = slot_data.get('aliases') or [slot_name]
    alias = aliases[0]
    namespace = slot_data.get('namespace', '')
    if 'DFC_BusinessOntology' in namespace:
        return f'dfc-b:{alias}'
    if 'DFC_TechnicalOntology' in namespace:
        return f'dfc-t:{alias}'
    if 'skos/core' in namespace:
        return f'skos:{alias}'
    if namespace:
        return f'{namespace}{alias}'
    return f'dfc-b:{alias}'


def get_class_hierarchy(class_name: str, classes: dict) -> list:
    chain = []
    current = class_name
    first = True
    while current:
        chain.append(current)
        if first and current in _PARENT_OVERRIDES:
            current = _PARENT_OVERRIDES[current]
        else:
            current = classes.get(current, {}).get('is_a', '')
        first = False
    chain.reverse()
    return chain


def slot_matches_class(slot_data: dict, class_name: str) -> bool:
    domain = slot_data.get('domain', '')
    if isinstance(domain, str):
        return domain == class_name
    elif isinstance(domain, list):
        return class_name in domain
    return False


def get_all_slots_for_class(class_name: str, schema_data: dict):
    classes = schema_data['classes']
    slots = schema_data['slots']
    hierarchy = get_class_hierarchy(class_name, classes)
    seen = set()
    existing_class_names = set(classes.keys())

    for cls in hierarchy:
        cls_slots = classes.get(cls, {}).get('slots', [])
        for slot_name, slot_data in slots.items():
            in_class_list = slot_name in cls_slots
            if in_class_list and slot_name not in seen:
                seen.add(slot_name)
                yield slot_name, slot_data, cls
            elif slot_matches_class(slot_data, cls) and slot_name not in seen:
                seen.add(slot_name)
                yield slot_name, slot_data, cls

        is_root = not classes.get(cls, {}).get('is_a')
        if is_root:
            for slot_name, slot_data in slots.items():
                if slot_name in seen:
                    continue
                domain = slot_data.get('domain', '')
                if isinstance(domain, str):
                    orphaned = bool(domain) and domain not in existing_class_names
                elif isinstance(domain, list):
                    orphaned = len(domain) > 0 and all(d not in existing_class_names for d in domain)
                else:
                    orphaned = False
                if orphaned:
                    seen.add(slot_name)
                    yield slot_name, slot_data, cls


def get_data_properties(class_name: str, schema_data: dict) -> list:
    classes = schema_data['classes']
    props = []
    for slot_name, slot_data, owner in get_all_slots_for_class(class_name, schema_data):
        range_type = get_range_value(slot_data)
        if range_type and range_type not in classes:
            props.append((slot_name, slot_data, owner))
    return props


def get_object_properties(class_name: str, schema_data: dict) -> list:
    classes = schema_data['classes']
    props = []
    for slot_name, slot_data, owner in get_all_slots_for_class(class_name, schema_data):
        range_type = get_range_value(slot_data)
        if range_type in classes:
            props.append((slot_name, slot_data, owner))
    return props


def get_range_value(slot_data: dict) -> str:
    r = slot_data.get('range', 'string')
    if isinstance(r, list):
        return r[0] if r else 'string'
    return r or 'string'


def php_type_for_slot(slot_data: dict, schema_data: dict) -> str:
    """Render the value union for a slot.

    Every union carries `string` (JSON-LD values often arrive as strings
    regardless of range, e.g. quantity `"5"`) and `SemanticObject` (import
    may resolve a reference to a model instance even where the schema range
    is scalar, e.g. hasPrice holding a Price). This mirrors the unchecked
    TS/Ruby models: values are stored as-is so re-export round-trips.
    """
    range_type = get_range_value(slot_data)
    classes = schema_data['classes']
    if range_type in classes:
        # Relationship slot: at runtime the value may be a model instance
        # or a plain URI string (unresolved reference).
        base = to_php_class_name(range_type)
    elif range_type in ('float', 'decimal', 'double'):
        base = 'float'
    elif range_type in ('integer', 'int', 'NonNegativeInteger', 'PositiveInteger'):
        base = 'int'
    elif range_type in ('boolean', 'bool'):
        base = 'bool'
    else:
        base = 'string'
    parts = [base]
    if 'string' not in parts:
        parts.append('string')
    parts.append('SemanticObject')
    return '|'.join(parts)


def php_collection_type(range_type: str) -> str:
    """Render the full type for a collection property/accessor.

    Shape-preserving union shared by models and trait interfaces so their
    signatures match exactly.
    """
    return f'array|{range_type}|null'


def php_prop_type(slot_data: dict, schema_data: dict, is_collection: bool) -> str:
    """Render a property type.

    Collections use a shape-preserving union: like the TS/Ruby connectors
    (unchecked at runtime), a single reference stays a scalar through
    import/export instead of being wrapped in a 1-element array, so the
    matrix sees identical shapes across connectors.
    """
    elem = php_type_for_slot(slot_data, schema_data)
    if is_collection:
        return php_collection_type(elem)
    return elem


def php_nullable(ptype: str) -> str:
    """Render a nullable singular type.

    Unions need `T|null` (`?A|B` is a parse error). `array` is included
    because JSON-LD values may arrive as lists or embedded hashes even for
    singular slots (mirrors the TS/Ruby connectors, which are unchecked at
    runtime); import stores them as-is so re-export round-trips.
    """
    if ptype == 'mixed':
        return 'mixed'
    if ptype == 'array':
        return 'array'
    return f'{ptype}|array|null'


def is_collection_property(slot_name: str, slot_data: dict) -> bool:
    if slot_data.get('multivalued', False):
        return True
    name = slot_name.lower()
    collection_indicators = [
        'characteristics', 'claims', 'certifications', 'catalogitems',
        'suppliedproducts', 'technicalproducts', 'customercategories',
        'catalogs', 'variants', 'images', 'localizations', 'phonenumbers',
        'socialmedias', 'websites', 'emails', 'offers', 'orderlines',
        'steps', 'inputs', 'outputs',
    ]
    for indicator in collection_indicators:
        if indicator in name:
            return True
    if name.endswith('s') and not name.endswith('ss') and not name.endswith('us'):
        return True
    if name.endswith('ies'):
        return True
    return False


def interface_name_for_slot(slot_name: str) -> str:
    """Derive a trait interface name from a slot name."""
    name = slot_name
    if name.startswith('has_'):
        name = name[4:]
    elif name.startswith('has') and len(name) > 3 and name[3].isupper():
        name = name[3:]
    if name.startswith('_'):
        name = name[1:]

    parts = re.split(r'[_]+', name)
    pascal = ''.join(p.capitalize() for p in parts)

    special = {
        'Name': 'Nameable',
        'Description': 'Describable',
        'Email': 'Emailable',
        'VATnumber': 'VatNumberable',
        'Address': 'Localizable',
        'PhoneNumber': 'Phoneable',
        'SocialMedia': 'SocialMediable',
        'Quantity': 'Quantifiable',
        'Price': 'Pricable',
        'Supplies': 'Suppliable',
        'Maintains': 'Maintainable',
        'Manages': 'Manageable',
        'Proposes': 'Proposable',
        'Offers': 'Offerable',
        'Type': 'Classable',
        'Certification': 'Certifiable',
        'Claim': 'Claimable',
        'Website': 'WebSitable',
        'Part': 'Partable',
        'Step': 'Steppable',
        'Image': 'Imageable',
        'Logo': 'Logoble',
        'Unit': 'Measurable',
        'Value': 'Valueable',
        'GeoJsonFeature': 'GeoJsonable',
        'FirstName': 'Nameable',
        'FamilyName': 'Nameable',
        'Street': 'Addressable',
        'City': 'Addressable',
        'Postcode': 'Addressable',
        'Country': 'Addressable',
        'Latitude': 'Geolocalizable',
        'Longitude': 'Geolocalizable',
    }

    # Disambiguate bare collision slots (e.g., bare 'brand' vs has_brand)
    # Must check BEFORE special dict lookup to override intended mappings
    is_has_prefixed = slot_name.startswith('has_') or (slot_name.startswith('has') and len(slot_name) > 3 and slot_name[3].isupper())
    if not is_has_prefixed and slot_name in BARE_SLOT_OVERRIDES:
        override = BARE_SLOT_OVERRIDES[slot_name]
        opascal = override[0].upper() + override[1:]
        if opascal in special:
            return special[opascal]
        if opascal.endswith('s') and not opascal.endswith('ss') and not opascal.endswith('us'):
            return opascal[:-1] + 'able'
        return opascal + 'able'

    if pascal in special:
        return special[pascal]

    if pascal.endswith('s') and not pascal.endswith('ss') and not pascal.endswith('us'):
        singular = pascal[:-1]
        return singular + 'able'

    return pascal + 'able'


def collect_slot_interfaces(schema_data: dict) -> dict:
    """Build a mapping of interface name -> list of (slot_name, slot_data).

    Groups slots that share the same interface name (e.g. firstName/familyName -> Nameable).
    """
    interfaces = {}
    slots = schema_data['slots']
    for slot_name, slot_data in slots.items():
        iface = interface_name_for_slot(slot_name)
        if iface not in interfaces:
            interfaces[iface] = []
        interfaces[iface].append((slot_name, slot_data))
    return interfaces


def build_entity_interface_map(schema_data: dict) -> dict:
    """For each class, determine which interfaces it implements.

    A class implements a trait interface only when it covers ALL of the
    trait's member slots (own or inherited) — otherwise the model could not
    implement every method the trait declares.

    Returns dict of class_name -> set of interface names.
    """
    interfaces = collect_slot_interfaces(schema_data)
    members = {iface: {s for s, _ in lst} for iface, lst in interfaces.items()}
    result = {}
    for class_name in schema_data['classes']:
        covered = {s for s, _, _ in get_all_slots_for_class(class_name, schema_data)}
        ifaces = {iface for iface, slots in members.items()
                  if slots and slots <= covered}
        result[class_name] = sorted(ifaces)
    return result


# ---------------------------------------------------------------------------
# Core file generators
# ---------------------------------------------------------------------------

LICENSE_BLOCK = '''<?php

/*
 * MIT License
 *
 * Copyright (c) 2024 Data Food Consortium
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/

'''


def generate_composer_json(schema_data: dict) -> str:
    data = {
        "name": "fooddatacollaboration/linkml-connector",
        "type": "library",
        "description": "DFC LinkML Semantic Object Connector for PHP",
        "keywords": [
            "data food consortium", "short supply chain", "farming",
            "semantic web", "rdf", "object model"
        ],
        "license": "AGPL-3.0",
        "require": {
            "php": ">=8.1"
        },
        "require-dev": {
            "phpunit/phpunit": "^10.0"
        },
        "autoload": {
            "psr-4": {
                "DataFoodConsortium\\Connector\\": "src"
            }
        }
    }
    return json.dumps(data, indent=4) + "\n"


def generate_semantic_object() -> str:
    return LICENSE_BLOCK + '''namespace DataFoodConsortium\\Connector;

class SemanticObject
{
    private static array $typeRegistry = [];

    public static function getTypeRegistry(): array
    {
        return self::$typeRegistry;
    }

    public static function registerType(string $semanticType, string $className): void
    {
        self::$typeRegistry[$semanticType] = $className;
    }

    private string $semanticId;
    protected string $semanticType = '';
    private array $semanticProperties = [];

    public function __construct(string $semanticId)
    {
        $this->semanticId = $semanticId;
    }

    public function getSemanticId(): string
    {
        return $this->semanticId;
    }

    public function getSemanticType(): string
    {
        return $this->semanticType;
    }

    public function setSemanticType(string $type): void
    {
        $this->semanticType = $type;
    }

    public function registerSemanticProperty(string $predicate, callable $getter): void
    {
        $this->semanticProperties[$predicate] = $getter;
    }

    public function getSemanticPropertyValue(string $predicate): mixed
    {
        if (isset($this->semanticProperties[$predicate])) {
            return ($this->semanticProperties[$predicate])();
        }
        return null;
    }

    public function getSemanticProperties(): array
    {
        $result = [];
        foreach ($this->semanticProperties as $predicate => $getter) {
            $value = $getter();
            if ($value !== null) {
                $result[$predicate] = $value;
            }
        }
        return $result;
    }

    public function toJsonLd(?array $context = null): array
    {
        $result = [
            "@id" => $this->semanticId,
            "@type" => $this->semanticType,
        ];

        if ($context !== null) {
            $result["@context"] = $context;
        }

        foreach ($this->semanticProperties as $predicate => $getter) {
            $value = $getter();
            if ($value === null) continue;

            if (is_array($value)) {
                if (empty($value)) continue;
                // Reindex int-keyed sequences only: a gappy key sequence
                // (e.g. after removal) would json_encode as an object
                // instead of an array. Assoc hashes (embedded nodes) and
                // mixed keys pass through untouched.
                $mapped = array_map(function ($v) {
                    return $v instanceof self ? $v->getSemanticId() : $v;
                }, $value);
                $allIntKeys = true;
                foreach ($mapped as $k => $_v) {
                    if (!is_int($k)) { $allIntKeys = false; break; }
                }
                $result[$predicate] = $allIntKeys
                    ? array_values($mapped) : $mapped;
            } elseif ($value instanceof self) {
                $result[$predicate] = $value->getSemanticId();
            } else {
                $result[$predicate] = $value;
            }
        }

        return $result;
    }

    public function toJson(?array $context = null): string
    {
        return json_encode($this->toJsonLd($context), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }
}
'''


def generate_connector(schema_data: dict) -> str:
    ontology_version = schema_data.get('ontology_version', '2.0.0')
    taxonomy_version = schema_data.get('taxonomy_version', '2.0.0')
    context_url = f'https://w3id.org/dfc/ontology/v{ontology_version}/context/context_{ontology_version}.json'

    class_names = sorted(schema_data.get('classes', {}).keys())

    factory_methods = ''
    for cn in class_names:
        pcn = to_php_class_name(cn)
        if pcn == 'SemanticObject':
            continue
        factory_methods += f'''
    public function create{pcn}(string $semanticId, array $params = []): {pcn}
    {{
        return new {pcn}($semanticId, $params);
}}
'''

    register_types = ''
    for cn in class_names:
        pcn = to_php_class_name(cn)
        if pcn == 'SemanticObject':
            continue
        register_types += f"        SemanticObject::registerType('dfc-b:{cn}', {pcn}::class);\n"

    predicate_map_lines = []
    for slot_name, slot_data in schema_data.get('slots', {}).items():
        predicate_map_lines.append(f"        '{predicate_for_slot(slot_name, slot_data)}' => '{to_php_property_name(slot_name)}',")
    predicate_map_str = '\n'.join(predicate_map_lines)

    alias_lines = '\n'.join(
        f"        '{pred}' => '{target}',"
        for pred, target in sorted(_enterprise_alias(schema_data).items())
    )
    bare_lines = '\n'.join(
        f"        '{k}' => '{v}',"
        for k, v in sorted(BARE_SLOT_OVERRIDES.items())
    )

    code = LICENSE_BLOCK + f'''namespace DataFoodConsortium\\Connector;

class Connector
{{
    public const ONTOLOGY_BASE_URL = 'https://w3id.org/dfc/ontology';
    public const TAXONOMY_BASE_URL = 'https://w3id.org/dfc/taxonomies';
    public const DEFAULT_CONTEXT_URL = '{context_url}';

    // Maps official JSON-LD predicates (short-form, from slot aliases) to
    // PHP property names. Consulted before the local-name fallback on import.
    public const PREDICATE_MAP = [
{predicate_map_str}
    ];

    // Legacy type aliases, derived from the schema (DFC v2.0 renamed
    // Enterprise to Organization).
    public const TYPE_ALIASES = [
{alias_lines}
    ];

    // Bare slot renames (mirrors BARE_SLOT_OVERRIDES) for the
    // predicateToPropName fallback.
    public const BARE_OVERRIDES = [
{bare_lines}
    ];

    private string $ontologyVersion;
    private string $taxonomyVersion;
    private ?array $contextCache = null;
    private array $facets = [];
    private array $measures = [];
    private array $productTypes = [];
    private array $otherVocabularies = [];

    // Bundled v2.0.0 taxonomies are loaded unconditionally by design — the
    // connector ships only that version offline. Callers requesting a
    // different taxonomyVersion must override via load* methods.
    public function __construct(string $ontologyVersion = '{ontology_version}', string $taxonomyVersion = '{taxonomy_version}')
    {{
        $this->ontologyVersion = $ontologyVersion;
        $this->taxonomyVersion = $taxonomyVersion;
        $this->registerTypes();
        $this->loadBundledTaxonomies();
    }}

    public function registerTypes(): void
    {{
{register_types}    }}

    public function getContextUrl(): string
    {{
        return self::ONTOLOGY_BASE_URL . '/v' . $this->ontologyVersion . '/context/context_' . $this->ontologyVersion . '.json';
    }}

    public function loadBundledTaxonomies(): static
    {{
        foreach (['Facet' => 'facet', 'Measure' => 'measure', 'ProductType' => 'product_type', 'Scope' => 'scope', 'VocabularyTerm' => 'vocabulary_term'] as $name => $file) {{
            $path = __DIR__ . '/../vocabularies/' . $file . '.jsonld';
            if (!is_file($path)) continue;
            $data = json_decode(@file_get_contents($path), true);
            if (!is_array($data)) continue;
            if ($name === 'Facet') $this->loadFacets($data);
            elseif ($name === 'Measure') $this->loadMeasures($data);
            elseif ($name === 'ProductType') $this->loadProductTypes($data);
            else $this->loadVocabulary($name, $data);
        }}
        return $this;
    }}

    public function loadFacets(array $jsonData): static
    {{
        $concepts = $this->extractConcepts($jsonData);
        $this->facets = $this->buildNestedHash($concepts);
        $this->otherVocabularies['Facet'] = $this->facets;
        return $this;
    }}

    public function loadMeasures(array $jsonData): static
    {{
        $concepts = $this->extractConcepts($jsonData);
        $this->measures = $this->buildNestedHash($concepts);
        $this->otherVocabularies['Measure'] = $this->measures;
        return $this;
    }}

    public function loadProductTypes(array $jsonData): static
    {{
        $concepts = $this->extractConcepts($jsonData);
        $this->productTypes = $this->buildNestedHash($concepts);
        $this->otherVocabularies['ProductType'] = $this->productTypes;
        return $this;
    }}

    public function loadVocabulary(string $name, array $jsonData): static
    {{
        $concepts = $this->extractConcepts($jsonData);
        $this->otherVocabularies[$name] = $this->buildNestedHash($concepts);
        return $this;
    }}

    // Export objects to a JSON-LD string. Predicates are already official
    // CURIEs, so no compaction step is needed; the context is emitted as a
    // URL string (never inlined).
    public function export(SemanticObject ...$objects): string
    {{
        if (count($objects) === 1) {{
            $doc = $objects[0]->toJsonLd(null);
        }} else {{
            $doc = ['@graph' => []];
            foreach ($objects as $obj) {{
                $doc['@graph'][] = $obj->toJsonLd(null);
            }}
        }}
        $doc['@context'] = $this->getContextUrl();
        return json_encode($doc, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }}

    // Import JSON-LD (array or JSON string) and return SemanticObject
    // instances — always an array, even for a single @graph entry.
    // Resolves @id references within the same document (shallow).
    public function import(array|string $data): array
    {{
        if (is_string($data)) {{
            $decoded = json_decode($data, true);
            $data = is_array($decoded) ? $decoded : [];
        }}
        $entries = $data['@graph'] ?? [$data];
        // A single top-level object without @graph arrives wrapped above;
        // a bare list of entries is used as-is.
        if (array_is_list($data)) {{
            $entries = $data;
        }}
        $objectsById = [];
        $instances = [];

        foreach ($entries as $entry) {{
            if (!is_array($entry)) continue;
            $semanticId = $entry['@id'] ?? null;
            $rawType = $entry['@type'] ?? null;
            $semanticType = null;
            if (is_array($rawType)) {{
                foreach ($rawType as $t) {{
                    if (is_string($t) && !str_starts_with($t, '@')) {{
                        $semanticType = $t;
                        break;
                    }}
                }}
            }} else {{
                $semanticType = $rawType;
            }}
            if (!$semanticId || !$semanticType) continue;

            $semanticType = self::TYPE_ALIASES[$semanticType] ?? $semanticType;
            $className = SemanticObject::getTypeRegistry()[$semanticType] ?? null;
            if (!$className) continue;

            if (is_string($className) && class_exists($className)) {{
                $obj = new $className($semanticId);
                $objectsById[$semanticId] = $obj;
                $instances[] = $obj;
            }}
        }}

        foreach ($entries as $entry) {{
            if (!is_array($entry)) continue;
            $semanticId = $entry['@id'] ?? null;
            if (!$semanticId) continue;
            $obj = $objectsById[$semanticId] ?? null;
            if (!$obj) continue;

            foreach ($entry as $key => $value) {{
                if (str_starts_with($key, '@')) continue;
                $propName = $this->predicateToPropName($key);
                $setter = 'set' . ucfirst($propName);
                $adder = 'add' . ucfirst($propName);

                // Prefer the setter: it stores the resolved value as-is, so
                // scalars stay scalars and lists stay lists (same shapes the
                // TS/Ruby connectors emit).
                if (method_exists($obj, $setter)) {{
                    if (is_array($value) && array_is_list($value)) {{
                        $obj->$setter(array_map(
                            fn($v) => $this->resolveReference($v, $objectsById),
                            $value
                        ));
                    }} else {{
                        $obj->$setter($this->resolveReference($value, $objectsById));
                    }}
                }} elseif (method_exists($obj, $adder) && is_array($value) && array_is_list($value)) {{
                    foreach ($value as $v) {{
                        $obj->$adder($this->resolveReference($v, $objectsById));
                    }}
                }}
            }}
        }}

        return $instances;
    }}

    public function getFacets(): array {{ return $this->facets; }}
    public function getMeasures(): array {{ return $this->measures; }}
    public function getProductTypes(): array {{ return $this->productTypes; }}
    public function getFacet(): array {{ return $this->otherVocabularies['Facet'] ?? []; }}
    public function getMeasure(): array {{ return $this->otherVocabularies['Measure'] ?? []; }}
    public function getProductType(): array {{ return $this->otherVocabularies['ProductType'] ?? []; }}
    public function getScope(): array {{ return $this->otherVocabularies['Scope'] ?? []; }}
    public function getVocabularyTerm(): array {{ return $this->otherVocabularies['VocabularyTerm'] ?? []; }}

    public function getContext(): ?array
    {{
        if ($this->contextCache === null) {{
            $this->contextCache = $this->loadBundledContext() ?? $this->fetchContext();
        }}
        return $this->contextCache;
    }}

    // Returns the JSON-LD context shipped with the connector for the current
    // ontology version, or null so the caller falls back to the network.
    public function loadBundledContext(): ?array
    {{
        $path = __DIR__ . '/../contexts/context_' . $this->ontologyVersion . '.json';
        if (!is_file($path)) return null;
        $data = json_decode(@file_get_contents($path), true);
        return is_array($data) ? $data : null;
    }}

    private function resolveReference(mixed $value, array $objectsById): mixed
    {{
        if (is_string($value) && (str_starts_with($value, 'http') || str_starts_with($value, '/') || str_starts_with($value, '_:'))) {{
            return $objectsById[$value] ?? $value;
        }}
        if (is_array($value) && isset($value['@id']) && is_string($value['@id'])) {{
            return $objectsById[$value['@id']] ?? $value;
        }}
        return $value;
    }}

    private function extractConcepts(array $jsonData): array
    {{
        $concepts = [];
        $graph = $jsonData['@graph'] ?? [];
        foreach ($graph as $entry) {{
            $types = $entry['@type'] ?? [];
            if (is_string($types)) $types = [$types];
            $isConcept = false;
            foreach ((array) $types as $t) {{
                if ($t === 'skos:Concept' || $t === 'http://www.w3.org/2004/02/skos/core#Concept') {{
                    $isConcept = true;
                    break;
                }}
            }}
            if (!$isConcept) continue;
            $notation = $this->extractConceptKey($entry);
            if ($notation !== null) {{
                $concepts[$notation] = $entry;
            }}
        }}
        return $concepts;
    }}

    private function extractConceptKey(array $entry): ?string
    {{
        $candidates = ['skos:notation', 'http://www.w3.org/2004/02/skos/core#notation', 'skos:prefLabel', 'http://www.w3.org/2004/02/skos/core#prefLabel'];
        foreach ($candidates as $field) {{
            if (!isset($entry[$field])) continue;
            $value = $entry[$field];
            if (is_string($value)) return $value;
            if (is_array($value)) {{
                foreach ($value as $item) {{
                    if (is_string($item)) return $item;
                    if (is_array($item) && isset($item['@value']) && is_string($item['@value'])) {{
                        return $item['@value'];
                    }}
                }}
            }}
        }}
        return null;
    }}

    private function fetchContext(): ?array
    {{
        $url = $this->getContextUrl();
        $json = @file_get_contents($url);
        if ($json === false) {{
            return null;
        }}
        $data = json_decode($json, true);
        return is_array($data) ? $data : null;
    }}

    private function buildNestedHash(array $concepts): array
    {{
        $result = [];
        foreach ($concepts as $key => $concept) {{
            $parts = preg_split('/[_\\s]+/', (string) $key);
            $current = &$result;
            foreach ($parts as $i => $part) {{
                $normalized = preg_replace('/[^a-z0-9]/', '_', strtolower($part));
                if ($i === count($parts) - 1) {{
                    $current[$normalized] = $concept;
                }} else {{
                    if (!isset($current[$normalized])) {{
                        $current[$normalized] = [];
                    }}
                    $current = &$current[$normalized];
                }}
            }}
        }}
        return $result;
    }}

    private function predicateToPropName(string $predicate): string
    {{
        if (isset(self::PREDICATE_MAP[$predicate])) {{
            return self::PREDICATE_MAP[$predicate];
        }}
        // Fallback: extract the local name from any CURIE or URI.
        $name = $predicate;
        if (($i = strrpos($name, '#')) !== false) {{
            $name = substr($name, $i + 1);
        }} elseif (($i = strrpos($name, ':')) !== false) {{
            $name = substr($name, $i + 1);
        }}
        $isHas = str_starts_with($name, 'has_') || (str_starts_with($name, 'has') && strlen($name) > 3 && ctype_upper($name[3]));
        if (!$isHas) {{
            $snake = strtolower(preg_replace('/(?<!^)(?=[A-Z])/', '_', $name));
            $snake = ltrim($snake, '_');
            if (isset(self::BARE_OVERRIDES[$snake])) {{
                return self::BARE_OVERRIDES[$snake];
            }}
        }} else {{
            if (str_starts_with($name, 'has_')) {{
                $name = substr($name, 4);
            }} else {{
                $name = substr($name, 3);
            }}
        }}
        $name = preg_replace_callback('/_([a-z])/', fn($m) => strtoupper($m[1]), $name);
        return lcfirst($name);
    }}
    {factory_methods}
}}
'''


    return code


# ---------------------------------------------------------------------------
# Trait interface generator
def lcfirst(s: str) -> str:
    return s[0].lower() + s[1:] if s else s


def generate_trait_interface(interface_name: str, slot_names: list, schema_data: dict) -> str:
    """Generate a trait interface with uniform accessors per member slot.

    Methods mirror the models' uniform accessors exactly (same names and
    signatures) so implementation is satisfied by construction.
    """
    slots = schema_data['slots']
    seen: set[str] = set()
    methods_lines = []
    for slot_name in slot_names:
        slot_data = slots.get(slot_name, {})
        prop_name = to_php_property_name(slot_name)
        range_type = php_type_for_slot(slot_data, schema_data)
        is_collection = is_collection_property(slot_name, slot_data)
        cap = prop_name[0].upper() + prop_name[1:]

        if is_collection:
            colltype = php_collection_type(range_type)
            for line in (
                f'    public function get{cap}(): {colltype};',
                f'    public function set{cap}({colltype} ${prop_name}): static;',
                f'    public function add{cap}({range_type} ${prop_name}): static;',
                f'    public function remove{cap}({range_type} ${prop_name}): void;',
            ):
                if line not in seen:
                    seen.add(line)
                    methods_lines.append(line)
        else:
            nullable = php_nullable(range_type)
            for line in (
                f'    public function get{cap}(): {nullable};',
                f'    public function set{cap}({nullable} ${prop_name}): static;',
            ):
                if line not in seen:
                    seen.add(line)
                    methods_lines.append(line)

    methods_str = '\n'.join(methods_lines)

    return f'''{LICENSE_BLOCK.rstrip()}
namespace DataFoodConsortium\\Connector;

interface {interface_name}
{{
{methods_str}
}}
'''


def generate_entity_interface(class_name: str, class_data: dict, schema_data: dict) -> str:
    pcn = to_php_class_name(class_name)
    interface_map = build_entity_interface_map(schema_data)
    ifaces = interface_map.get(class_name, [])

    extends_str = ''
    if ifaces:
        extends_str = ' extends ' + ', '.join(ifaces)

    return f'''{LICENSE_BLOCK.rstrip()}
namespace DataFoodConsortium\\Connector;

interface I{pcn}{extends_str}
{{
}}
'''


# ---------------------------------------------------------------------------
# Model generator
# ---------------------------------------------------------------------------
# Model generator
# ---------------------------------------------------------------------------


def generate_model(class_name: str, class_data: dict, schema_data: dict) -> str:
    pcn = to_php_class_name(class_name)
    # Parent comes from the (possibly overridden) hierarchy so slot
    # inheritance and the extends clause always agree.
    hierarchy = get_class_hierarchy(class_name, schema_data['classes'])
    if len(hierarchy) > 1:
        parent_raw = to_php_class_name(hierarchy[-2])
    else:
        parent_raw = 'SemanticObject'
    semantic_type = f"dfc-b:{class_name}"
    description = class_data.get('description', '').replace("'", "\\'")
    interface_map = build_entity_interface_map(schema_data)
    ifaces = interface_map.get(class_name, [])

    data_props = get_data_properties(class_name, schema_data)
    obj_props = get_object_properties(class_name, schema_data)

    own_data_props = [(s, d, o) for s, d, o in data_props if o == class_name]
    own_obj_props = [(s, d, o) for s, d, o in obj_props if o == class_name]
    all_own_props = own_data_props + own_obj_props

    # Build imports
    use_imports = set()
    use_imports.add('use DataFoodConsortium\\Connector\\SemanticObject;')
    if parent_raw != 'SemanticObject':
        use_imports.add(f'use DataFoodConsortium\\Connector\\{parent_raw};')

    # Interfaces for referenced classes
    for slot_name, slot_data, owner in all_own_props:
        range_type = get_range_value(slot_data)
        if range_type in schema_data['classes']:
            rt = to_php_class_name(range_type)
            if rt != parent_raw and rt != pcn:
                use_imports.add(f'use DataFoodConsortium\\Connector\\{rt};')

    use_imports_str = '\n'.join(sorted(use_imports))

    # Class properties
    props_code = []
    for slot_name, slot_data, owner in all_own_props:
        prop_name = to_php_property_name(slot_name)
        is_collection = is_collection_property(slot_name, slot_data)
        ptype = php_prop_type(slot_data, schema_data, is_collection)

        if is_collection:
            props_code.append(f'    private {ptype} ${prop_name} = [];')
        else:
            props_code.append(f'    private {php_nullable(ptype)} ${prop_name} = null;')

    props_str = '\n'.join(props_code)

    # Constructor
    body = []
    registrations = []
    for slot_name, slot_data, owner in all_own_props:
        prop_name = to_php_property_name(slot_name)
        if is_collection_property(slot_name, slot_data):
            body.append(f"        $this->{prop_name} = $params['{prop_name}'] ?? [];")
        else:
            body.append(f"        $this->{prop_name} = $params['{prop_name}'] ?? null;")
        predicate = predicate_for_slot(slot_name, slot_data)
        registrations.append(f"        $this->registerSemanticProperty('{predicate}', fn() => $this->{prop_name});")

    body_str = '\n'.join(body) if body else ''
    registrations_str = '\n'.join(registrations)

    # Parent constructor call
    if parent_raw == 'SemanticObject':
        super_call = '        parent::__construct($semanticId);'
    else:
        super_call = '        parent::__construct($semanticId, $params ?? []);'

    impl_str = ''
    if pcn != 'SemanticObject':
        impl_str = ' implements I' + pcn

    constructor = f'''    public function __construct(
        string $semanticId,
        array $params = []
    ) {{
        {super_call}
        $this->semanticType = self::SEMANTIC_TYPE;
{body_str}
{registrations_str}
    }}
'''

    # Uniform accessors for every property (the stable target for
    # Connector::import), plus domain-specific aliases required by the
    # trait interfaces, delegating to the uniform methods.
    methods = []
    emitted: set[str] = set()

    def _cap(s: str) -> str:
        return s[0].upper() + s[1:] if s else s

    # prop -> (slot_data, is_collection, ptype, cap) for alias binding.
    prop_info: dict[str, tuple] = {}
    for slot_name, slot_data, owner in all_own_props:
        prop_name = to_php_property_name(slot_name)
        if prop_name in prop_info:
            continue
        prop_info[prop_name] = (
            slot_data,
            is_collection_property(slot_name, slot_data),
            php_type_for_slot(slot_data, schema_data),
            _cap(prop_name),
        )

    for prop_name, (slot_data, is_collection, ptype, cap) in prop_info.items():
        if is_collection:
            uniform_get = f'get{cap}'
            uniform_set = f'set{cap}'
            uniform_add = f'add{cap}'
            uniform_remove = f'remove{cap}'
            colltype = php_collection_type(ptype)
            methods.append(f'''    public function {uniform_get}(): {colltype}
    {{
        return $this->{prop_name};
    }}

    public function {uniform_set}({colltype} ${prop_name}): static
    {{
        $this->{prop_name} = ${prop_name};
        return $this;
    }}

    public function {uniform_add}({ptype} ${prop_name}): static
    {{
        if ($this->{prop_name} === null) {{
            $this->{prop_name} = [];
        }} elseif (!is_array($this->{prop_name})) {{
            $this->{prop_name} = [$this->{prop_name}];
        }}
        $this->{prop_name}[] = ${prop_name};
        return $this;
    }}

    public function {uniform_remove}({ptype} ${prop_name}): void
    {{
        if (!is_array($this->{prop_name})) {{
            return;
        }}
        $key = array_search(${prop_name}, $this->{prop_name}, true);
        if ($key !== false) {{
            unset($this->{prop_name}[$key]);
            // Reindex: unset leaves gaps in numeric keys, which json_encode
            // would emit as an object instead of an array (shape change).
            $this->{prop_name} = array_values($this->{prop_name});
        }}
    }}
''')
            emitted.update([uniform_get, uniform_set, uniform_add, uniform_remove])
        else:
            uniform_get = f'get{cap}'
            uniform_set = f'set{cap}'
            nullable = php_nullable(ptype)
            methods.append(f'''    public function {uniform_get}(): {nullable}
    {{
        return $this->{prop_name};
    }}

    public function {uniform_set}({nullable} ${prop_name}): static
    {{
        $this->{prop_name} = ${prop_name};
        return $this;
    }}
''')
            emitted.update([uniform_get, uniform_set])

    methods_str = '\n'.join(methods)

    code = f'''{LICENSE_BLOCK.rstrip()}
namespace DataFoodConsortium\\Connector;

{use_imports_str}

class {pcn} extends {parent_raw}{impl_str}
{{
    public const SEMANTIC_TYPE = '{semantic_type}';

{props_str}

{constructor}{methods_str}}}
'''

    return code


# ---------------------------------------------------------------------------
# Main orchestrator
# ---------------------------------------------------------------------------

def _copy_bundled_data(output_dir: Path, dirname: str, source_dir: Path, pattern: str) -> None:
    """Copy canonical data files (vocabularies/contexts) into the package."""
    target_dir = output_dir / dirname
    if target_dir.exists() and any(target_dir.iterdir()):
        print(f"  - {dirname}/ preserved ({len(list(target_dir.iterdir()))} files)", file=sys.stderr)
        return
    if not source_dir.exists():
        print(f"  - {dirname}/ skipped (no source at {source_dir})", file=sys.stderr)
        return
    target_dir.mkdir(parents=True, exist_ok=True)
    count = 0
    for f in sorted(source_dir.glob(pattern)):
        (target_dir / f.name).write_text(f.read_text(encoding='utf-8'), encoding='utf-8')
        count += 1
    print(f"  - {dirname}/ copied ({count} files from {source_dir})", file=sys.stderr)


def main():
    import argparse

    parser = argparse.ArgumentParser(description="Generate PHP connector from LinkML schema")
    parser.add_argument('--schema', default=None, help='Path to LinkML schema YAML file')
    parser.add_argument('--output', default=None, help='Output directory for PHP package')
    args = parser.parse_args()

    schema_paths = [
        args.schema,
        'src/dfc_business_linkml_v2_0.yaml',
        '../src/dfc_business_linkml_v2_0.yaml',
    ]

    schema_path = None
    for p in schema_paths:
        if p and Path(p).exists():
            schema_path = p
            break

    if not schema_path:
        print("Error: Could not find schema file", file=sys.stderr)
        sys.exit(1)

    print(f"Loading schema: {schema_path}", file=sys.stderr)
    schema_data = parse_schema(schema_path)
    _init_parent_overrides(schema_data)
    if _PARENT_OVERRIDES:
        print(f"Parent overrides: {_PARENT_OVERRIDES}", file=sys.stderr)

    output_dir = Path(args.output) if args.output else Path("php-connector")
    src_dir = output_dir / 'src'

    # Preserve hand-written tests across regeneration.
    preserved_tests: dict[str, str] = {}
    tests_dir = output_dir / 'tests'
    if tests_dir.exists():
        for f in tests_dir.rglob('*'):
            if f.is_file():
                preserved_tests[str(f.relative_to(output_dir))] = f.read_text(encoding='utf-8')

    if src_dir.exists():
        import shutil
        shutil.rmtree(src_dir)

    src_dir.mkdir(parents=True, exist_ok=True)

    print(f"\nGenerating PHP connector in: {src_dir}/", file=sys.stderr)
    print(f"Classes: {len(schema_data['classes'])}", file=sys.stderr)
    print(f"Slots: {len(schema_data['slots'])}", file=sys.stderr)
    print(f"Enums: {len(schema_data['enums'])}", file=sys.stderr)

    print("\nGenerating core files...", file=sys.stderr)
    (src_dir / 'SemanticObject.php').write_text(generate_semantic_object())
    print("  - src/SemanticObject.php", file=sys.stderr)

    (src_dir / 'Connector.php').write_text(generate_connector(schema_data))
    print("  - src/Connector.php", file=sys.stderr)

    # Trait interfaces
    print("\nGenerating trait interfaces...", file=sys.stderr)
    slot_interfaces = collect_slot_interfaces(schema_data)
    for iface_name in sorted(slot_interfaces.keys()):
        slot_names = [s[0] for s in slot_interfaces[iface_name]]
        code = generate_trait_interface(iface_name, slot_names, schema_data)
        (src_dir / f'{iface_name}.php').write_text(code)
        print(f"  - src/{iface_name}.php", file=sys.stderr)

    # Entity interfaces
    print("\nGenerating entity interfaces...", file=sys.stderr)
    iface_count = 0
    for class_name, class_data in schema_data.get('classes', {}).items():
        pcn = to_php_class_name(class_name)
        if pcn == 'SemanticObject':
            continue
        code = generate_entity_interface(class_name, class_data, schema_data)
        (src_dir / f'I{pcn}.php').write_text(code)
        iface_count += 1
    print(f"  - {iface_count} entity interface files", file=sys.stderr)

    # Model classes
    print("\nGenerating model classes...", file=sys.stderr)
    model_count = 0
    for class_name, class_data in schema_data.get('classes', {}).items():
        pcn = to_php_class_name(class_name)
        if pcn == 'SemanticObject':
            continue
        code = generate_model(class_name, class_data, schema_data)
        (src_dir / f'{pcn}.php').write_text(code)
        model_count += 1
    print(f"  - {model_count} model files", file=sys.stderr)

    # composer.json
    (output_dir / 'composer.json').write_text(generate_composer_json(schema_data))
    print("  - composer.json", file=sys.stderr)

    # Bundled SKOS vocabularies + JSON-LD context: copy the canonical exports
    # from ruby-gem (the durable offline taxon/context data). Preserved files
    # win so hand-updated data is never clobbered.
    _copy_bundled_data(output_dir, 'vocabularies', Path('ruby-gem') / 'vocabularies', '*.jsonld')
    _copy_bundled_data(output_dir, 'contexts', Path('ruby-gem') / 'contexts', '*.json')

    if preserved_tests:
        for rel_path, content in preserved_tests.items():
            target = output_dir / rel_path
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(content, encoding='utf-8')
        print(f"  - {len(preserved_tests)} preserved test files", file=sys.stderr)

    print(f"\nPHP connector generated in: {output_dir}/", file=sys.stderr)
    print(f"To install: cd {output_dir} && composer install", file=sys.stderr)


if __name__ == '__main__':
    main()

