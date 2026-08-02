#!/usr/bin/env node
// Adapter for the official DFC TypeScript connector (@datafoodconsortium/connector).
// Subcommands:
//   capabilities            -> JSON classes/predicates map
//   export <scenario.json>  -> JSON-LD
//   import                  -> JSON-LD re-export (reads JSON-LD from stdin)

import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const pkg = require(path.join(__dirname, "..", "..", "node_modules", "@datafoodconsortium/connector", "package.json"));
const mod = await import(path.join(__dirname, "..", "..", "node_modules", "@datafoodconsortium/connector", pkg.main));

const { Connector } = mod;
const subcommand = process.argv[2];
const CTX = "https://w3id.org/dfc/ontology/context/context_1.16.0.json";

// Canonical scenario param name => official-connector setter method.
const PARAM_METHODS = {
  "dfc-b:Order": {
    orderNumber: "setNumber",
    hasPart: "addLine",
    orderedBy: "setClient",
  },
  "dfc-b:OrderLine": {
    quantity: "setQuantity",
    description: "setDescription",
    concerns: "setOffer",
  },
  "dfc-b:SuppliedProduct": {
    name: "setName",
    description: "setDescription",
  },
  "dfc-b:Enterprise": {
    name: "setName",
    description: "setDescription",
    vatNumber: "setVatNumber",
  },
  "dfc-b:Organization": {
    name: "setName",
    description: "setDescription",
    vatNumber: "setVatNumber",
  },
  "dfc-b:CatalogItem": {
    sku: "setSku",
    references: "setOfferedProduct",
    offeredThrough: "setOffers",
  },
  "dfc-b:Price": {
    vatRate: "setVatRate",
  },
  "dfc-b:Offer": {
    hasPrice: "setPrice",
  },
};

// Canonical scenario type => official factory method (official uses
// Enterprise, not Organization).
const TYPE_FACTORY = {
  "dfc-b:Organization": "createEnterprise",
};

// Setters that take an array of objects rather than a single object.
const ARRAY_SETTERS = new Set(["setOffers"]);

// Setters that expect a SemanticObject reference (never a plain scalar/IRI).
const OBJECT_REF_SETTERS = new Set(["setOfferedProduct", "setPrice", "setOffer", "setClient"]);

const FACTORY_METHODS = [
  "createAddress", "createAgent", "createAllergenCharacteristic", "createCatalog",
  "createCatalogItem", "createCustomerCategory", "createDefinedProduct",
  "createDeliveryOption", "createEnterprise", "createLocalizedProduct",
  "createNutrientCharacteristic", "createOffer", "createOpeningHoursSpecification",
  "createOrder", "createOrderLine", "createPaymentMethod", "createPerson",
  "createPhoneNumber", "createPhysicalCharacteristic", "createPhysicalPlace",
  "createPhysicalProduct", "createPickupOption", "createPlannedConsumptionFlow",
  "createPlannedLocalConsumptionFlow", "createPlannedLocalProductionFlow",
  "createPlannedLocalTransformation", "createPlannedProductionFlow",
  "createPlannedTransformation", "createPrice", "createProductBatch",
  "createQuantitativeValue", "createRealStock", "createRealizedConsumptionFlow",
  "createRealizedProductionFlow", "createRealizedTransformation",
  "createSaleSession", "createShippingOption", "createSocialMedia",
  "createSuppliedProduct", "createTechnicalProduct", "createTheoreticalStock",
  "createVirtualPlace",
];

function readStdin() {
  return new Promise((resolve, reject) => {
    const chunks = [];
    process.stdin.on("data", (c) => chunks.push(c));
    process.stdin.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
    process.stdin.on("error", reject);
  });
}

function capabilities() {
  const c = new Connector();
  // The semantizer context exposes the connector's full predicate vocabulary
  // (dfc-b:/dfc-t: prefixes). Per-class predicates are not introspectable from
  // the semantizer layer, so each class reports the global predicate surface.
  const probe = c.createEnterprise({ semanticId: "_:probe" });
  const prefixes = probe._semantizer?._context?._prefixes || [];
  const globalPredicates = prefixes
    .map((p) => p.prefix)
    .filter((n) => /^dfc-[bt]:[A-Za-z]/.test(n))
    .sort();

  const classes = {};
  for (const method of FACTORY_METHODS) {
    try {
      const obj = c[method]({ semanticId: "_:probe" });
      const type = obj.getSemanticType?.();
      if (!type) continue;
      classes[type] = globalPredicates;
    } catch {
      // skip factories that need more than semanticId
    }
  }
  process.stdout.write(JSON.stringify({ name: "official-typescript", classes }, null, 2));
}

async function exportScenario(path) {
  const spec = JSON.parse(readFileSync(path, "utf-8"));
  const c = new Connector();
  // Pre-create all instances (empty) so $ref params can link to objects.
  const byId = new Map();
  const instances = spec.objects.map((obj) => {
    const method = TYPE_FACTORY[obj.type] ?? `create${obj.type.replace(/^dfc-b:/, "")}`;
    if (typeof c[method] !== "function") throw new Error(`Unknown type ${obj.type}`);
    const inst = c[method]({ semanticId: obj.semanticId });
    byId.set(obj.semanticId, inst);
    return inst;
  });
  instances.forEach((inst, i) => {
    const obj = spec.objects[i];
    for (const [canonical, value] of Object.entries(obj.params ?? {})) {
      const method = PARAM_METHODS[obj.type]?.[canonical];
      if (!method) continue;
      const isRef = value && typeof value === "object" && "$ref" in value;
      if (isRef) {
        const target = byId.get(value.$ref);
        if (!target) continue;
        if (ARRAY_SETTERS.has(method)) {
          inst[method]([target]);
        } else {
          inst[method](target);
        }
      } else if (typeof inst[method] === "function" && !ARRAY_SETTERS.has(method) && !OBJECT_REF_SETTERS.has(method)) {
        // Literal scalar params (e.g. sku, vatRate) pass through directly.
        inst[method](value);
      }
    }
  });
  const jsonld = await c.export(instances, { context: CTX });
  process.stdout.write(jsonld);
}

async function importData() {
  const jsonld = await readStdin();
  const c = new Connector();
  const objects = await c.import(jsonld);
  const re = await c.export(objects, { context: CTX });
  process.stdout.write(re);
}

switch (subcommand) {
  case "capabilities":
    capabilities();
    break;
  case "export":
    exportScenario(process.argv[3]);
    break;
  case "import":
    importData();
    break;
  default:
    console.error("usage: official-typescript.mjs {capabilities|export <scenario.json>|import}");
    process.exit(1);
}
