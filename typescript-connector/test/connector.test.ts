import { describe, it, expect, beforeAll } from "vitest";
import * as fs from "fs";
import { Connector, SuppliedProduct, Address, SemanticObject, WhatSubject, WhereSubject, WhoSubject, HowSubject, Organization, Person, Price, Offer, CatalogItem, PhysicalProduct, DefinedProduct } from "../src/index.js";

const facets = JSON.parse(
  fs.readFileSync("./test/thesaurus/facets.json", "utf-8")
);
const measures = JSON.parse(
  fs.readFileSync("./test/thesaurus/measures.json", "utf-8")
);
const productTypes = JSON.parse(
  fs.readFileSync("./test/thesaurus/productTypes.json", "utf-8")
);

describe("Connector", () => {
  it("creates a connector with default versions", () => {
    const c = new Connector();
    expect(c.ontologyVersion).toBe("2.0.0");
    expect(c.taxonomyVersion).toBe("2.0.0");
  });

  it("creates a connector with custom versions", () => {
    const c = new Connector({ ontologyVersion: "1.16.0", taxonomyVersion: "1.16.0" });
    expect(c.ontologyVersion).toBe("1.16.0");
    expect(c.taxonomyVersion).toBe("1.16.0");
  });

  it("loads vocabularies from JSON data", () => {
    const c = new Connector();
    c.loadFacets(facets);
    c.loadMeasures(measures);
    c.loadProductTypes(productTypes);
    const facet = c.facet;
    expect(facet).toBeDefined();
    expect(typeof facet).toBe("object");
  });
});

describe("SuppliedProduct", () => {
  it("creates via Connector factory", () => {
    const c = new Connector();
    const p = c.createSuppliedProduct("http://myplatform.com/tomato", {
      description: "Awesome tomato",
    });
    expect(p.semanticId).toBe("http://myplatform.com/tomato");
    expect(p.description).toBe("Awesome tomato");
    expect(p.semanticType).toBe("dfc-b:SuppliedProduct");
  });

  it("creates directly", () => {
    const p = new SuppliedProduct("http://myplatform.com/tomato", {
      description: "Awesome tomato",
      frozen: true,
    });
    expect(p.semanticId).toBe("http://myplatform.com/tomato");
    expect(p.description).toBe("Awesome tomato");
    expect(p.frozen).toBe(true);
  });

  it("maintains type registry", () => {
    const Klass = SemanticObject.typeRegistry.get("dfc-b:SuppliedProduct");
    expect(Klass).toBe(SuppliedProduct);
  });

  it("extends parent class", () => {
    const p = new SuppliedProduct("http://myplatform.com/tomato", {
      name: "Tomato",
      description: "Fresh tomato",
    });
    expect(p.name).toBe("Tomato");
    expect(p.description).toBe("Fresh tomato");
  });

  it("serializes to JSON-LD", () => {
    const p = new SuppliedProduct("http://myplatform.com/tomato", {
      description: "Awesome tomato",
      frozen: true,
      totalTheoriticalStock: 100,
    });
    const jsonLd = p.toJsonLd();
    expect(jsonLd["@id"]).toBe("http://myplatform.com/tomato");
    expect(jsonLd["@type"]).toBe("dfc-b:SuppliedProduct");
    expect(jsonLd["dfc-b:What_Subject:description"]).toBe("Awesome tomato");
    expect(jsonLd["dfc-b:SuppliedProduct:frozen"]).toBe(true);
    expect(jsonLd["dfc-b:SuppliedProduct:total_theoritical_stock"]).toBe(100);
  });
});

describe("Address", () => {
  it("creates with properties", () => {
    const c = new Connector();
    const a = c.createAddress("http://myplatform.com/address1", {
      city: "Tours",
      country: "France",
      postcode: "37000",
      street: "1 Rue des Halles",
    });
    expect(a.city).toBe("Tours");
    expect(a.country).toBe("France");
    expect(a.postcode).toBe("37000");
    expect(a.semanticType).toBe("dfc-b:Address");
  });

  it("serializes to JSON-LD", () => {
    const a = new Address("http://myplatform.com/address1", {
      city: "Tours",
      country: "France",
    });
    const jsonLd = a.toJsonLd();
    expect(jsonLd["@id"]).toBe("http://myplatform.com/address1");
    expect(jsonLd["@type"]).toBe("dfc-b:Address");
    expect(jsonLd["dfc-b:Address:city"]).toBe("Tours");
    expect(jsonLd["dfc-b:Address:country"]).toBe("France");
  });
});

describe("Import/Export", () => {
  it("imports JSON-LD and creates objects", () => {
    const c = new Connector();
    const jsonLd = {
      "@graph": [
        {
          "@id": "http://myplatform.com/address1",
          "@type": "dfc-b:Address",
          city: "Tours",
          country: "France",
        },
      ],
    };
    const result = c.import(jsonLd);
    expect(Array.isArray(result)).toBe(false);
    if (!Array.isArray(result)) {
      expect(result.semanticId).toBe("http://myplatform.com/address1");
      expect(result.semanticType).toBe("dfc-b:Address");
    }
  });

  it("exports to JSON-LD", async () => {
    const c = new Connector();
    const p = c.createSuppliedProduct("http://myplatform.com/tomato", {
      description: "Tomato",
    });
    const exported = await c.export(p);
    expect(exported["@id"]).toBe("http://myplatform.com/tomato");
    expect(exported["@type"]).toBe("dfc-b:SuppliedProduct");
  });

  it("import/export round-trips single object", async () => {
    const c = new Connector();
    const original = c.createSuppliedProduct("http://myplatform.com/tomato", {
      description: "Round trip test",
      frozen: true,
    });
    const exported = await c.export(original);
    const imported = c.import(exported);
    const obj = Array.isArray(imported) ? imported[0] : imported;
    expect(obj.semanticId).toBe("http://myplatform.com/tomato");
    expect(obj.semanticType).toBe("dfc-b:SuppliedProduct");
  });
});

describe("Root classes", () => {
  it("creates WhatSubject with name and description", () => {
    const c = new Connector();
    const ws = c.createWhatSubject("http://example.com/what1", {
      name: "What",
      description: "A what subject",
    });
    expect(ws.name).toBe("What");
    expect(ws.description).toBe("A what subject");
    expect(ws.semanticType).toBe("dfc-b:What_Subject");
  });

  it("creates WhereSubject with name and description", () => {
    const c = new Connector();
    const ws = c.createWhereSubject("http://example.com/where1", {
      name: "Where",
      description: "A where subject",
    });
    expect(ws.name).toBe("Where");
    expect(ws.description).toBe("A where subject");
    expect(ws.semanticType).toBe("dfc-b:Where_Subject");
  });

  it("creates WhoSubject with name and description", () => {
    const c = new Connector();
    const ws = c.createWhoSubject("http://example.com/who1", {
      name: "Who",
      description: "A who subject",
    });
    expect(ws.name).toBe("Who");
    expect(ws.description).toBe("A who subject");
    expect(ws.semanticType).toBe("dfc-b:Who_Subject");
  });

  it("creates HowSubject with name and description", () => {
    const c = new Connector();
    const hs = c.createHowSubject("http://example.com/how1", {
      name: "How",
      description: "A how subject",
    });
    expect(hs.name).toBe("How");
    expect(hs.description).toBe("A how subject");
    expect(hs.semanticType).toBe("dfc-b:How_Subject");
  });
});

describe("Organization", () => {
  it("creates via factory with properties", () => {
    const c = new Connector();
    const org = c.createOrganization("http://example.com/org1", {
      name: "Test Org",
      description: "A test organization",
      vatNumber: "FR123456789",
      vatStatus: true,
      organizationId: "ORG-001",
    });
    expect(org.name).toBe("Test Org");
    expect(org.description).toBe("A test organization");
    expect(org.vatNumber).toBe("FR123456789");
    expect(org.vatStatus).toBe(true);
    expect(org.organizationId).toBe("ORG-001");
    expect(org.semanticType).toBe("dfc-b:Organization");
  });
});

describe("Person", () => {
  it("creates via factory with properties", () => {
    const c = new Connector();
    const person = c.createPerson("http://example.com/person1", {
      name: "John Doe",
      description: "A contact person",
      firstName: "John",
      familyName: "Doe",
      email: "john@example.com",
    });
    expect(person.name).toBe("John Doe");
    expect(person.description).toBe("A contact person");
    expect(person.firstName).toBe("John");
    expect(person.familyName).toBe("Doe");
    expect(person.email).toBe("john@example.com");
    expect(person.semanticType).toBe("dfc-b:Person");
  });
});

describe("Price", () => {
  it("creates via factory with properties", () => {
    const c = new Connector();
    const price = c.createPrice("http://example.com/price1", {
      name: "Retail Price",
      description: "Standard retail price",
      vatRate: 20.0,
      isPriceOf: "http://example.com/product1",
    });
    expect(price.name).toBe("Retail Price");
    expect(price.description).toBe("Standard retail price");
    expect(price.vatRate).toBe(20.0);
    expect(price.isPriceOf).toBe("http://example.com/product1");
    expect(price.semanticType).toBe("dfc-b:Price");
  });
});

describe("Offer", () => {
  it("creates via factory with properties", () => {
    const c = new Connector();
    const offer = c.createOffer("http://example.com/offer1", {
      name: "Summer Sale",
      description: "Discount offer",
      discount: 15,
      stockLimitation: 100,
      hasPrice: "http://example.com/price1",
    });
    expect(offer.name).toBe("Summer Sale");
    expect(offer.description).toBe("Discount offer");
    expect(offer.discount).toBe(15);
    expect(offer.stockLimitation).toBe(100);
    expect(offer.hasPrice).toBe("http://example.com/price1");
    expect(offer.semanticType).toBe("dfc-b:Offer");
  });
});

describe("CatalogItem", () => {
  it("creates via factory with properties", () => {
    const c = new Connector();
    const item = c.createCatalogItem("http://example.com/item1", {
      name: "Catalog Item 1",
      description: "An item in the catalog",
      sku: "SKU-001",
      stockLimitation: 50,
    });
    expect(item.name).toBe("Catalog Item 1");
    expect(item.description).toBe("An item in the catalog");
    expect(item.sku).toBe("SKU-001");
    expect(item.stockLimitation).toBe(50);
    expect(item.semanticType).toBe("dfc-b:CatalogItem");
  });
});

describe("PhysicalProduct", () => {
  it("creates via factory with properties", () => {
    const c = new Connector();
    const product = c.createPhysicalProduct("http://example.com/phys1", {
      name: "Tomato Box",
      description: "A box of fresh tomatoes",
      image: "http://example.com/tomato.jpg",
      quantity: 12,
    });
    expect(product.name).toBe("Tomato Box");
    expect(product.description).toBe("A box of fresh tomatoes");
    expect(product.image).toBe("http://example.com/tomato.jpg");
    expect(product.quantity).toBe(12);
    expect(product.semanticType).toBe("dfc-b:PhysicalProduct");
  });
});

describe("DefinedProduct", () => {
  it("creates via factory with properties", () => {
    const c = new Connector();
    const product = c.createDefinedProduct("http://example.com/def1", {
      name: "Organic Apple",
      description: "Organic apple product",
      brand: "Organic Farms",
      url: "http://example.com/apple",
      hasPercentageOfAlcoholByVolume: 0,
    });
    expect(product.name).toBe("Organic Apple");
    expect(product.description).toBe("Organic apple product");
    expect(product.brand).toBe("Organic Farms");
    expect(product.url).toBe("http://example.com/apple");
    expect(product.hasPercentageOfAlcoholByVolume).toBe(0);
    expect(product.semanticType).toBe("dfc-b:DefinedProduct");
  });
});

describe("SemanticObject.typeRegistry", () => {
  it("has entries for all 88 model classes", () => {
    expect(SemanticObject.typeRegistry.size).toBe(88);
    expect(SemanticObject.typeRegistry.get("dfc-b:What_Subject")).toBe(WhatSubject);
    expect(SemanticObject.typeRegistry.get("dfc-b:Where_Subject")).toBe(WhereSubject);
    expect(SemanticObject.typeRegistry.get("dfc-b:Who_Subject")).toBe(WhoSubject);
    expect(SemanticObject.typeRegistry.get("dfc-b:How_Subject")).toBe(HowSubject);
    expect(SemanticObject.typeRegistry.get("dfc-b:Organization")).toBe(Organization);
    expect(SemanticObject.typeRegistry.get("dfc-b:Person")).toBe(Person);
    expect(SemanticObject.typeRegistry.get("dfc-b:Price")).toBe(Price);
    expect(SemanticObject.typeRegistry.get("dfc-b:Offer")).toBe(Offer);
    expect(SemanticObject.typeRegistry.get("dfc-b:CatalogItem")).toBe(CatalogItem);
    expect(SemanticObject.typeRegistry.get("dfc-b:PhysicalProduct")).toBe(PhysicalProduct);
    expect(SemanticObject.typeRegistry.get("dfc-b:DefinedProduct")).toBe(DefinedProduct);
    expect(SemanticObject.typeRegistry.get("dfc-b:SuppliedProduct")).toBe(SuppliedProduct);
    expect(SemanticObject.typeRegistry.get("dfc-b:Address")).toBe(Address);
  });
});

describe("Import/Export extended", () => {
  it("imports multiple objects in @graph", () => {
    const c = new Connector();
    const jsonLd = {
      "@graph": [
        {
          "@id": "http://example.com/org1",
          "@type": "dfc-b:Organization",
          name: "Test Org",
        },
        {
          "@id": "http://example.com/person1",
          "@type": "dfc-b:Person",
          name: "John Doe",
        },
        {
          "@id": "http://example.com/product1",
          "@type": "dfc-b:PhysicalProduct",
          name: "Tomato",
        },
      ],
    };
    const result = c.import(jsonLd);
    expect(Array.isArray(result)).toBe(true);
    if (Array.isArray(result)) {
      expect(result).toHaveLength(3);
      expect(result[0].semanticType).toBe("dfc-b:Organization");
      expect(result[1].semanticType).toBe("dfc-b:Person");
      expect(result[2].semanticType).toBe("dfc-b:PhysicalProduct");
    }
  });

  it("imports @graph with @id references between objects", () => {
    const c = new Connector();
    const jsonLd = {
      "@graph": [
        {
          "@id": "http://example.com/org1",
          "@type": "dfc-b:Organization",
          name: "Farm Org",
          isCertifiedBy: "http://example.com/org2",
        },
        {
          "@id": "http://example.com/org2",
          "@type": "dfc-b:Organization",
          name: "Certifier Org",
        },
      ],
    };
    const result = c.import(jsonLd);
    expect(Array.isArray(result)).toBe(true);
    if (Array.isArray(result)) {
      expect(result).toHaveLength(2);
      const org1 = result.find(o => o.semanticId === "http://example.com/org1");
      const org2 = result.find(o => o.semanticId === "http://example.com/org2");
      expect(org1).toBeDefined();
      expect(org2).toBeDefined();
      expect((org1 as Organization).name).toBe("Farm Org");
      expect((org2 as Organization).name).toBe("Certifier Org");
      expect(typeof (org1 as Organization).isCertifiedBy).toBe("object");
      expect((org1 as Organization).isCertifiedBy).toBe(org2);
    }
  });
});
