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
        readonly "@id": "dfc-s:DFCScopes";
        readonly "@type": readonly ["skos:ConceptScheme"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Authorization scopes";
            readonly "@language": "en";
        }, {
            readonly "@value": "Périmètres d'autorisation";
            readonly "@language": "fr";
        }];
    }, {
        readonly "@id": "dfc-s:ReadEnterprise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Read enterprise data";
            readonly "@language": "en";
        }, {
            readonly "@value": "Lire les données de l'entreprise";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ReadEnterprise";
        readonly "skos:definition": readonly [{
            readonly "@value": "This scope allows portals to access the associated producer's enterprise data";
            readonly "@language": "en";
        }, {
            readonly "@value": "Ce périmètre permet aux portails d'accéder aux données de l'entreprise du producteur associé";
            readonly "@language": "fr";
        }];
    }, {
        readonly "@id": "dfc-s:ReadOrders";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Read enterprise orders";
            readonly "@language": "en";
        }, {
            readonly "@value": "Lire les commandes de l'entreprise";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ReadOrders";
        readonly "skos:definition": readonly [{
            readonly "@value": "This scope allows portals to read the associated producer's orders";
            readonly "@language": "en";
        }, {
            readonly "@value": "Ce périmètre permet aux portails de lire les commandes du producteur associé";
            readonly "@language": "fr";
        }];
    }, {
        readonly "@id": "dfc-s:ReadProducts";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Read enterprise products";
            readonly "@language": "en";
        }, {
            readonly "@value": "Lire les produits de l'entreprise";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ReadProducts";
        readonly "skos:definition": readonly [{
            readonly "@value": "This scope allows portals to access the associated producer's products";
            readonly "@language": "en";
        }, {
            readonly "@value": "Ce périmètre permet aux portails d'accéder aux produits du producteur associé";
            readonly "@language": "fr";
        }];
    }, {
        readonly "@id": "dfc-s:WriteEnterprise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Write enterprise data";
            readonly "@language": "en";
        }, {
            readonly "@value": "Écrire les données de l'entreprise";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "WriteEnterprise";
        readonly "skos:definition": readonly [{
            readonly "@value": "This scope allows portals to modify the associated producer's enterprise data";
            readonly "@language": "en";
        }, {
            readonly "@value": "Ce périmètre permet aux portails de modifier les données de l'entreprise du producteur associé";
            readonly "@language": "fr";
        }];
    }, {
        readonly "@id": "dfc-s:WriteOrders";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Write enterprise orders";
            readonly "@language": "en";
        }, {
            readonly "@value": "Écrire les commandes de l'entreprise";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "WriteOrders";
        readonly "skos:definition": readonly [{
            readonly "@value": "This scope allows portals to modify the associated producer's orders";
            readonly "@language": "en";
        }, {
            readonly "@value": "Ce périmètre permet aux portails de modifier les commandes du producteur associé";
            readonly "@language": "fr";
        }];
    }, {
        readonly "@id": "dfc-s:WriteProducts";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Write enterprise products";
            readonly "@language": "en";
        }, {
            readonly "@value": "Écrire les produits de l'entreprise";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "WriteProducts";
        readonly "skos:definition": readonly [{
            readonly "@value": "This scope allows portals to modify the associated producer's products";
            readonly "@language": "en";
        }, {
            readonly "@value": "Ce périmètre permet aux portails de modifier les produits du producteur associé";
            readonly "@language": "fr";
        }];
    }];
};
export default _default;
