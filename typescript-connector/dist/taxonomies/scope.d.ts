declare const _default: {
    readonly "@context": {
        readonly skos: "http://www.w3.org/2004/02/skos/core#";
        readonly "dfc-v": "http://w3id.org/dfc/taxonomies/v2.0.0/vocabulary.rdf#";
    };
    readonly "@graph": readonly [{
        readonly "@id": "dfc-v:Scope";
        readonly "@type": readonly ["skos:ConceptScheme"];
        readonly "skos:prefLabel": "Scope";
        readonly "skos:hasTopConcept": readonly ["dfc-f:AuthorizationScopes", "dfc-f:PrimtresDautorisation", "dfc-f:LireLesCommandesDeLentreprise", "dfc-f:ReadEnterpriseOrders", "dfc-f:LireLesDonnesDeLentreprise", "dfc-f:ReadEnterpriseData", "dfc-f:WriteEnterpriseProducts", "dfc-f:crireLesProduitsDeLentreprise", "dfc-f:crireLesCommandesDeLentreprise", "dfc-f:WriteEnterpriseOrders", "dfc-f:WriteEnterpriseData", "dfc-f:crireLesDonnesDeLentreprise", "dfc-f:ReadEnterpriseProducts", "dfc-f:LireLesProduitsDeLentreprise"];
    }, {
        readonly "@id": "dfc-f:AuthorizationScopes";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Authorization scopes";
        readonly "skos:notation": "Authorization_scopes";
    }, {
        readonly "@id": "dfc-f:PrimtresDautorisation";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Périmètres d'autorisation";
        readonly "skos:notation": "Primtres_dautorisation";
    }, {
        readonly "@id": "dfc-f:LireLesCommandesDeLentreprise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Lire les commandes de l'entreprise";
        readonly "skos:notation": "Lire_les_commandes_de_lentreprise";
    }, {
        readonly "@id": "dfc-f:ReadEnterpriseOrders";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Read enterprise orders";
        readonly "skos:notation": "Read_enterprise_orders";
    }, {
        readonly "@id": "dfc-f:LireLesDonnesDeLentreprise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Lire les données de l'entreprise";
        readonly "skos:notation": "Lire_les_donnes_de_lentreprise";
    }, {
        readonly "@id": "dfc-f:ReadEnterpriseData";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Read enterprise data";
        readonly "skos:notation": "Read_enterprise_data";
    }, {
        readonly "@id": "dfc-f:WriteEnterpriseProducts";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Write enterprise products";
        readonly "skos:notation": "Write_enterprise_products";
    }, {
        readonly "@id": "dfc-f:crireLesProduitsDeLentreprise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Écrire les produits de l'entreprise";
        readonly "skos:notation": "crire_les_produits_de_lentreprise";
    }, {
        readonly "@id": "dfc-f:crireLesCommandesDeLentreprise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Écrire les commandes de l'entreprise";
        readonly "skos:notation": "crire_les_commandes_de_lentreprise";
    }, {
        readonly "@id": "dfc-f:WriteEnterpriseOrders";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Write enterprise orders";
        readonly "skos:notation": "Write_enterprise_orders";
    }, {
        readonly "@id": "dfc-f:WriteEnterpriseData";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Write enterprise data";
        readonly "skos:notation": "Write_enterprise_data";
    }, {
        readonly "@id": "dfc-f:crireLesDonnesDeLentreprise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Écrire les données de l'entreprise";
        readonly "skos:notation": "crire_les_donnes_de_lentreprise";
    }, {
        readonly "@id": "dfc-f:ReadEnterpriseProducts";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Read enterprise products";
        readonly "skos:notation": "Read_enterprise_products";
    }, {
        readonly "@id": "dfc-f:LireLesProduitsDeLentreprise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Lire les produits de l'entreprise";
        readonly "skos:notation": "Lire_les_produits_de_lentreprise";
    }];
};
export default _default;
