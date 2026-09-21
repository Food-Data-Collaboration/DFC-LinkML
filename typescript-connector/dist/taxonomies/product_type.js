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
            "@id": "dfc-pt:AlcoholicBeverage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "alcoholic beverage",
                    "@language": "en"
                },
                {
                    "@value": "boisson alcoolisée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "AlcoholicBeverage",
            "skos:broader": [
                "dfc-pt:Drink"
            ]
        },
        {
            "@id": "dfc-pt:Almond",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "almond",
                    "@language": "en"
                },
                {
                    "@value": "amande",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Almond",
            "skos:broader": [
                "dfc-pt:Nut"
            ]
        },
        {
            "@id": "dfc-pt:Aperitif",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "aperitif",
                    "@language": "en"
                },
                {
                    "@value": "apéritif",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Aperitif",
            "skos:broader": [
                "dfc-pt:AlcoholicBeverage"
            ]
        },
        {
            "@id": "dfc-pt:Apples",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "apples",
                    "@language": "en"
                },
                {
                    "@value": "pomme",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Apples",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:Apricot",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "apricot",
                    "@language": "en"
                },
                {
                    "@value": "abricot",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Apricot",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:Artichoke",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "artichoke",
                    "@language": "en"
                },
                {
                    "@value": "artichaut",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Artichoke",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Asparagus",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "asparagus",
                    "@language": "en"
                },
                {
                    "@value": "asperges",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Asparagus",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Bakery",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bakery",
                    "@language": "en"
                },
                {
                    "@value": "boulangerie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Bakery"
        },
        {
            "@id": "dfc-pt:Basil",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "basil",
                    "@language": "en"
                },
                {
                    "@value": "basilic",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Basil",
            "skos:broader": [
                "dfc-pt:Herb",
                "dfc-pt:aromatic"
            ]
        },
        {
            "@id": "dfc-pt:Bean",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bean",
                    "@language": "en"
                },
                {
                    "@value": "haricot",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Bean",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Beans",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "beans",
                    "@language": "en"
                },
                {
                    "@value": "haricots",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Beans",
            "skos:broader": [
                "dfc-pt:DriedVegetable"
            ]
        },
        {
            "@id": "dfc-pt:Beef",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "beef",
                    "@language": "en"
                },
                {
                    "@value": "viande bovine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Beef",
            "skos:broader": [
                "dfc-pt:MeatProduct"
            ]
        },
        {
            "@id": "dfc-pt:Beer",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "beer",
                    "@language": "en"
                },
                {
                    "@value": "bière",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Beer",
            "skos:broader": [
                "dfc-pt:AlcoholicBeverage"
            ]
        },
        {
            "@id": "dfc-pt:Beetroot",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "beetroot",
                    "@language": "en"
                },
                {
                    "@value": "betterave rouge",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Beetroot",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Berry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "berry",
                    "@language": "en"
                },
                {
                    "@value": "petit fruit",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Berry",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:Biscuit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "biscuit",
                    "@language": "en"
                },
                {
                    "@value": "biscuit",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Biscuit",
            "skos:broader": [
                "dfc-pt:SweetGroceries"
            ]
        },
        {
            "@id": "dfc-pt:Blackberry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "blackberry",
                    "@language": "en"
                },
                {
                    "@value": "mûre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Blackberry",
            "skos:broader": [
                "dfc-pt:Berry"
            ]
        },
        {
            "@id": "dfc-pt:Blackcurrant",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "blackcurrant",
                    "@language": "en"
                },
                {
                    "@value": "cassis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Blackcurrant",
            "skos:broader": [
                "dfc-pt:Berry"
            ]
        },
        {
            "@id": "dfc-pt:Blueberry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "blueberry",
                    "@language": "en"
                },
                {
                    "@value": "myrtille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Blueberry",
            "skos:broader": [
                "dfc-pt:Berry"
            ]
        },
        {
            "@id": "dfc-pt:BluefootMushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bluefoot mushroom",
                    "@language": "en"
                },
                {
                    "@value": "Pied-bleu",
                    "@language": "fr"
                }
            ],
            "skos:notation": "BluefootMushroom",
            "skos:broader": [
                "dfc-pt:Mushroom"
            ]
        },
        {
            "@id": "dfc-pt:BottledFruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bottled fruit",
                    "@language": "en"
                },
                {
                    "@value": "fruit en bocal",
                    "@language": "fr"
                }
            ],
            "skos:notation": "BottledFruit",
            "skos:broader": [
                "dfc-pt:ProcessedFruit"
            ]
        },
        {
            "@id": "dfc-pt:BottledVegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bottled vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume en bocal",
                    "@language": "fr"
                }
            ],
            "skos:notation": "BottledVegetable",
            "skos:broader": [
                "dfc-pt:ProcessedVegetable"
            ]
        },
        {
            "@id": "dfc-pt:Bread",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bread",
                    "@language": "en"
                },
                {
                    "@value": "pain",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Bread",
            "skos:broader": [
                "dfc-pt:Bakery"
            ]
        },
        {
            "@id": "dfc-pt:BroccoliCabbage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "broccoli cabbage",
                    "@language": "en"
                },
                {
                    "@value": "chou brocoli",
                    "@language": "fr"
                }
            ],
            "skos:notation": "BroccoliCabbage",
            "skos:broader": [
                "dfc-pt:Cabbage"
            ]
        },
        {
            "@id": "dfc-pt:BrusselsSprouts",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "brussels sprouts",
                    "@language": "en"
                },
                {
                    "@value": "choux de bruxelles",
                    "@language": "fr"
                }
            ],
            "skos:notation": "BrusselsSprouts",
            "skos:broader": [
                "dfc-pt:Cabbage"
            ]
        },
        {
            "@id": "dfc-pt:Butter",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "butter",
                    "@language": "en"
                },
                {
                    "@value": "beurre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Butter",
            "skos:broader": [
                "dfc-pt:CowDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:Butternut",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "butternut",
                    "@language": "en"
                },
                {
                    "@value": "butternut",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Butternut",
            "skos:broader": [
                "dfc-pt:Squash"
            ]
        },
        {
            "@id": "dfc-pt:Cabbage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cabbage",
                    "@language": "en"
                },
                {
                    "@value": "chou",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Cabbage",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:CannedFruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "canned fruit",
                    "@language": "en"
                },
                {
                    "@value": "fruit en conserve",
                    "@language": "fr"
                }
            ],
            "skos:notation": "CannedFruit",
            "skos:broader": [
                "dfc-pt:ProcessedFruit"
            ]
        },
        {
            "@id": "dfc-pt:CannedGoods",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "canned goods",
            "skos:notation": "CannedGoods",
            "skos:broader": [
                "dfc-pt:SavoryGroceries"
            ]
        },
        {
            "@id": "dfc-pt:CannedVegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "canned vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume en conserve",
                    "@language": "fr"
                }
            ],
            "skos:notation": "CannedVegetable",
            "skos:broader": [
                "dfc-pt:ProcessedVegetable"
            ]
        },
        {
            "@id": "dfc-pt:Carrot",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "carrot",
                    "@language": "en"
                },
                {
                    "@value": "carotte",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Carrot",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Cauliflower",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cauliflower",
                    "@language": "en"
                },
                {
                    "@value": "chou-fleur",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Cauliflower",
            "skos:broader": [
                "dfc-pt:Cabbage"
            ]
        },
        {
            "@id": "dfc-pt:Celeriac",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "celeriac",
                    "@language": "en"
                },
                {
                    "@value": "céleri-rave",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Celeriac",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:CeleryBranch",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "celery branch",
                    "@language": "en"
                },
                {
                    "@value": "céleri branche",
                    "@language": "fr"
                }
            ],
            "skos:notation": "CeleryBranch",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:ChanterelleMushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chanterelle mushroom",
                    "@language": "en"
                },
                {
                    "@value": "chanterelle",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ChanterelleMushroom",
            "skos:broader": [
                "dfc-pt:Mushroom"
            ]
        },
        {
            "@id": "dfc-pt:Chard",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chard",
                    "@language": "en"
                },
                {
                    "@value": "blettes",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Chard",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Cherry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cherry",
                    "@language": "en"
                },
                {
                    "@value": "cerise",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Cherry",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:CherryTomato",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cherry tomato",
                    "@language": "en"
                },
                {
                    "@value": "tomate cerise",
                    "@language": "fr"
                }
            ],
            "skos:notation": "CherryTomato",
            "skos:broader": [
                "dfc-pt:Tomato"
            ]
        },
        {
            "@id": "dfc-pt:Chervil",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chervil",
                    "@language": "en"
                },
                {
                    "@value": "cerfeuil",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Chervil",
            "skos:broader": [
                "dfc-pt:Herb",
                "dfc-pt:aromatic"
            ]
        },
        {
            "@id": "dfc-pt:Chestnut",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chestnut",
                    "@language": "en"
                },
                {
                    "@value": "marron",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Chestnut",
            "skos:broader": [
                "dfc-pt:Nut"
            ]
        },
        {
            "@id": "dfc-pt:Chicken",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chicken",
                    "@language": "en"
                },
                {
                    "@value": "poulet",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Chicken",
            "skos:broader": [
                "dfc-pt:Poultry"
            ]
        },
        {
            "@id": "dfc-pt:Chicory",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chicory",
                    "@language": "en"
                },
                {
                    "@value": "chicorée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Chicory",
            "skos:broader": [
                "dfc-pt:Salad"
            ]
        },
        {
            "@id": "dfc-pt:ChilliPepper",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chilli pepper",
                    "@language": "en"
                },
                {
                    "@value": "piment",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ChilliPepper",
            "skos:broader": [
                "dfc-pt:Herb",
                "dfc-pt:aromatic"
            ]
        },
        {
            "@id": "dfc-pt:ChineseCabbage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chinese cabbage",
                    "@language": "en"
                },
                {
                    "@value": "chou chinois",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ChineseCabbage",
            "skos:broader": [
                "dfc-pt:Cabbage"
            ]
        },
        {
            "@id": "dfc-pt:Chive",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chive",
                    "@language": "en"
                },
                {
                    "@value": "ciboulette",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Chive",
            "skos:broader": [
                "dfc-pt:Herb",
                "dfc-pt:aromatic"
            ]
        },
        {
            "@id": "dfc-pt:Cider",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cider",
                    "@language": "en"
                },
                {
                    "@value": "cidre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Cider",
            "skos:broader": [
                "dfc-pt:AlcoholicBeverage"
            ]
        },
        {
            "@id": "dfc-pt:Clementine",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "clementine",
                    "@language": "en"
                },
                {
                    "@value": "clémentine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Clementine",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:ClusterTomato",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cluster tomato",
                    "@language": "en"
                },
                {
                    "@value": "tomate en grappe",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ClusterTomato",
            "skos:broader": [
                "dfc-pt:Tomato"
            ]
        },
        {
            "@id": "dfc-pt:Confectionery",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "confectionery",
                    "@language": "en"
                },
                {
                    "@value": "confiserie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Confectionery",
            "skos:broader": [
                "dfc-pt:SweetGroceries"
            ]
        },
        {
            "@id": "dfc-pt:CookedMeat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cooked meat",
                    "@language": "en"
                },
                {
                    "@value": "viande cuite",
                    "@language": "fr"
                }
            ],
            "skos:notation": "CookedMeat",
            "skos:broader": [
                "dfc-pt:Pork"
            ]
        },
        {
            "@id": "dfc-pt:Coriander",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "coriander",
                    "@language": "en"
                },
                {
                    "@value": "coriandre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Coriander",
            "skos:broader": [
                "dfc-pt:Herb",
                "dfc-pt:aromatic"
            ]
        },
        {
            "@id": "dfc-pt:CornSalad",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "corn salad/lambs lettuce",
                    "@language": "en"
                },
                {
                    "@value": "mâche",
                    "@language": "fr"
                }
            ],
            "skos:notation": "CornSalad",
            "skos:broader": [
                "dfc-pt:Salad"
            ]
        },
        {
            "@id": "dfc-pt:Cosmetic",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cosmetic",
                    "@language": "en"
                },
                {
                    "@value": "cosmétique",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Cosmetic",
            "skos:broader": [
                "dfc-pt:Inedible"
            ]
        },
        {
            "@id": "dfc-pt:CoulemelleMushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "parasol mushroom",
                    "@language": "en"
                },
                {
                    "@value": "coulemelle",
                    "@language": "fr"
                }
            ],
            "skos:notation": "CoulemelleMushroom",
            "skos:broader": [
                "dfc-pt:Mushroom"
            ]
        },
        {
            "@id": "dfc-pt:Courgette",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "courgette",
                    "@language": "en"
                },
                {
                    "@value": "courgette",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Courgette",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:CowDairyProduct",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cow dairy product",
                    "@language": "en"
                },
                {
                    "@value": "produit laitier de vache",
                    "@language": "fr"
                }
            ],
            "skos:notation": "CowDairyProduct",
            "skos:broader": [
                "dfc-pt:DairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:CreamCheese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cream cheese",
                    "@language": "en"
                },
                {
                    "@value": "fromage blanc",
                    "@language": "fr"
                }
            ],
            "skos:notation": "CreamCheese",
            "skos:broader": [
                "dfc-pt:CowDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:CrepeAndGalette",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "crepe and galette",
                    "@language": "en"
                },
                {
                    "@value": "crêpe et galette",
                    "@language": "fr"
                }
            ],
            "skos:notation": "CrepeAndGalette",
            "skos:broader": [
                "dfc-pt:SavoryGroceries"
            ]
        },
        {
            "@id": "dfc-pt:Cress",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cress",
                    "@language": "en"
                },
                {
                    "@value": "cresson",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Cress",
            "skos:broader": [
                "dfc-pt:Salad"
            ]
        },
        {
            "@id": "dfc-pt:Cucumber",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cucumber",
                    "@language": "en"
                },
                {
                    "@value": "concombre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Cucumber",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Currant",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "currant",
                    "@language": "en"
                },
                {
                    "@value": "groseille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Currant",
            "skos:broader": [
                "dfc-pt:Berry"
            ]
        },
        {
            "@id": "dfc-pt:DairyDessert",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dairy dessert",
                    "@language": "en"
                },
                {
                    "@value": "dessert lacté",
                    "@language": "fr"
                }
            ],
            "skos:notation": "DairyDessert",
            "skos:broader": [
                "dfc-pt:CowDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:DairyProduct",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dairy product",
                    "@language": "en"
                },
                {
                    "@value": "produit laitier",
                    "@language": "fr"
                }
            ],
            "skos:notation": "DairyProduct"
        },
        {
            "@id": "dfc-pt:Dandelion",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dandelion",
                    "@language": "en"
                },
                {
                    "@value": "pissenlit",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Dandelion",
            "skos:broader": [
                "dfc-pt:Salad"
            ]
        },
        {
            "@id": "dfc-pt:DeathsTrumpet",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "deaths trumpet",
                    "@language": "en"
                },
                {
                    "@value": "trompette de la mort",
                    "@language": "fr"
                }
            ],
            "skos:notation": "DeathsTrumpet",
            "skos:broader": [
                "dfc-pt:Mushroom"
            ]
        },
        {
            "@id": "dfc-pt:Delicatessen",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "delicatessen",
                    "@language": "en"
                },
                {
                    "@value": "charcuterie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Delicatessen",
            "skos:broader": [
                "dfc-pt:Pork"
            ]
        },
        {
            "@id": "dfc-pt:Digestive",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "digestive",
                    "@language": "en"
                },
                {
                    "@value": "digestif",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Digestive",
            "skos:broader": [
                "dfc-pt:AlcoholicBeverage"
            ]
        },
        {
            "@id": "dfc-pt:Dill",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dill",
                    "@language": "en"
                },
                {
                    "@value": "aneth",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Dill",
            "skos:broader": [
                "dfc-pt:Herb",
                "dfc-pt:aromatic"
            ]
        },
        {
            "@id": "dfc-pt:DriedFruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dried fruit",
                    "@language": "en"
                },
                {
                    "@value": "fruit sec",
                    "@language": "fr"
                }
            ],
            "skos:notation": "DriedFruit",
            "skos:broader": [
                "dfc-pt:ProcessedFruit"
            ]
        },
        {
            "@id": "dfc-pt:DriedGoods",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dried goods",
                    "@language": "en"
                },
                {
                    "@value": "produits sec",
                    "@language": "fr"
                }
            ],
            "skos:notation": "DriedGoods",
            "skos:broader": [
                "dfc-pt:LocalGroceryStore"
            ]
        },
        {
            "@id": "dfc-pt:DriedHerb",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dried herb",
                    "@language": "en"
                },
                {
                    "@value": "aromate sec",
                    "@language": "fr"
                }
            ],
            "skos:notation": "DriedHerb",
            "skos:broader": [
                "dfc-pt:DriedGoods"
            ]
        },
        {
            "@id": "dfc-pt:DriedVegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dried vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume sec",
                    "@language": "fr"
                }
            ],
            "skos:notation": "DriedVegetable",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Drink",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "drink",
                    "@language": "en"
                },
                {
                    "@value": "boisson",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Drink"
        },
        {
            "@id": "dfc-pt:Duck",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "duck",
                    "@language": "en"
                },
                {
                    "@value": "canard",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Duck",
            "skos:broader": [
                "dfc-pt:Poultry"
            ]
        },
        {
            "@id": "dfc-pt:Egg",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "egg",
                    "@language": "en"
                },
                {
                    "@value": "œuf",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Egg",
            "skos:broader": [
                "dfc-pt:MeatProduct"
            ]
        },
        {
            "@id": "dfc-pt:Eggplant",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "eggplant",
                    "@language": "en"
                },
                {
                    "@value": "aubergine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Eggplant",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Endive",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "endive",
                    "@language": "en"
                },
                {
                    "@value": "endive",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Endive",
            "skos:broader": [
                "dfc-pt:Salad"
            ]
        },
        {
            "@id": "dfc-pt:Fennel",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fennel",
                    "@language": "en"
                },
                {
                    "@value": "fenouil",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Fennel",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Ferment",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "ferment",
            "skos:notation": "Ferment",
            "skos:broader": [
                "dfc-pt:SavoryGroceries"
            ]
        },
        {
            "@id": "dfc-pt:FestivePoultry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "festive poultry",
                    "@language": "en"
                },
                {
                    "@value": "volaille festive",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FestivePoultry",
            "skos:broader": [
                "dfc-pt:Poultry"
            ]
        },
        {
            "@id": "dfc-pt:FifthRangeVegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fifth range vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume de cinquième gamme",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FifthRangeVegetable",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Fig",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fig",
                    "@language": "en"
                },
                {
                    "@value": "figue",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Fig",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:Fish",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fish",
                    "@language": "en"
                },
                {
                    "@value": "poisson",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Fish",
            "skos:broader": [
                "dfc-pt:FisheryProduct"
            ]
        },
        {
            "@id": "dfc-pt:FisheryProduct",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fishery product",
                    "@language": "en"
                },
                {
                    "@value": "produit de la pêche",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FisheryProduct",
            "skos:broader": [
                "dfc-pt:MeatProduct"
            ]
        },
        {
            "@id": "dfc-pt:Flake",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "flake",
                    "@language": "en"
                },
                {
                    "@value": "flocon",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Flake",
            "skos:broader": [
                "dfc-pt:DriedGoods"
            ]
        },
        {
            "@id": "dfc-pt:FlavoredYogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "flavored yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt aromatisé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FlavoredYogurt",
            "skos:broader": [
                "dfc-pt:CowDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:Flour",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "flour",
                    "@language": "en"
                },
                {
                    "@value": "farine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Flour",
            "skos:broader": [
                "dfc-pt:DriedGoods"
            ]
        },
        {
            "@id": "dfc-pt:Flower",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "flower",
                    "@language": "en"
                },
                {
                    "@value": "fleur",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Flower",
            "skos:broader": [
                "dfc-pt:Inedible"
            ]
        },
        {
            "@id": "dfc-pt:FourthRangeVegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fourth range vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume de quatrième gamme",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FourthRangeVegetable",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:FreshCheese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fresh cheese",
                    "@language": "en"
                },
                {
                    "@value": "fromage frais",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FreshCheese",
            "skos:broader": [
                "dfc-pt:CowDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:FreshCream",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fresh cream",
                    "@language": "en"
                },
                {
                    "@value": "crème fraîche",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FreshCream",
            "skos:broader": [
                "dfc-pt:CowDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:FreshMeat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fresh meat",
                    "@language": "en"
                },
                {
                    "@value": "viande fraîche",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FreshMeat",
            "skos:broader": [
                "dfc-pt:Pork"
            ]
        },
        {
            "@id": "dfc-pt:Frozen",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "frozen",
                    "@language": "en"
                },
                {
                    "@value": "surgelé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Frozen"
        },
        {
            "@id": "dfc-pt:FrozenFruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "frozen fruit",
                    "@language": "en"
                },
                {
                    "@value": "fruit surgelé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FrozenFruit",
            "skos:broader": [
                "dfc-pt:Frozen"
            ]
        },
        {
            "@id": "dfc-pt:FrozenMeal",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "frozen meal",
                    "@language": "en"
                },
                {
                    "@value": "plat surgelé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FrozenMeal",
            "skos:broader": [
                "dfc-pt:Frozen"
            ]
        },
        {
            "@id": "dfc-pt:FrozenMeat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "frozen meat",
                    "@language": "en"
                },
                {
                    "@value": "viande surgelée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FrozenMeat",
            "skos:broader": [
                "dfc-pt:Frozen"
            ]
        },
        {
            "@id": "dfc-pt:FrozenVegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "frozen vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume surgelé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FrozenVegetable",
            "skos:broader": [
                "dfc-pt:Frozen"
            ]
        },
        {
            "@id": "dfc-pt:Fruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fruit",
                    "@language": "en"
                },
                {
                    "@value": "fruits",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Fruit"
        },
        {
            "@id": "dfc-pt:FruitInCompote",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fruit in compote",
                    "@language": "en"
                },
                {
                    "@value": "fruit en compote",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FruitInCompote",
            "skos:broader": [
                "dfc-pt:ProcessedFruit"
            ]
        },
        {
            "@id": "dfc-pt:FruitJuice",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fruit juice",
                    "@language": "en"
                },
                {
                    "@value": "jus de fruits",
                    "@language": "fr"
                }
            ],
            "skos:notation": "FruitJuice",
            "skos:broader": [
                "dfc-pt:SoftDrink"
            ]
        },
        {
            "@id": "dfc-pt:Garlic",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "garlic",
                    "@language": "en"
                },
                {
                    "@value": "ail",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Garlic",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:GirolleMushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "girolle mushroom",
                    "@language": "en"
                },
                {
                    "@value": "girolle",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GirolleMushroom",
            "skos:broader": [
                "dfc-pt:Mushroom"
            ]
        },
        {
            "@id": "dfc-pt:GoatDairyDessert",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat dairy dessert",
                    "@language": "en"
                },
                {
                    "@value": "dessert lacté de chèvre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GoatDairyDessert",
            "skos:broader": [
                "dfc-pt:GoatDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:GoatDairyProduct",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat dairy product",
                    "@language": "en"
                },
                {
                    "@value": "produit laitier de chèvre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GoatDairyProduct",
            "skos:broader": [
                "dfc-pt:DairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:GoatFlavoredYogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat flavored yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt de chèvre aromatisé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GoatFlavoredYogurt",
            "skos:broader": [
                "dfc-pt:GoatDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:GoatFreshCheese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat fresh cheese",
                    "@language": "en"
                },
                {
                    "@value": "fromage frais de chèvre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GoatFreshCheese",
            "skos:broader": [
                "dfc-pt:GoatDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:GoatMatureCheese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat mature cheese",
                    "@language": "en"
                },
                {
                    "@value": "fromage de chèvre affiné",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GoatMatureCheese",
            "skos:broader": [
                "dfc-pt:GoatDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:GoatMilk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat milk",
                    "@language": "en"
                },
                {
                    "@value": "lait de chèvre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GoatMilk",
            "skos:broader": [
                "dfc-pt:GoatDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:GoatNaturalYogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat natural yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt nature de chèvre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GoatNaturalYogurt",
            "skos:broader": [
                "dfc-pt:GoatDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:GoatSweetYogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat sweet yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt sucré de chèvre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GoatSweetYogurt",
            "skos:broader": [
                "dfc-pt:GoatDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:GoatYogurtOnABedOfFruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat yogurt on a bed of fruit",
                    "@language": "en"
                },
                {
                    "@value": "yaourt de chèvre sur lit de fruits",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GoatYogurtOnABedOfFruit",
            "skos:broader": [
                "dfc-pt:GoatDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:GoatYogurtWithFruits",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat yogurt with fruits",
                    "@language": "en"
                },
                {
                    "@value": "yaourt de chèvre aux fruits",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GoatYogurtWithFruits",
            "skos:broader": [
                "dfc-pt:GoatDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:Goose",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goose",
                    "@language": "en"
                },
                {
                    "@value": "oie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Goose",
            "skos:broader": [
                "dfc-pt:Poultry"
            ]
        },
        {
            "@id": "dfc-pt:Gooseberry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "gooseberry",
                    "@language": "en"
                },
                {
                    "@value": "groseille à maquereau",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Gooseberry",
            "skos:broader": [
                "dfc-pt:Berry"
            ]
        },
        {
            "@id": "dfc-pt:Grain",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "grain",
                    "@language": "en"
                },
                {
                    "@value": "céréale",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Grain",
            "skos:broader": [
                "dfc-pt:DriedGoods",
                "dfc-pt:SavoryGroceries"
            ]
        },
        {
            "@id": "dfc-pt:Grape",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "grape",
                    "@language": "en"
                },
                {
                    "@value": "raisin",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Grape",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:GreenGarlic",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "green garlic",
                    "@language": "en"
                },
                {
                    "@value": "aillet",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GreenGarlic",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:GrillingMeat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "grilling meat",
                    "@language": "en"
                },
                {
                    "@value": "viande à griller",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GrillingMeat",
            "skos:broader": [
                "dfc-pt:Beef"
            ]
        },
        {
            "@id": "dfc-pt:GuineaFowl",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "guinea fowl",
                    "@language": "en"
                },
                {
                    "@value": "pintade",
                    "@language": "fr"
                }
            ],
            "skos:notation": "GuineaFowl",
            "skos:broader": [
                "dfc-pt:Poultry"
            ]
        },
        {
            "@id": "dfc-pt:Hazelnut",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "hazelnut",
                    "@language": "en"
                },
                {
                    "@value": "noisette",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Hazelnut",
            "skos:broader": [
                "dfc-pt:Nut"
            ]
        },
        {
            "@id": "dfc-pt:Herb",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "herb",
                    "@language": "en"
                },
                {
                    "@value": "aromate",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Herb",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:HierloomSquash",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "hierloom squash",
                    "@language": "en"
                },
                {
                    "@value": "variété ancienne de courge",
                    "@language": "fr"
                }
            ],
            "skos:notation": "HierloomSquash",
            "skos:broader": [
                "dfc-pt:Squash"
            ]
        },
        {
            "@id": "dfc-pt:HierloomTomato",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "hierloom tomato",
                    "@language": "en"
                },
                {
                    "@value": "tomate ancienne",
                    "@language": "fr"
                }
            ],
            "skos:notation": "HierloomTomato",
            "skos:broader": [
                "dfc-pt:Tomato"
            ]
        },
        {
            "@id": "dfc-pt:Honey",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "honey",
                    "@language": "en"
                },
                {
                    "@value": "miel",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Honey",
            "skos:broader": [
                "dfc-pt:SweetGroceries"
            ]
        },
        {
            "@id": "dfc-pt:Inedible",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "inedible",
                    "@language": "en"
                },
                {
                    "@value": "non alimentaire",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Inedible"
        },
        {
            "@id": "dfc-pt:Jam",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "jam",
                    "@language": "en"
                },
                {
                    "@value": "confiture",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Jam",
            "skos:broader": [
                "dfc-pt:SweetGroceries"
            ]
        },
        {
            "@id": "dfc-pt:JerusalemArtichoke",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "jerusalem artichoke",
                    "@language": "en"
                },
                {
                    "@value": "topinambour",
                    "@language": "fr"
                }
            ],
            "skos:notation": "JerusalemArtichoke",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Kale",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "curly kale",
                    "@language": "en"
                },
                {
                    "@value": "chou frisé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Kale",
            "skos:broader": [
                "dfc-pt:Cabbage"
            ]
        },
        {
            "@id": "dfc-pt:KaleCabbage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "kale",
                    "@language": "en"
                },
                {
                    "@value": "chou kale",
                    "@language": "fr"
                }
            ],
            "skos:notation": "KaleCabbage",
            "skos:broader": [
                "dfc-pt:Cabbage"
            ]
        },
        {
            "@id": "dfc-pt:Kiwi",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "kiwi",
                    "@language": "en"
                },
                {
                    "@value": "kiwi",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Kiwi",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:Kohlrabi",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "kohlrabi",
                    "@language": "en"
                },
                {
                    "@value": "chou-rave",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Kohlrabi",
            "skos:broader": [
                "dfc-pt:Cabbage"
            ]
        },
        {
            "@id": "dfc-pt:Lamb",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "lamb",
                    "@language": "en"
                },
                {
                    "@value": "agneau",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Lamb",
            "skos:broader": [
                "dfc-pt:MeatProduct"
            ]
        },
        {
            "@id": "dfc-pt:Laurel",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bay laurel",
                    "@language": "en"
                },
                {
                    "@value": "laurier",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Laurel",
            "skos:broader": [
                "dfc-pt:Herb",
                "dfc-pt:aromatic"
            ]
        },
        {
            "@id": "dfc-pt:Leek",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "leek",
                    "@language": "en"
                },
                {
                    "@value": "poireau",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Leek",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Lemon",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "lemon",
                    "@language": "en"
                },
                {
                    "@value": "citron",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Lemon",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:Lemonade",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "lemonade",
                    "@language": "en"
                },
                {
                    "@value": "limonade",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Lemonade",
            "skos:broader": [
                "dfc-pt:SoftDrink"
            ]
        },
        {
            "@id": "dfc-pt:Lentils",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "lentils",
                    "@language": "en"
                },
                {
                    "@value": "lentilles",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Lentils",
            "skos:broader": [
                "dfc-pt:DriedVegetable"
            ]
        },
        {
            "@id": "dfc-pt:Lettuce",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "lettuce",
                    "@language": "en"
                },
                {
                    "@value": "laitue",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Lettuce",
            "skos:broader": [
                "dfc-pt:Salad"
            ]
        },
        {
            "@id": "dfc-pt:LocalGroceryStore",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "local grocery store",
                    "@language": "en"
                },
                {
                    "@value": "épicerie locale",
                    "@language": "fr"
                }
            ],
            "skos:notation": "LocalGroceryStore"
        },
        {
            "@id": "dfc-pt:Mandarin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "mandarin",
                    "@language": "en"
                },
                {
                    "@value": "mandarine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Mandarin",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:MatureCheese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "mature cheese",
                    "@language": "en"
                },
                {
                    "@value": "fromage affiné",
                    "@language": "fr"
                }
            ],
            "skos:notation": "MatureCheese",
            "skos:broader": [
                "dfc-pt:CowDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:MeatProduct",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "meat product",
                    "@language": "en"
                },
                {
                    "@value": "produit carné",
                    "@language": "fr"
                }
            ],
            "skos:notation": "MeatProduct"
        },
        {
            "@id": "dfc-pt:Medlar",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "medlar",
                    "@language": "en"
                },
                {
                    "@value": "nèfle",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Medlar",
            "skos:broader": [
                "dfc-pt:Fruit",
                "dfc-pt:Nut"
            ]
        },
        {
            "@id": "dfc-pt:Melon",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "melon",
                    "@language": "en"
                },
                {
                    "@value": "melon",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Melon",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Mesclun",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "mesclun",
                    "@language": "en"
                },
                {
                    "@value": "mesclun",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Mesclun",
            "skos:broader": [
                "dfc-pt:Salad"
            ]
        },
        {
            "@id": "dfc-pt:Milk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "milk",
                    "@language": "en"
                },
                {
                    "@value": "lait",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Milk",
            "skos:broader": [
                "dfc-pt:CowDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:MilkyMushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "milky mushroom",
                    "@language": "en"
                },
                {
                    "@value": "lactaire",
                    "@language": "fr"
                }
            ],
            "skos:notation": "MilkyMushroom",
            "skos:broader": [
                "dfc-pt:Mushroom"
            ]
        },
        {
            "@id": "dfc-pt:Mint",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "mint",
                    "@language": "en"
                },
                {
                    "@value": "menthe",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Mint",
            "skos:broader": [
                "dfc-pt:Herb",
                "dfc-pt:aromatic"
            ]
        },
        {
            "@id": "dfc-pt:Morel",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "morel",
                    "@language": "en"
                },
                {
                    "@value": "morille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Morel",
            "skos:broader": [
                "dfc-pt:Mushroom"
            ]
        },
        {
            "@id": "dfc-pt:Mousseron",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "mousseron",
                    "@language": "en"
                },
                {
                    "@value": "mousseron",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Mousseron",
            "skos:broader": [
                "dfc-pt:Mushroom"
            ]
        },
        {
            "@id": "dfc-pt:Mushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "mushroom",
                    "@language": "en"
                },
                {
                    "@value": "champignon",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Mushroom",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:NaturalYogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "natural yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt nature",
                    "@language": "fr"
                }
            ],
            "skos:notation": "NaturalYogurt",
            "skos:broader": [
                "dfc-pt:CowDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:Nectarine",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "nectarine",
                    "@language": "en"
                },
                {
                    "@value": "nectarine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Nectarine",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:NonLocalFruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "non local fruit",
                    "@language": "en"
                },
                {
                    "@value": "fruit non local",
                    "@language": "fr"
                }
            ],
            "skos:notation": "NonLocalFruit",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:NonLocalVegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "non local vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume non local",
                    "@language": "fr"
                }
            ],
            "skos:notation": "NonLocalVegetable",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Nut",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "nut",
                    "@language": "en"
                },
                {
                    "@value": "fruit à coque",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Nut",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:Oil",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "oil",
                    "@language": "en"
                },
                {
                    "@value": "huile",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Oil",
            "skos:broader": [
                "dfc-pt:SavoryGroceries"
            ]
        },
        {
            "@id": "dfc-pt:Onion",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "onion",
                    "@language": "en"
                },
                {
                    "@value": "oignon",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Onion",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Orange",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "orange",
                    "@language": "en"
                },
                {
                    "@value": "orange",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Orange",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:OtherCheese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "other cheese",
                    "@language": "en"
                },
                {
                    "@value": "autre fromage",
                    "@language": "fr"
                }
            ],
            "skos:notation": "OtherCheese",
            "skos:broader": [
                "dfc-pt:OtherDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:OtherDairyProduct",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "other dairy product",
                    "@language": "en"
                },
                {
                    "@value": "autre produit laitier",
                    "@language": "fr"
                }
            ],
            "skos:notation": "OtherDairyProduct",
            "skos:broader": [
                "dfc-pt:DairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:OtherMilk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "other milk",
                    "@language": "en"
                },
                {
                    "@value": "autre lait",
                    "@language": "fr"
                }
            ],
            "skos:notation": "OtherMilk",
            "skos:broader": [
                "dfc-pt:OtherDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:OysterMushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "oyster mushroom",
                    "@language": "en"
                },
                {
                    "@value": "pleurote",
                    "@language": "fr"
                }
            ],
            "skos:notation": "OysterMushroom",
            "skos:broader": [
                "dfc-pt:Mushroom"
            ]
        },
        {
            "@id": "dfc-pt:ParisMushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "button mushroom",
                    "@language": "en"
                },
                {
                    "@value": "champignon de Paris",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ParisMushroom",
            "skos:broader": [
                "dfc-pt:Mushroom"
            ]
        },
        {
            "@id": "dfc-pt:Parsley",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "parsley",
                    "@language": "en"
                },
                {
                    "@value": "persil",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Parsley",
            "skos:broader": [
                "dfc-pt:Herb",
                "dfc-pt:aromatic"
            ]
        },
        {
            "@id": "dfc-pt:Parsnip",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "parsnip",
                    "@language": "en"
                },
                {
                    "@value": "panais",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Parsnip",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Pasta",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pasta",
                    "@language": "en"
                },
                {
                    "@value": "pâtes",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Pasta",
            "skos:broader": [
                "dfc-pt:SavoryGroceries"
            ]
        },
        {
            "@id": "dfc-pt:Pastry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pastry",
                    "@language": "en"
                },
                {
                    "@value": "pâtisserie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Pastry",
            "skos:broader": [
                "dfc-pt:SweetGroceries"
            ]
        },
        {
            "@id": "dfc-pt:PattypanSquash",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pattypan squash",
                    "@language": "en"
                },
                {
                    "@value": "pâtisson",
                    "@language": "fr"
                }
            ],
            "skos:notation": "PattypanSquash",
            "skos:broader": [
                "dfc-pt:Squash"
            ]
        },
        {
            "@id": "dfc-pt:Peach",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "peach",
                    "@language": "en"
                },
                {
                    "@value": "pêche",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Peach",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:Pear",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pear",
                    "@language": "en"
                },
                {
                    "@value": "poire",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Pear",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:Peas",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "peas",
                    "@language": "en"
                },
                {
                    "@value": "pois",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Peas",
            "skos:broader": [
                "dfc-pt:DriedVegetable"
            ]
        },
        {
            "@id": "dfc-pt:Pepper",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pepper",
                    "@language": "en"
                },
                {
                    "@value": "poivron",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Pepper",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:PiePastry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pie pastry",
                    "@language": "en"
                },
                {
                    "@value": "pâte à tarte",
                    "@language": "fr"
                }
            ],
            "skos:notation": "PiePastry",
            "skos:broader": [
                "dfc-pt:SavoryGroceries"
            ]
        },
        {
            "@id": "dfc-pt:Pigeon",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pigeon",
                    "@language": "en"
                },
                {
                    "@value": "pigeon",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Pigeon",
            "skos:broader": [
                "dfc-pt:Poultry"
            ]
        },
        {
            "@id": "dfc-pt:Plant",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "plant",
                    "@language": "en"
                },
                {
                    "@value": "plante",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Plant",
            "skos:broader": [
                "dfc-pt:Inedible"
            ]
        },
        {
            "@id": "dfc-pt:Plum",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "plum",
                    "@language": "en"
                },
                {
                    "@value": "prune",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Plum",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:Porcini",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "porcini",
                    "@language": "en"
                },
                {
                    "@value": "cèpes",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Porcini",
            "skos:broader": [
                "dfc-pt:Mushroom"
            ]
        },
        {
            "@id": "dfc-pt:Pork",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pork",
                    "@language": "en"
                },
                {
                    "@value": "porc",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Pork",
            "skos:broader": [
                "dfc-pt:MeatProduct"
            ]
        },
        {
            "@id": "dfc-pt:Potato",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "potato",
                    "@language": "en"
                },
                {
                    "@value": "pomme de terre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Potato",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Poultry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "poultry",
                    "@language": "en"
                },
                {
                    "@value": "volaille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Poultry",
            "skos:broader": [
                "dfc-pt:MeatProduct"
            ]
        },
        {
            "@id": "dfc-pt:ProcessedFruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "processed fruit",
                    "@language": "en"
                },
                {
                    "@value": "fruit transformé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ProcessedFruit",
            "skos:broader": [
                "dfc-pt:LocalGroceryStore"
            ]
        },
        {
            "@id": "dfc-pt:ProcessedVegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "processed vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume transformé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ProcessedVegetable",
            "skos:broader": [
                "dfc-pt:LocalGroceryStore"
            ]
        },
        {
            "@id": "dfc-pt:Prune",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "prune",
                    "@language": "en"
                },
                {
                    "@value": "pruneau",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Prune",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:Pulse",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "pulse",
            "skos:notation": "Pulse",
            "skos:broader": [
                "dfc-pt:DriedGoods"
            ]
        },
        {
            "@id": "dfc-pt:Pumpkin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pumpkin",
                    "@language": "en"
                },
                {
                    "@value": "potiron",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Pumpkin",
            "skos:broader": [
                "dfc-pt:Squash"
            ]
        },
        {
            "@id": "dfc-pt:Purslane",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Purslane",
                    "@language": "en"
                },
                {
                    "@value": "Pourpier",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Purslane",
            "skos:broader": [
                "dfc-pt:Salad"
            ]
        },
        {
            "@id": "dfc-pt:Quail",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "quail",
                    "@language": "en"
                },
                {
                    "@value": "caille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Quail",
            "skos:broader": [
                "dfc-pt:Poultry"
            ]
        },
        {
            "@id": "dfc-pt:Quince",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "quince",
                    "@language": "en"
                },
                {
                    "@value": "coing",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Quince",
            "skos:broader": [
                "dfc-pt:Fruit"
            ]
        },
        {
            "@id": "dfc-pt:Quinoa",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "quinoa",
                    "@language": "en"
                },
                {
                    "@value": "quinoa",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Quinoa",
            "skos:broader": [
                "dfc-pt:DriedVegetable"
            ]
        },
        {
            "@id": "dfc-pt:Rabbit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "rabbit",
                    "@language": "en"
                },
                {
                    "@value": "lapin",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Rabbit",
            "skos:broader": [
                "dfc-pt:MeatProduct"
            ]
        },
        {
            "@id": "dfc-pt:Radish",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "radish",
                    "@language": "en"
                },
                {
                    "@value": "radis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Radish",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Raspberry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "raspberry",
                    "@language": "en"
                },
                {
                    "@value": "framboise",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Raspberry",
            "skos:broader": [
                "dfc-pt:Berry"
            ]
        },
        {
            "@id": "dfc-pt:ReadyMeal",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "ready meal",
                    "@language": "en"
                },
                {
                    "@value": "plat cuisiné",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ReadyMeal",
            "skos:broader": [
                "dfc-pt:LocalGroceryStore"
            ]
        },
        {
            "@id": "dfc-pt:RedCabbage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "red cabbage",
                    "@language": "en"
                },
                {
                    "@value": "chou rouge",
                    "@language": "fr"
                }
            ],
            "skos:notation": "RedCabbage",
            "skos:broader": [
                "dfc-pt:Cabbage"
            ]
        },
        {
            "@id": "dfc-pt:Rhubarb",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "rhubarb",
                    "@language": "en"
                },
                {
                    "@value": "rhubarbe",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Rhubarb",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Rice",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "rice",
                    "@language": "en"
                },
                {
                    "@value": "riz",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Rice",
            "skos:broader": [
                "dfc-pt:SavoryGroceries"
            ]
        },
        {
            "@id": "dfc-pt:Rocket",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "rocket",
                    "@language": "en"
                },
                {
                    "@value": "roquette",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Rocket",
            "skos:broader": [
                "dfc-pt:Salad"
            ]
        },
        {
            "@id": "dfc-pt:Romanesco",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "romanesco cauliflower",
                    "@language": "en"
                },
                {
                    "@value": "chou romanesco",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Romanesco",
            "skos:broader": [
                "dfc-pt:Cabbage"
            ]
        },
        {
            "@id": "dfc-pt:Rosemary",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "rosemary",
                    "@language": "en"
                },
                {
                    "@value": "romarin",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Rosemary",
            "skos:broader": [
                "dfc-pt:Herb",
                "dfc-pt:aromatic"
            ]
        },
        {
            "@id": "dfc-pt:RoundTomato",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "round tomato",
                    "@language": "en"
                },
                {
                    "@value": "tomate ronde",
                    "@language": "fr"
                }
            ],
            "skos:notation": "RoundTomato",
            "skos:broader": [
                "dfc-pt:Tomato"
            ]
        },
        {
            "@id": "dfc-pt:Rutabaga",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "rutabaga",
                    "@language": "en"
                },
                {
                    "@value": "rutabaga",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Rutabaga",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Sage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sage",
                    "@language": "en"
                },
                {
                    "@value": "sauge",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Sage",
            "skos:broader": [
                "dfc-pt:Herb",
                "dfc-pt:aromatic"
            ]
        },
        {
            "@id": "dfc-pt:Salad",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "salad",
                    "@language": "en"
                },
                {
                    "@value": "salade",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Salad",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:SaladMix",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "salad mix",
                    "@language": "en"
                },
                {
                    "@value": "mélange de salades",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SaladMix",
            "skos:broader": [
                "dfc-pt:Salad"
            ]
        },
        {
            "@id": "dfc-pt:Salsify",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "salsify",
                    "@language": "en"
                },
                {
                    "@value": "salsifis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Salsify",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Salt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "salt",
                    "@language": "en"
                },
                {
                    "@value": "sel",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Salt",
            "skos:broader": [
                "dfc-pt:SavoryGroceries"
            ]
        },
        {
            "@id": "dfc-pt:Salting",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "salting",
                    "@language": "en"
                },
                {
                    "@value": "salaison",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Salting",
            "skos:broader": [
                "dfc-pt:Pork"
            ]
        },
        {
            "@id": "dfc-pt:SavoryGroceries",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "savory groceries",
                    "@language": "en"
                },
                {
                    "@value": "épicerie salée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SavoryGroceries",
            "skos:broader": [
                "dfc-pt:LocalGroceryStore"
            ]
        },
        {
            "@id": "dfc-pt:SavoyCabbage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "savoy cabbage",
                    "@language": "en"
                },
                {
                    "@value": "chou pommé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SavoyCabbage",
            "skos:broader": [
                "dfc-pt:Cabbage"
            ]
        },
        {
            "@id": "dfc-pt:Seashell",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "seashell",
                    "@language": "en"
                },
                {
                    "@value": "coquillage",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Seashell",
            "skos:broader": [
                "dfc-pt:FisheryProduct"
            ]
        },
        {
            "@id": "dfc-pt:Seed",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "seed",
                    "@language": "en"
                },
                {
                    "@value": "graine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Seed",
            "skos:broader": [
                "dfc-pt:DriedGoods"
            ]
        },
        {
            "@id": "dfc-pt:Semolina",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "semolina",
                    "@language": "en"
                },
                {
                    "@value": "semoule",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Semolina",
            "skos:broader": [
                "dfc-pt:SavoryGroceries"
            ]
        },
        {
            "@id": "dfc-pt:Shallot",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "shallot",
                    "@language": "en"
                },
                {
                    "@value": "échalote",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Shallot",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:SheepDairyDessert",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep dairy dessert",
                    "@language": "en"
                },
                {
                    "@value": "dessert lacté de brebis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SheepDairyDessert",
            "skos:broader": [
                "dfc-pt:SheepDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:SheepDairyProduct",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep dairy product",
                    "@language": "en"
                },
                {
                    "@value": "produit laitier de brebis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SheepDairyProduct",
            "skos:broader": [
                "dfc-pt:DairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:SheepFlavoredYogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep flavored yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt de brebis aromatisé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SheepFlavoredYogurt",
            "skos:broader": [
                "dfc-pt:SheepDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:SheepFreshCheese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep fresh cheese",
                    "@language": "en"
                },
                {
                    "@value": "Fromage frais de brebis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SheepFreshCheese",
            "skos:broader": [
                "dfc-pt:SheepDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:SheepMatureCheese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep mature cheese",
                    "@language": "en"
                },
                {
                    "@value": "fromage affiné de brebis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SheepMatureCheese",
            "skos:broader": [
                "dfc-pt:SheepDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:SheepMilk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep milk",
                    "@language": "en"
                },
                {
                    "@value": "lait de brebis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SheepMilk",
            "skos:broader": [
                "dfc-pt:SheepDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:SheepNaturalYogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep natural yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt de brebis nature",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SheepNaturalYogurt",
            "skos:broader": [
                "dfc-pt:SheepDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:SheepSweetYogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep sweet yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt sucré de brebis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SheepSweetYogurt",
            "skos:broader": [
                "dfc-pt:SheepDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:SheepYogurtOnABedOfFruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep yogurt on a bed of fruit",
                    "@language": "en"
                },
                {
                    "@value": "yaourt de brebis sur lit de fruits",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SheepYogurtOnABedOfFruit",
            "skos:broader": [
                "dfc-pt:SheepDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:SheepYogurtWithFruits",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep yogurt with fruits",
                    "@language": "en"
                },
                {
                    "@value": "yaourt de brebis aux fruits",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SheepYogurtWithFruits",
            "skos:broader": [
                "dfc-pt:SheepDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:SheepfootMushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheepfoot mushroom",
                    "@language": "en"
                },
                {
                    "@value": "Pied-de-mouton",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SheepfootMushroom",
            "skos:broader": [
                "dfc-pt:Mushroom"
            ]
        },
        {
            "@id": "dfc-pt:Shellfish",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "shellfish",
                    "@language": "en"
                },
                {
                    "@value": "crustacés",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Shellfish",
            "skos:broader": [
                "dfc-pt:FisheryProduct"
            ]
        },
        {
            "@id": "dfc-pt:SimmeringMeat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "simmering meat",
                    "@language": "en"
                },
                {
                    "@value": "viande à mijoter",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SimmeringMeat",
            "skos:broader": [
                "dfc-pt:Beef"
            ]
        },
        {
            "@id": "dfc-pt:SmoothCabbage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "smooth cabbage",
                    "@language": "en"
                },
                {
                    "@value": "chou lisse",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SmoothCabbage",
            "skos:broader": [
                "dfc-pt:Cabbage"
            ]
        },
        {
            "@id": "dfc-pt:Smoothie",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "smoothie",
                    "@language": "en"
                },
                {
                    "@value": "smoothie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Smoothie",
            "skos:broader": [
                "dfc-pt:SoftDrink"
            ]
        },
        {
            "@id": "dfc-pt:Snack",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "snack",
            "skos:notation": "Snack",
            "skos:broader": [
                "dfc-pt:SavoryGroceries"
            ]
        },
        {
            "@id": "dfc-pt:Snails",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "snails",
                    "@language": "en"
                },
                {
                    "@value": "escargots",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Snails",
            "skos:broader": [
                "dfc-pt:MeatProduct"
            ]
        },
        {
            "@id": "dfc-pt:SoftDrink",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "soft drink",
                    "@language": "en"
                },
                {
                    "@value": "boisson non alcoolisée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SoftDrink",
            "skos:broader": [
                "dfc-pt:Drink"
            ]
        },
        {
            "@id": "dfc-pt:Soup",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "soup",
                    "@language": "en"
                },
                {
                    "@value": "soupe",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Soup",
            "skos:broader": [
                "dfc-pt:ProcessedVegetable"
            ]
        },
        {
            "@id": "dfc-pt:Spinach",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "spinach",
                    "@language": "en"
                },
                {
                    "@value": "épinards",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Spinach",
            "skos:broader": [
                "dfc-pt:Salad"
            ]
        },
        {
            "@id": "dfc-pt:Squash",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "squash",
                    "@language": "en"
                },
                {
                    "@value": "courge",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Squash",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Strawberry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "strawberry",
                    "@language": "en"
                },
                {
                    "@value": "fraise",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Strawberry",
            "skos:broader": [
                "dfc-pt:Berry"
            ]
        },
        {
            "@id": "dfc-pt:SweetGroceries",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sweet groceries",
                    "@language": "en"
                },
                {
                    "@value": "épicerie sucrée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SweetGroceries",
            "skos:broader": [
                "dfc-pt:LocalGroceryStore"
            ]
        },
        {
            "@id": "dfc-pt:SweetYogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sweet yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt sucré",
                    "@language": "fr"
                }
            ],
            "skos:notation": "SweetYogurt",
            "skos:broader": [
                "dfc-pt:CowDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:Tarragon",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "tarragon",
                    "@language": "en"
                },
                {
                    "@value": "estragon",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Tarragon",
            "skos:broader": [
                "dfc-pt:Herb",
                "dfc-pt:aromatic"
            ]
        },
        {
            "@id": "dfc-pt:Thyme",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "thyme",
                    "@language": "en"
                },
                {
                    "@value": "thym",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Thyme",
            "skos:broader": [
                "dfc-pt:Herb",
                "dfc-pt:aromatic"
            ]
        },
        {
            "@id": "dfc-pt:Tomato",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "tomato",
                    "@language": "en"
                },
                {
                    "@value": "tomate",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Tomato",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:Truffle",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "truffle",
                    "@language": "en"
                },
                {
                    "@value": "truffe",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Truffle",
            "skos:broader": [
                "dfc-pt:Mushroom"
            ]
        },
        {
            "@id": "dfc-pt:Turkey",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "turkey",
                    "@language": "en"
                },
                {
                    "@value": "dinde",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Turkey",
            "skos:broader": [
                "dfc-pt:Poultry"
            ]
        },
        {
            "@id": "dfc-pt:Turnip",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "turnip",
                    "@language": "en"
                },
                {
                    "@value": "navet",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Turnip",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:UchikiKuriSquash",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "uchiki kuri squash",
                    "@language": "en"
                },
                {
                    "@value": "potimarron",
                    "@language": "fr"
                }
            ],
            "skos:notation": "UchikiKuriSquash",
            "skos:broader": [
                "dfc-pt:Squash"
            ]
        },
        {
            "@id": "dfc-pt:Veal",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "veal",
                    "@language": "en"
                },
                {
                    "@value": "veau",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Veal",
            "skos:broader": [
                "dfc-pt:MeatProduct"
            ]
        },
        {
            "@id": "dfc-pt:Vegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Vegetable"
        },
        {
            "@id": "dfc-pt:Venison",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Venison",
                    "@language": "en"
                },
                {
                    "@value": "Viande de cerf",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Venison",
            "skos:broader": [
                "dfc-pt:MeatProduct"
            ]
        },
        {
            "@id": "dfc-pt:Viennoiserie",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "viennoiserie",
                    "@language": "en"
                },
                {
                    "@value": "viennoiserie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Viennoiserie",
            "skos:broader": [
                "dfc-pt:Bakery"
            ]
        },
        {
            "@id": "dfc-pt:Walnut",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "walnut",
                    "@language": "en"
                },
                {
                    "@value": "noix",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Walnut",
            "skos:broader": [
                "dfc-pt:Nut"
            ]
        },
        {
            "@id": "dfc-pt:Wine",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "wine",
                    "@language": "en"
                },
                {
                    "@value": "vin",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Wine",
            "skos:broader": [
                "dfc-pt:AlcoholicBeverage"
            ]
        },
        {
            "@id": "dfc-pt:Yam",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "yam",
                    "@language": "en"
                },
                {
                    "@value": "Patate douce",
                    "@language": "fr"
                }
            ],
            "skos:notation": "Yam",
            "skos:broader": [
                "dfc-pt:Vegetable"
            ]
        },
        {
            "@id": "dfc-pt:YogurtOnABedOfFruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "yogurt on a bed of fruit",
                    "@language": "en"
                },
                {
                    "@value": "yaourt sur lit de fruits",
                    "@language": "fr"
                }
            ],
            "skos:notation": "YogurtOnABedOfFruit",
            "skos:broader": [
                "dfc-pt:CowDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:YogurtWithFruits",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "yogurt with fruits",
                    "@language": "en"
                },
                {
                    "@value": "yaourt aux fruits",
                    "@language": "fr"
                }
            ],
            "skos:notation": "YogurtWithFruits",
            "skos:broader": [
                "dfc-pt:CowDairyProduct"
            ]
        },
        {
            "@id": "dfc-pt:alcoholic-beverage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "alcoholic beverage",
                    "@language": "en"
                },
                {
                    "@value": "boisson alcoolisée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "alcoholic-beverage",
            "skos:broader": [
                "dfc-pt:drink"
            ]
        },
        {
            "@id": "dfc-pt:almond",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "almond",
                    "@language": "en"
                },
                {
                    "@value": "amande",
                    "@language": "fr"
                }
            ],
            "skos:notation": "almond",
            "skos:broader": [
                "dfc-pt:nut"
            ]
        },
        {
            "@id": "dfc-pt:aperitif",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "aperitif",
                    "@language": "en"
                },
                {
                    "@value": "apéritif",
                    "@language": "fr"
                }
            ],
            "skos:notation": "aperitif",
            "skos:broader": [
                "dfc-pt:alcoholic-beverage"
            ]
        },
        {
            "@id": "dfc-pt:apples",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "apples",
                    "@language": "en"
                },
                {
                    "@value": "pomme",
                    "@language": "fr"
                }
            ],
            "skos:notation": "apples",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:apricot",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "apricot",
                    "@language": "en"
                },
                {
                    "@value": "abricot",
                    "@language": "fr"
                }
            ],
            "skos:notation": "apricot",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:artichoke",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "artichoke",
                    "@language": "en"
                },
                {
                    "@value": "artichaut",
                    "@language": "fr"
                }
            ],
            "skos:notation": "artichoke",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:asparagus",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "asparagus",
                    "@language": "en"
                },
                {
                    "@value": "asperges",
                    "@language": "fr"
                }
            ],
            "skos:notation": "asparagus",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:bakery",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bakery",
                    "@language": "en"
                },
                {
                    "@value": "boulangerie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "bakery"
        },
        {
            "@id": "dfc-pt:basil",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "basil",
                    "@language": "en"
                },
                {
                    "@value": "basilic",
                    "@language": "fr"
                }
            ],
            "skos:notation": "basil",
            "skos:broader": [
                "dfc-pt:aromatic",
                "dfc-pt:herb"
            ]
        },
        {
            "@id": "dfc-pt:bean",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bean",
                    "@language": "en"
                },
                {
                    "@value": "haricot",
                    "@language": "fr"
                }
            ],
            "skos:notation": "bean",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:beans",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "beans",
                    "@language": "en"
                },
                {
                    "@value": "haricots",
                    "@language": "fr"
                }
            ],
            "skos:notation": "beans",
            "skos:broader": [
                "dfc-pt:dried-vegetable"
            ]
        },
        {
            "@id": "dfc-pt:beef",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "beef",
                    "@language": "en"
                },
                {
                    "@value": "viande bovine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "beef",
            "skos:broader": [
                "dfc-pt:meat-product"
            ]
        },
        {
            "@id": "dfc-pt:beer",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "beer",
                    "@language": "en"
                },
                {
                    "@value": "bière",
                    "@language": "fr"
                }
            ],
            "skos:notation": "beer",
            "skos:broader": [
                "dfc-pt:alcoholic-beverage"
            ]
        },
        {
            "@id": "dfc-pt:beetroot",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "beetroot",
                    "@language": "en"
                },
                {
                    "@value": "betterave rouge",
                    "@language": "fr"
                }
            ],
            "skos:notation": "beetroot",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:berry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "berry",
                    "@language": "en"
                },
                {
                    "@value": "petit fruit",
                    "@language": "fr"
                }
            ],
            "skos:notation": "berry",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:biscuit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "biscuit",
                    "@language": "en"
                },
                {
                    "@value": "biscuit",
                    "@language": "fr"
                }
            ],
            "skos:notation": "biscuit",
            "skos:broader": [
                "dfc-pt:sweet-groceries"
            ]
        },
        {
            "@id": "dfc-pt:blackberry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "blackberry",
                    "@language": "en"
                },
                {
                    "@value": "mûre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "blackberry",
            "skos:broader": [
                "dfc-pt:berry"
            ]
        },
        {
            "@id": "dfc-pt:blackcurrant",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "blackcurrant",
                    "@language": "en"
                },
                {
                    "@value": "cassis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "blackcurrant",
            "skos:broader": [
                "dfc-pt:berry"
            ]
        },
        {
            "@id": "dfc-pt:blueberry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "blueberry",
                    "@language": "en"
                },
                {
                    "@value": "myrtille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "blueberry",
            "skos:broader": [
                "dfc-pt:berry"
            ]
        },
        {
            "@id": "dfc-pt:bluefoot-mushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bluefoot mushroom",
                    "@language": "en"
                },
                {
                    "@value": "Pied-bleu",
                    "@language": "fr"
                }
            ],
            "skos:notation": "bluefoot-mushroom",
            "skos:broader": [
                "dfc-pt:mushroom"
            ]
        },
        {
            "@id": "dfc-pt:bottled-fruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bottled fruit",
                    "@language": "en"
                },
                {
                    "@value": "fruit en bocal",
                    "@language": "fr"
                }
            ],
            "skos:notation": "bottled-fruit",
            "skos:broader": [
                "dfc-pt:processed-fruit"
            ]
        },
        {
            "@id": "dfc-pt:bottled-vegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bottled vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume en bocal",
                    "@language": "fr"
                }
            ],
            "skos:notation": "bottled-vegetable",
            "skos:broader": [
                "dfc-pt:processed-vegetable"
            ]
        },
        {
            "@id": "dfc-pt:bread",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bread",
                    "@language": "en"
                },
                {
                    "@value": "pain",
                    "@language": "fr"
                }
            ],
            "skos:notation": "bread",
            "skos:broader": [
                "dfc-pt:bakery"
            ]
        },
        {
            "@id": "dfc-pt:broccoli-cabbage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "broccoli cabbage",
                    "@language": "en"
                },
                {
                    "@value": "chou brocoli",
                    "@language": "fr"
                }
            ],
            "skos:notation": "broccoli-cabbage",
            "skos:broader": [
                "dfc-pt:cabbage"
            ]
        },
        {
            "@id": "dfc-pt:brussels-sprouts",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "brussels sprouts",
                    "@language": "en"
                },
                {
                    "@value": "choux de bruxelles",
                    "@language": "fr"
                }
            ],
            "skos:notation": "brussels-sprouts",
            "skos:broader": [
                "dfc-pt:cabbage"
            ]
        },
        {
            "@id": "dfc-pt:butter",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "butter",
                    "@language": "en"
                },
                {
                    "@value": "beurre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "butter",
            "skos:broader": [
                "dfc-pt:cow-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:butternut",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "butternut",
                    "@language": "en"
                },
                {
                    "@value": "butternut",
                    "@language": "fr"
                }
            ],
            "skos:notation": "butternut",
            "skos:broader": [
                "dfc-pt:squash"
            ]
        },
        {
            "@id": "dfc-pt:cabbage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cabbage",
                    "@language": "en"
                },
                {
                    "@value": "chou",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cabbage",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:canned-fruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "canned fruit",
                    "@language": "en"
                },
                {
                    "@value": "fruit en conserve",
                    "@language": "fr"
                }
            ],
            "skos:notation": "canned-fruit",
            "skos:broader": [
                "dfc-pt:processed-fruit"
            ]
        },
        {
            "@id": "dfc-pt:canned-vegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "canned vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume en conserve",
                    "@language": "fr"
                }
            ],
            "skos:notation": "canned-vegetable",
            "skos:broader": [
                "dfc-pt:processed-vegetable"
            ]
        },
        {
            "@id": "dfc-pt:cannedGoods",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "canned goods",
            "skos:notation": "cannedGoods",
            "skos:broader": [
                "dfc-pt:savory-groceries"
            ]
        },
        {
            "@id": "dfc-pt:carrot",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "carrot",
                    "@language": "en"
                },
                {
                    "@value": "carotte",
                    "@language": "fr"
                }
            ],
            "skos:notation": "carrot",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:cauliflower",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cauliflower",
                    "@language": "en"
                },
                {
                    "@value": "chou-fleur",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cauliflower",
            "skos:broader": [
                "dfc-pt:cabbage"
            ]
        },
        {
            "@id": "dfc-pt:celeriac",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "celeriac",
                    "@language": "en"
                },
                {
                    "@value": "céleri-rave",
                    "@language": "fr"
                }
            ],
            "skos:notation": "celeriac",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:celery-branch",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "celery branch",
                    "@language": "en"
                },
                {
                    "@value": "céleri branche",
                    "@language": "fr"
                }
            ],
            "skos:notation": "celery-branch",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:chanterelle-mushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chanterelle mushroom",
                    "@language": "en"
                },
                {
                    "@value": "chanterelle",
                    "@language": "fr"
                }
            ],
            "skos:notation": "chanterelle-mushroom",
            "skos:broader": [
                "dfc-pt:mushroom"
            ]
        },
        {
            "@id": "dfc-pt:chard",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chard",
                    "@language": "en"
                },
                {
                    "@value": "blettes",
                    "@language": "fr"
                }
            ],
            "skos:notation": "chard",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:cherry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cherry",
                    "@language": "en"
                },
                {
                    "@value": "cerise",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cherry",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:cherry-tomato",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cherry tomato",
                    "@language": "en"
                },
                {
                    "@value": "tomate cerise",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cherry-tomato",
            "skos:broader": [
                "dfc-pt:tomato"
            ]
        },
        {
            "@id": "dfc-pt:chervil",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chervil",
                    "@language": "en"
                },
                {
                    "@value": "cerfeuil",
                    "@language": "fr"
                }
            ],
            "skos:notation": "chervil",
            "skos:broader": [
                "dfc-pt:aromatic",
                "dfc-pt:herb"
            ]
        },
        {
            "@id": "dfc-pt:chestnut",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chestnut",
                    "@language": "en"
                },
                {
                    "@value": "marron",
                    "@language": "fr"
                }
            ],
            "skos:notation": "chestnut",
            "skos:broader": [
                "dfc-pt:nut"
            ]
        },
        {
            "@id": "dfc-pt:chicken",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chicken",
                    "@language": "en"
                },
                {
                    "@value": "poulet",
                    "@language": "fr"
                }
            ],
            "skos:notation": "chicken",
            "skos:broader": [
                "dfc-pt:poultry"
            ]
        },
        {
            "@id": "dfc-pt:chicory",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chicory",
                    "@language": "en"
                },
                {
                    "@value": "chicorée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "chicory",
            "skos:broader": [
                "dfc-pt:salad"
            ]
        },
        {
            "@id": "dfc-pt:chilli-pepper",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chilli pepper",
                    "@language": "en"
                },
                {
                    "@value": "piment",
                    "@language": "fr"
                }
            ],
            "skos:notation": "chilli-pepper",
            "skos:broader": [
                "dfc-pt:aromatic",
                "dfc-pt:herb"
            ]
        },
        {
            "@id": "dfc-pt:chinese-cabbage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chinese cabbage",
                    "@language": "en"
                },
                {
                    "@value": "chou chinois",
                    "@language": "fr"
                }
            ],
            "skos:notation": "chinese-cabbage",
            "skos:broader": [
                "dfc-pt:cabbage"
            ]
        },
        {
            "@id": "dfc-pt:chive",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "chive",
                    "@language": "en"
                },
                {
                    "@value": "ciboulette",
                    "@language": "fr"
                }
            ],
            "skos:notation": "chive",
            "skos:broader": [
                "dfc-pt:aromatic",
                "dfc-pt:herb"
            ]
        },
        {
            "@id": "dfc-pt:cider",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cider",
                    "@language": "en"
                },
                {
                    "@value": "cidre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cider",
            "skos:broader": [
                "dfc-pt:alcoholic-beverage"
            ]
        },
        {
            "@id": "dfc-pt:clementine",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "clementine",
                    "@language": "en"
                },
                {
                    "@value": "clémentine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "clementine",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:cluster-tomato",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cluster tomato",
                    "@language": "en"
                },
                {
                    "@value": "tomate en grappe",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cluster-tomato",
            "skos:broader": [
                "dfc-pt:tomato"
            ]
        },
        {
            "@id": "dfc-pt:confectionery",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "confectionery",
                    "@language": "en"
                },
                {
                    "@value": "confiserie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "confectionery",
            "skos:broader": [
                "dfc-pt:sweet-groceries"
            ]
        },
        {
            "@id": "dfc-pt:cooked-meat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cooked meat",
                    "@language": "en"
                },
                {
                    "@value": "viande cuite",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cooked-meat",
            "skos:broader": [
                "dfc-pt:pork"
            ]
        },
        {
            "@id": "dfc-pt:coriander",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "coriander",
                    "@language": "en"
                },
                {
                    "@value": "coriandre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "coriander",
            "skos:broader": [
                "dfc-pt:aromatic",
                "dfc-pt:herb"
            ]
        },
        {
            "@id": "dfc-pt:corn-salad",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "corn salad/lambs lettuce",
                    "@language": "en"
                },
                {
                    "@value": "mâche",
                    "@language": "fr"
                }
            ],
            "skos:notation": "corn-salad",
            "skos:broader": [
                "dfc-pt:salad"
            ]
        },
        {
            "@id": "dfc-pt:cosmetic",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cosmetic",
                    "@language": "en"
                },
                {
                    "@value": "cosmétique",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cosmetic",
            "skos:broader": [
                "dfc-pt:inedible"
            ]
        },
        {
            "@id": "dfc-pt:coulemelle-mushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "parasol mushroom",
                    "@language": "en"
                },
                {
                    "@value": "coulemelle",
                    "@language": "fr"
                }
            ],
            "skos:notation": "coulemelle-mushroom",
            "skos:broader": [
                "dfc-pt:mushroom"
            ]
        },
        {
            "@id": "dfc-pt:courgette",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "courgette",
                    "@language": "en"
                },
                {
                    "@value": "courgette",
                    "@language": "fr"
                }
            ],
            "skos:notation": "courgette",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:cow-dairy-product",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cow dairy product",
                    "@language": "en"
                },
                {
                    "@value": "produit laitier de vache",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cow-dairy-product",
            "skos:broader": [
                "dfc-pt:dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:cream-cheese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cream cheese",
                    "@language": "en"
                },
                {
                    "@value": "fromage blanc",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cream-cheese",
            "skos:broader": [
                "dfc-pt:cow-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:crepe-and-galette",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "crepe and galette",
                    "@language": "en"
                },
                {
                    "@value": "crêpe et galette",
                    "@language": "fr"
                }
            ],
            "skos:notation": "crepe-and-galette",
            "skos:broader": [
                "dfc-pt:savory-groceries"
            ]
        },
        {
            "@id": "dfc-pt:cress",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cress",
                    "@language": "en"
                },
                {
                    "@value": "cresson",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cress",
            "skos:broader": [
                "dfc-pt:salad"
            ]
        },
        {
            "@id": "dfc-pt:cucumber",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "cucumber",
                    "@language": "en"
                },
                {
                    "@value": "concombre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "cucumber",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:currant",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "currant",
                    "@language": "en"
                },
                {
                    "@value": "groseille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "currant",
            "skos:broader": [
                "dfc-pt:berry"
            ]
        },
        {
            "@id": "dfc-pt:dairy-dessert",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dairy dessert",
                    "@language": "en"
                },
                {
                    "@value": "dessert lacté",
                    "@language": "fr"
                }
            ],
            "skos:notation": "dairy-dessert",
            "skos:broader": [
                "dfc-pt:cow-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:dairy-product",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dairy product",
                    "@language": "en"
                },
                {
                    "@value": "produit laitier",
                    "@language": "fr"
                }
            ],
            "skos:notation": "dairy-product"
        },
        {
            "@id": "dfc-pt:dandelion",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dandelion",
                    "@language": "en"
                },
                {
                    "@value": "pissenlit",
                    "@language": "fr"
                }
            ],
            "skos:notation": "dandelion",
            "skos:broader": [
                "dfc-pt:salad"
            ]
        },
        {
            "@id": "dfc-pt:deaths-trumpet",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "deaths trumpet",
                    "@language": "en"
                },
                {
                    "@value": "trompette de la mort",
                    "@language": "fr"
                }
            ],
            "skos:notation": "deaths-trumpet",
            "skos:broader": [
                "dfc-pt:mushroom"
            ]
        },
        {
            "@id": "dfc-pt:delicatessen",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "delicatessen",
                    "@language": "en"
                },
                {
                    "@value": "charcuterie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "delicatessen",
            "skos:broader": [
                "dfc-pt:pork"
            ]
        },
        {
            "@id": "dfc-pt:digestive",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "digestive",
                    "@language": "en"
                },
                {
                    "@value": "digestif",
                    "@language": "fr"
                }
            ],
            "skos:notation": "digestive",
            "skos:broader": [
                "dfc-pt:alcoholic-beverage"
            ]
        },
        {
            "@id": "dfc-pt:dill",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dill",
                    "@language": "en"
                },
                {
                    "@value": "aneth",
                    "@language": "fr"
                }
            ],
            "skos:notation": "dill",
            "skos:broader": [
                "dfc-pt:aromatic",
                "dfc-pt:herb"
            ]
        },
        {
            "@id": "dfc-pt:dried-fruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dried fruit",
                    "@language": "en"
                },
                {
                    "@value": "fruit sec",
                    "@language": "fr"
                }
            ],
            "skos:notation": "dried-fruit",
            "skos:broader": [
                "dfc-pt:processed-fruit"
            ]
        },
        {
            "@id": "dfc-pt:dried-vegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dried vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume sec",
                    "@language": "fr"
                }
            ],
            "skos:notation": "dried-vegetable",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:dried_goods",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dried goods",
                    "@language": "en"
                },
                {
                    "@value": "produits sec",
                    "@language": "fr"
                }
            ],
            "skos:notation": "dried_goods",
            "skos:broader": [
                "dfc-pt:local-grocery-store"
            ]
        },
        {
            "@id": "dfc-pt:dried_herb",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "dried herb",
                    "@language": "en"
                },
                {
                    "@value": "aromate sec",
                    "@language": "fr"
                }
            ],
            "skos:notation": "dried_herb",
            "skos:broader": [
                "dfc-pt:dried_goods"
            ]
        },
        {
            "@id": "dfc-pt:drink",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "drink",
                    "@language": "en"
                },
                {
                    "@value": "boisson",
                    "@language": "fr"
                }
            ],
            "skos:notation": "drink"
        },
        {
            "@id": "dfc-pt:duck",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "duck",
                    "@language": "en"
                },
                {
                    "@value": "canard",
                    "@language": "fr"
                }
            ],
            "skos:notation": "duck",
            "skos:broader": [
                "dfc-pt:poultry"
            ]
        },
        {
            "@id": "dfc-pt:egg",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "egg",
                    "@language": "en"
                },
                {
                    "@value": "œuf",
                    "@language": "fr"
                }
            ],
            "skos:notation": "egg",
            "skos:broader": [
                "dfc-pt:meat-product"
            ]
        },
        {
            "@id": "dfc-pt:eggplant",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "eggplant",
                    "@language": "en"
                },
                {
                    "@value": "aubergine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "eggplant",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:endive",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "endive",
                    "@language": "en"
                },
                {
                    "@value": "endive",
                    "@language": "fr"
                }
            ],
            "skos:notation": "endive",
            "skos:broader": [
                "dfc-pt:salad"
            ]
        },
        {
            "@id": "dfc-pt:fennel",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fennel",
                    "@language": "en"
                },
                {
                    "@value": "fenouil",
                    "@language": "fr"
                }
            ],
            "skos:notation": "fennel",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:ferment",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "ferment",
            "skos:notation": "ferment",
            "skos:broader": [
                "dfc-pt:savory-groceries"
            ]
        },
        {
            "@id": "dfc-pt:festive-poultry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "festive poultry",
                    "@language": "en"
                },
                {
                    "@value": "volaille festive",
                    "@language": "fr"
                }
            ],
            "skos:notation": "festive-poultry",
            "skos:broader": [
                "dfc-pt:poultry"
            ]
        },
        {
            "@id": "dfc-pt:fifth-range-vegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fifth range vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume de cinquième gamme",
                    "@language": "fr"
                }
            ],
            "skos:notation": "fifth-range-vegetable",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:fig",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fig",
                    "@language": "en"
                },
                {
                    "@value": "figue",
                    "@language": "fr"
                }
            ],
            "skos:notation": "fig",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:fish",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fish",
                    "@language": "en"
                },
                {
                    "@value": "poisson",
                    "@language": "fr"
                }
            ],
            "skos:notation": "fish",
            "skos:broader": [
                "dfc-pt:fishery-product"
            ]
        },
        {
            "@id": "dfc-pt:fishery-product",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fishery product",
                    "@language": "en"
                },
                {
                    "@value": "produit de la pêche",
                    "@language": "fr"
                }
            ],
            "skos:notation": "fishery-product",
            "skos:broader": [
                "dfc-pt:meat-product"
            ]
        },
        {
            "@id": "dfc-pt:flake",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "flake",
                    "@language": "en"
                },
                {
                    "@value": "flocon",
                    "@language": "fr"
                }
            ],
            "skos:notation": "flake",
            "skos:broader": [
                "dfc-pt:dried_goods"
            ]
        },
        {
            "@id": "dfc-pt:flavored-yogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "flavored yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt aromatisé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "flavored-yogurt",
            "skos:broader": [
                "dfc-pt:cow-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:flour",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "flour",
                    "@language": "en"
                },
                {
                    "@value": "farine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "flour",
            "skos:broader": [
                "dfc-pt:dried_goods"
            ]
        },
        {
            "@id": "dfc-pt:flower",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "flower",
                    "@language": "en"
                },
                {
                    "@value": "fleur",
                    "@language": "fr"
                }
            ],
            "skos:notation": "flower",
            "skos:broader": [
                "dfc-pt:inedible"
            ]
        },
        {
            "@id": "dfc-pt:fourth-range-vegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fourth range vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume de quatrième gamme",
                    "@language": "fr"
                }
            ],
            "skos:notation": "fourth-range-vegetable",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:fresh-cheese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fresh cheese",
                    "@language": "en"
                },
                {
                    "@value": "fromage frais",
                    "@language": "fr"
                }
            ],
            "skos:notation": "fresh-cheese",
            "skos:broader": [
                "dfc-pt:cow-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:fresh-cream",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fresh cream",
                    "@language": "en"
                },
                {
                    "@value": "crème fraîche",
                    "@language": "fr"
                }
            ],
            "skos:notation": "fresh-cream",
            "skos:broader": [
                "dfc-pt:cow-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:fresh-meat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fresh meat",
                    "@language": "en"
                },
                {
                    "@value": "viande fraîche",
                    "@language": "fr"
                }
            ],
            "skos:notation": "fresh-meat",
            "skos:broader": [
                "dfc-pt:pork"
            ]
        },
        {
            "@id": "dfc-pt:frozen",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "frozen",
                    "@language": "en"
                },
                {
                    "@value": "surgelé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "frozen"
        },
        {
            "@id": "dfc-pt:frozen-fruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "frozen fruit",
                    "@language": "en"
                },
                {
                    "@value": "fruit surgelé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "frozen-fruit",
            "skos:broader": [
                "dfc-pt:frozen"
            ]
        },
        {
            "@id": "dfc-pt:frozen-meal",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "frozen meal",
                    "@language": "en"
                },
                {
                    "@value": "plat surgelé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "frozen-meal",
            "skos:broader": [
                "dfc-pt:frozen"
            ]
        },
        {
            "@id": "dfc-pt:frozen-meat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "frozen meat",
                    "@language": "en"
                },
                {
                    "@value": "viande surgelée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "frozen-meat",
            "skos:broader": [
                "dfc-pt:frozen"
            ]
        },
        {
            "@id": "dfc-pt:frozen-vegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "frozen vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume surgelé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "frozen-vegetable",
            "skos:broader": [
                "dfc-pt:frozen"
            ]
        },
        {
            "@id": "dfc-pt:fruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fruit",
                    "@language": "en"
                },
                {
                    "@value": "fruits",
                    "@language": "fr"
                }
            ],
            "skos:notation": "fruit"
        },
        {
            "@id": "dfc-pt:fruit-in-compote",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fruit in compote",
                    "@language": "en"
                },
                {
                    "@value": "fruit en compote",
                    "@language": "fr"
                }
            ],
            "skos:notation": "fruit-in-compote",
            "skos:broader": [
                "dfc-pt:processed-fruit"
            ]
        },
        {
            "@id": "dfc-pt:fruit-juice",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "fruit juice",
                    "@language": "en"
                },
                {
                    "@value": "jus de fruits",
                    "@language": "fr"
                }
            ],
            "skos:notation": "fruit-juice",
            "skos:broader": [
                "dfc-pt:soft-drink"
            ]
        },
        {
            "@id": "dfc-pt:garlic",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "garlic",
                    "@language": "en"
                },
                {
                    "@value": "ail",
                    "@language": "fr"
                }
            ],
            "skos:notation": "garlic",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:girolle-mushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "girolle mushroom",
                    "@language": "en"
                },
                {
                    "@value": "girolle",
                    "@language": "fr"
                }
            ],
            "skos:notation": "girolle-mushroom",
            "skos:broader": [
                "dfc-pt:mushroom"
            ]
        },
        {
            "@id": "dfc-pt:goat-dairy-dessert",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat dairy dessert",
                    "@language": "en"
                },
                {
                    "@value": "dessert lacté de chèvre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "goat-dairy-dessert",
            "skos:broader": [
                "dfc-pt:goat-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:goat-dairy-product",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat dairy product",
                    "@language": "en"
                },
                {
                    "@value": "produit laitier de chèvre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "goat-dairy-product",
            "skos:broader": [
                "dfc-pt:dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:goat-flavored-yogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat flavored yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt de chèvre aromatisé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "goat-flavored-yogurt",
            "skos:broader": [
                "dfc-pt:goat-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:goat-fresh-cheese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat fresh cheese",
                    "@language": "en"
                },
                {
                    "@value": "fromage frais de chèvre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "goat-fresh-cheese",
            "skos:broader": [
                "dfc-pt:goat-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:goat-mature-cheese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat mature cheese",
                    "@language": "en"
                },
                {
                    "@value": "fromage de chèvre affiné",
                    "@language": "fr"
                }
            ],
            "skos:notation": "goat-mature-cheese",
            "skos:broader": [
                "dfc-pt:goat-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:goat-milk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat milk",
                    "@language": "en"
                },
                {
                    "@value": "lait de chèvre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "goat-milk",
            "skos:broader": [
                "dfc-pt:goat-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:goat-natural-yogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat natural yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt nature de chèvre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "goat-natural-yogurt",
            "skos:broader": [
                "dfc-pt:goat-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:goat-sweet-yogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat sweet yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt sucré de chèvre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "goat-sweet-yogurt",
            "skos:broader": [
                "dfc-pt:goat-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:goat-yogurt-on-a-bed-of-fruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat yogurt on a bed of fruit",
                    "@language": "en"
                },
                {
                    "@value": "yaourt de chèvre sur lit de fruits",
                    "@language": "fr"
                }
            ],
            "skos:notation": "goat-yogurt-on-a-bed-of-fruit",
            "skos:broader": [
                "dfc-pt:goat-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:goat-yogurt-with-fruits",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goat yogurt with fruits",
                    "@language": "en"
                },
                {
                    "@value": "yaourt de chèvre aux fruits",
                    "@language": "fr"
                }
            ],
            "skos:notation": "goat-yogurt-with-fruits",
            "skos:broader": [
                "dfc-pt:goat-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:goose",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "goose",
                    "@language": "en"
                },
                {
                    "@value": "oie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "goose",
            "skos:broader": [
                "dfc-pt:poultry"
            ]
        },
        {
            "@id": "dfc-pt:gooseberry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "gooseberry",
                    "@language": "en"
                },
                {
                    "@value": "groseille à maquereau",
                    "@language": "fr"
                }
            ],
            "skos:notation": "gooseberry",
            "skos:broader": [
                "dfc-pt:berry"
            ]
        },
        {
            "@id": "dfc-pt:grain",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "grain",
                    "@language": "en"
                },
                {
                    "@value": "céréale",
                    "@language": "fr"
                }
            ],
            "skos:notation": "grain",
            "skos:broader": [
                "dfc-pt:dried_goods",
                "dfc-pt:savory-groceries"
            ]
        },
        {
            "@id": "dfc-pt:grape",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "grape",
                    "@language": "en"
                },
                {
                    "@value": "raisin",
                    "@language": "fr"
                }
            ],
            "skos:notation": "grape",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:green-garlic",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "green garlic",
                    "@language": "en"
                },
                {
                    "@value": "aillet",
                    "@language": "fr"
                }
            ],
            "skos:notation": "green-garlic",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:grilling-meat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "grilling meat",
                    "@language": "en"
                },
                {
                    "@value": "viande à griller",
                    "@language": "fr"
                }
            ],
            "skos:notation": "grilling-meat",
            "skos:broader": [
                "dfc-pt:beef"
            ]
        },
        {
            "@id": "dfc-pt:guinea-fowl",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "guinea fowl",
                    "@language": "en"
                },
                {
                    "@value": "pintade",
                    "@language": "fr"
                }
            ],
            "skos:notation": "guinea-fowl",
            "skos:broader": [
                "dfc-pt:poultry"
            ]
        },
        {
            "@id": "dfc-pt:hazelnut",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "hazelnut",
                    "@language": "en"
                },
                {
                    "@value": "noisette",
                    "@language": "fr"
                }
            ],
            "skos:notation": "hazelnut",
            "skos:broader": [
                "dfc-pt:nut"
            ]
        },
        {
            "@id": "dfc-pt:herb",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "herb",
                    "@language": "en"
                },
                {
                    "@value": "aromate",
                    "@language": "fr"
                }
            ],
            "skos:notation": "herb",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:hierloom-squash",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "hierloom squash",
                    "@language": "en"
                },
                {
                    "@value": "variété ancienne de courge",
                    "@language": "fr"
                }
            ],
            "skos:notation": "hierloom-squash",
            "skos:broader": [
                "dfc-pt:squash"
            ]
        },
        {
            "@id": "dfc-pt:hierloom-tomato",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "hierloom tomato",
                    "@language": "en"
                },
                {
                    "@value": "tomate ancienne",
                    "@language": "fr"
                }
            ],
            "skos:notation": "hierloom-tomato",
            "skos:broader": [
                "dfc-pt:tomato"
            ]
        },
        {
            "@id": "dfc-pt:honey",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "honey",
                    "@language": "en"
                },
                {
                    "@value": "miel",
                    "@language": "fr"
                }
            ],
            "skos:notation": "honey",
            "skos:broader": [
                "dfc-pt:sweet-groceries"
            ]
        },
        {
            "@id": "dfc-pt:inedible",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "inedible",
                    "@language": "en"
                },
                {
                    "@value": "non alimentaire",
                    "@language": "fr"
                }
            ],
            "skos:notation": "inedible"
        },
        {
            "@id": "dfc-pt:jam",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "jam",
                    "@language": "en"
                },
                {
                    "@value": "confiture",
                    "@language": "fr"
                }
            ],
            "skos:notation": "jam",
            "skos:broader": [
                "dfc-pt:sweet-groceries"
            ]
        },
        {
            "@id": "dfc-pt:jerusalem-artichoke",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "jerusalem artichoke",
                    "@language": "en"
                },
                {
                    "@value": "topinambour",
                    "@language": "fr"
                }
            ],
            "skos:notation": "jerusalem-artichoke",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:kale",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "curly kale",
                    "@language": "en"
                },
                {
                    "@value": "chou frisé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "kale",
            "skos:broader": [
                "dfc-pt:cabbage"
            ]
        },
        {
            "@id": "dfc-pt:kale-cabbage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "kale",
                    "@language": "en"
                },
                {
                    "@value": "chou kale",
                    "@language": "fr"
                }
            ],
            "skos:notation": "kale-cabbage",
            "skos:broader": [
                "dfc-pt:cabbage"
            ]
        },
        {
            "@id": "dfc-pt:kiwi",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "kiwi",
                    "@language": "en"
                },
                {
                    "@value": "kiwi",
                    "@language": "fr"
                }
            ],
            "skos:notation": "kiwi",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:kohlrabi",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "kohlrabi",
                    "@language": "en"
                },
                {
                    "@value": "chou-rave",
                    "@language": "fr"
                }
            ],
            "skos:notation": "kohlrabi",
            "skos:broader": [
                "dfc-pt:cabbage"
            ]
        },
        {
            "@id": "dfc-pt:lamb",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "lamb",
                    "@language": "en"
                },
                {
                    "@value": "agneau",
                    "@language": "fr"
                }
            ],
            "skos:notation": "lamb",
            "skos:broader": [
                "dfc-pt:meat-product"
            ]
        },
        {
            "@id": "dfc-pt:laurel",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "bay laurel",
                    "@language": "en"
                },
                {
                    "@value": "laurier",
                    "@language": "fr"
                }
            ],
            "skos:notation": "laurel",
            "skos:broader": [
                "dfc-pt:aromatic",
                "dfc-pt:herb"
            ]
        },
        {
            "@id": "dfc-pt:leek",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "leek",
                    "@language": "en"
                },
                {
                    "@value": "poireau",
                    "@language": "fr"
                }
            ],
            "skos:notation": "leek",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:lemon",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "lemon",
                    "@language": "en"
                },
                {
                    "@value": "citron",
                    "@language": "fr"
                }
            ],
            "skos:notation": "lemon",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:lemonade",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "lemonade",
                    "@language": "en"
                },
                {
                    "@value": "limonade",
                    "@language": "fr"
                }
            ],
            "skos:notation": "lemonade",
            "skos:broader": [
                "dfc-pt:soft-drink"
            ]
        },
        {
            "@id": "dfc-pt:lentils",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "lentils",
                    "@language": "en"
                },
                {
                    "@value": "lentilles",
                    "@language": "fr"
                }
            ],
            "skos:notation": "lentils",
            "skos:broader": [
                "dfc-pt:dried-vegetable"
            ]
        },
        {
            "@id": "dfc-pt:lettuce",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "lettuce",
                    "@language": "en"
                },
                {
                    "@value": "laitue",
                    "@language": "fr"
                }
            ],
            "skos:notation": "lettuce",
            "skos:broader": [
                "dfc-pt:salad"
            ]
        },
        {
            "@id": "dfc-pt:local-grocery-store",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "local grocery store",
                    "@language": "en"
                },
                {
                    "@value": "épicerie locale",
                    "@language": "fr"
                }
            ],
            "skos:notation": "local-grocery-store"
        },
        {
            "@id": "dfc-pt:mandarin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "mandarin",
                    "@language": "en"
                },
                {
                    "@value": "mandarine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "mandarin",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:mature-cheese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "mature cheese",
                    "@language": "en"
                },
                {
                    "@value": "fromage affiné",
                    "@language": "fr"
                }
            ],
            "skos:notation": "mature-cheese",
            "skos:broader": [
                "dfc-pt:cow-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:meat-product",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "meat product",
                    "@language": "en"
                },
                {
                    "@value": "produit carné",
                    "@language": "fr"
                }
            ],
            "skos:notation": "meat-product"
        },
        {
            "@id": "dfc-pt:medlar",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "medlar",
                    "@language": "en"
                },
                {
                    "@value": "nèfle",
                    "@language": "fr"
                }
            ],
            "skos:notation": "medlar",
            "skos:broader": [
                "dfc-pt:fruit",
                "dfc-pt:nut"
            ]
        },
        {
            "@id": "dfc-pt:melon",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "melon",
                    "@language": "en"
                },
                {
                    "@value": "melon",
                    "@language": "fr"
                }
            ],
            "skos:notation": "melon",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:mesclun",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "mesclun",
                    "@language": "en"
                },
                {
                    "@value": "mesclun",
                    "@language": "fr"
                }
            ],
            "skos:notation": "mesclun",
            "skos:broader": [
                "dfc-pt:salad"
            ]
        },
        {
            "@id": "dfc-pt:milk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "milk",
                    "@language": "en"
                },
                {
                    "@value": "lait",
                    "@language": "fr"
                }
            ],
            "skos:notation": "milk",
            "skos:broader": [
                "dfc-pt:cow-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:milky-mushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "milky mushroom",
                    "@language": "en"
                },
                {
                    "@value": "lactaire",
                    "@language": "fr"
                }
            ],
            "skos:notation": "milky-mushroom",
            "skos:broader": [
                "dfc-pt:mushroom"
            ]
        },
        {
            "@id": "dfc-pt:mint",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "mint",
                    "@language": "en"
                },
                {
                    "@value": "menthe",
                    "@language": "fr"
                }
            ],
            "skos:notation": "mint",
            "skos:broader": [
                "dfc-pt:aromatic",
                "dfc-pt:herb"
            ]
        },
        {
            "@id": "dfc-pt:morel",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "morel",
                    "@language": "en"
                },
                {
                    "@value": "morille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "morel",
            "skos:broader": [
                "dfc-pt:mushroom"
            ]
        },
        {
            "@id": "dfc-pt:mousseron",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "mousseron",
                    "@language": "en"
                },
                {
                    "@value": "mousseron",
                    "@language": "fr"
                }
            ],
            "skos:notation": "mousseron",
            "skos:broader": [
                "dfc-pt:mushroom"
            ]
        },
        {
            "@id": "dfc-pt:mushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "mushroom",
                    "@language": "en"
                },
                {
                    "@value": "champignon",
                    "@language": "fr"
                }
            ],
            "skos:notation": "mushroom",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:natural-yogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "natural yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt nature",
                    "@language": "fr"
                }
            ],
            "skos:notation": "natural-yogurt",
            "skos:broader": [
                "dfc-pt:cow-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:nectarine",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "nectarine",
                    "@language": "en"
                },
                {
                    "@value": "nectarine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "nectarine",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:non-local-fruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "non local fruit",
                    "@language": "en"
                },
                {
                    "@value": "fruit non local",
                    "@language": "fr"
                }
            ],
            "skos:notation": "non-local-fruit",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:non-local-vegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "non local vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume non local",
                    "@language": "fr"
                }
            ],
            "skos:notation": "non-local-vegetable",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:nut",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "nut",
                    "@language": "en"
                },
                {
                    "@value": "fruit à coque",
                    "@language": "fr"
                }
            ],
            "skos:notation": "nut",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:oil",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "oil",
                    "@language": "en"
                },
                {
                    "@value": "huile",
                    "@language": "fr"
                }
            ],
            "skos:notation": "oil",
            "skos:broader": [
                "dfc-pt:savory-groceries"
            ]
        },
        {
            "@id": "dfc-pt:onion",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "onion",
                    "@language": "en"
                },
                {
                    "@value": "oignon",
                    "@language": "fr"
                }
            ],
            "skos:notation": "onion",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:orange",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "orange",
                    "@language": "en"
                },
                {
                    "@value": "orange",
                    "@language": "fr"
                }
            ],
            "skos:notation": "orange",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:other-cheese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "other cheese",
                    "@language": "en"
                },
                {
                    "@value": "autre fromage",
                    "@language": "fr"
                }
            ],
            "skos:notation": "other-cheese",
            "skos:broader": [
                "dfc-pt:other-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:other-dairy-product",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "other dairy product",
                    "@language": "en"
                },
                {
                    "@value": "autre produit laitier",
                    "@language": "fr"
                }
            ],
            "skos:notation": "other-dairy-product",
            "skos:broader": [
                "dfc-pt:dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:other-milk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "other milk",
                    "@language": "en"
                },
                {
                    "@value": "autre lait",
                    "@language": "fr"
                }
            ],
            "skos:notation": "other-milk",
            "skos:broader": [
                "dfc-pt:other-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:oyster-mushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "oyster mushroom",
                    "@language": "en"
                },
                {
                    "@value": "pleurote",
                    "@language": "fr"
                }
            ],
            "skos:notation": "oyster-mushroom",
            "skos:broader": [
                "dfc-pt:mushroom"
            ]
        },
        {
            "@id": "dfc-pt:paris-mushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "button mushroom",
                    "@language": "en"
                },
                {
                    "@value": "champignon de Paris",
                    "@language": "fr"
                }
            ],
            "skos:notation": "paris-mushroom",
            "skos:broader": [
                "dfc-pt:mushroom"
            ]
        },
        {
            "@id": "dfc-pt:parsley",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "parsley",
                    "@language": "en"
                },
                {
                    "@value": "persil",
                    "@language": "fr"
                }
            ],
            "skos:notation": "parsley",
            "skos:broader": [
                "dfc-pt:aromatic",
                "dfc-pt:herb"
            ]
        },
        {
            "@id": "dfc-pt:parsnip",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "parsnip",
                    "@language": "en"
                },
                {
                    "@value": "panais",
                    "@language": "fr"
                }
            ],
            "skos:notation": "parsnip",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:pasta",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pasta",
                    "@language": "en"
                },
                {
                    "@value": "pâtes",
                    "@language": "fr"
                }
            ],
            "skos:notation": "pasta",
            "skos:broader": [
                "dfc-pt:savory-groceries"
            ]
        },
        {
            "@id": "dfc-pt:pastry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pastry",
                    "@language": "en"
                },
                {
                    "@value": "pâtisserie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "pastry",
            "skos:broader": [
                "dfc-pt:sweet-groceries"
            ]
        },
        {
            "@id": "dfc-pt:pattypan-squash",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pattypan squash",
                    "@language": "en"
                },
                {
                    "@value": "pâtisson",
                    "@language": "fr"
                }
            ],
            "skos:notation": "pattypan-squash",
            "skos:broader": [
                "dfc-pt:squash"
            ]
        },
        {
            "@id": "dfc-pt:peach",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "peach",
                    "@language": "en"
                },
                {
                    "@value": "pêche",
                    "@language": "fr"
                }
            ],
            "skos:notation": "peach",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:pear",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pear",
                    "@language": "en"
                },
                {
                    "@value": "poire",
                    "@language": "fr"
                }
            ],
            "skos:notation": "pear",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:peas",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "peas",
                    "@language": "en"
                },
                {
                    "@value": "pois",
                    "@language": "fr"
                }
            ],
            "skos:notation": "peas",
            "skos:broader": [
                "dfc-pt:dried-vegetable"
            ]
        },
        {
            "@id": "dfc-pt:pepper",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pepper",
                    "@language": "en"
                },
                {
                    "@value": "poivron",
                    "@language": "fr"
                }
            ],
            "skos:notation": "pepper",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:pie-pastry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pie pastry",
                    "@language": "en"
                },
                {
                    "@value": "pâte à tarte",
                    "@language": "fr"
                }
            ],
            "skos:notation": "pie-pastry",
            "skos:broader": [
                "dfc-pt:savory-groceries"
            ]
        },
        {
            "@id": "dfc-pt:pigeon",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pigeon",
                    "@language": "en"
                },
                {
                    "@value": "pigeon",
                    "@language": "fr"
                }
            ],
            "skos:notation": "pigeon",
            "skos:broader": [
                "dfc-pt:poultry"
            ]
        },
        {
            "@id": "dfc-pt:plant",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "plant",
                    "@language": "en"
                },
                {
                    "@value": "plante",
                    "@language": "fr"
                }
            ],
            "skos:notation": "plant",
            "skos:broader": [
                "dfc-pt:inedible"
            ]
        },
        {
            "@id": "dfc-pt:plum",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "plum",
                    "@language": "en"
                },
                {
                    "@value": "prune",
                    "@language": "fr"
                }
            ],
            "skos:notation": "plum",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:porcini",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "porcini",
                    "@language": "en"
                },
                {
                    "@value": "cèpes",
                    "@language": "fr"
                }
            ],
            "skos:notation": "porcini",
            "skos:broader": [
                "dfc-pt:mushroom"
            ]
        },
        {
            "@id": "dfc-pt:pork",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pork",
                    "@language": "en"
                },
                {
                    "@value": "porc",
                    "@language": "fr"
                }
            ],
            "skos:notation": "pork",
            "skos:broader": [
                "dfc-pt:meat-product"
            ]
        },
        {
            "@id": "dfc-pt:potato",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "potato",
                    "@language": "en"
                },
                {
                    "@value": "pomme de terre",
                    "@language": "fr"
                }
            ],
            "skos:notation": "potato",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:poultry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "poultry",
                    "@language": "en"
                },
                {
                    "@value": "volaille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "poultry",
            "skos:broader": [
                "dfc-pt:meat-product"
            ]
        },
        {
            "@id": "dfc-pt:processed-fruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "processed fruit",
                    "@language": "en"
                },
                {
                    "@value": "fruit transformé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "processed-fruit",
            "skos:broader": [
                "dfc-pt:local-grocery-store"
            ]
        },
        {
            "@id": "dfc-pt:processed-vegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "processed vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume transformé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "processed-vegetable",
            "skos:broader": [
                "dfc-pt:local-grocery-store"
            ]
        },
        {
            "@id": "dfc-pt:prune",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "prune",
                    "@language": "en"
                },
                {
                    "@value": "pruneau",
                    "@language": "fr"
                }
            ],
            "skos:notation": "prune",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:pulse",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "pulse",
            "skos:notation": "pulse",
            "skos:broader": [
                "dfc-pt:dried_goods"
            ]
        },
        {
            "@id": "dfc-pt:pumpkin",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "pumpkin",
                    "@language": "en"
                },
                {
                    "@value": "potiron",
                    "@language": "fr"
                }
            ],
            "skos:notation": "pumpkin",
            "skos:broader": [
                "dfc-pt:squash"
            ]
        },
        {
            "@id": "dfc-pt:purslane",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Purslane",
                    "@language": "en"
                },
                {
                    "@value": "Pourpier",
                    "@language": "fr"
                }
            ],
            "skos:notation": "purslane",
            "skos:broader": [
                "dfc-pt:salad"
            ]
        },
        {
            "@id": "dfc-pt:quail",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "quail",
                    "@language": "en"
                },
                {
                    "@value": "caille",
                    "@language": "fr"
                }
            ],
            "skos:notation": "quail",
            "skos:broader": [
                "dfc-pt:poultry"
            ]
        },
        {
            "@id": "dfc-pt:quince",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "quince",
                    "@language": "en"
                },
                {
                    "@value": "coing",
                    "@language": "fr"
                }
            ],
            "skos:notation": "quince",
            "skos:broader": [
                "dfc-pt:fruit"
            ]
        },
        {
            "@id": "dfc-pt:quinoa",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "quinoa",
                    "@language": "en"
                },
                {
                    "@value": "quinoa",
                    "@language": "fr"
                }
            ],
            "skos:notation": "quinoa",
            "skos:broader": [
                "dfc-pt:dried-vegetable"
            ]
        },
        {
            "@id": "dfc-pt:rabbit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "rabbit",
                    "@language": "en"
                },
                {
                    "@value": "lapin",
                    "@language": "fr"
                }
            ],
            "skos:notation": "rabbit",
            "skos:broader": [
                "dfc-pt:meat-product"
            ]
        },
        {
            "@id": "dfc-pt:radish",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "radish",
                    "@language": "en"
                },
                {
                    "@value": "radis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "radish",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:raspberry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "raspberry",
                    "@language": "en"
                },
                {
                    "@value": "framboise",
                    "@language": "fr"
                }
            ],
            "skos:notation": "raspberry",
            "skos:broader": [
                "dfc-pt:berry"
            ]
        },
        {
            "@id": "dfc-pt:ready-meal",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "ready meal",
                    "@language": "en"
                },
                {
                    "@value": "plat cuisiné",
                    "@language": "fr"
                }
            ],
            "skos:notation": "ready-meal",
            "skos:broader": [
                "dfc-pt:local-grocery-store"
            ]
        },
        {
            "@id": "dfc-pt:red-cabbage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "red cabbage",
                    "@language": "en"
                },
                {
                    "@value": "chou rouge",
                    "@language": "fr"
                }
            ],
            "skos:notation": "red-cabbage",
            "skos:broader": [
                "dfc-pt:cabbage"
            ]
        },
        {
            "@id": "dfc-pt:rhubarb",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "rhubarb",
                    "@language": "en"
                },
                {
                    "@value": "rhubarbe",
                    "@language": "fr"
                }
            ],
            "skos:notation": "rhubarb",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:rice",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "rice",
                    "@language": "en"
                },
                {
                    "@value": "riz",
                    "@language": "fr"
                }
            ],
            "skos:notation": "rice",
            "skos:broader": [
                "dfc-pt:savory-groceries"
            ]
        },
        {
            "@id": "dfc-pt:rocket",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "rocket",
                    "@language": "en"
                },
                {
                    "@value": "roquette",
                    "@language": "fr"
                }
            ],
            "skos:notation": "rocket",
            "skos:broader": [
                "dfc-pt:salad"
            ]
        },
        {
            "@id": "dfc-pt:romanesco",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "romanesco cauliflower",
                    "@language": "en"
                },
                {
                    "@value": "chou romanesco",
                    "@language": "fr"
                }
            ],
            "skos:notation": "romanesco",
            "skos:broader": [
                "dfc-pt:cabbage"
            ]
        },
        {
            "@id": "dfc-pt:rosemary",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "rosemary",
                    "@language": "en"
                },
                {
                    "@value": "romarin",
                    "@language": "fr"
                }
            ],
            "skos:notation": "rosemary",
            "skos:broader": [
                "dfc-pt:aromatic",
                "dfc-pt:herb"
            ]
        },
        {
            "@id": "dfc-pt:round-tomato",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "round tomato",
                    "@language": "en"
                },
                {
                    "@value": "tomate ronde",
                    "@language": "fr"
                }
            ],
            "skos:notation": "round-tomato",
            "skos:broader": [
                "dfc-pt:tomato"
            ]
        },
        {
            "@id": "dfc-pt:rutabaga",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "rutabaga",
                    "@language": "en"
                },
                {
                    "@value": "rutabaga",
                    "@language": "fr"
                }
            ],
            "skos:notation": "rutabaga",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:sage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sage",
                    "@language": "en"
                },
                {
                    "@value": "sauge",
                    "@language": "fr"
                }
            ],
            "skos:notation": "sage",
            "skos:broader": [
                "dfc-pt:aromatic",
                "dfc-pt:herb"
            ]
        },
        {
            "@id": "dfc-pt:salad",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "salad",
                    "@language": "en"
                },
                {
                    "@value": "salade",
                    "@language": "fr"
                }
            ],
            "skos:notation": "salad",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:salad-mix",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "salad mix",
                    "@language": "en"
                },
                {
                    "@value": "mélange de salades",
                    "@language": "fr"
                }
            ],
            "skos:notation": "salad-mix",
            "skos:broader": [
                "dfc-pt:salad"
            ]
        },
        {
            "@id": "dfc-pt:salsify",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "salsify",
                    "@language": "en"
                },
                {
                    "@value": "salsifis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "salsify",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:salt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "salt",
                    "@language": "en"
                },
                {
                    "@value": "sel",
                    "@language": "fr"
                }
            ],
            "skos:notation": "salt",
            "skos:broader": [
                "dfc-pt:savory-groceries"
            ]
        },
        {
            "@id": "dfc-pt:salting",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "salting",
                    "@language": "en"
                },
                {
                    "@value": "salaison",
                    "@language": "fr"
                }
            ],
            "skos:notation": "salting",
            "skos:broader": [
                "dfc-pt:pork"
            ]
        },
        {
            "@id": "dfc-pt:savory-groceries",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "savory groceries",
                    "@language": "en"
                },
                {
                    "@value": "épicerie salée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "savory-groceries",
            "skos:broader": [
                "dfc-pt:local-grocery-store"
            ]
        },
        {
            "@id": "dfc-pt:savoy-cabbage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "savoy cabbage",
                    "@language": "en"
                },
                {
                    "@value": "chou pommé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "savoy-cabbage",
            "skos:broader": [
                "dfc-pt:cabbage"
            ]
        },
        {
            "@id": "dfc-pt:seashell",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "seashell",
                    "@language": "en"
                },
                {
                    "@value": "coquillage",
                    "@language": "fr"
                }
            ],
            "skos:notation": "seashell",
            "skos:broader": [
                "dfc-pt:fishery-product"
            ]
        },
        {
            "@id": "dfc-pt:seed",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "seed",
                    "@language": "en"
                },
                {
                    "@value": "graine",
                    "@language": "fr"
                }
            ],
            "skos:notation": "seed",
            "skos:broader": [
                "dfc-pt:dried_goods"
            ]
        },
        {
            "@id": "dfc-pt:semolina",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "semolina",
                    "@language": "en"
                },
                {
                    "@value": "semoule",
                    "@language": "fr"
                }
            ],
            "skos:notation": "semolina",
            "skos:broader": [
                "dfc-pt:savory-groceries"
            ]
        },
        {
            "@id": "dfc-pt:shallot",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "shallot",
                    "@language": "en"
                },
                {
                    "@value": "échalote",
                    "@language": "fr"
                }
            ],
            "skos:notation": "shallot",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:sheep-dairy-dessert",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep dairy dessert",
                    "@language": "en"
                },
                {
                    "@value": "dessert lacté de brebis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "sheep-dairy-dessert",
            "skos:broader": [
                "dfc-pt:sheep-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:sheep-dairy-product",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep dairy product",
                    "@language": "en"
                },
                {
                    "@value": "produit laitier de brebis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "sheep-dairy-product",
            "skos:broader": [
                "dfc-pt:dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:sheep-flavored-yogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep flavored yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt de brebis aromatisé",
                    "@language": "fr"
                }
            ],
            "skos:notation": "sheep-flavored-yogurt",
            "skos:broader": [
                "dfc-pt:sheep-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:sheep-fresh-cheese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep fresh cheese",
                    "@language": "en"
                },
                {
                    "@value": "Fromage frais de brebis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "sheep-fresh-cheese",
            "skos:broader": [
                "dfc-pt:sheep-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:sheep-mature-cheese",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep mature cheese",
                    "@language": "en"
                },
                {
                    "@value": "fromage affiné de brebis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "sheep-mature-cheese",
            "skos:broader": [
                "dfc-pt:sheep-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:sheep-milk",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep milk",
                    "@language": "en"
                },
                {
                    "@value": "lait de brebis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "sheep-milk",
            "skos:broader": [
                "dfc-pt:sheep-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:sheep-natural-yogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep natural yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt de brebis nature",
                    "@language": "fr"
                }
            ],
            "skos:notation": "sheep-natural-yogurt",
            "skos:broader": [
                "dfc-pt:sheep-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:sheep-sweet-yogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep sweet yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt sucré de brebis",
                    "@language": "fr"
                }
            ],
            "skos:notation": "sheep-sweet-yogurt",
            "skos:broader": [
                "dfc-pt:sheep-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:sheep-yogurt-on-a-bed-of-fruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep yogurt on a bed of fruit",
                    "@language": "en"
                },
                {
                    "@value": "yaourt de brebis sur lit de fruits",
                    "@language": "fr"
                }
            ],
            "skos:notation": "sheep-yogurt-on-a-bed-of-fruit",
            "skos:broader": [
                "dfc-pt:sheep-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:sheep-yogurt-with-fruits",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheep yogurt with fruits",
                    "@language": "en"
                },
                {
                    "@value": "yaourt de brebis aux fruits",
                    "@language": "fr"
                }
            ],
            "skos:notation": "sheep-yogurt-with-fruits",
            "skos:broader": [
                "dfc-pt:sheep-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:sheepfoot-mushroom",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sheepfoot mushroom",
                    "@language": "en"
                },
                {
                    "@value": "Pied-de-mouton",
                    "@language": "fr"
                }
            ],
            "skos:notation": "sheepfoot-mushroom",
            "skos:broader": [
                "dfc-pt:mushroom"
            ]
        },
        {
            "@id": "dfc-pt:shellfish",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "shellfish",
                    "@language": "en"
                },
                {
                    "@value": "crustacés",
                    "@language": "fr"
                }
            ],
            "skos:notation": "shellfish",
            "skos:broader": [
                "dfc-pt:fishery-product"
            ]
        },
        {
            "@id": "dfc-pt:simmering-meat",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "simmering meat",
                    "@language": "en"
                },
                {
                    "@value": "viande à mijoter",
                    "@language": "fr"
                }
            ],
            "skos:notation": "simmering-meat",
            "skos:broader": [
                "dfc-pt:beef"
            ]
        },
        {
            "@id": "dfc-pt:smooth-cabbage",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "smooth cabbage",
                    "@language": "en"
                },
                {
                    "@value": "chou lisse",
                    "@language": "fr"
                }
            ],
            "skos:notation": "smooth-cabbage",
            "skos:broader": [
                "dfc-pt:cabbage"
            ]
        },
        {
            "@id": "dfc-pt:smoothie",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "smoothie",
                    "@language": "en"
                },
                {
                    "@value": "smoothie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "smoothie",
            "skos:broader": [
                "dfc-pt:soft-drink"
            ]
        },
        {
            "@id": "dfc-pt:snack",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": "snack",
            "skos:notation": "snack",
            "skos:broader": [
                "dfc-pt:savory-groceries"
            ]
        },
        {
            "@id": "dfc-pt:snails",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "snails",
                    "@language": "en"
                },
                {
                    "@value": "escargots",
                    "@language": "fr"
                }
            ],
            "skos:notation": "snails",
            "skos:broader": [
                "dfc-pt:meat-product"
            ]
        },
        {
            "@id": "dfc-pt:soft-drink",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "soft drink",
                    "@language": "en"
                },
                {
                    "@value": "boisson non alcoolisée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "soft-drink",
            "skos:broader": [
                "dfc-pt:drink"
            ]
        },
        {
            "@id": "dfc-pt:soup",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "soup",
                    "@language": "en"
                },
                {
                    "@value": "soupe",
                    "@language": "fr"
                }
            ],
            "skos:notation": "soup",
            "skos:broader": [
                "dfc-pt:processed-vegetable"
            ]
        },
        {
            "@id": "dfc-pt:spinach",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "spinach",
                    "@language": "en"
                },
                {
                    "@value": "épinards",
                    "@language": "fr"
                }
            ],
            "skos:notation": "spinach",
            "skos:broader": [
                "dfc-pt:salad"
            ]
        },
        {
            "@id": "dfc-pt:squash",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "squash",
                    "@language": "en"
                },
                {
                    "@value": "courge",
                    "@language": "fr"
                }
            ],
            "skos:notation": "squash",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:strawberry",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "strawberry",
                    "@language": "en"
                },
                {
                    "@value": "fraise",
                    "@language": "fr"
                }
            ],
            "skos:notation": "strawberry",
            "skos:broader": [
                "dfc-pt:berry"
            ]
        },
        {
            "@id": "dfc-pt:sweet-groceries",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sweet groceries",
                    "@language": "en"
                },
                {
                    "@value": "épicerie sucrée",
                    "@language": "fr"
                }
            ],
            "skos:notation": "sweet-groceries",
            "skos:broader": [
                "dfc-pt:local-grocery-store"
            ]
        },
        {
            "@id": "dfc-pt:sweet-yogurt",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "sweet yogurt",
                    "@language": "en"
                },
                {
                    "@value": "yaourt sucré",
                    "@language": "fr"
                }
            ],
            "skos:notation": "sweet-yogurt",
            "skos:broader": [
                "dfc-pt:cow-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:tarragon",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "tarragon",
                    "@language": "en"
                },
                {
                    "@value": "estragon",
                    "@language": "fr"
                }
            ],
            "skos:notation": "tarragon",
            "skos:broader": [
                "dfc-pt:aromatic",
                "dfc-pt:herb"
            ]
        },
        {
            "@id": "dfc-pt:thyme",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "thyme",
                    "@language": "en"
                },
                {
                    "@value": "thym",
                    "@language": "fr"
                }
            ],
            "skos:notation": "thyme",
            "skos:broader": [
                "dfc-pt:aromatic",
                "dfc-pt:herb"
            ]
        },
        {
            "@id": "dfc-pt:tomato",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "tomato",
                    "@language": "en"
                },
                {
                    "@value": "tomate",
                    "@language": "fr"
                }
            ],
            "skos:notation": "tomato",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:truffle",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "truffle",
                    "@language": "en"
                },
                {
                    "@value": "truffe",
                    "@language": "fr"
                }
            ],
            "skos:notation": "truffle",
            "skos:broader": [
                "dfc-pt:mushroom"
            ]
        },
        {
            "@id": "dfc-pt:turkey",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "turkey",
                    "@language": "en"
                },
                {
                    "@value": "dinde",
                    "@language": "fr"
                }
            ],
            "skos:notation": "turkey",
            "skos:broader": [
                "dfc-pt:poultry"
            ]
        },
        {
            "@id": "dfc-pt:turnip",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "turnip",
                    "@language": "en"
                },
                {
                    "@value": "navet",
                    "@language": "fr"
                }
            ],
            "skos:notation": "turnip",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:uchiki-kuri-squash",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "uchiki kuri squash",
                    "@language": "en"
                },
                {
                    "@value": "potimarron",
                    "@language": "fr"
                }
            ],
            "skos:notation": "uchiki-kuri-squash",
            "skos:broader": [
                "dfc-pt:squash"
            ]
        },
        {
            "@id": "dfc-pt:veal",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "veal",
                    "@language": "en"
                },
                {
                    "@value": "veau",
                    "@language": "fr"
                }
            ],
            "skos:notation": "veal",
            "skos:broader": [
                "dfc-pt:meat-product"
            ]
        },
        {
            "@id": "dfc-pt:vegetable",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "vegetable",
                    "@language": "en"
                },
                {
                    "@value": "légume",
                    "@language": "fr"
                }
            ],
            "skos:notation": "vegetable"
        },
        {
            "@id": "dfc-pt:venison",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "Venison",
                    "@language": "en"
                },
                {
                    "@value": "Viande de cerf",
                    "@language": "fr"
                }
            ],
            "skos:notation": "venison",
            "skos:broader": [
                "dfc-pt:meat-product"
            ]
        },
        {
            "@id": "dfc-pt:viennoiserie-",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "viennoiserie",
                    "@language": "en"
                },
                {
                    "@value": "viennoiserie",
                    "@language": "fr"
                }
            ],
            "skos:notation": "viennoiserie-",
            "skos:broader": [
                "dfc-pt:bakery"
            ]
        },
        {
            "@id": "dfc-pt:walnut",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "walnut",
                    "@language": "en"
                },
                {
                    "@value": "noix",
                    "@language": "fr"
                }
            ],
            "skos:notation": "walnut",
            "skos:broader": [
                "dfc-pt:nut"
            ]
        },
        {
            "@id": "dfc-pt:wine",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "wine",
                    "@language": "en"
                },
                {
                    "@value": "vin",
                    "@language": "fr"
                }
            ],
            "skos:notation": "wine",
            "skos:broader": [
                "dfc-pt:alcoholic-beverage"
            ]
        },
        {
            "@id": "dfc-pt:yam",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "yam",
                    "@language": "en"
                },
                {
                    "@value": "Patate douce",
                    "@language": "fr"
                }
            ],
            "skos:notation": "yam",
            "skos:broader": [
                "dfc-pt:vegetable"
            ]
        },
        {
            "@id": "dfc-pt:yogurt-on-a-bed-of-fruit",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "yogurt on a bed of fruit",
                    "@language": "en"
                },
                {
                    "@value": "yaourt sur lit de fruits",
                    "@language": "fr"
                }
            ],
            "skos:notation": "yogurt-on-a-bed-of-fruit",
            "skos:broader": [
                "dfc-pt:cow-dairy-product"
            ]
        },
        {
            "@id": "dfc-pt:yogurt-with-fruits",
            "@type": [
                "skos:Concept"
            ],
            "skos:prefLabel": [
                {
                    "@value": "yogurt with fruits",
                    "@language": "en"
                },
                {
                    "@value": "yaourt aux fruits",
                    "@language": "fr"
                }
            ],
            "skos:notation": "yogurt-with-fruits",
            "skos:broader": [
                "dfc-pt:cow-dairy-product"
            ]
        }
    ]
};
