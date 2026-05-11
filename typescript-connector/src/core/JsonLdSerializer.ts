import { SemanticObject } from "./SemanticObject.js";

export class JsonLdSerializer {
  private context: unknown;

  constructor(context?: unknown) {
    this.context = context;
  }

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
