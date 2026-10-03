# SDK documentation plan

Phased build-out of the SDK docs. Tooling: **MkDocs + Material**
(Markdown-native), deployed to GitHub Pages. Language API refs via
TypeDoc/pdoc/phpDocumentor only if they earn it in Phase 4 — handwritten
curated pages first. Diátaxis throughout: tutorials, how-tos, reference,
explanation kept separate.

Starting assets: `docs/migration-guide.md`, `docs/api-gaps-*.md`,
`docs/sdk-contract.md`, `docs/architecture.md`, `docs/generation.md`,
`tests/conformance/` fixtures.

## Phase 1 — Model reference, generated

Generator step (new `scripts/` generator, wired into `generate_all.py`)
emitting per-class pages (URI, description, parents/children, property
table with range/required/multivalued, JSON-LD terms, examples) plus
per-property and per-enum pages, from the LinkML schema into
`docs/reference/model/`.

- Wired into `check-generated` so reference can't rot.
- Acceptance: all 89 classes + slots + enums browsable without opening
  the ontology; regen byte-identical.
- Effort: ~1 week. Unlocks Phases 2–4 (everything links here).

## Phase 2 — Getting started + tutorials

`hello-dfc` (install → first object → first JSON-LD, <5 min),
creating-objects, JSON-LD round-trip — one track per language where it
matters, shared concepts where it doesn't.

- Every tutorial is an executed test (same pattern as the migration
  examples: test file mirrors the doc, CI runs it).
- Acceptance: a new developer goes from zero to a valid exported document
  following only these pages.

## Phase 3 — Concepts (explanation)

Identifiers, relationships, JSON-LD context/versioning, vocabularies, the
four validation levels. New writing, cross-linked to Phase 1 reference.
Consolidate the `.agents/` scratch notes worth keeping; the rest stays
scratch.

- Acceptance: each why-does-X-work-this-way question has exactly one home.

## Phase 4 — How-to guides + API reference polish

- Move the migration guide into `guides/`; add task guides
  (build-catalog, load/validate JSON-LD, handle identifiers).
- Curated per-language API pages (Connector surface, model access,
  import/export); generated API docs only for gaps handwritten pages
  can't cover cheaply.
- Conformance report page (fixtures × connectors matrix, auto-updated).

## Phase 5 — Publish

MkDocs + Material site on a `docs.` subdomain (GitHub Pages), deployed on
merge to `main`.

The work is not the config, it is the links: the docs carry 2400+ relative
`.md` hrefs that render on GitHub and break under MkDocs, which wants the
extension stripped. Converted by a generator step rather than
find-and-replace, so hand-written pages and generated ones stay in step, and
`test_all_links_in_docs_resolve` moves with them.

CNAME for the subdomain is committed; the DNS record is maintained by hand
outside the repo.

## Phase 6 — Version + release

Versioned docs per SDK release (2.0.x line first); changelog wired to
releases; README slimmed to install + first example.

Deliberately deferred rather than forgotten. Versioning is the expensive part:
it means capturing the ~350 generated model pages per tag and re-publishing on
every release, so it wants a published site to version first and a release
cadence worth versioning to.

## Sequencing logic

Reference before tutorials (tutorials link into it, not vice versa);
executed examples from day one; no hand-maintained class pages ever.
