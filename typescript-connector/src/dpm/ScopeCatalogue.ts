import bundledScope from "../taxonomies/scope.js";
import { Scope } from "./Scope.js";

/** Compact and expanded forms, since the bundled JSON-LD uses the former. */
const SKOS_CONCEPT_TERMS = new Set([
  "skos:Concept",
  "http://www.w3.org/2004/02/skos/core#Concept",
]);
const SKOS_NOTATION_TERMS = new Set([
  "skos:notation",
  "http://www.w3.org/2004/02/skos/core#notation",
]);

/**
 * The DFC authorisation scopes the connector knows about.
 *
 * The notation set is derived from the bundled v2.0.0 `scopes` taxonomy, so
 * adding a scope upstream is picked up by regeneration rather than by editing
 * this file. The concept IRIs are deliberately *not* derived from that data:
 * the bundled JSON-LD context prefixes `dfc-s:` with the versioned directory,
 * so expanding it yields `…/v2.0.0/scopes.rdf#ReadEnterprise`, whereas the RDF
 * that actually dereferences — and the IRI the DPM stores and the reference
 * client compares — is the unversioned `…/scopes.rdf#ReadEnterprise`. Hence the
 * fixed template below.
 */
export class ScopeCatalogue {
  /** Namespace the taxonomy's scope concept IRIs live in. Unversioned. */
  static readonly IRI_BASE = "http://w3id.org/dfc/taxonomies/scopes.rdf#";

  private readonly scopes: Scope[];
  private readonly notationIndex: Map<string, Scope>;
  private readonly iriIndex: Map<string, Scope>;

  /**
   * @param scopes Every scope the catalogue should offer.
   */
  constructor(scopes: Scope[]) {
    this.scopes = [...scopes];
    this.notationIndex = new Map(scopes.map((s) => [s.notation, s]));
    this.iriIndex = new Map(scopes.map((s) => [s.iri, s]));
  }

  /**
   * The catalogue built from the taxonomy shipped with the package.
   *
   * Works offline; nothing is fetched.
   */
  static bundled(): ScopeCatalogue {
    const graph = (bundledScope as Record<string, unknown>)["@graph"];
    if (!Array.isArray(graph)) {
      throw new Error("Bundled scope taxonomy has no @graph");
    }
    const scopes: Scope[] = [];
    for (const entry of graph) {
      if (entry === null || typeof entry !== "object") {
        continue;
      }
      const record = entry as Record<string, unknown>;
      const types = Array.isArray(record["@type"]) ? record["@type"] : [];
      if (!types.some((t) => typeof t === "string" && SKOS_CONCEPT_TERMS.has(t))) {
        continue;
      }
      const notation = pick(record, SKOS_NOTATION_TERMS);
      if (typeof notation !== "string" || notation.length === 0) {
        continue;
      }
      scopes.push(new Scope(notation, ScopeCatalogue.IRI_BASE + notation));
    }
    if (scopes.length === 0) {
      throw new Error("Bundled scope taxonomy declares no skos:Concept");
    }
    return new ScopeCatalogue(scopes);
  }

  /** Every scope, in taxonomy order. */
  all(): readonly Scope[] {
    return this.scopes;
  }

  /**
   * Looks a scope up by its `skos:notation`.
   *
   * @returns The scope, or `undefined` when the notation is unknown.
   */
  byNotation(notation: string): Scope | undefined {
    return this.notationIndex.get(notation);
  }

  /**
   * Looks a scope up by concept IRI.
   *
   * @returns The scope, or `undefined` when the IRI is unknown.
   */
  byIri(iri: string): Scope | undefined {
    return this.iriIndex.get(iri);
  }

  /** Whether the catalogue recognises this notation. */
  contains(notation: string): boolean {
    return this.notationIndex.has(notation);
  }

  /**
   * The scope for this notation.
   *
   * @throws Error when the notation is not in the taxonomy.
   */
  require(notation: string): Scope {
    const found = this.notationIndex.get(notation);
    if (!found) {
      throw new Error(
        `Unknown DFC scope "${notation}". Known scopes: ${[...this.notationIndex.keys()].join(", ")}`,
      );
    }
    return found;
  }
}

/** First value under any of `terms`, however the JSON-LD was compacted. */
function pick(record: Record<string, unknown>, terms: Set<string>): unknown {
  for (const term of terms) {
    if (record[term] !== undefined) {
      return record[term];
    }
  }
  return undefined;
}
