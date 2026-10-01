# Build a catalog

Assemble a small DFC document: an organization, a product, and a price for
it. This is the shape most real data takes, and it exercises references,
single-valued collapsing, and nested nodes at once.

## The model is not a tree

The first thing to internalise is that **a price does not hang off a
product**. In DFC it hangs off an `Offer`, and a `CatalogItem` bridges the
two:

```text
Organization --supplies--> SuppliedProduct
                                  ^
                                  | referencedBy
                            CatalogItem --offeredThrough--> Offer --hasPrice--> Price
                                                                          ^
                                                          Price.isPriceOf ---+
```

This is not incidental complexity. An `Offer` is a *commercial proposition*
— a price is attached to what is being offered, at a moment, in a place.
That is why `has_price` is declared on `Offer`, `OrderLine`, `PaymentMethod`,
and `Transaction`, and **not** on any product class. Check
[`has_price`](../reference/model/properties/has_price.md) before assuming a
property exists on the class you are holding.

## The document

=== "TypeScript"

    ```typescript
    import { Connector } from "@siol-data/linkml-connector";

    const c = new Connector();

    const farm = c.createOrganization("https://example.com/farm/1", {
      name: "Acme Farms",
      vatNumber: "FR12345678901",
      description: "A test farm",
    });

    const carrots = c.createSuppliedProduct("https://example.com/carrots/1", {
      name: "Organic carrots",
      description: "Fresh, pulled this morning",
      suppliedBy: farm,
    });

    const price = c.createPrice("https://example.com/carrots/1#price", {
      value: 2.5,
      vatRate: 5.5,
      hasUnit: "dfc-m:EUR",
      isPriceOf: "https://example.com/carrots/1#offer",
    });

    const offer = c.createOffer("https://example.com/carrots/1#offer", {
      concernedBy: carrots,
      hasPrice: price,
    });

    const item = c.createCatalogItem("https://example.com/carrots/1#item", {
      references: carrots,
      offeredThrough: offer,
    });

    farm.supplies = [carrots];

    // Every node must be passed to export. The connectors do not walk your
    // object graph for you.
    const jsonld = await c.export(farm, carrots, price, offer, item);
    ```

=== "Ruby"

    ```ruby
    connector = DfcLinkmlConnector::Core::Connector.new

    farm = DfcLinkmlConnector::Models::Organization.new(
      "https://example.com/farm/1",
      name: "Acme Farms", vatNumber: "FR12345678901", description: "A test farm"
    )

    carrots = DfcLinkmlConnector::Models::SuppliedProduct.new(
      "https://example.com/carrots/1",
      name: "Organic carrots", description: "Fresh, pulled this morning"
    )
    carrots.supplied_by = farm

    price = DfcLinkmlConnector::Models::Price.new(
      "https://example.com/carrots/1#price",
      value: 2.5, vatRate: 5.5, unit: "dfc-m:EUR",
      isPriceOf: "https://example.com/carrots/1#offer"
    )

    offer = DfcLinkmlConnector::Models::Offer.new(
      "https://example.com/carrots/1#offer",
      concernedBy: carrots, hasPrice: price
    )

    item = DfcLinkmlConnector::Models::CatalogItem.new(
      "https://example.com/carrots/1#item",
      references: carrots, offeredThrough: offer
    )

    farm.supplies = [carrots]

    jsonld = connector.export(farm, carrots, price, offer, item)
    ```

=== "PHP"

    ```php
    $connector = new \DataFoodConsortium\Connector\Connector();

    $farm = $connector->createOrganization("https://example.com/farm/1", [
        'name' => 'Acme Farms',
        'vatNumber' => 'FR12345678901',
        'description' => 'A test farm',
    ]);

    $carrots = $connector->createSuppliedProduct("https://example.com/carrots/1", [
        'name' => 'Organic carrots',
        'description' => 'Fresh, pulled this morning',
        'suppliedBy' => $farm,
    ]);

    $price = $connector->createPrice("https://example.com/carrots/1#price", [
        'value' => 2.5,
        'vatRate' => 5.5,
        'hasUnit' => 'dfc-m:EUR',   // `unit` in Ruby, `hasUnit` in TypeScript
        'isPriceOf' => 'https://example.com/carrots/1#offer',
    ]);

    $offer = $connector->createOffer("https://example.com/carrots/1#offer", [
        'concernedBy' => $carrots,
        'hasPrice' => $price,
    ]);

    $item = $connector->createCatalogItem("https://example.com/carrots/1#item", [
        'references' => $carrots,
        'offeredThrough' => $offer,
    ]);

    $farm->setSupplies([$carrots]);

    $jsonld = $connector->export($farm, $carrots, $price, $offer, $item);
    ```

## What comes out

Verified output from the TypeScript connector:

```json
{
  "@context": "https://w3id.org/dfc/ontology/v2.0.0/context/context_2.0.0.json",
  "@graph": [
    {
      "@id": "https://example.com/farm/1",
      "@type": "dfc-b:Organization",
      "dfc-b:VATnumber": "FR12345678901",
      "dfc-b:description": "A test farm",
      "dfc-b:name": "Acme Farms",
      "dfc-b:supplies": "https://example.com/carrots/1"
    },
    {
      "@id": "https://example.com/carrots/1",
      "@type": "dfc-b:SuppliedProduct",
      "dfc-b:description": "Fresh, pulled this morning",
      "dfc-b:name": "Organic carrots",
      "dfc-b:suppliedBy": "https://example.com/farm/1"
    },
    {
      "@id": "https://example.com/carrots/1#price",
      "@type": "dfc-b:Price",
      "dfc-b:VATrate": 5.5,
      "dfc-b:hasUnit": "dfc-m:EUR",
      "dfc-b:isPriceOf": "https://example.com/carrots/1#offer",
      "dfc-b:value": 2.5
    },
    {
      "@id": "https://example.com/carrots/1#offer",
      "@type": "dfc-b:Offer",
      "dfc-b:concernedBy": "https://example.com/carrots/1",
      "dfc-b:hasPrice": "https://example.com/carrots/1#price"
    },
    {
      "@id": "https://example.com/carrots/1#item",
      "@type": "dfc-b:CatalogItem",
      "dfc-b:offeredThrough": "https://example.com/carrots/1#offer",
      "dfc-b:references": "https://example.com/carrots/1"
    }
  ]
}
```

Two things to notice, both explained in
[relationships](../concepts/relationships.md):

- **`dfc-b:supplies` is a scalar**, not `["https://example.com/carrots/1"]`,
  though you set a one-element array. A single reference always collapses.
- **Every node is a separate `@graph` entry**, linked by `@id`. Nothing is
  inlined, so the document has no duplication.

## Scaling to a real catalog

Keep one object per node and collect at the end:

```typescript
const products = [carrots, potatoes, leeks];
const offers = products.map(p => c.createOffer(`${p.semanticId}#offer`, {
  concernedBy: p, hasPrice: priceFor(p),
}));

farm.supplies = products;
const jsonld = await c.export(farm, ...products, ...offers);
```

Nothing is deduplicated. If two offers share a price node, pass the price
once; if you pass the same object twice, you get two `@graph` entries with the
same `@id`.

## Gotchas

- **A property that does not exist is silently ignored.** Writing
  `carrots.price = ...` in TypeScript does not raise — it sets a field the
  model never registered, and the value vanishes on export. This is the same
  behaviour that drops unknown terms on import; see
  [validation](../concepts/validation.md#the-unknown-field-caveat-concretely).
  Check the [model reference](../reference/model/index.md) for what a class
  actually has.
- **`Enterprise` is gone.** DFC v2.0 renamed it to `Organization`. Importing
  an old `dfc-b:Enterprise` document maps it automatically; you cannot write
  it.
- **Property names differ per language.** `dfc-b:hasUnit` is `hasUnit` in
  TypeScript, `unit` in Ruby and PHP. Predicates are identical.
- **Never compare two exports byte-for-byte.** Key order differs by
  connector — TypeScript and Ruby emit `@context` first, PHP last.
- **`isPriceOf` is optional in practice.** Nothing enforces the cycle
  `Offer → Price → Offer`. Set it for consumers that navigate it, but a
  missing one is not an error.
