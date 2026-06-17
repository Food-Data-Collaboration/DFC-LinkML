import * as jsonld from "jsonld";

export async function canonize(doc: Record<string, unknown>): Promise<string> {
  const canonized = await jsonld.canonize(doc, {
    algorithm: "URDNA2015",
    format: "application/n-quads",
  });
  return canonized;
}

export async function canonizeJson(json: string): Promise<string> {
  return canonize(JSON.parse(json));
}

export function normalizeNQuads(nquads: string): string {
  return nquads
    .split("\n")
    .filter((l) => l.trim())
    .sort()
    .join("\n");
}

export async function canonicalEquals(
  a: Record<string, unknown>,
  b: Record<string, unknown>,
): Promise<boolean> {
  const [aNq, bNq] = await Promise.all([canonize(a), canonize(b)]);
  return normalizeNQuads(aNq) === normalizeNQuads(bNq);
}
