declare const _default: {
    readonly "@context": {
        readonly skos: "http://www.w3.org/2004/02/skos/core#";
        readonly "dfc-f": "http://w3id.org/dfc/taxonomies/v2.0.0/facets.rdf#";
        readonly "dfc-m": "http://w3id.org/dfc/taxonomies/v2.0.0/measures.rdf#";
        readonly "dfc-pt": "http://w3id.org/dfc/taxonomies/v2.0.0/productTypes.rdf#";
        readonly "dfc-v": "http://w3id.org/dfc/taxonomies/v2.0.0/vocabulary.rdf#";
    };
    readonly "@graph": readonly [{
        readonly "@id": "dfc-v:ProductType";
        readonly "@type": readonly ["skos:ConceptScheme"];
        readonly "skos:prefLabel": "ProductType";
        readonly "skos:hasTopConcept": readonly ["dfc-f:poulet", "dfc-f:chicken", "dfc-f:volaille", "dfc-f:poultry", "dfc-f:escargots", "dfc-f:snails", "dfc-f:meatProduct", "dfc-f:produitCarn", "dfc-f:topinambour", "dfc-f:jerusalemArtichoke", "dfc-f:lgume", "dfc-f:vegetable", "dfc-f:soup", "dfc-f:soupe", "dfc-f:lgumeTransform", "dfc-f:processedVegetable", "dfc-f:Venison", "dfc-f:ViandeDeCerf", "dfc-f:flavoredYogurt", "dfc-f:yaourtAromatis", "dfc-f:cowDairyProduct", "dfc-f:produitLaitierDeVache", "dfc-f:pommeDeTerre", "dfc-f:potato", "dfc-f:bean", "dfc-f:haricot", "dfc-f:garlic", "dfc-f:ail", "dfc-f:parsnip", "dfc-f:panais", "dfc-f:navet", "dfc-f:turnip", "dfc-f:tomate", "dfc-f:tomato", "dfc-f:pepper", "dfc-f:poivron", "dfc-f:asparagus", "dfc-f:asperges", "dfc-f:squash", "dfc-f:courge", "dfc-f:cabbage", "dfc-f:chou", "dfc-f:shallot", "dfc-f:chalote", "dfc-f:lgumeDeQuatrimeGamme", "dfc-f:fourthRangeVegetable", "dfc-f:nonLocalVegetable", "dfc-f:lgumeNonLocal", "dfc-f:radis", "dfc-f:radish", "dfc-f:rhubarb", "dfc-f:rhubarbe", "dfc-f:rutabaga", "dfc-f:cleriBranche", "dfc-f:celeryBranch", "dfc-f:artichaut", "dfc-f:artichoke", "dfc-f:blettes", "dfc-f:chard", "dfc-f:cucumber", "dfc-f:concombre", "dfc-f:carotte", "dfc-f:carrot", "dfc-f:leek", "dfc-f:poireau", "dfc-f:betteraveRouge", "dfc-f:beetroot", "dfc-f:salade", "dfc-f:salad", "dfc-f:salsify", "dfc-f:salsifis", "dfc-f:courgette", "dfc-f:fennel", "dfc-f:fenouil", "dfc-f:PatateDouce", "dfc-f:yam", "dfc-f:lgumeDeCinquimeGamme", "dfc-f:fifthRangeVegetable", "dfc-f:celeriac", "dfc-f:cleriRave", "dfc-f:driedVegetable", "dfc-f:lgumeSec", "dfc-f:oignon", "dfc-f:onion", "dfc-f:aillet", "dfc-f:greenGarlic", "dfc-f:aubergine", "dfc-f:eggplant", "dfc-f:herb", "dfc-f:aromate", "dfc-f:melon", "dfc-f:mushroom", "dfc-f:champignon", "dfc-f:crepeAndGalette", "dfc-f:crpeEtGalette", "dfc-f:picerieSale", "dfc-f:savoryGroceries", "dfc-f:piment", "dfc-f:chilliPepper", "dfc-f:chive", "dfc-f:ciboulette", "dfc-f:basil", "dfc-f:basilic", "dfc-f:cerfeuil", "dfc-f:chervil", "dfc-f:sage", "dfc-f:sauge", "dfc-f:parsley", "dfc-f:persil", "dfc-f:aneth", "dfc-f:dill", "dfc-f:coriander", "dfc-f:coriandre", "dfc-f:romarin", "dfc-f:rosemary", "dfc-f:menthe", "dfc-f:mint", "dfc-f:thym", "dfc-f:thyme", "dfc-f:bayLaurel", "dfc-f:laurier", "dfc-f:tarragon", "dfc-f:estragon", "dfc-f:fruit", "dfc-f:fruits", "dfc-f:apples", "dfc-f:pomme", "dfc-f:abricot", "dfc-f:apricot", "dfc-f:berry", "dfc-f:petitFruit", "dfc-f:cherry", "dfc-f:cerise", "dfc-f:clmentine", "dfc-f:clementine", "dfc-f:figue", "dfc-f:fig", "dfc-f:grape", "dfc-f:raisin", "dfc-f:kiwi", "dfc-f:citron", "dfc-f:lemon", "dfc-f:mandarine", "dfc-f:mandarin", "dfc-f:nectarine", "dfc-f:nonLocalFruit", "dfc-f:fruitNonLocal", "dfc-f:fruitCoque", "dfc-f:nut", "dfc-f:orange", "dfc-f:peach", "dfc-f:pche", "dfc-f:pear", "dfc-f:poire", "dfc-f:plum", "dfc-f:prune", "dfc-f:pruneau", "dfc-f:quince", "dfc-f:coing", "dfc-f:nfle", "dfc-f:medlar", "dfc-f:blueberry", "dfc-f:myrtille", "dfc-f:currant", "dfc-f:groseille", "dfc-f:mre", "dfc-f:blackberry", "dfc-f:framboise", "dfc-f:raspberry", "dfc-f:gooseberry", "dfc-f:groseilleMaquereau", "dfc-f:fraise", "dfc-f:strawberry", "dfc-f:blackcurrant", "dfc-f:cassis", "dfc-f:picerieLocale", "dfc-f:localGroceryStore", "dfc-f:produitsSec", "dfc-f:driedGoods", "dfc-f:platCuisin", "dfc-f:readyMeal", "dfc-f:sweetGroceries", "dfc-f:picerieSucre", "dfc-f:processedFruit", "dfc-f:fruitTransform", "dfc-f:cauliflower", "dfc-f:chouFleur", "dfc-f:lemonade", "dfc-f:limonade", "dfc-f:boissonNonAlcoolise", "dfc-f:softDrink", "dfc-f:salt", "dfc-f:sel", "dfc-f:brusselsSprouts", "dfc-f:chouxDeBruxelles", "dfc-f:drink", "dfc-f:boisson", "dfc-f:produitLaitier", "dfc-f:dairyProduct", "dfc-f:bakery", "dfc-f:boulangerie", "dfc-f:inedible", "dfc-f:nonAlimentaire", "dfc-f:frozen", "dfc-f:surgel", "dfc-f:hierloomTomato", "dfc-f:tomateAncienne", "dfc-f:tomateCerise", "dfc-f:cherryTomato", "dfc-f:roundTomato", "dfc-f:tomateRonde", "dfc-f:tomateEnGrappe", "dfc-f:clusterTomato", "dfc-f:shellfish", "dfc-f:crustacs", "dfc-f:fisheryProduct", "dfc-f:produitDeLaPche", "dfc-f:viennoiserie", "dfc-f:flake", "dfc-f:flocon", "dfc-f:amande", "dfc-f:almond", "dfc-f:chestnut", "dfc-f:marron", "dfc-f:noisette", "dfc-f:hazelnut", "dfc-f:noix", "dfc-f:walnut", "dfc-f:grain", "dfc-f:crale", "dfc-f:sheepNaturalYogurt", "dfc-f:yaourtDeBrebisNature", "dfc-f:produitLaitierDeBrebis", "dfc-f:sheepDairyProduct", "dfc-f:crmeFrache", "dfc-f:freshCream", "dfc-f:rocket", "dfc-f:roquette", "dfc-f:piePastry", "dfc-f:pteTarte", "dfc-f:morel", "dfc-f:morille", "dfc-f:fromageFraisDeChvre", "dfc-f:goatFreshCheese", "dfc-f:produitLaitierDeChvre", "dfc-f:goatDairyProduct", "dfc-f:smoothCabbage", "dfc-f:chouLisse", "dfc-f:veau", "dfc-f:veal", "dfc-f:goatMatureCheese", "dfc-f:fromageDeChvreAffin", "dfc-f:graine", "dfc-f:seed", "dfc-f:quinoa", "dfc-f:beans", "dfc-f:haricots", "dfc-f:lentilles", "dfc-f:lentils", "dfc-f:peas", "dfc-f:pois", "dfc-f:viandeBovine", "dfc-f:beef", "dfc-f:egg", "dfc-f:uf", "dfc-f:agneau", "dfc-f:lamb", "dfc-f:porc", "dfc-f:pork", "dfc-f:lapin", "dfc-f:rabbit", "dfc-f:fromageAffin", "dfc-f:matureCheese", "dfc-f:bluefootMushroom", "dfc-f:PiedBleu", "dfc-f:cannedVegetable", "dfc-f:lgumeEnConserve", "dfc-f:fromageAffinDeBrebis", "dfc-f:sheepMatureCheese", "dfc-f:yaourtSucrDeChvre", "dfc-f:goatSweetYogurt", "dfc-f:pastry", "dfc-f:ptisserie", "dfc-f:chouPomm", "dfc-f:savoyCabbage", "dfc-f:pinards", "dfc-f:spinach", "dfc-f:mlangeDeSalades", "dfc-f:saladMix", "dfc-f:laitue", "dfc-f:lettuce", "dfc-f:cornSaladlambsLettuce", "dfc-f:mche", "dfc-f:chicory", "dfc-f:chicore", "dfc-f:dandelion", "dfc-f:pissenlit", "dfc-f:Purslane", "dfc-f:Pourpier", "dfc-f:mesclun", "dfc-f:cress", "dfc-f:cresson", "dfc-f:endive", "dfc-f:autreProduitLaitier", "dfc-f:otherDairyProduct", "dfc-f:dessertLactDeChvre", "dfc-f:goatDairyDessert", "dfc-f:goatFlavoredYogurt", "dfc-f:yaourtDeChvreAromatis", "dfc-f:goatNaturalYogurt", "dfc-f:yaourtNatureDeChvre", "dfc-f:yaourtDeChvreAuxFruits", "dfc-f:goatYogurtWithFruits", "dfc-f:goatMilk", "dfc-f:laitDeChvre", "dfc-f:yaourtDeChvreSurLitDeFruits", "dfc-f:goatYogurtOnABedOfFruit", "dfc-f:viandeSurgele", "dfc-f:frozenMeat", "dfc-f:frozenMeal", "dfc-f:platSurgel", "dfc-f:bottledVegetable", "dfc-f:lgumeEnBocal", "dfc-f:biscuit", "dfc-f:lactaire", "dfc-f:milkyMushroom", "dfc-f:frozenVegetable", "dfc-f:lgumeSurgel", "dfc-f:fish", "dfc-f:poisson", "dfc-f:grillingMeat", "dfc-f:viandeGriller", "dfc-f:confiserie", "dfc-f:confectionery", "dfc-f:coulemelle", "dfc-f:parasolMushroom", "dfc-f:butternut", "dfc-f:potiron", "dfc-f:pumpkin", "dfc-f:hierloomSquash", "dfc-f:varitAncienneDeCourge", "dfc-f:uchikiKuriSquash", "dfc-f:potimarron", "dfc-f:pattypanSquash", "dfc-f:ptisson", "dfc-f:bread", "dfc-f:pain", "dfc-f:autreFromage", "dfc-f:otherCheese", "dfc-f:autreLait", "dfc-f:otherMilk", "dfc-f:ferment", "dfc-f:aperitif", "dfc-f:apritif", "dfc-f:boissonAlcoolise", "dfc-f:alcoholicBeverage", "dfc-f:snack", "dfc-f:cosmetic", "dfc-f:cosmtique", "dfc-f:cookedMeat", "dfc-f:viandeCuite", "dfc-f:charcuterie", "dfc-f:delicatessen", "dfc-f:viandeFrache", "dfc-f:freshMeat", "dfc-f:salaison", "dfc-f:salting", "dfc-f:pintade", "dfc-f:guineaFowl", "dfc-f:dinde", "dfc-f:turkey", "dfc-f:oie", "dfc-f:goose", "dfc-f:canard", "dfc-f:duck", "dfc-f:festivePoultry", "dfc-f:volailleFestive", "dfc-f:pigeon", "dfc-f:caille", "dfc-f:quail", "dfc-f:digestive", "dfc-f:digestif", "dfc-f:chouRave", "dfc-f:kohlrabi", "dfc-f:butter", "dfc-f:beurre", "dfc-f:chouRouge", "dfc-f:redCabbage", "dfc-f:chouRomanesco", "dfc-f:romanescoCauliflower", "dfc-f:broccoliCabbage", "dfc-f:chouBrocoli", "dfc-f:chouFris", "dfc-f:curlyKale", "dfc-f:chouKale", "dfc-f:kale", "dfc-f:chouChinois", "dfc-f:chineseCabbage", "dfc-f:honey", "dfc-f:miel", "dfc-f:jam", "dfc-f:confiture", "dfc-f:frozenFruit", "dfc-f:fruitSurgel", "dfc-f:coquillage", "dfc-f:seashell", "dfc-f:cpes", "dfc-f:porcini", "dfc-f:fruitJuice", "dfc-f:jusDeFruits", "dfc-f:buttonMushroom", "dfc-f:champignonDeParis", "dfc-f:girolle", "dfc-f:girolleMushroom", "dfc-f:truffe", "dfc-f:truffle", "dfc-f:PiedDeMouton", "dfc-f:sheepfootMushroom", "dfc-f:mousseron", "dfc-f:chanterelle", "dfc-f:chanterelleMushroom", "dfc-f:oysterMushroom", "dfc-f:pleurote", "dfc-f:deathsTrumpet", "dfc-f:trompetteDeLaMort", "dfc-f:creamCheese", "dfc-f:fromageBlanc", "dfc-f:sheepSweetYogurt", "dfc-f:yaourtSucrDeBrebis", "dfc-f:semolina", "dfc-f:semoule", "dfc-f:huile", "dfc-f:oil", "dfc-f:cannedGoods", "dfc-f:ptes", "dfc-f:pasta", "dfc-f:rice", "dfc-f:riz", "dfc-f:yaourtSurLitDeFruits", "dfc-f:yogurtOnABedOfFruit", "dfc-f:pulse", "dfc-f:sheepDairyDessert", "dfc-f:dessertLactDeBrebis", "dfc-f:sheepFlavoredYogurt", "dfc-f:yaourtDeBrebisAromatis", "dfc-f:sheepFreshCheese", "dfc-f:FromageFraisDeBrebis", "dfc-f:laitDeBrebis", "dfc-f:sheepMilk", "dfc-f:sheepYogurtOnABedOfFruit", "dfc-f:yaourtDeBrebisSurLitDeFruits", "dfc-f:sheepYogurtWithFruits", "dfc-f:yaourtDeBrebisAuxFruits", "dfc-f:fruitEnCompote", "dfc-f:fruitInCompote", "dfc-f:fruitEnBocal", "dfc-f:bottledFruit", "dfc-f:cannedFruit", "dfc-f:fruitEnConserve", "dfc-f:fruitSec", "dfc-f:driedFruit", "dfc-f:dairyDessert", "dfc-f:dessertLact", "dfc-f:freshCheese", "dfc-f:fromageFrais", "dfc-f:lait", "dfc-f:milk", "dfc-f:yaourtNature", "dfc-f:naturalYogurt", "dfc-f:yaourtSucr", "dfc-f:sweetYogurt", "dfc-f:yaourtAuxFruits", "dfc-f:yogurtWithFruits", "dfc-f:flour", "dfc-f:farine", "dfc-f:flower", "dfc-f:fleur", "dfc-f:plant", "dfc-f:plante", "dfc-f:aromateSec", "dfc-f:driedHerb", "dfc-f:viandeMijoter", "dfc-f:simmeringMeat", "dfc-f:wine", "dfc-f:vin", "dfc-f:beer", "dfc-f:bire", "dfc-f:smoothie", "dfc-f:cider", "dfc-f:cidre"];
    }, {
        readonly "@id": "dfc-f:poulet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "poulet";
        readonly "skos:notation": "poulet";
    }, {
        readonly "@id": "dfc-f:chicken";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chicken";
        readonly "skos:notation": "chicken";
    }, {
        readonly "@id": "dfc-f:volaille";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "volaille";
        readonly "skos:notation": "volaille";
    }, {
        readonly "@id": "dfc-f:poultry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "poultry";
        readonly "skos:notation": "poultry";
    }, {
        readonly "@id": "dfc-f:escargots";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "escargots";
        readonly "skos:notation": "escargots";
    }, {
        readonly "@id": "dfc-f:snails";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "snails";
        readonly "skos:notation": "snails";
    }, {
        readonly "@id": "dfc-f:meatProduct";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "meat product";
        readonly "skos:notation": "meat_product";
    }, {
        readonly "@id": "dfc-f:produitCarn";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "produit carné";
        readonly "skos:notation": "produit_carn";
    }, {
        readonly "@id": "dfc-f:topinambour";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "topinambour";
        readonly "skos:notation": "topinambour";
    }, {
        readonly "@id": "dfc-f:jerusalemArtichoke";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "jerusalem artichoke";
        readonly "skos:notation": "jerusalem_artichoke";
    }, {
        readonly "@id": "dfc-f:lgume";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "légume";
        readonly "skos:notation": "lgume";
    }, {
        readonly "@id": "dfc-f:vegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "vegetable";
        readonly "skos:notation": "vegetable";
    }, {
        readonly "@id": "dfc-f:soup";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "soup";
        readonly "skos:notation": "soup";
    }, {
        readonly "@id": "dfc-f:soupe";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "soupe";
        readonly "skos:notation": "soupe";
    }, {
        readonly "@id": "dfc-f:lgumeTransform";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "légume transformé";
        readonly "skos:notation": "lgume_transform";
    }, {
        readonly "@id": "dfc-f:processedVegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "processed vegetable";
        readonly "skos:notation": "processed_vegetable";
    }, {
        readonly "@id": "dfc-f:Venison";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Venison";
        readonly "skos:notation": "Venison";
    }, {
        readonly "@id": "dfc-f:ViandeDeCerf";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Viande de cerf";
        readonly "skos:notation": "Viande_de_cerf";
    }, {
        readonly "@id": "dfc-f:flavoredYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "flavored yogurt";
        readonly "skos:notation": "flavored_yogurt";
    }, {
        readonly "@id": "dfc-f:yaourtAromatis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yaourt aromatisé";
        readonly "skos:notation": "yaourt_aromatis";
    }, {
        readonly "@id": "dfc-f:cowDairyProduct";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cow dairy product";
        readonly "skos:notation": "cow_dairy_product";
    }, {
        readonly "@id": "dfc-f:produitLaitierDeVache";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "produit laitier de vache";
        readonly "skos:notation": "produit_laitier_de_vache";
    }, {
        readonly "@id": "dfc-f:pommeDeTerre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pomme de terre";
        readonly "skos:notation": "pomme_de_terre";
    }, {
        readonly "@id": "dfc-f:potato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "potato";
        readonly "skos:notation": "potato";
    }, {
        readonly "@id": "dfc-f:bean";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "bean";
        readonly "skos:notation": "bean";
    }, {
        readonly "@id": "dfc-f:haricot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "haricot";
        readonly "skos:notation": "haricot";
    }, {
        readonly "@id": "dfc-f:garlic";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "garlic";
        readonly "skos:notation": "garlic";
    }, {
        readonly "@id": "dfc-f:ail";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "ail";
        readonly "skos:notation": "ail";
    }, {
        readonly "@id": "dfc-f:parsnip";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "parsnip";
        readonly "skos:notation": "parsnip";
    }, {
        readonly "@id": "dfc-f:panais";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "panais";
        readonly "skos:notation": "panais";
    }, {
        readonly "@id": "dfc-f:navet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "navet";
        readonly "skos:notation": "navet";
    }, {
        readonly "@id": "dfc-f:turnip";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "turnip";
        readonly "skos:notation": "turnip";
    }, {
        readonly "@id": "dfc-f:tomate";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "tomate";
        readonly "skos:notation": "tomate";
    }, {
        readonly "@id": "dfc-f:tomato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "tomato";
        readonly "skos:notation": "tomato";
    }, {
        readonly "@id": "dfc-f:pepper";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pepper";
        readonly "skos:notation": "pepper";
    }, {
        readonly "@id": "dfc-f:poivron";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "poivron";
        readonly "skos:notation": "poivron";
    }, {
        readonly "@id": "dfc-f:asparagus";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "asparagus";
        readonly "skos:notation": "asparagus";
    }, {
        readonly "@id": "dfc-f:asperges";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "asperges";
        readonly "skos:notation": "asperges";
    }, {
        readonly "@id": "dfc-f:squash";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "squash";
        readonly "skos:notation": "squash";
    }, {
        readonly "@id": "dfc-f:courge";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "courge";
        readonly "skos:notation": "courge";
    }, {
        readonly "@id": "dfc-f:cabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cabbage";
        readonly "skos:notation": "cabbage";
    }, {
        readonly "@id": "dfc-f:chou";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chou";
        readonly "skos:notation": "chou";
    }, {
        readonly "@id": "dfc-f:shallot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "shallot";
        readonly "skos:notation": "shallot";
    }, {
        readonly "@id": "dfc-f:chalote";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "échalote";
        readonly "skos:notation": "chalote";
    }, {
        readonly "@id": "dfc-f:lgumeDeQuatrimeGamme";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "légume de quatrième gamme";
        readonly "skos:notation": "lgume_de_quatrime_gamme";
    }, {
        readonly "@id": "dfc-f:fourthRangeVegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fourth range vegetable";
        readonly "skos:notation": "fourth_range_vegetable";
    }, {
        readonly "@id": "dfc-f:nonLocalVegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "non local vegetable";
        readonly "skos:notation": "non_local_vegetable";
    }, {
        readonly "@id": "dfc-f:lgumeNonLocal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "légume non local";
        readonly "skos:notation": "lgume_non_local";
    }, {
        readonly "@id": "dfc-f:radis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "radis";
        readonly "skos:notation": "radis";
    }, {
        readonly "@id": "dfc-f:radish";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "radish";
        readonly "skos:notation": "radish";
    }, {
        readonly "@id": "dfc-f:rhubarb";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "rhubarb";
        readonly "skos:notation": "rhubarb";
    }, {
        readonly "@id": "dfc-f:rhubarbe";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "rhubarbe";
        readonly "skos:notation": "rhubarbe";
    }, {
        readonly "@id": "dfc-f:rutabaga";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "rutabaga";
        readonly "skos:notation": "rutabaga";
    }, {
        readonly "@id": "dfc-f:cleriBranche";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "céleri branche";
        readonly "skos:notation": "cleri_branche";
    }, {
        readonly "@id": "dfc-f:celeryBranch";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "celery branch";
        readonly "skos:notation": "celery_branch";
    }, {
        readonly "@id": "dfc-f:artichaut";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "artichaut";
        readonly "skos:notation": "artichaut";
    }, {
        readonly "@id": "dfc-f:artichoke";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "artichoke";
        readonly "skos:notation": "artichoke";
    }, {
        readonly "@id": "dfc-f:blettes";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "blettes";
        readonly "skos:notation": "blettes";
    }, {
        readonly "@id": "dfc-f:chard";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chard";
        readonly "skos:notation": "chard";
    }, {
        readonly "@id": "dfc-f:cucumber";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cucumber";
        readonly "skos:notation": "cucumber";
    }, {
        readonly "@id": "dfc-f:concombre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "concombre";
        readonly "skos:notation": "concombre";
    }, {
        readonly "@id": "dfc-f:carotte";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "carotte";
        readonly "skos:notation": "carotte";
    }, {
        readonly "@id": "dfc-f:carrot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "carrot";
        readonly "skos:notation": "carrot";
    }, {
        readonly "@id": "dfc-f:leek";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "leek";
        readonly "skos:notation": "leek";
    }, {
        readonly "@id": "dfc-f:poireau";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "poireau";
        readonly "skos:notation": "poireau";
    }, {
        readonly "@id": "dfc-f:betteraveRouge";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "betterave rouge";
        readonly "skos:notation": "betterave_rouge";
    }, {
        readonly "@id": "dfc-f:beetroot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "beetroot";
        readonly "skos:notation": "beetroot";
    }, {
        readonly "@id": "dfc-f:salade";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "salade";
        readonly "skos:notation": "salade";
    }, {
        readonly "@id": "dfc-f:salad";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "salad";
        readonly "skos:notation": "salad";
    }, {
        readonly "@id": "dfc-f:salsify";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "salsify";
        readonly "skos:notation": "salsify";
    }, {
        readonly "@id": "dfc-f:salsifis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "salsifis";
        readonly "skos:notation": "salsifis";
    }, {
        readonly "@id": "dfc-f:courgette";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "courgette";
        readonly "skos:notation": "courgette";
    }, {
        readonly "@id": "dfc-f:fennel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fennel";
        readonly "skos:notation": "fennel";
    }, {
        readonly "@id": "dfc-f:fenouil";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fenouil";
        readonly "skos:notation": "fenouil";
    }, {
        readonly "@id": "dfc-f:PatateDouce";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Patate douce";
        readonly "skos:notation": "Patate_douce";
    }, {
        readonly "@id": "dfc-f:yam";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yam";
        readonly "skos:notation": "yam";
    }, {
        readonly "@id": "dfc-f:lgumeDeCinquimeGamme";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "légume de cinquième gamme";
        readonly "skos:notation": "lgume_de_cinquime_gamme";
    }, {
        readonly "@id": "dfc-f:fifthRangeVegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fifth range vegetable";
        readonly "skos:notation": "fifth_range_vegetable";
    }, {
        readonly "@id": "dfc-f:celeriac";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "celeriac";
        readonly "skos:notation": "celeriac";
    }, {
        readonly "@id": "dfc-f:cleriRave";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "céleri-rave";
        readonly "skos:notation": "cleri_rave";
    }, {
        readonly "@id": "dfc-f:driedVegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dried vegetable";
        readonly "skos:notation": "dried_vegetable";
    }, {
        readonly "@id": "dfc-f:lgumeSec";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "légume sec";
        readonly "skos:notation": "lgume_sec";
    }, {
        readonly "@id": "dfc-f:oignon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "oignon";
        readonly "skos:notation": "oignon";
    }, {
        readonly "@id": "dfc-f:onion";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "onion";
        readonly "skos:notation": "onion";
    }, {
        readonly "@id": "dfc-f:aillet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "aillet";
        readonly "skos:notation": "aillet";
    }, {
        readonly "@id": "dfc-f:greenGarlic";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "green garlic";
        readonly "skos:notation": "green_garlic";
    }, {
        readonly "@id": "dfc-f:aubergine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "aubergine";
        readonly "skos:notation": "aubergine";
    }, {
        readonly "@id": "dfc-f:eggplant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "eggplant";
        readonly "skos:notation": "eggplant";
    }, {
        readonly "@id": "dfc-f:herb";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "herb";
        readonly "skos:notation": "herb";
    }, {
        readonly "@id": "dfc-f:aromate";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "aromate";
        readonly "skos:notation": "aromate";
    }, {
        readonly "@id": "dfc-f:melon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "melon";
        readonly "skos:notation": "melon";
    }, {
        readonly "@id": "dfc-f:mushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "mushroom";
        readonly "skos:notation": "mushroom";
    }, {
        readonly "@id": "dfc-f:champignon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "champignon";
        readonly "skos:notation": "champignon";
    }, {
        readonly "@id": "dfc-f:crepeAndGalette";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "crepe and galette";
        readonly "skos:notation": "crepe_and_galette";
    }, {
        readonly "@id": "dfc-f:crpeEtGalette";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "crêpe et galette";
        readonly "skos:notation": "crpe_et_galette";
    }, {
        readonly "@id": "dfc-f:picerieSale";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "épicerie salée";
        readonly "skos:notation": "picerie_sale";
    }, {
        readonly "@id": "dfc-f:savoryGroceries";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "savory groceries";
        readonly "skos:notation": "savory_groceries";
    }, {
        readonly "@id": "dfc-f:piment";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "piment";
        readonly "skos:notation": "piment";
    }, {
        readonly "@id": "dfc-f:chilliPepper";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chilli pepper";
        readonly "skos:notation": "chilli_pepper";
    }, {
        readonly "@id": "dfc-f:chive";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chive";
        readonly "skos:notation": "chive";
    }, {
        readonly "@id": "dfc-f:ciboulette";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "ciboulette";
        readonly "skos:notation": "ciboulette";
    }, {
        readonly "@id": "dfc-f:basil";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "basil";
        readonly "skos:notation": "basil";
    }, {
        readonly "@id": "dfc-f:basilic";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "basilic";
        readonly "skos:notation": "basilic";
    }, {
        readonly "@id": "dfc-f:cerfeuil";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cerfeuil";
        readonly "skos:notation": "cerfeuil";
    }, {
        readonly "@id": "dfc-f:chervil";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chervil";
        readonly "skos:notation": "chervil";
    }, {
        readonly "@id": "dfc-f:sage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sage";
        readonly "skos:notation": "sage";
    }, {
        readonly "@id": "dfc-f:sauge";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sauge";
        readonly "skos:notation": "sauge";
    }, {
        readonly "@id": "dfc-f:parsley";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "parsley";
        readonly "skos:notation": "parsley";
    }, {
        readonly "@id": "dfc-f:persil";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "persil";
        readonly "skos:notation": "persil";
    }, {
        readonly "@id": "dfc-f:aneth";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "aneth";
        readonly "skos:notation": "aneth";
    }, {
        readonly "@id": "dfc-f:dill";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dill";
        readonly "skos:notation": "dill";
    }, {
        readonly "@id": "dfc-f:coriander";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "coriander";
        readonly "skos:notation": "coriander";
    }, {
        readonly "@id": "dfc-f:coriandre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "coriandre";
        readonly "skos:notation": "coriandre";
    }, {
        readonly "@id": "dfc-f:romarin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "romarin";
        readonly "skos:notation": "romarin";
    }, {
        readonly "@id": "dfc-f:rosemary";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "rosemary";
        readonly "skos:notation": "rosemary";
    }, {
        readonly "@id": "dfc-f:menthe";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "menthe";
        readonly "skos:notation": "menthe";
    }, {
        readonly "@id": "dfc-f:mint";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "mint";
        readonly "skos:notation": "mint";
    }, {
        readonly "@id": "dfc-f:thym";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "thym";
        readonly "skos:notation": "thym";
    }, {
        readonly "@id": "dfc-f:thyme";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "thyme";
        readonly "skos:notation": "thyme";
    }, {
        readonly "@id": "dfc-f:bayLaurel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "bay laurel";
        readonly "skos:notation": "bay_laurel";
    }, {
        readonly "@id": "dfc-f:laurier";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "laurier";
        readonly "skos:notation": "laurier";
    }, {
        readonly "@id": "dfc-f:tarragon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "tarragon";
        readonly "skos:notation": "tarragon";
    }, {
        readonly "@id": "dfc-f:estragon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "estragon";
        readonly "skos:notation": "estragon";
    }, {
        readonly "@id": "dfc-f:fruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fruit";
        readonly "skos:notation": "fruit";
    }, {
        readonly "@id": "dfc-f:fruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fruits";
        readonly "skos:notation": "fruits";
    }, {
        readonly "@id": "dfc-f:apples";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "apples";
        readonly "skos:notation": "apples";
    }, {
        readonly "@id": "dfc-f:pomme";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pomme";
        readonly "skos:notation": "pomme";
    }, {
        readonly "@id": "dfc-f:abricot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "abricot";
        readonly "skos:notation": "abricot";
    }, {
        readonly "@id": "dfc-f:apricot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "apricot";
        readonly "skos:notation": "apricot";
    }, {
        readonly "@id": "dfc-f:berry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "berry";
        readonly "skos:notation": "berry";
    }, {
        readonly "@id": "dfc-f:petitFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "petit fruit";
        readonly "skos:notation": "petit_fruit";
    }, {
        readonly "@id": "dfc-f:cherry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cherry";
        readonly "skos:notation": "cherry";
    }, {
        readonly "@id": "dfc-f:cerise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cerise";
        readonly "skos:notation": "cerise";
    }, {
        readonly "@id": "dfc-f:clmentine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "clémentine";
        readonly "skos:notation": "clmentine";
    }, {
        readonly "@id": "dfc-f:clementine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "clementine";
        readonly "skos:notation": "clementine";
    }, {
        readonly "@id": "dfc-f:figue";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "figue";
        readonly "skos:notation": "figue";
    }, {
        readonly "@id": "dfc-f:fig";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fig";
        readonly "skos:notation": "fig";
    }, {
        readonly "@id": "dfc-f:grape";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "grape";
        readonly "skos:notation": "grape";
    }, {
        readonly "@id": "dfc-f:raisin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "raisin";
        readonly "skos:notation": "raisin";
    }, {
        readonly "@id": "dfc-f:kiwi";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "kiwi";
        readonly "skos:notation": "kiwi";
    }, {
        readonly "@id": "dfc-f:citron";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "citron";
        readonly "skos:notation": "citron";
    }, {
        readonly "@id": "dfc-f:lemon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "lemon";
        readonly "skos:notation": "lemon";
    }, {
        readonly "@id": "dfc-f:mandarine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "mandarine";
        readonly "skos:notation": "mandarine";
    }, {
        readonly "@id": "dfc-f:mandarin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "mandarin";
        readonly "skos:notation": "mandarin";
    }, {
        readonly "@id": "dfc-f:nectarine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "nectarine";
        readonly "skos:notation": "nectarine";
    }, {
        readonly "@id": "dfc-f:nonLocalFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "non local fruit";
        readonly "skos:notation": "non_local_fruit";
    }, {
        readonly "@id": "dfc-f:fruitNonLocal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fruit non local";
        readonly "skos:notation": "fruit_non_local";
    }, {
        readonly "@id": "dfc-f:fruitCoque";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fruit à coque";
        readonly "skos:notation": "fruit__coque";
    }, {
        readonly "@id": "dfc-f:nut";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "nut";
        readonly "skos:notation": "nut";
    }, {
        readonly "@id": "dfc-f:orange";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "orange";
        readonly "skos:notation": "orange";
    }, {
        readonly "@id": "dfc-f:peach";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "peach";
        readonly "skos:notation": "peach";
    }, {
        readonly "@id": "dfc-f:pche";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pêche";
        readonly "skos:notation": "pche";
    }, {
        readonly "@id": "dfc-f:pear";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pear";
        readonly "skos:notation": "pear";
    }, {
        readonly "@id": "dfc-f:poire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "poire";
        readonly "skos:notation": "poire";
    }, {
        readonly "@id": "dfc-f:plum";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "plum";
        readonly "skos:notation": "plum";
    }, {
        readonly "@id": "dfc-f:prune";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "prune";
        readonly "skos:notation": "prune";
    }, {
        readonly "@id": "dfc-f:pruneau";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pruneau";
        readonly "skos:notation": "pruneau";
    }, {
        readonly "@id": "dfc-f:quince";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "quince";
        readonly "skos:notation": "quince";
    }, {
        readonly "@id": "dfc-f:coing";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "coing";
        readonly "skos:notation": "coing";
    }, {
        readonly "@id": "dfc-f:nfle";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "nèfle";
        readonly "skos:notation": "nfle";
    }, {
        readonly "@id": "dfc-f:medlar";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "medlar";
        readonly "skos:notation": "medlar";
    }, {
        readonly "@id": "dfc-f:blueberry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "blueberry";
        readonly "skos:notation": "blueberry";
    }, {
        readonly "@id": "dfc-f:myrtille";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "myrtille";
        readonly "skos:notation": "myrtille";
    }, {
        readonly "@id": "dfc-f:currant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "currant";
        readonly "skos:notation": "currant";
    }, {
        readonly "@id": "dfc-f:groseille";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "groseille";
        readonly "skos:notation": "groseille";
    }, {
        readonly "@id": "dfc-f:mre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "mûre";
        readonly "skos:notation": "mre";
    }, {
        readonly "@id": "dfc-f:blackberry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "blackberry";
        readonly "skos:notation": "blackberry";
    }, {
        readonly "@id": "dfc-f:framboise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "framboise";
        readonly "skos:notation": "framboise";
    }, {
        readonly "@id": "dfc-f:raspberry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "raspberry";
        readonly "skos:notation": "raspberry";
    }, {
        readonly "@id": "dfc-f:gooseberry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "gooseberry";
        readonly "skos:notation": "gooseberry";
    }, {
        readonly "@id": "dfc-f:groseilleMaquereau";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "groseille à maquereau";
        readonly "skos:notation": "groseille__maquereau";
    }, {
        readonly "@id": "dfc-f:fraise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fraise";
        readonly "skos:notation": "fraise";
    }, {
        readonly "@id": "dfc-f:strawberry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "strawberry";
        readonly "skos:notation": "strawberry";
    }, {
        readonly "@id": "dfc-f:blackcurrant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "blackcurrant";
        readonly "skos:notation": "blackcurrant";
    }, {
        readonly "@id": "dfc-f:cassis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cassis";
        readonly "skos:notation": "cassis";
    }, {
        readonly "@id": "dfc-f:picerieLocale";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "épicerie locale";
        readonly "skos:notation": "picerie_locale";
    }, {
        readonly "@id": "dfc-f:localGroceryStore";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "local grocery store";
        readonly "skos:notation": "local_grocery_store";
    }, {
        readonly "@id": "dfc-f:produitsSec";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "produits sec";
        readonly "skos:notation": "produits_sec";
    }, {
        readonly "@id": "dfc-f:driedGoods";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dried goods";
        readonly "skos:notation": "dried_goods";
    }, {
        readonly "@id": "dfc-f:platCuisin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "plat cuisiné";
        readonly "skos:notation": "plat_cuisin";
    }, {
        readonly "@id": "dfc-f:readyMeal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "ready meal";
        readonly "skos:notation": "ready_meal";
    }, {
        readonly "@id": "dfc-f:sweetGroceries";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sweet groceries";
        readonly "skos:notation": "sweet_groceries";
    }, {
        readonly "@id": "dfc-f:picerieSucre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "épicerie sucrée";
        readonly "skos:notation": "picerie_sucre";
    }, {
        readonly "@id": "dfc-f:processedFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "processed fruit";
        readonly "skos:notation": "processed_fruit";
    }, {
        readonly "@id": "dfc-f:fruitTransform";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fruit transformé";
        readonly "skos:notation": "fruit_transform";
    }, {
        readonly "@id": "dfc-f:cauliflower";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cauliflower";
        readonly "skos:notation": "cauliflower";
    }, {
        readonly "@id": "dfc-f:chouFleur";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chou-fleur";
        readonly "skos:notation": "chou_fleur";
    }, {
        readonly "@id": "dfc-f:lemonade";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "lemonade";
        readonly "skos:notation": "lemonade";
    }, {
        readonly "@id": "dfc-f:limonade";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "limonade";
        readonly "skos:notation": "limonade";
    }, {
        readonly "@id": "dfc-f:boissonNonAlcoolise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "boisson non alcoolisée";
        readonly "skos:notation": "boisson_non_alcoolise";
    }, {
        readonly "@id": "dfc-f:softDrink";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "soft drink";
        readonly "skos:notation": "soft_drink";
    }, {
        readonly "@id": "dfc-f:salt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "salt";
        readonly "skos:notation": "salt";
    }, {
        readonly "@id": "dfc-f:sel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sel";
        readonly "skos:notation": "sel";
    }, {
        readonly "@id": "dfc-f:brusselsSprouts";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "brussels sprouts";
        readonly "skos:notation": "brussels_sprouts";
    }, {
        readonly "@id": "dfc-f:chouxDeBruxelles";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "choux de bruxelles";
        readonly "skos:notation": "choux_de_bruxelles";
    }, {
        readonly "@id": "dfc-f:drink";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "drink";
        readonly "skos:notation": "drink";
    }, {
        readonly "@id": "dfc-f:boisson";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "boisson";
        readonly "skos:notation": "boisson";
    }, {
        readonly "@id": "dfc-f:produitLaitier";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "produit laitier";
        readonly "skos:notation": "produit_laitier";
    }, {
        readonly "@id": "dfc-f:dairyProduct";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dairy product";
        readonly "skos:notation": "dairy_product";
    }, {
        readonly "@id": "dfc-f:bakery";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "bakery";
        readonly "skos:notation": "bakery";
    }, {
        readonly "@id": "dfc-f:boulangerie";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "boulangerie";
        readonly "skos:notation": "boulangerie";
    }, {
        readonly "@id": "dfc-f:inedible";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "inedible";
        readonly "skos:notation": "inedible";
    }, {
        readonly "@id": "dfc-f:nonAlimentaire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "non alimentaire";
        readonly "skos:notation": "non_alimentaire";
    }, {
        readonly "@id": "dfc-f:frozen";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "frozen";
        readonly "skos:notation": "frozen";
    }, {
        readonly "@id": "dfc-f:surgel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "surgelé";
        readonly "skos:notation": "surgel";
    }, {
        readonly "@id": "dfc-f:hierloomTomato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "hierloom tomato";
        readonly "skos:notation": "hierloom_tomato";
    }, {
        readonly "@id": "dfc-f:tomateAncienne";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "tomate ancienne";
        readonly "skos:notation": "tomate_ancienne";
    }, {
        readonly "@id": "dfc-f:tomateCerise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "tomate cerise";
        readonly "skos:notation": "tomate_cerise";
    }, {
        readonly "@id": "dfc-f:cherryTomato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cherry tomato";
        readonly "skos:notation": "cherry_tomato";
    }, {
        readonly "@id": "dfc-f:roundTomato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "round tomato";
        readonly "skos:notation": "round_tomato";
    }, {
        readonly "@id": "dfc-f:tomateRonde";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "tomate ronde";
        readonly "skos:notation": "tomate_ronde";
    }, {
        readonly "@id": "dfc-f:tomateEnGrappe";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "tomate en grappe";
        readonly "skos:notation": "tomate_en_grappe";
    }, {
        readonly "@id": "dfc-f:clusterTomato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cluster tomato";
        readonly "skos:notation": "cluster_tomato";
    }, {
        readonly "@id": "dfc-f:shellfish";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "shellfish";
        readonly "skos:notation": "shellfish";
    }, {
        readonly "@id": "dfc-f:crustacs";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "crustacés";
        readonly "skos:notation": "crustacs";
    }, {
        readonly "@id": "dfc-f:fisheryProduct";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fishery product";
        readonly "skos:notation": "fishery_product";
    }, {
        readonly "@id": "dfc-f:produitDeLaPche";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "produit de la pêche";
        readonly "skos:notation": "produit_de_la_pche";
    }, {
        readonly "@id": "dfc-f:viennoiserie";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "viennoiserie";
        readonly "skos:notation": "viennoiserie";
    }, {
        readonly "@id": "dfc-f:flake";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "flake";
        readonly "skos:notation": "flake";
    }, {
        readonly "@id": "dfc-f:flocon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "flocon";
        readonly "skos:notation": "flocon";
    }, {
        readonly "@id": "dfc-f:amande";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "amande";
        readonly "skos:notation": "amande";
    }, {
        readonly "@id": "dfc-f:almond";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "almond";
        readonly "skos:notation": "almond";
    }, {
        readonly "@id": "dfc-f:chestnut";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chestnut";
        readonly "skos:notation": "chestnut";
    }, {
        readonly "@id": "dfc-f:marron";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "marron";
        readonly "skos:notation": "marron";
    }, {
        readonly "@id": "dfc-f:noisette";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "noisette";
        readonly "skos:notation": "noisette";
    }, {
        readonly "@id": "dfc-f:hazelnut";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "hazelnut";
        readonly "skos:notation": "hazelnut";
    }, {
        readonly "@id": "dfc-f:noix";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "noix";
        readonly "skos:notation": "noix";
    }, {
        readonly "@id": "dfc-f:walnut";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "walnut";
        readonly "skos:notation": "walnut";
    }, {
        readonly "@id": "dfc-f:grain";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "grain";
        readonly "skos:notation": "grain";
    }, {
        readonly "@id": "dfc-f:crale";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "céréale";
        readonly "skos:notation": "crale";
    }, {
        readonly "@id": "dfc-f:sheepNaturalYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sheep natural yogurt";
        readonly "skos:notation": "sheep_natural_yogurt";
    }, {
        readonly "@id": "dfc-f:yaourtDeBrebisNature";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yaourt de brebis nature";
        readonly "skos:notation": "yaourt_de_brebis_nature";
    }, {
        readonly "@id": "dfc-f:produitLaitierDeBrebis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "produit laitier de brebis";
        readonly "skos:notation": "produit_laitier_de_brebis";
    }, {
        readonly "@id": "dfc-f:sheepDairyProduct";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sheep dairy product";
        readonly "skos:notation": "sheep_dairy_product";
    }, {
        readonly "@id": "dfc-f:crmeFrache";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "crème fraîche";
        readonly "skos:notation": "crme_frache";
    }, {
        readonly "@id": "dfc-f:freshCream";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fresh cream";
        readonly "skos:notation": "fresh_cream";
    }, {
        readonly "@id": "dfc-f:rocket";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "rocket";
        readonly "skos:notation": "rocket";
    }, {
        readonly "@id": "dfc-f:roquette";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "roquette";
        readonly "skos:notation": "roquette";
    }, {
        readonly "@id": "dfc-f:piePastry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pie pastry";
        readonly "skos:notation": "pie_pastry";
    }, {
        readonly "@id": "dfc-f:pteTarte";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pâte à tarte";
        readonly "skos:notation": "pte__tarte";
    }, {
        readonly "@id": "dfc-f:morel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "morel";
        readonly "skos:notation": "morel";
    }, {
        readonly "@id": "dfc-f:morille";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "morille";
        readonly "skos:notation": "morille";
    }, {
        readonly "@id": "dfc-f:fromageFraisDeChvre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fromage frais de chèvre";
        readonly "skos:notation": "fromage_frais_de_chvre";
    }, {
        readonly "@id": "dfc-f:goatFreshCheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "goat fresh cheese";
        readonly "skos:notation": "goat_fresh_cheese";
    }, {
        readonly "@id": "dfc-f:produitLaitierDeChvre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "produit laitier de chèvre";
        readonly "skos:notation": "produit_laitier_de_chvre";
    }, {
        readonly "@id": "dfc-f:goatDairyProduct";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "goat dairy product";
        readonly "skos:notation": "goat_dairy_product";
    }, {
        readonly "@id": "dfc-f:smoothCabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "smooth cabbage";
        readonly "skos:notation": "smooth_cabbage";
    }, {
        readonly "@id": "dfc-f:chouLisse";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chou lisse";
        readonly "skos:notation": "chou_lisse";
    }, {
        readonly "@id": "dfc-f:veau";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "veau";
        readonly "skos:notation": "veau";
    }, {
        readonly "@id": "dfc-f:veal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "veal";
        readonly "skos:notation": "veal";
    }, {
        readonly "@id": "dfc-f:goatMatureCheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "goat mature cheese";
        readonly "skos:notation": "goat_mature_cheese";
    }, {
        readonly "@id": "dfc-f:fromageDeChvreAffin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fromage de chèvre affiné";
        readonly "skos:notation": "fromage_de_chvre_affin";
    }, {
        readonly "@id": "dfc-f:graine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "graine";
        readonly "skos:notation": "graine";
    }, {
        readonly "@id": "dfc-f:seed";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "seed";
        readonly "skos:notation": "seed";
    }, {
        readonly "@id": "dfc-f:quinoa";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "quinoa";
        readonly "skos:notation": "quinoa";
    }, {
        readonly "@id": "dfc-f:beans";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "beans";
        readonly "skos:notation": "beans";
    }, {
        readonly "@id": "dfc-f:haricots";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "haricots";
        readonly "skos:notation": "haricots";
    }, {
        readonly "@id": "dfc-f:lentilles";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "lentilles";
        readonly "skos:notation": "lentilles";
    }, {
        readonly "@id": "dfc-f:lentils";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "lentils";
        readonly "skos:notation": "lentils";
    }, {
        readonly "@id": "dfc-f:peas";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "peas";
        readonly "skos:notation": "peas";
    }, {
        readonly "@id": "dfc-f:pois";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pois";
        readonly "skos:notation": "pois";
    }, {
        readonly "@id": "dfc-f:viandeBovine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "viande bovine";
        readonly "skos:notation": "viande_bovine";
    }, {
        readonly "@id": "dfc-f:beef";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "beef";
        readonly "skos:notation": "beef";
    }, {
        readonly "@id": "dfc-f:egg";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "egg";
        readonly "skos:notation": "egg";
    }, {
        readonly "@id": "dfc-f:uf";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "œuf";
        readonly "skos:notation": "uf";
    }, {
        readonly "@id": "dfc-f:agneau";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "agneau";
        readonly "skos:notation": "agneau";
    }, {
        readonly "@id": "dfc-f:lamb";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "lamb";
        readonly "skos:notation": "lamb";
    }, {
        readonly "@id": "dfc-f:porc";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "porc";
        readonly "skos:notation": "porc";
    }, {
        readonly "@id": "dfc-f:pork";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pork";
        readonly "skos:notation": "pork";
    }, {
        readonly "@id": "dfc-f:lapin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "lapin";
        readonly "skos:notation": "lapin";
    }, {
        readonly "@id": "dfc-f:rabbit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "rabbit";
        readonly "skos:notation": "rabbit";
    }, {
        readonly "@id": "dfc-f:fromageAffin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fromage affiné";
        readonly "skos:notation": "fromage_affin";
    }, {
        readonly "@id": "dfc-f:matureCheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "mature cheese";
        readonly "skos:notation": "mature_cheese";
    }, {
        readonly "@id": "dfc-f:bluefootMushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "bluefoot mushroom";
        readonly "skos:notation": "bluefoot_mushroom";
    }, {
        readonly "@id": "dfc-f:PiedBleu";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Pied-bleu";
        readonly "skos:notation": "Pied_bleu";
    }, {
        readonly "@id": "dfc-f:cannedVegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "canned vegetable";
        readonly "skos:notation": "canned_vegetable";
    }, {
        readonly "@id": "dfc-f:lgumeEnConserve";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "légume en conserve";
        readonly "skos:notation": "lgume_en_conserve";
    }, {
        readonly "@id": "dfc-f:fromageAffinDeBrebis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fromage affiné de brebis";
        readonly "skos:notation": "fromage_affin_de_brebis";
    }, {
        readonly "@id": "dfc-f:sheepMatureCheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sheep mature cheese";
        readonly "skos:notation": "sheep_mature_cheese";
    }, {
        readonly "@id": "dfc-f:yaourtSucrDeChvre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yaourt sucré de chèvre";
        readonly "skos:notation": "yaourt_sucr_de_chvre";
    }, {
        readonly "@id": "dfc-f:goatSweetYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "goat sweet yogurt";
        readonly "skos:notation": "goat_sweet_yogurt";
    }, {
        readonly "@id": "dfc-f:pastry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pastry";
        readonly "skos:notation": "pastry";
    }, {
        readonly "@id": "dfc-f:ptisserie";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pâtisserie";
        readonly "skos:notation": "ptisserie";
    }, {
        readonly "@id": "dfc-f:chouPomm";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chou pommé";
        readonly "skos:notation": "chou_pomm";
    }, {
        readonly "@id": "dfc-f:savoyCabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "savoy cabbage";
        readonly "skos:notation": "savoy_cabbage";
    }, {
        readonly "@id": "dfc-f:pinards";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "épinards";
        readonly "skos:notation": "pinards";
    }, {
        readonly "@id": "dfc-f:spinach";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "spinach";
        readonly "skos:notation": "spinach";
    }, {
        readonly "@id": "dfc-f:mlangeDeSalades";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "mélange de salades";
        readonly "skos:notation": "mlange_de_salades";
    }, {
        readonly "@id": "dfc-f:saladMix";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "salad mix";
        readonly "skos:notation": "salad_mix";
    }, {
        readonly "@id": "dfc-f:laitue";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "laitue";
        readonly "skos:notation": "laitue";
    }, {
        readonly "@id": "dfc-f:lettuce";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "lettuce";
        readonly "skos:notation": "lettuce";
    }, {
        readonly "@id": "dfc-f:cornSaladlambsLettuce";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "corn salad/lambs lettuce";
        readonly "skos:notation": "corn_saladlambs_lettuce";
    }, {
        readonly "@id": "dfc-f:mche";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "mâche";
        readonly "skos:notation": "mche";
    }, {
        readonly "@id": "dfc-f:chicory";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chicory";
        readonly "skos:notation": "chicory";
    }, {
        readonly "@id": "dfc-f:chicore";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chicorée";
        readonly "skos:notation": "chicore";
    }, {
        readonly "@id": "dfc-f:dandelion";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dandelion";
        readonly "skos:notation": "dandelion";
    }, {
        readonly "@id": "dfc-f:pissenlit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pissenlit";
        readonly "skos:notation": "pissenlit";
    }, {
        readonly "@id": "dfc-f:Purslane";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Purslane";
        readonly "skos:notation": "Purslane";
    }, {
        readonly "@id": "dfc-f:Pourpier";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Pourpier";
        readonly "skos:notation": "Pourpier";
    }, {
        readonly "@id": "dfc-f:mesclun";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "mesclun";
        readonly "skos:notation": "mesclun";
    }, {
        readonly "@id": "dfc-f:cress";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cress";
        readonly "skos:notation": "cress";
    }, {
        readonly "@id": "dfc-f:cresson";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cresson";
        readonly "skos:notation": "cresson";
    }, {
        readonly "@id": "dfc-f:endive";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "endive";
        readonly "skos:notation": "endive";
    }, {
        readonly "@id": "dfc-f:autreProduitLaitier";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "autre produit laitier";
        readonly "skos:notation": "autre_produit_laitier";
    }, {
        readonly "@id": "dfc-f:otherDairyProduct";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "other dairy product";
        readonly "skos:notation": "other_dairy_product";
    }, {
        readonly "@id": "dfc-f:dessertLactDeChvre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dessert lacté de chèvre";
        readonly "skos:notation": "dessert_lact_de_chvre";
    }, {
        readonly "@id": "dfc-f:goatDairyDessert";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "goat dairy dessert";
        readonly "skos:notation": "goat_dairy_dessert";
    }, {
        readonly "@id": "dfc-f:goatFlavoredYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "goat flavored yogurt";
        readonly "skos:notation": "goat_flavored_yogurt";
    }, {
        readonly "@id": "dfc-f:yaourtDeChvreAromatis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yaourt de chèvre aromatisé";
        readonly "skos:notation": "yaourt_de_chvre_aromatis";
    }, {
        readonly "@id": "dfc-f:goatNaturalYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "goat natural yogurt";
        readonly "skos:notation": "goat_natural_yogurt";
    }, {
        readonly "@id": "dfc-f:yaourtNatureDeChvre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yaourt nature de chèvre";
        readonly "skos:notation": "yaourt_nature_de_chvre";
    }, {
        readonly "@id": "dfc-f:yaourtDeChvreAuxFruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yaourt de chèvre aux fruits";
        readonly "skos:notation": "yaourt_de_chvre_aux_fruits";
    }, {
        readonly "@id": "dfc-f:goatYogurtWithFruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "goat yogurt with fruits";
        readonly "skos:notation": "goat_yogurt_with_fruits";
    }, {
        readonly "@id": "dfc-f:goatMilk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "goat milk";
        readonly "skos:notation": "goat_milk";
    }, {
        readonly "@id": "dfc-f:laitDeChvre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "lait de chèvre";
        readonly "skos:notation": "lait_de_chvre";
    }, {
        readonly "@id": "dfc-f:yaourtDeChvreSurLitDeFruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yaourt de chèvre sur lit de fruits";
        readonly "skos:notation": "yaourt_de_chvre_sur_lit_de_fruits";
    }, {
        readonly "@id": "dfc-f:goatYogurtOnABedOfFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "goat yogurt on a bed of fruit";
        readonly "skos:notation": "goat_yogurt_on_a_bed_of_fruit";
    }, {
        readonly "@id": "dfc-f:viandeSurgele";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "viande surgelée";
        readonly "skos:notation": "viande_surgele";
    }, {
        readonly "@id": "dfc-f:frozenMeat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "frozen meat";
        readonly "skos:notation": "frozen_meat";
    }, {
        readonly "@id": "dfc-f:frozenMeal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "frozen meal";
        readonly "skos:notation": "frozen_meal";
    }, {
        readonly "@id": "dfc-f:platSurgel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "plat surgelé";
        readonly "skos:notation": "plat_surgel";
    }, {
        readonly "@id": "dfc-f:bottledVegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "bottled vegetable";
        readonly "skos:notation": "bottled_vegetable";
    }, {
        readonly "@id": "dfc-f:lgumeEnBocal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "légume en bocal";
        readonly "skos:notation": "lgume_en_bocal";
    }, {
        readonly "@id": "dfc-f:biscuit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "biscuit";
        readonly "skos:notation": "biscuit";
    }, {
        readonly "@id": "dfc-f:lactaire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "lactaire";
        readonly "skos:notation": "lactaire";
    }, {
        readonly "@id": "dfc-f:milkyMushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "milky mushroom";
        readonly "skos:notation": "milky_mushroom";
    }, {
        readonly "@id": "dfc-f:frozenVegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "frozen vegetable";
        readonly "skos:notation": "frozen_vegetable";
    }, {
        readonly "@id": "dfc-f:lgumeSurgel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "légume surgelé";
        readonly "skos:notation": "lgume_surgel";
    }, {
        readonly "@id": "dfc-f:fish";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fish";
        readonly "skos:notation": "fish";
    }, {
        readonly "@id": "dfc-f:poisson";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "poisson";
        readonly "skos:notation": "poisson";
    }, {
        readonly "@id": "dfc-f:grillingMeat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "grilling meat";
        readonly "skos:notation": "grilling_meat";
    }, {
        readonly "@id": "dfc-f:viandeGriller";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "viande à griller";
        readonly "skos:notation": "viande__griller";
    }, {
        readonly "@id": "dfc-f:confiserie";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "confiserie";
        readonly "skos:notation": "confiserie";
    }, {
        readonly "@id": "dfc-f:confectionery";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "confectionery";
        readonly "skos:notation": "confectionery";
    }, {
        readonly "@id": "dfc-f:coulemelle";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "coulemelle";
        readonly "skos:notation": "coulemelle";
    }, {
        readonly "@id": "dfc-f:parasolMushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "parasol mushroom";
        readonly "skos:notation": "parasol_mushroom";
    }, {
        readonly "@id": "dfc-f:butternut";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "butternut";
        readonly "skos:notation": "butternut";
    }, {
        readonly "@id": "dfc-f:potiron";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "potiron";
        readonly "skos:notation": "potiron";
    }, {
        readonly "@id": "dfc-f:pumpkin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pumpkin";
        readonly "skos:notation": "pumpkin";
    }, {
        readonly "@id": "dfc-f:hierloomSquash";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "hierloom squash";
        readonly "skos:notation": "hierloom_squash";
    }, {
        readonly "@id": "dfc-f:varitAncienneDeCourge";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "variété ancienne de courge";
        readonly "skos:notation": "varit_ancienne_de_courge";
    }, {
        readonly "@id": "dfc-f:uchikiKuriSquash";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "uchiki kuri squash";
        readonly "skos:notation": "uchiki_kuri_squash";
    }, {
        readonly "@id": "dfc-f:potimarron";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "potimarron";
        readonly "skos:notation": "potimarron";
    }, {
        readonly "@id": "dfc-f:pattypanSquash";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pattypan squash";
        readonly "skos:notation": "pattypan_squash";
    }, {
        readonly "@id": "dfc-f:ptisson";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pâtisson";
        readonly "skos:notation": "ptisson";
    }, {
        readonly "@id": "dfc-f:bread";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "bread";
        readonly "skos:notation": "bread";
    }, {
        readonly "@id": "dfc-f:pain";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pain";
        readonly "skos:notation": "pain";
    }, {
        readonly "@id": "dfc-f:autreFromage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "autre fromage";
        readonly "skos:notation": "autre_fromage";
    }, {
        readonly "@id": "dfc-f:otherCheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "other cheese";
        readonly "skos:notation": "other_cheese";
    }, {
        readonly "@id": "dfc-f:autreLait";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "autre lait";
        readonly "skos:notation": "autre_lait";
    }, {
        readonly "@id": "dfc-f:otherMilk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "other milk";
        readonly "skos:notation": "other_milk";
    }, {
        readonly "@id": "dfc-f:ferment";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "ferment";
        readonly "skos:notation": "ferment";
    }, {
        readonly "@id": "dfc-f:aperitif";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "aperitif";
        readonly "skos:notation": "aperitif";
    }, {
        readonly "@id": "dfc-f:apritif";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "apéritif";
        readonly "skos:notation": "apritif";
    }, {
        readonly "@id": "dfc-f:boissonAlcoolise";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "boisson alcoolisée";
        readonly "skos:notation": "boisson_alcoolise";
    }, {
        readonly "@id": "dfc-f:alcoholicBeverage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "alcoholic beverage";
        readonly "skos:notation": "alcoholic_beverage";
    }, {
        readonly "@id": "dfc-f:snack";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "snack";
        readonly "skos:notation": "snack";
    }, {
        readonly "@id": "dfc-f:cosmetic";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cosmetic";
        readonly "skos:notation": "cosmetic";
    }, {
        readonly "@id": "dfc-f:cosmtique";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cosmétique";
        readonly "skos:notation": "cosmtique";
    }, {
        readonly "@id": "dfc-f:cookedMeat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cooked meat";
        readonly "skos:notation": "cooked_meat";
    }, {
        readonly "@id": "dfc-f:viandeCuite";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "viande cuite";
        readonly "skos:notation": "viande_cuite";
    }, {
        readonly "@id": "dfc-f:charcuterie";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "charcuterie";
        readonly "skos:notation": "charcuterie";
    }, {
        readonly "@id": "dfc-f:delicatessen";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "delicatessen";
        readonly "skos:notation": "delicatessen";
    }, {
        readonly "@id": "dfc-f:viandeFrache";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "viande fraîche";
        readonly "skos:notation": "viande_frache";
    }, {
        readonly "@id": "dfc-f:freshMeat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fresh meat";
        readonly "skos:notation": "fresh_meat";
    }, {
        readonly "@id": "dfc-f:salaison";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "salaison";
        readonly "skos:notation": "salaison";
    }, {
        readonly "@id": "dfc-f:salting";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "salting";
        readonly "skos:notation": "salting";
    }, {
        readonly "@id": "dfc-f:pintade";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pintade";
        readonly "skos:notation": "pintade";
    }, {
        readonly "@id": "dfc-f:guineaFowl";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "guinea fowl";
        readonly "skos:notation": "guinea_fowl";
    }, {
        readonly "@id": "dfc-f:dinde";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dinde";
        readonly "skos:notation": "dinde";
    }, {
        readonly "@id": "dfc-f:turkey";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "turkey";
        readonly "skos:notation": "turkey";
    }, {
        readonly "@id": "dfc-f:oie";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "oie";
        readonly "skos:notation": "oie";
    }, {
        readonly "@id": "dfc-f:goose";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "goose";
        readonly "skos:notation": "goose";
    }, {
        readonly "@id": "dfc-f:canard";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "canard";
        readonly "skos:notation": "canard";
    }, {
        readonly "@id": "dfc-f:duck";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "duck";
        readonly "skos:notation": "duck";
    }, {
        readonly "@id": "dfc-f:festivePoultry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "festive poultry";
        readonly "skos:notation": "festive_poultry";
    }, {
        readonly "@id": "dfc-f:volailleFestive";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "volaille festive";
        readonly "skos:notation": "volaille_festive";
    }, {
        readonly "@id": "dfc-f:pigeon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pigeon";
        readonly "skos:notation": "pigeon";
    }, {
        readonly "@id": "dfc-f:caille";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "caille";
        readonly "skos:notation": "caille";
    }, {
        readonly "@id": "dfc-f:quail";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "quail";
        readonly "skos:notation": "quail";
    }, {
        readonly "@id": "dfc-f:digestive";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "digestive";
        readonly "skos:notation": "digestive";
    }, {
        readonly "@id": "dfc-f:digestif";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "digestif";
        readonly "skos:notation": "digestif";
    }, {
        readonly "@id": "dfc-f:chouRave";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chou-rave";
        readonly "skos:notation": "chou_rave";
    }, {
        readonly "@id": "dfc-f:kohlrabi";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "kohlrabi";
        readonly "skos:notation": "kohlrabi";
    }, {
        readonly "@id": "dfc-f:butter";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "butter";
        readonly "skos:notation": "butter";
    }, {
        readonly "@id": "dfc-f:beurre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "beurre";
        readonly "skos:notation": "beurre";
    }, {
        readonly "@id": "dfc-f:chouRouge";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chou rouge";
        readonly "skos:notation": "chou_rouge";
    }, {
        readonly "@id": "dfc-f:redCabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "red cabbage";
        readonly "skos:notation": "red_cabbage";
    }, {
        readonly "@id": "dfc-f:chouRomanesco";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chou romanesco";
        readonly "skos:notation": "chou_romanesco";
    }, {
        readonly "@id": "dfc-f:romanescoCauliflower";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "romanesco cauliflower";
        readonly "skos:notation": "romanesco_cauliflower";
    }, {
        readonly "@id": "dfc-f:broccoliCabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "broccoli cabbage";
        readonly "skos:notation": "broccoli_cabbage";
    }, {
        readonly "@id": "dfc-f:chouBrocoli";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chou brocoli";
        readonly "skos:notation": "chou_brocoli";
    }, {
        readonly "@id": "dfc-f:chouFris";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chou frisé";
        readonly "skos:notation": "chou_fris";
    }, {
        readonly "@id": "dfc-f:curlyKale";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "curly kale";
        readonly "skos:notation": "curly_kale";
    }, {
        readonly "@id": "dfc-f:chouKale";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chou kale";
        readonly "skos:notation": "chou_kale";
    }, {
        readonly "@id": "dfc-f:kale";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "kale";
        readonly "skos:notation": "kale";
    }, {
        readonly "@id": "dfc-f:chouChinois";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chou chinois";
        readonly "skos:notation": "chou_chinois";
    }, {
        readonly "@id": "dfc-f:chineseCabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chinese cabbage";
        readonly "skos:notation": "chinese_cabbage";
    }, {
        readonly "@id": "dfc-f:honey";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "honey";
        readonly "skos:notation": "honey";
    }, {
        readonly "@id": "dfc-f:miel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "miel";
        readonly "skos:notation": "miel";
    }, {
        readonly "@id": "dfc-f:jam";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "jam";
        readonly "skos:notation": "jam";
    }, {
        readonly "@id": "dfc-f:confiture";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "confiture";
        readonly "skos:notation": "confiture";
    }, {
        readonly "@id": "dfc-f:frozenFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "frozen fruit";
        readonly "skos:notation": "frozen_fruit";
    }, {
        readonly "@id": "dfc-f:fruitSurgel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fruit surgelé";
        readonly "skos:notation": "fruit_surgel";
    }, {
        readonly "@id": "dfc-f:coquillage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "coquillage";
        readonly "skos:notation": "coquillage";
    }, {
        readonly "@id": "dfc-f:seashell";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "seashell";
        readonly "skos:notation": "seashell";
    }, {
        readonly "@id": "dfc-f:cpes";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cèpes";
        readonly "skos:notation": "cpes";
    }, {
        readonly "@id": "dfc-f:porcini";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "porcini";
        readonly "skos:notation": "porcini";
    }, {
        readonly "@id": "dfc-f:fruitJuice";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fruit juice";
        readonly "skos:notation": "fruit_juice";
    }, {
        readonly "@id": "dfc-f:jusDeFruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "jus de fruits";
        readonly "skos:notation": "jus_de_fruits";
    }, {
        readonly "@id": "dfc-f:buttonMushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "button mushroom";
        readonly "skos:notation": "button_mushroom";
    }, {
        readonly "@id": "dfc-f:champignonDeParis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "champignon de Paris";
        readonly "skos:notation": "champignon_de_Paris";
    }, {
        readonly "@id": "dfc-f:girolle";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "girolle";
        readonly "skos:notation": "girolle";
    }, {
        readonly "@id": "dfc-f:girolleMushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "girolle mushroom";
        readonly "skos:notation": "girolle_mushroom";
    }, {
        readonly "@id": "dfc-f:truffe";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "truffe";
        readonly "skos:notation": "truffe";
    }, {
        readonly "@id": "dfc-f:truffle";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "truffle";
        readonly "skos:notation": "truffle";
    }, {
        readonly "@id": "dfc-f:PiedDeMouton";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Pied-de-mouton";
        readonly "skos:notation": "Pied_de_mouton";
    }, {
        readonly "@id": "dfc-f:sheepfootMushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sheepfoot mushroom";
        readonly "skos:notation": "sheepfoot_mushroom";
    }, {
        readonly "@id": "dfc-f:mousseron";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "mousseron";
        readonly "skos:notation": "mousseron";
    }, {
        readonly "@id": "dfc-f:chanterelle";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chanterelle";
        readonly "skos:notation": "chanterelle";
    }, {
        readonly "@id": "dfc-f:chanterelleMushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "chanterelle mushroom";
        readonly "skos:notation": "chanterelle_mushroom";
    }, {
        readonly "@id": "dfc-f:oysterMushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "oyster mushroom";
        readonly "skos:notation": "oyster_mushroom";
    }, {
        readonly "@id": "dfc-f:pleurote";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pleurote";
        readonly "skos:notation": "pleurote";
    }, {
        readonly "@id": "dfc-f:deathsTrumpet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "deaths trumpet";
        readonly "skos:notation": "deaths_trumpet";
    }, {
        readonly "@id": "dfc-f:trompetteDeLaMort";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "trompette de la mort";
        readonly "skos:notation": "trompette_de_la_mort";
    }, {
        readonly "@id": "dfc-f:creamCheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cream cheese";
        readonly "skos:notation": "cream_cheese";
    }, {
        readonly "@id": "dfc-f:fromageBlanc";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fromage blanc";
        readonly "skos:notation": "fromage_blanc";
    }, {
        readonly "@id": "dfc-f:sheepSweetYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sheep sweet yogurt";
        readonly "skos:notation": "sheep_sweet_yogurt";
    }, {
        readonly "@id": "dfc-f:yaourtSucrDeBrebis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yaourt sucré de brebis";
        readonly "skos:notation": "yaourt_sucr_de_brebis";
    }, {
        readonly "@id": "dfc-f:semolina";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "semolina";
        readonly "skos:notation": "semolina";
    }, {
        readonly "@id": "dfc-f:semoule";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "semoule";
        readonly "skos:notation": "semoule";
    }, {
        readonly "@id": "dfc-f:huile";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "huile";
        readonly "skos:notation": "huile";
    }, {
        readonly "@id": "dfc-f:oil";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "oil";
        readonly "skos:notation": "oil";
    }, {
        readonly "@id": "dfc-f:cannedGoods";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "canned goods";
        readonly "skos:notation": "canned_goods";
    }, {
        readonly "@id": "dfc-f:ptes";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pâtes";
        readonly "skos:notation": "ptes";
    }, {
        readonly "@id": "dfc-f:pasta";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pasta";
        readonly "skos:notation": "pasta";
    }, {
        readonly "@id": "dfc-f:rice";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "rice";
        readonly "skos:notation": "rice";
    }, {
        readonly "@id": "dfc-f:riz";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "riz";
        readonly "skos:notation": "riz";
    }, {
        readonly "@id": "dfc-f:yaourtSurLitDeFruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yaourt sur lit de fruits";
        readonly "skos:notation": "yaourt_sur_lit_de_fruits";
    }, {
        readonly "@id": "dfc-f:yogurtOnABedOfFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yogurt on a bed of fruit";
        readonly "skos:notation": "yogurt_on_a_bed_of_fruit";
    }, {
        readonly "@id": "dfc-f:pulse";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pulse";
        readonly "skos:notation": "pulse";
    }, {
        readonly "@id": "dfc-f:sheepDairyDessert";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sheep dairy dessert";
        readonly "skos:notation": "sheep_dairy_dessert";
    }, {
        readonly "@id": "dfc-f:dessertLactDeBrebis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dessert lacté de brebis";
        readonly "skos:notation": "dessert_lact_de_brebis";
    }, {
        readonly "@id": "dfc-f:sheepFlavoredYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sheep flavored yogurt";
        readonly "skos:notation": "sheep_flavored_yogurt";
    }, {
        readonly "@id": "dfc-f:yaourtDeBrebisAromatis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yaourt de brebis aromatisé";
        readonly "skos:notation": "yaourt_de_brebis_aromatis";
    }, {
        readonly "@id": "dfc-f:sheepFreshCheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sheep fresh cheese";
        readonly "skos:notation": "sheep_fresh_cheese";
    }, {
        readonly "@id": "dfc-f:FromageFraisDeBrebis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "Fromage frais de brebis";
        readonly "skos:notation": "Fromage_frais_de_brebis";
    }, {
        readonly "@id": "dfc-f:laitDeBrebis";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "lait de brebis";
        readonly "skos:notation": "lait_de_brebis";
    }, {
        readonly "@id": "dfc-f:sheepMilk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sheep milk";
        readonly "skos:notation": "sheep_milk";
    }, {
        readonly "@id": "dfc-f:sheepYogurtOnABedOfFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sheep yogurt on a bed of fruit";
        readonly "skos:notation": "sheep_yogurt_on_a_bed_of_fruit";
    }, {
        readonly "@id": "dfc-f:yaourtDeBrebisSurLitDeFruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yaourt de brebis sur lit de fruits";
        readonly "skos:notation": "yaourt_de_brebis_sur_lit_de_fruits";
    }, {
        readonly "@id": "dfc-f:sheepYogurtWithFruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sheep yogurt with fruits";
        readonly "skos:notation": "sheep_yogurt_with_fruits";
    }, {
        readonly "@id": "dfc-f:yaourtDeBrebisAuxFruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yaourt de brebis aux fruits";
        readonly "skos:notation": "yaourt_de_brebis_aux_fruits";
    }, {
        readonly "@id": "dfc-f:fruitEnCompote";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fruit en compote";
        readonly "skos:notation": "fruit_en_compote";
    }, {
        readonly "@id": "dfc-f:fruitInCompote";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fruit in compote";
        readonly "skos:notation": "fruit_in_compote";
    }, {
        readonly "@id": "dfc-f:fruitEnBocal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fruit en bocal";
        readonly "skos:notation": "fruit_en_bocal";
    }, {
        readonly "@id": "dfc-f:bottledFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "bottled fruit";
        readonly "skos:notation": "bottled_fruit";
    }, {
        readonly "@id": "dfc-f:cannedFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "canned fruit";
        readonly "skos:notation": "canned_fruit";
    }, {
        readonly "@id": "dfc-f:fruitEnConserve";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fruit en conserve";
        readonly "skos:notation": "fruit_en_conserve";
    }, {
        readonly "@id": "dfc-f:fruitSec";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fruit sec";
        readonly "skos:notation": "fruit_sec";
    }, {
        readonly "@id": "dfc-f:driedFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dried fruit";
        readonly "skos:notation": "dried_fruit";
    }, {
        readonly "@id": "dfc-f:dairyDessert";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dairy dessert";
        readonly "skos:notation": "dairy_dessert";
    }, {
        readonly "@id": "dfc-f:dessertLact";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dessert lacté";
        readonly "skos:notation": "dessert_lact";
    }, {
        readonly "@id": "dfc-f:freshCheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fresh cheese";
        readonly "skos:notation": "fresh_cheese";
    }, {
        readonly "@id": "dfc-f:fromageFrais";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fromage frais";
        readonly "skos:notation": "fromage_frais";
    }, {
        readonly "@id": "dfc-f:lait";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "lait";
        readonly "skos:notation": "lait";
    }, {
        readonly "@id": "dfc-f:milk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "milk";
        readonly "skos:notation": "milk";
    }, {
        readonly "@id": "dfc-f:yaourtNature";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yaourt nature";
        readonly "skos:notation": "yaourt_nature";
    }, {
        readonly "@id": "dfc-f:naturalYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "natural yogurt";
        readonly "skos:notation": "natural_yogurt";
    }, {
        readonly "@id": "dfc-f:yaourtSucr";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yaourt sucré";
        readonly "skos:notation": "yaourt_sucr";
    }, {
        readonly "@id": "dfc-f:sweetYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "sweet yogurt";
        readonly "skos:notation": "sweet_yogurt";
    }, {
        readonly "@id": "dfc-f:yaourtAuxFruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yaourt aux fruits";
        readonly "skos:notation": "yaourt_aux_fruits";
    }, {
        readonly "@id": "dfc-f:yogurtWithFruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "yogurt with fruits";
        readonly "skos:notation": "yogurt_with_fruits";
    }, {
        readonly "@id": "dfc-f:flour";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "flour";
        readonly "skos:notation": "flour";
    }, {
        readonly "@id": "dfc-f:farine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "farine";
        readonly "skos:notation": "farine";
    }, {
        readonly "@id": "dfc-f:flower";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "flower";
        readonly "skos:notation": "flower";
    }, {
        readonly "@id": "dfc-f:fleur";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "fleur";
        readonly "skos:notation": "fleur";
    }, {
        readonly "@id": "dfc-f:plant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "plant";
        readonly "skos:notation": "plant";
    }, {
        readonly "@id": "dfc-f:plante";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "plante";
        readonly "skos:notation": "plante";
    }, {
        readonly "@id": "dfc-f:aromateSec";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "aromate sec";
        readonly "skos:notation": "aromate_sec";
    }, {
        readonly "@id": "dfc-f:driedHerb";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "dried herb";
        readonly "skos:notation": "dried_herb";
    }, {
        readonly "@id": "dfc-f:viandeMijoter";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "viande à mijoter";
        readonly "skos:notation": "viande__mijoter";
    }, {
        readonly "@id": "dfc-f:simmeringMeat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "simmering meat";
        readonly "skos:notation": "simmering_meat";
    }, {
        readonly "@id": "dfc-f:wine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "wine";
        readonly "skos:notation": "wine";
    }, {
        readonly "@id": "dfc-f:vin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "vin";
        readonly "skos:notation": "vin";
    }, {
        readonly "@id": "dfc-f:beer";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "beer";
        readonly "skos:notation": "beer";
    }, {
        readonly "@id": "dfc-f:bire";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "bière";
        readonly "skos:notation": "bire";
    }, {
        readonly "@id": "dfc-f:smoothie";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "smoothie";
        readonly "skos:notation": "smoothie";
    }, {
        readonly "@id": "dfc-f:cider";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cider";
        readonly "skos:notation": "cider";
    }, {
        readonly "@id": "dfc-f:cidre";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "cidre";
        readonly "skos:notation": "cidre";
    }];
};
export default _default;
