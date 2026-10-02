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
import textwrap
import yaml
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import cardinality  # noqa: E402


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


def predicate_for_slot(slot_name: str, slot_data: dict) -> str:
    """Compute the original JSON-LD predicate CURIE/URI for a slot.

    DFC business/technical ontology properties use the dfc-b/dfc-t prefixes;
    skos uses the skos prefix; other namespaces fall back to the full URI.
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
        # Relationship slot: at runtime the value may be a URI string, an
        # embedded object, or a resolved model instance.
        return f'{to_ts_class_name(range_type)} | string'
    elif range_type in ('float', 'decimal', 'double', 'integer', 'int', 'NonNegativeInteger', 'PositiveInteger'):
        return 'number'
    elif range_type in ('boolean', 'bool'):
        return 'boolean'
    elif range_type == 'string':
        return 'string'
    else:
        return 'string'


def ts_prop_type(ts_type: str, is_collection: bool) -> str:
    """Render a property type, parenthesizing unions inside collections."""
    if is_collection:
        return f'({ts_type})[]' if ' | ' in ts_type else f'{ts_type}[]'
    return ts_type


def is_collection_property(slot_name: str, slot_data: dict, class_usage: dict = None) -> bool:
    """True when the property must accept several values.

    Delegates to `scripts/cardinality.py` so the three generators cannot
    drift apart; see that module for the resolution order.
    """
    return cardinality.is_collection_property(slot_name, slot_data, class_usage)


# ---------------------------------------------------------------------------
# JSDoc emission
# ---------------------------------------------------------------------------
# jsr scores symbol documentation from JSDoc blocks, and the published docs
# on jsr.io are rendered from them. The DFC OWL carries descriptions for every
# class and slot, so the docs are generated from the schema rather than
# hand-written, and stay in step with regeneration.

def _jsdoc_escape(text: str) -> str:
    """Make a string safe to embed inside a /** */ block."""
    # A literal */ would close the comment early. OWL annotations arrive
    # verbatim, so also drop control characters. Spaces are printable and
    # must be kept.
    cleaned = ''.join(ch for ch in text if ch.isprintable())
    return cleaned.replace('*/', '*\\/').rstrip()


def _wrap_jsdoc(lines: list[str], indent: str = '') -> str:
    """Render a JSDoc block, or an empty string when there is nothing to say.

    Entries are word-wrapped so generated files stay readable. A wrapped
    entry keeps its continuations aligned under the first line.
    """
    if not lines:
        return ''

    star = f'{indent} *'
    width = max(76 - len(indent) - 3, 24)
    body: list[str] = []
    for entry in lines:
        if not entry.strip():
            body.append(star)
            continue
        wrapped = textwrap.wrap(
            entry,
            width=width,
            break_long_words=False,
            break_on_hyphens=False,
        ) or [entry]
        body.append(f'{star} {wrapped[0]}')
        for cont in wrapped[1:]:
            body.append(f'{star}   {cont}')

    # Collapse runs of blank comment lines.
    collapsed: list[str] = []
    for line in body:
        if line == star and collapsed and collapsed[-1] == star:
            continue
        collapsed.append(line)
    while collapsed and collapsed[-1] == star:
        collapsed.pop()

    if not collapsed:
        return ''

    return f'{indent}/**\n' + '\n'.join(collapsed) + f'\n{indent} */\n'


def _meaningful_description(desc: str, name: str) -> str:
    """Drop descriptions that only restate the name or the source.

    The DFC OWL annotates every class and slot, but for many the annotation
    is a provenance note ("Class from DFC Business Ontology: #Address",
    "Data property from OWL: byday") rather than a definition. The generated
    docs already state the DFC type predicate, hierarchy, and properties, so
    repeating that note adds nothing.
    """
    cleaned = _jsdoc_escape(desc.strip())
    if not cleaned:
        return ''
    tail = cleaned.rsplit(':', 1)[-1].strip().lstrip('#').lower()
    if tail == name.lower():
        return ''
    if cleaned.lower().startswith(('class from ', 'data property from ',
                                    'object property from ', 'property from ')):
        return ''
    return cleaned


def _slot_doc_lines(slot_name: str, slot_data: dict) -> list[str]:
    """JSDoc lines for one property, carrying the predicate it serializes to."""
    lines: list[str] = []
    desc = _meaningful_description(str(slot_data.get('description', '')), slot_name)
    if desc:
        lines.append(desc)
        lines.append('')

    lines.append(f'Serializes as `{predicate_for_slot(slot_name, slot_data)}`.')
    return lines


def _factory_doc_lines(class_name: str, class_data: dict, schema_data: dict, ts_name: str) -> str:
    """Body of the JSDoc on a generated `createX` factory method."""
    desc = _meaningful_description(str(class_data.get('description', '')), class_name)

    hierarchy = get_class_hierarchy(class_name, schema_data['classes'])
    own = [
        s for s, _d, o in get_all_slots_for_class(class_name, schema_data)
        if o == class_name
    ]
    prop_names = [ts_property_name(s) for s in own]

    parts: list[str] = []
    if desc:
        parts.append(desc)
    parts.append(f'Serialized as `@type: dfc-b:{class_name}`.')
    if len(hierarchy) > 1:
        parts.append('Class hierarchy: ' + ' -> '.join(f'`{h}`' for h in hierarchy) + '.')
    if prop_names:
        parts.append(f'Properties: {", ".join(prop_names)}.')

    wrapped = textwrap.wrap(
        ' '.join(parts),
        width=69,
        break_long_words=False,
        break_on_hyphens=False,
    )
    return '\n'.join(f'   * {line}' for line in wrapped) + '\n   *'


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
    # Explicit annotations in the public API are required by the jsr.io
    # registry's "slow types" check (publishing path), so they are part of
    # the contract, not a style choice.
    return '''/**
 * Base class for every DFC model object.
 *
 * A `SemanticObject` carries a stable `semanticId` and a set of predicates
 * that are serialized into JSON-LD. Subclasses register their properties in
 * the constructor via {@link registerSemanticProperty}, mapping an original
 * DFC predicate (for example `dfc-b:name`) to a getter for the property.
 *
 * Every generated DFC class (`Organization`, `SuppliedProduct`, `Price`, ...)
 * extends this, directly or through its ancestors.
 *
 * @example
 * ```ts
 * const org = c.createOrganization("https://example.org/org/1", { name: "Acme" });
 * org.getRegisteredPredicates(); // ["dfc-b:name"]
 * org.toJsonLd();                 // { "@id": ..., "@type": "dfc-b:Organization", ... }
 * ```
 */
export class SemanticObject {
  /** Maps a DFC type predicate to its class, populated as model modules load. */
  static typeRegistry: Map<string, typeof SemanticObject> = new Map();

  /** The DFC type predicate for this class, e.g. `dfc-b:Organization`. */
  static get SEMANTIC_TYPE(): string {
    return "";
  }

  /** The object's stable identity, serialized as `@id`. */
  semanticId: string;
  /** The DFC type predicate, serialized as `@type`. */
  semanticType: string = "";
  private semanticProperties = new Map<string, () => unknown>();

  constructor(semanticId: string) {
    this.semanticId = semanticId;
  }

  /**
   * Registers a property so it is emitted on export.
   *
   * @param predicate Original DFC predicate, e.g. `dfc-b:vatNumber`.
   * @param getter Returns the current value; called at export time.
   */
  registerSemanticProperty(predicate: string, getter: () => unknown): void {
    this.semanticProperties.set(predicate, getter);
  }

  /** All DFC predicates registered on this object. */
  getRegisteredPredicates(): string[] {
    return [...this.semanticProperties.keys()];
  }

  /** The current value of one registered predicate, or `undefined`. */
  getRegisteredValue(predicate: string): unknown {
    const getter = this.semanticProperties.get(predicate);
    return getter ? getter() : undefined;
  }

  /**
   * Serializes this object to a JSON-LD node.
   *
   * Nested objects are emitted as `{"@id": ...}` references. A sequence of
   * exactly one is collapsed to a scalar, matching JSON-LD compaction.
   *
   * @param context Optional `@context` to attach to the node.
   */
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
          v instanceof SemanticObject ? { "@id": v.semanticId } : v
        );
      } else if (value instanceof SemanticObject) {
        result[predicate] = { "@id": value.semanticId };
      } else {
        result[predicate] = value;
      }
    }

    return result;
  }

  /** Serializes this object to a pretty-printed JSON-LD string. */
  toJson(context?: unknown): string {
    return JSON.stringify(this.toJsonLd(context), null, 2);
  }
}
'''


def generate_json_ld_serializer() -> str:
    return '''import { SemanticObject } from "./SemanticObject.js";

/**
 * Combines one or more {@link SemanticObject} instances into a JSON-LD
 * document, running the `jsonld` compaction pass.
 *
 * A single object is emitted as a bare node; two or more are wrapped in a
 * `@graph` array. `@context` is always emitted as a URL string rather than
 * an inline object, so documents stay compact and shareable.
 *
 * The {@link Connector} uses this internally; you rarely need it directly.
 */
export class JsonLdSerializer {
  private context: unknown;

  /** @param context The `@context` to attach, normally a context URL string. */
  constructor(context?: unknown) {
    this.context = context;
  }

  /**
   * Serializes objects to a JSON-LD document.
   *
   * @returns A bare node for one object, otherwise a `@graph` document.
   */
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

    return f'''import bundledFacet from "../taxonomies/facet.js";
import bundledMeasure from "../taxonomies/measure.js";
import bundledProductType from "../taxonomies/product_type.js";
import bundledScope from "../taxonomies/scope.js";
import bundledVocabularyTerm from "../taxonomies/vocabulary_term.js";

/**
 * Loads the SKOS controlled vocabularies that DFC models refer to: facets,
 * measures, product types, scopes, and vocabulary terms.
 *
 * The bundled v2.0.0 vocabularies ship with the package and are loaded on
 * construction, so construct, export, and import all work offline. Loading a
 * different taxonomy version is opt-in via {{@link VocabularyLoader.load}}.
 *
 * Most callers use {{@link Connector}} instead, which wraps this loader.
 */
export class VocabularyLoader {{
  private static readonly BUNDLED: Record<string, Record<string, unknown>> = {{
    Facet: bundledFacet as Record<string, unknown>,
    Measure: bundledMeasure as Record<string, unknown>,
    ProductType: bundledProductType as Record<string, unknown>,
    Scope: bundledScope as Record<string, unknown>,
    VocabularyTerm: bundledVocabularyTerm as Record<string, unknown>,
  }};

  private taxonomyVersion: string;
  private ontologyVersion: string;
  private vocabularies: Map<string, Record<string, unknown>>;

  // Bundled v2.0.0 vocabularies are loaded unconditionally by design — the
  // connector ships only that version offline. Callers requesting a different
  // taxonomyVersion must override via loadBundled/load.
  /**
   * @param taxonomyVersion Version of the SKOS taxonomies to load.
   * @param ontologyVersion Version of the DFC ontology whose context to use.
   */
  constructor(taxonomyVersion: string = "{taxonomy_version}", ontologyVersion: string = "{taxonomy_version}") {{
    this.taxonomyVersion = taxonomyVersion;
    this.ontologyVersion = ontologyVersion;
    this.vocabularies = new Map();
    this.loadBundled();
  }}

  /** Loads the bundled vocabularies, replacing any currently loaded data. */
  loadBundled(): this {{
    for (const [name, data] of Object.entries(VocabularyLoader.BUNDLED)) {{
      this.load(name, data);
    }}
    return this;
  }}

  /** The raw bundled data for one vocabulary, or an empty object. */
  bundledData(name: string): Record<string, unknown> {{
    return VocabularyLoader.BUNDLED[name] || {{}};
  }}

  /** Base URL of the SKOS taxonomies for the loaded taxonomy version. */
  get taxonomyBaseUrl(): string {{
    return `https://w3id.org/dfc/taxonomies/v${{this.taxonomyVersion}}`;
  }}

  /**
   * Loads a vocabulary from SKOS JSON-LD, keeping every `skos:Concept` found.
   *
   * @param name Vocabulary name, e.g. `Facet`.
   * @param jsonData A node, an array of nodes, or a document with `@graph`.
   */
  load(name: string, jsonData: Record<string, unknown>): this {{
    const concepts: Record<string, unknown> = {{}};
    const sources = Array.isArray(jsonData) ? jsonData : [jsonData];
    for (const source of sources) {{
      const graph = source["@graph"];
      if (!Array.isArray(graph)) continue;
      for (const entry of graph) {{
        if (typeof entry !== "object" || entry === null) continue;
        const entryObj = entry as Record<string, unknown>;
        const types = entryObj["@type"];
        if (!Array.isArray(types)) continue;
        const isConcept = types.includes("skos:Concept") ||
                          types.includes("http://www.w3.org/2004/02/skos/core#Concept");
        if (!isConcept) continue;
        const notation = this.extractConceptKey(entryObj);
        if (notation !== undefined) {{
          concepts[notation] = entryObj;
        }}
      }}
    }}
    this.vocabularies.set(name, concepts);
    return this;
  }}

  private extractConceptKey(entry: Record<string, unknown>): string | undefined {{
    const candidates = [
      "skos:notation",
      "http://www.w3.org/2004/02/skos/core#notation",
      "skos:prefLabel",
      "http://www.w3.org/2004/02/skos/core#prefLabel",
    ];
    for (const field of candidates) {{
      const value = entry[field];
      if (value === undefined || value === null) continue;
      if (typeof value === "string") return value;
      if (Array.isArray(value)) {{
        for (const item of value) {{
          if (typeof item === "string") return item;
          if (typeof item === "object" && item !== null) {{
            const wrapped = (item as Record<string, unknown>)["@value"];
            if (typeof wrapped === "string") return wrapped;
          }}
        }}
      }}
    }}
    return undefined;
  }}

  async loadFromUrl(name: string): Promise<this> {{
    const url = `${{this.taxonomyBaseUrl}}/${{name}}.json`;
    const response = await fetch(url, {{
      headers: {{ "dfc-version": this.ontologyVersion }},
    }});
    if (!response.ok) {{
      throw new Error(`Failed to fetch taxonomy from ${{url}}: ${{response.status}}`);
    }}
    const jsonData = await response.json() as Record<string, unknown>;
    const key = VocabularyLoader.URL_TO_KEY[name.toLowerCase()] || name;
    return this.load(key, jsonData);
  }}

  private static readonly URL_TO_KEY: Record<string, string> = {{
    facets: "Facet",
    measures: "Measure",
    producttypes: "ProductType",
    scopes: "Scope",
    vocabularyterms: "VocabularyTerm",
  }};

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

    # Slots the ontology restricts to at least one value, per class, with the
    # nearest ancestor's declaration winning. `scripts/cardinality.py` owns the
    # walk so this cannot drift from the shape resolution.
    required_map = ''
    rows = []
    for cn in class_names:
        required = sorted(cardinality.required_slots(cn, classes, schema_data['slots']))
        if required:
            rows.append(
                f'  "dfc-b:{cn}": '
                f'{json.dumps([ts_property_name(s) for s in required])},'
            )
    if rows:
        required_map = (
            '/**\n'
            ' * Properties the ontology requires, per semantic type.\n'
            ' *\n'
            ' * Every entry comes from an `rdfs:subClassOf` restriction with\n'
            ' * `minimum_cardinality 1` -- all 42 DFC restrictions are singletons.\n'
            ' * Keyed by the semantic type and holding TS property names.\n'
            ' * Generated from the schema; do not edit.\n'
            ' */\n'
            'const REQUIRED_SLOTS: Record<string, string[]> = {\n'
            + '\n'.join(rows)
            + '\n};\n'
        )

    # Per-slot names, precomputed: the generated code cannot call back into the
    # generator, so `validate()` reads these instead of deriving them at runtime.
    required_slot_data = ''
    all_required = sorted({
        slot
        for cn in class_names
        for slot in cardinality.required_slots(cn, classes, schema_data['slots'])
    })
    if all_required:
        rows = []
        for s in all_required:
            sd = schema_data['slots'][s]
            prop = ts_property_name(s)
            rows.append(
                f'  "{prop}": {{ slot: "{s}", predicate: "{predicate_for_slot(s, sd)}" }},'
            )
        required_slot_data = (
            '/**\n'
            ' * Slot, property and predicate for every required slot.\n'
            ' * Generated from the schema; do not edit.\n'
            ' */\n'
            'const REQUIRED_SLOT_DATA: Record<string, '
            '{ slot: string; predicate: string }> = {\n'
            + '\n'.join(rows)
            + '\n};\n'
        )

    issue_type = '''/**
 * A property the ontology requires that an object does not carry.
 *
 * Returned by {@link Connector.validate}. Absent values are reported, never
 * thrown, so a caller can decide how strict to be.
 */
export interface ValidationIssue {
  /** The object's `@id`. */
  semanticId: string;
  /** The object's DFC semantic type, e.g. `dfc-b:Order`. */
  semanticType: string;
  /** The missing slot, in LinkML/OWL naming, e.g. `concerns`. */
  slot: string;
  /** The predicate the slot serialises to, e.g. `dfc-b:concerns`. */
  predicate: string;
}
'''

    # Type imports for factory method params
    type_imports = []
    for cn in class_names:
        ts = to_ts_class_name(cn)
        if ts != 'SemanticObject':
            type_imports.append(f"import type {{ {ts}Params }} from \"../models/{ts}.js\";")

    type_imports_str = '\n'.join(type_imports)

    # Factory methods accept both ours positional form
    # `createX(semanticId, params)` and the original object form
    # `createX({ semanticId, ...params })` (migration aid).
    factory_methods = ''
    for cn in class_names:
        ts = to_ts_class_name(cn)
        if ts == 'SemanticObject':
            continue
        factory_methods += f'''
  /**
   * Creates a {{@link {ts}}}.
   *
{_factory_doc_lines(cn, classes.get(cn, {}), schema_data, ts)}
   * @param semanticIdOrArgs The object's identity, or an object whose
   *   `semanticId` is the identity and whose other keys are the parameters.
   * @param params Properties for the object, when passing the identity first.
   */
  create{ts}(
    semanticIdOrArgs: string | ({{ semanticId: string }} & {ts}Params),
    params?: {ts}Params,
  ): {ts} {{
    if (typeof semanticIdOrArgs === "string") {{
      return new {ts}(semanticIdOrArgs, params);
    }}
    const {{ semanticId, ...rest }} = semanticIdOrArgs;
    return new {ts}(semanticId, rest as {ts}Params);
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

    # Build reverse map: predicate -> propName for every slot
    predicate_map = {}
    for slot_name, slot_data in schema_data.get('slots', {}).items():
        predicate_map[predicate_for_slot(slot_name, slot_data)] = ts_property_name(slot_name)
    predicate_map_str = '\n'.join(f'    "{pred}": "{prop}",' for pred, prop in sorted(predicate_map.items()))

    # Enterprise->Organization reflects the DFC v2.0 rename; schemas where
    # Enterprise owns its slots (v1.16) get no alias (see _enterprise_alias).
    type_aliases_str = '\n'.join(f'    "{pred}": "{target}",' for pred, target in sorted(_enterprise_alias(schema_data).items()))

    return f'''import {{ SemanticObject }} from "./SemanticObject.js";
import {{ VocabularyLoader }} from "./VocabularyLoader.js";
import {{ JsonLdSerializer }} from "./JsonLdSerializer.js";
import jsonld from "jsonld";
import bundledContextV200 from "../context/context_2.0.0.js";
{model_imports_str}
{type_imports_str}

{issue_type}
{required_map}
{required_slot_data}
/**
 * Entry point for reading and writing DFC data.
 *
 * A `Connector` creates DFC model objects, exports them to JSON-LD, and
 * imports JSON-LD back into model objects. It carries the ontology and
 * taxonomy versions and owns the controlled-vocabulary loading, so the
 * bundled v2.0.0 data is available offline with no network access.
 *
 * Every DFC class has a `createX` factory. Factories accept either the
 * positional form `createX(semanticId, params)` or the object form
 * `createX({{ semanticId, ...params }})`, so code written against the
 * original DFC connectors migrates with minimal edits.
 *
 * @example
 * ```ts
 * const c = new Connector();
 *
 * const org = c.createOrganization("https://example.com/org/1", {{
 *   name: "Acme Farms",
 * }});
 *
 * const jsonld = await c.export(org);
 * const [back] = c.import(jsonld);
 * ```
 */
export class Connector {{
  static readonly ONTOLOGY_BASE_URL = "https://w3id.org/dfc/ontology";
  static readonly TAXONOMY_BASE_URL = "https://w3id.org/dfc/taxonomies";

  /** Maps each original DFC predicate to the property name used here. */
  static readonly PREDICATE_MAP: Record<string, string> = {{
{predicate_map_str}
  }};

  /**
   * Maps legacy DFC type predicates onto their current names.
   *
   * DFC v2.0 renamed `Enterprise` to `Organization`; documents using the old
   * name still import cleanly.
   */
  static readonly TYPE_ALIASES: Record<string, string> = {{
{type_aliases_str}
  }};

  private static defaultContextUrl: string = "https://w3id.org/dfc/ontology/v{ontology_version}/context/context_{ontology_version}.json";

  /** The `@context` URL used when none is supplied on export. */
  static getDefaultContextUrl(): string {{
    return Connector.defaultContextUrl;
  }}

  /** Overrides the default `@context` URL for this process. */
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

  // Bundled v2.0.0 taxonomies are loaded unconditionally by design — the
  // connector ships only that version offline. Callers requesting a different
  // taxonomyVersion must override via load* methods.
  constructor(params: {{ ontologyVersion?: string; taxonomyVersion?: string }} = {{}}) {{
    this.ontologyVersion = params.ontologyVersion ?? "{ontology_version}";
    this.taxonomyVersion = params.taxonomyVersion ?? "{taxonomy_version}";
    this.vocabLoader = new VocabularyLoader(this.taxonomyVersion, this.ontologyVersion);
    this.loadBundledTaxonomies();
  }}

  loadBundledTaxonomies(): this {{
    this.vocabLoader.loadBundled();
    this.facets = this.buildNestedHash(this.vocabLoader.vocabulary("Facet"));
    this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
    this.productTypes = this.buildNestedHash(this.vocabLoader.vocabulary("ProductType"));
    this.otherVocabularies.set("Facet", this.facets);
    this.otherVocabularies.set("Measure", this.measures);
    this.otherVocabularies.set("ProductType", this.productTypes);
    this.otherVocabularies.set("Scope", this.buildNestedHash(this.vocabLoader.vocabulary("Scope")));
    this.otherVocabularies.set("VocabularyTerm", this.buildNestedHash(this.vocabLoader.vocabulary("VocabularyTerm")));
    return this;
  }}

  /** The `@context` URL for this connector's ontology version. */
  get contextUrl(): string {{
    return `${{Connector.ONTOLOGY_BASE_URL}}/v${{this.ontologyVersion}}/context/context_${{this.ontologyVersion}}.json`;
  }}

  /**
   * The JSON-LD context used for compaction.
   *
   * Prefers the context bundled with the package, so this resolves without
   * network access for the default ontology version.
   */
  async getContext(): Promise<Record<string, unknown>> {{
    if (!this.contextCache) {{
      const bundled = this.loadBundledContext();
      if (bundled) {{
        this.contextCache = bundled;
      }} else {{
        this.contextCache = await this.fetchContext();
      }}
    }}
    return this.contextCache;
  }}

  // Returns the JSON-LD context shipped with the connector for the current
  // ontology version, or null so the caller falls back to the network.
  loadBundledContext(): Record<string, unknown> | null {{
    if (this.ontologyVersion === "2.0.0") {{
      return bundledContextV200 as unknown as Record<string, unknown>;
    }}
    return null;
  }}

  /** Replaces the `Facet` vocabulary from SKOS JSON-LD data. */
  loadFacets(jsonData: Record<string, unknown>): this {{
    this.vocabLoader.load("Facet", jsonData);
    this.facets = this.buildNestedHash(this.vocabLoader.vocabulary("Facet"));
    this.otherVocabularies.set("Facet", this.facets);
    return this;
  }}

  /** Replaces the `Measure` vocabulary from SKOS JSON-LD data. */
  loadMeasures(jsonData: Record<string, unknown>): this {{
    this.vocabLoader.load("Measure", jsonData);
    this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
    this.otherVocabularies.set("Measure", this.measures);
    return this;
  }}

  /** Replaces the `ProductType` vocabulary from SKOS JSON-LD data. */
  loadProductTypes(jsonData: Record<string, unknown>): this {{
    this.vocabLoader.load("ProductType", jsonData);
    this.productTypes = this.buildNestedHash(this.vocabLoader.vocabulary("ProductType"));
    this.otherVocabularies.set("ProductType", this.productTypes);
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
    this.otherVocabularies.set("Facet", this.facets);
    return this;
  }}

  async loadMeasuresFromUrl(): Promise<this> {{
    await this.vocabLoader.loadFromUrl("measures");
    this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
    this.otherVocabularies.set("Measure", this.measures);
    return this;
  }}

  async loadProductTypesFromUrl(): Promise<this> {{
    await this.vocabLoader.loadFromUrl("productTypes");
    this.productTypes = this.buildNestedHash(this.vocabLoader.vocabulary("ProductType"));
    this.otherVocabularies.set("ProductType", this.productTypes);
    return this;
  }}

  /**
   * Serializes objects to a compacted JSON-LD document.
   *
   * Predicates are emitted in their original short form (`dfc-b:name`, not
   * `dfc-b:Class:snake_case`) and `@context` is written as a URL string, so
   * output stays compact and directly comparable with the original DFC
   * connectors. One object produces a bare node; several produce a `@graph`.
   *
   * @param objects The objects to serialize. All reachable objects should be
   *   passed so references resolve.
   * @returns A pretty-printed JSON-LD string.
   */
  async export(...objects: SemanticObject[]): Promise<string> {{
    let context: Record<string, unknown> | undefined;
    try {{
      context = await this.getContext();
    }} catch {{
      // Context fetch failed — export without compaction, but keep the
      // context URL so CURIE predicates stay expandable.
      const fallback = new JsonLdSerializer(undefined).serialize(...objects) as Record<string, unknown>;
      fallback["@context"] = this.contextUrl;
      return JSON.stringify(fallback, null, 2);
    }}
    const expanded: Record<string, unknown> = new JsonLdSerializer(context).serialize(...objects) as Record<string, unknown>;
    const compacted = await (jsonld.compact(expanded, context as any) as unknown as Promise<Record<string, unknown>>);
    const output = compacted as Record<string, unknown>;
    output["@context"] = this.contextUrl;
    return JSON.stringify(output, null, 2);
  }}

  /**
   * Reads a JSON-LD document into DFC model objects.
   *
   * Accepts either a JSON string or an already-parsed document, in any
   * `@graph` form. Legacy type names are mapped through
   * {{@link Connector.TYPE_ALIASES}} and predicates through
   * {{@link Connector.PREDICATE_MAP}}, so data written against the original
   * DFC connectors loads without rewriting. The shape of each property is
   * preserved: a single reference stays a scalar.
   *
   * @returns The decoded objects, always an array, even for one entry.
   */
  import(jsonLdData: string | Record<string, unknown>): SemanticObject[] {{
    const data = typeof jsonLdData === "string" ? JSON.parse(jsonLdData) : jsonLdData;

    const entries: Array<Record<string, unknown>> = Array.isArray(data)
      ? data
      : (data["@graph"] as Array<Record<string, unknown>>) || [data];

    const objectsById = new Map<string, SemanticObject>();
    const instances: SemanticObject[] = [];

    for (const entry of entries) {{
      const semanticId = entry["@id"] as string | undefined;
      const rawType = entry["@type"];
      const semanticType = Array.isArray(rawType)
        ? (rawType.find((t: unknown) => typeof t === "string" && !t.startsWith("@")) as string | undefined)
        : (rawType as string | undefined);
      if (!semanticId || !semanticType) continue;

      const Klass = SemanticObject.typeRegistry.get(
        Connector.TYPE_ALIASES[semanticType] ?? semanticType
      ) as
        new (semanticId: string, params?: Record<string, unknown>) => SemanticObject;
      if (!Klass) continue;

      const entryParams: Record<string, unknown> = {{}};
      for (const [key, value] of Object.entries(entry)) {{
        if (key.startsWith("@")) continue;
        const propName = this.predicateToPropName(key);
        entryParams[propName] = value;
      }}

      const obj = new Klass(semanticId, entryParams) as SemanticObject;
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
            this.resolveReference(v, objectsById)
          );
        }} else if (typeof value === "object" && value !== null && "@id" in value) {{
          (obj as unknown as Record<string, unknown>)[propName] = this.resolveReference(value, objectsById);
        }} else if (typeof value === "string" && (value.startsWith("http") || value.startsWith("/") || value.startsWith("_:"))) {{
          (obj as unknown as Record<string, unknown>)[propName] = objectsById.get(value) || value;
        }}
      }}
    }}

    return instances;
  }}

  private resolveReference(value: unknown, objectsById: Map<string, SemanticObject>): unknown {{
    if (typeof value === "string" && (value.startsWith("http") || value.startsWith("/") || value.startsWith("_:"))) {{
      return objectsById.get(value) || value;
    }}
    if (typeof value === "object" && value !== null && "@id" in value) {{
      return objectsById.get((value as Record<string, unknown>)["@id"] as string) || value;
    }}
    return value;
  }}

{enum_methods}
{factory_methods}
  /**
   * Reports properties the ontology requires and this object does not carry.
   *
   * Deliberately not a constructor check. A data-plane connector has to accept
   * partially built objects -- you set the identifier first and fill in the
   * rest later -- and several DFC restrictions are heavy enough that enforcing
   * them would make ordinary documents unusable (every `Organization` would
   * need a `hasMainContact`, every `SuppliedProduct` a `totalTheoriticalStock`).
   * `docs/concepts/cardinality.md` explains where the constraint data comes
   * from and why it is opt-in.
   *
   * @param objects One or more objects to check.
   * @returns One entry per missing required property, empty when all are present.
   */
  validate(...objects: SemanticObject[]): ValidationIssue[] {{
    const issues: ValidationIssue[] = [];
    for (const object of objects) {{
      const required = REQUIRED_SLOTS[object.semanticType] ?? [];
      for (const property of required) {{
        const spec = REQUIRED_SLOT_DATA[property];
        const value = (object as unknown as Record<string, unknown>)[property];
        if (value === undefined || value === null) {{
          issues.push({{
            semanticId: object.semanticId,
            semanticType: object.semanticType,
            slot: spec.slot,
            predicate: spec.predicate,
          }});
        }}
      }}
    }}
    return issues;
  }}

  private async fetchContext(): Promise<Record<string, unknown>> {{
    const response = await fetch(this.contextUrl, {{
      headers: {{ "dfc-version": this.ontologyVersion }},
    }});
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
    const mapped = Connector.PREDICATE_MAP[predicate];
    if (mapped !== undefined) return mapped;
    // Fallback: extract the local name from any CURIE or URI
    let name = predicate;
    const hashIndex = name.lastIndexOf("#");
    if (hashIndex !== -1) {{
      name = name.slice(hashIndex + 1);
    }} else {{
      const colonIndex = name.lastIndexOf(":");
      if (colonIndex !== -1) {{
        name = name.slice(colonIndex + 1);
      }}
    }}
    name = name.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
    name = name.charAt(0).toLowerCase() + name.slice(1);
    return name;
  }}
}}
'''


def generate_model(class_name: str, class_data: dict, schema_data: dict) -> str:
    ts_name = to_ts_class_name(class_name)
    # Parent comes from the (possibly overridden) hierarchy so slot
    # inheritance and the extends clause always agree.
    hierarchy = get_class_hierarchy(class_name, schema_data['classes'])
    if len(hierarchy) > 1:
        parent_raw = to_ts_class_name(hierarchy[-2])
    else:
        parent_raw = 'SemanticObject'
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
        ts_type = ts_prop_type(
            ts_type_for_slot(slot_data, schema_data),
            is_collection_property(slot_name, slot_data, cardinality.usage_for(schema_data, owner)),
        )
        doc = _wrap_jsdoc(_slot_doc_lines(slot_name, slot_data), '  ')
        interface_props.append(f'{doc}  {prop_name}?: {ts_type};')
    interface_props_str = '\n'.join(interface_props)

    # JSDoc for the params interface. The interface members carry the
    # per-slot docs; this covers the interface symbol itself.
    own_prop_names = [ts_property_name(s) for s, _d, _o in all_own_props]
    if own_prop_names:
        props_preview = ', '.join(own_prop_names)
        params_doc = _wrap_jsdoc([
            f'Constructor parameters for {{@link {ts_name}}}.',
            '',
            f'Own DFC properties: {props_preview}.',
            '',
            f'Inherited parameters come from {{@link {parent_raw}Params}}.' if ext else '',
        ])
    else:
        params_doc = _wrap_jsdoc([
            f'Constructor parameters for {{@link {ts_name}}}.',
        ])
    params_doc = params_doc.rstrip('\n') + '\n'

    # JSDoc for the class itself: what it is in DFC terms, its predicate, its
    # place in the hierarchy, and the properties it adds.
    class_doc_lines: list[str] = []
    desc = _meaningful_description(description, class_name)
    if desc:
        class_doc_lines.append(desc)
        class_doc_lines.append('')
    class_doc_lines.append(f'A DFC `{semantic_type}`, serialized with `@type: {semantic_type}`.')
    if len(hierarchy) > 1:
        chain = ' -> '.join(f'`{h}`' for h in hierarchy)
        class_doc_lines.append(f'Class hierarchy: {chain}.')
    else:
        class_doc_lines.append('Root of its hierarchy; extends the connector `SemanticObject` base.')
    if own_prop_names:
        class_doc_lines.append(
            f'Own DFC properties: {", ".join(own_prop_names)}.'
        )
    class_doc = _wrap_jsdoc(class_doc_lines)

    interface_block = f'''{params_doc}export interface {ts_name}Params{ext} {{
{interface_props_str}
}}
''' if interface_props else f'''{params_doc}export interface {ts_name}Params{ext} {{}}
'''

    # Build class properties and constructor
    class_props = []
    constructor_params = []
    constructor_body_self = []
    constructor_body_super_args = []
    registrations = []

    for slot_name, slot_data, owner in all_own_props:
        prop_name = ts_property_name(slot_name)
        ts_type = ts_prop_type(
            ts_type_for_slot(slot_data, schema_data),
            is_collection_property(slot_name, slot_data, cardinality.usage_for(schema_data, owner)),
        )
        class_props.append(
            f'{_wrap_jsdoc(_slot_doc_lines(slot_name, slot_data), "  ")}'
            f'  {prop_name}?: {ts_type};'
        )

        constructor_params.append(f'{prop_name}')
        constructor_body_self.append(f'    this.{prop_name} = params?.{prop_name};')

        # Registration predicate uses the original OWL predicate CURIE
        predicate = predicate_for_slot(slot_name, slot_data)
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

    code = f'''{imports_str}

{interface_block}
{class_doc}export class {ts_name} extends {parent_raw} {{
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

    output_dir = Path(args.output) if args.output else Path("typescript-connector")
    src_dir = output_dir / 'src'

    # Preserve bundled context/taxonomy files (src/context/, src/taxonomies/)
    # across regeneration. They are hand-maintained SKOS exports / JSON-LD
    # contexts, not produced from the LinkML schema, but generated core files
    # import them at build time.
    preserved_bundled = {}
    if src_dir.exists():
        for sub in ('context', 'taxonomies'):
            base = src_dir / sub
            if base.exists():
                for f in base.glob('*'):
                    if f.is_file():
                        rel = f.relative_to(src_dir)
                        preserved_bundled[str(rel)] = f.read_text(encoding='utf-8')

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

    print("\nRestoring bundled files...", file=sys.stderr)
    if preserved_bundled:
        for rel, content in sorted(preserved_bundled.items()):
            target = src_dir / rel
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(content, encoding='utf-8')
        print(f"  - {len(preserved_bundled)} bundled files preserved (context + taxonomies)", file=sys.stderr)

    print(f"\nTypeScript connector generated in: {output_dir}/", file=sys.stderr)
    print(f"To build: cd {output_dir} && npm install && npm run build", file=sys.stderr)


if __name__ == '__main__':
    main()
