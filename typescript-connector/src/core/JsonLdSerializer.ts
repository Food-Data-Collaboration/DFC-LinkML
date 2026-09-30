import { SemanticObject } from "./SemanticObject.js";

/**
 * Combines one or more {@link SemanticObject} instances into a JSON-LD
 * document, running the `jsonld` compaction pass.
 *
 * A single object is emitted as a bare node; two or more are wrapped in a
 * `@graph` array. `@context` is always emitted as a URL string rather than
 * an inline object, so documents stay compact and shareable.
 *
 * The {@link Connector} uses this internally; you rarely need it directly.
 */
export class JsonLdSerializer {
  private context: unknown;

  /** @param context The `@context` to attach, normally a context URL string. */
  constructor(context?: unknown) {
    this.context = context;
  }

  /**
   * Serializes objects to a JSON-LD document.
   *
   * @returns A bare node for one object, otherwise a `@graph` document.
   */
  serialize(...objects: SemanticObject[]): Record<string, unknown> {
    if (objects.length === 1) {
      return this.serializeObject(objects[0]);
    }

    const result: Record<string, unknown> = {};
    if (this.context) {
      result["@context"] = this.context;
    }
    result["@graph"] = objects.map(o => this.serializeObject(o));
    return result;
  }

  private serializeObject(obj: SemanticObject): Record<string, unknown> {
    return obj.toJsonLd(this.context);
  }
}
