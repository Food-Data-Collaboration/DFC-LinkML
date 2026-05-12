export class JsonLdSerializer {
    context;
    constructor(context) {
        this.context = context;
    }
    serialize(...objects) {
        if (objects.length === 1) {
            return this.serializeObject(objects[0]);
        }
        const result = {};
        if (this.context) {
            result["@context"] = this.context;
        }
        result["@graph"] = objects.map(o => this.serializeObject(o));
        return result;
    }
    serializeObject(obj) {
        return obj.toJsonLd(this.context);
    }
}
