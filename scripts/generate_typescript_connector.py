#!/usr/bin/env python3
"""
TypeScript connector generator from LinkML schema.

Generates a complete TypeScript package with semantic objects.
Architecture mirrors the Ruby gem generator:
- src/core/SemanticObject.ts — base class with type registry
- src/core/Connector.ts — instantiable connector (no singleton)
- src/core/JsonLdSerializer.ts — JSON-LD serialization
- src/core/VocabularyLoader.ts — SKOS vocabulary loading
- src/models/*.ts — all model classes

Usage:
    python3 generate_typescript_connector.py [--schema SCHEMA] [--output DIR]
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


def to_ts_class_name(name: str) -> str:
    """Convert a LinkML class name to a valid TypeScript class name."""
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


def ts_property_name(slot_name: str) -> str:
    """Convert slot name to TS property name (camelCase with has- prefix stripped)."""
    name = slot_name
    if name.startswith('has') and len(name) > 3 and name[3].isupper():
        name = name[3:]
    if not name:
        return slot_name
    if name.startswith('_'):
        name = name[1:]
    # Convert to camelCase
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
            # Check both: class's explicit slot list AND domain-based match
            in_class_list = slot_name in cls_slots
            if in_class_list and slot_name not in seen:
                seen.add(slot_name)
                yield slot_name, slot_data, cls
            elif slot_matches_class(slot_data, cls) and slot_name not in seen:
                seen.add(slot_name)
                yield slot_name, slot_data, cls

        # For root classes (no is_a), also include orphaned-domain slots
        # whose domain references only non-existent classes.
        # This makes slots like name/description propagate to all subclasses.
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


def get_parent_ts_class(class_data: dict) -> str:
    parent = class_data.get('is_a', '')
    if not parent:
        return 'SemanticObject'
    return to_ts_class_name(parent)


def get_range_value(slot_data: dict) -> str:
    r = slot_data.get('range', 'string')
    if isinstance(r, list):
        return r[0] if r else 'string'
    return r or 'string'


def ts_type_for_slot(slot_data: dict, schema_data: dict) -> str:
    range_type = get_range_value(slot_data)
    classes = schema_data['classes']
    if range_type in classes:
        return to_ts_class_name(range_type)
    elif range_type in ('float', 'decimal', 'double', 'integer', 'int', 'NonNegativeInteger', 'PositiveInteger'):
        return 'number'
    elif range_type in ('boolean', 'bool'):
        return 'boolean'
    elif range_type == 'string':
        return 'string'
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


# ---------------------------------------------------------------------------
# Template generators
# ---------------------------------------------------------------------------

def generate_package_json(schema_data: dict) -> str:
    version = schema_data.get('version', '2.0.0')
    return json.dumps({
        "name": "@fooddatacollaboration/linkml-connector",
        "version": version,
        "type": "module",
        "main": "dist/index.js",
        "types": "dist/index.d.ts",
        "files": ["dist"],
        "scripts": {
            "build": "tsc",
            "test": "vitest run"
        },
        "devDependencies": {
            "typescript": "^5.4.0",
            "vitest": "^2.0.0",
            "@types/node": "^20.0.0"
        }
    }, indent=2) + "\n"


def generate_semantic_object_base() -> str:
    return '''export class SemanticObject {
  static typeRegistry = new Map<string, typeof SemanticObject>();

  static get SEMANTIC_TYPE(): string {
    return "";
  }

  semanticId: string;
  semanticType: string = "";
  private semanticProperties = new Map<string, () => unknown>();

  constructor(semanticId: string) {
    this.semanticId = semanticId;
  }

  registerSemanticProperty(predicate: string, getter: () => unknown): void {
    this.semanticProperties.set(predicate, getter);
  }

  toJsonLd(context?: unknown): Record<string, unknown> {
    const result: Record<string, unknown> = {
      "@id": this.semanticId,
      "@type": this.semanticType,
    };

    if (context) {
      result["@context"] = context;
    }

    for (const [predicate, getter] of this.semanticProperties) {
      const value = getter();
      if (value === undefined || value === null) continue;

      if (Array.isArray(value)) {
        if (value.length === 0) continue;
        result[predicate] = value.map((v: unknown) =>
          v instanceof SemanticObject ? v.semanticId : v
        );
      } else if (value instanceof SemanticObject) {
        result[predicate] = value.semanticId;
      } else {
        result[predicate] = value;
      }
    }

    return result;
  }

  toJson(context?: unknown): string {
    return JSON.stringify(this.toJsonLd(context), null, 2);
  }
}
'''


def generate_json_ld_serializer() -> str:
    return '''import { SemanticObject } from "./SemanticObject.js";

export class JsonLdSerializer {
  private context: unknown;

  constructor(context?: unknown) {
    this.context = context;
  }

  serialize(...objects: SemanticObject[]): Record<string, unknown> {
    if (objects.length === 1) {
      return this.serializeObject(objects[0]);
    }

    const result: Record<string, unknown> = {};
    if (this.context) {
      result["@context"] = this.context;
    }
    result["@graph"] = objects.map(o => this.serializeObject(o));
    return result;
  }

  private serializeObject(obj: SemanticObject): Record<string, unknown> {
    return obj.toJsonLd(this.context);
  }
}
'''


def generate_vocabulary_loader(schema_data: dict) -> str:
    taxonomy_version = schema_data.get('taxonomy_version', '2.0.0')
    taxonomy_base_url = f'https://w3id.org/dfc/taxonomies/v{taxonomy_version}'
    enum_names = list(schema_data.get('enums', {}).keys())

    enum_methods = ''
    for enum_name in enum_names:
        snake = to_snake_case(enum_name)
        enum_methods += f'''
  {snake}(key?: string): unknown {{
    return key ? this.vocabulary("{enum_name}")[key] : this.vocabulary("{enum_name}");
  }}
'''

    return f'''export class VocabularyLoader {{
  private taxonomyVersion: string;
  private vocabularies: Map<string, Record<string, unknown>>;

  constructor(taxonomyVersion: string = "{taxonomy_version}") {{
    this.taxonomyVersion = taxonomyVersion;
    this.vocabularies = new Map();
  }}

  get taxonomyBaseUrl(): string {{
    return `https://w3id.org/dfc/taxonomies/v$this.taxonomyVersion`;
  }}

  load(name: string, jsonData: Record<string, unknown>): this {{
    const concepts: Record<string, unknown> = {{}};
    const graph = (jsonData["@graph"] as Array<Record<string, unknown>>) || [];
    for (const entry of graph) {{
      const types = entry["@type"];
      if (Array.isArray(types) && types.includes("skos:Concept")) {{
        const notation = (entry["skos:notation"] || entry["skos:prefLabel"]) as string;
        concepts[notation] = entry;
      }}
    }}
    this.vocabularies.set(name, concepts);
    return this;
  }}

  async loadFromUrl(name: string): Promise<this> {{
    const url = `${{this.taxonomyBaseUrl}}/${{name.toLowerCase()}}.json`;
    const response = await fetch(url);
    if (!response.ok) {{
      throw new Error(`Failed to fetch taxonomy from ${{url}}: ${{response.status}}`);
    }}
    const jsonData = await response.json() as Record<string, unknown>;
    return this.load(name, jsonData);
  }}

  vocabulary(name: string): Record<string, unknown> {{
    return this.vocabularies.get(name) || {{}};
  }}
{enum_methods}
}}
'''


def generate_connector_class(schema_data: dict) -> str:
    ontology_version = schema_data.get('ontology_version', '2.0.0')
    taxonomy_version = schema_data.get('taxonomy_version', '2.0.0')
    class_names = sorted(schema_data.get('classes', {}).keys())
    classes = schema_data['classes']

    # Import all model classes
    model_imports = []
    for cn in class_names:
        ts = to_ts_class_name(cn)
        if ts != 'SemanticObject':
            model_imports.append(f"import {{ {ts} }} from \"../models/{ts}.js\";")

    model_imports_str = '\n'.join(model_imports)

    # Type imports for factory method params
    type_imports = []
    for cn in class_names:
        ts = to_ts_class_name(cn)
        if ts != 'SemanticObject':
            type_imports.append(f"import type {{ {ts}Params }} from \"../models/{ts}.js\";")

    type_imports_str = '\n'.join(type_imports)

    # Factory methods
    factory_methods = ''
    for cn in class_names:
        ts = to_ts_class_name(cn)
        if ts == 'SemanticObject':
            continue
        factory_methods += f'''
  create{ts}(semanticId: string, params?: {ts}Params): {ts} {{
    return new {ts}(semanticId, params);
  }}
'''

    # Enum accessor methods
    enum_methods = ''
    enum_names = list(schema_data.get('enums', {}).keys())
    for enum_name in enum_names:
        snake = to_snake_case(enum_name)
        enum_methods += f'''
  get {snake}(): Record<string, unknown> {{
    return this.otherVocabularies.get("{enum_name}") || this.vocabLoader.vocabulary("{enum_name}");
  }}
'''

    return f'''import {{ SemanticObject }} from "./SemanticObject.js";
import {{ VocabularyLoader }} from "./VocabularyLoader.js";
import {{ JsonLdSerializer }} from "./JsonLdSerializer.js";
{model_imports_str}
{type_imports_str}

export class Connector {{
  static readonly ONTOLOGY_BASE_URL = "https://w3id.org/dfc/ontology";
  static readonly TAXONOMY_BASE_URL = "https://w3id.org/dfc/taxonomies";

  private static defaultContextUrl: string = "https://w3id.org/dfc/ontology/v{ontology_version}/context/context_{ontology_version}.json";

  static getDefaultContextUrl(): string {{
    return Connector.defaultContextUrl;
  }}

  static setDefaultContextUrl(url: string): void {{
    Connector.defaultContextUrl = url;
  }}

  readonly ontologyVersion: string;
  readonly taxonomyVersion: string;
  readonly vocabLoader: VocabularyLoader;
  private contextCache: Record<string, unknown> | null = null;
  private facets: Record<string, unknown> = {{}};
  private measures: Record<string, unknown> = {{}};
  private productTypes: Record<string, unknown> = {{}};
  private otherVocabularies = new Map<string, Record<string, unknown>>();

  constructor(params: {{ ontologyVersion?: string; taxonomyVersion?: string }} = {{}}) {{
    this.ontologyVersion = params.ontologyVersion ?? "{ontology_version}";
    this.taxonomyVersion = params.taxonomyVersion ?? "{taxonomy_version}";
    this.vocabLoader = new VocabularyLoader(this.taxonomyVersion);
  }}

  get contextUrl(): string {{
    return `${{Connector.ONTOLOGY_BASE_URL}}/v$this.ontologyVersion/context/context_${{this.ontologyVersion}}.json`;
  }}

  async getContext(): Promise<Record<string, unknown>> {{
    if (!this.contextCache) {{
      this.contextCache = await this.fetchContext();
    }}
    return this.contextCache;
  }}

  loadFacets(jsonData: Record<string, unknown>): this {{
    this.vocabLoader.load("Facet", jsonData);
    this.facets = this.buildNestedHash(this.vocabLoader.vocabulary("Facet"));
    return this;
  }}

  loadMeasures(jsonData: Record<string, unknown>): this {{
    this.vocabLoader.load("Measure", jsonData);
    this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
    return this;
  }}

  loadProductTypes(jsonData: Record<string, unknown>): this {{
    this.vocabLoader.load("ProductType", jsonData);
    this.productTypes = this.buildNestedHash(this.vocabLoader.vocabulary("ProductType"));
    return this;
  }}

  loadVocabulary(name: string, jsonData: Record<string, unknown>): this {{
    this.vocabLoader.load(name, jsonData);
    this.otherVocabularies.set(name, this.buildNestedHash(this.vocabLoader.vocabulary(name)));
    return this;
  }}

  async loadFacetsFromUrl(): Promise<this> {{
    await this.vocabLoader.loadFromUrl("facets");
    this.facets = this.buildNestedHash(this.vocabLoader.vocabulary("Facet"));
    return this;
  }}

  async loadMeasuresFromUrl(): Promise<this> {{
    await this.vocabLoader.loadFromUrl("measures");
    this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
    return this;
  }}

  async loadProductTypesFromUrl(): Promise<this> {{
    await this.vocabLoader.loadFromUrl("productTypes");
    this.productTypes = this.buildNestedHash(this.vocabLoader.vocabulary("ProductType"));
    return this;
  }}

  async export(...objects: SemanticObject[]): Promise<Record<string, unknown>> {{
    let context: Record<string, unknown> | undefined;
    try {{
      context = await this.getContext();
    }} catch {{
      // Context fetch failed — export without @context
    }}
    return new JsonLdSerializer(context).serialize(...objects);
  }}

  import(jsonLdData: string | Record<string, unknown>): SemanticObject | SemanticObject[] {{
    const data = typeof jsonLdData === "string" ? JSON.parse(jsonLdData) : jsonLdData;

    const entries: Array<Record<string, unknown>> = Array.isArray(data)
      ? data
      : (data["@graph"] as Array<Record<string, unknown>>) || [data];

    const objectsById = new Map<string, SemanticObject>();
    const instances: SemanticObject[] = [];

    for (const entry of entries) {{
      const semanticId = entry["@id"] as string | undefined;
      const semanticType = entry["@type"] as string | undefined;
      if (!semanticId || !semanticType) continue;

      const Klass = SemanticObject.typeRegistry.get(semanticType);
      if (!Klass) continue;

      const obj = new Klass(semanticId) as SemanticObject;
      objectsById.set(semanticId, obj);
      instances.push(obj);
    }}

    for (const entry of entries) {{
      const semanticId = entry["@id"] as string | undefined;
      if (!semanticId) continue;
      const obj = objectsById.get(semanticId);
      if (!obj) continue;

      for (const [key, value] of Object.entries(entry)) {{
        if (key.startsWith("@")) continue;
        const propName = this.predicateToPropName(key);
        if (!(propName in obj)) continue;

        if (Array.isArray(value)) {{
          (obj as unknown as Record<string, unknown>)[propName] = value.map((v: unknown) =>
            typeof v === "string" && (v.startsWith("http") || v.startsWith("/"))
              ? (objectsById.get(v) || v)
              : v
          );
        }} else if (typeof value === "string" && (value.startsWith("http") || value.startsWith("/"))) {{
          (obj as unknown as Record<string, unknown>)[propName] = objectsById.get(value) || value;
        }} else {{
          (obj as unknown as Record<string, unknown>)[propName] = value;
        }}
      }}
    }}

    return instances.length === 1 ? instances[0] : instances;
  }}

{enum_methods}
{factory_methods}
  private async fetchContext(): Promise<Record<string, unknown>> {{
    const response = await fetch(this.contextUrl);
    if (!response.ok) {{
      throw new Error(`Failed to fetch context from ${{this.contextUrl}}: ${{response.status}}`);
    }}
    return await response.json() as Record<string, unknown>;
  }}

  private buildNestedHash(concepts: Record<string, unknown>): Record<string, unknown> {{
    const result: Record<string, unknown> = {{}};
    for (const [key, concept] of Object.entries(concepts)) {{
      const parts = key.split(/[_\\s]+/);
      let current = result;
      for (let i = 0; i < parts.length; i++) {{
        const normalized = parts[i].toLowerCase().replace(/[^a-z0-9]/g, "_");
        if (i === parts.length - 1) {{
          current[normalized] = concept;
        }} else {{
          (current[normalized] as Record<string, unknown>) = (current[normalized] as Record<string, unknown>) || {{}};
          current = current[normalized] as Record<string, unknown>;
        }}
      }}
    }}
    return result;
  }}

  private predicateToPropName(predicate: string): string {{
    let name = predicate.replace(/^dfc-b:/, "");
    if (name.startsWith("has")) {{
      name = name.slice(3);
    }}
    name = name.charAt(0).toLowerCase() + name.slice(1);
    return name;
  }}
}}
'''


def generate_model(class_name: str, class_data: dict, schema_data: dict) -> str:
    ts_name = to_ts_class_name(class_name)
    parent_raw = get_parent_ts_class(class_data)
    semantic_type = f"dfc-b:{class_name}"
    description = class_data.get('description', '').replace("'", "\\'")

    data_props = get_data_properties(class_name, schema_data)
    obj_props = get_object_properties(class_name, schema_data)

    # Collect own props (not inherited)
    own_data_props = [(s, d, o) for s, d, o in data_props if o == class_name]
    own_obj_props = [(s, d, o) for s, d, o in obj_props if o == class_name]
    all_own_props = own_data_props + own_obj_props

    # Collect all prop names for type (including inherited for the interface)
    all_data_prop_names = set()
    for s, d, o in data_props:
        all_data_prop_names.add(ts_property_name(s))
    all_obj_prop_names = set()
    for s, d, o in obj_props:
        all_obj_prop_names.add(ts_property_name(s))

    # Build imports
    imports = []
    imports.append(f'import {{ SemanticObject }} from "../core/SemanticObject.js";')
    if parent_raw != 'SemanticObject':
        imports.append(f'import {{ {parent_raw}, type {parent_raw}Params }} from "./{parent_raw}.js";')

    # Type-only imports for referenced classes in obj props
    referenced_classes = set()
    for slot_name, slot_data, owner in all_own_props:
        range_type = get_range_value(slot_data)
        if range_type in schema_data['classes']:
            rt = to_ts_class_name(range_type)
            if rt != parent_raw and rt != ts_name:
                referenced_classes.add(rt)
    for rc in sorted(referenced_classes):
        imports.append(f'import type {{ {rc} }} from "./{rc}.js";')

    imports_str = '\n'.join(imports)

    # Build params interface
    parent_interface = f'{parent_raw}Params' if parent_raw != 'SemanticObject' else ''
    ext = f' extends {parent_interface}' if parent_interface else ''
    interface_props = []
    for slot_name, slot_data, owner in all_own_props:
        prop_name = ts_property_name(slot_name)
        ts_type = ts_type_for_slot(slot_data, schema_data)
        is_collection = is_collection_property(slot_name, slot_data)
        if is_collection:
            interface_props.append(f'  {prop_name}?: {ts_type}[];')
        else:
            interface_props.append(f'  {prop_name}?: {ts_type};')
    interface_props_str = '\n'.join(interface_props)

    interface_block = f'''export interface {ts_name}Params{ext} {{
{interface_props_str}
}}
''' if interface_props else f'''export interface {ts_name}Params{ext} {{}}
'''

    # Build class properties and constructor
    class_props = []
    constructor_params = []
    constructor_body_self = []
    constructor_body_super_args = []
    registrations = []

    for slot_name, slot_data, owner in all_own_props:
        prop_name = ts_property_name(slot_name)
        ts_type = ts_type_for_slot(slot_data, schema_data)
        is_collection = is_collection_property(slot_name, slot_data)

        if is_collection:
            class_props.append(f'  {prop_name}?: {ts_type}[];')
        else:
            class_props.append(f'  {prop_name}?: {ts_type};')

        constructor_params.append(f'{prop_name}')
        constructor_body_self.append(f'    this.{prop_name} = params?.{prop_name};')

        # Registration predicate uses original slot name
        predicate = f'{semantic_type}:{slot_name}'
        registrations.append(f'    this.registerSemanticProperty("{predicate}", () => this.{prop_name});')

    if parent_raw == 'SemanticObject':
        constructor_body_super = '    super(semanticId);\n'
    else:
        constructor_body_super = '    super(semanticId, params);\n'

    class_props_str = '\n'.join(class_props)
    constructor_params_str = ', '.join(constructor_params)
    constructor_body_self_str = '\n'.join(constructor_body_self)
    registrations_str = '\n'.join(registrations)

    # Parent import path determination
    parent_import_path = f'../core/SemanticObject' if parent_raw == 'SemanticObject' else f'./{parent_raw}'

    constructor_block = f'''  constructor(
    semanticId: string,
    params?: {ts_name}Params,
  ) {{
{constructor_body_super}{constructor_body_self_str}
    this.semanticType = {ts_name}.SEMANTIC_TYPE;
{registrations_str}
  }}
''' if all_own_props else f'''  constructor(
    semanticId: string,
    params?: {ts_name}Params,
  ) {{
{constructor_body_super}    this.semanticType = {ts_name}.SEMANTIC_TYPE;
  }}
'''

    code = f'''// {description}
{imports_str}

{interface_block}export class {ts_name} extends {parent_raw} {{
  static get SEMANTIC_TYPE(): string {{
    return "{semantic_type}";
  }}

{class_props_str}

{constructor_block}  static {{
    SemanticObject.typeRegistry.set({ts_name}.SEMANTIC_TYPE, {ts_name});
  }}
}}
'''

    return code


def generate_main_entry_point(schema_data: dict) -> str:
    class_names = sorted(schema_data.get('classes', {}).keys())
    model_exports = []
    for cn in class_names:
        ts = to_ts_class_name(cn)
        if ts != 'SemanticObject':
            model_exports.append(f'export {{ {ts}, type {ts}Params }} from "./models/{ts}.js";')

    model_exports_str = '\n'.join(model_exports)

    return f'''export {{ SemanticObject }} from "./core/SemanticObject.js";
export {{ Connector }} from "./core/Connector.js";
export {{ JsonLdSerializer }} from "./core/JsonLdSerializer.js";
export {{ VocabularyLoader }} from "./core/VocabularyLoader.js";
{model_exports_str}
'''


def generate_models_index(schema_data: dict) -> str:
    class_names = sorted(schema_data.get('classes', {}).keys())
    exports = []
    for cn in class_names:
        ts = to_ts_class_name(cn)
        if ts != 'SemanticObject':
            exports.append(f'export {{ {ts}, type {ts}Params }} from "./{ts}.js";')
    return '\n'.join(exports) + '\n'


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    import argparse

    parser = argparse.ArgumentParser(description="Generate TypeScript connector from LinkML schema")
    parser.add_argument('--schema', default=None, help='Path to LinkML schema YAML file')
    parser.add_argument('--output', default=None, help='Output directory for TypeScript package')
    args = parser.parse_args()

    schema_paths = [
        args.schema,
        'src/dfc_business_linkml_v2_0.yaml',
        'src/dfc_business_linkml.yaml',
        '../src/dfc_business_linkml_v2_0.yaml',
        '../src/dfc_business_linkml.yaml',
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

    output_dir = Path(args.output) if args.output else Path("typescript-connector")
    src_dir = output_dir / 'src'

    # Only clean src/ directory, preserve static files (package.json, tsconfig.json, etc.)
    if src_dir.exists():
        import shutil
        shutil.rmtree(src_dir)

    src_dir.mkdir(parents=True, exist_ok=True)
    (src_dir / 'core').mkdir()
    (src_dir / 'models').mkdir()

    print(f"\nGenerating TypeScript connector in: {src_dir}/", file=sys.stderr)
    print(f"Classes: {len(schema_data['classes'])}", file=sys.stderr)
    print(f"Slots: {len(schema_data['slots'])}", file=sys.stderr)
    print(f"Enums: {len(schema_data['enums'])}", file=sys.stderr)

    print("\nGenerating core files...", file=sys.stderr)
    (src_dir / 'core' / 'SemanticObject.ts').write_text(generate_semantic_object_base())
    print("  - src/core/SemanticObject.ts", file=sys.stderr)

    (src_dir / 'core' / 'JsonLdSerializer.ts').write_text(generate_json_ld_serializer())
    print("  - src/core/JsonLdSerializer.ts", file=sys.stderr)

    (src_dir / 'core' / 'VocabularyLoader.ts').write_text(generate_vocabulary_loader(schema_data))
    print("  - src/core/VocabularyLoader.ts", file=sys.stderr)

    (src_dir / 'core' / 'Connector.ts').write_text(generate_connector_class(schema_data))
    print("  - src/core/Connector.ts", file=sys.stderr)

    print("\nGenerating model classes...", file=sys.stderr)
    model_count = 0
    for class_name, class_data in schema_data.get('classes', {}).items():
        ts_name = to_ts_class_name(class_name)
        if ts_name == 'SemanticObject':
            continue
        model_code = generate_model(class_name, class_data, schema_data)
        (src_dir / 'models' / f'{ts_name}.ts').write_text(model_code)
        model_count += 1
    print(f"  - {model_count} model files", file=sys.stderr)

    print("\nGenerating barrel exports...", file=sys.stderr)
    (src_dir / 'models' / 'index.ts').write_text(generate_models_index(schema_data))
    print("  - src/models/index.ts", file=sys.stderr)

    (src_dir / 'index.ts').write_text(generate_main_entry_point(schema_data))
    print("  - src/index.ts", file=sys.stderr)

    print(f"\nTypeScript connector generated in: {output_dir}/", file=sys.stderr)
    print(f"To build: cd {output_dir} && npm install && npm run build", file=sys.stderr)


if __name__ == '__main__':
    main()
