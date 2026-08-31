declare const _default: {
    readonly "@context": {
        readonly skos: "http://www.w3.org/2004/02/skos/core#";
        readonly "dfc-f": "http://w3id.org/dfc/taxonomies/v2.0.0/facets.rdf#";
        readonly "dfc-m": "http://w3id.org/dfc/taxonomies/v2.0.0/measures.rdf#";
        readonly "dfc-pt": "http://w3id.org/dfc/taxonomies/v2.0.0/productTypes.rdf#";
        readonly "dfc-v": "http://w3id.org/dfc/taxonomies/v2.0.0/vocabulary.rdf#";
    };
    readonly "@graph": readonly [{
        readonly "@id": "dfc-v:VocabularyTerm";
        readonly "@type": readonly ["skos:ConceptScheme"];
        readonly "skos:prefLabel": "VocabularyTerm";
        readonly "skos:hasTopConcept": readonly ["dfc-f:Held", "dfc-f:OrderStatus", "dfc-f:FulfilmentState", "dfc-f:FulfilmentStatus", "dfc-f:OrderState", "dfc-f:DFCVocabulary", "dfc-f:move", "dfc-f:TransformationType", "dfc-f:Unfulfilled", "dfc-f:Cancelled", "dfc-f:Fulfilled", "dfc-f:States", "dfc-f:Status", "dfc-f:modify", "dfc-f:separate", "dfc-f:pickup", "dfc-f:use", "dfc-f:consume", "dfc-f:lower", "dfc-f:produce", "dfc-f:combine", "dfc-f:raise", "dfc-f:dropoff", "dfc-f:accept", "dfc-f:PaymentStatus", "dfc-f:PaymentState", "dfc-f:Paid", "dfc-f:Unpaid", "dfc-f:Draft", "dfc-f:Complete", "dfc-f:FulfilmentState"];
    }, {
        readonly "@id": "dfc-f:Held";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Held";
        readonly "skos:notation": "Held";
    }, {
        readonly "@id": "dfc-f:OrderStatus";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Order status";
        readonly "skos:notation": "Order_status";
    }, {
        readonly "@id": "dfc-f:FulfilmentState";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Fulfilment state";
        readonly "skos:notation": "Fulfilment_state";
    }, {
        readonly "@id": "dfc-f:FulfilmentStatus";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Fulfilment status";
        readonly "skos:notation": "Fulfilment_status";
    }, {
        readonly "@id": "dfc-f:OrderState";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Order state";
        readonly "skos:notation": "Order_state";
    }, {
        readonly "@id": "dfc-f:DFCVocabulary";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "DFC_Vocabulary";
        readonly "skos:notation": "DFC_Vocabulary";
    }, {
        readonly "@id": "dfc-f:move";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "move";
        readonly "skos:notation": "move";
    }, {
        readonly "@id": "dfc-f:TransformationType";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Transformation type";
        readonly "skos:notation": "Transformation_type";
    }, {
        readonly "@id": "dfc-f:Unfulfilled";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Unfulfilled";
        readonly "skos:notation": "Unfulfilled";
    }, {
        readonly "@id": "dfc-f:Cancelled";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cancelled";
        readonly "skos:notation": "Cancelled";
    }, {
        readonly "@id": "dfc-f:Fulfilled";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Fulfilled";
        readonly "skos:notation": "Fulfilled";
    }, {
        readonly "@id": "dfc-f:States";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "States";
        readonly "skos:notation": "States";
    }, {
        readonly "@id": "dfc-f:Status";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Status";
        readonly "skos:notation": "Status";
    }, {
        readonly "@id": "dfc-f:modify";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "modify";
        readonly "skos:notation": "modify";
    }, {
        readonly "@id": "dfc-f:separate";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "separate";
        readonly "skos:notation": "separate";
    }, {
        readonly "@id": "dfc-f:pickup";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pickup";
        readonly "skos:notation": "pickup";
    }, {
        readonly "@id": "dfc-f:use";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "use";
        readonly "skos:notation": "use";
    }, {
        readonly "@id": "dfc-f:consume";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "consume";
        readonly "skos:notation": "consume";
    }, {
        readonly "@id": "dfc-f:lower";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "lower";
        readonly "skos:notation": "lower";
    }, {
        readonly "@id": "dfc-f:produce";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "produce";
        readonly "skos:notation": "produce";
    }, {
        readonly "@id": "dfc-f:combine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "combine";
        readonly "skos:notation": "combine";
    }, {
        readonly "@id": "dfc-f:raise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "raise";
        readonly "skos:notation": "raise";
    }, {
        readonly "@id": "dfc-f:dropoff";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dropoff";
        readonly "skos:notation": "dropoff";
    }, {
        readonly "@id": "dfc-f:accept";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "accept";
        readonly "skos:notation": "accept";
    }, {
        readonly "@id": "dfc-f:PaymentStatus";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Payment status";
        readonly "skos:notation": "Payment_status";
    }, {
        readonly "@id": "dfc-f:PaymentState";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Payment state";
        readonly "skos:notation": "Payment_state";
    }, {
        readonly "@id": "dfc-f:Paid";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Paid";
        readonly "skos:notation": "Paid";
    }, {
        readonly "@id": "dfc-f:Unpaid";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Unpaid";
        readonly "skos:notation": "Unpaid";
    }, {
        readonly "@id": "dfc-f:Draft";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Draft";
        readonly "skos:notation": "Draft";
    }, {
        readonly "@id": "dfc-f:Complete";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Complete";
        readonly "skos:notation": "Complete";
    }, {
        readonly "@id": "dfc-f:FulfilmentState";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "FulfilmentState";
        readonly "skos:notation": "FulfilmentState";
    }];
};
export default _default;
