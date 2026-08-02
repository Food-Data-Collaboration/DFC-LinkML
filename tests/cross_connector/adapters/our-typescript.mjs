#!/usr/bin/env node
// Adapter for the DFC-LinkML TypeScript connector (local dist).
// Subcommands:
//   capabilities            -> JSON classes/predicates map
//   export <scenario.json>  -> JSON-LD (reads scenario from file, writes to stdout)
//   import                  -> JSON-LD re-export (reads JSON-LD from stdin)

import { readFileSync } from "node:fs";
import { Connector, SemanticObject } from "../../../typescript-connector/dist/index.js";

const subcommand = process.argv[2];

function readStdin() {
  return new Promise((resolve, reject) => {
    const chunks = [];
    process.stdin.on("data", (c) => chunks.push(c));
    process.stdin.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
    process.stdin.on("error", reject);
  });
}

function capabilities() {
  const classes = {};
  for (const [type, Klass] of SemanticObject.typeRegistry) {
    const probe = new Klass("_:probe");
    classes[type] = probe.getRegisteredPredicates().sort();
  }
  process.stdout.write(JSON.stringify({ name: "our-typescript", classes }, null, 2));
}

const PARAM_MAP = {
  "dfc-b:Order": { orderNumber: "orderNumber", orderedBy: "orderedBy", hasPart: "hasPart" },
  "dfc-b:OrderLine": { name: "name", quantity: "quantity", concerns: "concerns" },
  "dfc-b:SuppliedProduct": { name: "name", description: "description" },
  "dfc-b:Enterprise": { name: "name", description: "description", vatNumber: "vatNumber" },
  "dfc-b:Organization": { name: "name", description: "description", vatNumber: "vatNumber" },
  "dfc-b:CatalogItem": { sku: "sku", references: "references", offeredThrough: "offeredThrough" },
  "dfc-b:Price": { vatRate: "vatRate" },
  "dfc-b:Offer": { name: "name", hasPrice: "hasPrice" },
};

function resolveRefs(params) {
  const out = {};
  for (const [k, v] of Object.entries(params ?? {})) {
    if (v && typeof v === "object" && "$ref" in v) out[k] = v.$ref;
    else out[k] = v;
  }
  return out;
}

function exportScenario(path) {
  const spec = JSON.parse(readFileSync(path, "utf-8"));
  const connector = new Connector();
  const instances = spec.objects.map((obj) => {
    const Klass = SemanticObject.typeRegistry.get(obj.type);
    if (!Klass) throw new Error(`Unknown type ${obj.type}`);
    const map = PARAM_MAP[obj.type] ?? {};
    const raw = obj.params ?? {};
    const translated = {};
    for (const [k, v] of Object.entries(raw)) {
      if (k in map) translated[map[k]] = v;
    }
    return new Klass(obj.semanticId, resolveRefs(translated));
  });
  connector.export(...instances)
    .then((json) => process.stdout.write(json))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

async function importData() {
  const jsonld = JSON.parse(await readStdin());
  const connector = new Connector();
  const objects = connector.import(jsonld);
  const list = Array.isArray(objects) ? objects : [objects];
  const result = await connector.export(...list);
  process.stdout.write(result);
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
    console.error("usage: our-typescript.mjs {capabilities|export <scenario.json>|import}");
    process.exit(1);
}
