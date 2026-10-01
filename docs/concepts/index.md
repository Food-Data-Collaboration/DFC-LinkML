# Concepts

Explanation: how DFC data actually works, and why the connectors behave the
way they do. Read these when a tutorial told you *what* to do and you want to
know *why*.

## Pages

| Page | Answers |
|---|---|
| [Identifiers](identifiers.md) | What counts as an `@id`, what survives a round trip, what breaks references |
| [Relationships](relationships.md) | How object properties become JSON-LD links, and the single-value shape rule |
| [Context and versioning](context-and-versioning.md) | What a `@context` does, why it is a URL, how ontology and taxonomy versions differ |
| [Vocabularies](vocabularies.md) | Where controlled terms come from, why they are not in the schema |
| [Validation](validation.md) | The four levels of "valid", which one actually ships, what the connectors do not reject |

## How this fits together

```
tutorials  (docs/getting-started/)     what to do
    ↓ links into
reference  (docs/reference/model/)      what exists -- generated from the schema
    ↓ explained by
concepts   (this directory)             why it works this way
```

Reference is generated, so it cannot drift from the schema. These pages are
written, because the reasoning is not in the schema.

## The short version of each

**Identifiers** are yours. The connectors never generate, rewrite, or validate
one, which is deliberate: what counts as a valid identifier depends on your
data graph, not on the identifier alone.

**Relationships** become links by `@id`, never inline copies. A single-valued
reference serialises as a scalar even when you set a one-element array — that
is JSON-LD compaction behaviour, and all three connectors match it.

**Context** binds terms to meanings and is emitted as a URL, bundled for
v2.0.0 so everything works offline. Ontology and taxonomy versions are
independent because they are versioned separately upstream.

**Vocabularies** are five external SKOS taxonomies, bundled but never
enforced. A concept CURIE that does not exist is still just a string that
exports cleanly.

**Validation** — only SHACL shapes ship. The connectors preserve and
normalise, they do not reject, and they drop unknown terms. If that matters
to you, know it before you round-trip a document with your own predicates in
it.
