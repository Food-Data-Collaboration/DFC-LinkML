declare const _default: {
    readonly "@context": {
        readonly skos: "http://www.w3.org/2004/02/skos/core#";
        readonly "dfc-f": "http://w3id.org/dfc/taxonomies/v2.0.0/facets.rdf#";
        readonly "dfc-m": "http://w3id.org/dfc/taxonomies/v2.0.0/measures.rdf#";
        readonly "dfc-pt": "http://w3id.org/dfc/taxonomies/v2.0.0/productTypes.rdf#";
        readonly "dfc-v": "http://w3id.org/dfc/taxonomies/v2.0.0/vocabulary.rdf#";
        readonly "dfc-s": "http://w3id.org/dfc/taxonomies/v2.0.0/scopes.rdf#";
    };
    readonly "@graph": readonly [{
        readonly "@id": "dfc-v:DFCVocabulary";
        readonly "@type": readonly ["skos:ConceptScheme"];
        readonly "skos:prefLabel": "DFC_Vocabulary";
        readonly "skos:hasTopConcept": readonly ["dfc-v:States", "dfc-v:Status", "dfc-v:transformationType"];
    }, {
        readonly "@id": "dfc-v:Accept";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "accept";
        readonly "skos:notation": "Accept";
        readonly "skos:broader": readonly ["dfc-v:TransformationType"];
    }, {
        readonly "@id": "dfc-v:Cancelled";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cancelled";
        readonly "skos:notation": "Cancelled";
        readonly "skos:broader": readonly ["dfc-v:FulfilmentStates", "dfc-v:FulfilmentStatus", "dfc-v:OrderStates", "dfc-v:OrderStatus", "dfc-v:PaymentStates", "dfc-v:PaymentStatus"];
    }, {
        readonly "@id": "dfc-v:Combine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "combine";
        readonly "skos:notation": "Combine";
        readonly "skos:broader": readonly ["dfc-v:TransformationType"];
    }, {
        readonly "@id": "dfc-v:Complete";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Complete";
        readonly "skos:notation": "Complete";
        readonly "skos:broader": readonly ["dfc-v:OrderStates", "dfc-v:OrderStatus"];
    }, {
        readonly "@id": "dfc-v:Consume";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "consume";
        readonly "skos:notation": "Consume";
        readonly "skos:broader": readonly ["dfc-v:TransformationType"];
    }, {
        readonly "@id": "dfc-v:Draft";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Draft";
        readonly "skos:notation": "Draft";
        readonly "skos:broader": readonly ["dfc-v:OrderStates", "dfc-v:OrderStatus"];
    }, {
        readonly "@id": "dfc-v:Dropoff";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dropoff";
        readonly "skos:notation": "Dropoff";
        readonly "skos:broader": readonly ["dfc-v:TransformationType"];
    }, {
        readonly "@id": "dfc-v:Fulfilled";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Fulfilled";
        readonly "skos:notation": "Fulfilled";
        readonly "skos:broader": readonly ["dfc-v:FulfilmentStates", "dfc-v:FulfilmentStatus"];
    }, {
        readonly "@id": "dfc-v:FulfilmentStates";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Fulfilment state";
        readonly "skos:notation": "FulfilmentStates";
        readonly "skos:broader": readonly ["dfc-v:States", "dfc-v:Status"];
    }, {
        readonly "@id": "dfc-v:FulfilmentStatus";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Fulfilment status";
        readonly "skos:notation": "FulfilmentStatus";
        readonly "skos:broader": readonly ["dfc-v:States", "dfc-v:Status"];
    }, {
        readonly "@id": "dfc-v:Held";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Held";
        readonly "skos:notation": "Held";
        readonly "skos:broader": readonly ["dfc-v:FulfilmentStates", "dfc-v:FulfilmentStatus", "dfc-v:OrderStates", "dfc-v:OrderStatus"];
    }, {
        readonly "@id": "dfc-v:Lower";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "lower";
        readonly "skos:notation": "Lower";
        readonly "skos:broader": readonly ["dfc-v:TransformationType"];
    }, {
        readonly "@id": "dfc-v:Modify";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "modify";
        readonly "skos:notation": "Modify";
        readonly "skos:broader": readonly ["dfc-v:TransformationType"];
    }, {
        readonly "@id": "dfc-v:Move";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "move";
        readonly "skos:notation": "Move";
        readonly "skos:broader": readonly ["dfc-v:TransformationType"];
    }, {
        readonly "@id": "dfc-v:OrderStates";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Order state";
        readonly "skos:notation": "OrderStates";
        readonly "skos:broader": readonly ["dfc-v:States", "dfc-v:Status"];
    }, {
        readonly "@id": "dfc-v:OrderStatus";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Order status";
        readonly "skos:notation": "OrderStatus";
        readonly "skos:broader": readonly ["dfc-v:States", "dfc-v:Status"];
    }, {
        readonly "@id": "dfc-v:Paid";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Paid";
        readonly "skos:notation": "Paid";
        readonly "skos:broader": readonly ["dfc-v:PaymentStates", "dfc-v:PaymentStatus"];
    }, {
        readonly "@id": "dfc-v:PaymentStates";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Payment state";
        readonly "skos:notation": "PaymentStates";
        readonly "skos:broader": readonly ["dfc-v:States", "dfc-v:Status"];
    }, {
        readonly "@id": "dfc-v:PaymentStatus";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Payment status";
        readonly "skos:notation": "PaymentStatus";
        readonly "skos:broader": readonly ["dfc-v:States", "dfc-v:Status"];
    }, {
        readonly "@id": "dfc-v:Pickup";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pickup";
        readonly "skos:notation": "Pickup";
        readonly "skos:broader": readonly ["dfc-v:TransformationType"];
    }, {
        readonly "@id": "dfc-v:Produce";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "produce";
        readonly "skos:notation": "Produce";
        readonly "skos:broader": readonly ["dfc-v:TransformationType"];
    }, {
        readonly "@id": "dfc-v:Raise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "raise";
        readonly "skos:notation": "Raise";
        readonly "skos:broader": readonly ["dfc-v:TransformationType"];
    }, {
        readonly "@id": "dfc-v:Separate";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "separate";
        readonly "skos:notation": "Separate";
        readonly "skos:broader": readonly ["dfc-v:TransformationType"];
    }, {
        readonly "@id": "dfc-v:States";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "States";
        readonly "skos:notation": "States";
    }, {
        readonly "@id": "dfc-v:Status";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Status";
        readonly "skos:notation": "Status";
    }, {
        readonly "@id": "dfc-v:TransformationType";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Transformation type";
        readonly "skos:notation": "TransformationType";
    }, {
        readonly "@id": "dfc-v:Unfulfilled";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Unfulfilled";
        readonly "skos:notation": "Unfulfilled";
        readonly "skos:broader": readonly ["dfc-v:FulfilmentStates", "dfc-v:FulfilmentStatus"];
    }, {
        readonly "@id": "dfc-v:Unpaid";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Unpaid";
        readonly "skos:notation": "Unpaid";
        readonly "skos:broader": readonly ["dfc-v:PaymentStates", "dfc-v:PaymentStatus"];
    }, {
        readonly "@id": "dfc-v:Use";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "use";
        readonly "skos:notation": "Use";
        readonly "skos:broader": readonly ["dfc-v:TransformationType"];
    }, {
        readonly "@id": "dfc-v:accept";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "accept";
        readonly "skos:notation": "accept";
        readonly "skos:broader": readonly ["dfc-v:transformationType"];
    }, {
        readonly "@id": "dfc-v:c_734fc709";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "FulfilmentState";
        readonly "skos:notation": "c_734fc709";
    }, {
        readonly "@id": "dfc-v:combine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "combine";
        readonly "skos:notation": "combine";
        readonly "skos:broader": readonly ["dfc-v:transformationType"];
    }, {
        readonly "@id": "dfc-v:consume";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "consume";
        readonly "skos:notation": "consume";
        readonly "skos:broader": readonly ["dfc-v:transformationType"];
    }, {
        readonly "@id": "dfc-v:dropoff";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dropoff";
        readonly "skos:notation": "dropoff";
        readonly "skos:broader": readonly ["dfc-v:transformationType"];
    }, {
        readonly "@id": "dfc-v:lower";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "lower";
        readonly "skos:notation": "lower";
        readonly "skos:broader": readonly ["dfc-v:transformationType"];
    }, {
        readonly "@id": "dfc-v:modify";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "modify";
        readonly "skos:notation": "modify";
        readonly "skos:broader": readonly ["dfc-v:transformationType"];
    }, {
        readonly "@id": "dfc-v:move";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "move";
        readonly "skos:notation": "move";
        readonly "skos:broader": readonly ["dfc-v:transformationType"];
    }, {
        readonly "@id": "dfc-v:pickup";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pickup";
        readonly "skos:notation": "pickup";
        readonly "skos:broader": readonly ["dfc-v:transformationType"];
    }, {
        readonly "@id": "dfc-v:produce";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "produce";
        readonly "skos:notation": "produce";
        readonly "skos:broader": readonly ["dfc-v:transformationType"];
    }, {
        readonly "@id": "dfc-v:raise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "raise";
        readonly "skos:notation": "raise";
        readonly "skos:broader": readonly ["dfc-v:transformationType"];
    }, {
        readonly "@id": "dfc-v:separate";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "separate";
        readonly "skos:notation": "separate";
        readonly "skos:broader": readonly ["dfc-v:transformationType"];
    }, {
        readonly "@id": "dfc-v:transformationType";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Transformation type";
        readonly "skos:notation": "transformationType";
    }, {
        readonly "@id": "dfc-v:use";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "use";
        readonly "skos:notation": "use";
        readonly "skos:broader": readonly ["dfc-v:transformationType"];
    }];
};
export default _default;
