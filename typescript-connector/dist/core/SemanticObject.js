export class SemanticObject {
    static typeRegistry = new Map();
    static get SEMANTIC_TYPE() {
        return "";
    }
    semanticId;
    semanticType = "";
    semanticProperties = new Map();
    constructor(semanticId) {
        this.semanticId = semanticId;
    }
    registerSemanticProperty(predicate, getter) {
        this.semanticProperties.set(predicate, getter);
    }
    toJsonLd(context) {
        const result = {
            "@id": this.semanticId,
            "@type": this.semanticType,
        };
        if (context) {
            result["@context"] = context;
        }
        for (const [predicate, getter] of this.semanticProperties) {
            const value = getter();
            if (value === undefined || value === null)
                continue;
            if (Array.isArray(value)) {
                if (value.length === 0)
                    continue;
                result[predicate] = value.map((v) => v instanceof SemanticObject ? v.semanticId : v);
            }
            else if (value instanceof SemanticObject) {
                result[predicate] = value.semanticId;
            }
            else {
                result[predicate] = value;
            }
        }
        return result;
    }
    toJson(context) {
        return JSON.stringify(this.toJsonLd(context), null, 2);
    }
}
