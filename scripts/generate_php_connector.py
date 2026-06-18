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
