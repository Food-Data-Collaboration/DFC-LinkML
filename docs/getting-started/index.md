# Getting started

Two short tutorials, in order. Each is an executed test in CI, so the code you
copy is code that runs against the connector on every push — if it stops
working, the build fails rather than the page quietly going stale.

| Tutorial | You want to |
|---|---|
| [Hello DFC](hello-dfc.md) | Install a connector, create one object, export JSON-LD |
| [JSON-LD round trip](jsonld-roundtrip.md) | Import a document, understand what survives and what does not |

The first is the one to read if you have not used these connectors before; it
assumes nothing beyond being able to read the language you picked.

## When you want something else

- A specific task, like assembling a catalog or trusting a document you did not
  write, is in the [guides](../guides/index.md).
- The reason the connectors behave the way they do is in
  [concepts](../concepts/index.md). Worth reading before you rely on a
  round-trip guarantee.
- What each of the 89 DFC classes and 255 properties means is in the
  [model reference](../reference/model/index.md).

## Picking a connector

All three connectors are generated from one schema, so they agree on the data
plane, on predicates, and on round-trip behaviour. Where they differ it is
naming, and the differences are in the
[migration guide](../migration-guide.md) rather than smoothed over.

The tutorials cover TypeScript. The Ruby and PHP surfaces are the same
operations in those languages' idioms, listed in the
[API reference](../reference/api/index.md).
