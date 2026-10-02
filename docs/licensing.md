# Licensing

DFC-LinkML is licensed under two terms, split along the generator boundary.

## The split

| | Licence | Where |
|---|---|---|
| The LinkML codebase | **AGPLv3** | root [`LICENSE`](../LICENSE) |
| The generated connectors | **MIT** | beside each connector's code |

The **codebase** covers everything that produces or verifies the connectors:

```text
scripts/     the OWL→LinkML converter and the three connector generators
src/         the generated LinkML schema
config/      skip lists, prefixes, the release manifest
tests/       unit, conformance, and cross-connector parity suites
shacl/       generated SHACL shapes
```

The **connectors** are build outputs:

```text
typescript-connector/   MIT — see typescript-connector/LICENSE
ruby-gem/               MIT — see ruby-gem/LICENSE
php-connector/          MIT — see php-connector/LICENSE
```

The rationale is that a project consuming the DFC data model should not be
obliged to adopt a copyleft licence for its own code. Using the generated
connector is MIT; modifying the generator that produced it is AGPLv3.

## Two licences, one repository

This is why there is more than one `LICENSE` file. Each connector ships its
own, because that is the notice that travels with the distributed package:

- **npm/jsr** — the `LICENSE` inside the published package
- **RubyGems** — `spec.files` includes `LICENSE`, so the gem carries it
- **packagist** — `archive.exclude` drops the root (AGPLv3) `LICENSE` from
  the dist and keeps `php-connector/LICENSE`, so the archive cannot appear to
  be AGPL when the code in it is MIT

The root `LICENSE` is AGPLv3 with a header naming the split. If you are
reading only the root file, it does not apply to the connector code you
installed.

## Do not "fix" one side to match the other

The two used to disagree: the root `LICENSE` said MIT while both the PHP and
Ruby manifests declared AGPL-3.0. That was an unreviewed default, not a
decision. It is now consistent, and a test
(`tests/test_packagist_manifest.py`) fails if a connector's declared licence
or shipped `LICENSE` drifts back.

## Which applies to your use

| You are… | Licence |
|---|---|
| Using a connector | MIT |
| Embedding a connector in a proprietary product | MIT |
| Reading the schema (`src/*.yaml`) | AGPLv3 |
| Running the generators | AGPLv3 |
| Modifying the generators and publishing the result | AGPLv3 |

## Third-party licences

The connectors depend on:

- **TypeScript** — `jsonld` (MIT)
- **Ruby** — `json-ld` and `rdf` gems (both BSD-2-Clause)
- **PHP** — no runtime dependencies

The DFC ontology and SKOS taxonomies are published by the Data Food
Consortium under their own terms; this repository mirrors their structure,
not their licence.
