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


def to_php_property_name(slot_name: str) -> str:
    """Convert slot name to PHP property name (camelCase with has- prefix stripped)."""
    name = slot_name
    if name.startswith('has') and len(name) > 3 and name[3].isupper():
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
    return special.get(result, result)


def to_file_name(name: str) -> str:
    """Convert a class name to a PHP file name."""
    return name


def get_class_hierarchy(class_name: str, classes: dict) -> list:
    chain = []
    current = class_name
    while current:
        chain.append(current)
        current = classes.get(current, {}).get('is_a', '')
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


def get_parent_php_class(class_data: dict) -> str:
    parent = class_data.get('is_a', '')
    if not parent:
        return 'SemanticObject'
    return to_php_class_name(parent)


def get_range_value(slot_data: dict) -> str:
    r = slot_data.get('range', 'string')
    if isinstance(r, list):
        return r[0] if r else 'string'
    return r or 'string'


def php_type_for_slot(slot_data: dict, schema_data: dict) -> str:
    range_type = get_range_value(slot_data)
    classes = schema_data['classes']
    if range_type in classes:
        return to_php_class_name(range_type)
    elif range_type in ('float', 'decimal', 'double'):
        return 'float'
    elif range_type in ('integer', 'int', 'NonNegativeInteger', 'PositiveInteger'):
        return 'int'
    elif range_type in ('boolean', 'bool'):
        return 'bool'
    else:
        return 'string'


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
    if name.startswith('has') and len(name) > 3 and name[3].isupper():
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

    Returns dict of class_name -> set of interface names.
    """
    interfaces = collect_slot_interfaces(schema_data)
    result = {}
    for class_name in schema_data['classes']:
        ifaces = set()
        for slot_name, slot_data, owner in get_all_slots_for_class(class_name, schema_data):
            iface = interface_name_for_slot(slot_name)
            ifaces.add(iface)
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
    version = schema_data.get('version', '2.0.0')
    data = {
        "name": "datafoodconsortium/connector",
        "type": "library",
        "description": "DFC LinkML Semantic Object Connector for PHP",
        "keywords": [
            "data food consortium", "short supply chain", "farming",
            "semantic web", "rdf", "object model"
        ],
        "license": "MIT",
        "require": {
            "php": ">=8.1",
            "ml/json-ld": "^2.1"
        },
        "autoload": {
            "psr-4": {
                "DataFoodConsortium\\\\Connector\\\\": "src"
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
                $result[$predicate] = array_map(function ($v) {
                    return $v instanceof self ? $v->getSemanticId() : $v;
                }, $value);
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

    code = LICENSE_BLOCK + f'''namespace DataFoodConsortium\\Connector;

use ML\\JsonLD\\JsonLD;
use ML\\JsonLD\\DocumentFactoryInterface;

class Connector
{{
    public const ONTOLOGY_BASE_URL = 'https://w3id.org/dfc/ontology';
    public const TAXONOMY_BASE_URL = 'https://w3id.org/dfc/taxonomies';
    public const DEFAULT_CONTEXT_URL = '{context_url}';

    private string $ontologyVersion;
    private string $taxonomyVersion;
    private ?array $contextCache = null;
    private array $facets = [];
    private array $measures = [];
    private array $productTypes = [];
    private array $otherVocabularies = [];

    public function __construct(string $ontologyVersion = '{ontology_version}', string $taxonomyVersion = '{taxonomy_version}')
    {{
        $this->ontologyVersion = $ontologyVersion;
        $this->taxonomyVersion = $taxonomyVersion;
    }}

    public function getContextUrl(): string
    {{
        return self::ONTOLOGY_BASE_URL . '/v' . $this->ontologyVersion . '/context/context_' . $this->ontologyVersion . '.json';
    }}

    public function loadFacets(array $jsonData): static
    {{
        $concepts = $this->extractConcepts($jsonData);
        $this->facets = $this->buildNestedHash($concepts);
        return $this;
    }}

    public function loadMeasures(array $jsonData): static
    {{
        $concepts = $this->extractConcepts($jsonData);
        $this->measures = $this->buildNestedHash($concepts);
        return $this;
    }}

    public function loadProductTypes(array $jsonData): static
    {{
        $concepts = $this->extractConcepts($jsonData);
        $this->productTypes = $this->buildNestedHash($concepts);
        return $this;
    }}

    public function loadVocabulary(string $name, array $jsonData): static
    {{
        $concepts = $this->extractConcepts($jsonData);
        $this->otherVocabularies[$name] = $this->buildNestedHash($concepts);
        return $this;
    }}

    public function export(array $objects): array
    {{
        $context = $this->getContext();

        if (count($objects) === 1) {{
            return $objects[0]->toJsonLd($context);
        }}

        $result = [
            "@context" => $context,
            "@graph" => [],
        ];

        foreach ($objects as $obj) {{
            if ($obj instanceof SemanticObject) {{
                $result["@graph"][] = $obj->toJsonLd($context);
            }}
        }}

        return $result;
    }}

    public function import(array $data): array
    {{
        $entries = isset($data["@graph"]) ? $data["@graph"] : [$data];
        $objectsById = [];
        $instances = [];

        foreach ($entries as $entry) {{
            $semanticId = $entry["@id"] ?? null;
            $semanticType = $entry["@type"] ?? null;
            if (!$semanticId || !$semanticType) continue;

            $className = SemanticObject::getTypeRegistry()[$semanticType] ?? null;
            if (!$className) continue;

            if (is_string($className) && class_exists($className)) {{
                $obj = new $className($semanticId);
                $objectsById[$semanticId] = $obj;
                $instances[] = $obj;
            }}
        }}

        foreach ($entries as $entry) {{
            $semanticId = $entry["@id"] ?? null;
            if (!$semanticId) continue;
            $obj = $objectsById[$semanticId] ?? null;
            if (!$obj) continue;

            foreach ($entry as $key => $value) {{
                if (str_starts_with($key, '@')) continue;
                $propName = $this->predicateToPropName($key);
                $setter = 'set' . ucfirst($propName);
                $adder = 'add' . ucfirst($propName);

                if (is_array($value)) {{
                    if (method_exists($obj, $adder)) {{
                        foreach ($value as $v) {{
                            $resolved = is_string($v) && (str_starts_with($v, 'http') || str_starts_with($v, '/'))
                                ? ($objectsById[$v] ?? $v)
                                : $v;
                            $obj->$adder($resolved);
                        }}
                    }} elseif (method_exists($obj, $setter)) {{
                        $resolved = array_map(function ($v) use ($objectsById) {{
                            return is_string($v) && (str_starts_with($v, 'http') || str_starts_with($v, '/'))
                                ? ($objectsById[$v] ?? $v)
                                : $v;
                        }}, $value);
                        $obj->$setter($resolved);
                    }}
                }} elseif (is_string($value) && (str_starts_with($value, 'http') || str_starts_with($value, '/'))) {{
                    if (method_exists($obj, $setter)) {{
                        $obj->$setter($objectsById[$value] ?? $value);
                    }}
                }} else {{
                    if (method_exists($obj, $setter)) {{
                        $obj->$setter($value);
                    }}
                }}
            }}
        }}

        return $instances;
    }}

    public function getFacets(): array {{ return $this->facets; }}
    public function getMeasures(): array {{ return $this->measures; }}
    public function getProductTypes(): array {{ return $this->productTypes; }}

    public function getContext(): array
    {{
        if ($this->contextCache === null) {{
            $this->contextCache = $this->fetchContext();
        }}
        return $this->contextCache;
    }}

    private function extractConcepts(array $jsonData): array
    {{
        $concepts = [];
        $graph = $jsonData["@graph"] ?? [];
        foreach ($graph as $entry) {{
            $types = $entry["@type"] ?? [];
            if (is_string($types)) $types = [$types];
            if (in_array("skos:Concept", $types)) {{
                $notation = $entry["skos:notation"] ?? $entry["skos:prefLabel"] ?? null;
                if ($notation) {{
                    $concepts[$notation] = $entry;
                }}
            }}
        }}
        return $concepts;
    }}

    private function fetchContext(): array
    {{
        $url = $this->getContextUrl();
        $json = @file_get_contents($url);
        if ($json === false) {{
            return [];
        }}
        return json_decode($json, true) ?? [];
    }}

    private function buildNestedHash(array $concepts): array
    {{
        $result = [];
        foreach ($concepts as $key => $concept) {{
            $parts = preg_split('/[_\\s]+/', $key);
            $current = &$result;
            foreach ($parts as $i => $part) {{
                $normalized = strtolower(preg_replace('/[^a-z0-9]/', '_', $part));
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
        $name = preg_replace('/^dfc-b:/', '', $predicate);
        if (str_starts_with($name, 'has') && strlen($name) > 3 && ctype_upper($name[3])) {{
            $name = substr($name, 3);
        }}
        return lcfirst($name);
    }}
{factory_methods}}}
'''

    return code


# ---------------------------------------------------------------------------
# Trait interface generator
# ---------------------------------------------------------------------------

SLOT_INTERFACE_METHODS = {
    'Nameable': (
        'data',
        ['getName', 'setName'],
        {
            'getName': 'public function getName(): ?string;',
            'setName': 'public function setName(?string $name): static;',
        }
    ),
    'Describable': (
        'data',
        ['getDescription', 'setDescription'],
        {
            'getDescription': 'public function getDescription(): ?string;',
            'setDescription': 'public function setDescription(?string $description): static;',
        }
    ),
    'Emailable': (
        'data_collection',
        ['getEmails', 'addEmail', 'removeEmail'],
        {
            'getEmails': 'public function getEmails(): array;',
            'addEmail': 'public function addEmail(string $email): static;',
            'removeEmail': 'public function removeEmail(string $email): void;',
        }
    ),
    'Suppliable': (
        'reference_collection',
        ['getSuppliedProducts', 'supplyProduct', 'unsupplyProduct'],
        {}
    ),
    'Maintainable': (
        'reference_collection',
        ['getMaintainedCatalogs', 'maintainCatalog', 'unmaintainCatalog'],
        {}
    ),
    'Manageable': (
        'reference_collection',
        ['getManagedCatalogItems', 'manageCatalogItem', 'unmanageCatalogItem'],
        {}
    ),
    'Proposable': (
        'reference_collection',
        ['getProposedTechnicalProducts', 'proposeTechnicalProducts', 'unproposeTechnicalProducts'],
        {}
    ),
    'Localizable': (
        'reference_collection',
        ['getLocalizations', 'addLocalization', 'removeLocalization'],
        {}
    ),
    'Offerable': (
        'reference_collection',
        ['getOffers', 'addOffer', 'removeOffer'],
        {}
    ),
    'Phoneable': (
        'reference_collection',
        ['getPhoneNumbers', 'addPhoneNumber', 'removePhoneNumber'],
        {}
    ),
    'SocialMediable': (
        'reference_collection',
        ['getSocialMedias', 'addSocialMedia', 'removeSocialMedia'],
        {}
    ),
    'Quantifiable': (
        'reference_single',
        ['getQuantity', 'setQuantity'],
        {}
    ),
    'Pricable': (
        'reference_single',
        ['getPrice', 'setPrice'],
        {}
    ),
    'Certifiable': (
        'reference_collection',
        ['getCertifications', 'addCertification', 'removeCertification'],
        {}
    ),
    'Claimable': (
        'reference_collection',
        ['getClaims', 'addClaim', 'removeClaim'],
        {}
    ),
    'Classable': (
        'data',
        ['getType', 'setType'],
        {}
    ),
    'WebSitable': (
        'data_collection',
        ['getWebsites', 'addWebsite', 'removeWebsite'],
        {}
    ),
    'Partable': (
        'reference_collection',
        ['getParts', 'addPart', 'removePart'],
        {}
    ),
    'Steppable': (
        'reference_collection',
        ['getSteps', 'addStep', 'removeStep'],
        {}
    ),
    'Imageable': (
        'reference_collection',
        ['getImages', 'addImage', 'removeImage'],
        {}
    ),
    'Measurable': (
        'reference_single',
        ['getUnit', 'setUnit'],
        {}
    ),
    'VatNumberable': (
        'data',
        ['getVatNumber', 'setVatNumber'],
        {
            'getVatNumber': 'public function getVatNumber(): ?string;',
            'setVatNumber': 'public function setVatNumber(?string $vatNumber): static;',
        }
    ),
    'Contactable': (
        'data',
        ['getContact', 'setContact'],
        {}
    ),
    'Geolocalizable': (
        'data',
        ['getLatitude', 'setLatitude', 'getLongitude', 'setLongitude'],
        {}
    ),
    'Addressable': (
        'data',
        ['getStreet', 'setStreet', 'getCity', 'setCity', 'getPostcode', 'setPostcode', 'getCountry', 'setCountry'],
        {}
    ),
}


def _method_signature(group_type: str, method_name: str, range_type: str) -> str:
    if group_type == 'data':
        if method_name.startswith('get'):
            return f'    public function {method_name}(): ?{range_type};'
        elif method_name.startswith('set'):
            return f'    public function {method_name}(?{range_type} ${lcfirst(method_name[3:])}): static;'
    elif group_type == 'data_collection':
        if method_name.startswith('get'):
            return f'    public function {method_name}(): array;'
        elif method_name.startswith('add'):
            param = lcfirst(method_name[3:])
            return f'    public function {method_name}(string ${param}): static;'
        elif method_name.startswith('remove'):
            param = lcfirst(method_name[3:])
            return f'    public function {method_name}(string ${param}): void;'
    elif group_type == 'reference_single':
        if method_name.startswith('get'):
            return f'    public function {method_name}(): ?{range_type};'
        elif method_name.startswith('set'):
            param = lcfirst(method_name[3:])
            return f'    public function {method_name}(?{range_type} ${param}): static;'
    elif group_type == 'reference_collection':
        if method_name.startswith('get'):
            return f'    public function {method_name}(): array;'
        elif method_name.startswith('add') or method_name.startswith('supply') or \
             method_name.startswith('maintain') or method_name.startswith('manage') or \
             method_name.startswith('propose'):
            param = lcfirst(method_name[3:]) if method_name.startswith('add') else lcfirst(method_name)
            return f'    public function {method_name}({range_type} ${param}): static;'
        elif method_name.startswith('remove') or method_name.startswith('un'):
            return f'    public function {method_name}({range_type} ${lcfirst(method_name[3:]) if method_name.startswith("remove") else lcfirst(method_name[2:])}): void;'
    return f'    public function {method_name}(): mixed;'


def lcfirst(s: str) -> str:
    return s[0].lower() + s[1:] if s else s


def generate_trait_interface(interface_name: str, slot_names: list, schema_data: dict) -> str:
    slots = schema_data['slots']
    classes = schema_data['classes']
    methods_lines = []

    if interface_name in SLOT_INTERFACE_METHODS:
        group_type, method_names, hardcoded_sigs = SLOT_INTERFACE_METHODS[interface_name]

        # Use hardcoded signatures if available
        if hardcoded_sigs:
            for mn in method_names:
                if mn in hardcoded_sigs:
                    methods_lines.append('    ' + hardcoded_sigs[mn])
                else:
                    # Derive from first slot's range type
                    first_slot = slot_names[0]
                    slot_data = slots.get(first_slot, {})
                    range_type = php_type_for_slot(slot_data, schema_data)
                    if (group_type == 'reference_collection' or group_type == 'reference_single') and range_type == 'string':
                        # For reference types, find the actual class
                        rv = get_range_value(slot_data)
                        if rv in classes:
                            range_type = to_php_class_name(rv)
                    methods_lines.append('    ' + _method_signature(group_type, mn, range_type))
        else:
            for mn in method_names:
                first_slot = slot_names[0]
                slot_data = slots.get(first_slot, {})
                range_type = php_type_for_slot(slot_data, schema_data)
                if (group_type == 'reference_collection' or group_type == 'reference_single') and range_type == 'string':
                    rv = get_range_value(slot_data)
                    if rv in classes:
                        range_type = to_php_class_name(rv)
                methods_lines.append('    ' + _method_signature(group_type, mn, range_type))
    else:
        # Auto-generate based on slot data
        for slot_name in slot_names:
            slot_data = slots.get(slot_name, {})
            prop_name = to_php_property_name(slot_name)
            range_type = php_type_for_slot(slot_data, schema_data)
            is_collection = is_collection_property(slot_name, slot_data)
            rv = get_range_value(slot_data)

            if rv in classes:
                range_type = to_php_class_name(rv)

            if is_collection:
                methods_lines.append(f'    public function get{prop_name[0].upper() + prop_name[1:]}(): array;')
                methods_lines.append(f'    public function add{prop_name[0].upper() + prop_name[1:]}({range_type} ${prop_name}): static;')
                methods_lines.append(f'    public function remove{prop_name[0].upper() + prop_name[1:]}({range_type} ${prop_name}): void;')
            else:
                methods_lines.append(f'    public function get{prop_name[0].upper() + prop_name[1:]}(): ?{range_type};')
                methods_lines.append(f'    public function set{prop_name[0].upper() + prop_name[1:]}(?{range_type} ${prop_name}): static;')

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
        extends_str = ' extends ' + ', '.join('I' + i for i in ifaces)

    return f'''{LICENSE_BLOCK.rstrip()}
namespace DataFoodConsortium\\Connector;

interface I{pcn}{extends_str}
{{
}}
'''


# ---------------------------------------------------------------------------
# Model generator
# ---------------------------------------------------------------------------

def generate_model(class_name: str, class_data: dict, schema_data: dict) -> str:
    pcn = to_php_class_name(class_name)
    parent_raw = get_parent_php_class(class_data)
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
        ifaces_str = ', '.join(['I' + parent_raw if ifaces else ''] + [f'I{i}' if i != ifaces else i for i in ifaces])
    else:
        ifaces_str = ', '.join([f'I{i}' for i in ifaces])

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
        ptype = php_type_for_slot(slot_data, schema_data)
        rv = get_range_value(slot_data)
        is_collection = is_collection_property(slot_name, slot_data)

        if rv in schema_data['classes']:
            ptype = to_php_class_name(rv)

        if is_collection:
            props_code.append(f'    private ?array ${prop_name} = null;')
        else:
            props_code.append(f'    private ?{ptype} ${prop_name} = null;')

    props_str = '\n'.join(props_code)

    # Constructor
    body = []
    for slot_name, slot_data, owner in all_own_props:
        prop_name = to_php_property_name(slot_name)
        body.append(f"        $this->{prop_name} = $params['{prop_name}'] ?? null;")

    body_str = '\n        '.join(body) if body else ''

    # Parent constructor call
    if parent_raw == 'SemanticObject':
        super_call = '        parent::__construct($semanticId);'
    else:
        super_call = '        parent::__construct($semanticId, $params ?? []);'

    impl_str = ''
    if ifaces:
        impl_str = ' implements ' + ', '.join(['I' + i for i in ifaces])

    constructor = f'''    public function __construct(
        string $semanticId,
        array $params = []
    ) {{
        {super_call}
        $this->semanticType = self::SEMANTIC_TYPE;
{body_str}
    }}
'''

    # Getter/setter methods
    methods = []
    for slot_name, slot_data, owner in all_own_props:
        prop_name = to_php_property_name(slot_name)
        ptype = php_type_for_slot(slot_data, schema_data)
        rv = get_range_value(slot_data)
        is_collection = is_collection_property(slot_name, slot_data)

        if rv in schema_data['classes']:
            ptype = to_php_class_name(rv)

        getter_name = 'get' + prop_name[0].upper() + prop_name[1:]
        setter_name = 'set' + prop_name[0].upper() + prop_name[1:]
        adder_name = 'add' + prop_name[0].upper() + prop_name[1:]
        remover_name = 'remove' + prop_name[0].upper() + prop_name[1:]

        if is_collection:
            methods.append(f'''    public function {getter_name}(): array
    {{
        return $this->{prop_name} ?? [];
    }}

    public function {adder_name}({ptype} ${prop_name}): static
    {{
        $this->{prop_name}[] = ${prop_name};
        return $this;
    }}

    public function {remover_name}({ptype} ${prop_name}): void
    {{
    }}
''')
        else:
            methods.append(f'''    public function {getter_name}(): ?{ptype}
    {{
        return $this->{prop_name};
    }}

    public function {setter_name}(?{ptype} ${prop_name}): static
    {{
        $this->{prop_name} = ${prop_name};
        return $this;
    }}
''')

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

    output_dir = Path(args.output) if args.output else Path("php-connector")
    src_dir = output_dir / 'src'

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

    print(f"\nPHP connector generated in: {output_dir}/", file=sys.stderr)
    print(f"To install: cd {output_dir} && composer install", file=sys.stderr)


if __name__ == '__main__':
    main()

