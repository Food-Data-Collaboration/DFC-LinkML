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
        readonly "@id": "dfc-m:DFCProductGlossaryMeasure";
        readonly "@type": readonly ["skos:ConceptScheme"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Product measure glossary ";
            readonly "@language": "en";
        }, {
            readonly "@value": "Glossaire mesure produit";
            readonly "@language": "fr";
        }];
        readonly "skos:hasTopConcept": readonly ["dfc-m:Dimension", "dfc-m:Unit"];
    }, {
        readonly "@id": "dfc-m:4Pack";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "4 pack";
            readonly "@language": "en";
        }, {
            readonly "@value": "pack de 4";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "4p";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:6Pack";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "6 pack";
            readonly "@language": "en";
        }, {
            readonly "@value": "pack de 6";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "6p";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:AllergenDimension";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Allergen dimension";
            readonly "@language": "en";
        }, {
            readonly "@value": "Dimension allergène";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "AllergenDimension";
        readonly "skos:broader": readonly ["dfc-m:Dimension"];
    }, {
        readonly "@id": "dfc-m:AustralianDollar";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "australian dollar";
            readonly "@language": "en";
        }, {
            readonly "@value": "dollar australien";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "$AU";
        readonly "skos:broader": readonly ["dfc-m:CurrencyUnit"];
    }, {
        readonly "@id": "dfc-m:Bag";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bag";
            readonly "@language": "en";
        }, {
            readonly "@value": "sac";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "bg";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Basket";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "basket";
            readonly "@language": "en";
        }, {
            readonly "@value": "panier";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "bk";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:BeerCrate";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "beer crate";
            readonly "@language": "en";
        }, {
            readonly "@value": "casier à bière";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cb";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Bottle";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bottle";
            readonly "@language": "en";
        }, {
            readonly "@value": "bouteille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "bo";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Box";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "box";
            readonly "@language": "en";
        }, {
            readonly "@value": "boîte";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "bx";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Bucket";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bucket";
            readonly "@language": "en";
        }, {
            readonly "@value": "seau";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "bj";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Bunch";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bunch";
            readonly "@language": "en";
        }, {
            readonly "@value": "botte";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "bh";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Bundle";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bundle";
            readonly "@language": "en";
        }, {
            readonly "@value": "lot";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Bundle";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Calcium";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Calcium";
            readonly "@language": "en";
        }, {
            readonly "@value": "Calcium";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Calcium";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Can";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "can";
            readonly "@language": "en";
        }, {
            readonly "@value": "canette";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cx";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:CanadianDollar";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "canadian dollar";
            readonly "@language": "en";
        }, {
            readonly "@value": "dollar canadien";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "$CA";
        readonly "skos:broader": readonly ["dfc-m:CurrencyUnit"];
    }, {
        readonly "@id": "dfc-m:Carbohydrates";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Carbohydrates";
            readonly "@language": "en";
        }, {
            readonly "@value": "Carbohydrates";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Carbohydrates";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Carton";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "carton";
            readonly "@language": "en";
        }, {
            readonly "@value": "carton";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ct";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Cask";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cask";
            readonly "@language": "en";
        }, {
            readonly "@value": "tonneau";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ck";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Celeriac";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Celeriac";
            readonly "@language": "en";
        }, {
            readonly "@value": "Celeriac";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Celeriac";
        readonly "skos:broader": readonly ["dfc-m:AllergenDimension"];
    }, {
        readonly "@id": "dfc-m:Centilitre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "centilitre";
            readonly "@language": "en";
        }, {
            readonly "@value": "centilitre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cl";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Centimetre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "centimetre";
            readonly "@language": "en";
        }, {
            readonly "@value": "centimètre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cm";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:CerealsWithGluten";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Cereals containing gluten";
            readonly "@language": "en";
        }, {
            readonly "@value": "Céréales contenant du gluten";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "CerealsWithGluten";
        readonly "skos:broader": readonly ["dfc-m:AllergenDimension"];
    }, {
        readonly "@id": "dfc-m:Chloride";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Chloride";
            readonly "@language": "en";
        }, {
            readonly "@value": "Chloride";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Chloride";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Cholesterol";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Cholesterol";
            readonly "@language": "en";
        }, {
            readonly "@value": "Cholestérol";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Cholesterol";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Chromium";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Chromium";
            readonly "@language": "en";
        }, {
            readonly "@value": "Chrome";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Chromium";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Copper";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Copper";
            readonly "@language": "en";
        }, {
            readonly "@value": "Copper";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Copper";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Crate";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "crate";
            readonly "@language": "en";
        }, {
            readonly "@value": "cagette";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cr";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Crustaceans";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Crustaceans";
            readonly "@language": "en";
        }, {
            readonly "@value": "Crustacés";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Crustaceans";
        readonly "skos:broader": readonly ["dfc-m:AllergenDimension"];
    }, {
        readonly "@id": "dfc-m:Cup";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cup";
            readonly "@language": "en";
        }, {
            readonly "@value": "tasse";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cu";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:CurrencyUnit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Currency unit";
            readonly "@language": "en";
        }, {
            readonly "@value": "Unité de devise monétaire";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "CurrencyUnit";
        readonly "skos:broader": readonly ["dfc-m:Unit"];
    }, {
        readonly "@id": "dfc-m:Decilitre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "decilitre";
            readonly "@language": "en";
        }, {
            readonly "@value": "decilitre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "dl";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Decimetre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "decimetre";
            readonly "@language": "en";
        }, {
            readonly "@value": "decimètre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "dm";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Depth";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Depth";
            readonly "@language": "en";
        }, {
            readonly "@value": "Profondeur";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Depth";
        readonly "skos:broader": readonly ["dfc-m:PhysicalDimension"];
    }, {
        readonly "@id": "dfc-m:Dimension";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Dimension";
            readonly "@language": "en";
        }, {
            readonly "@value": "Dimension";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Dimension";
    }, {
        readonly "@id": "dfc-m:Dozen";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dozen";
            readonly "@language": "en";
        }, {
            readonly "@value": "douzaine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "dzn";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Drum";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "drum";
            readonly "@language": "en";
        }, {
            readonly "@value": "baril";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "dr";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:EcoScore";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Eco-score";
            readonly "@language": "en";
        }, {
            readonly "@value": "Eco-score";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "EcoScore";
        readonly "skos:broader": readonly ["dfc-m:LabellingDimension"];
    }, {
        readonly "@id": "dfc-m:Eggs";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Eggs";
            readonly "@language": "en";
        }, {
            readonly "@value": "Oeufs";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Eggs";
        readonly "skos:broader": readonly ["dfc-m:AllergenDimension"];
    }, {
        readonly "@id": "dfc-m:Euro";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "euro";
            readonly "@language": "en";
        }, {
            readonly "@value": "euro";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "€";
        readonly "skos:broader": readonly ["dfc-m:CurrencyUnit"];
    }, {
        readonly "@id": "dfc-m:Fat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Fat";
            readonly "@language": "en";
        }, {
            readonly "@value": "Graisse";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Fat";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Fibre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Fibre";
            readonly "@language": "en";
        }, {
            readonly "@value": "Fibre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Fibre";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Fishs";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fishs";
            readonly "@language": "en";
        }, {
            readonly "@value": "Poissons";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Fishs";
        readonly "skos:broader": readonly ["dfc-m:AllergenDimension"];
    }, {
        readonly "@id": "dfc-m:Fluoride";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Fluoride";
            readonly "@language": "en";
        }, {
            readonly "@value": "Fluoride";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Fluoride";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:FolicAcid";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Folic acid";
            readonly "@language": "en";
        }, {
            readonly "@value": "Acide folique";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FolicAcid";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:FourPack";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "4 pack";
            readonly "@language": "en";
        }, {
            readonly "@value": "pack de 4";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "4p";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Gallon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "gallon (UK)";
            readonly "@language": "en";
        }, {
            readonly "@value": "gallon (GB)";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "gal";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:GrainBulk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "grain bulk";
            readonly "@language": "en";
        }, {
            readonly "@value": "grain en vrac";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "vr";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Gram";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "gram";
            readonly "@language": "en";
        }, {
            readonly "@value": "gramme";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "g";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:HalfDozen";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "half dozen";
            readonly "@language": "en";
        }, {
            readonly "@value": "demi-douzaine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "hd";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Height";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Height";
            readonly "@language": "en";
        }, {
            readonly "@value": "Hauteur";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Height";
        readonly "skos:broader": readonly ["dfc-m:PhysicalDimension"];
    }, {
        readonly "@id": "dfc-m:Inch";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "inch";
            readonly "@language": "en";
        }, {
            readonly "@value": "pouce";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "in";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Iodine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Iodine";
            readonly "@language": "en";
        }, {
            readonly "@value": "Iodine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Iodine";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Iron";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Iron";
            readonly "@language": "en";
        }, {
            readonly "@value": "Fer";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Iron";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Jar";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "jar";
            readonly "@language": "en";
        }, {
            readonly "@value": "bocal";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "jr";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Keg";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "keg";
            readonly "@language": "en";
        }, {
            readonly "@value": "fût";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "kg";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Kilogram";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "kilogram";
            readonly "@language": "en";
        }, {
            readonly "@value": "kilogramme";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "kg";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Kilometre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "kilometre";
            readonly "@language": "en";
        }, {
            readonly "@value": "kilomètre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "km";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Kit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "kit";
            readonly "@language": "en";
        }, {
            readonly "@value": "kit";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ki";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:LabellingDimension";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Labelling dimension";
            readonly "@language": "en";
        }, {
            readonly "@value": "Dimension score de labellisation";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "LabellingDimension";
        readonly "skos:broader": readonly ["dfc-m:Dimension"];
    }, {
        readonly "@id": "dfc-m:LactoseMilks";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Milk and lactose-based products";
            readonly "@language": "en";
        }, {
            readonly "@value": "Lait et produits à base de lactose";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "LactoseMilks";
        readonly "skos:broader": readonly ["dfc-m:AllergenDimension"];
    }, {
        readonly "@id": "dfc-m:LiquidBulk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "liquid bulk";
            readonly "@language": "en";
        }, {
            readonly "@value": "liquide en vrac";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "vl";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Litre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "litre";
            readonly "@language": "en";
        }, {
            readonly "@value": "litre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "l";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Lupine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Lupine";
            readonly "@language": "en";
        }, {
            readonly "@value": "Lupin";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Lupine";
        readonly "skos:broader": readonly ["dfc-m:AllergenDimension"];
    }, {
        readonly "@id": "dfc-m:Magnesium";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Magnesium";
            readonly "@language": "en";
        }, {
            readonly "@value": "Magnésium";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Magnesium";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Manganese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Manganese";
            readonly "@language": "en";
        }, {
            readonly "@value": "Manganèse";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Manganese";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Metre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "metre";
            readonly "@language": "en";
        }, {
            readonly "@value": "mètre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "m";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Milligram";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "milligram";
            readonly "@language": "en";
        }, {
            readonly "@value": "milligramme";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "g";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Millilitre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "milliliter";
            readonly "@language": "en";
        }, {
            readonly "@value": "millilitre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ml";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Molluscs";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Molluscs";
            readonly "@language": "en";
        }, {
            readonly "@value": "Mollusques";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Molluscs";
        readonly "skos:broader": readonly ["dfc-m:AllergenDimension"];
    }, {
        readonly "@id": "dfc-m:MonosaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Monosaturated fat";
            readonly "@language": "en";
        }, {
            readonly "@value": "Graisse monosaturée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "MonosaturatedFat";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Mustard";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Mustard";
            readonly "@language": "en";
        }, {
            readonly "@value": "Moutarde";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Mustard";
        readonly "skos:broader": readonly ["dfc-m:AllergenDimension"];
    }, {
        readonly "@id": "dfc-m:Net";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "net";
            readonly "@language": "en";
        }, {
            readonly "@value": "filet";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "nt";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:NoduleBulk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "nodule bulk";
            readonly "@language": "en";
        }, {
            readonly "@value": "nodule en vrac";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "vo";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:NutriScore";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Nutri-score";
            readonly "@language": "en";
        }, {
            readonly "@value": "Nutri-score";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "NutriScore";
        readonly "skos:broader": readonly ["dfc-m:LabellingDimension"];
    }, {
        readonly "@id": "dfc-m:NutrientDimension";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Nutrient dimension";
            readonly "@language": "en";
        }, {
            readonly "@value": "Dimension nutritionnelle";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "NutrientDimension";
        readonly "skos:broader": readonly ["dfc-m:Dimension"];
    }, {
        readonly "@id": "dfc-m:Nuts";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Nuts";
            readonly "@language": "en";
        }, {
            readonly "@value": "Fruits à coque";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Nuts";
        readonly "skos:broader": readonly ["dfc-m:AllergenDimension"];
    }, {
        readonly "@id": "dfc-m:Ounce";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "ounce";
            readonly "@language": "en";
        }, {
            readonly "@value": "once";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "oz";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Package";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "package";
            readonly "@language": "en";
        }, {
            readonly "@value": "colis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "pack";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Packet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "packet";
            readonly "@language": "en";
        }, {
            readonly "@value": "sachet";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "pa";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Pair";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pair";
            readonly "@language": "en";
        }, {
            readonly "@value": "paire";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "pr";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Pallet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pallet";
            readonly "@language": "en";
        }, {
            readonly "@value": "palette";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "px";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Peanuts";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Peanuts";
            readonly "@language": "en";
        }, {
            readonly "@value": "Arachides";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Peanuts";
        readonly "skos:broader": readonly ["dfc-m:AllergenDimension"];
    }, {
        readonly "@id": "dfc-m:Percent";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "percent";
            readonly "@language": "en";
        }, {
            readonly "@value": "pourcent";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "%";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Phosphorus";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Phosphorus";
            readonly "@language": "en";
        }, {
            readonly "@value": "Phosphore";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Phosphorus";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:PhysicalDimension";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Physical dimension";
            readonly "@language": "en";
        }, {
            readonly "@value": "Dimension physique";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "PhysicalDimension";
        readonly "skos:broader": readonly ["dfc-m:Dimension"];
    }, {
        readonly "@id": "dfc-m:Piece";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "piece";
            readonly "@language": "en";
        }, {
            readonly "@value": "pièce";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "u";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:PlanetScore";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Planet-score";
            readonly "@language": "en";
        }, {
            readonly "@value": "Planet-score";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "PlanetScore";
        readonly "skos:broader": readonly ["dfc-m:LabellingDimension"];
    }, {
        readonly "@id": "dfc-m:PolyunsaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Poly-unsaturated fat";
            readonly "@language": "en";
        }, {
            readonly "@value": "Graisse poly-insaturée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "PolyunsaturatedFat";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Pot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pot";
            readonly "@language": "en";
        }, {
            readonly "@value": "pot";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "pt";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Potassium";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Potassium";
            readonly "@language": "en";
        }, {
            readonly "@value": "Potassium";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Potassium";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Pouch";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pouch";
            readonly "@language": "en";
        }, {
            readonly "@value": "poche";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "po";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:PoundMass";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pound";
            readonly "@language": "en";
        }, {
            readonly "@value": "pound";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "lb";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:PoundSterling";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pound sterling";
            readonly "@language": "en";
        }, {
            readonly "@value": "livre sterling";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "£";
        readonly "skos:broader": readonly ["dfc-m:CurrencyUnit"];
    }, {
        readonly "@id": "dfc-m:PowderBulk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "powder bulk";
            readonly "@language": "en";
        }, {
            readonly "@value": "poudre en vrac";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "vy";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Protein";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Protein";
            readonly "@language": "en";
        }, {
            readonly "@value": "Protéine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Protein";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Punnet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "punnet";
            readonly "@language": "en";
        }, {
            readonly "@value": "barquette";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "pj";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:QuantityUnit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Quantity unit";
            readonly "@language": "en";
        }, {
            readonly "@value": "Unité de quantité";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "QuantityUnit";
        readonly "skos:broader": readonly ["dfc-m:Unit"];
    }, {
        readonly "@id": "dfc-m:Roll";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "roll";
            readonly "@language": "en";
        }, {
            readonly "@value": "rouleau";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ro";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Salt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Salt";
            readonly "@language": "en";
        }, {
            readonly "@value": "Sel";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Salt";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:SaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Saturated fat";
            readonly "@language": "en";
        }, {
            readonly "@value": "Graisse saturée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SaturatedFat";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Selenium";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Selenium";
            readonly "@language": "en";
        }, {
            readonly "@value": "Sélénium";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Selenium";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:SesameSeeds";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Sesame seeds";
            readonly "@language": "en";
        }, {
            readonly "@value": "Graines de sésame";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SesameSeeds";
        readonly "skos:broader": readonly ["dfc-m:AllergenDimension"];
    }, {
        readonly "@id": "dfc-m:SixPack";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "6 pack";
            readonly "@language": "en";
        }, {
            readonly "@value": "pack de 6";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "6p";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Sodium";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Sodium";
            readonly "@language": "en";
        }, {
            readonly "@value": "Sodium";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Sodium";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Soy";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Soy";
            readonly "@language": "en";
        }, {
            readonly "@value": "Soja";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Soy";
        readonly "skos:broader": readonly ["dfc-m:AllergenDimension"];
    }, {
        readonly "@id": "dfc-m:Starch";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Starch";
            readonly "@language": "en";
        }, {
            readonly "@value": "Amidon";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Starch";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Sugars";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Sugars";
            readonly "@language": "en";
        }, {
            readonly "@value": "Sucres";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Sugars";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Sulphites";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Sulfur dioxide and sulphites in a concentration of more than 10mg/kg or 10mg/l (expressed as SO2)";
            readonly "@language": "en";
        }, {
            readonly "@value": "Anhydride sulfureux et sulfites en concentration de plus de 10mg/kg ou 10 mg/l (exprimés en SO2)";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Sulphites";
        readonly "skos:broader": readonly ["dfc-m:AllergenDimension"];
    }, {
        readonly "@id": "dfc-m:Tablet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "tablet";
            readonly "@language": "en";
        }, {
            readonly "@value": "tablette";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "t1";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Tin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "tin";
            readonly "@language": "en";
        }, {
            readonly "@value": "boîte de conserve";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "tn";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Tonne";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "tonne";
            readonly "@language": "en";
        }, {
            readonly "@value": "tonne";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "T";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Transfat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Transfat";
            readonly "@language": "en";
        }, {
            readonly "@value": "Graisse trans";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Transfat";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Tray";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "tray";
            readonly "@language": "en";
        }, {
            readonly "@value": "plateau";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "pu";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Tub";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "tub";
            readonly "@language": "en";
        }, {
            readonly "@value": "bac";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "tb";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:Tube";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "tube";
            readonly "@language": "en";
        }, {
            readonly "@value": "tube";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "td";
        readonly "skos:broader": readonly ["dfc-m:QuantityUnit"];
    }, {
        readonly "@id": "dfc-m:USDollar";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "US Dollar";
            readonly "@language": "en";
        }, {
            readonly "@value": "Dollar US";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "$US";
        readonly "skos:broader": readonly ["dfc-m:CurrencyUnit"];
    }, {
        readonly "@id": "dfc-m:Unit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Unit";
            readonly "@language": "en";
        }, {
            readonly "@value": "Unités";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Unit";
    }, {
        readonly "@id": "dfc-m:VitaminA";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Vitamin A";
            readonly "@language": "en";
        }, {
            readonly "@value": "Vitamine A";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "VitaminA";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:VitaminB12";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Vitamin B12";
            readonly "@language": "en";
        }, {
            readonly "@value": "Vitamine B12";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "VitaminB12";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:VitaminB6";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Vitamin B6";
            readonly "@language": "en";
        }, {
            readonly "@value": "Vitamine B6";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "VitaminB6";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:VitaminC";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Vitamin C";
            readonly "@language": "en";
        }, {
            readonly "@value": "Vitamine C";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "VitaminC";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:VitaminD";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Vitamin D";
            readonly "@language": "en";
        }, {
            readonly "@value": "Vitamine D";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "VitaminD";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:VitaminE";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Vitamin E";
            readonly "@language": "en";
        }, {
            readonly "@value": "Vitamine E";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "VitaminE";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:VitaminK";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Vitamin K";
            readonly "@language": "en";
        }, {
            readonly "@value": "Vitamine K";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "VitaminK";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }, {
        readonly "@id": "dfc-m:Volume";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Volume";
            readonly "@language": "en";
        }, {
            readonly "@value": "Volume";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Volume";
        readonly "skos:broader": readonly ["dfc-m:PhysicalDimension"];
    }, {
        readonly "@id": "dfc-m:Weight";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Weight";
            readonly "@language": "en";
        }, {
            readonly "@value": "Poids";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Weight";
        readonly "skos:broader": readonly ["dfc-m:PhysicalDimension"];
    }, {
        readonly "@id": "dfc-m:Width";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Width";
            readonly "@language": "en";
        }, {
            readonly "@value": "Largeur";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Width";
        readonly "skos:broader": readonly ["dfc-m:PhysicalDimension"];
    }, {
        readonly "@id": "dfc-m:Zinc";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Zinc";
            readonly "@language": "en";
        }, {
            readonly "@value": "Zinc";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Zinc";
        readonly "skos:broader": readonly ["dfc-m:NutrientDimension"];
    }];
};
export default _default;
