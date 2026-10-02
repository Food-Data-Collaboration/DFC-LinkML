# Connector API reference

Per-language API surfaces, parsed from the connector sources rather than
transcribed, so they cannot drift.

| Language | Connector methods | Factories | Package |
|---|---|---|---|
| [TypeScript](typescript.md) | 13 | 89 | `@siol-data/linkml-connector` |
| [Ruby](ruby.md) | 21 | 0 | `dfc-linkml-connector` |
| [PHP](php.md) | 20 | 89 | `siol-data/dfc-connector` |

Ruby has no `createX` factories. That is the one structural difference
between the three, and it is deliberate: Ruby's model classes are
constructible directly, and adding 89 delegating methods to the connector
would have hidden that.

## Shared behaviour

All three connectors honour the same contract. See the
[SDK contract](../../sdk-contract.md) for the guarantees, and
[concepts](../../concepts/index.md) for the reasoning behind them.
