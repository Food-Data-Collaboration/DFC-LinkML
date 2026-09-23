import { describe, it, expect } from "vitest";
import { Connector } from "../src/index.js";

// Worked example from docs/migration-guide.md ("TypeScript after").
// Keep in sync with the guide: this is the executed version of it.
describe("Migration example", () => {
  it("builds an order graph with original-style construction", async () => {
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

    const doc = JSON.parse(
      await c.export(org, tomato, line, order),
    ) as {
      "@graph": Record<string, unknown>[];
      "@context": unknown;
    };
    expect(doc["@context"]).toBe(c.contextUrl);
    const byId = Object.fromEntries(
      doc["@graph"].map((e) => [e["@id"], e]),
    ) as Record<string, Record<string, unknown>>;
    expect(byId["http://example.com/org1"]["dfc-b:VATnumber"]).toBe(
      "FR12345678901",
    );
    expect(byId["http://example.com/order1"]["dfc-b:orderNumber"]).toBe(
      "ORD-001",
    );
    expect(byId["http://example.com/order1"]["dfc-b:orderedBy"]).toBe(
      "http://example.com/org1",
    );

    // Import always returns an array, even for multi-node graphs.
    const back = c.import(doc);
    expect(back).toHaveLength(4);
  });
});
