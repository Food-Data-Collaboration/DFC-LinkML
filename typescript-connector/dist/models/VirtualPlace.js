// Class from DFC Business Ontology: #VirtualPlace
import { SemanticObject } from "../core/SemanticObject.js";
import { Place } from "./Place.js";
export class VirtualPlace extends Place {
    static get SEMANTIC_TYPE() {
        return "dfc-b:VirtualPlace";
    }
    url;
    websitePage;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.url = params?.url;
        this.websitePage = params?.websitePage;
        this.semanticType = VirtualPlace.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:VirtualPlace:url", () => this.url);
        this.registerSemanticProperty("dfc-b:VirtualPlace:website_page", () => this.websitePage);
    }
    static {
        SemanticObject.typeRegistry.set(VirtualPlace.SEMANTIC_TYPE, VirtualPlace);
    }
}
