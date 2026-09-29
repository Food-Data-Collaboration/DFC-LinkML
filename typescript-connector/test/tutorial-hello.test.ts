import { describe, it, expect } from "vitest";
import { Connector, Organization, SuppliedProduct } from "../src/index.js";

// Executed version of docs/getting-started/hello-dfc.md (TypeScript).
describe("Tutorial: hello-dfc (TypeScript)", () => {
  it("installs, creates an organization, and exports JSON-LD", async () => {
    const c = new Connector();
    const org = c.createOrganization({
      semanticId: "https://example.org/organization/farm-1",
      name: "Example Farm",
    });
    const doc = JSON.parse(await c.export(org)) as Record<string, unknown>;
    expect(doc["@type"]).toBe("dfc-b:Organization");
    expect(doc["dfc-b:name"]).toBe("Example Farm");
    expect(doc["@context"]).toBe(c.contextUrl);
  });

  it("creates a product and links it to the organization", async () => {
    const c = new Connector();
    const org = c.createOrganization({
      semanticId: "https://example.org/organization/farm-1",
      name: "Example Farm",
    });
    const carrots = c.createSuppliedProduct({
      semanticId: "https://example.org/product/carrots-1",
      name: "Organic carrots",
    });
    org.supplies = [carrots];
    const doc = JSON.parse(await c.export(org, carrots)) as {
      "@graph": Record<string, unknown>[];
    };
    const byId = Object.fromEntries(
      doc["@graph"].map((e) => [e["@id"], e]),
    ) as Record<string, Record<string, unknown>>;
    expect(byId["https://example.org/organization/farm-1"]["dfc-b:supplies"]).toBe(
      "https://example.org/product/carrots-1",
    );
  });
});
