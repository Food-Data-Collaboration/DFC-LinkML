import { describe, it, expect } from "vitest";
import { Connector, Organization, SuppliedProduct } from "../src/index.js";

// Executed version of docs/getting-started/jsonld-roundtrip.md (TypeScript).
describe("Tutorial: JSON-LD round trip (TypeScript)", () => {
  it("exported documents re-import with all properties intact", async () => {
    const c = new Connector();
    const org = c.createOrganization({
      semanticId: "https://example.org/organization/farm-1",
      name: "Example Farm",
      vatNumber: "FR12345678901",
      description: "A test farm",
    });
    const carrots = c.createSuppliedProduct({
      semanticId: "https://example.org/product/carrots-1",
      name: "Organic carrots",
      description: "Fresh carrots",
    });
    org.supplies = [carrots];

    const exported = JSON.parse(await c.export(org, carrots)) as Record<
      string,
      unknown
    >;
    const imported = c.import(exported);

    expect(imported).toHaveLength(2);
    const byId = new Map(imported.map((o) => [o.semanticId, o]));
    const backOrg = byId.get("https://example.org/organization/farm-1") as
      | Organization
      | undefined;
    const backCarrots = byId.get("https://example.org/product/carrots-1") as
      | SuppliedProduct
      | undefined;
    expect(backOrg).toBeInstanceOf(Organization);
    expect(backOrg?.vatNumber).toBe("FR12345678901");
    expect(backCarrots?.name).toBe("Organic carrots");

    // A single-node export returns a bare object, still an array on import.
    const single = JSON.parse(await c.export(org)) as Record<string, unknown>;
    expect(Array.isArray(single)).toBe(false);
    const backSingle = c.import(single);
    expect(backSingle).toHaveLength(1);
    expect(backSingle[0].semanticType).toBe("dfc-b:Organization");
  });
});
