# How-to guides

Task-oriented recipes. Each one starts from a goal and ends with working
code, rather than explaining a concept.

If you are new, read [hello-dfc](../getting-started/hello-dfc.md) first.

## Guides

| Guide | You want to |
|---|---|
| [Build a catalog](build-a-catalog.md) | Assemble organizations, products, and prices into a document |
| [Read and validate JSON-LD](load-and-validate.md) | Take a document you did not write and trust what you get back |
| [Handle identifiers](handle-identifiers.md) | Choose `@id`s that survive re-export and stay resolvable |
| [Work offline or on your own version](work-offline.md) | Control the context and vocabularies, with no network |

## Concepts, not recipes

For *why* the connectors behave as they do, see
[concepts](../concepts/index.md). The guides assume you have read the
relevant concept page if the behaviour surprises you — most surprises trace
back to [context and versioning](../concepts/context-and-versioning.md) or
[relationships](../concepts/relationships.md).

## Migrating?

If you are moving from the original DFC connectors rather than starting
fresh, read the [migration guide](../migration-guide.md) instead. It maps the
original API property by property and is the faster path.

## Verifying the examples

The snippets in `docs/getting-started/` are executed as tests in CI. The
snippets in these guides are not — read them as illustrations and check them
against [the API reference](../reference/api/index.md), which is parsed from
the connector sources and cannot be wrong.
