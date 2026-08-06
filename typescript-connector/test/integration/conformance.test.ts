import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import * as fs from "fs";
import { Connector, Organization, SuppliedProduct, Order, OrderLine } from "../../src/index.js";
import { mockFetch } from "./helpers/setup.js";

mockFetch();

function loadFixture(name: string): Record<string, unknown> {
  return JSON.parse(
    fs.readFileSync(new URL(`./fixtures/${name}`, import.meta.url), "utf-8"),
  );
}

const fixtures = ["enterprise-supplied-product"] as const;

describe("Integration: conformance", () => {
  describe("fixture import", () => {
    for (const name of fixtures) {
      it(`imports ${name} fixture`, () => {
        const c = new Connector();
        const data = loadFixture(`${name}.json`);
        const result = c.import(data);
        expect(result).toBeDefined();
        if (Array.isArray(result)) {
          expect(result.length).toBeGreaterThan(0);
          for (const obj of result) {
            expect(obj.semanticId).toBeTruthy();
            expect(obj.semanticType).toBeTruthy();
          }
        }
      });
    }
  });

  describe("single object round-trip", () => {
    it("Organization", async () => {
      const c = new Connector();
      const org = c.createOrganization("http://example.com/org1", {
        name: "Farm Org",
        description: "A test farm",
        vatNumber: "FR123456789",
      });
      const exported = await c.export(org);
      const parsed = JSON.parse(exported) as Record<string, unknown>;
      const imported = c.import(parsed)[0] as Organization;
      expect(imported.semanticId).toBe("http://example.com/org1");
      expect(imported.semanticType).toBe("dfc-b:Organization");
      expect(imported.name).toBe("Farm Org");
      expect(imported.description).toBe("A test farm");
      expect(imported.vatNumber).toBe("FR123456789");
    });

    it("SuppliedProduct", async () => {
      const c = new Connector();
      const p = c.createSuppliedProduct("http://example.com/tomato", {
        name: "Tomato",
        description: "Fresh tomato",
        frozen: true,
        totalTheoriticalStock: 100,
      });
      const exported = await c.export(p);
      const parsed = JSON.parse(exported) as Record<string, unknown>;
      const imported = c.import(parsed)[0] as SuppliedProduct;
      expect(imported.semanticId).toBe("http://example.com/tomato");
      expect(imported.name).toBe("Tomato");
      expect(imported.description).toBe("Fresh tomato");
      expect(imported.frozen).toBe(true);
      expect(imported.totalTheoriticalStock).toBe(100);
    });

    it("Order with OrderLine", async () => {
      const c = new Connector();
      const line = c.createOrderLine("http://example.com/line1", {
        quantity: 5,
      });
      const order = c.createOrder("http://example.com/order1", {
        name: "Test Order",
        hasPart: line,
      });
      const exported = await c.export(order, line);
      const parsed = JSON.parse(exported) as Record<string, unknown>;
      const imported = c.import(parsed) as (Order | OrderLine)[];
      expect(imported).toHaveLength(2);
      const impOrder = imported.find(o => o.semanticId === "http://example.com/order1") as Order;
      const impLine = imported.find(o => o.semanticId === "http://example.com/line1") as OrderLine;
      expect(impOrder).toBeDefined();
      expect(impLine).toBeDefined();
      expect(impOrder.name).toBe("Test Order");
      expect(impLine.quantity).toBe(5);
      expect(typeof impOrder.hasPart).toBe("object");
      expect(impOrder.hasPart).toBe(impLine);
    });
  });

  describe("cross-reference resolution", () => {
    it("@id-wrapped references", async () => {
      const c = new Connector();
      const data = {
        "@graph": [
          {
            "@id": "http://example.com/org1",
            "@type": "dfc-b:Organization",
            "dfc-b:name": "Farm Org",
            "dfc-b:isCertifiedBy": { "@id": "http://example.com/org2" },
          },
          {
            "@id": "http://example.com/org2",
            "@type": "dfc-b:Organization",
            "dfc-b:name": "Certifier",
          },
        ],
      };
      const result = c.import(data) as Organization[];
      expect(result).toHaveLength(2);
      const org1 = result.find(o => o.semanticId === "http://example.com/org1") as Organization;
      const org2 = result.find(o => o.semanticId === "http://example.com/org2") as Organization;
      expect(typeof org1.isCertifiedBy).toBe("object");
      expect(org1.isCertifiedBy).toBe(org2);
      expect(org2.name).toBe("Certifier");
    });

    it("blank node references", async () => {
      const c = new Connector();
      const data = {
        "@graph": [
          {
            "@id": "_:order1",
            "@type": "dfc-b:Order",
            "dfc-b:orderNumber": "ORD-001",
            "dfc-b:hasPart": { "@id": "_:line1" },
          },
          {
            "@id": "_:line1",
            "@type": "dfc-b:OrderLine",
            "dfc-b:quantity": 5,
          },
        ],
      };
      const result = c.import(data) as Order[];
      expect(result).toHaveLength(2);
      const order = result.find(o => o.semanticId === "_:order1") as Order;
      const line = result.find(o => o.semanticId === "_:line1") as OrderLine;
      expect(order.orderNumber).toBe("ORD-001");
      expect(typeof order.hasPart).toBe("object");
      expect(order.hasPart).toBe(line);
      expect(line.quantity).toBe(5);
    });
  });

  describe("export format", () => {
    it("single object does not wrap in @graph", async () => {
      const c = new Connector();
      const org = c.createOrganization("http://example.com/org1", { name: "Test" });
      const exported = await c.export(org);
      const parsed = JSON.parse(exported) as Record<string, unknown>;
      expect(parsed["@id"]).toBe("http://example.com/org1");
      expect(parsed["@graph"]).toBeUndefined();
    });

    it("multiple objects wrap in @graph", async () => {
      const c = new Connector();
      const org1 = c.createOrganization("http://example.com/org1", { name: "Org 1" });
      const org2 = c.createOrganization("http://example.com/org2", { name: "Org 2" });
      const exported = await c.export(org1, org2);
      const parsed = JSON.parse(exported) as Record<string, unknown>;
      expect(parsed["@graph"]).toBeDefined();
      expect(Array.isArray(parsed["@graph"])).toBe(true);
      expect((parsed["@graph"] as unknown[]).length).toBe(2);
    });

    it("exports SemanticObject references as @id-wrapped objects", async () => {
      const c = new Connector();
      const org2 = c.createOrganization("http://example.com/org2", { name: "Certifier" });
      const org1 = c.createOrganization("http://example.com/org1", { name: "Farm" });
      (org1 as unknown as Record<string, unknown>).isCertifiedBy = org2;
      const exported = await c.export(org1, org2);
      const parsed = JSON.parse(exported) as Record<string, unknown>;
      const graph = parsed["@graph"] as Record<string, unknown>[];
      const entry = graph.find(e => e["@id"] === "http://example.com/org1") as Record<string, unknown>;
      const predicateKey = Object.keys(entry).find(k => k.includes("isCertifiedBy"))!;
      expect(entry[predicateKey]).toEqual({ "@id": "http://example.com/org2" });
    });
  });
});
