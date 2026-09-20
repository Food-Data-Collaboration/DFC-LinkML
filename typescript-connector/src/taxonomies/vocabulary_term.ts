// Bundled DFC taxonomy (v2.0.0). Do not edit by hand; see ruby-gem/vocabularies.
export default {
  "@context": {
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "dfc-f": "http://w3id.org/dfc/taxonomies/v2.0.0/facets.rdf#",
    "dfc-m": "http://w3id.org/dfc/taxonomies/v2.0.0/measures.rdf#",
    "dfc-pt": "http://w3id.org/dfc/taxonomies/v2.0.0/productTypes.rdf#",
    "dfc-v": "http://w3id.org/dfc/taxonomies/v2.0.0/vocabulary.rdf#",
    "dfc-s": "http://w3id.org/dfc/taxonomies/v2.0.0/scopes.rdf#"
  },
  "@graph": [
    {
      "@id": "dfc-v:DFCVocabulary",
      "@type": [
        "skos:ConceptScheme"
      ],
      "skos:prefLabel": "DFC_Vocabulary",
      "skos:hasTopConcept": [
        "dfc-v:States",
        "dfc-v:Status",
        "dfc-v:transformationType"
      ]
    },
    {
      "@id": "dfc-v:Accept",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "accept",
      "skos:notation": "Accept",
      "skos:broader": [
        "dfc-v:TransformationType"
      ]
    },
    {
      "@id": "dfc-v:Cancelled",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Cancelled",
      "skos:notation": "Cancelled",
      "skos:broader": [
        "dfc-v:FulfilmentStates",
        "dfc-v:FulfilmentStatus",
        "dfc-v:OrderStates",
        "dfc-v:OrderStatus",
        "dfc-v:PaymentStates",
        "dfc-v:PaymentStatus"
      ]
    },
    {
      "@id": "dfc-v:Combine",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "combine",
      "skos:notation": "Combine",
      "skos:broader": [
        "dfc-v:TransformationType"
      ]
    },
    {
      "@id": "dfc-v:Complete",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Complete",
      "skos:notation": "Complete",
      "skos:broader": [
        "dfc-v:OrderStates",
        "dfc-v:OrderStatus"
      ]
    },
    {
      "@id": "dfc-v:Consume",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "consume",
      "skos:notation": "Consume",
      "skos:broader": [
        "dfc-v:TransformationType"
      ]
    },
    {
      "@id": "dfc-v:Draft",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Draft",
      "skos:notation": "Draft",
      "skos:broader": [
        "dfc-v:OrderStates",
        "dfc-v:OrderStatus"
      ]
    },
    {
      "@id": "dfc-v:Dropoff",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "dropoff",
      "skos:notation": "Dropoff",
      "skos:broader": [
        "dfc-v:TransformationType"
      ]
    },
    {
      "@id": "dfc-v:Fulfilled",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Fulfilled",
      "skos:notation": "Fulfilled",
      "skos:broader": [
        "dfc-v:FulfilmentStates",
        "dfc-v:FulfilmentStatus"
      ]
    },
    {
      "@id": "dfc-v:FulfilmentStates",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Fulfilment state",
      "skos:notation": "FulfilmentStates",
      "skos:broader": [
        "dfc-v:States",
        "dfc-v:Status"
      ]
    },
    {
      "@id": "dfc-v:FulfilmentStatus",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Fulfilment status",
      "skos:notation": "FulfilmentStatus",
      "skos:broader": [
        "dfc-v:States",
        "dfc-v:Status"
      ]
    },
    {
      "@id": "dfc-v:Held",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Held",
      "skos:notation": "Held",
      "skos:broader": [
        "dfc-v:FulfilmentStates",
        "dfc-v:FulfilmentStatus",
        "dfc-v:OrderStates",
        "dfc-v:OrderStatus"
      ]
    },
    {
      "@id": "dfc-v:Lower",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "lower",
      "skos:notation": "Lower",
      "skos:broader": [
        "dfc-v:TransformationType"
      ]
    },
    {
      "@id": "dfc-v:Modify",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "modify",
      "skos:notation": "Modify",
      "skos:broader": [
        "dfc-v:TransformationType"
      ]
    },
    {
      "@id": "dfc-v:Move",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "move",
      "skos:notation": "Move",
      "skos:broader": [
        "dfc-v:TransformationType"
      ]
    },
    {
      "@id": "dfc-v:OrderStates",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Order state",
      "skos:notation": "OrderStates",
      "skos:broader": [
        "dfc-v:States",
        "dfc-v:Status"
      ]
    },
    {
      "@id": "dfc-v:OrderStatus",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Order status",
      "skos:notation": "OrderStatus",
      "skos:broader": [
        "dfc-v:States",
        "dfc-v:Status"
      ]
    },
    {
      "@id": "dfc-v:Paid",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Paid",
      "skos:notation": "Paid",
      "skos:broader": [
        "dfc-v:PaymentStates",
        "dfc-v:PaymentStatus"
      ]
    },
    {
      "@id": "dfc-v:PaymentStates",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Payment state",
      "skos:notation": "PaymentStates",
      "skos:broader": [
        "dfc-v:States",
        "dfc-v:Status"
      ]
    },
    {
      "@id": "dfc-v:PaymentStatus",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Payment status",
      "skos:notation": "PaymentStatus",
      "skos:broader": [
        "dfc-v:States",
        "dfc-v:Status"
      ]
    },
    {
      "@id": "dfc-v:Pickup",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "pickup",
      "skos:notation": "Pickup",
      "skos:broader": [
        "dfc-v:TransformationType"
      ]
    },
    {
      "@id": "dfc-v:Produce",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "produce",
      "skos:notation": "Produce",
      "skos:broader": [
        "dfc-v:TransformationType"
      ]
    },
    {
      "@id": "dfc-v:Raise",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "raise",
      "skos:notation": "Raise",
      "skos:broader": [
        "dfc-v:TransformationType"
      ]
    },
    {
      "@id": "dfc-v:Separate",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "separate",
      "skos:notation": "Separate",
      "skos:broader": [
        "dfc-v:TransformationType"
      ]
    },
    {
      "@id": "dfc-v:States",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "States",
      "skos:notation": "States"
    },
    {
      "@id": "dfc-v:Status",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Status",
      "skos:notation": "Status"
    },
    {
      "@id": "dfc-v:TransformationType",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Transformation type",
      "skos:notation": "TransformationType"
    },
    {
      "@id": "dfc-v:Unfulfilled",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Unfulfilled",
      "skos:notation": "Unfulfilled",
      "skos:broader": [
        "dfc-v:FulfilmentStates",
        "dfc-v:FulfilmentStatus"
      ]
    },
    {
      "@id": "dfc-v:Unpaid",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Unpaid",
      "skos:notation": "Unpaid",
      "skos:broader": [
        "dfc-v:PaymentStates",
        "dfc-v:PaymentStatus"
      ]
    },
    {
      "@id": "dfc-v:Use",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "use",
      "skos:notation": "Use",
      "skos:broader": [
        "dfc-v:TransformationType"
      ]
    },
    {
      "@id": "dfc-v:accept",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "accept",
      "skos:notation": "accept",
      "skos:broader": [
        "dfc-v:transformationType"
      ]
    },
    {
      "@id": "dfc-v:c_734fc709",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "FulfilmentState",
      "skos:notation": "c_734fc709"
    },
    {
      "@id": "dfc-v:combine",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "combine",
      "skos:notation": "combine",
      "skos:broader": [
        "dfc-v:transformationType"
      ]
    },
    {
      "@id": "dfc-v:consume",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "consume",
      "skos:notation": "consume",
      "skos:broader": [
        "dfc-v:transformationType"
      ]
    },
    {
      "@id": "dfc-v:dropoff",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "dropoff",
      "skos:notation": "dropoff",
      "skos:broader": [
        "dfc-v:transformationType"
      ]
    },
    {
      "@id": "dfc-v:lower",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "lower",
      "skos:notation": "lower",
      "skos:broader": [
        "dfc-v:transformationType"
      ]
    },
    {
      "@id": "dfc-v:modify",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "modify",
      "skos:notation": "modify",
      "skos:broader": [
        "dfc-v:transformationType"
      ]
    },
    {
      "@id": "dfc-v:move",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "move",
      "skos:notation": "move",
      "skos:broader": [
        "dfc-v:transformationType"
      ]
    },
    {
      "@id": "dfc-v:pickup",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "pickup",
      "skos:notation": "pickup",
      "skos:broader": [
        "dfc-v:transformationType"
      ]
    },
    {
      "@id": "dfc-v:produce",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "produce",
      "skos:notation": "produce",
      "skos:broader": [
        "dfc-v:transformationType"
      ]
    },
    {
      "@id": "dfc-v:raise",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "raise",
      "skos:notation": "raise",
      "skos:broader": [
        "dfc-v:transformationType"
      ]
    },
    {
      "@id": "dfc-v:separate",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "separate",
      "skos:notation": "separate",
      "skos:broader": [
        "dfc-v:transformationType"
      ]
    },
    {
      "@id": "dfc-v:transformationType",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "Transformation type",
      "skos:notation": "transformationType"
    },
    {
      "@id": "dfc-v:use",
      "@type": [
        "skos:Concept"
      ],
      "skos:prefLabel": "use",
      "skos:notation": "use",
      "skos:broader": [
        "dfc-v:transformationType"
      ]
    }
  ]
} as const;
