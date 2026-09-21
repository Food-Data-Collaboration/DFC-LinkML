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
        readonly "@id": "dfc-pt:AlcoholicBeverage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "alcoholic beverage";
            readonly "@language": "en";
        }, {
            readonly "@value": "boisson alcoolisée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "AlcoholicBeverage";
        readonly "skos:broader": readonly ["dfc-pt:Drink"];
    }, {
        readonly "@id": "dfc-pt:Almond";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "almond";
            readonly "@language": "en";
        }, {
            readonly "@value": "amande";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Almond";
        readonly "skos:broader": readonly ["dfc-pt:Nut"];
    }, {
        readonly "@id": "dfc-pt:Aperitif";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "aperitif";
            readonly "@language": "en";
        }, {
            readonly "@value": "apéritif";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Aperitif";
        readonly "skos:broader": readonly ["dfc-pt:AlcoholicBeverage"];
    }, {
        readonly "@id": "dfc-pt:Apples";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "apples";
            readonly "@language": "en";
        }, {
            readonly "@value": "pomme";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Apples";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:Apricot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "apricot";
            readonly "@language": "en";
        }, {
            readonly "@value": "abricot";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Apricot";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:Artichoke";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "artichoke";
            readonly "@language": "en";
        }, {
            readonly "@value": "artichaut";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Artichoke";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Asparagus";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "asparagus";
            readonly "@language": "en";
        }, {
            readonly "@value": "asperges";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Asparagus";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Bakery";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bakery";
            readonly "@language": "en";
        }, {
            readonly "@value": "boulangerie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Bakery";
    }, {
        readonly "@id": "dfc-pt:Basil";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "basil";
            readonly "@language": "en";
        }, {
            readonly "@value": "basilic";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Basil";
        readonly "skos:broader": readonly ["dfc-pt:Herb", "dfc-pt:aromatic"];
    }, {
        readonly "@id": "dfc-pt:Bean";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bean";
            readonly "@language": "en";
        }, {
            readonly "@value": "haricot";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Bean";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Beans";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "beans";
            readonly "@language": "en";
        }, {
            readonly "@value": "haricots";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Beans";
        readonly "skos:broader": readonly ["dfc-pt:DriedVegetable"];
    }, {
        readonly "@id": "dfc-pt:Beef";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "beef";
            readonly "@language": "en";
        }, {
            readonly "@value": "viande bovine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Beef";
        readonly "skos:broader": readonly ["dfc-pt:MeatProduct"];
    }, {
        readonly "@id": "dfc-pt:Beer";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "beer";
            readonly "@language": "en";
        }, {
            readonly "@value": "bière";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Beer";
        readonly "skos:broader": readonly ["dfc-pt:AlcoholicBeverage"];
    }, {
        readonly "@id": "dfc-pt:Beetroot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "beetroot";
            readonly "@language": "en";
        }, {
            readonly "@value": "betterave rouge";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Beetroot";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Berry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "berry";
            readonly "@language": "en";
        }, {
            readonly "@value": "petit fruit";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Berry";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:Biscuit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "biscuit";
            readonly "@language": "en";
        }, {
            readonly "@value": "biscuit";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Biscuit";
        readonly "skos:broader": readonly ["dfc-pt:SweetGroceries"];
    }, {
        readonly "@id": "dfc-pt:Blackberry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "blackberry";
            readonly "@language": "en";
        }, {
            readonly "@value": "mûre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Blackberry";
        readonly "skos:broader": readonly ["dfc-pt:Berry"];
    }, {
        readonly "@id": "dfc-pt:Blackcurrant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "blackcurrant";
            readonly "@language": "en";
        }, {
            readonly "@value": "cassis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Blackcurrant";
        readonly "skos:broader": readonly ["dfc-pt:Berry"];
    }, {
        readonly "@id": "dfc-pt:Blueberry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "blueberry";
            readonly "@language": "en";
        }, {
            readonly "@value": "myrtille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Blueberry";
        readonly "skos:broader": readonly ["dfc-pt:Berry"];
    }, {
        readonly "@id": "dfc-pt:BluefootMushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bluefoot mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "Pied-bleu";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "BluefootMushroom";
        readonly "skos:broader": readonly ["dfc-pt:Mushroom"];
    }, {
        readonly "@id": "dfc-pt:BottledFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bottled fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruit en bocal";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "BottledFruit";
        readonly "skos:broader": readonly ["dfc-pt:ProcessedFruit"];
    }, {
        readonly "@id": "dfc-pt:BottledVegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bottled vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume en bocal";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "BottledVegetable";
        readonly "skos:broader": readonly ["dfc-pt:ProcessedVegetable"];
    }, {
        readonly "@id": "dfc-pt:Bread";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bread";
            readonly "@language": "en";
        }, {
            readonly "@value": "pain";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Bread";
        readonly "skos:broader": readonly ["dfc-pt:Bakery"];
    }, {
        readonly "@id": "dfc-pt:BroccoliCabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "broccoli cabbage";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou brocoli";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "BroccoliCabbage";
        readonly "skos:broader": readonly ["dfc-pt:Cabbage"];
    }, {
        readonly "@id": "dfc-pt:BrusselsSprouts";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "brussels sprouts";
            readonly "@language": "en";
        }, {
            readonly "@value": "choux de bruxelles";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "BrusselsSprouts";
        readonly "skos:broader": readonly ["dfc-pt:Cabbage"];
    }, {
        readonly "@id": "dfc-pt:Butter";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "butter";
            readonly "@language": "en";
        }, {
            readonly "@value": "beurre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Butter";
        readonly "skos:broader": readonly ["dfc-pt:CowDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:Butternut";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "butternut";
            readonly "@language": "en";
        }, {
            readonly "@value": "butternut";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Butternut";
        readonly "skos:broader": readonly ["dfc-pt:Squash"];
    }, {
        readonly "@id": "dfc-pt:Cabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cabbage";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Cabbage";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:CannedFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "canned fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruit en conserve";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "CannedFruit";
        readonly "skos:broader": readonly ["dfc-pt:ProcessedFruit"];
    }, {
        readonly "@id": "dfc-pt:CannedGoods";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "canned goods";
        readonly "skos:notation": "CannedGoods";
        readonly "skos:broader": readonly ["dfc-pt:SavoryGroceries"];
    }, {
        readonly "@id": "dfc-pt:CannedVegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "canned vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume en conserve";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "CannedVegetable";
        readonly "skos:broader": readonly ["dfc-pt:ProcessedVegetable"];
    }, {
        readonly "@id": "dfc-pt:Carrot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "carrot";
            readonly "@language": "en";
        }, {
            readonly "@value": "carotte";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Carrot";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Cauliflower";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cauliflower";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou-fleur";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Cauliflower";
        readonly "skos:broader": readonly ["dfc-pt:Cabbage"];
    }, {
        readonly "@id": "dfc-pt:Celeriac";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "celeriac";
            readonly "@language": "en";
        }, {
            readonly "@value": "céleri-rave";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Celeriac";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:CeleryBranch";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "celery branch";
            readonly "@language": "en";
        }, {
            readonly "@value": "céleri branche";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "CeleryBranch";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:ChanterelleMushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chanterelle mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "chanterelle";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ChanterelleMushroom";
        readonly "skos:broader": readonly ["dfc-pt:Mushroom"];
    }, {
        readonly "@id": "dfc-pt:Chard";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chard";
            readonly "@language": "en";
        }, {
            readonly "@value": "blettes";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Chard";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Cherry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cherry";
            readonly "@language": "en";
        }, {
            readonly "@value": "cerise";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Cherry";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:CherryTomato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cherry tomato";
            readonly "@language": "en";
        }, {
            readonly "@value": "tomate cerise";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "CherryTomato";
        readonly "skos:broader": readonly ["dfc-pt:Tomato"];
    }, {
        readonly "@id": "dfc-pt:Chervil";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chervil";
            readonly "@language": "en";
        }, {
            readonly "@value": "cerfeuil";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Chervil";
        readonly "skos:broader": readonly ["dfc-pt:Herb", "dfc-pt:aromatic"];
    }, {
        readonly "@id": "dfc-pt:Chestnut";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chestnut";
            readonly "@language": "en";
        }, {
            readonly "@value": "marron";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Chestnut";
        readonly "skos:broader": readonly ["dfc-pt:Nut"];
    }, {
        readonly "@id": "dfc-pt:Chicken";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chicken";
            readonly "@language": "en";
        }, {
            readonly "@value": "poulet";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Chicken";
        readonly "skos:broader": readonly ["dfc-pt:Poultry"];
    }, {
        readonly "@id": "dfc-pt:Chicory";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chicory";
            readonly "@language": "en";
        }, {
            readonly "@value": "chicorée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Chicory";
        readonly "skos:broader": readonly ["dfc-pt:Salad"];
    }, {
        readonly "@id": "dfc-pt:ChilliPepper";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chilli pepper";
            readonly "@language": "en";
        }, {
            readonly "@value": "piment";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ChilliPepper";
        readonly "skos:broader": readonly ["dfc-pt:Herb", "dfc-pt:aromatic"];
    }, {
        readonly "@id": "dfc-pt:ChineseCabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chinese cabbage";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou chinois";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ChineseCabbage";
        readonly "skos:broader": readonly ["dfc-pt:Cabbage"];
    }, {
        readonly "@id": "dfc-pt:Chive";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chive";
            readonly "@language": "en";
        }, {
            readonly "@value": "ciboulette";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Chive";
        readonly "skos:broader": readonly ["dfc-pt:Herb", "dfc-pt:aromatic"];
    }, {
        readonly "@id": "dfc-pt:Cider";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cider";
            readonly "@language": "en";
        }, {
            readonly "@value": "cidre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Cider";
        readonly "skos:broader": readonly ["dfc-pt:AlcoholicBeverage"];
    }, {
        readonly "@id": "dfc-pt:Clementine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "clementine";
            readonly "@language": "en";
        }, {
            readonly "@value": "clémentine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Clementine";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:ClusterTomato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cluster tomato";
            readonly "@language": "en";
        }, {
            readonly "@value": "tomate en grappe";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ClusterTomato";
        readonly "skos:broader": readonly ["dfc-pt:Tomato"];
    }, {
        readonly "@id": "dfc-pt:Confectionery";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "confectionery";
            readonly "@language": "en";
        }, {
            readonly "@value": "confiserie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Confectionery";
        readonly "skos:broader": readonly ["dfc-pt:SweetGroceries"];
    }, {
        readonly "@id": "dfc-pt:CookedMeat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cooked meat";
            readonly "@language": "en";
        }, {
            readonly "@value": "viande cuite";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "CookedMeat";
        readonly "skos:broader": readonly ["dfc-pt:Pork"];
    }, {
        readonly "@id": "dfc-pt:Coriander";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "coriander";
            readonly "@language": "en";
        }, {
            readonly "@value": "coriandre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Coriander";
        readonly "skos:broader": readonly ["dfc-pt:Herb", "dfc-pt:aromatic"];
    }, {
        readonly "@id": "dfc-pt:CornSalad";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "corn salad/lambs lettuce";
            readonly "@language": "en";
        }, {
            readonly "@value": "mâche";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "CornSalad";
        readonly "skos:broader": readonly ["dfc-pt:Salad"];
    }, {
        readonly "@id": "dfc-pt:Cosmetic";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cosmetic";
            readonly "@language": "en";
        }, {
            readonly "@value": "cosmétique";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Cosmetic";
        readonly "skos:broader": readonly ["dfc-pt:Inedible"];
    }, {
        readonly "@id": "dfc-pt:CoulemelleMushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "parasol mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "coulemelle";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "CoulemelleMushroom";
        readonly "skos:broader": readonly ["dfc-pt:Mushroom"];
    }, {
        readonly "@id": "dfc-pt:Courgette";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "courgette";
            readonly "@language": "en";
        }, {
            readonly "@value": "courgette";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Courgette";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:CowDairyProduct";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cow dairy product";
            readonly "@language": "en";
        }, {
            readonly "@value": "produit laitier de vache";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "CowDairyProduct";
        readonly "skos:broader": readonly ["dfc-pt:DairyProduct"];
    }, {
        readonly "@id": "dfc-pt:CreamCheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cream cheese";
            readonly "@language": "en";
        }, {
            readonly "@value": "fromage blanc";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "CreamCheese";
        readonly "skos:broader": readonly ["dfc-pt:CowDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:CrepeAndGalette";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "crepe and galette";
            readonly "@language": "en";
        }, {
            readonly "@value": "crêpe et galette";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "CrepeAndGalette";
        readonly "skos:broader": readonly ["dfc-pt:SavoryGroceries"];
    }, {
        readonly "@id": "dfc-pt:Cress";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cress";
            readonly "@language": "en";
        }, {
            readonly "@value": "cresson";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Cress";
        readonly "skos:broader": readonly ["dfc-pt:Salad"];
    }, {
        readonly "@id": "dfc-pt:Cucumber";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cucumber";
            readonly "@language": "en";
        }, {
            readonly "@value": "concombre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Cucumber";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Currant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "currant";
            readonly "@language": "en";
        }, {
            readonly "@value": "groseille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Currant";
        readonly "skos:broader": readonly ["dfc-pt:Berry"];
    }, {
        readonly "@id": "dfc-pt:DairyDessert";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dairy dessert";
            readonly "@language": "en";
        }, {
            readonly "@value": "dessert lacté";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "DairyDessert";
        readonly "skos:broader": readonly ["dfc-pt:CowDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:DairyProduct";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dairy product";
            readonly "@language": "en";
        }, {
            readonly "@value": "produit laitier";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "DairyProduct";
    }, {
        readonly "@id": "dfc-pt:Dandelion";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dandelion";
            readonly "@language": "en";
        }, {
            readonly "@value": "pissenlit";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Dandelion";
        readonly "skos:broader": readonly ["dfc-pt:Salad"];
    }, {
        readonly "@id": "dfc-pt:DeathsTrumpet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "deaths trumpet";
            readonly "@language": "en";
        }, {
            readonly "@value": "trompette de la mort";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "DeathsTrumpet";
        readonly "skos:broader": readonly ["dfc-pt:Mushroom"];
    }, {
        readonly "@id": "dfc-pt:Delicatessen";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "delicatessen";
            readonly "@language": "en";
        }, {
            readonly "@value": "charcuterie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Delicatessen";
        readonly "skos:broader": readonly ["dfc-pt:Pork"];
    }, {
        readonly "@id": "dfc-pt:Digestive";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "digestive";
            readonly "@language": "en";
        }, {
            readonly "@value": "digestif";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Digestive";
        readonly "skos:broader": readonly ["dfc-pt:AlcoholicBeverage"];
    }, {
        readonly "@id": "dfc-pt:Dill";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dill";
            readonly "@language": "en";
        }, {
            readonly "@value": "aneth";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Dill";
        readonly "skos:broader": readonly ["dfc-pt:Herb", "dfc-pt:aromatic"];
    }, {
        readonly "@id": "dfc-pt:DriedFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dried fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruit sec";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "DriedFruit";
        readonly "skos:broader": readonly ["dfc-pt:ProcessedFruit"];
    }, {
        readonly "@id": "dfc-pt:DriedGoods";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dried goods";
            readonly "@language": "en";
        }, {
            readonly "@value": "produits sec";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "DriedGoods";
        readonly "skos:broader": readonly ["dfc-pt:LocalGroceryStore"];
    }, {
        readonly "@id": "dfc-pt:DriedHerb";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dried herb";
            readonly "@language": "en";
        }, {
            readonly "@value": "aromate sec";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "DriedHerb";
        readonly "skos:broader": readonly ["dfc-pt:DriedGoods"];
    }, {
        readonly "@id": "dfc-pt:DriedVegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dried vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume sec";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "DriedVegetable";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Drink";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "drink";
            readonly "@language": "en";
        }, {
            readonly "@value": "boisson";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Drink";
    }, {
        readonly "@id": "dfc-pt:Duck";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "duck";
            readonly "@language": "en";
        }, {
            readonly "@value": "canard";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Duck";
        readonly "skos:broader": readonly ["dfc-pt:Poultry"];
    }, {
        readonly "@id": "dfc-pt:Egg";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "egg";
            readonly "@language": "en";
        }, {
            readonly "@value": "œuf";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Egg";
        readonly "skos:broader": readonly ["dfc-pt:MeatProduct"];
    }, {
        readonly "@id": "dfc-pt:Eggplant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "eggplant";
            readonly "@language": "en";
        }, {
            readonly "@value": "aubergine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Eggplant";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Endive";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "endive";
            readonly "@language": "en";
        }, {
            readonly "@value": "endive";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Endive";
        readonly "skos:broader": readonly ["dfc-pt:Salad"];
    }, {
        readonly "@id": "dfc-pt:Fennel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fennel";
            readonly "@language": "en";
        }, {
            readonly "@value": "fenouil";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Fennel";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Ferment";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "ferment";
        readonly "skos:notation": "Ferment";
        readonly "skos:broader": readonly ["dfc-pt:SavoryGroceries"];
    }, {
        readonly "@id": "dfc-pt:FestivePoultry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "festive poultry";
            readonly "@language": "en";
        }, {
            readonly "@value": "volaille festive";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FestivePoultry";
        readonly "skos:broader": readonly ["dfc-pt:Poultry"];
    }, {
        readonly "@id": "dfc-pt:FifthRangeVegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fifth range vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume de cinquième gamme";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FifthRangeVegetable";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Fig";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fig";
            readonly "@language": "en";
        }, {
            readonly "@value": "figue";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Fig";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:Fish";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fish";
            readonly "@language": "en";
        }, {
            readonly "@value": "poisson";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Fish";
        readonly "skos:broader": readonly ["dfc-pt:FisheryProduct"];
    }, {
        readonly "@id": "dfc-pt:FisheryProduct";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fishery product";
            readonly "@language": "en";
        }, {
            readonly "@value": "produit de la pêche";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FisheryProduct";
        readonly "skos:broader": readonly ["dfc-pt:MeatProduct"];
    }, {
        readonly "@id": "dfc-pt:Flake";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "flake";
            readonly "@language": "en";
        }, {
            readonly "@value": "flocon";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Flake";
        readonly "skos:broader": readonly ["dfc-pt:DriedGoods"];
    }, {
        readonly "@id": "dfc-pt:FlavoredYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "flavored yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt aromatisé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FlavoredYogurt";
        readonly "skos:broader": readonly ["dfc-pt:CowDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:Flour";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "flour";
            readonly "@language": "en";
        }, {
            readonly "@value": "farine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Flour";
        readonly "skos:broader": readonly ["dfc-pt:DriedGoods"];
    }, {
        readonly "@id": "dfc-pt:Flower";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "flower";
            readonly "@language": "en";
        }, {
            readonly "@value": "fleur";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Flower";
        readonly "skos:broader": readonly ["dfc-pt:Inedible"];
    }, {
        readonly "@id": "dfc-pt:FourthRangeVegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fourth range vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume de quatrième gamme";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FourthRangeVegetable";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:FreshCheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fresh cheese";
            readonly "@language": "en";
        }, {
            readonly "@value": "fromage frais";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FreshCheese";
        readonly "skos:broader": readonly ["dfc-pt:CowDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:FreshCream";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fresh cream";
            readonly "@language": "en";
        }, {
            readonly "@value": "crème fraîche";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FreshCream";
        readonly "skos:broader": readonly ["dfc-pt:CowDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:FreshMeat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fresh meat";
            readonly "@language": "en";
        }, {
            readonly "@value": "viande fraîche";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FreshMeat";
        readonly "skos:broader": readonly ["dfc-pt:Pork"];
    }, {
        readonly "@id": "dfc-pt:Frozen";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "frozen";
            readonly "@language": "en";
        }, {
            readonly "@value": "surgelé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Frozen";
    }, {
        readonly "@id": "dfc-pt:FrozenFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "frozen fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruit surgelé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FrozenFruit";
        readonly "skos:broader": readonly ["dfc-pt:Frozen"];
    }, {
        readonly "@id": "dfc-pt:FrozenMeal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "frozen meal";
            readonly "@language": "en";
        }, {
            readonly "@value": "plat surgelé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FrozenMeal";
        readonly "skos:broader": readonly ["dfc-pt:Frozen"];
    }, {
        readonly "@id": "dfc-pt:FrozenMeat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "frozen meat";
            readonly "@language": "en";
        }, {
            readonly "@value": "viande surgelée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FrozenMeat";
        readonly "skos:broader": readonly ["dfc-pt:Frozen"];
    }, {
        readonly "@id": "dfc-pt:FrozenVegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "frozen vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume surgelé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FrozenVegetable";
        readonly "skos:broader": readonly ["dfc-pt:Frozen"];
    }, {
        readonly "@id": "dfc-pt:Fruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruits";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Fruit";
    }, {
        readonly "@id": "dfc-pt:FruitInCompote";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fruit in compote";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruit en compote";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FruitInCompote";
        readonly "skos:broader": readonly ["dfc-pt:ProcessedFruit"];
    }, {
        readonly "@id": "dfc-pt:FruitJuice";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fruit juice";
            readonly "@language": "en";
        }, {
            readonly "@value": "jus de fruits";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "FruitJuice";
        readonly "skos:broader": readonly ["dfc-pt:SoftDrink"];
    }, {
        readonly "@id": "dfc-pt:Garlic";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "garlic";
            readonly "@language": "en";
        }, {
            readonly "@value": "ail";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Garlic";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:GirolleMushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "girolle mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "girolle";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GirolleMushroom";
        readonly "skos:broader": readonly ["dfc-pt:Mushroom"];
    }, {
        readonly "@id": "dfc-pt:GoatDairyDessert";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat dairy dessert";
            readonly "@language": "en";
        }, {
            readonly "@value": "dessert lacté de chèvre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GoatDairyDessert";
        readonly "skos:broader": readonly ["dfc-pt:GoatDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:GoatDairyProduct";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat dairy product";
            readonly "@language": "en";
        }, {
            readonly "@value": "produit laitier de chèvre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GoatDairyProduct";
        readonly "skos:broader": readonly ["dfc-pt:DairyProduct"];
    }, {
        readonly "@id": "dfc-pt:GoatFlavoredYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat flavored yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt de chèvre aromatisé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GoatFlavoredYogurt";
        readonly "skos:broader": readonly ["dfc-pt:GoatDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:GoatFreshCheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat fresh cheese";
            readonly "@language": "en";
        }, {
            readonly "@value": "fromage frais de chèvre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GoatFreshCheese";
        readonly "skos:broader": readonly ["dfc-pt:GoatDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:GoatMatureCheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat mature cheese";
            readonly "@language": "en";
        }, {
            readonly "@value": "fromage de chèvre affiné";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GoatMatureCheese";
        readonly "skos:broader": readonly ["dfc-pt:GoatDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:GoatMilk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat milk";
            readonly "@language": "en";
        }, {
            readonly "@value": "lait de chèvre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GoatMilk";
        readonly "skos:broader": readonly ["dfc-pt:GoatDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:GoatNaturalYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat natural yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt nature de chèvre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GoatNaturalYogurt";
        readonly "skos:broader": readonly ["dfc-pt:GoatDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:GoatSweetYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat sweet yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt sucré de chèvre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GoatSweetYogurt";
        readonly "skos:broader": readonly ["dfc-pt:GoatDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:GoatYogurtOnABedOfFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat yogurt on a bed of fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt de chèvre sur lit de fruits";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GoatYogurtOnABedOfFruit";
        readonly "skos:broader": readonly ["dfc-pt:GoatDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:GoatYogurtWithFruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat yogurt with fruits";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt de chèvre aux fruits";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GoatYogurtWithFruits";
        readonly "skos:broader": readonly ["dfc-pt:GoatDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:Goose";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goose";
            readonly "@language": "en";
        }, {
            readonly "@value": "oie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Goose";
        readonly "skos:broader": readonly ["dfc-pt:Poultry"];
    }, {
        readonly "@id": "dfc-pt:Gooseberry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "gooseberry";
            readonly "@language": "en";
        }, {
            readonly "@value": "groseille à maquereau";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Gooseberry";
        readonly "skos:broader": readonly ["dfc-pt:Berry"];
    }, {
        readonly "@id": "dfc-pt:Grain";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "grain";
            readonly "@language": "en";
        }, {
            readonly "@value": "céréale";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Grain";
        readonly "skos:broader": readonly ["dfc-pt:DriedGoods", "dfc-pt:SavoryGroceries"];
    }, {
        readonly "@id": "dfc-pt:Grape";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "grape";
            readonly "@language": "en";
        }, {
            readonly "@value": "raisin";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Grape";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:GreenGarlic";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "green garlic";
            readonly "@language": "en";
        }, {
            readonly "@value": "aillet";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GreenGarlic";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:GrillingMeat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "grilling meat";
            readonly "@language": "en";
        }, {
            readonly "@value": "viande à griller";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GrillingMeat";
        readonly "skos:broader": readonly ["dfc-pt:Beef"];
    }, {
        readonly "@id": "dfc-pt:GuineaFowl";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "guinea fowl";
            readonly "@language": "en";
        }, {
            readonly "@value": "pintade";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "GuineaFowl";
        readonly "skos:broader": readonly ["dfc-pt:Poultry"];
    }, {
        readonly "@id": "dfc-pt:Hazelnut";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "hazelnut";
            readonly "@language": "en";
        }, {
            readonly "@value": "noisette";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Hazelnut";
        readonly "skos:broader": readonly ["dfc-pt:Nut"];
    }, {
        readonly "@id": "dfc-pt:Herb";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "herb";
            readonly "@language": "en";
        }, {
            readonly "@value": "aromate";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Herb";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:HierloomSquash";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "hierloom squash";
            readonly "@language": "en";
        }, {
            readonly "@value": "variété ancienne de courge";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "HierloomSquash";
        readonly "skos:broader": readonly ["dfc-pt:Squash"];
    }, {
        readonly "@id": "dfc-pt:HierloomTomato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "hierloom tomato";
            readonly "@language": "en";
        }, {
            readonly "@value": "tomate ancienne";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "HierloomTomato";
        readonly "skos:broader": readonly ["dfc-pt:Tomato"];
    }, {
        readonly "@id": "dfc-pt:Honey";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "honey";
            readonly "@language": "en";
        }, {
            readonly "@value": "miel";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Honey";
        readonly "skos:broader": readonly ["dfc-pt:SweetGroceries"];
    }, {
        readonly "@id": "dfc-pt:Inedible";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "inedible";
            readonly "@language": "en";
        }, {
            readonly "@value": "non alimentaire";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Inedible";
    }, {
        readonly "@id": "dfc-pt:Jam";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "jam";
            readonly "@language": "en";
        }, {
            readonly "@value": "confiture";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Jam";
        readonly "skos:broader": readonly ["dfc-pt:SweetGroceries"];
    }, {
        readonly "@id": "dfc-pt:JerusalemArtichoke";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "jerusalem artichoke";
            readonly "@language": "en";
        }, {
            readonly "@value": "topinambour";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "JerusalemArtichoke";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Kale";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "curly kale";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou frisé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Kale";
        readonly "skos:broader": readonly ["dfc-pt:Cabbage"];
    }, {
        readonly "@id": "dfc-pt:KaleCabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "kale";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou kale";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "KaleCabbage";
        readonly "skos:broader": readonly ["dfc-pt:Cabbage"];
    }, {
        readonly "@id": "dfc-pt:Kiwi";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "kiwi";
            readonly "@language": "en";
        }, {
            readonly "@value": "kiwi";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Kiwi";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:Kohlrabi";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "kohlrabi";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou-rave";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Kohlrabi";
        readonly "skos:broader": readonly ["dfc-pt:Cabbage"];
    }, {
        readonly "@id": "dfc-pt:Lamb";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "lamb";
            readonly "@language": "en";
        }, {
            readonly "@value": "agneau";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Lamb";
        readonly "skos:broader": readonly ["dfc-pt:MeatProduct"];
    }, {
        readonly "@id": "dfc-pt:Laurel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bay laurel";
            readonly "@language": "en";
        }, {
            readonly "@value": "laurier";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Laurel";
        readonly "skos:broader": readonly ["dfc-pt:Herb", "dfc-pt:aromatic"];
    }, {
        readonly "@id": "dfc-pt:Leek";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "leek";
            readonly "@language": "en";
        }, {
            readonly "@value": "poireau";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Leek";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Lemon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "lemon";
            readonly "@language": "en";
        }, {
            readonly "@value": "citron";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Lemon";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:Lemonade";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "lemonade";
            readonly "@language": "en";
        }, {
            readonly "@value": "limonade";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Lemonade";
        readonly "skos:broader": readonly ["dfc-pt:SoftDrink"];
    }, {
        readonly "@id": "dfc-pt:Lentils";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "lentils";
            readonly "@language": "en";
        }, {
            readonly "@value": "lentilles";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Lentils";
        readonly "skos:broader": readonly ["dfc-pt:DriedVegetable"];
    }, {
        readonly "@id": "dfc-pt:Lettuce";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "lettuce";
            readonly "@language": "en";
        }, {
            readonly "@value": "laitue";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Lettuce";
        readonly "skos:broader": readonly ["dfc-pt:Salad"];
    }, {
        readonly "@id": "dfc-pt:LocalGroceryStore";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "local grocery store";
            readonly "@language": "en";
        }, {
            readonly "@value": "épicerie locale";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "LocalGroceryStore";
    }, {
        readonly "@id": "dfc-pt:Mandarin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "mandarin";
            readonly "@language": "en";
        }, {
            readonly "@value": "mandarine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Mandarin";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:MatureCheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "mature cheese";
            readonly "@language": "en";
        }, {
            readonly "@value": "fromage affiné";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "MatureCheese";
        readonly "skos:broader": readonly ["dfc-pt:CowDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:MeatProduct";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "meat product";
            readonly "@language": "en";
        }, {
            readonly "@value": "produit carné";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "MeatProduct";
    }, {
        readonly "@id": "dfc-pt:Medlar";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "medlar";
            readonly "@language": "en";
        }, {
            readonly "@value": "nèfle";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Medlar";
        readonly "skos:broader": readonly ["dfc-pt:Fruit", "dfc-pt:Nut"];
    }, {
        readonly "@id": "dfc-pt:Melon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "melon";
            readonly "@language": "en";
        }, {
            readonly "@value": "melon";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Melon";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Mesclun";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "mesclun";
            readonly "@language": "en";
        }, {
            readonly "@value": "mesclun";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Mesclun";
        readonly "skos:broader": readonly ["dfc-pt:Salad"];
    }, {
        readonly "@id": "dfc-pt:Milk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "milk";
            readonly "@language": "en";
        }, {
            readonly "@value": "lait";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Milk";
        readonly "skos:broader": readonly ["dfc-pt:CowDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:MilkyMushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "milky mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "lactaire";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "MilkyMushroom";
        readonly "skos:broader": readonly ["dfc-pt:Mushroom"];
    }, {
        readonly "@id": "dfc-pt:Mint";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "mint";
            readonly "@language": "en";
        }, {
            readonly "@value": "menthe";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Mint";
        readonly "skos:broader": readonly ["dfc-pt:Herb", "dfc-pt:aromatic"];
    }, {
        readonly "@id": "dfc-pt:Morel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "morel";
            readonly "@language": "en";
        }, {
            readonly "@value": "morille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Morel";
        readonly "skos:broader": readonly ["dfc-pt:Mushroom"];
    }, {
        readonly "@id": "dfc-pt:Mousseron";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "mousseron";
            readonly "@language": "en";
        }, {
            readonly "@value": "mousseron";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Mousseron";
        readonly "skos:broader": readonly ["dfc-pt:Mushroom"];
    }, {
        readonly "@id": "dfc-pt:Mushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "champignon";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Mushroom";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:NaturalYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "natural yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt nature";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "NaturalYogurt";
        readonly "skos:broader": readonly ["dfc-pt:CowDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:Nectarine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "nectarine";
            readonly "@language": "en";
        }, {
            readonly "@value": "nectarine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Nectarine";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:NonLocalFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "non local fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruit non local";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "NonLocalFruit";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:NonLocalVegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "non local vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume non local";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "NonLocalVegetable";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Nut";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "nut";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruit à coque";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Nut";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:Oil";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "oil";
            readonly "@language": "en";
        }, {
            readonly "@value": "huile";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Oil";
        readonly "skos:broader": readonly ["dfc-pt:SavoryGroceries"];
    }, {
        readonly "@id": "dfc-pt:Onion";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "onion";
            readonly "@language": "en";
        }, {
            readonly "@value": "oignon";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Onion";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Orange";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "orange";
            readonly "@language": "en";
        }, {
            readonly "@value": "orange";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Orange";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:OtherCheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "other cheese";
            readonly "@language": "en";
        }, {
            readonly "@value": "autre fromage";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "OtherCheese";
        readonly "skos:broader": readonly ["dfc-pt:OtherDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:OtherDairyProduct";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "other dairy product";
            readonly "@language": "en";
        }, {
            readonly "@value": "autre produit laitier";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "OtherDairyProduct";
        readonly "skos:broader": readonly ["dfc-pt:DairyProduct"];
    }, {
        readonly "@id": "dfc-pt:OtherMilk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "other milk";
            readonly "@language": "en";
        }, {
            readonly "@value": "autre lait";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "OtherMilk";
        readonly "skos:broader": readonly ["dfc-pt:OtherDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:OysterMushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "oyster mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "pleurote";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "OysterMushroom";
        readonly "skos:broader": readonly ["dfc-pt:Mushroom"];
    }, {
        readonly "@id": "dfc-pt:ParisMushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "button mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "champignon de Paris";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ParisMushroom";
        readonly "skos:broader": readonly ["dfc-pt:Mushroom"];
    }, {
        readonly "@id": "dfc-pt:Parsley";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "parsley";
            readonly "@language": "en";
        }, {
            readonly "@value": "persil";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Parsley";
        readonly "skos:broader": readonly ["dfc-pt:Herb", "dfc-pt:aromatic"];
    }, {
        readonly "@id": "dfc-pt:Parsnip";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "parsnip";
            readonly "@language": "en";
        }, {
            readonly "@value": "panais";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Parsnip";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Pasta";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pasta";
            readonly "@language": "en";
        }, {
            readonly "@value": "pâtes";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Pasta";
        readonly "skos:broader": readonly ["dfc-pt:SavoryGroceries"];
    }, {
        readonly "@id": "dfc-pt:Pastry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pastry";
            readonly "@language": "en";
        }, {
            readonly "@value": "pâtisserie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Pastry";
        readonly "skos:broader": readonly ["dfc-pt:SweetGroceries"];
    }, {
        readonly "@id": "dfc-pt:PattypanSquash";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pattypan squash";
            readonly "@language": "en";
        }, {
            readonly "@value": "pâtisson";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "PattypanSquash";
        readonly "skos:broader": readonly ["dfc-pt:Squash"];
    }, {
        readonly "@id": "dfc-pt:Peach";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "peach";
            readonly "@language": "en";
        }, {
            readonly "@value": "pêche";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Peach";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:Pear";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pear";
            readonly "@language": "en";
        }, {
            readonly "@value": "poire";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Pear";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:Peas";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "peas";
            readonly "@language": "en";
        }, {
            readonly "@value": "pois";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Peas";
        readonly "skos:broader": readonly ["dfc-pt:DriedVegetable"];
    }, {
        readonly "@id": "dfc-pt:Pepper";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pepper";
            readonly "@language": "en";
        }, {
            readonly "@value": "poivron";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Pepper";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:PiePastry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pie pastry";
            readonly "@language": "en";
        }, {
            readonly "@value": "pâte à tarte";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "PiePastry";
        readonly "skos:broader": readonly ["dfc-pt:SavoryGroceries"];
    }, {
        readonly "@id": "dfc-pt:Pigeon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pigeon";
            readonly "@language": "en";
        }, {
            readonly "@value": "pigeon";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Pigeon";
        readonly "skos:broader": readonly ["dfc-pt:Poultry"];
    }, {
        readonly "@id": "dfc-pt:Plant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "plant";
            readonly "@language": "en";
        }, {
            readonly "@value": "plante";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Plant";
        readonly "skos:broader": readonly ["dfc-pt:Inedible"];
    }, {
        readonly "@id": "dfc-pt:Plum";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "plum";
            readonly "@language": "en";
        }, {
            readonly "@value": "prune";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Plum";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:Porcini";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "porcini";
            readonly "@language": "en";
        }, {
            readonly "@value": "cèpes";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Porcini";
        readonly "skos:broader": readonly ["dfc-pt:Mushroom"];
    }, {
        readonly "@id": "dfc-pt:Pork";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pork";
            readonly "@language": "en";
        }, {
            readonly "@value": "porc";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Pork";
        readonly "skos:broader": readonly ["dfc-pt:MeatProduct"];
    }, {
        readonly "@id": "dfc-pt:Potato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "potato";
            readonly "@language": "en";
        }, {
            readonly "@value": "pomme de terre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Potato";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Poultry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "poultry";
            readonly "@language": "en";
        }, {
            readonly "@value": "volaille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Poultry";
        readonly "skos:broader": readonly ["dfc-pt:MeatProduct"];
    }, {
        readonly "@id": "dfc-pt:ProcessedFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "processed fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruit transformé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ProcessedFruit";
        readonly "skos:broader": readonly ["dfc-pt:LocalGroceryStore"];
    }, {
        readonly "@id": "dfc-pt:ProcessedVegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "processed vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume transformé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ProcessedVegetable";
        readonly "skos:broader": readonly ["dfc-pt:LocalGroceryStore"];
    }, {
        readonly "@id": "dfc-pt:Prune";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "prune";
            readonly "@language": "en";
        }, {
            readonly "@value": "pruneau";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Prune";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:Pulse";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pulse";
        readonly "skos:notation": "Pulse";
        readonly "skos:broader": readonly ["dfc-pt:DriedGoods"];
    }, {
        readonly "@id": "dfc-pt:Pumpkin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pumpkin";
            readonly "@language": "en";
        }, {
            readonly "@value": "potiron";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Pumpkin";
        readonly "skos:broader": readonly ["dfc-pt:Squash"];
    }, {
        readonly "@id": "dfc-pt:Purslane";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Purslane";
            readonly "@language": "en";
        }, {
            readonly "@value": "Pourpier";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Purslane";
        readonly "skos:broader": readonly ["dfc-pt:Salad"];
    }, {
        readonly "@id": "dfc-pt:Quail";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "quail";
            readonly "@language": "en";
        }, {
            readonly "@value": "caille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Quail";
        readonly "skos:broader": readonly ["dfc-pt:Poultry"];
    }, {
        readonly "@id": "dfc-pt:Quince";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "quince";
            readonly "@language": "en";
        }, {
            readonly "@value": "coing";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Quince";
        readonly "skos:broader": readonly ["dfc-pt:Fruit"];
    }, {
        readonly "@id": "dfc-pt:Quinoa";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "quinoa";
            readonly "@language": "en";
        }, {
            readonly "@value": "quinoa";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Quinoa";
        readonly "skos:broader": readonly ["dfc-pt:DriedVegetable"];
    }, {
        readonly "@id": "dfc-pt:Rabbit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "rabbit";
            readonly "@language": "en";
        }, {
            readonly "@value": "lapin";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Rabbit";
        readonly "skos:broader": readonly ["dfc-pt:MeatProduct"];
    }, {
        readonly "@id": "dfc-pt:Radish";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "radish";
            readonly "@language": "en";
        }, {
            readonly "@value": "radis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Radish";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Raspberry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "raspberry";
            readonly "@language": "en";
        }, {
            readonly "@value": "framboise";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Raspberry";
        readonly "skos:broader": readonly ["dfc-pt:Berry"];
    }, {
        readonly "@id": "dfc-pt:ReadyMeal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "ready meal";
            readonly "@language": "en";
        }, {
            readonly "@value": "plat cuisiné";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ReadyMeal";
        readonly "skos:broader": readonly ["dfc-pt:LocalGroceryStore"];
    }, {
        readonly "@id": "dfc-pt:RedCabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "red cabbage";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou rouge";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "RedCabbage";
        readonly "skos:broader": readonly ["dfc-pt:Cabbage"];
    }, {
        readonly "@id": "dfc-pt:Rhubarb";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "rhubarb";
            readonly "@language": "en";
        }, {
            readonly "@value": "rhubarbe";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Rhubarb";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Rice";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "rice";
            readonly "@language": "en";
        }, {
            readonly "@value": "riz";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Rice";
        readonly "skos:broader": readonly ["dfc-pt:SavoryGroceries"];
    }, {
        readonly "@id": "dfc-pt:Rocket";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "rocket";
            readonly "@language": "en";
        }, {
            readonly "@value": "roquette";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Rocket";
        readonly "skos:broader": readonly ["dfc-pt:Salad"];
    }, {
        readonly "@id": "dfc-pt:Romanesco";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "romanesco cauliflower";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou romanesco";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Romanesco";
        readonly "skos:broader": readonly ["dfc-pt:Cabbage"];
    }, {
        readonly "@id": "dfc-pt:Rosemary";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "rosemary";
            readonly "@language": "en";
        }, {
            readonly "@value": "romarin";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Rosemary";
        readonly "skos:broader": readonly ["dfc-pt:Herb", "dfc-pt:aromatic"];
    }, {
        readonly "@id": "dfc-pt:RoundTomato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "round tomato";
            readonly "@language": "en";
        }, {
            readonly "@value": "tomate ronde";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "RoundTomato";
        readonly "skos:broader": readonly ["dfc-pt:Tomato"];
    }, {
        readonly "@id": "dfc-pt:Rutabaga";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "rutabaga";
            readonly "@language": "en";
        }, {
            readonly "@value": "rutabaga";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Rutabaga";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Sage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sage";
            readonly "@language": "en";
        }, {
            readonly "@value": "sauge";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Sage";
        readonly "skos:broader": readonly ["dfc-pt:Herb", "dfc-pt:aromatic"];
    }, {
        readonly "@id": "dfc-pt:Salad";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "salad";
            readonly "@language": "en";
        }, {
            readonly "@value": "salade";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Salad";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:SaladMix";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "salad mix";
            readonly "@language": "en";
        }, {
            readonly "@value": "mélange de salades";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SaladMix";
        readonly "skos:broader": readonly ["dfc-pt:Salad"];
    }, {
        readonly "@id": "dfc-pt:Salsify";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "salsify";
            readonly "@language": "en";
        }, {
            readonly "@value": "salsifis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Salsify";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Salt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "salt";
            readonly "@language": "en";
        }, {
            readonly "@value": "sel";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Salt";
        readonly "skos:broader": readonly ["dfc-pt:SavoryGroceries"];
    }, {
        readonly "@id": "dfc-pt:Salting";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "salting";
            readonly "@language": "en";
        }, {
            readonly "@value": "salaison";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Salting";
        readonly "skos:broader": readonly ["dfc-pt:Pork"];
    }, {
        readonly "@id": "dfc-pt:SavoryGroceries";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "savory groceries";
            readonly "@language": "en";
        }, {
            readonly "@value": "épicerie salée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SavoryGroceries";
        readonly "skos:broader": readonly ["dfc-pt:LocalGroceryStore"];
    }, {
        readonly "@id": "dfc-pt:SavoyCabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "savoy cabbage";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou pommé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SavoyCabbage";
        readonly "skos:broader": readonly ["dfc-pt:Cabbage"];
    }, {
        readonly "@id": "dfc-pt:Seashell";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "seashell";
            readonly "@language": "en";
        }, {
            readonly "@value": "coquillage";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Seashell";
        readonly "skos:broader": readonly ["dfc-pt:FisheryProduct"];
    }, {
        readonly "@id": "dfc-pt:Seed";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "seed";
            readonly "@language": "en";
        }, {
            readonly "@value": "graine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Seed";
        readonly "skos:broader": readonly ["dfc-pt:DriedGoods"];
    }, {
        readonly "@id": "dfc-pt:Semolina";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "semolina";
            readonly "@language": "en";
        }, {
            readonly "@value": "semoule";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Semolina";
        readonly "skos:broader": readonly ["dfc-pt:SavoryGroceries"];
    }, {
        readonly "@id": "dfc-pt:Shallot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "shallot";
            readonly "@language": "en";
        }, {
            readonly "@value": "échalote";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Shallot";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:SheepDairyDessert";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep dairy dessert";
            readonly "@language": "en";
        }, {
            readonly "@value": "dessert lacté de brebis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SheepDairyDessert";
        readonly "skos:broader": readonly ["dfc-pt:SheepDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:SheepDairyProduct";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep dairy product";
            readonly "@language": "en";
        }, {
            readonly "@value": "produit laitier de brebis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SheepDairyProduct";
        readonly "skos:broader": readonly ["dfc-pt:DairyProduct"];
    }, {
        readonly "@id": "dfc-pt:SheepFlavoredYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep flavored yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt de brebis aromatisé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SheepFlavoredYogurt";
        readonly "skos:broader": readonly ["dfc-pt:SheepDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:SheepFreshCheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep fresh cheese";
            readonly "@language": "en";
        }, {
            readonly "@value": "Fromage frais de brebis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SheepFreshCheese";
        readonly "skos:broader": readonly ["dfc-pt:SheepDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:SheepMatureCheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep mature cheese";
            readonly "@language": "en";
        }, {
            readonly "@value": "fromage affiné de brebis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SheepMatureCheese";
        readonly "skos:broader": readonly ["dfc-pt:SheepDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:SheepMilk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep milk";
            readonly "@language": "en";
        }, {
            readonly "@value": "lait de brebis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SheepMilk";
        readonly "skos:broader": readonly ["dfc-pt:SheepDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:SheepNaturalYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep natural yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt de brebis nature";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SheepNaturalYogurt";
        readonly "skos:broader": readonly ["dfc-pt:SheepDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:SheepSweetYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep sweet yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt sucré de brebis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SheepSweetYogurt";
        readonly "skos:broader": readonly ["dfc-pt:SheepDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:SheepYogurtOnABedOfFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep yogurt on a bed of fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt de brebis sur lit de fruits";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SheepYogurtOnABedOfFruit";
        readonly "skos:broader": readonly ["dfc-pt:SheepDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:SheepYogurtWithFruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep yogurt with fruits";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt de brebis aux fruits";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SheepYogurtWithFruits";
        readonly "skos:broader": readonly ["dfc-pt:SheepDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:SheepfootMushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheepfoot mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "Pied-de-mouton";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SheepfootMushroom";
        readonly "skos:broader": readonly ["dfc-pt:Mushroom"];
    }, {
        readonly "@id": "dfc-pt:Shellfish";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "shellfish";
            readonly "@language": "en";
        }, {
            readonly "@value": "crustacés";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Shellfish";
        readonly "skos:broader": readonly ["dfc-pt:FisheryProduct"];
    }, {
        readonly "@id": "dfc-pt:SimmeringMeat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "simmering meat";
            readonly "@language": "en";
        }, {
            readonly "@value": "viande à mijoter";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SimmeringMeat";
        readonly "skos:broader": readonly ["dfc-pt:Beef"];
    }, {
        readonly "@id": "dfc-pt:SmoothCabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "smooth cabbage";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou lisse";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SmoothCabbage";
        readonly "skos:broader": readonly ["dfc-pt:Cabbage"];
    }, {
        readonly "@id": "dfc-pt:Smoothie";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "smoothie";
            readonly "@language": "en";
        }, {
            readonly "@value": "smoothie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Smoothie";
        readonly "skos:broader": readonly ["dfc-pt:SoftDrink"];
    }, {
        readonly "@id": "dfc-pt:Snack";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "snack";
        readonly "skos:notation": "Snack";
        readonly "skos:broader": readonly ["dfc-pt:SavoryGroceries"];
    }, {
        readonly "@id": "dfc-pt:Snails";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "snails";
            readonly "@language": "en";
        }, {
            readonly "@value": "escargots";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Snails";
        readonly "skos:broader": readonly ["dfc-pt:MeatProduct"];
    }, {
        readonly "@id": "dfc-pt:SoftDrink";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "soft drink";
            readonly "@language": "en";
        }, {
            readonly "@value": "boisson non alcoolisée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SoftDrink";
        readonly "skos:broader": readonly ["dfc-pt:Drink"];
    }, {
        readonly "@id": "dfc-pt:Soup";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "soup";
            readonly "@language": "en";
        }, {
            readonly "@value": "soupe";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Soup";
        readonly "skos:broader": readonly ["dfc-pt:ProcessedVegetable"];
    }, {
        readonly "@id": "dfc-pt:Spinach";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "spinach";
            readonly "@language": "en";
        }, {
            readonly "@value": "épinards";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Spinach";
        readonly "skos:broader": readonly ["dfc-pt:Salad"];
    }, {
        readonly "@id": "dfc-pt:Squash";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "squash";
            readonly "@language": "en";
        }, {
            readonly "@value": "courge";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Squash";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Strawberry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "strawberry";
            readonly "@language": "en";
        }, {
            readonly "@value": "fraise";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Strawberry";
        readonly "skos:broader": readonly ["dfc-pt:Berry"];
    }, {
        readonly "@id": "dfc-pt:SweetGroceries";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sweet groceries";
            readonly "@language": "en";
        }, {
            readonly "@value": "épicerie sucrée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SweetGroceries";
        readonly "skos:broader": readonly ["dfc-pt:LocalGroceryStore"];
    }, {
        readonly "@id": "dfc-pt:SweetYogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sweet yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt sucré";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "SweetYogurt";
        readonly "skos:broader": readonly ["dfc-pt:CowDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:Tarragon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "tarragon";
            readonly "@language": "en";
        }, {
            readonly "@value": "estragon";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Tarragon";
        readonly "skos:broader": readonly ["dfc-pt:Herb", "dfc-pt:aromatic"];
    }, {
        readonly "@id": "dfc-pt:Thyme";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "thyme";
            readonly "@language": "en";
        }, {
            readonly "@value": "thym";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Thyme";
        readonly "skos:broader": readonly ["dfc-pt:Herb", "dfc-pt:aromatic"];
    }, {
        readonly "@id": "dfc-pt:Tomato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "tomato";
            readonly "@language": "en";
        }, {
            readonly "@value": "tomate";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Tomato";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:Truffle";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "truffle";
            readonly "@language": "en";
        }, {
            readonly "@value": "truffe";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Truffle";
        readonly "skos:broader": readonly ["dfc-pt:Mushroom"];
    }, {
        readonly "@id": "dfc-pt:Turkey";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "turkey";
            readonly "@language": "en";
        }, {
            readonly "@value": "dinde";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Turkey";
        readonly "skos:broader": readonly ["dfc-pt:Poultry"];
    }, {
        readonly "@id": "dfc-pt:Turnip";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "turnip";
            readonly "@language": "en";
        }, {
            readonly "@value": "navet";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Turnip";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:UchikiKuriSquash";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "uchiki kuri squash";
            readonly "@language": "en";
        }, {
            readonly "@value": "potimarron";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "UchikiKuriSquash";
        readonly "skos:broader": readonly ["dfc-pt:Squash"];
    }, {
        readonly "@id": "dfc-pt:Veal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "veal";
            readonly "@language": "en";
        }, {
            readonly "@value": "veau";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Veal";
        readonly "skos:broader": readonly ["dfc-pt:MeatProduct"];
    }, {
        readonly "@id": "dfc-pt:Vegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Vegetable";
    }, {
        readonly "@id": "dfc-pt:Venison";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Venison";
            readonly "@language": "en";
        }, {
            readonly "@value": "Viande de cerf";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Venison";
        readonly "skos:broader": readonly ["dfc-pt:MeatProduct"];
    }, {
        readonly "@id": "dfc-pt:Viennoiserie";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "viennoiserie";
            readonly "@language": "en";
        }, {
            readonly "@value": "viennoiserie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Viennoiserie";
        readonly "skos:broader": readonly ["dfc-pt:Bakery"];
    }, {
        readonly "@id": "dfc-pt:Walnut";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "walnut";
            readonly "@language": "en";
        }, {
            readonly "@value": "noix";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Walnut";
        readonly "skos:broader": readonly ["dfc-pt:Nut"];
    }, {
        readonly "@id": "dfc-pt:Wine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "wine";
            readonly "@language": "en";
        }, {
            readonly "@value": "vin";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Wine";
        readonly "skos:broader": readonly ["dfc-pt:AlcoholicBeverage"];
    }, {
        readonly "@id": "dfc-pt:Yam";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "yam";
            readonly "@language": "en";
        }, {
            readonly "@value": "Patate douce";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "Yam";
        readonly "skos:broader": readonly ["dfc-pt:Vegetable"];
    }, {
        readonly "@id": "dfc-pt:YogurtOnABedOfFruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "yogurt on a bed of fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt sur lit de fruits";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "YogurtOnABedOfFruit";
        readonly "skos:broader": readonly ["dfc-pt:CowDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:YogurtWithFruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "yogurt with fruits";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt aux fruits";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "YogurtWithFruits";
        readonly "skos:broader": readonly ["dfc-pt:CowDairyProduct"];
    }, {
        readonly "@id": "dfc-pt:alcoholic-beverage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "alcoholic beverage";
            readonly "@language": "en";
        }, {
            readonly "@value": "boisson alcoolisée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "alcoholic-beverage";
        readonly "skos:broader": readonly ["dfc-pt:drink"];
    }, {
        readonly "@id": "dfc-pt:almond";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "almond";
            readonly "@language": "en";
        }, {
            readonly "@value": "amande";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "almond";
        readonly "skos:broader": readonly ["dfc-pt:nut"];
    }, {
        readonly "@id": "dfc-pt:aperitif";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "aperitif";
            readonly "@language": "en";
        }, {
            readonly "@value": "apéritif";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "aperitif";
        readonly "skos:broader": readonly ["dfc-pt:alcoholic-beverage"];
    }, {
        readonly "@id": "dfc-pt:apples";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "apples";
            readonly "@language": "en";
        }, {
            readonly "@value": "pomme";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "apples";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:apricot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "apricot";
            readonly "@language": "en";
        }, {
            readonly "@value": "abricot";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "apricot";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:artichoke";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "artichoke";
            readonly "@language": "en";
        }, {
            readonly "@value": "artichaut";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "artichoke";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:asparagus";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "asparagus";
            readonly "@language": "en";
        }, {
            readonly "@value": "asperges";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "asparagus";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:bakery";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bakery";
            readonly "@language": "en";
        }, {
            readonly "@value": "boulangerie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "bakery";
    }, {
        readonly "@id": "dfc-pt:basil";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "basil";
            readonly "@language": "en";
        }, {
            readonly "@value": "basilic";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "basil";
        readonly "skos:broader": readonly ["dfc-pt:aromatic", "dfc-pt:herb"];
    }, {
        readonly "@id": "dfc-pt:bean";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bean";
            readonly "@language": "en";
        }, {
            readonly "@value": "haricot";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "bean";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:beans";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "beans";
            readonly "@language": "en";
        }, {
            readonly "@value": "haricots";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "beans";
        readonly "skos:broader": readonly ["dfc-pt:dried-vegetable"];
    }, {
        readonly "@id": "dfc-pt:beef";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "beef";
            readonly "@language": "en";
        }, {
            readonly "@value": "viande bovine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "beef";
        readonly "skos:broader": readonly ["dfc-pt:meat-product"];
    }, {
        readonly "@id": "dfc-pt:beer";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "beer";
            readonly "@language": "en";
        }, {
            readonly "@value": "bière";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "beer";
        readonly "skos:broader": readonly ["dfc-pt:alcoholic-beverage"];
    }, {
        readonly "@id": "dfc-pt:beetroot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "beetroot";
            readonly "@language": "en";
        }, {
            readonly "@value": "betterave rouge";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "beetroot";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:berry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "berry";
            readonly "@language": "en";
        }, {
            readonly "@value": "petit fruit";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "berry";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:biscuit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "biscuit";
            readonly "@language": "en";
        }, {
            readonly "@value": "biscuit";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "biscuit";
        readonly "skos:broader": readonly ["dfc-pt:sweet-groceries"];
    }, {
        readonly "@id": "dfc-pt:blackberry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "blackberry";
            readonly "@language": "en";
        }, {
            readonly "@value": "mûre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "blackberry";
        readonly "skos:broader": readonly ["dfc-pt:berry"];
    }, {
        readonly "@id": "dfc-pt:blackcurrant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "blackcurrant";
            readonly "@language": "en";
        }, {
            readonly "@value": "cassis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "blackcurrant";
        readonly "skos:broader": readonly ["dfc-pt:berry"];
    }, {
        readonly "@id": "dfc-pt:blueberry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "blueberry";
            readonly "@language": "en";
        }, {
            readonly "@value": "myrtille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "blueberry";
        readonly "skos:broader": readonly ["dfc-pt:berry"];
    }, {
        readonly "@id": "dfc-pt:bluefoot-mushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bluefoot mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "Pied-bleu";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "bluefoot-mushroom";
        readonly "skos:broader": readonly ["dfc-pt:mushroom"];
    }, {
        readonly "@id": "dfc-pt:bottled-fruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bottled fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruit en bocal";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "bottled-fruit";
        readonly "skos:broader": readonly ["dfc-pt:processed-fruit"];
    }, {
        readonly "@id": "dfc-pt:bottled-vegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bottled vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume en bocal";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "bottled-vegetable";
        readonly "skos:broader": readonly ["dfc-pt:processed-vegetable"];
    }, {
        readonly "@id": "dfc-pt:bread";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bread";
            readonly "@language": "en";
        }, {
            readonly "@value": "pain";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "bread";
        readonly "skos:broader": readonly ["dfc-pt:bakery"];
    }, {
        readonly "@id": "dfc-pt:broccoli-cabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "broccoli cabbage";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou brocoli";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "broccoli-cabbage";
        readonly "skos:broader": readonly ["dfc-pt:cabbage"];
    }, {
        readonly "@id": "dfc-pt:brussels-sprouts";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "brussels sprouts";
            readonly "@language": "en";
        }, {
            readonly "@value": "choux de bruxelles";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "brussels-sprouts";
        readonly "skos:broader": readonly ["dfc-pt:cabbage"];
    }, {
        readonly "@id": "dfc-pt:butter";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "butter";
            readonly "@language": "en";
        }, {
            readonly "@value": "beurre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "butter";
        readonly "skos:broader": readonly ["dfc-pt:cow-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:butternut";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "butternut";
            readonly "@language": "en";
        }, {
            readonly "@value": "butternut";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "butternut";
        readonly "skos:broader": readonly ["dfc-pt:squash"];
    }, {
        readonly "@id": "dfc-pt:cabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cabbage";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cabbage";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:canned-fruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "canned fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruit en conserve";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "canned-fruit";
        readonly "skos:broader": readonly ["dfc-pt:processed-fruit"];
    }, {
        readonly "@id": "dfc-pt:canned-vegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "canned vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume en conserve";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "canned-vegetable";
        readonly "skos:broader": readonly ["dfc-pt:processed-vegetable"];
    }, {
        readonly "@id": "dfc-pt:cannedGoods";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "canned goods";
        readonly "skos:notation": "cannedGoods";
        readonly "skos:broader": readonly ["dfc-pt:savory-groceries"];
    }, {
        readonly "@id": "dfc-pt:carrot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "carrot";
            readonly "@language": "en";
        }, {
            readonly "@value": "carotte";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "carrot";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:cauliflower";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cauliflower";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou-fleur";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cauliflower";
        readonly "skos:broader": readonly ["dfc-pt:cabbage"];
    }, {
        readonly "@id": "dfc-pt:celeriac";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "celeriac";
            readonly "@language": "en";
        }, {
            readonly "@value": "céleri-rave";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "celeriac";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:celery-branch";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "celery branch";
            readonly "@language": "en";
        }, {
            readonly "@value": "céleri branche";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "celery-branch";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:chanterelle-mushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chanterelle mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "chanterelle";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "chanterelle-mushroom";
        readonly "skos:broader": readonly ["dfc-pt:mushroom"];
    }, {
        readonly "@id": "dfc-pt:chard";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chard";
            readonly "@language": "en";
        }, {
            readonly "@value": "blettes";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "chard";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:cherry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cherry";
            readonly "@language": "en";
        }, {
            readonly "@value": "cerise";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cherry";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:cherry-tomato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cherry tomato";
            readonly "@language": "en";
        }, {
            readonly "@value": "tomate cerise";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cherry-tomato";
        readonly "skos:broader": readonly ["dfc-pt:tomato"];
    }, {
        readonly "@id": "dfc-pt:chervil";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chervil";
            readonly "@language": "en";
        }, {
            readonly "@value": "cerfeuil";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "chervil";
        readonly "skos:broader": readonly ["dfc-pt:aromatic", "dfc-pt:herb"];
    }, {
        readonly "@id": "dfc-pt:chestnut";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chestnut";
            readonly "@language": "en";
        }, {
            readonly "@value": "marron";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "chestnut";
        readonly "skos:broader": readonly ["dfc-pt:nut"];
    }, {
        readonly "@id": "dfc-pt:chicken";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chicken";
            readonly "@language": "en";
        }, {
            readonly "@value": "poulet";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "chicken";
        readonly "skos:broader": readonly ["dfc-pt:poultry"];
    }, {
        readonly "@id": "dfc-pt:chicory";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chicory";
            readonly "@language": "en";
        }, {
            readonly "@value": "chicorée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "chicory";
        readonly "skos:broader": readonly ["dfc-pt:salad"];
    }, {
        readonly "@id": "dfc-pt:chilli-pepper";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chilli pepper";
            readonly "@language": "en";
        }, {
            readonly "@value": "piment";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "chilli-pepper";
        readonly "skos:broader": readonly ["dfc-pt:aromatic", "dfc-pt:herb"];
    }, {
        readonly "@id": "dfc-pt:chinese-cabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chinese cabbage";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou chinois";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "chinese-cabbage";
        readonly "skos:broader": readonly ["dfc-pt:cabbage"];
    }, {
        readonly "@id": "dfc-pt:chive";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "chive";
            readonly "@language": "en";
        }, {
            readonly "@value": "ciboulette";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "chive";
        readonly "skos:broader": readonly ["dfc-pt:aromatic", "dfc-pt:herb"];
    }, {
        readonly "@id": "dfc-pt:cider";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cider";
            readonly "@language": "en";
        }, {
            readonly "@value": "cidre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cider";
        readonly "skos:broader": readonly ["dfc-pt:alcoholic-beverage"];
    }, {
        readonly "@id": "dfc-pt:clementine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "clementine";
            readonly "@language": "en";
        }, {
            readonly "@value": "clémentine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "clementine";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:cluster-tomato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cluster tomato";
            readonly "@language": "en";
        }, {
            readonly "@value": "tomate en grappe";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cluster-tomato";
        readonly "skos:broader": readonly ["dfc-pt:tomato"];
    }, {
        readonly "@id": "dfc-pt:confectionery";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "confectionery";
            readonly "@language": "en";
        }, {
            readonly "@value": "confiserie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "confectionery";
        readonly "skos:broader": readonly ["dfc-pt:sweet-groceries"];
    }, {
        readonly "@id": "dfc-pt:cooked-meat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cooked meat";
            readonly "@language": "en";
        }, {
            readonly "@value": "viande cuite";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cooked-meat";
        readonly "skos:broader": readonly ["dfc-pt:pork"];
    }, {
        readonly "@id": "dfc-pt:coriander";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "coriander";
            readonly "@language": "en";
        }, {
            readonly "@value": "coriandre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "coriander";
        readonly "skos:broader": readonly ["dfc-pt:aromatic", "dfc-pt:herb"];
    }, {
        readonly "@id": "dfc-pt:corn-salad";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "corn salad/lambs lettuce";
            readonly "@language": "en";
        }, {
            readonly "@value": "mâche";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "corn-salad";
        readonly "skos:broader": readonly ["dfc-pt:salad"];
    }, {
        readonly "@id": "dfc-pt:cosmetic";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cosmetic";
            readonly "@language": "en";
        }, {
            readonly "@value": "cosmétique";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cosmetic";
        readonly "skos:broader": readonly ["dfc-pt:inedible"];
    }, {
        readonly "@id": "dfc-pt:coulemelle-mushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "parasol mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "coulemelle";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "coulemelle-mushroom";
        readonly "skos:broader": readonly ["dfc-pt:mushroom"];
    }, {
        readonly "@id": "dfc-pt:courgette";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "courgette";
            readonly "@language": "en";
        }, {
            readonly "@value": "courgette";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "courgette";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:cow-dairy-product";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cow dairy product";
            readonly "@language": "en";
        }, {
            readonly "@value": "produit laitier de vache";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cow-dairy-product";
        readonly "skos:broader": readonly ["dfc-pt:dairy-product"];
    }, {
        readonly "@id": "dfc-pt:cream-cheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cream cheese";
            readonly "@language": "en";
        }, {
            readonly "@value": "fromage blanc";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cream-cheese";
        readonly "skos:broader": readonly ["dfc-pt:cow-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:crepe-and-galette";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "crepe and galette";
            readonly "@language": "en";
        }, {
            readonly "@value": "crêpe et galette";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "crepe-and-galette";
        readonly "skos:broader": readonly ["dfc-pt:savory-groceries"];
    }, {
        readonly "@id": "dfc-pt:cress";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cress";
            readonly "@language": "en";
        }, {
            readonly "@value": "cresson";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cress";
        readonly "skos:broader": readonly ["dfc-pt:salad"];
    }, {
        readonly "@id": "dfc-pt:cucumber";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "cucumber";
            readonly "@language": "en";
        }, {
            readonly "@value": "concombre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "cucumber";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:currant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "currant";
            readonly "@language": "en";
        }, {
            readonly "@value": "groseille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "currant";
        readonly "skos:broader": readonly ["dfc-pt:berry"];
    }, {
        readonly "@id": "dfc-pt:dairy-dessert";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dairy dessert";
            readonly "@language": "en";
        }, {
            readonly "@value": "dessert lacté";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "dairy-dessert";
        readonly "skos:broader": readonly ["dfc-pt:cow-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:dairy-product";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dairy product";
            readonly "@language": "en";
        }, {
            readonly "@value": "produit laitier";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "dairy-product";
    }, {
        readonly "@id": "dfc-pt:dandelion";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dandelion";
            readonly "@language": "en";
        }, {
            readonly "@value": "pissenlit";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "dandelion";
        readonly "skos:broader": readonly ["dfc-pt:salad"];
    }, {
        readonly "@id": "dfc-pt:deaths-trumpet";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "deaths trumpet";
            readonly "@language": "en";
        }, {
            readonly "@value": "trompette de la mort";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "deaths-trumpet";
        readonly "skos:broader": readonly ["dfc-pt:mushroom"];
    }, {
        readonly "@id": "dfc-pt:delicatessen";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "delicatessen";
            readonly "@language": "en";
        }, {
            readonly "@value": "charcuterie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "delicatessen";
        readonly "skos:broader": readonly ["dfc-pt:pork"];
    }, {
        readonly "@id": "dfc-pt:digestive";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "digestive";
            readonly "@language": "en";
        }, {
            readonly "@value": "digestif";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "digestive";
        readonly "skos:broader": readonly ["dfc-pt:alcoholic-beverage"];
    }, {
        readonly "@id": "dfc-pt:dill";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dill";
            readonly "@language": "en";
        }, {
            readonly "@value": "aneth";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "dill";
        readonly "skos:broader": readonly ["dfc-pt:aromatic", "dfc-pt:herb"];
    }, {
        readonly "@id": "dfc-pt:dried-fruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dried fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruit sec";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "dried-fruit";
        readonly "skos:broader": readonly ["dfc-pt:processed-fruit"];
    }, {
        readonly "@id": "dfc-pt:dried-vegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dried vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume sec";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "dried-vegetable";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:dried_goods";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dried goods";
            readonly "@language": "en";
        }, {
            readonly "@value": "produits sec";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "dried_goods";
        readonly "skos:broader": readonly ["dfc-pt:local-grocery-store"];
    }, {
        readonly "@id": "dfc-pt:dried_herb";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "dried herb";
            readonly "@language": "en";
        }, {
            readonly "@value": "aromate sec";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "dried_herb";
        readonly "skos:broader": readonly ["dfc-pt:dried_goods"];
    }, {
        readonly "@id": "dfc-pt:drink";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "drink";
            readonly "@language": "en";
        }, {
            readonly "@value": "boisson";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "drink";
    }, {
        readonly "@id": "dfc-pt:duck";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "duck";
            readonly "@language": "en";
        }, {
            readonly "@value": "canard";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "duck";
        readonly "skos:broader": readonly ["dfc-pt:poultry"];
    }, {
        readonly "@id": "dfc-pt:egg";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "egg";
            readonly "@language": "en";
        }, {
            readonly "@value": "œuf";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "egg";
        readonly "skos:broader": readonly ["dfc-pt:meat-product"];
    }, {
        readonly "@id": "dfc-pt:eggplant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "eggplant";
            readonly "@language": "en";
        }, {
            readonly "@value": "aubergine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "eggplant";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:endive";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "endive";
            readonly "@language": "en";
        }, {
            readonly "@value": "endive";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "endive";
        readonly "skos:broader": readonly ["dfc-pt:salad"];
    }, {
        readonly "@id": "dfc-pt:fennel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fennel";
            readonly "@language": "en";
        }, {
            readonly "@value": "fenouil";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "fennel";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:ferment";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "ferment";
        readonly "skos:notation": "ferment";
        readonly "skos:broader": readonly ["dfc-pt:savory-groceries"];
    }, {
        readonly "@id": "dfc-pt:festive-poultry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "festive poultry";
            readonly "@language": "en";
        }, {
            readonly "@value": "volaille festive";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "festive-poultry";
        readonly "skos:broader": readonly ["dfc-pt:poultry"];
    }, {
        readonly "@id": "dfc-pt:fifth-range-vegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fifth range vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume de cinquième gamme";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "fifth-range-vegetable";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:fig";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fig";
            readonly "@language": "en";
        }, {
            readonly "@value": "figue";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "fig";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:fish";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fish";
            readonly "@language": "en";
        }, {
            readonly "@value": "poisson";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "fish";
        readonly "skos:broader": readonly ["dfc-pt:fishery-product"];
    }, {
        readonly "@id": "dfc-pt:fishery-product";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fishery product";
            readonly "@language": "en";
        }, {
            readonly "@value": "produit de la pêche";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "fishery-product";
        readonly "skos:broader": readonly ["dfc-pt:meat-product"];
    }, {
        readonly "@id": "dfc-pt:flake";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "flake";
            readonly "@language": "en";
        }, {
            readonly "@value": "flocon";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "flake";
        readonly "skos:broader": readonly ["dfc-pt:dried_goods"];
    }, {
        readonly "@id": "dfc-pt:flavored-yogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "flavored yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt aromatisé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "flavored-yogurt";
        readonly "skos:broader": readonly ["dfc-pt:cow-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:flour";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "flour";
            readonly "@language": "en";
        }, {
            readonly "@value": "farine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "flour";
        readonly "skos:broader": readonly ["dfc-pt:dried_goods"];
    }, {
        readonly "@id": "dfc-pt:flower";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "flower";
            readonly "@language": "en";
        }, {
            readonly "@value": "fleur";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "flower";
        readonly "skos:broader": readonly ["dfc-pt:inedible"];
    }, {
        readonly "@id": "dfc-pt:fourth-range-vegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fourth range vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume de quatrième gamme";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "fourth-range-vegetable";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:fresh-cheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fresh cheese";
            readonly "@language": "en";
        }, {
            readonly "@value": "fromage frais";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "fresh-cheese";
        readonly "skos:broader": readonly ["dfc-pt:cow-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:fresh-cream";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fresh cream";
            readonly "@language": "en";
        }, {
            readonly "@value": "crème fraîche";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "fresh-cream";
        readonly "skos:broader": readonly ["dfc-pt:cow-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:fresh-meat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fresh meat";
            readonly "@language": "en";
        }, {
            readonly "@value": "viande fraîche";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "fresh-meat";
        readonly "skos:broader": readonly ["dfc-pt:pork"];
    }, {
        readonly "@id": "dfc-pt:frozen";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "frozen";
            readonly "@language": "en";
        }, {
            readonly "@value": "surgelé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "frozen";
    }, {
        readonly "@id": "dfc-pt:frozen-fruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "frozen fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruit surgelé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "frozen-fruit";
        readonly "skos:broader": readonly ["dfc-pt:frozen"];
    }, {
        readonly "@id": "dfc-pt:frozen-meal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "frozen meal";
            readonly "@language": "en";
        }, {
            readonly "@value": "plat surgelé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "frozen-meal";
        readonly "skos:broader": readonly ["dfc-pt:frozen"];
    }, {
        readonly "@id": "dfc-pt:frozen-meat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "frozen meat";
            readonly "@language": "en";
        }, {
            readonly "@value": "viande surgelée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "frozen-meat";
        readonly "skos:broader": readonly ["dfc-pt:frozen"];
    }, {
        readonly "@id": "dfc-pt:frozen-vegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "frozen vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume surgelé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "frozen-vegetable";
        readonly "skos:broader": readonly ["dfc-pt:frozen"];
    }, {
        readonly "@id": "dfc-pt:fruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruits";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "fruit";
    }, {
        readonly "@id": "dfc-pt:fruit-in-compote";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fruit in compote";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruit en compote";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "fruit-in-compote";
        readonly "skos:broader": readonly ["dfc-pt:processed-fruit"];
    }, {
        readonly "@id": "dfc-pt:fruit-juice";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "fruit juice";
            readonly "@language": "en";
        }, {
            readonly "@value": "jus de fruits";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "fruit-juice";
        readonly "skos:broader": readonly ["dfc-pt:soft-drink"];
    }, {
        readonly "@id": "dfc-pt:garlic";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "garlic";
            readonly "@language": "en";
        }, {
            readonly "@value": "ail";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "garlic";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:girolle-mushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "girolle mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "girolle";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "girolle-mushroom";
        readonly "skos:broader": readonly ["dfc-pt:mushroom"];
    }, {
        readonly "@id": "dfc-pt:goat-dairy-dessert";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat dairy dessert";
            readonly "@language": "en";
        }, {
            readonly "@value": "dessert lacté de chèvre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "goat-dairy-dessert";
        readonly "skos:broader": readonly ["dfc-pt:goat-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:goat-dairy-product";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat dairy product";
            readonly "@language": "en";
        }, {
            readonly "@value": "produit laitier de chèvre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "goat-dairy-product";
        readonly "skos:broader": readonly ["dfc-pt:dairy-product"];
    }, {
        readonly "@id": "dfc-pt:goat-flavored-yogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat flavored yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt de chèvre aromatisé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "goat-flavored-yogurt";
        readonly "skos:broader": readonly ["dfc-pt:goat-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:goat-fresh-cheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat fresh cheese";
            readonly "@language": "en";
        }, {
            readonly "@value": "fromage frais de chèvre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "goat-fresh-cheese";
        readonly "skos:broader": readonly ["dfc-pt:goat-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:goat-mature-cheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat mature cheese";
            readonly "@language": "en";
        }, {
            readonly "@value": "fromage de chèvre affiné";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "goat-mature-cheese";
        readonly "skos:broader": readonly ["dfc-pt:goat-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:goat-milk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat milk";
            readonly "@language": "en";
        }, {
            readonly "@value": "lait de chèvre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "goat-milk";
        readonly "skos:broader": readonly ["dfc-pt:goat-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:goat-natural-yogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat natural yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt nature de chèvre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "goat-natural-yogurt";
        readonly "skos:broader": readonly ["dfc-pt:goat-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:goat-sweet-yogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat sweet yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt sucré de chèvre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "goat-sweet-yogurt";
        readonly "skos:broader": readonly ["dfc-pt:goat-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:goat-yogurt-on-a-bed-of-fruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat yogurt on a bed of fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt de chèvre sur lit de fruits";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "goat-yogurt-on-a-bed-of-fruit";
        readonly "skos:broader": readonly ["dfc-pt:goat-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:goat-yogurt-with-fruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goat yogurt with fruits";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt de chèvre aux fruits";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "goat-yogurt-with-fruits";
        readonly "skos:broader": readonly ["dfc-pt:goat-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:goose";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "goose";
            readonly "@language": "en";
        }, {
            readonly "@value": "oie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "goose";
        readonly "skos:broader": readonly ["dfc-pt:poultry"];
    }, {
        readonly "@id": "dfc-pt:gooseberry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "gooseberry";
            readonly "@language": "en";
        }, {
            readonly "@value": "groseille à maquereau";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "gooseberry";
        readonly "skos:broader": readonly ["dfc-pt:berry"];
    }, {
        readonly "@id": "dfc-pt:grain";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "grain";
            readonly "@language": "en";
        }, {
            readonly "@value": "céréale";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "grain";
        readonly "skos:broader": readonly ["dfc-pt:dried_goods", "dfc-pt:savory-groceries"];
    }, {
        readonly "@id": "dfc-pt:grape";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "grape";
            readonly "@language": "en";
        }, {
            readonly "@value": "raisin";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "grape";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:green-garlic";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "green garlic";
            readonly "@language": "en";
        }, {
            readonly "@value": "aillet";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "green-garlic";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:grilling-meat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "grilling meat";
            readonly "@language": "en";
        }, {
            readonly "@value": "viande à griller";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "grilling-meat";
        readonly "skos:broader": readonly ["dfc-pt:beef"];
    }, {
        readonly "@id": "dfc-pt:guinea-fowl";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "guinea fowl";
            readonly "@language": "en";
        }, {
            readonly "@value": "pintade";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "guinea-fowl";
        readonly "skos:broader": readonly ["dfc-pt:poultry"];
    }, {
        readonly "@id": "dfc-pt:hazelnut";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "hazelnut";
            readonly "@language": "en";
        }, {
            readonly "@value": "noisette";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "hazelnut";
        readonly "skos:broader": readonly ["dfc-pt:nut"];
    }, {
        readonly "@id": "dfc-pt:herb";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "herb";
            readonly "@language": "en";
        }, {
            readonly "@value": "aromate";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "herb";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:hierloom-squash";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "hierloom squash";
            readonly "@language": "en";
        }, {
            readonly "@value": "variété ancienne de courge";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "hierloom-squash";
        readonly "skos:broader": readonly ["dfc-pt:squash"];
    }, {
        readonly "@id": "dfc-pt:hierloom-tomato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "hierloom tomato";
            readonly "@language": "en";
        }, {
            readonly "@value": "tomate ancienne";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "hierloom-tomato";
        readonly "skos:broader": readonly ["dfc-pt:tomato"];
    }, {
        readonly "@id": "dfc-pt:honey";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "honey";
            readonly "@language": "en";
        }, {
            readonly "@value": "miel";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "honey";
        readonly "skos:broader": readonly ["dfc-pt:sweet-groceries"];
    }, {
        readonly "@id": "dfc-pt:inedible";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "inedible";
            readonly "@language": "en";
        }, {
            readonly "@value": "non alimentaire";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "inedible";
    }, {
        readonly "@id": "dfc-pt:jam";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "jam";
            readonly "@language": "en";
        }, {
            readonly "@value": "confiture";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "jam";
        readonly "skos:broader": readonly ["dfc-pt:sweet-groceries"];
    }, {
        readonly "@id": "dfc-pt:jerusalem-artichoke";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "jerusalem artichoke";
            readonly "@language": "en";
        }, {
            readonly "@value": "topinambour";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "jerusalem-artichoke";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:kale";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "curly kale";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou frisé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "kale";
        readonly "skos:broader": readonly ["dfc-pt:cabbage"];
    }, {
        readonly "@id": "dfc-pt:kale-cabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "kale";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou kale";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "kale-cabbage";
        readonly "skos:broader": readonly ["dfc-pt:cabbage"];
    }, {
        readonly "@id": "dfc-pt:kiwi";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "kiwi";
            readonly "@language": "en";
        }, {
            readonly "@value": "kiwi";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "kiwi";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:kohlrabi";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "kohlrabi";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou-rave";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "kohlrabi";
        readonly "skos:broader": readonly ["dfc-pt:cabbage"];
    }, {
        readonly "@id": "dfc-pt:lamb";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "lamb";
            readonly "@language": "en";
        }, {
            readonly "@value": "agneau";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "lamb";
        readonly "skos:broader": readonly ["dfc-pt:meat-product"];
    }, {
        readonly "@id": "dfc-pt:laurel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "bay laurel";
            readonly "@language": "en";
        }, {
            readonly "@value": "laurier";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "laurel";
        readonly "skos:broader": readonly ["dfc-pt:aromatic", "dfc-pt:herb"];
    }, {
        readonly "@id": "dfc-pt:leek";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "leek";
            readonly "@language": "en";
        }, {
            readonly "@value": "poireau";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "leek";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:lemon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "lemon";
            readonly "@language": "en";
        }, {
            readonly "@value": "citron";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "lemon";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:lemonade";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "lemonade";
            readonly "@language": "en";
        }, {
            readonly "@value": "limonade";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "lemonade";
        readonly "skos:broader": readonly ["dfc-pt:soft-drink"];
    }, {
        readonly "@id": "dfc-pt:lentils";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "lentils";
            readonly "@language": "en";
        }, {
            readonly "@value": "lentilles";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "lentils";
        readonly "skos:broader": readonly ["dfc-pt:dried-vegetable"];
    }, {
        readonly "@id": "dfc-pt:lettuce";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "lettuce";
            readonly "@language": "en";
        }, {
            readonly "@value": "laitue";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "lettuce";
        readonly "skos:broader": readonly ["dfc-pt:salad"];
    }, {
        readonly "@id": "dfc-pt:local-grocery-store";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "local grocery store";
            readonly "@language": "en";
        }, {
            readonly "@value": "épicerie locale";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "local-grocery-store";
    }, {
        readonly "@id": "dfc-pt:mandarin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "mandarin";
            readonly "@language": "en";
        }, {
            readonly "@value": "mandarine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "mandarin";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:mature-cheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "mature cheese";
            readonly "@language": "en";
        }, {
            readonly "@value": "fromage affiné";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "mature-cheese";
        readonly "skos:broader": readonly ["dfc-pt:cow-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:meat-product";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "meat product";
            readonly "@language": "en";
        }, {
            readonly "@value": "produit carné";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "meat-product";
    }, {
        readonly "@id": "dfc-pt:medlar";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "medlar";
            readonly "@language": "en";
        }, {
            readonly "@value": "nèfle";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "medlar";
        readonly "skos:broader": readonly ["dfc-pt:fruit", "dfc-pt:nut"];
    }, {
        readonly "@id": "dfc-pt:melon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "melon";
            readonly "@language": "en";
        }, {
            readonly "@value": "melon";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "melon";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:mesclun";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "mesclun";
            readonly "@language": "en";
        }, {
            readonly "@value": "mesclun";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "mesclun";
        readonly "skos:broader": readonly ["dfc-pt:salad"];
    }, {
        readonly "@id": "dfc-pt:milk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "milk";
            readonly "@language": "en";
        }, {
            readonly "@value": "lait";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "milk";
        readonly "skos:broader": readonly ["dfc-pt:cow-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:milky-mushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "milky mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "lactaire";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "milky-mushroom";
        readonly "skos:broader": readonly ["dfc-pt:mushroom"];
    }, {
        readonly "@id": "dfc-pt:mint";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "mint";
            readonly "@language": "en";
        }, {
            readonly "@value": "menthe";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "mint";
        readonly "skos:broader": readonly ["dfc-pt:aromatic", "dfc-pt:herb"];
    }, {
        readonly "@id": "dfc-pt:morel";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "morel";
            readonly "@language": "en";
        }, {
            readonly "@value": "morille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "morel";
        readonly "skos:broader": readonly ["dfc-pt:mushroom"];
    }, {
        readonly "@id": "dfc-pt:mousseron";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "mousseron";
            readonly "@language": "en";
        }, {
            readonly "@value": "mousseron";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "mousseron";
        readonly "skos:broader": readonly ["dfc-pt:mushroom"];
    }, {
        readonly "@id": "dfc-pt:mushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "champignon";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "mushroom";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:natural-yogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "natural yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt nature";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "natural-yogurt";
        readonly "skos:broader": readonly ["dfc-pt:cow-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:nectarine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "nectarine";
            readonly "@language": "en";
        }, {
            readonly "@value": "nectarine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "nectarine";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:non-local-fruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "non local fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruit non local";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "non-local-fruit";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:non-local-vegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "non local vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume non local";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "non-local-vegetable";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:nut";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "nut";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruit à coque";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "nut";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:oil";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "oil";
            readonly "@language": "en";
        }, {
            readonly "@value": "huile";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "oil";
        readonly "skos:broader": readonly ["dfc-pt:savory-groceries"];
    }, {
        readonly "@id": "dfc-pt:onion";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "onion";
            readonly "@language": "en";
        }, {
            readonly "@value": "oignon";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "onion";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:orange";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "orange";
            readonly "@language": "en";
        }, {
            readonly "@value": "orange";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "orange";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:other-cheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "other cheese";
            readonly "@language": "en";
        }, {
            readonly "@value": "autre fromage";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "other-cheese";
        readonly "skos:broader": readonly ["dfc-pt:other-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:other-dairy-product";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "other dairy product";
            readonly "@language": "en";
        }, {
            readonly "@value": "autre produit laitier";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "other-dairy-product";
        readonly "skos:broader": readonly ["dfc-pt:dairy-product"];
    }, {
        readonly "@id": "dfc-pt:other-milk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "other milk";
            readonly "@language": "en";
        }, {
            readonly "@value": "autre lait";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "other-milk";
        readonly "skos:broader": readonly ["dfc-pt:other-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:oyster-mushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "oyster mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "pleurote";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "oyster-mushroom";
        readonly "skos:broader": readonly ["dfc-pt:mushroom"];
    }, {
        readonly "@id": "dfc-pt:paris-mushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "button mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "champignon de Paris";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "paris-mushroom";
        readonly "skos:broader": readonly ["dfc-pt:mushroom"];
    }, {
        readonly "@id": "dfc-pt:parsley";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "parsley";
            readonly "@language": "en";
        }, {
            readonly "@value": "persil";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "parsley";
        readonly "skos:broader": readonly ["dfc-pt:aromatic", "dfc-pt:herb"];
    }, {
        readonly "@id": "dfc-pt:parsnip";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "parsnip";
            readonly "@language": "en";
        }, {
            readonly "@value": "panais";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "parsnip";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:pasta";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pasta";
            readonly "@language": "en";
        }, {
            readonly "@value": "pâtes";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "pasta";
        readonly "skos:broader": readonly ["dfc-pt:savory-groceries"];
    }, {
        readonly "@id": "dfc-pt:pastry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pastry";
            readonly "@language": "en";
        }, {
            readonly "@value": "pâtisserie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "pastry";
        readonly "skos:broader": readonly ["dfc-pt:sweet-groceries"];
    }, {
        readonly "@id": "dfc-pt:pattypan-squash";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pattypan squash";
            readonly "@language": "en";
        }, {
            readonly "@value": "pâtisson";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "pattypan-squash";
        readonly "skos:broader": readonly ["dfc-pt:squash"];
    }, {
        readonly "@id": "dfc-pt:peach";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "peach";
            readonly "@language": "en";
        }, {
            readonly "@value": "pêche";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "peach";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:pear";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pear";
            readonly "@language": "en";
        }, {
            readonly "@value": "poire";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "pear";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:peas";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "peas";
            readonly "@language": "en";
        }, {
            readonly "@value": "pois";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "peas";
        readonly "skos:broader": readonly ["dfc-pt:dried-vegetable"];
    }, {
        readonly "@id": "dfc-pt:pepper";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pepper";
            readonly "@language": "en";
        }, {
            readonly "@value": "poivron";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "pepper";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:pie-pastry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pie pastry";
            readonly "@language": "en";
        }, {
            readonly "@value": "pâte à tarte";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "pie-pastry";
        readonly "skos:broader": readonly ["dfc-pt:savory-groceries"];
    }, {
        readonly "@id": "dfc-pt:pigeon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pigeon";
            readonly "@language": "en";
        }, {
            readonly "@value": "pigeon";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "pigeon";
        readonly "skos:broader": readonly ["dfc-pt:poultry"];
    }, {
        readonly "@id": "dfc-pt:plant";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "plant";
            readonly "@language": "en";
        }, {
            readonly "@value": "plante";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "plant";
        readonly "skos:broader": readonly ["dfc-pt:inedible"];
    }, {
        readonly "@id": "dfc-pt:plum";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "plum";
            readonly "@language": "en";
        }, {
            readonly "@value": "prune";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "plum";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:porcini";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "porcini";
            readonly "@language": "en";
        }, {
            readonly "@value": "cèpes";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "porcini";
        readonly "skos:broader": readonly ["dfc-pt:mushroom"];
    }, {
        readonly "@id": "dfc-pt:pork";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pork";
            readonly "@language": "en";
        }, {
            readonly "@value": "porc";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "pork";
        readonly "skos:broader": readonly ["dfc-pt:meat-product"];
    }, {
        readonly "@id": "dfc-pt:potato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "potato";
            readonly "@language": "en";
        }, {
            readonly "@value": "pomme de terre";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "potato";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:poultry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "poultry";
            readonly "@language": "en";
        }, {
            readonly "@value": "volaille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "poultry";
        readonly "skos:broader": readonly ["dfc-pt:meat-product"];
    }, {
        readonly "@id": "dfc-pt:processed-fruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "processed fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "fruit transformé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "processed-fruit";
        readonly "skos:broader": readonly ["dfc-pt:local-grocery-store"];
    }, {
        readonly "@id": "dfc-pt:processed-vegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "processed vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume transformé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "processed-vegetable";
        readonly "skos:broader": readonly ["dfc-pt:local-grocery-store"];
    }, {
        readonly "@id": "dfc-pt:prune";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "prune";
            readonly "@language": "en";
        }, {
            readonly "@value": "pruneau";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "prune";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:pulse";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "pulse";
        readonly "skos:notation": "pulse";
        readonly "skos:broader": readonly ["dfc-pt:dried_goods"];
    }, {
        readonly "@id": "dfc-pt:pumpkin";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "pumpkin";
            readonly "@language": "en";
        }, {
            readonly "@value": "potiron";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "pumpkin";
        readonly "skos:broader": readonly ["dfc-pt:squash"];
    }, {
        readonly "@id": "dfc-pt:purslane";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Purslane";
            readonly "@language": "en";
        }, {
            readonly "@value": "Pourpier";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "purslane";
        readonly "skos:broader": readonly ["dfc-pt:salad"];
    }, {
        readonly "@id": "dfc-pt:quail";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "quail";
            readonly "@language": "en";
        }, {
            readonly "@value": "caille";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "quail";
        readonly "skos:broader": readonly ["dfc-pt:poultry"];
    }, {
        readonly "@id": "dfc-pt:quince";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "quince";
            readonly "@language": "en";
        }, {
            readonly "@value": "coing";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "quince";
        readonly "skos:broader": readonly ["dfc-pt:fruit"];
    }, {
        readonly "@id": "dfc-pt:quinoa";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "quinoa";
            readonly "@language": "en";
        }, {
            readonly "@value": "quinoa";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "quinoa";
        readonly "skos:broader": readonly ["dfc-pt:dried-vegetable"];
    }, {
        readonly "@id": "dfc-pt:rabbit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "rabbit";
            readonly "@language": "en";
        }, {
            readonly "@value": "lapin";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "rabbit";
        readonly "skos:broader": readonly ["dfc-pt:meat-product"];
    }, {
        readonly "@id": "dfc-pt:radish";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "radish";
            readonly "@language": "en";
        }, {
            readonly "@value": "radis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "radish";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:raspberry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "raspberry";
            readonly "@language": "en";
        }, {
            readonly "@value": "framboise";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "raspberry";
        readonly "skos:broader": readonly ["dfc-pt:berry"];
    }, {
        readonly "@id": "dfc-pt:ready-meal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "ready meal";
            readonly "@language": "en";
        }, {
            readonly "@value": "plat cuisiné";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "ready-meal";
        readonly "skos:broader": readonly ["dfc-pt:local-grocery-store"];
    }, {
        readonly "@id": "dfc-pt:red-cabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "red cabbage";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou rouge";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "red-cabbage";
        readonly "skos:broader": readonly ["dfc-pt:cabbage"];
    }, {
        readonly "@id": "dfc-pt:rhubarb";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "rhubarb";
            readonly "@language": "en";
        }, {
            readonly "@value": "rhubarbe";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "rhubarb";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:rice";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "rice";
            readonly "@language": "en";
        }, {
            readonly "@value": "riz";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "rice";
        readonly "skos:broader": readonly ["dfc-pt:savory-groceries"];
    }, {
        readonly "@id": "dfc-pt:rocket";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "rocket";
            readonly "@language": "en";
        }, {
            readonly "@value": "roquette";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "rocket";
        readonly "skos:broader": readonly ["dfc-pt:salad"];
    }, {
        readonly "@id": "dfc-pt:romanesco";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "romanesco cauliflower";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou romanesco";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "romanesco";
        readonly "skos:broader": readonly ["dfc-pt:cabbage"];
    }, {
        readonly "@id": "dfc-pt:rosemary";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "rosemary";
            readonly "@language": "en";
        }, {
            readonly "@value": "romarin";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "rosemary";
        readonly "skos:broader": readonly ["dfc-pt:aromatic", "dfc-pt:herb"];
    }, {
        readonly "@id": "dfc-pt:round-tomato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "round tomato";
            readonly "@language": "en";
        }, {
            readonly "@value": "tomate ronde";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "round-tomato";
        readonly "skos:broader": readonly ["dfc-pt:tomato"];
    }, {
        readonly "@id": "dfc-pt:rutabaga";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "rutabaga";
            readonly "@language": "en";
        }, {
            readonly "@value": "rutabaga";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "rutabaga";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:sage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sage";
            readonly "@language": "en";
        }, {
            readonly "@value": "sauge";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "sage";
        readonly "skos:broader": readonly ["dfc-pt:aromatic", "dfc-pt:herb"];
    }, {
        readonly "@id": "dfc-pt:salad";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "salad";
            readonly "@language": "en";
        }, {
            readonly "@value": "salade";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "salad";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:salad-mix";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "salad mix";
            readonly "@language": "en";
        }, {
            readonly "@value": "mélange de salades";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "salad-mix";
        readonly "skos:broader": readonly ["dfc-pt:salad"];
    }, {
        readonly "@id": "dfc-pt:salsify";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "salsify";
            readonly "@language": "en";
        }, {
            readonly "@value": "salsifis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "salsify";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:salt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "salt";
            readonly "@language": "en";
        }, {
            readonly "@value": "sel";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "salt";
        readonly "skos:broader": readonly ["dfc-pt:savory-groceries"];
    }, {
        readonly "@id": "dfc-pt:salting";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "salting";
            readonly "@language": "en";
        }, {
            readonly "@value": "salaison";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "salting";
        readonly "skos:broader": readonly ["dfc-pt:pork"];
    }, {
        readonly "@id": "dfc-pt:savory-groceries";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "savory groceries";
            readonly "@language": "en";
        }, {
            readonly "@value": "épicerie salée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "savory-groceries";
        readonly "skos:broader": readonly ["dfc-pt:local-grocery-store"];
    }, {
        readonly "@id": "dfc-pt:savoy-cabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "savoy cabbage";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou pommé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "savoy-cabbage";
        readonly "skos:broader": readonly ["dfc-pt:cabbage"];
    }, {
        readonly "@id": "dfc-pt:seashell";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "seashell";
            readonly "@language": "en";
        }, {
            readonly "@value": "coquillage";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "seashell";
        readonly "skos:broader": readonly ["dfc-pt:fishery-product"];
    }, {
        readonly "@id": "dfc-pt:seed";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "seed";
            readonly "@language": "en";
        }, {
            readonly "@value": "graine";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "seed";
        readonly "skos:broader": readonly ["dfc-pt:dried_goods"];
    }, {
        readonly "@id": "dfc-pt:semolina";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "semolina";
            readonly "@language": "en";
        }, {
            readonly "@value": "semoule";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "semolina";
        readonly "skos:broader": readonly ["dfc-pt:savory-groceries"];
    }, {
        readonly "@id": "dfc-pt:shallot";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "shallot";
            readonly "@language": "en";
        }, {
            readonly "@value": "échalote";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "shallot";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:sheep-dairy-dessert";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep dairy dessert";
            readonly "@language": "en";
        }, {
            readonly "@value": "dessert lacté de brebis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "sheep-dairy-dessert";
        readonly "skos:broader": readonly ["dfc-pt:sheep-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:sheep-dairy-product";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep dairy product";
            readonly "@language": "en";
        }, {
            readonly "@value": "produit laitier de brebis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "sheep-dairy-product";
        readonly "skos:broader": readonly ["dfc-pt:dairy-product"];
    }, {
        readonly "@id": "dfc-pt:sheep-flavored-yogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep flavored yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt de brebis aromatisé";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "sheep-flavored-yogurt";
        readonly "skos:broader": readonly ["dfc-pt:sheep-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:sheep-fresh-cheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep fresh cheese";
            readonly "@language": "en";
        }, {
            readonly "@value": "Fromage frais de brebis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "sheep-fresh-cheese";
        readonly "skos:broader": readonly ["dfc-pt:sheep-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:sheep-mature-cheese";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep mature cheese";
            readonly "@language": "en";
        }, {
            readonly "@value": "fromage affiné de brebis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "sheep-mature-cheese";
        readonly "skos:broader": readonly ["dfc-pt:sheep-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:sheep-milk";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep milk";
            readonly "@language": "en";
        }, {
            readonly "@value": "lait de brebis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "sheep-milk";
        readonly "skos:broader": readonly ["dfc-pt:sheep-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:sheep-natural-yogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep natural yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt de brebis nature";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "sheep-natural-yogurt";
        readonly "skos:broader": readonly ["dfc-pt:sheep-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:sheep-sweet-yogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep sweet yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt sucré de brebis";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "sheep-sweet-yogurt";
        readonly "skos:broader": readonly ["dfc-pt:sheep-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:sheep-yogurt-on-a-bed-of-fruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep yogurt on a bed of fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt de brebis sur lit de fruits";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "sheep-yogurt-on-a-bed-of-fruit";
        readonly "skos:broader": readonly ["dfc-pt:sheep-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:sheep-yogurt-with-fruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheep yogurt with fruits";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt de brebis aux fruits";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "sheep-yogurt-with-fruits";
        readonly "skos:broader": readonly ["dfc-pt:sheep-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:sheepfoot-mushroom";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sheepfoot mushroom";
            readonly "@language": "en";
        }, {
            readonly "@value": "Pied-de-mouton";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "sheepfoot-mushroom";
        readonly "skos:broader": readonly ["dfc-pt:mushroom"];
    }, {
        readonly "@id": "dfc-pt:shellfish";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "shellfish";
            readonly "@language": "en";
        }, {
            readonly "@value": "crustacés";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "shellfish";
        readonly "skos:broader": readonly ["dfc-pt:fishery-product"];
    }, {
        readonly "@id": "dfc-pt:simmering-meat";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "simmering meat";
            readonly "@language": "en";
        }, {
            readonly "@value": "viande à mijoter";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "simmering-meat";
        readonly "skos:broader": readonly ["dfc-pt:beef"];
    }, {
        readonly "@id": "dfc-pt:smooth-cabbage";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "smooth cabbage";
            readonly "@language": "en";
        }, {
            readonly "@value": "chou lisse";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "smooth-cabbage";
        readonly "skos:broader": readonly ["dfc-pt:cabbage"];
    }, {
        readonly "@id": "dfc-pt:smoothie";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "smoothie";
            readonly "@language": "en";
        }, {
            readonly "@value": "smoothie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "smoothie";
        readonly "skos:broader": readonly ["dfc-pt:soft-drink"];
    }, {
        readonly "@id": "dfc-pt:snack";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": "snack";
        readonly "skos:notation": "snack";
        readonly "skos:broader": readonly ["dfc-pt:savory-groceries"];
    }, {
        readonly "@id": "dfc-pt:snails";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "snails";
            readonly "@language": "en";
        }, {
            readonly "@value": "escargots";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "snails";
        readonly "skos:broader": readonly ["dfc-pt:meat-product"];
    }, {
        readonly "@id": "dfc-pt:soft-drink";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "soft drink";
            readonly "@language": "en";
        }, {
            readonly "@value": "boisson non alcoolisée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "soft-drink";
        readonly "skos:broader": readonly ["dfc-pt:drink"];
    }, {
        readonly "@id": "dfc-pt:soup";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "soup";
            readonly "@language": "en";
        }, {
            readonly "@value": "soupe";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "soup";
        readonly "skos:broader": readonly ["dfc-pt:processed-vegetable"];
    }, {
        readonly "@id": "dfc-pt:spinach";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "spinach";
            readonly "@language": "en";
        }, {
            readonly "@value": "épinards";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "spinach";
        readonly "skos:broader": readonly ["dfc-pt:salad"];
    }, {
        readonly "@id": "dfc-pt:squash";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "squash";
            readonly "@language": "en";
        }, {
            readonly "@value": "courge";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "squash";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:strawberry";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "strawberry";
            readonly "@language": "en";
        }, {
            readonly "@value": "fraise";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "strawberry";
        readonly "skos:broader": readonly ["dfc-pt:berry"];
    }, {
        readonly "@id": "dfc-pt:sweet-groceries";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sweet groceries";
            readonly "@language": "en";
        }, {
            readonly "@value": "épicerie sucrée";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "sweet-groceries";
        readonly "skos:broader": readonly ["dfc-pt:local-grocery-store"];
    }, {
        readonly "@id": "dfc-pt:sweet-yogurt";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "sweet yogurt";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt sucré";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "sweet-yogurt";
        readonly "skos:broader": readonly ["dfc-pt:cow-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:tarragon";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "tarragon";
            readonly "@language": "en";
        }, {
            readonly "@value": "estragon";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "tarragon";
        readonly "skos:broader": readonly ["dfc-pt:aromatic", "dfc-pt:herb"];
    }, {
        readonly "@id": "dfc-pt:thyme";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "thyme";
            readonly "@language": "en";
        }, {
            readonly "@value": "thym";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "thyme";
        readonly "skos:broader": readonly ["dfc-pt:aromatic", "dfc-pt:herb"];
    }, {
        readonly "@id": "dfc-pt:tomato";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "tomato";
            readonly "@language": "en";
        }, {
            readonly "@value": "tomate";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "tomato";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:truffle";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "truffle";
            readonly "@language": "en";
        }, {
            readonly "@value": "truffe";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "truffle";
        readonly "skos:broader": readonly ["dfc-pt:mushroom"];
    }, {
        readonly "@id": "dfc-pt:turkey";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "turkey";
            readonly "@language": "en";
        }, {
            readonly "@value": "dinde";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "turkey";
        readonly "skos:broader": readonly ["dfc-pt:poultry"];
    }, {
        readonly "@id": "dfc-pt:turnip";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "turnip";
            readonly "@language": "en";
        }, {
            readonly "@value": "navet";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "turnip";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:uchiki-kuri-squash";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "uchiki kuri squash";
            readonly "@language": "en";
        }, {
            readonly "@value": "potimarron";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "uchiki-kuri-squash";
        readonly "skos:broader": readonly ["dfc-pt:squash"];
    }, {
        readonly "@id": "dfc-pt:veal";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "veal";
            readonly "@language": "en";
        }, {
            readonly "@value": "veau";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "veal";
        readonly "skos:broader": readonly ["dfc-pt:meat-product"];
    }, {
        readonly "@id": "dfc-pt:vegetable";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "vegetable";
            readonly "@language": "en";
        }, {
            readonly "@value": "légume";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "vegetable";
    }, {
        readonly "@id": "dfc-pt:venison";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "Venison";
            readonly "@language": "en";
        }, {
            readonly "@value": "Viande de cerf";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "venison";
        readonly "skos:broader": readonly ["dfc-pt:meat-product"];
    }, {
        readonly "@id": "dfc-pt:viennoiserie-";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "viennoiserie";
            readonly "@language": "en";
        }, {
            readonly "@value": "viennoiserie";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "viennoiserie-";
        readonly "skos:broader": readonly ["dfc-pt:bakery"];
    }, {
        readonly "@id": "dfc-pt:walnut";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "walnut";
            readonly "@language": "en";
        }, {
            readonly "@value": "noix";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "walnut";
        readonly "skos:broader": readonly ["dfc-pt:nut"];
    }, {
        readonly "@id": "dfc-pt:wine";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "wine";
            readonly "@language": "en";
        }, {
            readonly "@value": "vin";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "wine";
        readonly "skos:broader": readonly ["dfc-pt:alcoholic-beverage"];
    }, {
        readonly "@id": "dfc-pt:yam";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "yam";
            readonly "@language": "en";
        }, {
            readonly "@value": "Patate douce";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "yam";
        readonly "skos:broader": readonly ["dfc-pt:vegetable"];
    }, {
        readonly "@id": "dfc-pt:yogurt-on-a-bed-of-fruit";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "yogurt on a bed of fruit";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt sur lit de fruits";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "yogurt-on-a-bed-of-fruit";
        readonly "skos:broader": readonly ["dfc-pt:cow-dairy-product"];
    }, {
        readonly "@id": "dfc-pt:yogurt-with-fruits";
        readonly "@type": readonly ["skos:Concept"];
        readonly "skos:prefLabel": readonly [{
            readonly "@value": "yogurt with fruits";
            readonly "@language": "en";
        }, {
            readonly "@value": "yaourt aux fruits";
            readonly "@language": "fr";
        }];
        readonly "skos:notation": "yogurt-with-fruits";
        readonly "skos:broader": readonly ["dfc-pt:cow-dairy-product"];
    }];
};
export default _default;
