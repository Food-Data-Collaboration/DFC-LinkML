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
            "@id": "dfc-f:DFCProductGlossaryFacet",
            "@type": [
                "skos:ConceptScheme"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Product glossary facets",
                    "@language": "en"
                },
                {
                    "@value": "Glossaire des facettes de produit",
                    "@language": "fr"
                }
            ],
            "skos:hasTopConcept": [
                "dfc-f:Certification",
                "dfc-f:Claim",
                "dfc-f:ContainerInformation",
                "dfc-f:NatureOrigin",
                "dfc-f:PartOrigin",
                "dfc-f:TerritorialOrigin"
            ]
        },
        {
            "@id": "dfc-f:AOCFR",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Appellation d’origine contrôlée",
                    "@language": "en"
                },
                {
                    "@value": "Appellation d’origine contrôlée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "AOCFR",
            "skos:broader": [
                "dfc-f:LocalLabel"
            ]
        },
        {
            "@id": "dfc-f:AOC_FR",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Appellation d’origine contrôlée",
                    "@language": "en"
                },
                {
                    "@value": "Appellation d’origine contrôlée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "AOC_FR",
            "skos:broader": [
                "dfc-f:LocalLabel"
            ]
        },
        {
            "@id": "dfc-f:AOPEU",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Appellation d’origine protégée",
                    "@language": "en"
                },
                {
                    "@value": "Appellation d’origine protégée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "AOPEU",
            "skos:broader": [
                "dfc-f:LocalLabel"
            ]
        },
        {
            "@id": "dfc-f:AOP_EU",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Appellation d’origine protégée",
                    "@language": "en"
                },
                {
                    "@value": "Appellation d’origine protégée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "AOP_EU",
            "skos:broader": [
                "dfc-f:LocalLabel"
            ]
        },
        {
            "@id": "dfc-f:Aberdeenshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Aberdeenshire",
            "skos:notation": "Aberdeenshire",
            "skos:broader": [
                "dfc-f:Scotland"
            ]
        },
        {
            "@id": "dfc-f:Africa",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Africa",
                    "@language": "en"
                },
                {
                    "@value": "Afrique",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Africa",
            "skos:broader": [
                "dfc-f:TerritorialOrigin"
            ]
        },
        {
            "@id": "dfc-f:Algae",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Algae",
                    "@language": "en"
                },
                {
                    "@value": "Algue",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Algae",
            "skos:broader": [
                "dfc-f:NatureOrigin"
            ]
        },
        {
            "@id": "dfc-f:AnimalOrigin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Animal",
                    "@language": "en"
                },
                {
                    "@value": "Animal",
                    "@language": "fr"
                }
            ],
            "skos:notation": "AnimalOrigin",
            "skos:broader": [
                "dfc-f:NatureOrigin"
            ]
        },
        {
            "@id": "dfc-f:AnimalPartOrigin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Part or product of animal",
                    "@language": "en"
                },
                {
                    "@value": "Partie ou produit d'un animal",
                    "@language": "fr"
                }
            ],
            "skos:notation": "AnimalPartOrigin",
            "skos:broader": [
                "dfc-f:PartOrigin"
            ]
        },
        {
            "@id": "dfc-f:Asia",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Asia",
                    "@language": "en"
                },
                {
                    "@value": "Asie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Asia",
            "skos:broader": [
                "dfc-f:TerritorialOrigin"
            ]
        },
        {
            "@id": "dfc-f:Australia",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Australia",
                    "@language": "en"
                },
                {
                    "@value": "Australie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Australia",
            "skos:broader": [
                "dfc-f:Oceania"
            ]
        },
        {
            "@id": "dfc-f:AuvergneRhoneAlpes",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Auvergne-Rhône-Alpes",
                    "@language": "en"
                },
                {
                    "@value": "Auvergne-Rhône-Alpes",
                    "@language": "fr"
                }
            ],
            "skos:notation": "AuvergneRhoneAlpes",
            "skos:broader": [
                "dfc-f:France"
            ]
        },
        {
            "@id": "dfc-f:Ayrshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Ayrshire",
            "skos:notation": "Ayrshire",
            "skos:broader": [
                "dfc-f:SWScotland"
            ]
        },
        {
            "@id": "dfc-f:Bacteria",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Bacteria",
                    "@language": "en"
                },
                {
                    "@value": "Bactérie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Bacteria",
            "skos:broader": [
                "dfc-f:NatureOrigin"
            ]
        },
        {
            "@id": "dfc-f:Bedfordshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Bedfordshire",
            "skos:notation": "Bedfordshire",
            "skos:broader": [
                "dfc-f:EnglandE"
            ]
        },
        {
            "@id": "dfc-f:Bee",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Bee",
                    "@language": "en"
                },
                {
                    "@value": "Abeille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Bee",
            "skos:broader": [
                "dfc-f:AnimalPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:BeeHoney",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Honey",
                    "@language": "en"
                },
                {
                    "@value": "Miel",
                    "@language": "fr"
                }
            ],
            "skos:notation": "BeeHoney",
            "skos:broader": [
                "dfc-f:Bee"
            ]
        },
        {
            "@id": "dfc-f:BeePollen",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Pollen",
                    "@language": "en"
                },
                {
                    "@value": "Pollen",
                    "@language": "fr"
                }
            ],
            "skos:notation": "BeePollen",
            "skos:broader": [
                "dfc-f:Bee"
            ]
        },
        {
            "@id": "dfc-f:BeePropolis",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Propolis",
                    "@language": "en"
                },
                {
                    "@value": "Propolis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "BeePropolis",
            "skos:broader": [
                "dfc-f:Bee"
            ]
        },
        {
            "@id": "dfc-f:BeeVenom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Venom",
                    "@language": "en"
                },
                {
                    "@value": "Venim d'abeille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "BeeVenom",
            "skos:broader": [
                "dfc-f:Bee"
            ]
        },
        {
            "@id": "dfc-f:BeeWax",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Wax",
                    "@language": "en"
                },
                {
                    "@value": "Cire d'abeille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "BeeWax",
            "skos:broader": [
                "dfc-f:Bee"
            ]
        },
        {
            "@id": "dfc-f:Belgium",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Belgium",
                    "@language": "en"
                },
                {
                    "@value": "Belgique",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Belgium",
            "skos:broader": [
                "dfc-f:Europe"
            ]
        },
        {
            "@id": "dfc-f:Berkshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Berkshire",
            "skos:notation": "Berkshire",
            "skos:broader": [
                "dfc-f:EnglandSE"
            ]
        },
        {
            "@id": "dfc-f:BiodynamicLabel",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Biodynamic label",
                    "@language": "en"
                },
                {
                    "@value": "Label biodynamie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "BiodynamicLabel",
            "skos:broader": [
                "dfc-f:Certification"
            ]
        },
        {
            "@id": "dfc-f:BleuBlancCoeurFR",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Bleu-Blanc-Coeur",
                    "@language": "en"
                },
                {
                    "@value": "Bleu-Blanc-Coeur",
                    "@language": "fr"
                }
            ],
            "skos:notation": "BleuBlancCoeurFR",
            "skos:broader": [
                "dfc-f:EthicalLabel"
            ]
        },
        {
            "@id": "dfc-f:BleuBlancCoeur_FR",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Bleu-Blanc-Coeur",
                    "@language": "en"
                },
                {
                    "@value": "Bleu-Blanc-Coeur",
                    "@language": "fr"
                }
            ],
            "skos:notation": "BleuBlancCoeur_FR",
            "skos:broader": [
                "dfc-f:EthicalLabel"
            ]
        },
        {
            "@id": "dfc-f:BourgogneFrancheComte",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Bourgogne-Franche-Comté",
                    "@language": "en"
                },
                {
                    "@value": "Bourgogne-Franche-Comté",
                    "@language": "fr"
                }
            ],
            "skos:notation": "BourgogneFrancheComte",
            "skos:broader": [
                "dfc-f:France"
            ]
        },
        {
            "@id": "dfc-f:Bristol",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Bristol",
            "skos:notation": "Bristol",
            "skos:broader": [
                "dfc-f:EnglandSW"
            ]
        },
        {
            "@id": "dfc-f:Brittany",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Brittany",
                    "@language": "en"
                },
                {
                    "@value": "Bretagne",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Brittany",
            "skos:broader": [
                "dfc-f:France"
            ]
        },
        {
            "@id": "dfc-f:Buckinghamshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Buckinghamshire",
            "skos:notation": "Buckinghamshire",
            "skos:broader": [
                "dfc-f:EnglandSE"
            ]
        },
        {
            "@id": "dfc-f:Bulb",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Bulb",
                    "@language": "en"
                },
                {
                    "@value": "Bulbe",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Bulb",
            "skos:broader": [
                "dfc-f:PlantPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:Bull",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Bull",
                    "@language": "en"
                },
                {
                    "@value": "Bœuf",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Bull",
            "skos:broader": [
                "dfc-f:AnimalPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:BullBody",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Bull's body",
                    "@language": "en"
                },
                {
                    "@value": "Partie du boeuf",
                    "@language": "fr"
                }
            ],
            "skos:notation": "BullBody",
            "skos:broader": [
                "dfc-f:Bull"
            ]
        },
        {
            "@id": "dfc-f:Cambridgeshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Cambridgeshire",
            "skos:notation": "Cambridgeshire",
            "skos:broader": [
                "dfc-f:EnglandE"
            ]
        },
        {
            "@id": "dfc-f:CentreValLoire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Centre-Val de Loire",
                    "@language": "en"
                },
                {
                    "@value": "Centre-Val de Loire",
                    "@language": "fr"
                }
            ],
            "skos:notation": "CentreValLoire",
            "skos:broader": [
                "dfc-f:France"
            ]
        },
        {
            "@id": "dfc-f:Certification",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Certification",
                    "@language": "en"
                },
                {
                    "@value": "Certification",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Certification"
        },
        {
            "@id": "dfc-f:Cheshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Cheshire",
            "skos:notation": "Cheshire",
            "skos:broader": [
                "dfc-f:EnglandNW"
            ]
        },
        {
            "@id": "dfc-f:Chicken",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Chicken",
                    "@language": "en"
                },
                {
                    "@value": "Poulet",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Chicken",
            "skos:broader": [
                "dfc-f:AnimalPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:ChickenBody",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Chicken's body",
                    "@language": "en"
                },
                {
                    "@value": "Partie du poulet",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ChickenBody",
            "skos:broader": [
                "dfc-f:Chicken"
            ]
        },
        {
            "@id": "dfc-f:Claim",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Nutrition and health claims",
                    "@language": "en"
                },
                {
                    "@value": "Allégations nutritionnelles et de santé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Claim"
        },
        {
            "@id": "dfc-f:ContainerInformation",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Container Information",
            "skos:notation": "ContainerInformation"
        },
        {
            "@id": "dfc-f:ContainsNutrientOrSubstance",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Contains nutrient or other substance",
                    "@language": "en"
                },
                {
                    "@value": "Contient nutriment ou autre substance",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ContainsNutrientOrSubstance",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:Cornwall",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Cornwall",
            "skos:notation": "Cornwall",
            "skos:broader": [
                "dfc-f:EnglandSW"
            ]
        },
        {
            "@id": "dfc-f:Corsica",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Corsica",
                    "@language": "en"
                },
                {
                    "@value": "Corse",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Corsica",
            "skos:broader": [
                "dfc-f:France"
            ]
        },
        {
            "@id": "dfc-f:CountyDurham",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "County Durham",
            "skos:notation": "CountyDurham",
            "skos:broader": [
                "dfc-f:EnglandNE"
            ]
        },
        {
            "@id": "dfc-f:Cow",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Cow",
                    "@language": "en"
                },
                {
                    "@value": "Vache",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Cow",
            "skos:broader": [
                "dfc-f:AnimalPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:CowBody",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Cow's body",
                    "@language": "en"
                },
                {
                    "@value": "Partie de vache",
                    "@language": "fr"
                }
            ],
            "skos:notation": "CowBody",
            "skos:broader": [
                "dfc-f:Cow"
            ]
        },
        {
            "@id": "dfc-f:CowMilk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Cow milk",
                    "@language": "en"
                },
                {
                    "@value": "Lait de vache",
                    "@language": "fr"
                }
            ],
            "skos:notation": "CowMilk",
            "skos:broader": [
                "dfc-f:Cow"
            ]
        },
        {
            "@id": "dfc-f:Cumbria",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Cumbria",
            "skos:notation": "Cumbria",
            "skos:broader": [
                "dfc-f:EnglandNW"
            ]
        },
        {
            "@id": "dfc-f:Demeter",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Demeter",
                    "@language": "en"
                },
                {
                    "@value": "Demeter",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Demeter",
            "skos:broader": [
                "dfc-f:BiodynamicLabel"
            ]
        },
        {
            "@id": "dfc-f:Derbyshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Derbyshire",
            "skos:notation": "Derbyshire",
            "skos:broader": [
                "dfc-f:EastMidlands"
            ]
        },
        {
            "@id": "dfc-f:Devon",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Devon",
            "skos:notation": "Devon",
            "skos:broader": [
                "dfc-f:EnglandSW"
            ]
        },
        {
            "@id": "dfc-f:Dorset",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Dorset",
            "skos:notation": "Dorset",
            "skos:broader": [
                "dfc-f:EnglandSW"
            ]
        },
        {
            "@id": "dfc-f:DumfriesAndGalloway",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Dumfries and Galloway",
            "skos:notation": "DumfriesAndGalloway",
            "skos:broader": [
                "dfc-f:SWScotland"
            ]
        },
        {
            "@id": "dfc-f:Dunbartonshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Dunbartonshire",
            "skos:notation": "Dunbartonshire",
            "skos:broader": [
                "dfc-f:SWScotland"
            ]
        },
        {
            "@id": "dfc-f:EastMidlands",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "East Midlands",
            "skos:notation": "EastMidlands",
            "skos:broader": [
                "dfc-f:England"
            ]
        },
        {
            "@id": "dfc-f:EastSussex",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "East Sussex",
            "skos:notation": "EastSussex",
            "skos:broader": [
                "dfc-f:EnglandSE"
            ]
        },
        {
            "@id": "dfc-f:EastYorks",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "East Riding of Yorkshire",
            "skos:notation": "EastYorks",
            "skos:broader": [
                "dfc-f:YorkshireHumber"
            ]
        },
        {
            "@id": "dfc-f:EasternScotland",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Eastern Scotland",
            "skos:notation": "EasternScotland",
            "skos:broader": [
                "dfc-f:Scotland"
            ]
        },
        {
            "@id": "dfc-f:Edinburgh",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Edinburgh",
            "skos:notation": "Edinburgh",
            "skos:broader": [
                "dfc-f:EasternScotland"
            ]
        },
        {
            "@id": "dfc-f:EnergyFree",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Energy free",
                    "@language": "en"
                },
                {
                    "@value": "Sans apport énergétique",
                    "@language": "fr"
                }
            ],
            "skos:notation": "EnergyFree",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:EnergyReduced",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Energy reduced",
                    "@language": "en"
                },
                {
                    "@value": "Valeur énergétique réduite",
                    "@language": "fr"
                }
            ],
            "skos:notation": "EnergyReduced",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:England",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "England",
                    "@language": "en"
                },
                {
                    "@value": "Angleterre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "England",
            "skos:broader": [
                "dfc-f:UnitedKingdom"
            ]
        },
        {
            "@id": "dfc-f:EnglandE",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "East of England",
            "skos:notation": "EnglandE",
            "skos:broader": [
                "dfc-f:England"
            ]
        },
        {
            "@id": "dfc-f:EnglandNE",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "North East England",
            "skos:notation": "EnglandNE",
            "skos:broader": [
                "dfc-f:England"
            ]
        },
        {
            "@id": "dfc-f:EnglandNW",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "North West England",
            "skos:notation": "EnglandNW",
            "skos:broader": [
                "dfc-f:England"
            ]
        },
        {
            "@id": "dfc-f:EnglandSE",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "South East England",
            "skos:notation": "EnglandSE",
            "skos:broader": [
                "dfc-f:England"
            ]
        },
        {
            "@id": "dfc-f:EnglandSW",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "South West England",
            "skos:notation": "EnglandSW",
            "skos:broader": [
                "dfc-f:England"
            ]
        },
        {
            "@id": "dfc-f:Essex",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Essex",
            "skos:notation": "Essex",
            "skos:broader": [
                "dfc-f:EnglandE"
            ]
        },
        {
            "@id": "dfc-f:EthicalLabel",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Ethical label",
                    "@language": "en"
                },
                {
                    "@value": "Label éthique",
                    "@language": "fr"
                }
            ],
            "skos:notation": "EthicalLabel",
            "skos:broader": [
                "dfc-f:Certification"
            ]
        },
        {
            "@id": "dfc-f:Europe",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Europe",
                    "@language": "en"
                },
                {
                    "@value": "Europe",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Europe",
            "skos:broader": [
                "dfc-f:TerritorialOrigin"
            ]
        },
        {
            "@id": "dfc-f:Ewe",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Ewe",
                    "@language": "en"
                },
                {
                    "@value": "Brebis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Ewe",
            "skos:broader": [
                "dfc-f:AnimalPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:EweBody",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Ewe's body",
                    "@language": "en"
                },
                {
                    "@value": "Partie de brebis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "EweBody",
            "skos:broader": [
                "dfc-f:Ewe"
            ]
        },
        {
            "@id": "dfc-f:EweMilk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Sheep milk",
                    "@language": "en"
                },
                {
                    "@value": "Lait de brebis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "EweMilk",
            "skos:broader": [
                "dfc-f:Ewe"
            ]
        },
        {
            "@id": "dfc-f:FSC",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Forest Stewardship Council",
                    "@language": "en"
                },
                {
                    "@value": "Forêt durable FSC",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FSC",
            "skos:broader": [
                "dfc-f:EthicalLabel"
            ]
        },
        {
            "@id": "dfc-f:FairTradeMaxHaavelar",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Fairtrade Max Haavelar",
                    "@language": "en"
                },
                {
                    "@value": "Fairtrade Max Haavelar",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FairTradeMaxHaavelar",
            "skos:broader": [
                "dfc-f:EthicalLabel"
            ]
        },
        {
            "@id": "dfc-f:FatFree",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Fat-free",
                    "@language": "en"
                },
                {
                    "@value": "Sans matières grasses",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FatFree",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:Flower",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Flower",
                    "@language": "en"
                },
                {
                    "@value": "Fleur",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Flower",
            "skos:broader": [
                "dfc-f:PlantPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:France",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "France",
                    "@language": "en"
                },
                {
                    "@value": "France",
                    "@language": "fr"
                }
            ],
            "skos:notation": "France",
            "skos:broader": [
                "dfc-f:Europe"
            ]
        },
        {
            "@id": "dfc-f:Fruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Fruit",
                    "@language": "en"
                },
                {
                    "@value": "Fruit",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Fruit",
            "skos:broader": [
                "dfc-f:PlantPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:Funghi",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Funghi",
                    "@language": "en"
                },
                {
                    "@value": "Champignon",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Funghi",
            "skos:broader": [
                "dfc-f:NatureOrigin"
            ]
        },
        {
            "@id": "dfc-f:Germany",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Germany",
                    "@language": "en"
                },
                {
                    "@value": "Allemagne",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Germany",
            "skos:broader": [
                "dfc-f:Europe"
            ]
        },
        {
            "@id": "dfc-f:Gloucestershire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Gloucestershire",
            "skos:notation": "Gloucestershire",
            "skos:broader": [
                "dfc-f:EnglandSW"
            ]
        },
        {
            "@id": "dfc-f:GlutenFree",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Gluten free",
                    "@language": "en"
                },
                {
                    "@value": "Sans gluten",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GlutenFree",
            "skos:broader": [
                "dfc-f:OtherClaim"
            ]
        },
        {
            "@id": "dfc-f:Goat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Goat",
                    "@language": "en"
                },
                {
                    "@value": "Chèvre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Goat",
            "skos:broader": [
                "dfc-f:AnimalPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:GoatBody",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Goat's body",
                    "@language": "en"
                },
                {
                    "@value": "Partie de chèvre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GoatBody",
            "skos:broader": [
                "dfc-f:Goat"
            ]
        },
        {
            "@id": "dfc-f:GoatMilk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Goat milk",
                    "@language": "en"
                },
                {
                    "@value": "Lait de brebis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GoatMilk",
            "skos:broader": [
                "dfc-f:Goat"
            ]
        },
        {
            "@id": "dfc-f:GrandEst",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Grand Est",
                    "@language": "en"
                },
                {
                    "@value": "Grand Est",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GrandEst",
            "skos:broader": [
                "dfc-f:France"
            ]
        },
        {
            "@id": "dfc-f:HEV",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "High Environnemental Value",
                    "@language": "en"
                },
                {
                    "@value": "Haute Valeur Environnementale",
                    "@language": "fr"
                }
            ],
            "skos:notation": "HEV",
            "skos:broader": [
                "dfc-f:EthicalLabel"
            ]
        },
        {
            "@id": "dfc-f:Hampshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Hampshire",
            "skos:notation": "Hampshire",
            "skos:broader": [
                "dfc-f:EnglandSE"
            ]
        },
        {
            "@id": "dfc-f:HautsDeFrance",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Hauts-de-France",
                    "@language": "en"
                },
                {
                    "@value": "Hauts-de-France",
                    "@language": "fr"
                }
            ],
            "skos:notation": "HautsDeFrance",
            "skos:broader": [
                "dfc-f:France"
            ]
        },
        {
            "@id": "dfc-f:HealthClaim",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Health claim",
                    "@language": "en"
                },
                {
                    "@value": "Allégation santé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "HealthClaim",
            "skos:broader": [
                "dfc-f:Claim"
            ]
        },
        {
            "@id": "dfc-f:Hen",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Hen",
                    "@language": "en"
                },
                {
                    "@value": "Poule",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Hen",
            "skos:broader": [
                "dfc-f:AnimalPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:HenBody",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Hen's body",
                    "@language": "en"
                },
                {
                    "@value": "Partie de poule",
                    "@language": "fr"
                }
            ],
            "skos:notation": "HenBody",
            "skos:broader": [
                "dfc-f:Hen"
            ]
        },
        {
            "@id": "dfc-f:HenEgg",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Hen's egg",
                    "@language": "en"
                },
                {
                    "@value": "Œuf de poule",
                    "@language": "fr"
                }
            ],
            "skos:notation": "HenEgg",
            "skos:broader": [
                "dfc-f:Hen"
            ]
        },
        {
            "@id": "dfc-f:Herefordshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Herefordshire",
            "skos:notation": "Herefordshire",
            "skos:broader": [
                "dfc-f:WestMidlands"
            ]
        },
        {
            "@id": "dfc-f:Hertfordshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Hertfordshire",
            "skos:notation": "Hertfordshire",
            "skos:broader": [
                "dfc-f:EnglandE"
            ]
        },
        {
            "@id": "dfc-f:HighFibre",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "High fibre",
                    "@language": "en"
                },
                {
                    "@value": "Riche en fibres",
                    "@language": "fr"
                }
            ],
            "skos:notation": "HighFibre",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:HighMonounsaturatedFat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "High monounsaturated fat",
                    "@language": "en"
                },
                {
                    "@value": "Riche en graisses monoinsaturées",
                    "@language": "fr"
                }
            ],
            "skos:notation": "HighMonounsaturatedFat",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:HighOmega3FattyAcids",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "High omega-3 fatty acids",
                    "@language": "en"
                },
                {
                    "@value": "Riche en acide gras Oméga-3",
                    "@language": "fr"
                }
            ],
            "skos:notation": "HighOmega3FattyAcids",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:HighPolyunsaturatedFat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "High polyunsaturated fat",
                    "@language": "en"
                },
                {
                    "@value": "Riche en graisses polyinsaturées",
                    "@language": "fr"
                }
            ],
            "skos:notation": "HighPolyunsaturatedFat",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:HighProtein",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "High protein",
                    "@language": "en"
                },
                {
                    "@value": "Riche en protéines",
                    "@language": "fr"
                }
            ],
            "skos:notation": "HighProtein",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:HighUnsaturatedFat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "High unsaturated fat",
                    "@language": "en"
                },
                {
                    "@value": "Riche en graisses insaturées",
                    "@language": "fr"
                }
            ],
            "skos:notation": "HighUnsaturatedFat",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:HighVitaminsMinerals",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "High vitamins and/or minerals",
                    "@language": "en"
                },
                {
                    "@value": "Riche en vitamines et/ou de minéraux",
                    "@language": "fr"
                }
            ],
            "skos:notation": "HighVitaminsMinerals",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:HighlandsAndIslands",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Highlands and Islands",
            "skos:notation": "HighlandsAndIslands",
            "skos:broader": [
                "dfc-f:Scotland"
            ]
        },
        {
            "@id": "dfc-f:IGPEU",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Indication géographique de provenance",
                    "@language": "en"
                },
                {
                    "@value": "Indication géographique de provenance",
                    "@language": "fr"
                }
            ],
            "skos:notation": "IGPEU",
            "skos:broader": [
                "dfc-f:LocalLabel"
            ]
        },
        {
            "@id": "dfc-f:IGP_EU",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Indication géographique de provenance",
                    "@language": "en"
                },
                {
                    "@value": "Indication géographique de provenance",
                    "@language": "fr"
                }
            ],
            "skos:notation": "IGP_EU",
            "skos:broader": [
                "dfc-f:LocalLabel"
            ]
        },
        {
            "@id": "dfc-f:IleDeFrance",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Ile-de-France",
                    "@language": "en"
                },
                {
                    "@value": "Île-de-France",
                    "@language": "fr"
                }
            ],
            "skos:notation": "IleDeFrance",
            "skos:broader": [
                "dfc-f:France"
            ]
        },
        {
            "@id": "dfc-f:IncreasedNutrient",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Increased nutrient",
                    "@language": "en"
                },
                {
                    "@value": "Enrichi en nutriment",
                    "@language": "fr"
                }
            ],
            "skos:notation": "IncreasedNutrient",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:Ireland",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Republic of Ireland",
                    "@language": "en"
                },
                {
                    "@value": "République d'Irlande",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Ireland",
            "skos:broader": [
                "dfc-f:Europe"
            ]
        },
        {
            "@id": "dfc-f:IsleOfWight",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Isle of Wight",
            "skos:notation": "IsleOfWight",
            "skos:broader": [
                "dfc-f:EnglandSE"
            ]
        },
        {
            "@id": "dfc-f:Italy",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Italy",
                    "@language": "en"
                },
                {
                    "@value": "Italie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Italy",
            "skos:broader": [
                "dfc-f:Europe"
            ]
        },
        {
            "@id": "dfc-f:Kent",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Kent",
            "skos:notation": "Kent",
            "skos:broader": [
                "dfc-f:EnglandSE"
            ]
        },
        {
            "@id": "dfc-f:Lanarkshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Lanarkshire",
            "skos:notation": "Lanarkshire",
            "skos:broader": [
                "dfc-f:SWScotland"
            ]
        },
        {
            "@id": "dfc-f:Lancashire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Lancashire",
            "skos:notation": "Lancashire",
            "skos:broader": [
                "dfc-f:EnglandNW"
            ]
        },
        {
            "@id": "dfc-f:Leaf",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Leaf",
                    "@language": "en"
                },
                {
                    "@value": "Feuille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Leaf",
            "skos:broader": [
                "dfc-f:PlantPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:Leicestershire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Leicestershire",
            "skos:notation": "Leicestershire",
            "skos:broader": [
                "dfc-f:EastMidlands"
            ]
        },
        {
            "@id": "dfc-f:Light",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Light/Lite",
                    "@language": "en"
                },
                {
                    "@value": "Allégé/Light",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Light",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:LightLite",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Low/Light",
                    "@language": "en"
                },
                {
                    "@value": "Allégé/Light",
                    "@language": "fr"
                }
            ],
            "skos:notation": "LightLite",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:Lincolnshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Lincolnshire",
            "skos:notation": "Lincolnshire",
            "skos:broader": [
                "dfc-f:EastMidlands",
                "dfc-f:YorkshireHumber"
            ]
        },
        {
            "@id": "dfc-f:LocalLabel",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Local label",
                    "@language": "en"
                },
                {
                    "@value": "Label local",
                    "@language": "fr"
                }
            ],
            "skos:notation": "LocalLabel",
            "skos:broader": [
                "dfc-f:Certification"
            ]
        },
        {
            "@id": "dfc-f:London",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "London",
            "skos:notation": "London",
            "skos:broader": [
                "dfc-f:England"
            ]
        },
        {
            "@id": "dfc-f:Lothian",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Lothian",
            "skos:notation": "Lothian",
            "skos:broader": [
                "dfc-f:EasternScotland"
            ]
        },
        {
            "@id": "dfc-f:LowEnergy",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Low energy",
                    "@language": "en"
                },
                {
                    "@value": "Faible valeur énergétique",
                    "@language": "fr"
                }
            ],
            "skos:notation": "LowEnergy",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:LowFat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Low fat",
                    "@language": "en"
                },
                {
                    "@value": "Faible teneur en matière grasse",
                    "@language": "fr"
                }
            ],
            "skos:notation": "LowFat",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:LowSaturatedFat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Low saturated fat",
                    "@language": "en"
                },
                {
                    "@value": "Faible teneur en graisses saturées",
                    "@language": "fr"
                }
            ],
            "skos:notation": "LowSaturatedFat",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:LowSodiumSalt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Low sodium/salt",
                    "@language": "en"
                },
                {
                    "@value": "Pauvre en sodium/sel",
                    "@language": "fr"
                }
            ],
            "skos:notation": "LowSodiumSalt",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:LowSugars",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Low sugars",
                    "@language": "en"
                },
                {
                    "@value": "Faible teneur en sucres",
                    "@language": "fr"
                }
            ],
            "skos:notation": "LowSugars",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:MSC",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Marine Stewardship Council",
                    "@language": "en"
                },
                {
                    "@value": "Pêche durable MSC",
                    "@language": "fr"
                }
            ],
            "skos:notation": "MSC",
            "skos:broader": [
                "dfc-f:EthicalLabel"
            ]
        },
        {
            "@id": "dfc-f:Manchester",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Greater Manchester",
            "skos:notation": "Manchester",
            "skos:broader": [
                "dfc-f:EnglandNW"
            ]
        },
        {
            "@id": "dfc-f:MarketingLabel",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Marketing label",
                    "@language": "en"
                },
                {
                    "@value": "Label marketing",
                    "@language": "fr"
                }
            ],
            "skos:notation": "MarketingLabel",
            "skos:broader": [
                "dfc-f:Certification"
            ]
        },
        {
            "@id": "dfc-f:Merseyside",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Merseyside",
            "skos:notation": "Merseyside",
            "skos:broader": [
                "dfc-f:EnglandNW"
            ]
        },
        {
            "@id": "dfc-f:Milk-fed",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Milk-fed",
                    "@language": "en"
                },
                {
                    "@value": "Nourri au lait",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Milk-fed",
            "skos:broader": [
                "dfc-f:EthicalLabel"
            ]
        },
        {
            "@id": "dfc-f:MilkFed",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Milk-fed",
                    "@language": "en"
                },
                {
                    "@value": "Nourri au lait",
                    "@language": "fr"
                }
            ],
            "skos:notation": "MilkFed",
            "skos:broader": [
                "dfc-f:EthicalLabel"
            ]
        },
        {
            "@id": "dfc-f:Mineral",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Mineral",
                    "@language": "en"
                },
                {
                    "@value": "Minéral",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Mineral",
            "skos:broader": [
                "dfc-f:NatureOrigin"
            ]
        },
        {
            "@id": "dfc-f:MultiGeoOrigin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Multi-territorial origin",
                    "@language": "en"
                },
                {
                    "@value": "Origine territorial multiple",
                    "@language": "fr"
                }
            ],
            "skos:notation": "MultiGeoOrigin",
            "skos:broader": [
                "dfc-f:TerritorialOrigin"
            ]
        },
        {
            "@id": "dfc-f:MultiNatureOrigin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Multiorigin",
                    "@language": "en"
                },
                {
                    "@value": "Origine multiple",
                    "@language": "fr"
                }
            ],
            "skos:notation": "MultiNatureOrigin",
            "skos:broader": [
                "dfc-f:NatureOrigin"
            ]
        },
        {
            "@id": "dfc-f:MultiOrigin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Multiorigin",
                    "@language": "en"
                },
                {
                    "@value": "Origine multiple",
                    "@language": "fr"
                }
            ],
            "skos:notation": "MultiOrigin",
            "skos:broader": [
                "dfc-f:PartOrigin"
            ]
        },
        {
            "@id": "dfc-f:NEScotland",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "North East Scotland",
            "skos:notation": "NEScotland",
            "skos:broader": [
                "dfc-f:Scotland"
            ]
        },
        {
            "@id": "dfc-f:Natural",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Naturally/Natural",
                    "@language": "en"
                },
                {
                    "@value": "Allégé/Light",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Natural",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:NatureEtProgres",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Nature et progrès",
                    "@language": "en"
                },
                {
                    "@value": "Nature et progrès",
                    "@language": "fr"
                }
            ],
            "skos:notation": "NatureEtProgres",
            "skos:broader": [
                "dfc-f:OrganicLabel"
            ]
        },
        {
            "@id": "dfc-f:NatureOrigin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Natural origin",
                    "@language": "en"
                },
                {
                    "@value": "Source naturelle d'origine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "NatureOrigin"
        },
        {
            "@id": "dfc-f:Netherlands",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Netherlands",
                    "@language": "en"
                },
                {
                    "@value": "Pays bas",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Netherlands",
            "skos:broader": [
                "dfc-f:Europe"
            ]
        },
        {
            "@id": "dfc-f:NewZealand",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "New Zealand",
                    "@language": "en"
                },
                {
                    "@value": "Nouvelle Zélande",
                    "@language": "fr"
                }
            ],
            "skos:notation": "NewZealand",
            "skos:broader": [
                "dfc-f:Oceania"
            ]
        },
        {
            "@id": "dfc-f:NoAddedSodiumSalt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "No added sodium/salt",
                    "@language": "en"
                },
                {
                    "@value": "Sans sodium/sel ajouté",
                    "@language": "fr"
                }
            ],
            "skos:notation": "NoAddedSodiumSalt",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:NoAddedSugars",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "With no added sugars",
                    "@language": "en"
                },
                {
                    "@value": "Sans sucres ajoutés",
                    "@language": "fr"
                }
            ],
            "skos:notation": "NoAddedSugars",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:Norfolk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Norfolk",
            "skos:notation": "Norfolk",
            "skos:broader": [
                "dfc-f:EnglandE"
            ]
        },
        {
            "@id": "dfc-f:Normandy",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Normandy",
                    "@language": "en"
                },
                {
                    "@value": "Normandie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Normandy",
            "skos:broader": [
                "dfc-f:France"
            ]
        },
        {
            "@id": "dfc-f:NorthAmerica",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "North America",
                    "@language": "en"
                },
                {
                    "@value": "Amérique du Nord",
                    "@language": "fr"
                }
            ],
            "skos:notation": "NorthAmerica",
            "skos:broader": [
                "dfc-f:TerritorialOrigin"
            ]
        },
        {
            "@id": "dfc-f:NorthYorks",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "North Yorkshire",
            "skos:notation": "NorthYorks",
            "skos:broader": [
                "dfc-f:EnglandNE",
                "dfc-f:YorkshireHumber"
            ]
        },
        {
            "@id": "dfc-f:Northamptonshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Northamptonshire",
            "skos:notation": "Northamptonshire",
            "skos:broader": [
                "dfc-f:EastMidlands"
            ]
        },
        {
            "@id": "dfc-f:NorthernIreland",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Northern Ireland",
                    "@language": "en"
                },
                {
                    "@value": "Irlande du Nord",
                    "@language": "fr"
                }
            ],
            "skos:notation": "NorthernIreland",
            "skos:broader": [
                "dfc-f:UnitedKingdom"
            ]
        },
        {
            "@id": "dfc-f:Northumberland",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Northumberland",
            "skos:notation": "Northumberland",
            "skos:broader": [
                "dfc-f:EnglandNE"
            ]
        },
        {
            "@id": "dfc-f:Nottinghamshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Nottinghamshire",
            "skos:notation": "Nottinghamshire",
            "skos:broader": [
                "dfc-f:EastMidlands"
            ]
        },
        {
            "@id": "dfc-f:NouvelleAquitaine",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Nouvelle-Aquitaine",
                    "@language": "en"
                },
                {
                    "@value": "Nouvelle-Aquitaine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "NouvelleAquitaine",
            "skos:broader": [
                "dfc-f:France"
            ]
        },
        {
            "@id": "dfc-f:NutritionalClaim",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Nutritional claim",
                    "@language": "en"
                },
                {
                    "@value": "Allégation nutritionnelle",
                    "@language": "fr"
                }
            ],
            "skos:notation": "NutritionalClaim",
            "skos:broader": [
                "dfc-f:Claim"
            ]
        },
        {
            "@id": "dfc-f:Occitania",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Occitania",
                    "@language": "en"
                },
                {
                    "@value": "Occitanie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Occitania",
            "skos:broader": [
                "dfc-f:France"
            ]
        },
        {
            "@id": "dfc-f:Oceania",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Oceania",
                    "@language": "en"
                },
                {
                    "@value": "Océanie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Oceania",
            "skos:broader": [
                "dfc-f:TerritorialOrigin"
            ]
        },
        {
            "@id": "dfc-f:Organic-AB",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Agriculture Biologique",
                    "@language": "en"
                },
                {
                    "@value": "Agriculture Biologique",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Organic-AB",
            "skos:broader": [
                "dfc-f:OrganicLabel"
            ]
        },
        {
            "@id": "dfc-f:Organic-BioCoherence",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Bio Coherence",
                    "@language": "en"
                },
                {
                    "@value": "Bio Coherence",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Organic-BioCoherence",
            "skos:broader": [
                "dfc-f:OrganicLabel"
            ]
        },
        {
            "@id": "dfc-f:Organic-EU",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "EU Organic Farming",
                    "@language": "en"
                },
                {
                    "@value": "Agriculture Biologique EU",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Organic-EU",
            "skos:broader": [
                "dfc-f:OrganicLabel"
            ]
        },
        {
            "@id": "dfc-f:OrganicAB",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Agriculture Biologique",
                    "@language": "en"
                },
                {
                    "@value": "Agriculture Biologique",
                    "@language": "fr"
                }
            ],
            "skos:notation": "OrganicAB",
            "skos:broader": [
                "dfc-f:OrganicLabel"
            ]
        },
        {
            "@id": "dfc-f:OrganicBioCoherence",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Bio Coherence",
                    "@language": "en"
                },
                {
                    "@value": "Bio Coherence",
                    "@language": "fr"
                }
            ],
            "skos:notation": "OrganicBioCoherence",
            "skos:broader": [
                "dfc-f:OrganicLabel"
            ]
        },
        {
            "@id": "dfc-f:OrganicEU",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "EU Organic Farming",
                    "@language": "en"
                },
                {
                    "@value": "Agriculture Biologique EU",
                    "@language": "fr"
                }
            ],
            "skos:notation": "OrganicEU",
            "skos:broader": [
                "dfc-f:OrganicLabel"
            ]
        },
        {
            "@id": "dfc-f:OrganicLabel",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Organic label",
                    "@language": "en"
                },
                {
                    "@value": "Label biologique",
                    "@language": "fr"
                }
            ],
            "skos:notation": "OrganicLabel",
            "skos:broader": [
                "dfc-f:Certification"
            ]
        },
        {
            "@id": "dfc-f:OtherClaim",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Other claim",
                    "@language": "en"
                },
                {
                    "@value": "Autre allégation",
                    "@language": "fr"
                }
            ],
            "skos:notation": "OtherClaim",
            "skos:broader": [
                "dfc-f:Claim"
            ]
        },
        {
            "@id": "dfc-f:Oxfordshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Oxfordshire",
            "skos:notation": "Oxfordshire",
            "skos:broader": [
                "dfc-f:EnglandSE"
            ]
        },
        {
            "@id": "dfc-f:PGS",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Protected Geographical Status",
                    "@language": "en"
                },
                {
                    "@value": "Statut géographique protégé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "PGS",
            "skos:broader": [
                "dfc-f:LocalLabel"
            ]
        },
        {
            "@id": "dfc-f:Package",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Package",
            "skos:notation": "Package",
            "skos:broader": [
                "dfc-f:ContainerInformation"
            ]
        },
        {
            "@id": "dfc-f:PartOrigin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Part of origin",
                    "@language": "en"
                },
                {
                    "@value": "Partie d'origine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "PartOrigin"
        },
        {
            "@id": "dfc-f:PaysDeLoire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Pays de la Loire",
                    "@language": "en"
                },
                {
                    "@value": "Pays de la Loire",
                    "@language": "fr"
                }
            ],
            "skos:notation": "PaysDeLoire",
            "skos:broader": [
                "dfc-f:France"
            ]
        },
        {
            "@id": "dfc-f:PaysansDeNatureFR",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Paysans de Nature",
                    "@language": "en"
                },
                {
                    "@value": "Paysans de Nature",
                    "@language": "fr"
                }
            ],
            "skos:notation": "PaysansDeNatureFR",
            "skos:broader": [
                "dfc-f:LocalLabel"
            ]
        },
        {
            "@id": "dfc-f:PaysansDeNature_FR",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Paysans de Nature",
                    "@language": "en"
                },
                {
                    "@value": "Paysans de Nature",
                    "@language": "fr"
                }
            ],
            "skos:notation": "PaysansDeNature_FR",
            "skos:broader": [
                "dfc-f:LocalLabel"
            ]
        },
        {
            "@id": "dfc-f:Pig",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Pig",
                    "@language": "en"
                },
                {
                    "@value": "Cochon",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Pig",
            "skos:broader": [
                "dfc-f:AnimalPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:PigBody",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Pig's body",
                    "@language": "en"
                },
                {
                    "@value": "Partie du cochon",
                    "@language": "fr"
                }
            ],
            "skos:notation": "PigBody",
            "skos:broader": [
                "dfc-f:Pig"
            ]
        },
        {
            "@id": "dfc-f:PlantOrigin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Plant",
                    "@language": "en"
                },
                {
                    "@value": "Plante",
                    "@language": "fr"
                }
            ],
            "skos:notation": "PlantOrigin",
            "skos:broader": [
                "dfc-f:NatureOrigin"
            ]
        },
        {
            "@id": "dfc-f:PlantPartOrigin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Part or product of plant",
                    "@language": "en"
                },
                {
                    "@value": "Partie ou produit d'une plante",
                    "@language": "fr"
                }
            ],
            "skos:notation": "PlantPartOrigin",
            "skos:broader": [
                "dfc-f:PartOrigin"
            ]
        },
        {
            "@id": "dfc-f:Portugal",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Portugal",
                    "@language": "en"
                },
                {
                    "@value": "Portugal",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Portugal",
            "skos:broader": [
                "dfc-f:Europe"
            ]
        },
        {
            "@id": "dfc-f:ProductOfTheYear",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Product of the year",
                    "@language": "en"
                },
                {
                    "@value": "Elu produit de l'année",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ProductOfTheYear",
            "skos:broader": [
                "dfc-f:MarketingLabel"
            ]
        },
        {
            "@id": "dfc-f:ProvenceAlpesCotesAzur",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Provence-Alpes-Côte d’Azur",
                    "@language": "en"
                },
                {
                    "@value": "Provence-Alpes-Côte d’Azur",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ProvenceAlpesCotesAzur",
            "skos:broader": [
                "dfc-f:France"
            ]
        },
        {
            "@id": "dfc-f:Quail",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Quail",
                    "@language": "en"
                },
                {
                    "@value": "Caille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Quail",
            "skos:broader": [
                "dfc-f:AnimalPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:QuailEgg",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Quail's egg",
                    "@language": "en"
                },
                {
                    "@value": "Œuf de caille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "QuailEgg",
            "skos:broader": [
                "dfc-f:Quail"
            ]
        },
        {
            "@id": "dfc-f:RainforestAlliance",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Rainforest Alliance",
                    "@language": "en"
                },
                {
                    "@value": "Rainforest Alliance",
                    "@language": "fr"
                }
            ],
            "skos:notation": "RainforestAlliance",
            "skos:broader": [
                "dfc-f:EthicalLabel"
            ]
        },
        {
            "@id": "dfc-f:RedLabelFR",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Label Rouge",
                    "@language": "en"
                },
                {
                    "@value": "Label Rouge",
                    "@language": "fr"
                }
            ],
            "skos:notation": "RedLabelFR",
            "skos:broader": [
                "dfc-f:EthicalLabel"
            ]
        },
        {
            "@id": "dfc-f:RedLabel_FR",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Label Rouge",
                    "@language": "en"
                },
                {
                    "@value": "Label Rouge",
                    "@language": "fr"
                }
            ],
            "skos:notation": "RedLabel_FR",
            "skos:broader": [
                "dfc-f:EthicalLabel"
            ]
        },
        {
            "@id": "dfc-f:ReducedNutrient",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Reduced nutrient",
                    "@language": "en"
                },
                {
                    "@value": "Réduit en nutriment",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ReducedNutrient",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:Renfrewshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Renfrewshire",
            "skos:notation": "Renfrewshire",
            "skos:broader": [
                "dfc-f:SWScotland"
            ]
        },
        {
            "@id": "dfc-f:Rooster",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Rooster",
                    "@language": "en"
                },
                {
                    "@value": "Coq",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Rooster",
            "skos:broader": [
                "dfc-f:AnimalPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:RoosterBody",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Rooster's body",
                    "@language": "en"
                },
                {
                    "@value": "Partie de coq",
                    "@language": "fr"
                }
            ],
            "skos:notation": "RoosterBody",
            "skos:broader": [
                "dfc-f:Rooster"
            ]
        },
        {
            "@id": "dfc-f:Root",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Root",
                    "@language": "en"
                },
                {
                    "@value": "Racine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Root",
            "skos:broader": [
                "dfc-f:PlantPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:Rutland",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Rutland",
            "skos:notation": "Rutland",
            "skos:broader": [
                "dfc-f:EastMidlands"
            ]
        },
        {
            "@id": "dfc-f:SWScotland",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "South Western Scotland",
            "skos:notation": "SWScotland",
            "skos:broader": [
                "dfc-f:Scotland"
            ]
        },
        {
            "@id": "dfc-f:SaturatedFatFree",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Saturated fat-free",
                    "@language": "en"
                },
                {
                    "@value": "Sans graisses saturées",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SaturatedFatFree",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:Scotland",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Scotland",
                    "@language": "en"
                },
                {
                    "@value": "Ecosse",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Scotland",
            "skos:broader": [
                "dfc-f:UnitedKingdom"
            ]
        },
        {
            "@id": "dfc-f:ScottishBorders",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Scottish Borders",
            "skos:notation": "ScottishBorders",
            "skos:broader": [
                "dfc-f:EasternScotland"
            ]
        },
        {
            "@id": "dfc-f:Seed",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Seed",
                    "@language": "en"
                },
                {
                    "@value": "Graine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Seed",
            "skos:broader": [
                "dfc-f:PlantPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:Sheep",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Sheep",
                    "@language": "en"
                },
                {
                    "@value": "Mouton",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Sheep",
            "skos:broader": [
                "dfc-f:AnimalPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:SheepBody",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Sheep's body",
                    "@language": "en"
                },
                {
                    "@value": "Partie de mouton",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SheepBody",
            "skos:broader": [
                "dfc-f:Sheep"
            ]
        },
        {
            "@id": "dfc-f:Shropshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Shropshire",
            "skos:notation": "Shropshire",
            "skos:broader": [
                "dfc-f:WestMidlands"
            ]
        },
        {
            "@id": "dfc-f:SodiumOrSaltFree",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Sodium-free or salt-free",
                    "@language": "en"
                },
                {
                    "@value": "Sans sodium ou sans sel",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SodiumOrSaltFree",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:Somerset",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Somerset",
            "skos:notation": "Somerset",
            "skos:broader": [
                "dfc-f:EnglandSW"
            ]
        },
        {
            "@id": "dfc-f:SourceOfFibre",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Source of fibre",
                    "@language": "en"
                },
                {
                    "@value": "Source de fibres",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SourceOfFibre",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:SourceOfOmega3FattyAcids",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Source of omega-3 fatty acids",
                    "@language": "en"
                },
                {
                    "@value": "Source d'acide gras Oméga-3",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SourceOfOmega3FattyAcids",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:SourceOfProtein",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Source of protein",
                    "@language": "en"
                },
                {
                    "@value": "Source de protéine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SourceOfProtein",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:SourceOfVitaminsMinerals",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Source of vitamins and/or minerals",
                    "@language": "en"
                },
                {
                    "@value": "Source de vitamines et/ou de minéraux",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SourceOfVitaminsMinerals",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:SouthAmerica",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "South America",
                    "@language": "en"
                },
                {
                    "@value": "Amérique du Sud",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SouthAmerica",
            "skos:broader": [
                "dfc-f:TerritorialOrigin"
            ]
        },
        {
            "@id": "dfc-f:SouthYorks",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "South Yorkshire",
            "skos:notation": "SouthYorks",
            "skos:broader": [
                "dfc-f:YorkshireHumber"
            ]
        },
        {
            "@id": "dfc-f:Spain",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Spain",
                    "@language": "en"
                },
                {
                    "@value": "Espagne",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Spain",
            "skos:broader": [
                "dfc-f:Europe"
            ]
        },
        {
            "@id": "dfc-f:Staffordshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Staffordshire",
            "skos:notation": "Staffordshire",
            "skos:broader": [
                "dfc-f:WestMidlands"
            ]
        },
        {
            "@id": "dfc-f:Stem",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Stem",
                    "@language": "en"
                },
                {
                    "@value": "Tige",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Stem",
            "skos:broader": [
                "dfc-f:PlantPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:Suffolk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Suffolk",
            "skos:notation": "Suffolk",
            "skos:broader": [
                "dfc-f:EnglandE"
            ]
        },
        {
            "@id": "dfc-f:SugarsFree",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Sugars-free",
                    "@language": "en"
                },
                {
                    "@value": "Faible teneur en sucres",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SugarsFree",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:Surrey",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Surrey",
            "skos:notation": "Surrey",
            "skos:broader": [
                "dfc-f:EnglandSE"
            ]
        },
        {
            "@id": "dfc-f:Switzerland",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Switzerland",
                    "@language": "en"
                },
                {
                    "@value": "Suisse",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Switzerland",
            "skos:broader": [
                "dfc-f:Europe"
            ]
        },
        {
            "@id": "dfc-f:TasteOfTheYear",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Taste of the year",
                    "@language": "en"
                },
                {
                    "@value": "Reconnu Saveur de l’année",
                    "@language": "fr"
                }
            ],
            "skos:notation": "TasteOfTheYear",
            "skos:broader": [
                "dfc-f:MarketingLabel"
            ]
        },
        {
            "@id": "dfc-f:TerritorialOrigin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Territorial origin",
                    "@language": "en"
                },
                {
                    "@value": "Origine géographique",
                    "@language": "fr"
                }
            ],
            "skos:notation": "TerritorialOrigin"
        },
        {
            "@id": "dfc-f:Tuber",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Tuber",
                    "@language": "en"
                },
                {
                    "@value": "Tubercule",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Tuber",
            "skos:broader": [
                "dfc-f:PlantPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:TyneWear",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Tyne & Wear",
            "skos:notation": "TyneWear",
            "skos:broader": [
                "dfc-f:EnglandNE"
            ]
        },
        {
            "@id": "dfc-f:UnitedKingdom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "United Kingdom",
                    "@language": "en"
                },
                {
                    "@value": "Royaume Uni",
                    "@language": "fr"
                }
            ],
            "skos:notation": "UnitedKingdom",
            "skos:broader": [
                "dfc-f:Europe"
            ]
        },
        {
            "@id": "dfc-f:UnknownGeoOrigin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Unknown territorial origin",
                    "@language": "en"
                },
                {
                    "@value": "Origine territoriale inconnue",
                    "@language": "fr"
                }
            ],
            "skos:notation": "UnknownGeoOrigin",
            "skos:broader": [
                "dfc-f:TerritorialOrigin"
            ]
        },
        {
            "@id": "dfc-f:UnknownLabel",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Unknown label",
                    "@language": "en"
                },
                {
                    "@value": "Label inconnu",
                    "@language": "fr"
                }
            ],
            "skos:notation": "UnknownLabel",
            "skos:broader": [
                "dfc-f:Certification"
            ]
        },
        {
            "@id": "dfc-f:UnknownNatureOrigin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Unknown nature origin",
                    "@language": "en"
                },
                {
                    "@value": "Source d'origine inconnue",
                    "@language": "fr"
                }
            ],
            "skos:notation": "UnknownNatureOrigin",
            "skos:broader": [
                "dfc-f:NatureOrigin"
            ]
        },
        {
            "@id": "dfc-f:UnknownPartOrigin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Unknown part origin",
                    "@language": "en"
                },
                {
                    "@value": "Partie d'origine inconnue",
                    "@language": "fr"
                }
            ],
            "skos:notation": "UnknownPartOrigin",
            "skos:broader": [
                "dfc-f:PartOrigin"
            ]
        },
        {
            "@id": "dfc-f:Vegan",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Vegan",
                    "@language": "en"
                },
                {
                    "@value": "Vegan",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Vegan",
            "skos:broader": [
                "dfc-f:OtherClaim"
            ]
        },
        {
            "@id": "dfc-f:Vegetarian",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Vegetarian",
                    "@language": "en"
                },
                {
                    "@value": "Végétarien",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Vegetarian",
            "skos:broader": [
                "dfc-f:OtherClaim"
            ]
        },
        {
            "@id": "dfc-f:VeryLowSodiumSalt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Very low sodium/salt",
                    "@language": "en"
                },
                {
                    "@value": "Très pauvre en sodium/sel",
                    "@language": "fr"
                }
            ],
            "skos:notation": "VeryLowSodiumSalt",
            "skos:broader": [
                "dfc-f:NutritionalClaim"
            ]
        },
        {
            "@id": "dfc-f:Wales",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Wales",
                    "@language": "en"
                },
                {
                    "@value": "Pays de Galles",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Wales",
            "skos:broader": [
                "dfc-f:UnitedKingdom"
            ]
        },
        {
            "@id": "dfc-f:Warwickshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Warwickshire",
            "skos:notation": "Warwickshire",
            "skos:broader": [
                "dfc-f:WestMidlands"
            ]
        },
        {
            "@id": "dfc-f:Water",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Water",
                    "@language": "en"
                },
                {
                    "@value": "Eau",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Water",
            "skos:broader": [
                "dfc-f:NatureOrigin"
            ]
        },
        {
            "@id": "dfc-f:WestMidlands",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "West Midlands",
            "skos:notation": "WestMidlands",
            "skos:broader": [
                "dfc-f:England"
            ]
        },
        {
            "@id": "dfc-f:WestMidlandsConurbation",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "West Midlands Conurbation",
            "skos:notation": "WestMidlandsConurbation",
            "skos:broader": [
                "dfc-f:WestMidlands"
            ]
        },
        {
            "@id": "dfc-f:WestSussex",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "West Sussex",
            "skos:notation": "WestSussex",
            "skos:broader": [
                "dfc-f:EnglandSE"
            ]
        },
        {
            "@id": "dfc-f:WestYorks",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "West Yorkshire",
            "skos:notation": "WestYorks",
            "skos:broader": [
                "dfc-f:YorkshireHumber"
            ]
        },
        {
            "@id": "dfc-f:WholePlant",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Whole plant",
                    "@language": "en"
                },
                {
                    "@value": "Plante entière",
                    "@language": "fr"
                }
            ],
            "skos:notation": "WholePlant",
            "skos:broader": [
                "dfc-f:PlantPartOrigin"
            ]
        },
        {
            "@id": "dfc-f:Wiltshire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Wiltshire",
            "skos:notation": "Wiltshire",
            "skos:broader": [
                "dfc-f:EnglandSW"
            ]
        },
        {
            "@id": "dfc-f:Worcestershire",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Worcestershire",
            "skos:notation": "Worcestershire",
            "skos:broader": [
                "dfc-f:WestMidlands"
            ]
        },
        {
            "@id": "dfc-f:YorkshireHumber",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "Yorkshire and The Humber",
            "skos:notation": "YorkshireHumber",
            "skos:broader": [
                "dfc-f:England"
            ]
        }
    ]
};
