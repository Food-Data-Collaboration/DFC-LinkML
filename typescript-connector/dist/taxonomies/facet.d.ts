declare const _default: {
    readonly "@context": {
        readonly skos: "http://www.w3.org/2004/02/skos/core#";
        readonly "dfc-f": "http://w3id.org/dfc/taxonomies/v2.0.0/facets.rdf#";
        readonly "dfc-m": "http://w3id.org/dfc/taxonomies/v2.0.0/measures.rdf#";
        readonly "dfc-pt": "http://w3id.org/dfc/taxonomies/v2.0.0/productTypes.rdf#";
        readonly "dfc-v": "http://w3id.org/dfc/taxonomies/v2.0.0/vocabulary.rdf#";
    };
    readonly "@graph": readonly [{
        readonly "@id": "dfc-v:Facet";
        readonly "@type": readonly ["skos:ConceptScheme"];
        readonly "skos:prefLabel": "Facet";
        readonly "skos:hasTopConcept": readonly ["dfc-f:FairTradeMaxHaavelar", "dfc-f:DFCProductGlossaryFacet", "dfc-f:DFCProductGlossaryFacet", "dfc-f:EthicalLabel", "dfc-f:EthicalLabel", "dfc-f:EnglandSE", "dfc-f:Hampshire", "dfc-f:Kent", "dfc-f:IsleOfWight", "dfc-f:Berkshire", "dfc-f:Oxfordshire", "dfc-f:WestSussex", "dfc-f:Buckinghamshire", "dfc-f:Surrey", "dfc-f:EastSussex", "dfc-f:Angleterre", "dfc-f:England", "dfc-f:HighFibre", "dfc-f:HighFibre", "dfc-f:NutritionalClaim", "dfc-f:NutritionalClaim", "dfc-f:Funghi", "dfc-f:Champignon", "dfc-f:NatureOrigin", "dfc-f:NatureOrigin", "dfc-f:Miel", "dfc-f:Honey", "dfc-f:Abeille", "dfc-f:Bee", "dfc-f:IGPEU", "dfc-f:LocalLabel", "dfc-f:LocalLabel", "dfc-f:Wax", "dfc-f:BeeWax", "dfc-f:Pollen", "dfc-f:BeeVenom", "dfc-f:Venom", "dfc-f:Propolis", "dfc-f:AnimalPartOrigin", "dfc-f:AnimalPartOrigin", "dfc-f:MSC", "dfc-f:MSC", "dfc-f:BleuBlancCoeurFR", "dfc-f:FSC", "dfc-f:FSC", "dfc-f:LabelRougeFR", "dfc-f:RainforestAlliance", "dfc-f:MilkFed", "dfc-f:MilkFed", "dfc-f:HEV", "dfc-f:HEV", "dfc-f:Certification", "dfc-f:Portugal", "dfc-f:Europe", "dfc-f:HenBody", "dfc-f:HenBody", "dfc-f:Hen", "dfc-f:Poule", "dfc-f:IncreasedNutrient", "dfc-f:IncreasedNutrient", "dfc-f:SourceOfProtein", "dfc-f:SourceOfProtein", "dfc-f:HighOmega3FattyAcids", "dfc-f:RicheEnAcideGrasOmega3", "dfc-f:SourceOfFibre", "dfc-f:SourceOfFibre", "dfc-f:HighProtein", "dfc-f:HighProtein", "dfc-f:LowSodiumSalt", "dfc-f:LowSodiumSalt", "dfc-f:SaturatedFatFree", "dfc-f:SaturatedFatFree", "dfc-f:HighVitaminsMinerals", "dfc-f:HighVitaminsMinerals", "dfc-f:Light", "dfc-f:Light", "dfc-f:VeryLowSodiumSalt", "dfc-f:VeryLowSodiumSalt", "dfc-f:LowSaturatedFat", "dfc-f:LowSaturatedFat", "dfc-f:ReducedNutrient", "dfc-f:ReducedNutrient", "dfc-f:LowFat", "dfc-f:LowFat", "dfc-f:ContainsNutrientOrSubstance", "dfc-f:ContainsNutrientOrSubstance", "dfc-f:LowSugars", "dfc-f:LowSugars", "dfc-f:NoAddedSodiumSalt", "dfc-f:NoAddedSodiumSalt", "dfc-f:HighPolyunsaturatedFat", "dfc-f:HighPolyunsaturatedFat", "dfc-f:SourceOfVitaminsMinerals", "dfc-f:SourceOfVitaminsMinerals", "dfc-f:HighUnsaturatedFat", "dfc-f:HighUnsaturatedFat", "dfc-f:Natural", "dfc-f:SodiumOrSaltFree", "dfc-f:SodiumOrSaltFree", "dfc-f:LowEnergy", "dfc-f:SugarsFree", "dfc-f:NoAddedSugars", "dfc-f:NoAddedSugars", "dfc-f:HighMonounsaturatedFat", "dfc-f:HighMonounsaturatedFat", "dfc-f:EnergyFree", "dfc-f:EnergyFree", "dfc-f:FatFree", "dfc-f:FatFree", "dfc-f:SourceOfOmega3FattyAcids", "dfc-f:SourceDacideGrasOmega3", "dfc-f:LowEnergy", "dfc-f:LowEnergy", "dfc-f:EnergyReduced", "dfc-f:EnergyReduced", "dfc-f:NutritionAndHealthClaim", "dfc-f:NutritionAndHealthClaim", "dfc-f:GrandEst", "dfc-f:France", "dfc-f:Beef", "dfc-f:Bull", "dfc-f:BullsBody", "dfc-f:Beef", "dfc-f:Algae", "dfc-f:Algae", "dfc-f:UnknownNatureOrigin", "dfc-f:UnknownNatureOrigin", "dfc-f:MultiNatureOrigin", "dfc-f:MultiNatureOrigin", "dfc-f:Animal", "dfc-f:Water", "dfc-f:Water", "dfc-f:Plant", "dfc-f:Plante", "dfc-f:Mineral", "dfc-f:Mineral", "dfc-f:Bacteria", "dfc-f:Bacteria", "dfc-f:CentreValDeLoire", "dfc-f:NorthAmerica", "dfc-f:NorthAmerica", "dfc-f:GeographicOrigin", "dfc-f:TerritorialOrigin", "dfc-f:BiodynamicLabel", "dfc-f:BiodynamicLabel", "dfc-f:Demeter", "dfc-f:MultiTerritorialOrigin", "dfc-f:MultiTerritorialOrigin", "dfc-f:EnglandSW", "dfc-f:Cornwall", "dfc-f:Gloucestershire", "dfc-f:Dorset", "dfc-f:Somerset", "dfc-f:Wiltshire", "dfc-f:Devon", "dfc-f:Bristol", "dfc-f:Renfrewshire", "dfc-f:SouthWesternScotland", "dfc-f:Lancashire", "dfc-f:NorthWestEngland", "dfc-f:BourgogneFranche Comte", "dfc-f:Ewe", "dfc-f:Brebis", "dfc-f:Cochon", "dfc-f:Pig", "dfc-f:Mouton", "dfc-f:Sheep", "dfc-f:Quail", "dfc-f:Caille", "dfc-f:Vache", "dfc-f:Cow", "dfc-f:Chicken", "dfc-f:Poulet", "dfc-f:Rooster", "dfc-f:Coq", "dfc-f:Goat", "dfc-f:Chvre", "dfc-f:PartOfOrigin", "dfc-f:PartOfOrigin", "dfc-f:PigBody", "dfc-f:PigBody", "dfc-f:PlantPartOrigin", "dfc-f:PlantPartOrigin", "dfc-f:UnknownPartOrigin", "dfc-f:UnknownPartOrigin", "dfc-f:OtherClaim", "dfc-f:OtherClaim", "dfc-f:Vegetarian", "dfc-f:Vegetarian", "dfc-f:GlutenFree", "dfc-f:GlutenFree", "dfc-f:Vegan", "dfc-f:PaysansDeNatureFR", "dfc-f:OrganicLabel", "dfc-f:OrganicLabel", "dfc-f:EUOrganicFarming", "dfc-f:EUOrganicFarming", "dfc-f:NatureetProgres", "dfc-f:OrganicFarming", "dfc-f:BioCoherence", "dfc-f:Merseyside", "dfc-f:Cheshire", "dfc-f:Cumbria", "dfc-f:GreaterManchester", "dfc-f:Italie", "dfc-f:Italy", "dfc-f:Belgium", "dfc-f:Belgique", "dfc-f:Netherlands", "dfc-f:PaysBas", "dfc-f:Allemagne", "dfc-f:Germany", "dfc-f:Spain", "dfc-f:Espagne", "dfc-f:RepublicOfIreland", "dfc-f:RepublicOfIreland", "dfc-f:Switzerland", "dfc-f:Suisse", "dfc-f:UnitedKingdom", "dfc-f:UnitedKingdom", "dfc-f:AOCFR", "dfc-f:EastOfEngland", "dfc-f:Cambridgeshire", "dfc-f:Hertfordshire", "dfc-f:Norfolk", "dfc-f:Essex", "dfc-f:Suffolk", "dfc-f:Bedfordshire", "dfc-f:Northamptonshire", "dfc-f:EastMidlands", "dfc-f:DumfriesAndGalloway", "dfc-f:WestMidlands", "dfc-f:WestMidlandsConurbation", "dfc-f:Warwickshire", "dfc-f:Staffordshire", "dfc-f:Shropshire", "dfc-f:Herefordshire", "dfc-f:Worcestershire", "dfc-f:YorkshireAndTheHumber", "dfc-f:Lincolnshire", "dfc-f:SouthYorkshire", "dfc-f:NorthYorkshire", "dfc-f:WestYorkshire", "dfc-f:EastRidingOfYorkshire", "dfc-f:HealthClaim", "dfc-f:AllgationSant", "dfc-f:London", "dfc-f:NorthEastEngland", "dfc-f:LabelMarketing", "dfc-f:MarketingLabel", "dfc-f:LabelInconnu", "dfc-f:UnknownLabel", "dfc-f:Seed", "dfc-f:Graine", "dfc-f:Ocanie", "dfc-f:Oceania", "dfc-f:Afrique", "dfc-f:Africa", "dfc-f:AmriqueDuSud", "dfc-f:SouthAmerica", "dfc-f:Asie", "dfc-f:Asia", "dfc-f:OrigineTerritorialeInconnue", "dfc-f:UnknownTerritorialOrigin", "dfc-f:Wales", "dfc-f:PaysDeGalles", "dfc-f:SheepsBody", "dfc-f:PartieDeMouton", "dfc-f:NouvelleAquitaine", "dfc-f:TasteOfTheYear", "dfc-f:TasteOfTheYear", "dfc-f:HautsDeFrance", "dfc-f:NewZealand", "dfc-f:NewZealand", "dfc-f:Fleur", "dfc-f:Flower", "dfc-f:ProductOfTheYear", "dfc-f:ProductOfTheYear", "dfc-f:ContainerInformation", "dfc-f:GoatBody", "dfc-f:GoatBody", "dfc-f:SheepMilk", "dfc-f:GoatMilk", "dfc-f:PaysDeLaLoire", "dfc-f:Bulb", "dfc-f:Bulb", "dfc-f:ChickenBody", "dfc-f:ChickenBody", "dfc-f:NorthernIreland", "dfc-f:NorthernIreland", "dfc-f:EweBody", "dfc-f:EweBody", "dfc-f:SheepMilk", "dfc-f:HenEgg", "dfc-f:HenEgg", "dfc-f:Derbyshire", "dfc-f:TyneAndWear", "dfc-f:Dunbartonshire", "dfc-f:Leicestershire", "dfc-f:ProvenceAlpesCteAzur", "dfc-f:WholePlant", "dfc-f:WholePlant", "dfc-f:RoosterBody", "dfc-f:RoosterBody", "dfc-f:ScottishBorders", "dfc-f:EasternScotland", "dfc-f:Nottinghamshire", "dfc-f:Ayrshire", "dfc-f:CountyDurham", "dfc-f:Northumberland", "dfc-f:QuailsEgg", "dfc-f:ufDeCaille", "dfc-f:ProtectedGeographicalStatus", "dfc-f:ProtectedGeographicalStatus", "dfc-f:Normandy", "dfc-f:Normandie", "dfc-f:Bretagne", "dfc-f:Brittany", "dfc-f:Occitania", "dfc-f:Occitanie", "dfc-f:Corse", "dfc-f:Corsica", "dfc-f:IleDeFrance", "dfc-f:IleDeFrance", "dfc-f:AuvergneRhneAlpes", "dfc-f:Package", "dfc-f:Scotland", "dfc-f:Ecosse", "dfc-f:HighlandsAndIslands", "dfc-f:NorthEastScotland", "dfc-f:Aberdeenshire", "dfc-f:CowBody", "dfc-f:CowBody", "dfc-f:CowMilk", "dfc-f:CowMilk", "dfc-f:AOPEU", "dfc-f:Australie", "dfc-f:Australia", "dfc-f:Lanarkshire", "dfc-f:Leaf", "dfc-f:Leaf", "dfc-f:Lothian", "dfc-f:Fruit", "dfc-f:Rutland", "dfc-f:Stem", "dfc-f:Stem", "dfc-f:Root", "dfc-f:Root", "dfc-f:Edinburgh", "dfc-f:Tubercule", "dfc-f:Tuber"];
    }, {
        readonly "@id": "dfc-f:FairTradeMaxHaavelar";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Fairtrade Max Haavelar";
        readonly "skos:notation": "Fairtrade_Max_Haavelar";
    }, {
        readonly "@id": "dfc-f:DFCProductGlossaryFacet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Glossaire des facettes de produit";
        readonly "skos:notation": "Glossaire_des_facettes_de_produit";
    }, {
        readonly "@id": "dfc-f:DFCProductGlossaryFacet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Product glossary facets";
        readonly "skos:notation": "Product_glossary_facets";
    }, {
        readonly "@id": "dfc-f:EthicalLabel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Ethical label";
        readonly "skos:notation": "Ethical_label";
    }, {
        readonly "@id": "dfc-f:EthicalLabel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Label éthique";
        readonly "skos:notation": "Label_thique";
    }, {
        readonly "@id": "dfc-f:EnglandSE";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "South East England";
        readonly "skos:notation": "South_East_England";
    }, {
        readonly "@id": "dfc-f:Hampshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Hampshire";
        readonly "skos:notation": "Hampshire";
    }, {
        readonly "@id": "dfc-f:Kent";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Kent";
        readonly "skos:notation": "Kent";
    }, {
        readonly "@id": "dfc-f:IsleOfWight";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Isle of Wight";
        readonly "skos:notation": "Isle_of_Wight";
    }, {
        readonly "@id": "dfc-f:Berkshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Berkshire";
        readonly "skos:notation": "Berkshire";
    }, {
        readonly "@id": "dfc-f:Oxfordshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Oxfordshire";
        readonly "skos:notation": "Oxfordshire";
    }, {
        readonly "@id": "dfc-f:WestSussex";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "West Sussex";
        readonly "skos:notation": "West_Sussex";
    }, {
        readonly "@id": "dfc-f:Buckinghamshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Buckinghamshire";
        readonly "skos:notation": "Buckinghamshire";
    }, {
        readonly "@id": "dfc-f:Surrey";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Surrey";
        readonly "skos:notation": "Surrey";
    }, {
        readonly "@id": "dfc-f:EastSussex";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "East Sussex";
        readonly "skos:notation": "East_Sussex";
    }, {
        readonly "@id": "dfc-f:Angleterre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Angleterre";
        readonly "skos:notation": "Angleterre";
    }, {
        readonly "@id": "dfc-f:England";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "England";
        readonly "skos:notation": "England";
    }, {
        readonly "@id": "dfc-f:HighFibre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Riche en fibres";
        readonly "skos:notation": "Riche_en_fibres";
    }, {
        readonly "@id": "dfc-f:HighFibre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "High fibre";
        readonly "skos:notation": "High_fibre";
    }, {
        readonly "@id": "dfc-f:NutritionalClaim";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Allégation nutritionnelle";
        readonly "skos:notation": "Allgation_nutritionnelle";
    }, {
        readonly "@id": "dfc-f:NutritionalClaim";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Nutritional claim";
        readonly "skos:notation": "Nutritional_claim";
    }, {
        readonly "@id": "dfc-f:Funghi";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Funghi";
        readonly "skos:notation": "Funghi";
    }, {
        readonly "@id": "dfc-f:Champignon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Champignon";
        readonly "skos:notation": "Champignon";
    }, {
        readonly "@id": "dfc-f:NatureOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Source naturelle d'origine";
        readonly "skos:notation": "Source_naturelle_dorigine";
    }, {
        readonly "@id": "dfc-f:NatureOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Natural origin";
        readonly "skos:notation": "Natural_origin";
    }, {
        readonly "@id": "dfc-f:Miel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Miel";
        readonly "skos:notation": "Miel";
    }, {
        readonly "@id": "dfc-f:Honey";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Honey";
        readonly "skos:notation": "Honey";
    }, {
        readonly "@id": "dfc-f:Abeille";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Abeille";
        readonly "skos:notation": "Abeille";
    }, {
        readonly "@id": "dfc-f:Bee";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Bee";
        readonly "skos:notation": "Bee";
    }, {
        readonly "@id": "dfc-f:IGPEU";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Indication géographique de provenance";
        readonly "skos:notation": "Indication_gographique_de_provenance";
    }, {
        readonly "@id": "dfc-f:LocalLabel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Local label";
        readonly "skos:notation": "Local_label";
    }, {
        readonly "@id": "dfc-f:LocalLabel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Label local";
        readonly "skos:notation": "Label_local";
    }, {
        readonly "@id": "dfc-f:Wax";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Wax";
        readonly "skos:notation": "Wax";
    }, {
        readonly "@id": "dfc-f:BeeWax";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cire d'abeille";
        readonly "skos:notation": "Cire_dabeille";
    }, {
        readonly "@id": "dfc-f:Pollen";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Pollen";
        readonly "skos:notation": "Pollen";
    }, {
        readonly "@id": "dfc-f:BeeVenom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Venim d'abeille";
        readonly "skos:notation": "Venim_dabeille";
    }, {
        readonly "@id": "dfc-f:Venom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Venom";
        readonly "skos:notation": "Venom";
    }, {
        readonly "@id": "dfc-f:Propolis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Propolis";
        readonly "skos:notation": "Propolis";
    }, {
        readonly "@id": "dfc-f:AnimalPartOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Part or product of animal";
        readonly "skos:notation": "Part_or_product_of_animal";
    }, {
        readonly "@id": "dfc-f:AnimalPartOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Partie ou produit d'un animal";
        readonly "skos:notation": "Partie_ou_produit_dun_animal";
    }, {
        readonly "@id": "dfc-f:MSC";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Marine Stewardship Council";
        readonly "skos:notation": "Marine_Stewardship_Council";
    }, {
        readonly "@id": "dfc-f:MSC";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Pêche durable MSC";
        readonly "skos:notation": "Pche_durable_MSC";
    }, {
        readonly "@id": "dfc-f:BleuBlancCoeurFR";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Bleu-Blanc-Coeur";
        readonly "skos:notation": "Bleu_Blanc_Coeur";
    }, {
        readonly "@id": "dfc-f:FSC";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Forêt durable FSC";
        readonly "skos:notation": "Fort_durable_FSC";
    }, {
        readonly "@id": "dfc-f:FSC";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Forest Stewardship Council";
        readonly "skos:notation": "Forest_Stewardship_Council";
    }, {
        readonly "@id": "dfc-f:LabelRougeFR";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Label Rouge";
        readonly "skos:notation": "Label_Rouge";
    }, {
        readonly "@id": "dfc-f:RainforestAlliance";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Rainforest Alliance";
        readonly "skos:notation": "Rainforest_Alliance";
    }, {
        readonly "@id": "dfc-f:MilkFed";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Milk-fed";
        readonly "skos:notation": "Milk_fed";
    }, {
        readonly "@id": "dfc-f:MilkFed";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Nourri au lait";
        readonly "skos:notation": "Nourri_au_lait";
    }, {
        readonly "@id": "dfc-f:HEV";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "High Environnemental Value";
        readonly "skos:notation": "High_Environnemental_Value";
    }, {
        readonly "@id": "dfc-f:HEV";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Haute Valeur Environnementale";
        readonly "skos:notation": "Haute_Valeur_Environnementale";
    }, {
        readonly "@id": "dfc-f:Certification";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Certification";
        readonly "skos:notation": "Certification";
    }, {
        readonly "@id": "dfc-f:Portugal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Portugal";
        readonly "skos:notation": "Portugal";
    }, {
        readonly "@id": "dfc-f:Europe";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Europe";
        readonly "skos:notation": "Europe";
    }, {
        readonly "@id": "dfc-f:HenBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Hen's body";
        readonly "skos:notation": "Hens_body";
    }, {
        readonly "@id": "dfc-f:HenBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Partie de poule";
        readonly "skos:notation": "Partie_de_poule";
    }, {
        readonly "@id": "dfc-f:Hen";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Hen";
        readonly "skos:notation": "Hen";
    }, {
        readonly "@id": "dfc-f:Poule";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Poule";
        readonly "skos:notation": "Poule";
    }, {
        readonly "@id": "dfc-f:IncreasedNutrient";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Enrichi en nutriment";
        readonly "skos:notation": "Enrichi_en_nutriment";
    }, {
        readonly "@id": "dfc-f:IncreasedNutrient";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Increased nutrient";
        readonly "skos:notation": "Increased_nutrient";
    }, {
        readonly "@id": "dfc-f:SourceOfProtein";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Source of protein";
        readonly "skos:notation": "Source_of_protein";
    }, {
        readonly "@id": "dfc-f:SourceOfProtein";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Source de protéine";
        readonly "skos:notation": "Source_de_protine";
    }, {
        readonly "@id": "dfc-f:HighOmega3FattyAcids";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "High omega-3 fatty acids";
        readonly "skos:notation": "High_omega_3_fatty_acids";
    }, {
        readonly "@id": "dfc-f:RicheEnAcideGrasOmega3";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Riche en acide gras Oméga-3";
        readonly "skos:notation": "Riche_en_acide_gras_Omga_3";
    }, {
        readonly "@id": "dfc-f:SourceOfFibre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Source de fibres";
        readonly "skos:notation": "Source_de_fibres";
    }, {
        readonly "@id": "dfc-f:SourceOfFibre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Source of fibre";
        readonly "skos:notation": "Source_of_fibre";
    }, {
        readonly "@id": "dfc-f:HighProtein";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "High protein";
        readonly "skos:notation": "High_protein";
    }, {
        readonly "@id": "dfc-f:HighProtein";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Riche en protéines";
        readonly "skos:notation": "Riche_en_protines";
    }, {
        readonly "@id": "dfc-f:LowSodiumSalt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Low sodium/salt";
        readonly "skos:notation": "Low_sodiumsalt";
    }, {
        readonly "@id": "dfc-f:LowSodiumSalt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Pauvre en sodium/sel";
        readonly "skos:notation": "Pauvre_en_sodiumsel";
    }, {
        readonly "@id": "dfc-f:SaturatedFatFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Saturated fat-free";
        readonly "skos:notation": "Saturated_fat_free";
    }, {
        readonly "@id": "dfc-f:SaturatedFatFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sans graisses saturées";
        readonly "skos:notation": "Sans_graisses_satures";
    }, {
        readonly "@id": "dfc-f:HighVitaminsMinerals";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "High vitamins and/or minerals";
        readonly "skos:notation": "High_vitamins_andor_minerals";
    }, {
        readonly "@id": "dfc-f:HighVitaminsMinerals";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Riche en vitamines et/ou de minéraux";
        readonly "skos:notation": "Riche_en_vitamines_etou_de_minraux";
    }, {
        readonly "@id": "dfc-f:Light";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Allégé/Light";
        readonly "skos:notation": "AllgLight";
    }, {
        readonly "@id": "dfc-f:Light";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Light/Lite";
        readonly "skos:notation": "LightLite";
    }, {
        readonly "@id": "dfc-f:VeryLowSodiumSalt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Très pauvre en sodium/sel";
        readonly "skos:notation": "Trs_pauvre_en_sodiumsel";
    }, {
        readonly "@id": "dfc-f:VeryLowSodiumSalt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Very low sodium/salt";
        readonly "skos:notation": "Very_low_sodiumsalt";
    }, {
        readonly "@id": "dfc-f:LowSaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Low saturated fat";
        readonly "skos:notation": "Low_saturated_fat";
    }, {
        readonly "@id": "dfc-f:LowSaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Faible teneur en graisses saturées";
        readonly "skos:notation": "Faible_teneur_en_graisses_satures";
    }, {
        readonly "@id": "dfc-f:ReducedNutrient";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Reduced nutrient";
        readonly "skos:notation": "Reduced_nutrient";
    }, {
        readonly "@id": "dfc-f:ReducedNutrient";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Réduit en nutriment";
        readonly "skos:notation": "Rduit_en_nutriment";
    }, {
        readonly "@id": "dfc-f:LowFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Faible teneur en matière grasse";
        readonly "skos:notation": "Faible_teneur_en_matire_grasse";
    }, {
        readonly "@id": "dfc-f:LowFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Low fat";
        readonly "skos:notation": "Low_fat";
    }, {
        readonly "@id": "dfc-f:ContainsNutrientOrSubstance";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Contains nutrient or other substance";
        readonly "skos:notation": "Contains_nutrient_or_other_substance";
    }, {
        readonly "@id": "dfc-f:ContainsNutrientOrSubstance";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Contient nutriment ou autre substance";
        readonly "skos:notation": "Contient_nutriment_ou_autre_substance";
    }, {
        readonly "@id": "dfc-f:LowSugars";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Faible teneur en sucres";
        readonly "skos:notation": "Faible_teneur_en_sucres";
    }, {
        readonly "@id": "dfc-f:LowSugars";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Low sugars";
        readonly "skos:notation": "Low_sugars";
    }, {
        readonly "@id": "dfc-f:NoAddedSodiumSalt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sans sodium/sel ajouté";
        readonly "skos:notation": "Sans_sodiumsel_ajout";
    }, {
        readonly "@id": "dfc-f:NoAddedSodiumSalt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "No added sodium/salt";
        readonly "skos:notation": "No_added_sodiumsalt";
    }, {
        readonly "@id": "dfc-f:HighPolyunsaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Riche en graisses polyinsaturées";
        readonly "skos:notation": "Riche_en_graisses_polyinsatures";
    }, {
        readonly "@id": "dfc-f:HighPolyunsaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "High polyunsaturated fat";
        readonly "skos:notation": "High_polyunsaturated_fat";
    }, {
        readonly "@id": "dfc-f:SourceOfVitaminsMinerals";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Source of vitamins and/or minerals";
        readonly "skos:notation": "Source_of_vitamins_andor_minerals";
    }, {
        readonly "@id": "dfc-f:SourceOfVitaminsMinerals";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Source de vitamines et/ou de minéraux";
        readonly "skos:notation": "Source_de_vitamines_etou_de_minraux";
    }, {
        readonly "@id": "dfc-f:HighUnsaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Riche en graisses insaturées";
        readonly "skos:notation": "Riche_en_graisses_insatures";
    }, {
        readonly "@id": "dfc-f:HighUnsaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "High unsaturated fat";
        readonly "skos:notation": "High_unsaturated_fat";
    }, {
        readonly "@id": "dfc-f:Natural";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Naturally/Natural";
        readonly "skos:notation": "NaturallyNatural";
    }, {
        readonly "@id": "dfc-f:SodiumOrSaltFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sodium-free or salt-free";
        readonly "skos:notation": "Sodium_free_or_salt_free";
    }, {
        readonly "@id": "dfc-f:SodiumOrSaltFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sans sodium ou sans sel";
        readonly "skos:notation": "Sans_sodium_ou_sans_sel";
    }, {
        readonly "@id": "dfc-f:LowEnergy";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Low/Light";
        readonly "skos:notation": "LowLight";
    }, {
        readonly "@id": "dfc-f:SugarsFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sugars-free";
        readonly "skos:notation": "Sugars_free";
    }, {
        readonly "@id": "dfc-f:NoAddedSugars";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "With no added sugars";
        readonly "skos:notation": "With_no_added_sugars";
    }, {
        readonly "@id": "dfc-f:NoAddedSugars";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sans sucres ajoutés";
        readonly "skos:notation": "Sans_sucres_ajouts";
    }, {
        readonly "@id": "dfc-f:HighMonounsaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Riche en graisses monoinsaturées";
        readonly "skos:notation": "Riche_en_graisses_monoinsatures";
    }, {
        readonly "@id": "dfc-f:HighMonounsaturatedFat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "High monounsaturated fat";
        readonly "skos:notation": "High_monounsaturated_fat";
    }, {
        readonly "@id": "dfc-f:EnergyFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sans apport énergétique";
        readonly "skos:notation": "Sans_apport_nergtique";
    }, {
        readonly "@id": "dfc-f:EnergyFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Energy free";
        readonly "skos:notation": "Energy_free";
    }, {
        readonly "@id": "dfc-f:FatFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sans matières grasses";
        readonly "skos:notation": "Sans_matires_grasses";
    }, {
        readonly "@id": "dfc-f:FatFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Fat-free";
        readonly "skos:notation": "Fat_free";
    }, {
        readonly "@id": "dfc-f:SourceOfOmega3FattyAcids";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Source of omega-3 fatty acids";
        readonly "skos:notation": "Source_of_omega_3_fatty_acids";
    }, {
        readonly "@id": "dfc-f:SourceDacideGrasOmega3";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Source d'acide gras Oméga-3";
        readonly "skos:notation": "Source_dacide_gras_Omga_3";
    }, {
        readonly "@id": "dfc-f:LowEnergy";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Faible valeur énergétique";
        readonly "skos:notation": "Faible_valeur_nergtique";
    }, {
        readonly "@id": "dfc-f:LowEnergy";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Low energy";
        readonly "skos:notation": "Low_energy";
    }, {
        readonly "@id": "dfc-f:EnergyReduced";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Valeur énergétique réduite";
        readonly "skos:notation": "Valeur_nergtique_rduite";
    }, {
        readonly "@id": "dfc-f:EnergyReduced";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Energy reduced";
        readonly "skos:notation": "Energy_reduced";
    }, {
        readonly "@id": "dfc-f:NutritionAndHealthClaim";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Allégations nutritionnelles et de santé";
        readonly "skos:notation": "Allgations_nutritionnelles_et_de_sant";
    }, {
        readonly "@id": "dfc-f:NutritionAndHealthClaim";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Nutrition and health claims";
        readonly "skos:notation": "Nutrition_and_health_claims";
    }, {
        readonly "@id": "dfc-f:GrandEst";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Grand Est";
        readonly "skos:notation": "Grand_Est";
    }, {
        readonly "@id": "dfc-f:France";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "France";
        readonly "skos:notation": "France";
    }, {
        readonly "@id": "dfc-f:Beef";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Bœuf";
        readonly "skos:notation": "Buf";
    }, {
        readonly "@id": "dfc-f:Bull";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Bull";
        readonly "skos:notation": "Bull";
    }, {
        readonly "@id": "dfc-f:BullsBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Bull's body";
        readonly "skos:notation": "Bulls_body";
    }, {
        readonly "@id": "dfc-f:Beef";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Partie du boeuf";
        readonly "skos:notation": "Partie_du_boeuf";
    }, {
        readonly "@id": "dfc-f:Algae";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Algue";
        readonly "skos:notation": "Algue";
    }, {
        readonly "@id": "dfc-f:Algae";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Algae";
        readonly "skos:notation": "Algae";
    }, {
        readonly "@id": "dfc-f:UnknownNatureOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Unknown nature origin";
        readonly "skos:notation": "Unknown_nature_origin";
    }, {
        readonly "@id": "dfc-f:UnknownNatureOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Source d'origine inconnue";
        readonly "skos:notation": "Source_dorigine_inconnue";
    }, {
        readonly "@id": "dfc-f:MultiNatureOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Origine multiple";
        readonly "skos:notation": "Origine_multiple";
    }, {
        readonly "@id": "dfc-f:MultiNatureOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Multiorigin";
        readonly "skos:notation": "Multiorigin";
    }, {
        readonly "@id": "dfc-f:Animal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Animal";
        readonly "skos:notation": "Animal";
    }, {
        readonly "@id": "dfc-f:Water";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Eau";
        readonly "skos:notation": "Eau";
    }, {
        readonly "@id": "dfc-f:Water";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Water";
        readonly "skos:notation": "Water";
    }, {
        readonly "@id": "dfc-f:Plant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Plant";
        readonly "skos:notation": "Plant";
    }, {
        readonly "@id": "dfc-f:Plante";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Plante";
        readonly "skos:notation": "Plante";
    }, {
        readonly "@id": "dfc-f:Mineral";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Mineral";
        readonly "skos:notation": "Mineral";
    }, {
        readonly "@id": "dfc-f:Mineral";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Minéral";
        readonly "skos:notation": "Minral";
    }, {
        readonly "@id": "dfc-f:Bacteria";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Bacteria";
        readonly "skos:notation": "Bacteria";
    }, {
        readonly "@id": "dfc-f:Bacteria";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Bactérie";
        readonly "skos:notation": "Bactrie";
    }, {
        readonly "@id": "dfc-f:CentreValDeLoire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Centre-Val de Loire";
        readonly "skos:notation": "Centre_Val_de_Loire";
    }, {
        readonly "@id": "dfc-f:NorthAmerica";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "North America";
        readonly "skos:notation": "North_America";
    }, {
        readonly "@id": "dfc-f:NorthAmerica";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Amérique du Nord";
        readonly "skos:notation": "Amrique_du_Nord";
    }, {
        readonly "@id": "dfc-f:GeographicOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Origine géographique";
        readonly "skos:notation": "Origine_gographique";
    }, {
        readonly "@id": "dfc-f:TerritorialOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Territorial origin";
        readonly "skos:notation": "Territorial_origin";
    }, {
        readonly "@id": "dfc-f:BiodynamicLabel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Label biodynamie";
        readonly "skos:notation": "Label_biodynamie";
    }, {
        readonly "@id": "dfc-f:BiodynamicLabel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Biodynamic label";
        readonly "skos:notation": "Biodynamic_label";
    }, {
        readonly "@id": "dfc-f:Demeter";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Demeter";
        readonly "skos:notation": "Demeter";
    }, {
        readonly "@id": "dfc-f:MultiTerritorialOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Origine territorial multiple";
        readonly "skos:notation": "Origine_territorial_multiple";
    }, {
        readonly "@id": "dfc-f:MultiTerritorialOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Multi-territorial origin";
        readonly "skos:notation": "Multi_territorial_origin";
    }, {
        readonly "@id": "dfc-f:EnglandSW";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "South West England";
        readonly "skos:notation": "South_West_England";
    }, {
        readonly "@id": "dfc-f:Cornwall";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cornwall";
        readonly "skos:notation": "Cornwall";
    }, {
        readonly "@id": "dfc-f:Gloucestershire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Gloucestershire";
        readonly "skos:notation": "Gloucestershire";
    }, {
        readonly "@id": "dfc-f:Dorset";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Dorset";
        readonly "skos:notation": "Dorset";
    }, {
        readonly "@id": "dfc-f:Somerset";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Somerset";
        readonly "skos:notation": "Somerset";
    }, {
        readonly "@id": "dfc-f:Wiltshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Wiltshire";
        readonly "skos:notation": "Wiltshire";
    }, {
        readonly "@id": "dfc-f:Devon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Devon";
        readonly "skos:notation": "Devon";
    }, {
        readonly "@id": "dfc-f:Bristol";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Bristol";
        readonly "skos:notation": "Bristol";
    }, {
        readonly "@id": "dfc-f:Renfrewshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Renfrewshire";
        readonly "skos:notation": "Renfrewshire";
    }, {
        readonly "@id": "dfc-f:SouthWesternScotland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "South Western Scotland";
        readonly "skos:notation": "South_Western_Scotland";
    }, {
        readonly "@id": "dfc-f:Lancashire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Lancashire";
        readonly "skos:notation": "Lancashire";
    }, {
        readonly "@id": "dfc-f:NorthWestEngland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "North West England";
        readonly "skos:notation": "North_West_England";
    }, {
        readonly "@id": "dfc-f:BourgogneFranche Comte";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Bourgogne-Franche-Comté";
        readonly "skos:notation": "Bourgogne_Franche_Comt";
    }, {
        readonly "@id": "dfc-f:Ewe";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Ewe";
        readonly "skos:notation": "Ewe";
    }, {
        readonly "@id": "dfc-f:Brebis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Brebis";
        readonly "skos:notation": "Brebis";
    }, {
        readonly "@id": "dfc-f:Cochon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cochon";
        readonly "skos:notation": "Cochon";
    }, {
        readonly "@id": "dfc-f:Pig";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Pig";
        readonly "skos:notation": "Pig";
    }, {
        readonly "@id": "dfc-f:Mouton";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Mouton";
        readonly "skos:notation": "Mouton";
    }, {
        readonly "@id": "dfc-f:Sheep";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sheep";
        readonly "skos:notation": "Sheep";
    }, {
        readonly "@id": "dfc-f:Quail";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Quail";
        readonly "skos:notation": "Quail";
    }, {
        readonly "@id": "dfc-f:Caille";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Caille";
        readonly "skos:notation": "Caille";
    }, {
        readonly "@id": "dfc-f:Vache";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vache";
        readonly "skos:notation": "Vache";
    }, {
        readonly "@id": "dfc-f:Cow";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cow";
        readonly "skos:notation": "Cow";
    }, {
        readonly "@id": "dfc-f:Chicken";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Chicken";
        readonly "skos:notation": "Chicken";
    }, {
        readonly "@id": "dfc-f:Poulet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Poulet";
        readonly "skos:notation": "Poulet";
    }, {
        readonly "@id": "dfc-f:Rooster";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Rooster";
        readonly "skos:notation": "Rooster";
    }, {
        readonly "@id": "dfc-f:Coq";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Coq";
        readonly "skos:notation": "Coq";
    }, {
        readonly "@id": "dfc-f:Goat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Goat";
        readonly "skos:notation": "Goat";
    }, {
        readonly "@id": "dfc-f:Chvre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Chèvre";
        readonly "skos:notation": "Chvre";
    }, {
        readonly "@id": "dfc-f:PartOfOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Partie d'origine";
        readonly "skos:notation": "Partie_dorigine";
    }, {
        readonly "@id": "dfc-f:PartOfOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Part of origin";
        readonly "skos:notation": "Part_of_origin";
    }, {
        readonly "@id": "dfc-f:PigBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Pig's body";
        readonly "skos:notation": "Pigs_body";
    }, {
        readonly "@id": "dfc-f:PigBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Partie du cochon";
        readonly "skos:notation": "Partie_du_cochon";
    }, {
        readonly "@id": "dfc-f:PlantPartOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Partie ou produit d'une plante";
        readonly "skos:notation": "Partie_ou_produit_dune_plante";
    }, {
        readonly "@id": "dfc-f:PlantPartOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Part or product of plant";
        readonly "skos:notation": "Part_or_product_of_plant";
    }, {
        readonly "@id": "dfc-f:UnknownPartOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Unknown part origin";
        readonly "skos:notation": "Unknown_part_origin";
    }, {
        readonly "@id": "dfc-f:UnknownPartOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Partie d'origine inconnue";
        readonly "skos:notation": "Partie_dorigine_inconnue";
    }, {
        readonly "@id": "dfc-f:OtherClaim";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Other claim";
        readonly "skos:notation": "Other_claim";
    }, {
        readonly "@id": "dfc-f:OtherClaim";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Autre allégation";
        readonly "skos:notation": "Autre_allgation";
    }, {
        readonly "@id": "dfc-f:Vegetarian";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vegetarian";
        readonly "skos:notation": "Vegetarian";
    }, {
        readonly "@id": "dfc-f:Vegetarian";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Végétarien";
        readonly "skos:notation": "Vgtarien";
    }, {
        readonly "@id": "dfc-f:GlutenFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sans gluten";
        readonly "skos:notation": "Sans_gluten";
    }, {
        readonly "@id": "dfc-f:GlutenFree";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Gluten free";
        readonly "skos:notation": "Gluten_free";
    }, {
        readonly "@id": "dfc-f:Vegan";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Vegan";
        readonly "skos:notation": "Vegan";
    }, {
        readonly "@id": "dfc-f:PaysansDeNatureFR";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Paysans de Nature";
        readonly "skos:notation": "Paysans_de_Nature";
    }, {
        readonly "@id": "dfc-f:OrganicLabel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Organic label";
        readonly "skos:notation": "Organic_label";
    }, {
        readonly "@id": "dfc-f:OrganicLabel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Label biologique";
        readonly "skos:notation": "Label_biologique";
    }, {
        readonly "@id": "dfc-f:EUOrganicFarming";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Agriculture Biologique EU";
        readonly "skos:notation": "Agriculture_Biologique_EU";
    }, {
        readonly "@id": "dfc-f:EUOrganicFarming";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "EU Organic Farming";
        readonly "skos:notation": "EU_Organic_Farming";
    }, {
        readonly "@id": "dfc-f:NatureetProgres";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Nature et progrès";
        readonly "skos:notation": "Nature_et_progrs";
    }, {
        readonly "@id": "dfc-f:OrganicFarming";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Agriculture Biologique";
        readonly "skos:notation": "Agriculture_Biologique";
    }, {
        readonly "@id": "dfc-f:BioCoherence";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Bio Coherence";
        readonly "skos:notation": "Bio_Coherence";
    }, {
        readonly "@id": "dfc-f:Merseyside";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Merseyside";
        readonly "skos:notation": "Merseyside";
    }, {
        readonly "@id": "dfc-f:Cheshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cheshire";
        readonly "skos:notation": "Cheshire";
    }, {
        readonly "@id": "dfc-f:Cumbria";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cumbria";
        readonly "skos:notation": "Cumbria";
    }, {
        readonly "@id": "dfc-f:GreaterManchester";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Greater Manchester";
        readonly "skos:notation": "Greater_Manchester";
    }, {
        readonly "@id": "dfc-f:Italie";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Italie";
        readonly "skos:notation": "Italie";
    }, {
        readonly "@id": "dfc-f:Italy";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Italy";
        readonly "skos:notation": "Italy";
    }, {
        readonly "@id": "dfc-f:Belgium";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Belgium";
        readonly "skos:notation": "Belgium";
    }, {
        readonly "@id": "dfc-f:Belgique";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Belgique";
        readonly "skos:notation": "Belgique";
    }, {
        readonly "@id": "dfc-f:Netherlands";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Netherlands";
        readonly "skos:notation": "Netherlands";
    }, {
        readonly "@id": "dfc-f:PaysBas";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Pays bas";
        readonly "skos:notation": "Pays_bas";
    }, {
        readonly "@id": "dfc-f:Allemagne";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Allemagne";
        readonly "skos:notation": "Allemagne";
    }, {
        readonly "@id": "dfc-f:Germany";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Germany";
        readonly "skos:notation": "Germany";
    }, {
        readonly "@id": "dfc-f:Spain";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Spain";
        readonly "skos:notation": "Spain";
    }, {
        readonly "@id": "dfc-f:Espagne";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Espagne";
        readonly "skos:notation": "Espagne";
    }, {
        readonly "@id": "dfc-f:RepublicOfIreland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "République d'Irlande";
        readonly "skos:notation": "Rpublique_dIrlande";
    }, {
        readonly "@id": "dfc-f:RepublicOfIreland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Republic of Ireland";
        readonly "skos:notation": "Republic_of_Ireland";
    }, {
        readonly "@id": "dfc-f:Switzerland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Switzerland";
        readonly "skos:notation": "Switzerland";
    }, {
        readonly "@id": "dfc-f:Suisse";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Suisse";
        readonly "skos:notation": "Suisse";
    }, {
        readonly "@id": "dfc-f:UnitedKingdom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Royaume Uni";
        readonly "skos:notation": "Royaume_Uni";
    }, {
        readonly "@id": "dfc-f:UnitedKingdom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "United Kingdom";
        readonly "skos:notation": "United_Kingdom";
    }, {
        readonly "@id": "dfc-f:AOCFR";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Appellation d’origine contrôlée";
        readonly "skos:notation": "Appellation_dorigine_contrle";
    }, {
        readonly "@id": "dfc-f:EastOfEngland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "East of England";
        readonly "skos:notation": "East_of_England";
    }, {
        readonly "@id": "dfc-f:Cambridgeshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cambridgeshire";
        readonly "skos:notation": "Cambridgeshire";
    }, {
        readonly "@id": "dfc-f:Hertfordshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Hertfordshire";
        readonly "skos:notation": "Hertfordshire";
    }, {
        readonly "@id": "dfc-f:Norfolk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Norfolk";
        readonly "skos:notation": "Norfolk";
    }, {
        readonly "@id": "dfc-f:Essex";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Essex";
        readonly "skos:notation": "Essex";
    }, {
        readonly "@id": "dfc-f:Suffolk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Suffolk";
        readonly "skos:notation": "Suffolk";
    }, {
        readonly "@id": "dfc-f:Bedfordshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Bedfordshire";
        readonly "skos:notation": "Bedfordshire";
    }, {
        readonly "@id": "dfc-f:Northamptonshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Northamptonshire";
        readonly "skos:notation": "Northamptonshire";
    }, {
        readonly "@id": "dfc-f:EastMidlands";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "East Midlands";
        readonly "skos:notation": "East_Midlands";
    }, {
        readonly "@id": "dfc-f:DumfriesAndGalloway";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Dumfries and Galloway";
        readonly "skos:notation": "Dumfries_and_Galloway";
    }, {
        readonly "@id": "dfc-f:WestMidlands";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "West Midlands";
        readonly "skos:notation": "West_Midlands";
    }, {
        readonly "@id": "dfc-f:WestMidlandsConurbation";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "West Midlands Conurbation";
        readonly "skos:notation": "West_Midlands_Conurbation";
    }, {
        readonly "@id": "dfc-f:Warwickshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Warwickshire";
        readonly "skos:notation": "Warwickshire";
    }, {
        readonly "@id": "dfc-f:Staffordshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Staffordshire";
        readonly "skos:notation": "Staffordshire";
    }, {
        readonly "@id": "dfc-f:Shropshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Shropshire";
        readonly "skos:notation": "Shropshire";
    }, {
        readonly "@id": "dfc-f:Herefordshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Herefordshire";
        readonly "skos:notation": "Herefordshire";
    }, {
        readonly "@id": "dfc-f:Worcestershire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Worcestershire";
        readonly "skos:notation": "Worcestershire";
    }, {
        readonly "@id": "dfc-f:YorkshireAndTheHumber";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Yorkshire and The Humber";
        readonly "skos:notation": "Yorkshire_and_The_Humber";
    }, {
        readonly "@id": "dfc-f:Lincolnshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Lincolnshire";
        readonly "skos:notation": "Lincolnshire";
    }, {
        readonly "@id": "dfc-f:SouthYorkshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "South Yorkshire";
        readonly "skos:notation": "South_Yorkshire";
    }, {
        readonly "@id": "dfc-f:NorthYorkshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "North Yorkshire";
        readonly "skos:notation": "North_Yorkshire";
    }, {
        readonly "@id": "dfc-f:WestYorkshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "West Yorkshire";
        readonly "skos:notation": "West_Yorkshire";
    }, {
        readonly "@id": "dfc-f:EastRidingOfYorkshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "East Riding of Yorkshire";
        readonly "skos:notation": "East_Riding_of_Yorkshire";
    }, {
        readonly "@id": "dfc-f:HealthClaim";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Health claim";
        readonly "skos:notation": "Health_claim";
    }, {
        readonly "@id": "dfc-f:AllgationSant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Allégation santé";
        readonly "skos:notation": "Allgation_sant";
    }, {
        readonly "@id": "dfc-f:London";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "London";
        readonly "skos:notation": "London";
    }, {
        readonly "@id": "dfc-f:NorthEastEngland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "North East England";
        readonly "skos:notation": "North_East_England";
    }, {
        readonly "@id": "dfc-f:LabelMarketing";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Label marketing";
        readonly "skos:notation": "Label_marketing";
    }, {
        readonly "@id": "dfc-f:MarketingLabel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Marketing label";
        readonly "skos:notation": "Marketing_label";
    }, {
        readonly "@id": "dfc-f:LabelInconnu";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Label inconnu";
        readonly "skos:notation": "Label_inconnu";
    }, {
        readonly "@id": "dfc-f:UnknownLabel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Unknown label";
        readonly "skos:notation": "Unknown_label";
    }, {
        readonly "@id": "dfc-f:Seed";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Seed";
        readonly "skos:notation": "Seed";
    }, {
        readonly "@id": "dfc-f:Graine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Graine";
        readonly "skos:notation": "Graine";
    }, {
        readonly "@id": "dfc-f:Ocanie";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Océanie";
        readonly "skos:notation": "Ocanie";
    }, {
        readonly "@id": "dfc-f:Oceania";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Oceania";
        readonly "skos:notation": "Oceania";
    }, {
        readonly "@id": "dfc-f:Afrique";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Afrique";
        readonly "skos:notation": "Afrique";
    }, {
        readonly "@id": "dfc-f:Africa";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Africa";
        readonly "skos:notation": "Africa";
    }, {
        readonly "@id": "dfc-f:AmriqueDuSud";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Amérique du Sud";
        readonly "skos:notation": "Amrique_du_Sud";
    }, {
        readonly "@id": "dfc-f:SouthAmerica";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "South America";
        readonly "skos:notation": "South_America";
    }, {
        readonly "@id": "dfc-f:Asie";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Asie";
        readonly "skos:notation": "Asie";
    }, {
        readonly "@id": "dfc-f:Asia";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Asia";
        readonly "skos:notation": "Asia";
    }, {
        readonly "@id": "dfc-f:OrigineTerritorialeInconnue";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Origine territoriale inconnue";
        readonly "skos:notation": "Origine_territoriale_inconnue";
    }, {
        readonly "@id": "dfc-f:UnknownTerritorialOrigin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Unknown territorial origin";
        readonly "skos:notation": "Unknown_territorial_origin";
    }, {
        readonly "@id": "dfc-f:Wales";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Wales";
        readonly "skos:notation": "Wales";
    }, {
        readonly "@id": "dfc-f:PaysDeGalles";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Pays de Galles";
        readonly "skos:notation": "Pays_de_Galles";
    }, {
        readonly "@id": "dfc-f:SheepsBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sheep's body";
        readonly "skos:notation": "Sheeps_body";
    }, {
        readonly "@id": "dfc-f:PartieDeMouton";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Partie de mouton";
        readonly "skos:notation": "Partie_de_mouton";
    }, {
        readonly "@id": "dfc-f:NouvelleAquitaine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Nouvelle-Aquitaine";
        readonly "skos:notation": "Nouvelle_Aquitaine";
    }, {
        readonly "@id": "dfc-f:TasteOfTheYear";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Reconnu Saveur de l’année";
        readonly "skos:notation": "Reconnu_Saveur_de_lanne";
    }, {
        readonly "@id": "dfc-f:TasteOfTheYear";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Taste of the year";
        readonly "skos:notation": "Taste_of_the_year";
    }, {
        readonly "@id": "dfc-f:HautsDeFrance";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Hauts-de-France";
        readonly "skos:notation": "Hauts_de_France";
    }, {
        readonly "@id": "dfc-f:NewZealand";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "New Zealand";
        readonly "skos:notation": "New_Zealand";
    }, {
        readonly "@id": "dfc-f:NewZealand";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Nouvelle Zélande";
        readonly "skos:notation": "Nouvelle_Zlande";
    }, {
        readonly "@id": "dfc-f:Fleur";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Fleur";
        readonly "skos:notation": "Fleur";
    }, {
        readonly "@id": "dfc-f:Flower";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Flower";
        readonly "skos:notation": "Flower";
    }, {
        readonly "@id": "dfc-f:ProductOfTheYear";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Product of the year";
        readonly "skos:notation": "Product_of_the_year";
    }, {
        readonly "@id": "dfc-f:ProductOfTheYear";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Elu produit de l'année";
        readonly "skos:notation": "Elu_produit_de_lanne";
    }, {
        readonly "@id": "dfc-f:ContainerInformation";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Container Information";
        readonly "skos:notation": "Container_Information";
    }, {
        readonly "@id": "dfc-f:GoatBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Partie de chèvre";
        readonly "skos:notation": "Partie_de_chvre";
    }, {
        readonly "@id": "dfc-f:GoatBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Goat's body";
        readonly "skos:notation": "Goats_body";
    }, {
        readonly "@id": "dfc-f:SheepMilk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Lait de brebis";
        readonly "skos:notation": "Lait_de_brebis";
    }, {
        readonly "@id": "dfc-f:GoatMilk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Goat milk";
        readonly "skos:notation": "Goat_milk";
    }, {
        readonly "@id": "dfc-f:PaysDeLaLoire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Pays de la Loire";
        readonly "skos:notation": "Pays_de_la_Loire";
    }, {
        readonly "@id": "dfc-f:Bulb";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Bulbe";
        readonly "skos:notation": "Bulbe";
    }, {
        readonly "@id": "dfc-f:Bulb";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Bulb";
        readonly "skos:notation": "Bulb";
    }, {
        readonly "@id": "dfc-f:ChickenBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Chicken's body";
        readonly "skos:notation": "Chickens_body";
    }, {
        readonly "@id": "dfc-f:ChickenBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Partie du poulet";
        readonly "skos:notation": "Partie_du_poulet";
    }, {
        readonly "@id": "dfc-f:NorthernIreland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Irlande du Nord";
        readonly "skos:notation": "Irlande_du_Nord";
    }, {
        readonly "@id": "dfc-f:NorthernIreland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Northern Ireland";
        readonly "skos:notation": "Northern_Ireland";
    }, {
        readonly "@id": "dfc-f:EweBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Partie de brebis";
        readonly "skos:notation": "Partie_de_brebis";
    }, {
        readonly "@id": "dfc-f:EweBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Ewe's body";
        readonly "skos:notation": "Ewes_body";
    }, {
        readonly "@id": "dfc-f:SheepMilk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Sheep milk";
        readonly "skos:notation": "Sheep_milk";
    }, {
        readonly "@id": "dfc-f:HenEgg";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Hen's egg";
        readonly "skos:notation": "Hens_egg";
    }, {
        readonly "@id": "dfc-f:HenEgg";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Œuf de poule";
        readonly "skos:notation": "uf_de_poule";
    }, {
        readonly "@id": "dfc-f:Derbyshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Derbyshire";
        readonly "skos:notation": "Derbyshire";
    }, {
        readonly "@id": "dfc-f:TyneAndWear";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Tyne & Wear";
        readonly "skos:notation": "Tyne__Wear";
    }, {
        readonly "@id": "dfc-f:Dunbartonshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Dunbartonshire";
        readonly "skos:notation": "Dunbartonshire";
    }, {
        readonly "@id": "dfc-f:Leicestershire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Leicestershire";
        readonly "skos:notation": "Leicestershire";
    }, {
        readonly "@id": "dfc-f:ProvenceAlpesCteAzur";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Provence-Alpes-Côte d’Azur";
        readonly "skos:notation": "Provence_Alpes_Cte_dAzur";
    }, {
        readonly "@id": "dfc-f:WholePlant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Plante entière";
        readonly "skos:notation": "Plante_entire";
    }, {
        readonly "@id": "dfc-f:WholePlant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Whole plant";
        readonly "skos:notation": "Whole_plant";
    }, {
        readonly "@id": "dfc-f:RoosterBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Rooster's body";
        readonly "skos:notation": "Roosters_body";
    }, {
        readonly "@id": "dfc-f:RoosterBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Partie de coq";
        readonly "skos:notation": "Partie_de_coq";
    }, {
        readonly "@id": "dfc-f:ScottishBorders";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Scottish Borders";
        readonly "skos:notation": "Scottish_Borders";
    }, {
        readonly "@id": "dfc-f:EasternScotland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Eastern Scotland";
        readonly "skos:notation": "Eastern_Scotland";
    }, {
        readonly "@id": "dfc-f:Nottinghamshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Nottinghamshire";
        readonly "skos:notation": "Nottinghamshire";
    }, {
        readonly "@id": "dfc-f:Ayrshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Ayrshire";
        readonly "skos:notation": "Ayrshire";
    }, {
        readonly "@id": "dfc-f:CountyDurham";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "County Durham";
        readonly "skos:notation": "County_Durham";
    }, {
        readonly "@id": "dfc-f:Northumberland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Northumberland";
        readonly "skos:notation": "Northumberland";
    }, {
        readonly "@id": "dfc-f:QuailsEgg";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Quail's egg";
        readonly "skos:notation": "Quails_egg";
    }, {
        readonly "@id": "dfc-f:ufDeCaille";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Œuf de caille";
        readonly "skos:notation": "uf_de_caille";
    }, {
        readonly "@id": "dfc-f:ProtectedGeographicalStatus";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Statut géographique protégé";
        readonly "skos:notation": "Statut_gographique_protg";
    }, {
        readonly "@id": "dfc-f:ProtectedGeographicalStatus";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Protected Geographical Status";
        readonly "skos:notation": "Protected_Geographical_Status";
    }, {
        readonly "@id": "dfc-f:Normandy";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Normandy";
        readonly "skos:notation": "Normandy";
    }, {
        readonly "@id": "dfc-f:Normandie";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Normandie";
        readonly "skos:notation": "Normandie";
    }, {
        readonly "@id": "dfc-f:Bretagne";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Bretagne";
        readonly "skos:notation": "Bretagne";
    }, {
        readonly "@id": "dfc-f:Brittany";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Brittany";
        readonly "skos:notation": "Brittany";
    }, {
        readonly "@id": "dfc-f:Occitania";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Occitania";
        readonly "skos:notation": "Occitania";
    }, {
        readonly "@id": "dfc-f:Occitanie";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Occitanie";
        readonly "skos:notation": "Occitanie";
    }, {
        readonly "@id": "dfc-f:Corse";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Corse";
        readonly "skos:notation": "Corse";
    }, {
        readonly "@id": "dfc-f:Corsica";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Corsica";
        readonly "skos:notation": "Corsica";
    }, {
        readonly "@id": "dfc-f:IleDeFrance";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Ile-de-France";
        readonly "skos:notation": "Ile_de_France";
    }, {
        readonly "@id": "dfc-f:IleDeFrance";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Île-de-France";
        readonly "skos:notation": "le_de_France";
    }, {
        readonly "@id": "dfc-f:AuvergneRhneAlpes";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Auvergne-Rhône-Alpes";
        readonly "skos:notation": "Auvergne_Rhne_Alpes";
    }, {
        readonly "@id": "dfc-f:Package";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Package";
        readonly "skos:notation": "Package";
    }, {
        readonly "@id": "dfc-f:Scotland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Scotland";
        readonly "skos:notation": "Scotland";
    }, {
        readonly "@id": "dfc-f:Ecosse";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Ecosse";
        readonly "skos:notation": "Ecosse";
    }, {
        readonly "@id": "dfc-f:HighlandsAndIslands";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Highlands and Islands";
        readonly "skos:notation": "Highlands_and_Islands";
    }, {
        readonly "@id": "dfc-f:NorthEastScotland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "North East Scotland";
        readonly "skos:notation": "North_East_Scotland";
    }, {
        readonly "@id": "dfc-f:Aberdeenshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Aberdeenshire";
        readonly "skos:notation": "Aberdeenshire";
    }, {
        readonly "@id": "dfc-f:CowBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Partie de vache";
        readonly "skos:notation": "Partie_de_vache";
    }, {
        readonly "@id": "dfc-f:CowBody";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cow's body";
        readonly "skos:notation": "Cows_body";
    }, {
        readonly "@id": "dfc-f:CowMilk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Lait de vache";
        readonly "skos:notation": "Lait_de_vache";
    }, {
        readonly "@id": "dfc-f:CowMilk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Cow milk";
        readonly "skos:notation": "Cow_milk";
    }, {
        readonly "@id": "dfc-f:AOPEU";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Appellation d’origine protégée";
        readonly "skos:notation": "Appellation_dorigine_protge";
    }, {
        readonly "@id": "dfc-f:Australie";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Australie";
        readonly "skos:notation": "Australie";
    }, {
        readonly "@id": "dfc-f:Australia";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Australia";
        readonly "skos:notation": "Australia";
    }, {
        readonly "@id": "dfc-f:Lanarkshire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Lanarkshire";
        readonly "skos:notation": "Lanarkshire";
    }, {
        readonly "@id": "dfc-f:Leaf";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Leaf";
        readonly "skos:notation": "Leaf";
    }, {
        readonly "@id": "dfc-f:Leaf";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Feuille";
        readonly "skos:notation": "Feuille";
    }, {
        readonly "@id": "dfc-f:Lothian";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Lothian";
        readonly "skos:notation": "Lothian";
    }, {
        readonly "@id": "dfc-f:Fruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Fruit";
        readonly "skos:notation": "Fruit";
    }, {
        readonly "@id": "dfc-f:Rutland";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Rutland";
        readonly "skos:notation": "Rutland";
    }, {
        readonly "@id": "dfc-f:Stem";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Stem";
        readonly "skos:notation": "Stem";
    }, {
        readonly "@id": "dfc-f:Stem";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Tige";
        readonly "skos:notation": "Tige";
    }, {
        readonly "@id": "dfc-f:Root";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Root";
        readonly "skos:notation": "Root";
    }, {
        readonly "@id": "dfc-f:Root";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Racine";
        readonly "skos:notation": "Racine";
    }, {
        readonly "@id": "dfc-f:Edinburgh";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Edinburgh";
        readonly "skos:notation": "Edinburgh";
    }, {
        readonly "@id": "dfc-f:Tubercule";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Tubercule";
        readonly "skos:notation": "Tubercule";
    }, {
        readonly "@id": "dfc-f:Tuber";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Tuber";
        readonly "skos:notation": "Tuber";
    }];
};
export default _default;
