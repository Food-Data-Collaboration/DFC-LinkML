import { WhoSubject, type WhoSubjectParams } from "./WhoSubject.js";
import type { Address } from "./Address.js";
import type { CustomerCategory } from "./CustomerCategory.js";
import type { FunctionalProduct } from "./FunctionalProduct.js";
import type { Order } from "./Order.js";
import type { Person } from "./Person.js";
export interface AgentParams extends WhoSubjectParams {
    email?: string;
    logo?: string;
    websitePage?: string;
    hasPhoneNumber?: string;
    hasSocialMedia?: string;
    owns?: string[];
    sells?: string[];
    affiliatedTo?: Person | string;
    hasAddress?: Address | string;
    isMemberOf?: CustomerCategory | string;
    orders?: (Order | string)[];
    requests?: (FunctionalProduct | string)[];
}
export declare class Agent extends WhoSubject {
    static get SEMANTIC_TYPE(): string;
    email?: string;
    logo?: string;
    websitePage?: string;
    hasPhoneNumber?: string;
    hasSocialMedia?: string;
    owns?: string[];
    sells?: string[];
    affiliatedTo?: Person | string;
    hasAddress?: Address | string;
    isMemberOf?: CustomerCategory | string;
    orders?: (Order | string)[];
    requests?: (FunctionalProduct | string)[];
    constructor(semanticId: string, params?: AgentParams);
}
