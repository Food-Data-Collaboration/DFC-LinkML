# Migration guide: official DFC connectors → LinkML connectors

Swap the official Data Food Consortium connectors for ours with only
mechanical changes. Direction is one-way: ours replace the official
connector. Perfect parity is not the goal — everything below either works
unchanged or rewrites by rule.

Checked against official TypeScript `2.0.0-beta.2` and Ruby
`2.0.0.pre.beta8`. Per-class method tables live in
[`api-gaps-typescript.md`](api-gaps-typescript.md) and
[`api-gaps-ruby.md`](api-gaps-ruby.md) (generated — see
`tests/cross_connector/codeplane_inventory.py`).

The worked flows below are executed as tests —
`typescript-connector/test/migration-example.test.ts` and
`ruby-gem/spec/migration_example_spec.rb`. Keep guide and tests in sync.

## What works unchanged

- Package install aside, **reads** need no changes: import our JSON-LD with
  the official connector and vice versa (verified by
  `run_matrix.py --verify-drop-in`, official→ours fully green).
- Predicates on the wire are identical (`dfc-b:VATnumber`, …).
- Class inventory: ours is a superset (89 classes). `Enterprise` still exists
  in ours (deprecated subclass of `Organization`); v2 officials removed it.

## TypeScript: before → after

Before (official):

```ts
import { Connector } from "@datafoodconsortium/connector";
const c = new Connector();
const org = c.createOrganization({ semanticId: "http://example.com/org1" });
org.setName("Farm Org");
org.setVatNumber("FR12345678901");
const tomato = c.createSuppliedProduct({ semanticId: "http://example.com/tomato" });
tomato.setName("Tomato");
tomato.setDescription("Fresh tomato");
const line = c.createOrderLine({ semanticId: "http://example.com/line1" });
line.setQuantity(5);
line.setDescription("Line 1");
const order = c.createOrder({ semanticId: "http://example.com/order1" });
order.setNumber("ORD-001");
order.setClient(org);
order.addLine(line);
const jsonld = await c.export([org, tomato, line, order], {
  outputContext: "https://w3id.org/dfc/ontology/v2.0.0/context/context_2.0.0.json",
});
```

After (ours — same construction shape, fields instead of methods):

```ts
import { Connector } from "@fooddatacollaboration/linkml-connector";
const c = new Connector();
const org = c.createOrganization({
  semanticId: "http://example.com/org1",
  name: "Farm Org",
  vatNumber: "FR12345678901",
});
const tomato = c.createSuppliedProduct({
  semanticId: "http://example.com/tomato",
  name: "Tomato",
  description: "Fresh tomato",
});
const line = c.createOrderLine({
  semanticId: "http://example.com/line1",
  name: "Line 1",
  quantity: 5,
  concerns: [tomato.semanticId],
});
const order = c.createOrder({
  semanticId: "http://example.com/order1",
  orderNumber: "ORD-001",
  orderedBy: org,
  hasPart: line,
});
const doc = JSON.parse(await c.export(org, tomato, line, order));
```

Rewrite rules (mechanical, no behavior change):

| Official | Ours | Note |
|---|---|---|
| `createX({ semanticId, ... })` | same (supported) or `createX(semanticId, params)` | object form accepted |
| `setName(x)` / `getName()` | `o.name = x` / `o.name` | fields, not methods |
| `setNumber` / `addLine` / `setClient` / `setOffer` / `setOfferedProduct` / `setOffers` / `setPrice` | `orderNumber` / `hasPart` / `orderedBy` / `concerns` / `references` / `offeredThrough` / `price` | schema-literal names; see gap doc for the full list |
| `await c.export([...], { outputContext })` | `await c.export(...)` | context is always the versioned URL string |
| single-object import result | `import()` always returns an array | take `[0]` if you know it is single |

## Ruby: before → after

Before (official):

```ruby
c = DataFoodConsortium::Connector::Connector.instance
org = DataFoodConsortium::Connector::Organization.new("http://example.com/org1")
org.name = "Farm Org"
org.vatNumber = "FR12345678901"
tomato = DataFoodConsortium::Connector::SuppliedProduct.new("http://example.com/tomato")
tomato.name = "Tomato"
order = DataFoodConsortium::Connector::Order.new("http://example.com/order1")
order.number = "ORD-001"
order.client = org
jsonld = c.export(org, tomato, order)
```

After (ours — official setter names work through aliases, kwargs optional):

```ruby
connector = DfcLinkmlConnector::Core::Connector.new
org = DfcLinkmlConnector::Models::Organization.new(
  "http://example.com/org1", name: "Farm Org", vatNumber: "FR12345678901"
)
org.vatNumber = "FR12345678901" # alias, like official
tomato = DfcLinkmlConnector::Models::SuppliedProduct.new(
  "http://example.com/tomato", name: "Tomato", description: "Fresh tomato"
)
line = DfcLinkmlConnector::Models::OrderLine.new(
  "http://example.com/line1", name: "Line 1", quantity: 5,
  concerns: tomato.semanticId
)
order = DfcLinkmlConnector::Models::Order.new(
  "http://example.com/order1", orderNumber: "ORD-001"
)
order.number = "ORD-001" # alias for order_number
order.client = org       # alias for ordered_by
order.lines = line        # alias for part
doc = JSON.parse(connector.export(org, tomato, line, order))
```

Notes:

- `Connector.instance` exists (default-instance shim); prefer `Connector.new`.
- Writers differing only by name are `alias_method`s generated from
  `config/dfc-official-api.yaml` (`number=`→`order_number=`,
  `lines=`→`part=`, `client=`→`ordered_by=`, `offer=`→`concerns=`,
  `product=`→`references=`, `offers=`→`offered_through=`,
  `vatNumber=`→`vat_number=`). Identical names need nothing.
- Constructor kwargs are camelCase (`vatNumber:`, `orderNumber:`) just like
  official setters without `=`.

## Deliberate differences (not migrated, by design)

- `import()` always returns an array, even for a single `@graph` entry.
- Export `@context` is a URL string, never an inline object.
- Ours ship 89 classes vs ~50 official factories; extra classes are inert.
- TypeScript has no `supplyProduct`-style domain methods — use fields.
- `dfc-b:Enterprise` documents import as `dfc-b:Organization` in ours;
  official v2 dropped the type entirely.

## v1 vs v2 official notes

- v1 (TS `1.0.0-beta.2`, Ruby `1.3.0`) uses `Enterprise` and
  `dfc-b:hasDescription`; v2 uses `Organization` and keeps
  `dfc-b:hasDescription` while ours registers `dfc-b:description`. The matrix
  treats these as expected drops in both directions.
- Our `Enterprise` class + `TYPE_ALIASES` keep v1 documents readable.
