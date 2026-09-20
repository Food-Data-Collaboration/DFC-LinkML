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
        readonly "@id": "dfc-f:DFCProductGlossaryFacet";
        readonly "@type": readonly ["skos:ConceptScheme"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Product glossary facets";
            readonly "@language": "en";
        }, {
            readonly "@value": "Glossaire des facettes de produit";
            readonly "@language": "fr";
        }];
        readonly "skos:hasTopConcept": readonly ["dfc-f:Certification", "dfc-f:Claim", "dfc-f:ContainerInformation", "dfc-f:NatureOrigin", "dfc-f:PartOrigin", "dfc-f:TerritorialOrigin"];
    }, {
        readonly "@id": "dfc-f:AOCFR";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Appellation d’origine contrôlée";
            readonly "@language": "en";
        }, {
            readonly "@value": "Appellation d’origine contrôlée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "AOCFR";
        readonly "skos:broader": readonly ["dfc-f:LocalLabel"];
    }, {
        readonly "@id": "dfc-f:AOC_FR";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Appellation d’origine contrôlée";
            readonly "@language": "en";
        }, {
            readonly "@value": "Appellation d’origine contrôlée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "AOC_FR";
        readonly "skos:broader": readonly ["dfc-f:LocalLabel"];
    }, {
        readonly "@id": "dfc-f:AOPEU";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Appellation d’origine protégée";
            readonly "@language": "en";
        }, {
            readonly "@value": "Appellation d’origine protégée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "AOPEU";
        readonly "skos:broader": readonly ["dfc-f:LocalLabel"];
    }, {
        readonly "@id": "dfc-f:AOP_EU";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Appellation d’origine protégée";
            readonly "@language": "en";
        }, {
            readonly "@value": "Appellation d’origine protégée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "AOP_EU";
        readonly "skos:broader": readonly ["dfc-f:LocalLabel"];
    }, {
        readonly "@id": "dfc-f:Aberdeenshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Aberdeenshire";
        readonly "skos:notation": "Aberdeenshire";
        readonly "skos:broader": readonly ["dfc-f:Scotland"];
    }, {
        readonly "@id": "dfc-f:Africa";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Africa";
            readonly "@language": "en";
        }, {
            readonly "@value": "Afrique";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Africa";
        readonly "skos:broader": readonly ["dfc-f:TerritorialOrigin"];
    }, {
        readonly "@id": "dfc-f:Algae";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Algae";
            readonly "@language": "en";
        }, {
            readonly "@value": "Algue";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Algae";
        readonly "skos:broader": readonly ["dfc-f:NatureOrigin"];
    }, {
        readonly "@id": "dfc-f:AnimalOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Animal";
            readonly "@language": "en";
        }, {
            readonly "@value": "Animal";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "AnimalOrigin";
        readonly "skos:broader": readonly ["dfc-f:NatureOrigin"];
    }, {
        readonly "@id": "dfc-f:AnimalPartOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Part or product of animal";
            readonly "@language": "en";
        }, {
            readonly "@value": "Partie ou produit d'un animal";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "AnimalPartOrigin";
        readonly "skos:broader": readonly ["dfc-f:PartOrigin"];
    }, {
        readonly "@id": "dfc-f:Asia";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Asia";
            readonly "@language": "en";
        }, {
            readonly "@value": "Asie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Asia";
        readonly "skos:broader": readonly ["dfc-f:TerritorialOrigin"];
    }, {
        readonly "@id": "dfc-f:Australia";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Australia";
            readonly "@language": "en";
        }, {
            readonly "@value": "Australie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Australia";
        readonly "skos:broader": readonly ["dfc-f:Oceania"];
    }, {
        readonly "@id": "dfc-f:AuvergneRhoneAlpes";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Auvergne-Rhône-Alpes";
            readonly "@language": "en";
        }, {
            readonly "@value": "Auvergne-Rhône-Alpes";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "AuvergneRhoneAlpes";
        readonly "skos:broader": readonly ["dfc-f:France"];
    }, {
        readonly "@id": "dfc-f:Ayrshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Ayrshire";
        readonly "skos:notation": "Ayrshire";
        readonly "skos:broader": readonly ["dfc-f:SWScotland"];
    }, {
        readonly "@id": "dfc-f:Bacteria";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Bacteria";
            readonly "@language": "en";
        }, {
            readonly "@value": "Bactérie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Bacteria";
        readonly "skos:broader": readonly ["dfc-f:NatureOrigin"];
    }, {
        readonly "@id": "dfc-f:Bedfordshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Bedfordshire";
        readonly "skos:notation": "Bedfordshire";
        readonly "skos:broader": readonly ["dfc-f:EnglandE"];
    }, {
        readonly "@id": "dfc-f:Bee";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Bee";
            readonly "@language": "en";
        }, {
            readonly "@value": "Abeille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Bee";
        readonly "skos:broader": readonly ["dfc-f:AnimalPartOrigin"];
    }, {
        readonly "@id": "dfc-f:BeeHoney";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Honey";
            readonly "@language": "en";
        }, {
            readonly "@value": "Miel";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "BeeHoney";
        readonly "skos:broader": readonly ["dfc-f:Bee"];
    }, {
        readonly "@id": "dfc-f:BeePollen";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Pollen";
            readonly "@language": "en";
        }, {
            readonly "@value": "Pollen";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "BeePollen";
        readonly "skos:broader": readonly ["dfc-f:Bee"];
    }, {
        readonly "@id": "dfc-f:BeePropolis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Propolis";
            readonly "@language": "en";
        }, {
            readonly "@value": "Propolis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "BeePropolis";
        readonly "skos:broader": readonly ["dfc-f:Bee"];
    }, {
        readonly "@id": "dfc-f:BeeVenom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Venom";
            readonly "@language": "en";
        }, {
            readonly "@value": "Venim d'abeille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "BeeVenom";
        readonly "skos:broader": readonly ["dfc-f:Bee"];
    }, {
        readonly "@id": "dfc-f:BeeWax";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Wax";
            readonly "@language": "en";
        }, {
            readonly "@value": "Cire d'abeille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "BeeWax";
        readonly "skos:broader": readonly ["dfc-f:Bee"];
    }, {
        readonly "@id": "dfc-f:Belgium";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Belgium";
            readonly "@language": "en";
        }, {
            readonly "@value": "Belgique";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Belgium";
        readonly "skos:broader": readonly ["dfc-f:Europe"];
    }, {
        readonly "@id": "dfc-f:Berkshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Berkshire";
        readonly "skos:notation": "Berkshire";
        readonly "skos:broader": readonly ["dfc-f:EnglandSE"];
    }, {
        readonly "@id": "dfc-f:BiodynamicLabel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Biodynamic label";
            readonly "@language": "en";
        }, {
            readonly "@value": "Label biodynamie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "BiodynamicLabel";
        readonly "skos:broader": readonly ["dfc-f:Certification"];
    }, {
        readonly "@id": "dfc-f:BleuBlancCoeurFR";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Bleu-Blanc-Coeur";
            readonly "@language": "en";
        }, {
            readonly "@value": "Bleu-Blanc-Coeur";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "BleuBlancCoeurFR";
        readonly "skos:broader": readonly ["dfc-f:EthicalLabel"];
    }, {
        readonly "@id": "dfc-f:BleuBlancCoeur_FR";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Bleu-Blanc-Coeur";
            readonly "@language": "en";
        }, {
            readonly "@value": "Bleu-Blanc-Coeur";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "BleuBlancCoeur_FR";
        readonly "skos:broader": readonly ["dfc-f:EthicalLabel"];
    }, {
        readonly "@id": "dfc-f:BourgogneFrancheComte";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Bourgogne-Franche-Comté";
            readonly "@language": "en";
        }, {
            readonly "@value": "Bourgogne-Franche-Comté";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "BourgogneFrancheComte";
        readonly "skos:broader": readonly ["dfc-f:France"];
    }, {
        readonly "@id": "dfc-f:Bristol";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Bristol";
        readonly "skos:notation": "Bristol";
        readonly "skos:broader": readonly ["dfc-f:EnglandSW"];
    }, {
        readonly "@id": "dfc-f:Brittany";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Brittany";
            readonly "@language": "en";
        }, {
            readonly "@value": "Bretagne";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Brittany";
        readonly "skos:broader": readonly ["dfc-f:France"];
    }, {
        readonly "@id": "dfc-f:Buckinghamshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Buckinghamshire";
        readonly "skos:notation": "Buckinghamshire";
        readonly "skos:broader": readonly ["dfc-f:EnglandSE"];
    }, {
        readonly "@id": "dfc-f:Bulb";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Bulb";
            readonly "@language": "en";
        }, {
            readonly "@value": "Bulbe";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Bulb";
        readonly "skos:broader": readonly ["dfc-f:PlantPartOrigin"];
    }, {
        readonly "@id": "dfc-f:Bull";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Bull";
            readonly "@language": "en";
        }, {
            readonly "@value": "Bœuf";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Bull";
        readonly "skos:broader": readonly ["dfc-f:AnimalPartOrigin"];
    }, {
        readonly "@id": "dfc-f:BullBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Bull's body";
            readonly "@language": "en";
        }, {
            readonly "@value": "Partie du boeuf";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "BullBody";
        readonly "skos:broader": readonly ["dfc-f:Bull"];
    }, {
        readonly "@id": "dfc-f:Cambridgeshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cambridgeshire";
        readonly "skos:notation": "Cambridgeshire";
        readonly "skos:broader": readonly ["dfc-f:EnglandE"];
    }, {
        readonly "@id": "dfc-f:CentreValLoire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Centre-Val de Loire";
            readonly "@language": "en";
        }, {
            readonly "@value": "Centre-Val de Loire";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "CentreValLoire";
        readonly "skos:broader": readonly ["dfc-f:France"];
    }, {
        readonly "@id": "dfc-f:Certification";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Certification";
            readonly "@language": "en";
        }, {
            readonly "@value": "Certification";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Certification";
    }, {
        readonly "@id": "dfc-f:Cheshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cheshire";
        readonly "skos:notation": "Cheshire";
        readonly "skos:broader": readonly ["dfc-f:EnglandNW"];
    }, {
        readonly "@id": "dfc-f:Chicken";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Chicken";
            readonly "@language": "en";
        }, {
            readonly "@value": "Poulet";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Chicken";
        readonly "skos:broader": readonly ["dfc-f:AnimalPartOrigin"];
    }, {
        readonly "@id": "dfc-f:ChickenBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Chicken's body";
            readonly "@language": "en";
        }, {
            readonly "@value": "Partie du poulet";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ChickenBody";
        readonly "skos:broader": readonly ["dfc-f:Chicken"];
    }, {
        readonly "@id": "dfc-f:Claim";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Nutrition and health claims";
            readonly "@language": "en";
        }, {
            readonly "@value": "Allégations nutritionnelles et de santé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Claim";
    }, {
        readonly "@id": "dfc-f:ContainerInformation";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Container Information";
        readonly "skos:notation": "ContainerInformation";
    }, {
        readonly "@id": "dfc-f:ContainsNutrientOrSubstance";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Contains nutrient or other substance";
            readonly "@language": "en";
        }, {
            readonly "@value": "Contient nutriment ou autre substance";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ContainsNutrientOrSubstance";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:Cornwall";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cornwall";
        readonly "skos:notation": "Cornwall";
        readonly "skos:broader": readonly ["dfc-f:EnglandSW"];
    }, {
        readonly "@id": "dfc-f:Corsica";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Corsica";
            readonly "@language": "en";
        }, {
            readonly "@value": "Corse";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Corsica";
        readonly "skos:broader": readonly ["dfc-f:France"];
    }, {
        readonly "@id": "dfc-f:CountyDurham";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "County Durham";
        readonly "skos:notation": "CountyDurham";
        readonly "skos:broader": readonly ["dfc-f:EnglandNE"];
    }, {
        readonly "@id": "dfc-f:Cow";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Cow";
            readonly "@language": "en";
        }, {
            readonly "@value": "Vache";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Cow";
        readonly "skos:broader": readonly ["dfc-f:AnimalPartOrigin"];
    }, {
        readonly "@id": "dfc-f:CowBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Cow's body";
            readonly "@language": "en";
        }, {
            readonly "@value": "Partie de vache";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "CowBody";
        readonly "skos:broader": readonly ["dfc-f:Cow"];
    }, {
        readonly "@id": "dfc-f:CowMilk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Cow milk";
            readonly "@language": "en";
        }, {
            readonly "@value": "Lait de vache";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "CowMilk";
        readonly "skos:broader": readonly ["dfc-f:Cow"];
    }, {
        readonly "@id": "dfc-f:Cumbria";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cumbria";
        readonly "skos:notation": "Cumbria";
        readonly "skos:broader": readonly ["dfc-f:EnglandNW"];
    }, {
        readonly "@id": "dfc-f:Demeter";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Demeter";
            readonly "@language": "en";
        }, {
            readonly "@value": "Demeter";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Demeter";
        readonly "skos:broader": readonly ["dfc-f:BiodynamicLabel"];
    }, {
        readonly "@id": "dfc-f:Derbyshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Derbyshire";
        readonly "skos:notation": "Derbyshire";
        readonly "skos:broader": readonly ["dfc-f:EastMidlands"];
    }, {
        readonly "@id": "dfc-f:Devon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Devon";
        readonly "skos:notation": "Devon";
        readonly "skos:broader": readonly ["dfc-f:EnglandSW"];
    }, {
        readonly "@id": "dfc-f:Dorset";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Dorset";
        readonly "skos:notation": "Dorset";
        readonly "skos:broader": readonly ["dfc-f:EnglandSW"];
    }, {
        readonly "@id": "dfc-f:DumfriesAndGalloway";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Dumfries and Galloway";
        readonly "skos:notation": "DumfriesAndGalloway";
        readonly "skos:broader": readonly ["dfc-f:SWScotland"];
    }, {
        readonly "@id": "dfc-f:Dunbartonshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Dunbartonshire";
        readonly "skos:notation": "Dunbartonshire";
        readonly "skos:broader": readonly ["dfc-f:SWScotland"];
    }, {
        readonly "@id": "dfc-f:EastMidlands";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "East Midlands";
        readonly "skos:notation": "EastMidlands";
        readonly "skos:broader": readonly ["dfc-f:England"];
    }, {
        readonly "@id": "dfc-f:EastSussex";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "East Sussex";
        readonly "skos:notation": "EastSussex";
        readonly "skos:broader": readonly ["dfc-f:EnglandSE"];
    }, {
        readonly "@id": "dfc-f:EastYorks";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "East Riding of Yorkshire";
        readonly "skos:notation": "EastYorks";
        readonly "skos:broader": readonly ["dfc-f:YorkshireHumber"];
    }, {
        readonly "@id": "dfc-f:EasternScotland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Eastern Scotland";
        readonly "skos:notation": "EasternScotland";
        readonly "skos:broader": readonly ["dfc-f:Scotland"];
    }, {
        readonly "@id": "dfc-f:Edinburgh";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Edinburgh";
        readonly "skos:notation": "Edinburgh";
        readonly "skos:broader": readonly ["dfc-f:EasternScotland"];
    }, {
        readonly "@id": "dfc-f:EnergyFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Energy free";
            readonly "@language": "en";
        }, {
            readonly "@value": "Sans apport énergétique";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "EnergyFree";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:EnergyReduced";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Energy reduced";
            readonly "@language": "en";
        }, {
            readonly "@value": "Valeur énergétique réduite";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "EnergyReduced";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:England";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "England";
            readonly "@language": "en";
        }, {
            readonly "@value": "Angleterre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "England";
        readonly "skos:broader": readonly ["dfc-f:UnitedKingdom"];
    }, {
        readonly "@id": "dfc-f:EnglandE";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "East of England";
        readonly "skos:notation": "EnglandE";
        readonly "skos:broader": readonly ["dfc-f:England"];
    }, {
        readonly "@id": "dfc-f:EnglandNE";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "North East England";
        readonly "skos:notation": "EnglandNE";
        readonly "skos:broader": readonly ["dfc-f:England"];
    }, {
        readonly "@id": "dfc-f:EnglandNW";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "North West England";
        readonly "skos:notation": "EnglandNW";
        readonly "skos:broader": readonly ["dfc-f:England"];
    }, {
        readonly "@id": "dfc-f:EnglandSE";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "South East England";
        readonly "skos:notation": "EnglandSE";
        readonly "skos:broader": readonly ["dfc-f:England"];
    }, {
        readonly "@id": "dfc-f:EnglandSW";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "South West England";
        readonly "skos:notation": "EnglandSW";
        readonly "skos:broader": readonly ["dfc-f:England"];
    }, {
        readonly "@id": "dfc-f:Essex";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Essex";
        readonly "skos:notation": "Essex";
        readonly "skos:broader": readonly ["dfc-f:EnglandE"];
    }, {
        readonly "@id": "dfc-f:EthicalLabel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Ethical label";
            readonly "@language": "en";
        }, {
            readonly "@value": "Label éthique";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "EthicalLabel";
        readonly "skos:broader": readonly ["dfc-f:Certification"];
    }, {
        readonly "@id": "dfc-f:Europe";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Europe";
            readonly "@language": "en";
        }, {
            readonly "@value": "Europe";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Europe";
        readonly "skos:broader": readonly ["dfc-f:TerritorialOrigin"];
    }, {
        readonly "@id": "dfc-f:Ewe";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Ewe";
            readonly "@language": "en";
        }, {
            readonly "@value": "Brebis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Ewe";
        readonly "skos:broader": readonly ["dfc-f:AnimalPartOrigin"];
    }, {
        readonly "@id": "dfc-f:EweBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Ewe's body";
            readonly "@language": "en";
        }, {
            readonly "@value": "Partie de brebis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "EweBody";
        readonly "skos:broader": readonly ["dfc-f:Ewe"];
    }, {
        readonly "@id": "dfc-f:EweMilk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Sheep milk";
            readonly "@language": "en";
        }, {
            readonly "@value": "Lait de brebis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "EweMilk";
        readonly "skos:broader": readonly ["dfc-f:Ewe"];
    }, {
        readonly "@id": "dfc-f:FSC";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Forest Stewardship Council";
            readonly "@language": "en";
        }, {
            readonly "@value": "Forêt durable FSC";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FSC";
        readonly "skos:broader": readonly ["dfc-f:EthicalLabel"];
    }, {
        readonly "@id": "dfc-f:FairTradeMaxHaavelar";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Fairtrade Max Haavelar";
            readonly "@language": "en";
        }, {
            readonly "@value": "Fairtrade Max Haavelar";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FairTradeMaxHaavelar";
        readonly "skos:broader": readonly ["dfc-f:EthicalLabel"];
    }, {
        readonly "@id": "dfc-f:FatFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Fat-free";
            readonly "@language": "en";
        }, {
            readonly "@value": "Sans matières grasses";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FatFree";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:Flower";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Flower";
            readonly "@language": "en";
        }, {
            readonly "@value": "Fleur";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Flower";
        readonly "skos:broader": readonly ["dfc-f:PlantPartOrigin"];
    }, {
        readonly "@id": "dfc-f:France";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "France";
            readonly "@language": "en";
        }, {
            readonly "@value": "France";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "France";
        readonly "skos:broader": readonly ["dfc-f:Europe"];
    }, {
        readonly "@id": "dfc-f:Fruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "Fruit";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Fruit";
        readonly "skos:broader": readonly ["dfc-f:PlantPartOrigin"];
    }, {
        readonly "@id": "dfc-f:Funghi";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Funghi";
            readonly "@language": "en";
        }, {
            readonly "@value": "Champignon";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Funghi";
        readonly "skos:broader": readonly ["dfc-f:NatureOrigin"];
    }, {
        readonly "@id": "dfc-f:Germany";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Germany";
            readonly "@language": "en";
        }, {
            readonly "@value": "Allemagne";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Germany";
        readonly "skos:broader": readonly ["dfc-f:Europe"];
    }, {
        readonly "@id": "dfc-f:Gloucestershire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Gloucestershire";
        readonly "skos:notation": "Gloucestershire";
        readonly "skos:broader": readonly ["dfc-f:EnglandSW"];
    }, {
        readonly "@id": "dfc-f:GlutenFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Gluten free";
            readonly "@language": "en";
        }, {
            readonly "@value": "Sans gluten";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GlutenFree";
        readonly "skos:broader": readonly ["dfc-f:OtherClaim"];
    }, {
        readonly "@id": "dfc-f:Goat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Goat";
            readonly "@language": "en";
        }, {
            readonly "@value": "Chèvre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Goat";
        readonly "skos:broader": readonly ["dfc-f:AnimalPartOrigin"];
    }, {
        readonly "@id": "dfc-f:GoatBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Goat's body";
            readonly "@language": "en";
        }, {
            readonly "@value": "Partie de chèvre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GoatBody";
        readonly "skos:broader": readonly ["dfc-f:Goat"];
    }, {
        readonly "@id": "dfc-f:GoatMilk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Goat milk";
            readonly "@language": "en";
        }, {
            readonly "@value": "Lait de brebis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GoatMilk";
        readonly "skos:broader": readonly ["dfc-f:Goat"];
    }, {
        readonly "@id": "dfc-f:GrandEst";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Grand Est";
            readonly "@language": "en";
        }, {
            readonly "@value": "Grand Est";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GrandEst";
        readonly "skos:broader": readonly ["dfc-f:France"];
    }, {
        readonly "@id": "dfc-f:HEV";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "High Environnemental Value";
            readonly "@language": "en";
        }, {
            readonly "@value": "Haute Valeur Environnementale";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "HEV";
        readonly "skos:broader": readonly ["dfc-f:EthicalLabel"];
    }, {
        readonly "@id": "dfc-f:Hampshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Hampshire";
        readonly "skos:notation": "Hampshire";
        readonly "skos:broader": readonly ["dfc-f:EnglandSE"];
    }, {
        readonly "@id": "dfc-f:HautsDeFrance";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Hauts-de-France";
            readonly "@language": "en";
        }, {
            readonly "@value": "Hauts-de-France";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "HautsDeFrance";
        readonly "skos:broader": readonly ["dfc-f:France"];
    }, {
        readonly "@id": "dfc-f:HealthClaim";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Health claim";
            readonly "@language": "en";
        }, {
            readonly "@value": "Allégation santé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "HealthClaim";
        readonly "skos:broader": readonly ["dfc-f:Claim"];
    }, {
        readonly "@id": "dfc-f:Hen";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Hen";
            readonly "@language": "en";
        }, {
            readonly "@value": "Poule";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Hen";
        readonly "skos:broader": readonly ["dfc-f:AnimalPartOrigin"];
    }, {
        readonly "@id": "dfc-f:HenBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Hen's body";
            readonly "@language": "en";
        }, {
            readonly "@value": "Partie de poule";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "HenBody";
        readonly "skos:broader": readonly ["dfc-f:Hen"];
    }, {
        readonly "@id": "dfc-f:HenEgg";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Hen's egg";
            readonly "@language": "en";
        }, {
            readonly "@value": "Œuf de poule";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "HenEgg";
        readonly "skos:broader": readonly ["dfc-f:Hen"];
    }, {
        readonly "@id": "dfc-f:Herefordshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Herefordshire";
        readonly "skos:notation": "Herefordshire";
        readonly "skos:broader": readonly ["dfc-f:WestMidlands"];
    }, {
        readonly "@id": "dfc-f:Hertfordshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Hertfordshire";
        readonly "skos:notation": "Hertfordshire";
        readonly "skos:broader": readonly ["dfc-f:EnglandE"];
    }, {
        readonly "@id": "dfc-f:HighFibre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "High fibre";
            readonly "@language": "en";
        }, {
            readonly "@value": "Riche en fibres";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "HighFibre";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:HighMonounsaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "High monounsaturated fat";
            readonly "@language": "en";
        }, {
            readonly "@value": "Riche en graisses monoinsaturées";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "HighMonounsaturatedFat";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:HighOmega3FattyAcids";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "High omega-3 fatty acids";
            readonly "@language": "en";
        }, {
            readonly "@value": "Riche en acide gras Oméga-3";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "HighOmega3FattyAcids";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:HighPolyunsaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "High polyunsaturated fat";
            readonly "@language": "en";
        }, {
            readonly "@value": "Riche en graisses polyinsaturées";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "HighPolyunsaturatedFat";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:HighProtein";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "High protein";
            readonly "@language": "en";
        }, {
            readonly "@value": "Riche en protéines";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "HighProtein";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:HighUnsaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "High unsaturated fat";
            readonly "@language": "en";
        }, {
            readonly "@value": "Riche en graisses insaturées";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "HighUnsaturatedFat";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:HighVitaminsMinerals";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "High vitamins and/or minerals";
            readonly "@language": "en";
        }, {
            readonly "@value": "Riche en vitamines et/ou de minéraux";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "HighVitaminsMinerals";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:HighlandsAndIslands";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Highlands and Islands";
        readonly "skos:notation": "HighlandsAndIslands";
        readonly "skos:broader": readonly ["dfc-f:Scotland"];
    }, {
        readonly "@id": "dfc-f:IGPEU";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Indication géographique de provenance";
            readonly "@language": "en";
        }, {
            readonly "@value": "Indication géographique de provenance";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "IGPEU";
        readonly "skos:broader": readonly ["dfc-f:LocalLabel"];
    }, {
        readonly "@id": "dfc-f:IGP_EU";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Indication géographique de provenance";
            readonly "@language": "en";
        }, {
            readonly "@value": "Indication géographique de provenance";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "IGP_EU";
        readonly "skos:broader": readonly ["dfc-f:LocalLabel"];
    }, {
        readonly "@id": "dfc-f:IleDeFrance";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Ile-de-France";
            readonly "@language": "en";
        }, {
            readonly "@value": "Île-de-France";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "IleDeFrance";
        readonly "skos:broader": readonly ["dfc-f:France"];
    }, {
        readonly "@id": "dfc-f:IncreasedNutrient";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Increased nutrient";
            readonly "@language": "en";
        }, {
            readonly "@value": "Enrichi en nutriment";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "IncreasedNutrient";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:Ireland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Republic of Ireland";
            readonly "@language": "en";
        }, {
            readonly "@value": "République d'Irlande";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Ireland";
        readonly "skos:broader": readonly ["dfc-f:Europe"];
    }, {
        readonly "@id": "dfc-f:IsleOfWight";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Isle of Wight";
        readonly "skos:notation": "IsleOfWight";
        readonly "skos:broader": readonly ["dfc-f:EnglandSE"];
    }, {
        readonly "@id": "dfc-f:Italy";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Italy";
            readonly "@language": "en";
        }, {
            readonly "@value": "Italie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Italy";
        readonly "skos:broader": readonly ["dfc-f:Europe"];
    }, {
        readonly "@id": "dfc-f:Kent";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Kent";
        readonly "skos:notation": "Kent";
        readonly "skos:broader": readonly ["dfc-f:EnglandSE"];
    }, {
        readonly "@id": "dfc-f:Lanarkshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Lanarkshire";
        readonly "skos:notation": "Lanarkshire";
        readonly "skos:broader": readonly ["dfc-f:SWScotland"];
    }, {
        readonly "@id": "dfc-f:Lancashire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Lancashire";
        readonly "skos:notation": "Lancashire";
        readonly "skos:broader": readonly ["dfc-f:EnglandNW"];
    }, {
        readonly "@id": "dfc-f:Leaf";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Leaf";
            readonly "@language": "en";
        }, {
            readonly "@value": "Feuille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Leaf";
        readonly "skos:broader": readonly ["dfc-f:PlantPartOrigin"];
    }, {
        readonly "@id": "dfc-f:Leicestershire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Leicestershire";
        readonly "skos:notation": "Leicestershire";
        readonly "skos:broader": readonly ["dfc-f:EastMidlands"];
    }, {
        readonly "@id": "dfc-f:Light";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Light/Lite";
            readonly "@language": "en";
        }, {
            readonly "@value": "Allégé/Light";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Light";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:LightLite";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Low/Light";
            readonly "@language": "en";
        }, {
            readonly "@value": "Allégé/Light";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "LightLite";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:Lincolnshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Lincolnshire";
        readonly "skos:notation": "Lincolnshire";
        readonly "skos:broader": readonly ["dfc-f:EastMidlands", "dfc-f:YorkshireHumber"];
    }, {
        readonly "@id": "dfc-f:LocalLabel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Local label";
            readonly "@language": "en";
        }, {
            readonly "@value": "Label local";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "LocalLabel";
        readonly "skos:broader": readonly ["dfc-f:Certification"];
    }, {
        readonly "@id": "dfc-f:London";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "London";
        readonly "skos:notation": "London";
        readonly "skos:broader": readonly ["dfc-f:England"];
    }, {
        readonly "@id": "dfc-f:Lothian";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Lothian";
        readonly "skos:notation": "Lothian";
        readonly "skos:broader": readonly ["dfc-f:EasternScotland"];
    }, {
        readonly "@id": "dfc-f:LowEnergy";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Low energy";
            readonly "@language": "en";
        }, {
            readonly "@value": "Faible valeur énergétique";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "LowEnergy";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:LowFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Low fat";
            readonly "@language": "en";
        }, {
            readonly "@value": "Faible teneur en matière grasse";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "LowFat";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:LowSaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Low saturated fat";
            readonly "@language": "en";
        }, {
            readonly "@value": "Faible teneur en graisses saturées";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "LowSaturatedFat";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:LowSodiumSalt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Low sodium/salt";
            readonly "@language": "en";
        }, {
            readonly "@value": "Pauvre en sodium/sel";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "LowSodiumSalt";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:LowSugars";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Low sugars";
            readonly "@language": "en";
        }, {
            readonly "@value": "Faible teneur en sucres";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "LowSugars";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:MSC";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Marine Stewardship Council";
            readonly "@language": "en";
        }, {
            readonly "@value": "Pêche durable MSC";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "MSC";
        readonly "skos:broader": readonly ["dfc-f:EthicalLabel"];
    }, {
        readonly "@id": "dfc-f:Manchester";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Greater Manchester";
        readonly "skos:notation": "Manchester";
        readonly "skos:broader": readonly ["dfc-f:EnglandNW"];
    }, {
        readonly "@id": "dfc-f:MarketingLabel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Marketing label";
            readonly "@language": "en";
        }, {
            readonly "@value": "Label marketing";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "MarketingLabel";
        readonly "skos:broader": readonly ["dfc-f:Certification"];
    }, {
        readonly "@id": "dfc-f:Merseyside";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Merseyside";
        readonly "skos:notation": "Merseyside";
        readonly "skos:broader": readonly ["dfc-f:EnglandNW"];
    }, {
        readonly "@id": "dfc-f:Milk-fed";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Milk-fed";
            readonly "@language": "en";
        }, {
            readonly "@value": "Nourri au lait";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Milk-fed";
        readonly "skos:broader": readonly ["dfc-f:EthicalLabel"];
    }, {
        readonly "@id": "dfc-f:MilkFed";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Milk-fed";
            readonly "@language": "en";
        }, {
            readonly "@value": "Nourri au lait";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "MilkFed";
        readonly "skos:broader": readonly ["dfc-f:EthicalLabel"];
    }, {
        readonly "@id": "dfc-f:Mineral";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Mineral";
            readonly "@language": "en";
        }, {
            readonly "@value": "Minéral";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Mineral";
        readonly "skos:broader": readonly ["dfc-f:NatureOrigin"];
    }, {
        readonly "@id": "dfc-f:MultiGeoOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Multi-territorial origin";
            readonly "@language": "en";
        }, {
            readonly "@value": "Origine territorial multiple";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "MultiGeoOrigin";
        readonly "skos:broader": readonly ["dfc-f:TerritorialOrigin"];
    }, {
        readonly "@id": "dfc-f:MultiNatureOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Multiorigin";
            readonly "@language": "en";
        }, {
            readonly "@value": "Origine multiple";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "MultiNatureOrigin";
        readonly "skos:broader": readonly ["dfc-f:NatureOrigin"];
    }, {
        readonly "@id": "dfc-f:MultiOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Multiorigin";
            readonly "@language": "en";
        }, {
            readonly "@value": "Origine multiple";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "MultiOrigin";
        readonly "skos:broader": readonly ["dfc-f:PartOrigin"];
    }, {
        readonly "@id": "dfc-f:NEScotland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "North East Scotland";
        readonly "skos:notation": "NEScotland";
        readonly "skos:broader": readonly ["dfc-f:Scotland"];
    }, {
        readonly "@id": "dfc-f:Natural";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Naturally/Natural";
            readonly "@language": "en";
        }, {
            readonly "@value": "Allégé/Light";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Natural";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:NatureEtProgres";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Nature et progrès";
            readonly "@language": "en";
        }, {
            readonly "@value": "Nature et progrès";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "NatureEtProgres";
        readonly "skos:broader": readonly ["dfc-f:OrganicLabel"];
    }, {
        readonly "@id": "dfc-f:NatureOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Natural origin";
            readonly "@language": "en";
        }, {
            readonly "@value": "Source naturelle d'origine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "NatureOrigin";
    }, {
        readonly "@id": "dfc-f:Netherlands";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Netherlands";
            readonly "@language": "en";
        }, {
            readonly "@value": "Pays bas";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Netherlands";
        readonly "skos:broader": readonly ["dfc-f:Europe"];
    }, {
        readonly "@id": "dfc-f:NewZealand";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "New Zealand";
            readonly "@language": "en";
        }, {
            readonly "@value": "Nouvelle Zélande";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "NewZealand";
        readonly "skos:broader": readonly ["dfc-f:Oceania"];
    }, {
        readonly "@id": "dfc-f:NoAddedSodiumSalt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "No added sodium/salt";
            readonly "@language": "en";
        }, {
            readonly "@value": "Sans sodium/sel ajouté";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "NoAddedSodiumSalt";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:NoAddedSugars";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "With no added sugars";
            readonly "@language": "en";
        }, {
            readonly "@value": "Sans sucres ajoutés";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "NoAddedSugars";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:Norfolk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Norfolk";
        readonly "skos:notation": "Norfolk";
        readonly "skos:broader": readonly ["dfc-f:EnglandE"];
    }, {
        readonly "@id": "dfc-f:Normandy";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Normandy";
            readonly "@language": "en";
        }, {
            readonly "@value": "Normandie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Normandy";
        readonly "skos:broader": readonly ["dfc-f:France"];
    }, {
        readonly "@id": "dfc-f:NorthAmerica";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "North America";
            readonly "@language": "en";
        }, {
            readonly "@value": "Amérique du Nord";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "NorthAmerica";
        readonly "skos:broader": readonly ["dfc-f:TerritorialOrigin"];
    }, {
        readonly "@id": "dfc-f:NorthYorks";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "North Yorkshire";
        readonly "skos:notation": "NorthYorks";
        readonly "skos:broader": readonly ["dfc-f:EnglandNE", "dfc-f:YorkshireHumber"];
    }, {
        readonly "@id": "dfc-f:Northamptonshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Northamptonshire";
        readonly "skos:notation": "Northamptonshire";
        readonly "skos:broader": readonly ["dfc-f:EastMidlands"];
    }, {
        readonly "@id": "dfc-f:NorthernIreland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Northern Ireland";
            readonly "@language": "en";
        }, {
            readonly "@value": "Irlande du Nord";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "NorthernIreland";
        readonly "skos:broader": readonly ["dfc-f:UnitedKingdom"];
    }, {
        readonly "@id": "dfc-f:Northumberland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Northumberland";
        readonly "skos:notation": "Northumberland";
        readonly "skos:broader": readonly ["dfc-f:EnglandNE"];
    }, {
        readonly "@id": "dfc-f:Nottinghamshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Nottinghamshire";
        readonly "skos:notation": "Nottinghamshire";
        readonly "skos:broader": readonly ["dfc-f:EastMidlands"];
    }, {
        readonly "@id": "dfc-f:NouvelleAquitaine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Nouvelle-Aquitaine";
            readonly "@language": "en";
        }, {
            readonly "@value": "Nouvelle-Aquitaine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "NouvelleAquitaine";
        readonly "skos:broader": readonly ["dfc-f:France"];
    }, {
        readonly "@id": "dfc-f:NutritionalClaim";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Nutritional claim";
            readonly "@language": "en";
        }, {
            readonly "@value": "Allégation nutritionnelle";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "NutritionalClaim";
        readonly "skos:broader": readonly ["dfc-f:Claim"];
    }, {
        readonly "@id": "dfc-f:Occitania";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Occitania";
            readonly "@language": "en";
        }, {
            readonly "@value": "Occitanie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Occitania";
        readonly "skos:broader": readonly ["dfc-f:France"];
    }, {
        readonly "@id": "dfc-f:Oceania";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Oceania";
            readonly "@language": "en";
        }, {
            readonly "@value": "Océanie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Oceania";
        readonly "skos:broader": readonly ["dfc-f:TerritorialOrigin"];
    }, {
        readonly "@id": "dfc-f:Organic-AB";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Agriculture Biologique";
            readonly "@language": "en";
        }, {
            readonly "@value": "Agriculture Biologique";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Organic-AB";
        readonly "skos:broader": readonly ["dfc-f:OrganicLabel"];
    }, {
        readonly "@id": "dfc-f:Organic-BioCoherence";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Bio Coherence";
            readonly "@language": "en";
        }, {
            readonly "@value": "Bio Coherence";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Organic-BioCoherence";
        readonly "skos:broader": readonly ["dfc-f:OrganicLabel"];
    }, {
        readonly "@id": "dfc-f:Organic-EU";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "EU Organic Farming";
            readonly "@language": "en";
        }, {
            readonly "@value": "Agriculture Biologique EU";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Organic-EU";
        readonly "skos:broader": readonly ["dfc-f:OrganicLabel"];
    }, {
        readonly "@id": "dfc-f:OrganicAB";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Agriculture Biologique";
            readonly "@language": "en";
        }, {
            readonly "@value": "Agriculture Biologique";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "OrganicAB";
        readonly "skos:broader": readonly ["dfc-f:OrganicLabel"];
    }, {
        readonly "@id": "dfc-f:OrganicBioCoherence";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Bio Coherence";
            readonly "@language": "en";
        }, {
            readonly "@value": "Bio Coherence";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "OrganicBioCoherence";
        readonly "skos:broader": readonly ["dfc-f:OrganicLabel"];
    }, {
        readonly "@id": "dfc-f:OrganicEU";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "EU Organic Farming";
            readonly "@language": "en";
        }, {
            readonly "@value": "Agriculture Biologique EU";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "OrganicEU";
        readonly "skos:broader": readonly ["dfc-f:OrganicLabel"];
    }, {
        readonly "@id": "dfc-f:OrganicLabel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Organic label";
            readonly "@language": "en";
        }, {
            readonly "@value": "Label biologique";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "OrganicLabel";
        readonly "skos:broader": readonly ["dfc-f:Certification"];
    }, {
        readonly "@id": "dfc-f:OtherClaim";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Other claim";
            readonly "@language": "en";
        }, {
            readonly "@value": "Autre allégation";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "OtherClaim";
        readonly "skos:broader": readonly ["dfc-f:Claim"];
    }, {
        readonly "@id": "dfc-f:Oxfordshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Oxfordshire";
        readonly "skos:notation": "Oxfordshire";
        readonly "skos:broader": readonly ["dfc-f:EnglandSE"];
    }, {
        readonly "@id": "dfc-f:PGS";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Protected Geographical Status";
            readonly "@language": "en";
        }, {
            readonly "@value": "Statut géographique protégé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "PGS";
        readonly "skos:broader": readonly ["dfc-f:LocalLabel"];
    }, {
        readonly "@id": "dfc-f:Package";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Package";
        readonly "skos:notation": "Package";
        readonly "skos:broader": readonly ["dfc-f:ContainerInformation"];
    }, {
        readonly "@id": "dfc-f:PartOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Part of origin";
            readonly "@language": "en";
        }, {
            readonly "@value": "Partie d'origine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "PartOrigin";
    }, {
        readonly "@id": "dfc-f:PaysDeLoire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Pays de la Loire";
            readonly "@language": "en";
        }, {
            readonly "@value": "Pays de la Loire";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "PaysDeLoire";
        readonly "skos:broader": readonly ["dfc-f:France"];
    }, {
        readonly "@id": "dfc-f:PaysansDeNatureFR";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Paysans de Nature";
            readonly "@language": "en";
        }, {
            readonly "@value": "Paysans de Nature";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "PaysansDeNatureFR";
        readonly "skos:broader": readonly ["dfc-f:LocalLabel"];
    }, {
        readonly "@id": "dfc-f:PaysansDeNature_FR";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Paysans de Nature";
            readonly "@language": "en";
        }, {
            readonly "@value": "Paysans de Nature";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "PaysansDeNature_FR";
        readonly "skos:broader": readonly ["dfc-f:LocalLabel"];
    }, {
        readonly "@id": "dfc-f:Pig";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Pig";
            readonly "@language": "en";
        }, {
            readonly "@value": "Cochon";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Pig";
        readonly "skos:broader": readonly ["dfc-f:AnimalPartOrigin"];
    }, {
        readonly "@id": "dfc-f:PigBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Pig's body";
            readonly "@language": "en";
        }, {
            readonly "@value": "Partie du cochon";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "PigBody";
        readonly "skos:broader": readonly ["dfc-f:Pig"];
    }, {
        readonly "@id": "dfc-f:PlantOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Plant";
            readonly "@language": "en";
        }, {
            readonly "@value": "Plante";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "PlantOrigin";
        readonly "skos:broader": readonly ["dfc-f:NatureOrigin"];
    }, {
        readonly "@id": "dfc-f:PlantPartOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Part or product of plant";
            readonly "@language": "en";
        }, {
            readonly "@value": "Partie ou produit d'une plante";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "PlantPartOrigin";
        readonly "skos:broader": readonly ["dfc-f:PartOrigin"];
    }, {
        readonly "@id": "dfc-f:Portugal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Portugal";
            readonly "@language": "en";
        }, {
            readonly "@value": "Portugal";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Portugal";
        readonly "skos:broader": readonly ["dfc-f:Europe"];
    }, {
        readonly "@id": "dfc-f:ProductOfTheYear";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Product of the year";
            readonly "@language": "en";
        }, {
            readonly "@value": "Elu produit de l'année";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ProductOfTheYear";
        readonly "skos:broader": readonly ["dfc-f:MarketingLabel"];
    }, {
        readonly "@id": "dfc-f:ProvenceAlpesCotesAzur";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Provence-Alpes-Côte d’Azur";
            readonly "@language": "en";
        }, {
            readonly "@value": "Provence-Alpes-Côte d’Azur";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ProvenceAlpesCotesAzur";
        readonly "skos:broader": readonly ["dfc-f:France"];
    }, {
        readonly "@id": "dfc-f:Quail";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Quail";
            readonly "@language": "en";
        }, {
            readonly "@value": "Caille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Quail";
        readonly "skos:broader": readonly ["dfc-f:AnimalPartOrigin"];
    }, {
        readonly "@id": "dfc-f:QuailEgg";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Quail's egg";
            readonly "@language": "en";
        }, {
            readonly "@value": "Œuf de caille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "QuailEgg";
        readonly "skos:broader": readonly ["dfc-f:Quail"];
    }, {
        readonly "@id": "dfc-f:RainforestAlliance";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Rainforest Alliance";
            readonly "@language": "en";
        }, {
            readonly "@value": "Rainforest Alliance";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "RainforestAlliance";
        readonly "skos:broader": readonly ["dfc-f:EthicalLabel"];
    }, {
        readonly "@id": "dfc-f:RedLabelFR";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Label Rouge";
            readonly "@language": "en";
        }, {
            readonly "@value": "Label Rouge";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "RedLabelFR";
        readonly "skos:broader": readonly ["dfc-f:EthicalLabel"];
    }, {
        readonly "@id": "dfc-f:RedLabel_FR";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Label Rouge";
            readonly "@language": "en";
        }, {
            readonly "@value": "Label Rouge";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "RedLabel_FR";
        readonly "skos:broader": readonly ["dfc-f:EthicalLabel"];
    }, {
        readonly "@id": "dfc-f:ReducedNutrient";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Reduced nutrient";
            readonly "@language": "en";
        }, {
            readonly "@value": "Réduit en nutriment";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ReducedNutrient";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:Renfrewshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Renfrewshire";
        readonly "skos:notation": "Renfrewshire";
        readonly "skos:broader": readonly ["dfc-f:SWScotland"];
    }, {
        readonly "@id": "dfc-f:Rooster";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Rooster";
            readonly "@language": "en";
        }, {
            readonly "@value": "Coq";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Rooster";
        readonly "skos:broader": readonly ["dfc-f:AnimalPartOrigin"];
    }, {
        readonly "@id": "dfc-f:RoosterBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Rooster's body";
            readonly "@language": "en";
        }, {
            readonly "@value": "Partie de coq";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "RoosterBody";
        readonly "skos:broader": readonly ["dfc-f:Rooster"];
    }, {
        readonly "@id": "dfc-f:Root";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Root";
            readonly "@language": "en";
        }, {
            readonly "@value": "Racine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Root";
        readonly "skos:broader": readonly ["dfc-f:PlantPartOrigin"];
    }, {
        readonly "@id": "dfc-f:Rutland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Rutland";
        readonly "skos:notation": "Rutland";
        readonly "skos:broader": readonly ["dfc-f:EastMidlands"];
    }, {
        readonly "@id": "dfc-f:SWScotland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "South Western Scotland";
        readonly "skos:notation": "SWScotland";
        readonly "skos:broader": readonly ["dfc-f:Scotland"];
    }, {
        readonly "@id": "dfc-f:SaturatedFatFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Saturated fat-free";
            readonly "@language": "en";
        }, {
            readonly "@value": "Sans graisses saturées";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SaturatedFatFree";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:Scotland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Scotland";
            readonly "@language": "en";
        }, {
            readonly "@value": "Ecosse";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Scotland";
        readonly "skos:broader": readonly ["dfc-f:UnitedKingdom"];
    }, {
        readonly "@id": "dfc-f:ScottishBorders";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Scottish Borders";
        readonly "skos:notation": "ScottishBorders";
        readonly "skos:broader": readonly ["dfc-f:EasternScotland"];
    }, {
        readonly "@id": "dfc-f:Seed";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Seed";
            readonly "@language": "en";
        }, {
            readonly "@value": "Graine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Seed";
        readonly "skos:broader": readonly ["dfc-f:PlantPartOrigin"];
    }, {
        readonly "@id": "dfc-f:Sheep";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Sheep";
            readonly "@language": "en";
        }, {
            readonly "@value": "Mouton";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Sheep";
        readonly "skos:broader": readonly ["dfc-f:AnimalPartOrigin"];
    }, {
        readonly "@id": "dfc-f:SheepBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Sheep's body";
            readonly "@language": "en";
        }, {
            readonly "@value": "Partie de mouton";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SheepBody";
        readonly "skos:broader": readonly ["dfc-f:Sheep"];
    }, {
        readonly "@id": "dfc-f:Shropshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Shropshire";
        readonly "skos:notation": "Shropshire";
        readonly "skos:broader": readonly ["dfc-f:WestMidlands"];
    }, {
        readonly "@id": "dfc-f:SodiumOrSaltFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Sodium-free or salt-free";
            readonly "@language": "en";
        }, {
            readonly "@value": "Sans sodium ou sans sel";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SodiumOrSaltFree";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:Somerset";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Somerset";
        readonly "skos:notation": "Somerset";
        readonly "skos:broader": readonly ["dfc-f:EnglandSW"];
    }, {
        readonly "@id": "dfc-f:SourceOfFibre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Source of fibre";
            readonly "@language": "en";
        }, {
            readonly "@value": "Source de fibres";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SourceOfFibre";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:SourceOfOmega3FattyAcids";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Source of omega-3 fatty acids";
            readonly "@language": "en";
        }, {
            readonly "@value": "Source d'acide gras Oméga-3";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SourceOfOmega3FattyAcids";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:SourceOfProtein";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Source of protein";
            readonly "@language": "en";
        }, {
            readonly "@value": "Source de protéine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SourceOfProtein";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:SourceOfVitaminsMinerals";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Source of vitamins and/or minerals";
            readonly "@language": "en";
        }, {
            readonly "@value": "Source de vitamines et/ou de minéraux";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SourceOfVitaminsMinerals";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:SouthAmerica";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "South America";
            readonly "@language": "en";
        }, {
            readonly "@value": "Amérique du Sud";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SouthAmerica";
        readonly "skos:broader": readonly ["dfc-f:TerritorialOrigin"];
    }, {
        readonly "@id": "dfc-f:SouthYorks";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "South Yorkshire";
        readonly "skos:notation": "SouthYorks";
        readonly "skos:broader": readonly ["dfc-f:YorkshireHumber"];
    }, {
        readonly "@id": "dfc-f:Spain";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Spain";
            readonly "@language": "en";
        }, {
            readonly "@value": "Espagne";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Spain";
        readonly "skos:broader": readonly ["dfc-f:Europe"];
    }, {
        readonly "@id": "dfc-f:Staffordshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Staffordshire";
        readonly "skos:notation": "Staffordshire";
        readonly "skos:broader": readonly ["dfc-f:WestMidlands"];
    }, {
        readonly "@id": "dfc-f:Stem";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Stem";
            readonly "@language": "en";
        }, {
            readonly "@value": "Tige";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Stem";
        readonly "skos:broader": readonly ["dfc-f:PlantPartOrigin"];
    }, {
        readonly "@id": "dfc-f:Suffolk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Suffolk";
        readonly "skos:notation": "Suffolk";
        readonly "skos:broader": readonly ["dfc-f:EnglandE"];
    }, {
        readonly "@id": "dfc-f:SugarsFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Sugars-free";
            readonly "@language": "en";
        }, {
            readonly "@value": "Faible teneur en sucres";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SugarsFree";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:Surrey";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Surrey";
        readonly "skos:notation": "Surrey";
        readonly "skos:broader": readonly ["dfc-f:EnglandSE"];
    }, {
        readonly "@id": "dfc-f:Switzerland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Switzerland";
            readonly "@language": "en";
        }, {
            readonly "@value": "Suisse";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Switzerland";
        readonly "skos:broader": readonly ["dfc-f:Europe"];
    }, {
        readonly "@id": "dfc-f:TasteOfTheYear";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Taste of the year";
            readonly "@language": "en";
        }, {
            readonly "@value": "Reconnu Saveur de l’année";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "TasteOfTheYear";
        readonly "skos:broader": readonly ["dfc-f:MarketingLabel"];
    }, {
        readonly "@id": "dfc-f:TerritorialOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Territorial origin";
            readonly "@language": "en";
        }, {
            readonly "@value": "Origine géographique";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "TerritorialOrigin";
    }, {
        readonly "@id": "dfc-f:Tuber";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Tuber";
            readonly "@language": "en";
        }, {
            readonly "@value": "Tubercule";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Tuber";
        readonly "skos:broader": readonly ["dfc-f:PlantPartOrigin"];
    }, {
        readonly "@id": "dfc-f:TyneWear";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Tyne & Wear";
        readonly "skos:notation": "TyneWear";
        readonly "skos:broader": readonly ["dfc-f:EnglandNE"];
    }, {
        readonly "@id": "dfc-f:UnitedKingdom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "United Kingdom";
            readonly "@language": "en";
        }, {
            readonly "@value": "Royaume Uni";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "UnitedKingdom";
        readonly "skos:broader": readonly ["dfc-f:Europe"];
    }, {
        readonly "@id": "dfc-f:UnknownGeoOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Unknown territorial origin";
            readonly "@language": "en";
        }, {
            readonly "@value": "Origine territoriale inconnue";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "UnknownGeoOrigin";
        readonly "skos:broader": readonly ["dfc-f:TerritorialOrigin"];
    }, {
        readonly "@id": "dfc-f:UnknownLabel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Unknown label";
            readonly "@language": "en";
        }, {
            readonly "@value": "Label inconnu";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "UnknownLabel";
        readonly "skos:broader": readonly ["dfc-f:Certification"];
    }, {
        readonly "@id": "dfc-f:UnknownNatureOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Unknown nature origin";
            readonly "@language": "en";
        }, {
            readonly "@value": "Source d'origine inconnue";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "UnknownNatureOrigin";
        readonly "skos:broader": readonly ["dfc-f:NatureOrigin"];
    }, {
        readonly "@id": "dfc-f:UnknownPartOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Unknown part origin";
            readonly "@language": "en";
        }, {
            readonly "@value": "Partie d'origine inconnue";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "UnknownPartOrigin";
        readonly "skos:broader": readonly ["dfc-f:PartOrigin"];
    }, {
        readonly "@id": "dfc-f:Vegan";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Vegan";
            readonly "@language": "en";
        }, {
            readonly "@value": "Vegan";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Vegan";
        readonly "skos:broader": readonly ["dfc-f:OtherClaim"];
    }, {
        readonly "@id": "dfc-f:Vegetarian";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Vegetarian";
            readonly "@language": "en";
        }, {
            readonly "@value": "Végétarien";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Vegetarian";
        readonly "skos:broader": readonly ["dfc-f:OtherClaim"];
    }, {
        readonly "@id": "dfc-f:VeryLowSodiumSalt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Very low sodium/salt";
            readonly "@language": "en";
        }, {
            readonly "@value": "Très pauvre en sodium/sel";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "VeryLowSodiumSalt";
        readonly "skos:broader": readonly ["dfc-f:NutritionalClaim"];
    }, {
        readonly "@id": "dfc-f:Wales";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Wales";
            readonly "@language": "en";
        }, {
            readonly "@value": "Pays de Galles";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Wales";
        readonly "skos:broader": readonly ["dfc-f:UnitedKingdom"];
    }, {
        readonly "@id": "dfc-f:Warwickshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Warwickshire";
        readonly "skos:notation": "Warwickshire";
        readonly "skos:broader": readonly ["dfc-f:WestMidlands"];
    }, {
        readonly "@id": "dfc-f:Water";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Water";
            readonly "@language": "en";
        }, {
            readonly "@value": "Eau";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Water";
        readonly "skos:broader": readonly ["dfc-f:NatureOrigin"];
    }, {
        readonly "@id": "dfc-f:WestMidlands";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "West Midlands";
        readonly "skos:notation": "WestMidlands";
        readonly "skos:broader": readonly ["dfc-f:England"];
    }, {
        readonly "@id": "dfc-f:WestMidlandsConurbation";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "West Midlands Conurbation";
        readonly "skos:notation": "WestMidlandsConurbation";
        readonly "skos:broader": readonly ["dfc-f:WestMidlands"];
    }, {
        readonly "@id": "dfc-f:WestSussex";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "West Sussex";
        readonly "skos:notation": "WestSussex";
        readonly "skos:broader": readonly ["dfc-f:EnglandSE"];
    }, {
        readonly "@id": "dfc-f:WestYorks";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "West Yorkshire";
        readonly "skos:notation": "WestYorks";
        readonly "skos:broader": readonly ["dfc-f:YorkshireHumber"];
    }, {
        readonly "@id": "dfc-f:WholePlant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Whole plant";
            readonly "@language": "en";
        }, {
            readonly "@value": "Plante entière";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "WholePlant";
        readonly "skos:broader": readonly ["dfc-f:PlantPartOrigin"];
    }, {
        readonly "@id": "dfc-f:Wiltshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Wiltshire";
        readonly "skos:notation": "Wiltshire";
        readonly "skos:broader": readonly ["dfc-f:EnglandSW"];
    }, {
        readonly "@id": "dfc-f:Worcestershire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Worcestershire";
        readonly "skos:notation": "Worcestershire";
        readonly "skos:broader": readonly ["dfc-f:WestMidlands"];
    }, {
        readonly "@id": "dfc-f:YorkshireHumber";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Yorkshire and The Humber";
        readonly "skos:notation": "YorkshireHumber";
        readonly "skos:broader": readonly ["dfc-f:England"];
    }];
};
export default _default;
