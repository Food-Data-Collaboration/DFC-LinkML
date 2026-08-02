declare const _default: {
    readonly "@context": {
        readonly skos: "http://www.w3.org/2004/02/skos/core#";
        readonly "dfc-v": "http://w3id.org/dfc/taxonomies/v2.0.0/vocabulary.rdf#";
    };
    readonly "@graph": readonly [{
        readonly "@id": "dfc-v:Measure";
        readonly "@type": readonly ["skos:ConceptScheme"];
        readonly "skos:prefLabel": "Measure";
        readonly "skos:hasTopConcept": readonly ["dfc-f:packDe6", "dfc-f:ProductMeasureGlossary", "dfc-f:GlossaireMesureProduit", "dfc-f:QuantityUnit", "dfc-f:UnitDeQuantit", "dfc-f:Largeur", "dfc-f:Width", "dfc-f:PhysicalDimension", "dfc-f:DimensionPhysique", "dfc-f:douzaine", "dfc-f:dozen", "dfc-f:Volume", "dfc-f:Hauteur", "dfc-f:Height", "dfc-f:Depth", "dfc-f:Profondeur", "dfc-f:Weight", "dfc-f:Poids", "dfc-f:Dimension", "dfc-f:euro", "dfc-f:CurrencyUnit", "dfc-f:UnitDeDeviseMontaire", "dfc-f:tasse", "dfc-f:cup", "dfc-f:seau", "dfc-f:bucket", "dfc-f:milligramme", "dfc-f:milligram", "dfc-f:tablette", "dfc-f:tablet", "dfc-f:kit", "dfc-f:tonne", "dfc-f:inch", "dfc-f:pouce", "dfc-f:box", "dfc-f:bote", "dfc-f:packDe4", "dfc-f:net", "dfc-f:filet", "dfc-f:bundle", "dfc-f:lot", "dfc-f:plateau", "dfc-f:tray", "dfc-f:centilitre", "dfc-f:can", "dfc-f:canette", "dfc-f:pallet", "dfc-f:palette", "dfc-f:beerCrate", "dfc-f:casierBire", "dfc-f:carton", "dfc-f:halfDozen", "dfc-f:demiDouzaine", "dfc-f:grainBulk", "dfc-f:grainEnVrac", "dfc-f:gram", "dfc-f:gramme", "dfc-f:crate", "dfc-f:cagette", "dfc-f:kilogram", "dfc-f:kilogramme", "dfc-f:bac", "dfc-f:tub", "dfc-f:boteDeConserve", "dfc-f:tin", "dfc-f:pot", "dfc-f:ounce", "dfc-f:once", "dfc-f:gallonUK", "dfc-f:gallonGB", "dfc-f:panier", "dfc-f:basket", "dfc-f:centimetre", "dfc-f:centimtre", "dfc-f:punnet", "dfc-f:barquette", "dfc-f:decilitre", "dfc-f:litre", "dfc-f:keg", "dfc-f:ft", "dfc-f:pound", "dfc-f:decimetre", "dfc-f:decimtre", "dfc-f:cask", "dfc-f:tonneau", "dfc-f:package", "dfc-f:colis", "dfc-f:bag", "dfc-f:sac", "dfc-f:bottle", "dfc-f:bouteille", "dfc-f:baril", "dfc-f:drum", "dfc-f:paire", "dfc-f:pair", "dfc-f:tube", "dfc-f:roll", "dfc-f:rouleau", "dfc-f:pouch", "dfc-f:poche", "dfc-f:noduleBulk", "dfc-f:noduleEnVrac", "dfc-f:mtre", "dfc-f:metre", "dfc-f:packet", "dfc-f:sachet", "dfc-f:piece", "dfc-f:pice", "dfc-f:poudreEnVrac", "dfc-f:powderBulk", "dfc-f:liquideEnVrac", "dfc-f:liquidBulk", "dfc-f:bocal", "dfc-f:jar", "dfc-f:millilitre", "dfc-f:milliliter", "dfc-f:pourcent", "dfc-f:percent", "dfc-f:kilometre", "dfc-f:kilomtre", "dfc-f:botte", "dfc-f:bunch", "dfc-f:Units", "dfc-f:Unit", "dfc-f:GraisseSature", "dfc-f:SaturatedFat", "dfc-f:DimensionNutritionnelle", "dfc-f:NutrientDimension", "dfc-f:Copper", "dfc-f:Carbohydrates", "dfc-f:Sodium", "dfc-f:Fluoride", "dfc-f:Starch", "dfc-f:Amidon", "dfc-f:Calcium", "dfc-f:Slnium", "dfc-f:Selenium", "dfc-f:GraissePolyInsature", "dfc-f:PolyUnsaturatedFat", "dfc-f:VitamineB6", "dfc-f:VitaminB6", "dfc-f:Protine", "dfc-f:Protein", "dfc-f:Chloride", "dfc-f:Salt", "dfc-f:Sel", "dfc-f:Graisse", "dfc-f:Fat", "dfc-f:Magnesium", "dfc-f:Magnsium", "dfc-f:VitaminE", "dfc-f:VitamineE", "dfc-f:Iodine", "dfc-f:VitamineD", "dfc-f:VitaminD", "dfc-f:GraisseMonosature", "dfc-f:MonosaturatedFat", "dfc-f:Zinc", "dfc-f:Potassium", "dfc-f:Phosphore", "dfc-f:Phosphorus", "dfc-f:Sugars", "dfc-f:Sucres", "dfc-f:Manganse", "dfc-f:Manganese", "dfc-f:VitamineC", "dfc-f:VitaminC", "dfc-f:VitamineB12", "dfc-f:VitaminB12", "dfc-f:VitaminK", "dfc-f:VitamineK", "dfc-f:Cholesterol", "dfc-f:Cholestrol", "dfc-f:FolicAcid", "dfc-f:AcideFolique", "dfc-f:Transfat", "dfc-f:GraisseTrans", "dfc-f:Chrome", "dfc-f:Chromium", "dfc-f:Fibre", "dfc-f:Iron", "dfc-f:Fer", "dfc-f:VitamineA", "dfc-f:VitaminA", "dfc-f:Crustacs", "dfc-f:Crustaceans", "dfc-f:AllergenDimension", "dfc-f:DimensionAllergne", "dfc-f:Soy", "dfc-f:Soja", "dfc-f:LabellingDimension", "dfc-f:DimensionScoreDeLabellisation", "dfc-f:NutriScore", "dfc-f:EcoScore", "dfc-f:PlanetScore", "dfc-f:Celeriac", "dfc-f:Lupine", "dfc-f:Lupin", "dfc-f:GrainesDeSsame", "dfc-f:SesameSeeds", "dfc-f:Mustard", "dfc-f:Moutarde", "dfc-f:Oeufs", "dfc-f:Eggs", "dfc-f:Molluscs", "dfc-f:Mollusques", "dfc-f:CerealsContainingGluten", "dfc-f:CralesContenantDuGluten", "dfc-f:FruitsCoque", "dfc-f:Nuts", "dfc-f:MilkAndLactoseBasedProducts", "dfc-f:LaitEtProduitsBaseDeLactose", "dfc-f:Arachides", "dfc-f:Peanuts", "dfc-f:fishs", "dfc-f:Poissons", "dfc-f:dollarCanadien", "dfc-f:canadianDollar", "dfc-f:dollarAustralien", "dfc-f:australianDollar", "dfc-f:poundSterling", "dfc-f:livreSterling", "dfc-f:USDollar", "dfc-f:DollarUS"];
    }, {
        readonly "@id": "dfc-f:packDe6";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pack de 6";
        readonly "skos:notation": "pack_de_6";
    }, {
        readonly "@id": "dfc-f:ProductMeasureGlossary";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Product measure glossary ";
        readonly "skos:notation": "Product_measure_glossary_";
    }, {
        readonly "@id": "dfc-f:GlossaireMesureProduit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Glossaire mesure produit";
        readonly "skos:notation": "Glossaire_mesure_produit";
    }, {
        readonly "@id": "dfc-f:QuantityUnit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Quantity unit";
        readonly "skos:notation": "Quantity_unit";
    }, {
        readonly "@id": "dfc-f:UnitDeQuantit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Unité de quantité";
        readonly "skos:notation": "Unit_de_quantit";
    }, {
        readonly "@id": "dfc-f:Largeur";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Largeur";
        readonly "skos:notation": "Largeur";
    }, {
        readonly "@id": "dfc-f:Width";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Width";
        readonly "skos:notation": "Width";
    }, {
        readonly "@id": "dfc-f:PhysicalDimension";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Physical dimension";
        readonly "skos:notation": "Physical_dimension";
    }, {
        readonly "@id": "dfc-f:DimensionPhysique";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Dimension physique";
        readonly "skos:notation": "Dimension_physique";
    }, {
        readonly "@id": "dfc-f:douzaine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "douzaine";
        readonly "skos:notation": "douzaine";
    }, {
        readonly "@id": "dfc-f:dozen";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dozen";
        readonly "skos:notation": "dozen";
    }, {
        readonly "@id": "dfc-f:Volume";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Volume";
        readonly "skos:notation": "Volume";
    }, {
        readonly "@id": "dfc-f:Hauteur";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Hauteur";
        readonly "skos:notation": "Hauteur";
    }, {
        readonly "@id": "dfc-f:Height";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Height";
        readonly "skos:notation": "Height";
    }, {
        readonly "@id": "dfc-f:Depth";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Depth";
        readonly "skos:notation": "Depth";
    }, {
        readonly "@id": "dfc-f:Profondeur";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Profondeur";
        readonly "skos:notation": "Profondeur";
    }, {
        readonly "@id": "dfc-f:Weight";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Weight";
        readonly "skos:notation": "Weight";
    }, {
        readonly "@id": "dfc-f:Poids";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Poids";
        readonly "skos:notation": "Poids";
    }, {
        readonly "@id": "dfc-f:Dimension";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Dimension";
        readonly "skos:notation": "Dimension";
    }, {
        readonly "@id": "dfc-f:euro";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "euro";
        readonly "skos:notation": "euro";
    }, {
        readonly "@id": "dfc-f:CurrencyUnit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Currency unit";
        readonly "skos:notation": "Currency_unit";
    }, {
        readonly "@id": "dfc-f:UnitDeDeviseMontaire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Unité de devise monétaire";
        readonly "skos:notation": "Unit_de_devise_montaire";
    }, {
        readonly "@id": "dfc-f:tasse";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "tasse";
        readonly "skos:notation": "tasse";
    }, {
        readonly "@id": "dfc-f:cup";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cup";
        readonly "skos:notation": "cup";
    }, {
        readonly "@id": "dfc-f:seau";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "seau";
        readonly "skos:notation": "seau";
    }, {
        readonly "@id": "dfc-f:bucket";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "bucket";
        readonly "skos:notation": "bucket";
    }, {
        readonly "@id": "dfc-f:milligramme";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "milligramme";
        readonly "skos:notation": "milligramme";
    }, {
        readonly "@id": "dfc-f:milligram";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "milligram";
        readonly "skos:notation": "milligram";
    }, {
        readonly "@id": "dfc-f:tablette";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "tablette";
        readonly "skos:notation": "tablette";
    }, {
        readonly "@id": "dfc-f:tablet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "tablet";
        readonly "skos:notation": "tablet";
    }, {
        readonly "@id": "dfc-f:kit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "kit";
        readonly "skos:notation": "kit";
    }, {
        readonly "@id": "dfc-f:tonne";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "tonne";
        readonly "skos:notation": "tonne";
    }, {
        readonly "@id": "dfc-f:inch";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "inch";
        readonly "skos:notation": "inch";
    }, {
        readonly "@id": "dfc-f:pouce";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pouce";
        readonly "skos:notation": "pouce";
    }, {
        readonly "@id": "dfc-f:box";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "box";
        readonly "skos:notation": "box";
    }, {
        readonly "@id": "dfc-f:bote";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "boîte";
        readonly "skos:notation": "bote";
    }, {
        readonly "@id": "dfc-f:packDe4";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pack de 4";
        readonly "skos:notation": "pack_de_4";
    }, {
        readonly "@id": "dfc-f:net";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "net";
        readonly "skos:notation": "net";
    }, {
        readonly "@id": "dfc-f:filet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "filet";
        readonly "skos:notation": "filet";
    }, {
        readonly "@id": "dfc-f:bundle";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "bundle";
        readonly "skos:notation": "bundle";
    }, {
        readonly "@id": "dfc-f:lot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "lot";
        readonly "skos:notation": "lot";
    }, {
        readonly "@id": "dfc-f:plateau";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "plateau";
        readonly "skos:notation": "plateau";
    }, {
        readonly "@id": "dfc-f:tray";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "tray";
        readonly "skos:notation": "tray";
    }, {
        readonly "@id": "dfc-f:centilitre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "centilitre";
        readonly "skos:notation": "centilitre";
    }, {
        readonly "@id": "dfc-f:can";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "can";
        readonly "skos:notation": "can";
    }, {
        readonly "@id": "dfc-f:canette";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "canette";
        readonly "skos:notation": "canette";
    }, {
        readonly "@id": "dfc-f:pallet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pallet";
        readonly "skos:notation": "pallet";
    }, {
        readonly "@id": "dfc-f:palette";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "palette";
        readonly "skos:notation": "palette";
    }, {
        readonly "@id": "dfc-f:beerCrate";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "beer crate";
        readonly "skos:notation": "beer_crate";
    }, {
        readonly "@id": "dfc-f:casierBire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "casier à bière";
        readonly "skos:notation": "casier__bire";
    }, {
        readonly "@id": "dfc-f:carton";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "carton";
        readonly "skos:notation": "carton";
    }, {
        readonly "@id": "dfc-f:halfDozen";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "half dozen";
        readonly "skos:notation": "half_dozen";
    }, {
        readonly "@id": "dfc-f:demiDouzaine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "demi-douzaine";
        readonly "skos:notation": "demi_douzaine";
    }, {
        readonly "@id": "dfc-f:grainBulk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "grain bulk";
        readonly "skos:notation": "grain_bulk";
    }, {
        readonly "@id": "dfc-f:grainEnVrac";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "grain en vrac";
        readonly "skos:notation": "grain_en_vrac";
    }, {
        readonly "@id": "dfc-f:gram";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "gram";
        readonly "skos:notation": "gram";
    }, {
        readonly "@id": "dfc-f:gramme";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "gramme";
        readonly "skos:notation": "gramme";
    }, {
        readonly "@id": "dfc-f:crate";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "crate";
        readonly "skos:notation": "crate";
    }, {
        readonly "@id": "dfc-f:cagette";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cagette";
        readonly "skos:notation": "cagette";
    }, {
        readonly "@id": "dfc-f:kilogram";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "kilogram";
        readonly "skos:notation": "kilogram";
    }, {
        readonly "@id": "dfc-f:kilogramme";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "kilogramme";
        readonly "skos:notation": "kilogramme";
    }, {
        readonly "@id": "dfc-f:bac";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "bac";
        readonly "skos:notation": "bac";
    }, {
        readonly "@id": "dfc-f:tub";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "tub";
        readonly "skos:notation": "tub";
    }, {
        readonly "@id": "dfc-f:boteDeConserve";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "boîte de conserve";
        readonly "skos:notation": "bote_de_conserve";
    }, {
        readonly "@id": "dfc-f:tin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "tin";
        readonly "skos:notation": "tin";
    }, {
        readonly "@id": "dfc-f:pot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pot";
        readonly "skos:notation": "pot";
    }, {
        readonly "@id": "dfc-f:ounce";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "ounce";
        readonly "skos:notation": "ounce";
    }, {
        readonly "@id": "dfc-f:once";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "once";
        readonly "skos:notation": "once";
    }, {
        readonly "@id": "dfc-f:gallonUK";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "gallon (UK)";
        readonly "skos:notation": "gallon_UK";
    }, {
        readonly "@id": "dfc-f:gallonGB";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "gallon (GB)";
        readonly "skos:notation": "gallon_GB";
    }, {
        readonly "@id": "dfc-f:panier";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "panier";
        readonly "skos:notation": "panier";
    }, {
        readonly "@id": "dfc-f:basket";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "basket";
        readonly "skos:notation": "basket";
    }, {
        readonly "@id": "dfc-f:centimetre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "centimetre";
        readonly "skos:notation": "centimetre";
    }, {
        readonly "@id": "dfc-f:centimtre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "centimètre";
        readonly "skos:notation": "centimtre";
    }, {
        readonly "@id": "dfc-f:punnet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "punnet";
        readonly "skos:notation": "punnet";
    }, {
        readonly "@id": "dfc-f:barquette";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "barquette";
        readonly "skos:notation": "barquette";
    }, {
        readonly "@id": "dfc-f:decilitre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "decilitre";
        readonly "skos:notation": "decilitre";
    }, {
        readonly "@id": "dfc-f:litre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "litre";
        readonly "skos:notation": "litre";
    }, {
        readonly "@id": "dfc-f:keg";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "keg";
        readonly "skos:notation": "keg";
    }, {
        readonly "@id": "dfc-f:ft";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fût";
        readonly "skos:notation": "ft";
    }, {
        readonly "@id": "dfc-f:pound";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pound";
        readonly "skos:notation": "pound";
    }, {
        readonly "@id": "dfc-f:decimetre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "decimetre";
        readonly "skos:notation": "decimetre";
    }, {
        readonly "@id": "dfc-f:decimtre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "decimètre";
        readonly "skos:notation": "decimtre";
    }, {
        readonly "@id": "dfc-f:cask";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cask";
        readonly "skos:notation": "cask";
    }, {
        readonly "@id": "dfc-f:tonneau";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "tonneau";
        readonly "skos:notation": "tonneau";
    }, {
        readonly "@id": "dfc-f:package";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "package";
        readonly "skos:notation": "package";
    }, {
        readonly "@id": "dfc-f:colis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "colis";
        readonly "skos:notation": "colis";
    }, {
        readonly "@id": "dfc-f:bag";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "bag";
        readonly "skos:notation": "bag";
    }, {
        readonly "@id": "dfc-f:sac";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sac";
        readonly "skos:notation": "sac";
    }, {
        readonly "@id": "dfc-f:bottle";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "bottle";
        readonly "skos:notation": "bottle";
    }, {
        readonly "@id": "dfc-f:bouteille";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "bouteille";
        readonly "skos:notation": "bouteille";
    }, {
        readonly "@id": "dfc-f:baril";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "baril";
        readonly "skos:notation": "baril";
    }, {
        readonly "@id": "dfc-f:drum";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "drum";
        readonly "skos:notation": "drum";
    }, {
        readonly "@id": "dfc-f:paire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "paire";
        readonly "skos:notation": "paire";
    }, {
        readonly "@id": "dfc-f:pair";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pair";
        readonly "skos:notation": "pair";
    }, {
        readonly "@id": "dfc-f:tube";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "tube";
        readonly "skos:notation": "tube";
    }, {
        readonly "@id": "dfc-f:roll";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "roll";
        readonly "skos:notation": "roll";
    }, {
        readonly "@id": "dfc-f:rouleau";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "rouleau";
        readonly "skos:notation": "rouleau";
    }, {
        readonly "@id": "dfc-f:pouch";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pouch";
        readonly "skos:notation": "pouch";
    }, {
        readonly "@id": "dfc-f:poche";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "poche";
        readonly "skos:notation": "poche";
    }, {
        readonly "@id": "dfc-f:noduleBulk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "nodule bulk";
        readonly "skos:notation": "nodule_bulk";
    }, {
        readonly "@id": "dfc-f:noduleEnVrac";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "nodule en vrac";
        readonly "skos:notation": "nodule_en_vrac";
    }, {
        readonly "@id": "dfc-f:mtre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "mètre";
        readonly "skos:notation": "mtre";
    }, {
        readonly "@id": "dfc-f:metre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "metre";
        readonly "skos:notation": "metre";
    }, {
        readonly "@id": "dfc-f:packet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "packet";
        readonly "skos:notation": "packet";
    }, {
        readonly "@id": "dfc-f:sachet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sachet";
        readonly "skos:notation": "sachet";
    }, {
        readonly "@id": "dfc-f:piece";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "piece";
        readonly "skos:notation": "piece";
    }, {
        readonly "@id": "dfc-f:pice";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pièce";
        readonly "skos:notation": "pice";
    }, {
        readonly "@id": "dfc-f:poudreEnVrac";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "poudre en vrac";
        readonly "skos:notation": "poudre_en_vrac";
    }, {
        readonly "@id": "dfc-f:powderBulk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "powder bulk";
        readonly "skos:notation": "powder_bulk";
    }, {
        readonly "@id": "dfc-f:liquideEnVrac";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "liquide en vrac";
        readonly "skos:notation": "liquide_en_vrac";
    }, {
        readonly "@id": "dfc-f:liquidBulk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "liquid bulk";
        readonly "skos:notation": "liquid_bulk";
    }, {
        readonly "@id": "dfc-f:bocal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "bocal";
        readonly "skos:notation": "bocal";
    }, {
        readonly "@id": "dfc-f:jar";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "jar";
        readonly "skos:notation": "jar";
    }, {
        readonly "@id": "dfc-f:millilitre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "millilitre";
        readonly "skos:notation": "millilitre";
    }, {
        readonly "@id": "dfc-f:milliliter";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "milliliter";
        readonly "skos:notation": "milliliter";
    }, {
        readonly "@id": "dfc-f:pourcent";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pourcent";
        readonly "skos:notation": "pourcent";
    }, {
        readonly "@id": "dfc-f:percent";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "percent";
        readonly "skos:notation": "percent";
    }, {
        readonly "@id": "dfc-f:kilometre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "kilometre";
        readonly "skos:notation": "kilometre";
    }, {
        readonly "@id": "dfc-f:kilomtre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "kilomètre";
        readonly "skos:notation": "kilomtre";
    }, {
        readonly "@id": "dfc-f:botte";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "botte";
        readonly "skos:notation": "botte";
    }, {
        readonly "@id": "dfc-f:bunch";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "bunch";
        readonly "skos:notation": "bunch";
    }, {
        readonly "@id": "dfc-f:Units";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Unités";
        readonly "skos:notation": "Units";
    }, {
        readonly "@id": "dfc-f:Unit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Unit";
        readonly "skos:notation": "Unit";
    }, {
        readonly "@id": "dfc-f:GraisseSature";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Graisse saturée";
        readonly "skos:notation": "Graisse_sature";
    }, {
        readonly "@id": "dfc-f:SaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Saturated fat";
        readonly "skos:notation": "Saturated_fat";
    }, {
        readonly "@id": "dfc-f:DimensionNutritionnelle";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Dimension nutritionnelle";
        readonly "skos:notation": "Dimension_nutritionnelle";
    }, {
        readonly "@id": "dfc-f:NutrientDimension";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Nutrient dimension";
        readonly "skos:notation": "Nutrient_dimension";
    }, {
        readonly "@id": "dfc-f:Copper";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Copper";
        readonly "skos:notation": "Copper";
    }, {
        readonly "@id": "dfc-f:Carbohydrates";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Carbohydrates";
        readonly "skos:notation": "Carbohydrates";
    }, {
        readonly "@id": "dfc-f:Sodium";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sodium";
        readonly "skos:notation": "Sodium";
    }, {
        readonly "@id": "dfc-f:Fluoride";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Fluoride";
        readonly "skos:notation": "Fluoride";
    }, {
        readonly "@id": "dfc-f:Starch";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Starch";
        readonly "skos:notation": "Starch";
    }, {
        readonly "@id": "dfc-f:Amidon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Amidon";
        readonly "skos:notation": "Amidon";
    }, {
        readonly "@id": "dfc-f:Calcium";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Calcium";
        readonly "skos:notation": "Calcium";
    }, {
        readonly "@id": "dfc-f:Slnium";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sélénium";
        readonly "skos:notation": "Slnium";
    }, {
        readonly "@id": "dfc-f:Selenium";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Selenium";
        readonly "skos:notation": "Selenium";
    }, {
        readonly "@id": "dfc-f:GraissePolyInsature";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Graisse poly-insaturée";
        readonly "skos:notation": "Graisse_poly_insature";
    }, {
        readonly "@id": "dfc-f:PolyUnsaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Poly-unsaturated fat";
        readonly "skos:notation": "Poly_unsaturated_fat";
    }, {
        readonly "@id": "dfc-f:VitamineB6";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vitamine B6";
        readonly "skos:notation": "Vitamine_B6";
    }, {
        readonly "@id": "dfc-f:VitaminB6";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vitamin B6";
        readonly "skos:notation": "Vitamin_B6";
    }, {
        readonly "@id": "dfc-f:Protine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Protéine";
        readonly "skos:notation": "Protine";
    }, {
        readonly "@id": "dfc-f:Protein";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Protein";
        readonly "skos:notation": "Protein";
    }, {
        readonly "@id": "dfc-f:Chloride";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Chloride";
        readonly "skos:notation": "Chloride";
    }, {
        readonly "@id": "dfc-f:Salt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Salt";
        readonly "skos:notation": "Salt";
    }, {
        readonly "@id": "dfc-f:Sel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sel";
        readonly "skos:notation": "Sel";
    }, {
        readonly "@id": "dfc-f:Graisse";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Graisse";
        readonly "skos:notation": "Graisse";
    }, {
        readonly "@id": "dfc-f:Fat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Fat";
        readonly "skos:notation": "Fat";
    }, {
        readonly "@id": "dfc-f:Magnesium";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Magnesium";
        readonly "skos:notation": "Magnesium";
    }, {
        readonly "@id": "dfc-f:Magnsium";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Magnésium";
        readonly "skos:notation": "Magnsium";
    }, {
        readonly "@id": "dfc-f:VitaminE";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vitamin E";
        readonly "skos:notation": "Vitamin_E";
    }, {
        readonly "@id": "dfc-f:VitamineE";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vitamine E";
        readonly "skos:notation": "Vitamine_E";
    }, {
        readonly "@id": "dfc-f:Iodine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Iodine";
        readonly "skos:notation": "Iodine";
    }, {
        readonly "@id": "dfc-f:VitamineD";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vitamine D";
        readonly "skos:notation": "Vitamine_D";
    }, {
        readonly "@id": "dfc-f:VitaminD";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vitamin D";
        readonly "skos:notation": "Vitamin_D";
    }, {
        readonly "@id": "dfc-f:GraisseMonosature";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Graisse monosaturée";
        readonly "skos:notation": "Graisse_monosature";
    }, {
        readonly "@id": "dfc-f:MonosaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Monosaturated fat";
        readonly "skos:notation": "Monosaturated_fat";
    }, {
        readonly "@id": "dfc-f:Zinc";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Zinc";
        readonly "skos:notation": "Zinc";
    }, {
        readonly "@id": "dfc-f:Potassium";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Potassium";
        readonly "skos:notation": "Potassium";
    }, {
        readonly "@id": "dfc-f:Phosphore";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Phosphore";
        readonly "skos:notation": "Phosphore";
    }, {
        readonly "@id": "dfc-f:Phosphorus";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Phosphorus";
        readonly "skos:notation": "Phosphorus";
    }, {
        readonly "@id": "dfc-f:Sugars";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sugars";
        readonly "skos:notation": "Sugars";
    }, {
        readonly "@id": "dfc-f:Sucres";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sucres";
        readonly "skos:notation": "Sucres";
    }, {
        readonly "@id": "dfc-f:Manganse";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Manganèse";
        readonly "skos:notation": "Manganse";
    }, {
        readonly "@id": "dfc-f:Manganese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Manganese";
        readonly "skos:notation": "Manganese";
    }, {
        readonly "@id": "dfc-f:VitamineC";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vitamine C";
        readonly "skos:notation": "Vitamine_C";
    }, {
        readonly "@id": "dfc-f:VitaminC";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vitamin C";
        readonly "skos:notation": "Vitamin_C";
    }, {
        readonly "@id": "dfc-f:VitamineB12";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vitamine B12";
        readonly "skos:notation": "Vitamine_B12";
    }, {
        readonly "@id": "dfc-f:VitaminB12";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vitamin B12";
        readonly "skos:notation": "Vitamin_B12";
    }, {
        readonly "@id": "dfc-f:VitaminK";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vitamin K";
        readonly "skos:notation": "Vitamin_K";
    }, {
        readonly "@id": "dfc-f:VitamineK";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vitamine K";
        readonly "skos:notation": "Vitamine_K";
    }, {
        readonly "@id": "dfc-f:Cholesterol";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cholesterol";
        readonly "skos:notation": "Cholesterol";
    }, {
        readonly "@id": "dfc-f:Cholestrol";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cholestérol";
        readonly "skos:notation": "Cholestrol";
    }, {
        readonly "@id": "dfc-f:FolicAcid";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Folic acid";
        readonly "skos:notation": "Folic_acid";
    }, {
        readonly "@id": "dfc-f:AcideFolique";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Acide folique";
        readonly "skos:notation": "Acide_folique";
    }, {
        readonly "@id": "dfc-f:Transfat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Transfat";
        readonly "skos:notation": "Transfat";
    }, {
        readonly "@id": "dfc-f:GraisseTrans";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Graisse trans";
        readonly "skos:notation": "Graisse_trans";
    }, {
        readonly "@id": "dfc-f:Chrome";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Chrome";
        readonly "skos:notation": "Chrome";
    }, {
        readonly "@id": "dfc-f:Chromium";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Chromium";
        readonly "skos:notation": "Chromium";
    }, {
        readonly "@id": "dfc-f:Fibre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Fibre";
        readonly "skos:notation": "Fibre";
    }, {
        readonly "@id": "dfc-f:Iron";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Iron";
        readonly "skos:notation": "Iron";
    }, {
        readonly "@id": "dfc-f:Fer";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Fer";
        readonly "skos:notation": "Fer";
    }, {
        readonly "@id": "dfc-f:VitamineA";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vitamine A";
        readonly "skos:notation": "Vitamine_A";
    }, {
        readonly "@id": "dfc-f:VitaminA";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vitamin A";
        readonly "skos:notation": "Vitamin_A";
    }, {
        readonly "@id": "dfc-f:Crustacs";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Crustacés";
        readonly "skos:notation": "Crustacs";
    }, {
        readonly "@id": "dfc-f:Crustaceans";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Crustaceans";
        readonly "skos:notation": "Crustaceans";
    }, {
        readonly "@id": "dfc-f:AllergenDimension";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Allergen dimension";
        readonly "skos:notation": "Allergen_dimension";
    }, {
        readonly "@id": "dfc-f:DimensionAllergne";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Dimension allergène";
        readonly "skos:notation": "Dimension_allergne";
    }, {
        readonly "@id": "dfc-f:Soy";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Soy";
        readonly "skos:notation": "Soy";
    }, {
        readonly "@id": "dfc-f:Soja";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Soja";
        readonly "skos:notation": "Soja";
    }, {
        readonly "@id": "dfc-f:LabellingDimension";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Labelling dimension";
        readonly "skos:notation": "Labelling_dimension";
    }, {
        readonly "@id": "dfc-f:DimensionScoreDeLabellisation";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Dimension score de labellisation";
        readonly "skos:notation": "Dimension_score_de_labellisation";
    }, {
        readonly "@id": "dfc-f:NutriScore";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Nutri-score";
        readonly "skos:notation": "Nutri_score";
    }, {
        readonly "@id": "dfc-f:EcoScore";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Eco-score";
        readonly "skos:notation": "Eco_score";
    }, {
        readonly "@id": "dfc-f:PlanetScore";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Planet-score";
        readonly "skos:notation": "Planet_score";
    }, {
        readonly "@id": "dfc-f:Celeriac";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Celeriac";
        readonly "skos:notation": "Celeriac";
    }, {
        readonly "@id": "dfc-f:Lupine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Lupine";
        readonly "skos:notation": "Lupine";
    }, {
        readonly "@id": "dfc-f:Lupin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Lupin";
        readonly "skos:notation": "Lupin";
    }, {
        readonly "@id": "dfc-f:GrainesDeSsame";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Graines de sésame";
        readonly "skos:notation": "Graines_de_ssame";
    }, {
        readonly "@id": "dfc-f:SesameSeeds";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sesame seeds";
        readonly "skos:notation": "Sesame_seeds";
    }, {
        readonly "@id": "dfc-f:Mustard";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Mustard";
        readonly "skos:notation": "Mustard";
    }, {
        readonly "@id": "dfc-f:Moutarde";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Moutarde";
        readonly "skos:notation": "Moutarde";
    }, {
        readonly "@id": "dfc-f:Oeufs";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Oeufs";
        readonly "skos:notation": "Oeufs";
    }, {
        readonly "@id": "dfc-f:Eggs";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Eggs";
        readonly "skos:notation": "Eggs";
    }, {
        readonly "@id": "dfc-f:Molluscs";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Molluscs";
        readonly "skos:notation": "Molluscs";
    }, {
        readonly "@id": "dfc-f:Mollusques";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Mollusques";
        readonly "skos:notation": "Mollusques";
    }, {
        readonly "@id": "dfc-f:CerealsContainingGluten";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cereals containing gluten";
        readonly "skos:notation": "Cereals_containing_gluten";
    }, {
        readonly "@id": "dfc-f:CralesContenantDuGluten";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Céréales contenant du gluten";
        readonly "skos:notation": "Crales_contenant_du_gluten";
    }, {
        readonly "@id": "dfc-f:FruitsCoque";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Fruits à coque";
        readonly "skos:notation": "Fruits__coque";
    }, {
        readonly "@id": "dfc-f:Nuts";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Nuts";
        readonly "skos:notation": "Nuts";
    }, {
        readonly "@id": "dfc-f:MilkAndLactoseBasedProducts";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Milk and lactose-based products";
        readonly "skos:notation": "Milk_and_lactose_based_products";
    }, {
        readonly "@id": "dfc-f:LaitEtProduitsBaseDeLactose";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Lait et produits à base de lactose";
        readonly "skos:notation": "Lait_et_produits__base_de_lactose";
    }, {
        readonly "@id": "dfc-f:Arachides";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Arachides";
        readonly "skos:notation": "Arachides";
    }, {
        readonly "@id": "dfc-f:Peanuts";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Peanuts";
        readonly "skos:notation": "Peanuts";
    }, {
        readonly "@id": "dfc-f:fishs";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fishs";
        readonly "skos:notation": "fishs";
    }, {
        readonly "@id": "dfc-f:Poissons";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Poissons";
        readonly "skos:notation": "Poissons";
    }, {
        readonly "@id": "dfc-f:dollarCanadien";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dollar canadien";
        readonly "skos:notation": "dollar_canadien";
    }, {
        readonly "@id": "dfc-f:canadianDollar";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "canadian dollar";
        readonly "skos:notation": "canadian_dollar";
    }, {
        readonly "@id": "dfc-f:dollarAustralien";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dollar australien";
        readonly "skos:notation": "dollar_australien";
    }, {
        readonly "@id": "dfc-f:australianDollar";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "australian dollar";
        readonly "skos:notation": "australian_dollar";
    }, {
        readonly "@id": "dfc-f:poundSterling";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pound sterling";
        readonly "skos:notation": "pound_sterling";
    }, {
        readonly "@id": "dfc-f:livreSterling";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "livre sterling";
        readonly "skos:notation": "livre_sterling";
    }, {
        readonly "@id": "dfc-f:USDollar";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "US Dollar";
        readonly "skos:notation": "US_Dollar";
    }, {
        readonly "@id": "dfc-f:DollarUS";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Dollar US";
        readonly "skos:notation": "Dollar_US";
    }];
};
export default _default;
