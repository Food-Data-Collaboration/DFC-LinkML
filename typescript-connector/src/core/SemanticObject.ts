export class SemanticObject {
  static typeRegistry = new Map<string, typeof SemanticObject>();

  static get SEMANTIC_TYPE(): string {
    return "";
  }

  semanticId: string;
  semanticType: string = "";
  private semanticProperties = new Map<string, () => unknown>();

  constructor(semanticId: string) {
    this.semanticId = semanticId;
  }

  registerSemanticProperty(predicate: string, getter: () => unknown): void {
    this.semanticProperties.set(predicate, getter);
  }

  toJsonLd(context?: unknown): Record<string, unknown> {
    const result: Record<string, unknown> = {
      "@id": this.semanticId,
      "@type": this.semanticType,
    };

    if (context) {
      result["@context"] = context;
    }

    for (const [predicate, getter] of this.semanticProperties) {
      const value = getter();
      if (value === undefined || value === null) continue;

      if (Array.isArray(value)) {
        if (value.length === 0) continue;
        result[predicate] = value.map((v: unknown) =>
          v instanceof SemanticObject ? v.semanticId : v
        );
      } else if (value instanceof SemanticObject) {
        result[predicate] = value.semanticId;
      } else {
        result[predicate] = value;
      }
    }

    return result;
  }

  toJson(context?: unknown): string {
    return JSON.stringify(this.toJsonLd(context), null, 2);
  }
}
