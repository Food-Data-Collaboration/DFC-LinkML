import { SemanticObject } from "../core/SemanticObject.js";
import { Place } from "./Place.js";
/**
 * A DFC `dfc-b:VirtualPlace`, serialized with `@type: dfc-b:VirtualPlace`.
 * Class hierarchy: `Where_Subject` -> `Place` -> `VirtualPlace`.
 * Own DFC properties: url, websitePage.
 */
export class VirtualPlace extends Place {
    static get SEMANTIC_TYPE() {
        return "dfc-b:VirtualPlace";
    }
    /**
     * The Universal Resource Locator address of the virtual place
     *
     * Serializes as `dfc-b:URL`.
     */
    url;
    /**
     * DEPRECATE
     *
     * Serializes as `dfc-b:websitePage`.
     */
    websitePage;
    constructor(semanticId, params) {
        super(semanticId, params);
        this.url = params?.url;
        this.websitePage = params?.websitePage;
        this.semanticType = VirtualPlace.SEMANTIC_TYPE;
        this.registerSemanticProperty("dfc-b:URL", () => this.url);
        this.registerSemanticProperty("dfc-b:websitePage", () => this.websitePage);
    }
    static {
        SemanticObject.typeRegistry.set(VirtualPlace.SEMANTIC_TYPE, VirtualPlace);
    }
}
