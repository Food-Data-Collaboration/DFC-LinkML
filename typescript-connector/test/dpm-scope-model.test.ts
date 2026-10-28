import { describe, expect, it } from "vitest";
import {
  Scope,
  ScopeAssignment,
  ScopeCatalogue,
} from "../src/index.js";

/**
 * The DPM scope model.
 *
 * Scope is a coarse API gate (ADR-0009/ADR-0014): an assignment is necessary
 * but never sufficient, and the grant layer that decides individual operations
 * is separate. These tests cover the assignment relation only — what a
 * platform is allowed to ask for — not whether any particular request is
 * authorised.
 *
 * The wire shape is the one `Food-Data-Collaboration/data-sharing-module`
 * reads and writes. Its `dfc-t:` prefix resolves to a GitHub blob URL in the
 * Startinblox context, and `hasAssignedScopes` is undeclared in the published
 * Technical Ontology, so these strings are matched literally.
 */
describe("DPM scope model", () => {
  const catalogue = ScopeCatalogue.bundled();
  const platform = "https://data.example.com/platform/p1";

  /**
   * The reference client's payload shape, as it appears on the wire.
   *
   * The surrounding document also carries
   * `"@context": "https://cdn.startinblox.com/owl/context-bis.jsonld"`. The
   * model deliberately does not own that: the context belongs to whatever
   * document the relation is attached to, and the connector's export sets it.
   */
  const wirePayload = (subject: string, entries: Record<string, string>[]) => ({
    "@id": subject,
    "dfc-t:hasAssignedScopes": {
      "@type": "rdf:List",
      "@list": entries,
    },
  });

  const readEnterprise = (iri: string) => ({
    "@id": iri,
    "dfc-t:scope": "ReadEnterprise",
    "@type": "dfc-t:Scope",
  });

  describe("ScopeCatalogue.bundled()", () => {
    it("derives its notion set from the bundled v2.0.0 taxonomy", () => {
      expect(catalogue.all().map((s) => s.notation).sort()).toEqual([
        "ReadEnterprise",
        "ReadOrders",
        "ReadProducts",
        "WriteEnterprise",
        "WriteOrders",
        "WriteProducts",
      ]);
    });

    it("gives unversioned concept IRIs, matching what dereferences", () => {
      // The bundled JSON-LD prefixes dfc-s: with the versioned directory, so
      // expanding it would yield …/v2.0.0/scopes.rdf#…, which does not resolve.
      const scope = catalogue.require("ReadEnterprise");
      expect(scope.iri).toBe("http://w3id.org/dfc/taxonomies/scopes.rdf#ReadEnterprise");
    });

    it("refuses a notation the taxonomy does not declare", () => {
      expect(() => catalogue.require("ReadEverything")).toThrow(/Unknown DFC scope/);
    });
  });

  describe("ScopeAssignment", () => {
    it("exports the reference client's list shape verbatim", () => {
      const assignment = new ScopeAssignment(platform, [
        catalogue.require("ReadEnterprise"),
      ]);

      expect(assignment.toJSON()).toEqual(
        wirePayload(platform, [
          readEnterprise("http://w3id.org/dfc/taxonomies/scopes.rdf#ReadEnterprise"),
        ]),
      );
    });

    it("survives a construct → export → import → re-export round trip", () => {
      const original = new ScopeAssignment(platform, [
        catalogue.require("ReadEnterprise"),
        catalogue.require("WriteOrders"),
      ]);

      const exported = original.toJSON();
      const imported = ScopeAssignment.fromJSON(exported, undefined, catalogue);

      expect(imported.subject).toBe(platform);
      expect(imported.scopes.map((s) => s.notation)).toEqual([
        "ReadEnterprise",
        "WriteOrders",
      ]);
      // Both halves of scope identity survive: the IRI the UI matches on and
      // the notation that is authoritative.
      expect(imported.scopes[0].iri).toBe(catalogue.require("ReadEnterprise").iri);
      expect(imported.toJSON()).toEqual(exported);
    });

    it("keeps a scope it does not recognise, rather than dropping it", () => {
      // Discarding it would be an authorisation decision made invisibly.
      const payload = wirePayload(platform, [
        readEnterprise("http://w3id.org/dfc/taxonomies/scopes.rdf#ReadEnterprise"),
        {
          "@id": "http://w3id.org/dfc/taxonomies/scopes.rdf#ReadEverything",
          "dfc-t:scope": "ReadEverything",
          "@type": "dfc-t:Scope",
        },
      ]);

      const assignment = ScopeAssignment.fromJSON(payload, undefined, catalogue);

      expect(assignment.scopes).toHaveLength(2);
      expect(assignment.unknown(catalogue).map((s) => s.notation)).toEqual([
        "ReadEverything",
      ]);
    });

    it("accepts the bare array the DPM serves for requestedScopes", () => {
      const assignment = ScopeAssignment.fromJSON(
        [readEnterprise("http://w3id.org/dfc/taxonomies/scopes.rdf#ReadEnterprise")],
        platform,
        catalogue,
      );

      expect(assignment.subject).toBe(platform);
      expect(assignment.has("ReadEnterprise")).toBe(true);
    });

    it("needs a subject from somewhere", () => {
      expect(() => ScopeAssignment.fromJSON([], undefined, catalogue)).toThrow(
        /platform @id/,
      );
    });

    it("answers by notation, not by IRI", () => {
      const assignment = new ScopeAssignment(platform, [
        new Scope("ReadEnterprise", "https://elsewhere.example/scopes#ReadEnterprise"),
      ]);

      expect(assignment.has("ReadEnterprise")).toBe(true);
      expect(assignment.has(catalogue.require("ReadEnterprise"))).toBe(true);
      expect(assignment.has("WriteOrders")).toBe(false);
    });
  });
});
