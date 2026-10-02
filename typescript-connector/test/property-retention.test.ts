import { describe, it, expect } from "vitest";
import { Connector, Address, Organization, Person } from "../src/index.js";

// Executed version of docs/concepts/validation.md "Property retention".
//
// The connectors are lossy by design, and the exact boundary is easy to
// misdescribe. Three rules are often conflated into "unknown terms are
// dropped":
//
//   1. deprecated properties ARE retained   (metadata, not removal)
//   2. known properties on the wrong class ARE dropped   (domain checking)
//   3. the 14 slots whose domain names no DFC class are unreachable
//
// If a generator change moves that boundary, this fails rather than the docs
// quietly becoming wrong.
describe("Property retention", () => {
  const c = new Connector();

  const reexportKeys = async (doc: unknown): Promise<string[]> => {
    const objects = c.import(doc as Record<string, unknown>);
    if (objects.length === 0) return [];
    const out = JSON.parse(await c.export(objects[0])) as Record<string, unknown>;
    return Object.keys(out).filter((k) => k !== "@context");
  };

  it("keeps a property declared on the class", async () => {
    const keys = await reexportKeys({
      "@id": "https://x/1",
      "@type": "dfc-b:Address",
      "dfc-b:city": "Rennes",
    });
    expect(keys).toContain("dfc-b:city");
  });

  it("keeps a DEPRECATED property that is in domain", async () => {
    // `country` is owl:deprecated in the ontology. It is excluded from the
    // reference but must still round-trip: deprecation is metadata, and
    // existing data has to remain readable.
    const keys = await reexportKeys({
      "@id": "https://x/1",
      "@type": "dfc-b:Address",
      "dfc-b:country": "FR",
    });
    expect(keys).toContain("dfc-b:country");
  });

  it("drops a known property used on the wrong class", async () => {
    // Domain checking, independent of whether the property exists.
    const keys = await reexportKeys({
      "@id": "https://x/1",
      "@type": "dfc-b:Address",
      "dfc-b:VATrate": 5.5,
    });
    expect(keys).not.toContain("dfc-b:VATrate");
    expect(keys).toContain("@id");
  });

  it("drops a foreign term", async () => {
    const keys = await reexportKeys({
      "@id": "https://x/1",
      "@type": "dfc-b:Organization",
      "dfc-b:name": "Acme",
      "https://your.org/who#invented": "someone",
    });
    expect(keys).toEqual(["@id", "@type", "dfc-b:name"]);
  });

  it("drops an invented dfc-b predicate", async () => {
    const keys = await reexportKeys({
      "@id": "https://x/1",
      "@type": "dfc-b:Organization",
      "dfc-b:name": "Acme",
      "dfc-b:totallyMadeUp": "value",
    });
    expect(keys).toEqual(["@id", "@type", "dfc-b:name"]);
  });

  it("drops a slot whose schema domain names no DFC class", async () => {
    // hasFacet is in the schema and in the predicate map, but no generated
    // class registers it, so it is unreachable through the model.
    const keys = await reexportKeys({
      "@id": "https://x/1",
      "@type": "dfc-b:Address",
      "dfc-b:hasFacet": "dfc-f:Organic",
    });
    expect(keys).not.toContain("dfc-b:hasFacet");
  });

  it("maps a legacy type instead of dropping the node", async () => {
    // Enterprise is deprecated, but the rename keeps the node.
    const objects = c.import({
      "@id": "https://x/1",
      "@type": "dfc-b:Enterprise",
      "dfc-b:name": "Acme",
    });
    expect(objects).toHaveLength(1);
    expect(objects[0]).toBeInstanceOf(Organization);
    expect(objects[0].semanticType).toBe("dfc-b:Organization");
  });

  it("drops the whole node for an unknown type", async () => {
    const objects = c.import({
      "@id": "https://x/1",
      "@type": "dfc-b:NotAThing",
      "dfc-b:name": "Acme",
    });
    expect(objects).toHaveLength(0);
  });

  it("keeps a dangling reference as a string", async () => {
    // hasMainContact has range Person, but no Person node is in the document,
    // so the value cannot resolve to an instance and is kept verbatim.
    const objects = c.import({
      "@graph": [
        {
          "@id": "https://x/1",
          "@type": "dfc-b:Organization",
          "dfc-b:hasMainContact": "https://x/absent",
        },
      ],
    });
    expect(objects).toHaveLength(1);
    const org = objects[0] as unknown as Record<string, unknown>;
    expect(org["hasMainContact"]).toBe("https://x/absent");
  });

  it("resolves a reference to an instance when the target is in the document", async () => {
    const objects = c.import({
      "@graph": [
        { "@id": "https://x/1", "@type": "dfc-b:Organization" },
        {
          "@id": "https://x/2",
          "@type": "dfc-b:Organization",
          "dfc-b:hasMainContact": "https://x/person",
        },
        { "@id": "https://x/person", "@type": "dfc-b:Person" },
      ],
    });
    const withContact = objects.find((o) => o.semanticId === "https://x/2");
    const contact = (withContact as unknown as Record<string, unknown>)[
      "hasMainContact"
    ];
    expect(contact).toBeInstanceOf(Person);
  });

  it("is lossy, and that is the documented behaviour", async () => {
    // Pin the direction of the rule: a mixed document loses the extras.
    const doc = {
      "@id": "https://example.org/o/1",
      "@type": "dfc-b:Organization",
      "dfc-b:name": "Acme",
      "https://example.org/who#invented": "someone",
    };
    expect(await reexportKeys(doc)).not.toContain(
      "https://example.org/who#invented",
    );
  });

  it("the deprecated-in-reference class still exports", async () => {
    // Enterprise is in the reference only as a stub, yet the connector keeps
    // the class so legacy documents can still be read.
    const org = c.createEnterprise("https://x/1", { name: "Acme" });
    const out = JSON.parse(await c.export(org)) as Record<string, unknown>;
    expect(out["@type"]).toBe("dfc-b:Enterprise");
  });

  it("the deprecated-in-reference property is still settable", async () => {
    const address = c.createAddress("https://x/1", { country: "FR" });
    const out = JSON.parse(await c.export(address)) as Record<string, unknown>;
    expect(out["dfc-b:country"]).toBe("FR");
    expect(address).toBeInstanceOf(Address);
  });
});
