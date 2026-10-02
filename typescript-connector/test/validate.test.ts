import { describe, expect, it } from "vitest";
import { Connector, Organization, Order, OrderLine } from "../src/index.js";

/**
 * `validate()` reports what the ontology requires and the object lacks.
 *
 * The constraint data is the 42 class-scoped `rdfs:subClassOf` restrictions,
 * every one of which is a singleton. Constructors deliberately stay permissive:
 * enforcing these would reject ordinary documents (every Organization would
 * need a hasMainContact), so they are opt-in here.
 */
describe("validate()", () => {
  const c = new Connector();

  it("reports every ontology-required property that is absent", () => {
    const order = new Order("https://x/o1", { orderNumber: "A1" });
    const slots = c.validate(order).map((i) => i.slot).sort();
    // OrderLine is restricted to exactly one `concerns` and one `part_of`;
    // Order to one each of belongsTo, orderedBy, selects and uses.
    expect(slots).toEqual(["belongs_to", "ordered_by", "selects", "uses"]);
  });

  it("carries the predicate so the report can be acted on", () => {
    const issue = c.validate(new Order("https://x/o1"))[0];
    expect(issue.predicate.startsWith("dfc-b:")).toBe(true);
    expect(issue.semanticType).toBe("dfc-b:Order");
    expect(issue.semanticId).toBe("https://x/o1");
  });

  it("drops a property from the report once it is set", () => {
    const full = new Order("https://x/o2", {
      orderNumber: "A2",
      belongsTo: "https://x/sale",
      orderedBy: "https://x/org",
      selects: "https://x/opt",
      uses: "https://x/step",
    });
    expect(c.validate(full)).toEqual([]);
  });

  it("inherits an ancestor's restriction", () => {
    // Organization restricts hasMainContact; nothing else in the chain does.
    const org = new Organization("https://x/org", { name: "SIO" });
    expect(c.validate(org).map((i) => i.slot)).toEqual(["has_main_contact"]);
  });

  it("says nothing about a class the ontology does not restrict", () => {
    // An Organization carries hasAddress, but the ontology restricts that on
    // PhysicalPlace only -- so Agent is unconstrained and must not be flagged.
    expect(c.validate(new Organization("https://x/org2", { hasMainContact: "https://x/p" }))).toEqual([]);
  });

  it("accepts several objects at once", () => {
    const issues = c.validate(new Order("https://x/o3"), new Organization("https://x/org3"));
    expect(issues.map((i) => i.semanticType)).toEqual(
      expect.arrayContaining(["dfc-b:Order", "dfc-b:Organization"]),
    );
  });

  it("does not throw on an object that fails -- that is the point", () => {
    expect(() => c.validate(new OrderLine("https://x/l1"))).not.toThrow();
    expect(c.validate(new OrderLine("https://x/l1")).map((i) => i.slot).sort()).toEqual([
      "concerns",
      "part_of",
    ]);
  });
});
