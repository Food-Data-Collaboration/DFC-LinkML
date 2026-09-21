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
            "@id": "dfc-m:DFCProductGlossaryMeasure",
            "@type": [
                "skos:ConceptScheme"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Product measure glossary ",
                    "@language": "en"
                },
                {
                    "@value": "Glossaire mesure produit",
                    "@language": "fr"
                }
            ],
            "skos:hasTopConcept": [
                "dfc-m:Dimension",
                "dfc-m:Unit"
            ]
        },
        {
            "@id": "dfc-m:4Pack",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "4 pack",
                    "@language": "en"
                },
                {
                    "@value": "pack de 4",
                    "@language": "fr"
                }
            ],
            "skos:notation": "4p",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:6Pack",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "6 pack",
                    "@language": "en"
                },
                {
                    "@value": "pack de 6",
                    "@language": "fr"
                }
            ],
            "skos:notation": "6p",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:AllergenDimension",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Allergen dimension",
                    "@language": "en"
                },
                {
                    "@value": "Dimension allergène",
                    "@language": "fr"
                }
            ],
            "skos:notation": "AllergenDimension",
            "skos:broader": [
                "dfc-m:Dimension"
            ]
        },
        {
            "@id": "dfc-m:AustralianDollar",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "australian dollar",
                    "@language": "en"
                },
                {
                    "@value": "dollar australien",
                    "@language": "fr"
                }
            ],
            "skos:notation": "$AU",
            "skos:broader": [
                "dfc-m:CurrencyUnit"
            ]
        },
        {
            "@id": "dfc-m:Bag",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bag",
                    "@language": "en"
                },
                {
                    "@value": "sac",
                    "@language": "fr"
                }
            ],
            "skos:notation": "bg",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Basket",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "basket",
                    "@language": "en"
                },
                {
                    "@value": "panier",
                    "@language": "fr"
                }
            ],
            "skos:notation": "bk",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:BeerCrate",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "beer crate",
                    "@language": "en"
                },
                {
                    "@value": "casier à bière",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cb",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Bottle",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bottle",
                    "@language": "en"
                },
                {
                    "@value": "bouteille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "bo",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Box",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "box",
                    "@language": "en"
                },
                {
                    "@value": "boîte",
                    "@language": "fr"
                }
            ],
            "skos:notation": "bx",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Bucket",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bucket",
                    "@language": "en"
                },
                {
                    "@value": "seau",
                    "@language": "fr"
                }
            ],
            "skos:notation": "bj",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Bunch",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bunch",
                    "@language": "en"
                },
                {
                    "@value": "botte",
                    "@language": "fr"
                }
            ],
            "skos:notation": "bh",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Bundle",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bundle",
                    "@language": "en"
                },
                {
                    "@value": "lot",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Bundle",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Calcium",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Calcium",
                    "@language": "en"
                },
                {
                    "@value": "Calcium",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Calcium",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Can",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "can",
                    "@language": "en"
                },
                {
                    "@value": "canette",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cx",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:CanadianDollar",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "canadian dollar",
                    "@language": "en"
                },
                {
                    "@value": "dollar canadien",
                    "@language": "fr"
                }
            ],
            "skos:notation": "$CA",
            "skos:broader": [
                "dfc-m:CurrencyUnit"
            ]
        },
        {
            "@id": "dfc-m:Carbohydrates",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Carbohydrates",
                    "@language": "en"
                },
                {
                    "@value": "Carbohydrates",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Carbohydrates",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Carton",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "carton",
                    "@language": "en"
                },
                {
                    "@value": "carton",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ct",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Cask",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cask",
                    "@language": "en"
                },
                {
                    "@value": "tonneau",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ck",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Celeriac",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Celeriac",
                    "@language": "en"
                },
                {
                    "@value": "Celeriac",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Celeriac",
            "skos:broader": [
                "dfc-m:AllergenDimension"
            ]
        },
        {
            "@id": "dfc-m:Centilitre",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "centilitre",
                    "@language": "en"
                },
                {
                    "@value": "centilitre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cl",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Centimetre",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "centimetre",
                    "@language": "en"
                },
                {
                    "@value": "centimètre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cm",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:CerealsWithGluten",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Cereals containing gluten",
                    "@language": "en"
                },
                {
                    "@value": "Céréales contenant du gluten",
                    "@language": "fr"
                }
            ],
            "skos:notation": "CerealsWithGluten",
            "skos:broader": [
                "dfc-m:AllergenDimension"
            ]
        },
        {
            "@id": "dfc-m:Chloride",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Chloride",
                    "@language": "en"
                },
                {
                    "@value": "Chloride",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Chloride",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Cholesterol",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Cholesterol",
                    "@language": "en"
                },
                {
                    "@value": "Cholestérol",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Cholesterol",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Chromium",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Chromium",
                    "@language": "en"
                },
                {
                    "@value": "Chrome",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Chromium",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Copper",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Copper",
                    "@language": "en"
                },
                {
                    "@value": "Copper",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Copper",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Crate",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "crate",
                    "@language": "en"
                },
                {
                    "@value": "cagette",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cr",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Crustaceans",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Crustaceans",
                    "@language": "en"
                },
                {
                    "@value": "Crustacés",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Crustaceans",
            "skos:broader": [
                "dfc-m:AllergenDimension"
            ]
        },
        {
            "@id": "dfc-m:Cup",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cup",
                    "@language": "en"
                },
                {
                    "@value": "tasse",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cu",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:CurrencyUnit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Currency unit",
                    "@language": "en"
                },
                {
                    "@value": "Unité de devise monétaire",
                    "@language": "fr"
                }
            ],
            "skos:notation": "CurrencyUnit",
            "skos:broader": [
                "dfc-m:Unit"
            ]
        },
        {
            "@id": "dfc-m:Decilitre",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "decilitre",
                    "@language": "en"
                },
                {
                    "@value": "decilitre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "dl",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Decimetre",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "decimetre",
                    "@language": "en"
                },
                {
                    "@value": "decimètre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "dm",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Depth",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Depth",
                    "@language": "en"
                },
                {
                    "@value": "Profondeur",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Depth",
            "skos:broader": [
                "dfc-m:PhysicalDimension"
            ]
        },
        {
            "@id": "dfc-m:Dimension",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Dimension",
                    "@language": "en"
                },
                {
                    "@value": "Dimension",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Dimension"
        },
        {
            "@id": "dfc-m:Dozen",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dozen",
                    "@language": "en"
                },
                {
                    "@value": "douzaine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "dzn",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Drum",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "drum",
                    "@language": "en"
                },
                {
                    "@value": "baril",
                    "@language": "fr"
                }
            ],
            "skos:notation": "dr",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:EcoScore",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Eco-score",
                    "@language": "en"
                },
                {
                    "@value": "Eco-score",
                    "@language": "fr"
                }
            ],
            "skos:notation": "EcoScore",
            "skos:broader": [
                "dfc-m:LabellingDimension"
            ]
        },
        {
            "@id": "dfc-m:Eggs",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Eggs",
                    "@language": "en"
                },
                {
                    "@value": "Oeufs",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Eggs",
            "skos:broader": [
                "dfc-m:AllergenDimension"
            ]
        },
        {
            "@id": "dfc-m:Euro",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "euro",
                    "@language": "en"
                },
                {
                    "@value": "euro",
                    "@language": "fr"
                }
            ],
            "skos:notation": "€",
            "skos:broader": [
                "dfc-m:CurrencyUnit"
            ]
        },
        {
            "@id": "dfc-m:Fat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Fat",
                    "@language": "en"
                },
                {
                    "@value": "Graisse",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Fat",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Fibre",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Fibre",
                    "@language": "en"
                },
                {
                    "@value": "Fibre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Fibre",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Fishs",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fishs",
                    "@language": "en"
                },
                {
                    "@value": "Poissons",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Fishs",
            "skos:broader": [
                "dfc-m:AllergenDimension"
            ]
        },
        {
            "@id": "dfc-m:Fluoride",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Fluoride",
                    "@language": "en"
                },
                {
                    "@value": "Fluoride",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Fluoride",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:FolicAcid",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Folic acid",
                    "@language": "en"
                },
                {
                    "@value": "Acide folique",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FolicAcid",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:FourPack",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "4 pack",
                    "@language": "en"
                },
                {
                    "@value": "pack de 4",
                    "@language": "fr"
                }
            ],
            "skos:notation": "4p",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Gallon",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "gallon (UK)",
                    "@language": "en"
                },
                {
                    "@value": "gallon (GB)",
                    "@language": "fr"
                }
            ],
            "skos:notation": "gal",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:GrainBulk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "grain bulk",
                    "@language": "en"
                },
                {
                    "@value": "grain en vrac",
                    "@language": "fr"
                }
            ],
            "skos:notation": "vr",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Gram",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "gram",
                    "@language": "en"
                },
                {
                    "@value": "gramme",
                    "@language": "fr"
                }
            ],
            "skos:notation": "g",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:HalfDozen",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "half dozen",
                    "@language": "en"
                },
                {
                    "@value": "demi-douzaine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "hd",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Height",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Height",
                    "@language": "en"
                },
                {
                    "@value": "Hauteur",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Height",
            "skos:broader": [
                "dfc-m:PhysicalDimension"
            ]
        },
        {
            "@id": "dfc-m:Inch",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "inch",
                    "@language": "en"
                },
                {
                    "@value": "pouce",
                    "@language": "fr"
                }
            ],
            "skos:notation": "in",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Iodine",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Iodine",
                    "@language": "en"
                },
                {
                    "@value": "Iodine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Iodine",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Iron",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Iron",
                    "@language": "en"
                },
                {
                    "@value": "Fer",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Iron",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Jar",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "jar",
                    "@language": "en"
                },
                {
                    "@value": "bocal",
                    "@language": "fr"
                }
            ],
            "skos:notation": "jr",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Keg",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "keg",
                    "@language": "en"
                },
                {
                    "@value": "fût",
                    "@language": "fr"
                }
            ],
            "skos:notation": "kg",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Kilogram",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "kilogram",
                    "@language": "en"
                },
                {
                    "@value": "kilogramme",
                    "@language": "fr"
                }
            ],
            "skos:notation": "kg",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Kilometre",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "kilometre",
                    "@language": "en"
                },
                {
                    "@value": "kilomètre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "km",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Kit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "kit",
                    "@language": "en"
                },
                {
                    "@value": "kit",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ki",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:LabellingDimension",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Labelling dimension",
                    "@language": "en"
                },
                {
                    "@value": "Dimension score de labellisation",
                    "@language": "fr"
                }
            ],
            "skos:notation": "LabellingDimension",
            "skos:broader": [
                "dfc-m:Dimension"
            ]
        },
        {
            "@id": "dfc-m:LactoseMilks",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Milk and lactose-based products",
                    "@language": "en"
                },
                {
                    "@value": "Lait et produits à base de lactose",
                    "@language": "fr"
                }
            ],
            "skos:notation": "LactoseMilks",
            "skos:broader": [
                "dfc-m:AllergenDimension"
            ]
        },
        {
            "@id": "dfc-m:LiquidBulk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "liquid bulk",
                    "@language": "en"
                },
                {
                    "@value": "liquide en vrac",
                    "@language": "fr"
                }
            ],
            "skos:notation": "vl",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Litre",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "litre",
                    "@language": "en"
                },
                {
                    "@value": "litre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "l",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Lupine",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Lupine",
                    "@language": "en"
                },
                {
                    "@value": "Lupin",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Lupine",
            "skos:broader": [
                "dfc-m:AllergenDimension"
            ]
        },
        {
            "@id": "dfc-m:Magnesium",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Magnesium",
                    "@language": "en"
                },
                {
                    "@value": "Magnésium",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Magnesium",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Manganese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Manganese",
                    "@language": "en"
                },
                {
                    "@value": "Manganèse",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Manganese",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Metre",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "metre",
                    "@language": "en"
                },
                {
                    "@value": "mètre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "m",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Milligram",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "milligram",
                    "@language": "en"
                },
                {
                    "@value": "milligramme",
                    "@language": "fr"
                }
            ],
            "skos:notation": "g",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Millilitre",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "milliliter",
                    "@language": "en"
                },
                {
                    "@value": "millilitre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ml",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Molluscs",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Molluscs",
                    "@language": "en"
                },
                {
                    "@value": "Mollusques",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Molluscs",
            "skos:broader": [
                "dfc-m:AllergenDimension"
            ]
        },
        {
            "@id": "dfc-m:MonosaturatedFat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Monosaturated fat",
                    "@language": "en"
                },
                {
                    "@value": "Graisse monosaturée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "MonosaturatedFat",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Mustard",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Mustard",
                    "@language": "en"
                },
                {
                    "@value": "Moutarde",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Mustard",
            "skos:broader": [
                "dfc-m:AllergenDimension"
            ]
        },
        {
            "@id": "dfc-m:Net",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "net",
                    "@language": "en"
                },
                {
                    "@value": "filet",
                    "@language": "fr"
                }
            ],
            "skos:notation": "nt",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:NoduleBulk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "nodule bulk",
                    "@language": "en"
                },
                {
                    "@value": "nodule en vrac",
                    "@language": "fr"
                }
            ],
            "skos:notation": "vo",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:NutriScore",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Nutri-score",
                    "@language": "en"
                },
                {
                    "@value": "Nutri-score",
                    "@language": "fr"
                }
            ],
            "skos:notation": "NutriScore",
            "skos:broader": [
                "dfc-m:LabellingDimension"
            ]
        },
        {
            "@id": "dfc-m:NutrientDimension",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Nutrient dimension",
                    "@language": "en"
                },
                {
                    "@value": "Dimension nutritionnelle",
                    "@language": "fr"
                }
            ],
            "skos:notation": "NutrientDimension",
            "skos:broader": [
                "dfc-m:Dimension"
            ]
        },
        {
            "@id": "dfc-m:Nuts",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Nuts",
                    "@language": "en"
                },
                {
                    "@value": "Fruits à coque",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Nuts",
            "skos:broader": [
                "dfc-m:AllergenDimension"
            ]
        },
        {
            "@id": "dfc-m:Ounce",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "ounce",
                    "@language": "en"
                },
                {
                    "@value": "once",
                    "@language": "fr"
                }
            ],
            "skos:notation": "oz",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Package",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "package",
                    "@language": "en"
                },
                {
                    "@value": "colis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "pack",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Packet",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "packet",
                    "@language": "en"
                },
                {
                    "@value": "sachet",
                    "@language": "fr"
                }
            ],
            "skos:notation": "pa",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Pair",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pair",
                    "@language": "en"
                },
                {
                    "@value": "paire",
                    "@language": "fr"
                }
            ],
            "skos:notation": "pr",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Pallet",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pallet",
                    "@language": "en"
                },
                {
                    "@value": "palette",
                    "@language": "fr"
                }
            ],
            "skos:notation": "px",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Peanuts",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Peanuts",
                    "@language": "en"
                },
                {
                    "@value": "Arachides",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Peanuts",
            "skos:broader": [
                "dfc-m:AllergenDimension"
            ]
        },
        {
            "@id": "dfc-m:Percent",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "percent",
                    "@language": "en"
                },
                {
                    "@value": "pourcent",
                    "@language": "fr"
                }
            ],
            "skos:notation": "%",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Phosphorus",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Phosphorus",
                    "@language": "en"
                },
                {
                    "@value": "Phosphore",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Phosphorus",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:PhysicalDimension",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Physical dimension",
                    "@language": "en"
                },
                {
                    "@value": "Dimension physique",
                    "@language": "fr"
                }
            ],
            "skos:notation": "PhysicalDimension",
            "skos:broader": [
                "dfc-m:Dimension"
            ]
        },
        {
            "@id": "dfc-m:Piece",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "piece",
                    "@language": "en"
                },
                {
                    "@value": "pièce",
                    "@language": "fr"
                }
            ],
            "skos:notation": "u",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:PlanetScore",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Planet-score",
                    "@language": "en"
                },
                {
                    "@value": "Planet-score",
                    "@language": "fr"
                }
            ],
            "skos:notation": "PlanetScore",
            "skos:broader": [
                "dfc-m:LabellingDimension"
            ]
        },
        {
            "@id": "dfc-m:PolyunsaturatedFat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Poly-unsaturated fat",
                    "@language": "en"
                },
                {
                    "@value": "Graisse poly-insaturée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "PolyunsaturatedFat",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Pot",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pot",
                    "@language": "en"
                },
                {
                    "@value": "pot",
                    "@language": "fr"
                }
            ],
            "skos:notation": "pt",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Potassium",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Potassium",
                    "@language": "en"
                },
                {
                    "@value": "Potassium",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Potassium",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Pouch",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pouch",
                    "@language": "en"
                },
                {
                    "@value": "poche",
                    "@language": "fr"
                }
            ],
            "skos:notation": "po",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:PoundMass",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pound",
                    "@language": "en"
                },
                {
                    "@value": "pound",
                    "@language": "fr"
                }
            ],
            "skos:notation": "lb",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:PoundSterling",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pound sterling",
                    "@language": "en"
                },
                {
                    "@value": "livre sterling",
                    "@language": "fr"
                }
            ],
            "skos:notation": "£",
            "skos:broader": [
                "dfc-m:CurrencyUnit"
            ]
        },
        {
            "@id": "dfc-m:PowderBulk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "powder bulk",
                    "@language": "en"
                },
                {
                    "@value": "poudre en vrac",
                    "@language": "fr"
                }
            ],
            "skos:notation": "vy",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Protein",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Protein",
                    "@language": "en"
                },
                {
                    "@value": "Protéine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Protein",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Punnet",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "punnet",
                    "@language": "en"
                },
                {
                    "@value": "barquette",
                    "@language": "fr"
                }
            ],
            "skos:notation": "pj",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:QuantityUnit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Quantity unit",
                    "@language": "en"
                },
                {
                    "@value": "Unité de quantité",
                    "@language": "fr"
                }
            ],
            "skos:notation": "QuantityUnit",
            "skos:broader": [
                "dfc-m:Unit"
            ]
        },
        {
            "@id": "dfc-m:Roll",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "roll",
                    "@language": "en"
                },
                {
                    "@value": "rouleau",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ro",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Salt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Salt",
                    "@language": "en"
                },
                {
                    "@value": "Sel",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Salt",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:SaturatedFat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Saturated fat",
                    "@language": "en"
                },
                {
                    "@value": "Graisse saturée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SaturatedFat",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Selenium",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Selenium",
                    "@language": "en"
                },
                {
                    "@value": "Sélénium",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Selenium",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:SesameSeeds",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Sesame seeds",
                    "@language": "en"
                },
                {
                    "@value": "Graines de sésame",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SesameSeeds",
            "skos:broader": [
                "dfc-m:AllergenDimension"
            ]
        },
        {
            "@id": "dfc-m:SixPack",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "6 pack",
                    "@language": "en"
                },
                {
                    "@value": "pack de 6",
                    "@language": "fr"
                }
            ],
            "skos:notation": "6p",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Sodium",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Sodium",
                    "@language": "en"
                },
                {
                    "@value": "Sodium",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Sodium",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Soy",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Soy",
                    "@language": "en"
                },
                {
                    "@value": "Soja",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Soy",
            "skos:broader": [
                "dfc-m:AllergenDimension"
            ]
        },
        {
            "@id": "dfc-m:Starch",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Starch",
                    "@language": "en"
                },
                {
                    "@value": "Amidon",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Starch",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Sugars",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Sugars",
                    "@language": "en"
                },
                {
                    "@value": "Sucres",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Sugars",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Sulphites",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Sulfur dioxide and sulphites in a concentration of more than 10mg/kg or 10mg/l (expressed as SO2)",
                    "@language": "en"
                },
                {
                    "@value": "Anhydride sulfureux et sulfites en concentration de plus de 10mg/kg ou 10 mg/l (exprimés en SO2)",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Sulphites",
            "skos:broader": [
                "dfc-m:AllergenDimension"
            ]
        },
        {
            "@id": "dfc-m:Tablet",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "tablet",
                    "@language": "en"
                },
                {
                    "@value": "tablette",
                    "@language": "fr"
                }
            ],
            "skos:notation": "t1",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Tin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "tin",
                    "@language": "en"
                },
                {
                    "@value": "boîte de conserve",
                    "@language": "fr"
                }
            ],
            "skos:notation": "tn",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Tonne",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "tonne",
                    "@language": "en"
                },
                {
                    "@value": "tonne",
                    "@language": "fr"
                }
            ],
            "skos:notation": "T",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Transfat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Transfat",
                    "@language": "en"
                },
                {
                    "@value": "Graisse trans",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Transfat",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Tray",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "tray",
                    "@language": "en"
                },
                {
                    "@value": "plateau",
                    "@language": "fr"
                }
            ],
            "skos:notation": "pu",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Tub",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "tub",
                    "@language": "en"
                },
                {
                    "@value": "bac",
                    "@language": "fr"
                }
            ],
            "skos:notation": "tb",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:Tube",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "tube",
                    "@language": "en"
                },
                {
                    "@value": "tube",
                    "@language": "fr"
                }
            ],
            "skos:notation": "td",
            "skos:broader": [
                "dfc-m:QuantityUnit"
            ]
        },
        {
            "@id": "dfc-m:USDollar",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "US Dollar",
                    "@language": "en"
                },
                {
                    "@value": "Dollar US",
                    "@language": "fr"
                }
            ],
            "skos:notation": "$US",
            "skos:broader": [
                "dfc-m:CurrencyUnit"
            ]
        },
        {
            "@id": "dfc-m:Unit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Unit",
                    "@language": "en"
                },
                {
                    "@value": "Unités",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Unit"
        },
        {
            "@id": "dfc-m:VitaminA",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Vitamin A",
                    "@language": "en"
                },
                {
                    "@value": "Vitamine A",
                    "@language": "fr"
                }
            ],
            "skos:notation": "VitaminA",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:VitaminB12",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Vitamin B12",
                    "@language": "en"
                },
                {
                    "@value": "Vitamine B12",
                    "@language": "fr"
                }
            ],
            "skos:notation": "VitaminB12",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:VitaminB6",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Vitamin B6",
                    "@language": "en"
                },
                {
                    "@value": "Vitamine B6",
                    "@language": "fr"
                }
            ],
            "skos:notation": "VitaminB6",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:VitaminC",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Vitamin C",
                    "@language": "en"
                },
                {
                    "@value": "Vitamine C",
                    "@language": "fr"
                }
            ],
            "skos:notation": "VitaminC",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:VitaminD",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Vitamin D",
                    "@language": "en"
                },
                {
                    "@value": "Vitamine D",
                    "@language": "fr"
                }
            ],
            "skos:notation": "VitaminD",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:VitaminE",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Vitamin E",
                    "@language": "en"
                },
                {
                    "@value": "Vitamine E",
                    "@language": "fr"
                }
            ],
            "skos:notation": "VitaminE",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:VitaminK",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Vitamin K",
                    "@language": "en"
                },
                {
                    "@value": "Vitamine K",
                    "@language": "fr"
                }
            ],
            "skos:notation": "VitaminK",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        },
        {
            "@id": "dfc-m:Volume",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Volume",
                    "@language": "en"
                },
                {
                    "@value": "Volume",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Volume",
            "skos:broader": [
                "dfc-m:PhysicalDimension"
            ]
        },
        {
            "@id": "dfc-m:Weight",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Weight",
                    "@language": "en"
                },
                {
                    "@value": "Poids",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Weight",
            "skos:broader": [
                "dfc-m:PhysicalDimension"
            ]
        },
        {
            "@id": "dfc-m:Width",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Width",
                    "@language": "en"
                },
                {
                    "@value": "Largeur",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Width",
            "skos:broader": [
                "dfc-m:PhysicalDimension"
            ]
        },
        {
            "@id": "dfc-m:Zinc",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Zinc",
                    "@language": "en"
                },
                {
                    "@value": "Zinc",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Zinc",
            "skos:broader": [
                "dfc-m:NutrientDimension"
            ]
        }
    ]
};
