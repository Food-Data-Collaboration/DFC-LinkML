# Generation

All generated code comes from `config/dfc-release.yaml` via one entrypoint:

```bash
make generate                        # everything
python3 scripts/generate_all.py --steps ruby,php   # subset
make check-generated                 # regenerate in place, fail if tracked
                                     # generated files change (needs clean tree)
```

## Steps

| Step | Command | Network? | Output |
|---|---|---|---|
| `schema` | `scripts/owl2linkml.py --config … --ontology-version … --taxonomy-version …` | Yes (ontology download) | `src/dfc_business_linkml_v2_0.yaml` |
| `typescript` | `scripts/generate_typescript_connector.py --schema … --output …` | No | `typescript-connector/src/` |
| `ruby` | `scripts/generate_ruby_gem.py` (fixed paths, run from repo root) | No | `ruby-gem/` (preserves `vocabularies/`, `contexts/`, `spec/`) |
| `php` | `scripts/generate_php_connector.py --schema … --output …` | No | `php-connector/src/` (preserves `tests/`, copies data from `ruby-gem/`) |

## Rules

- Never hand-edit generated code or `src/*.yaml`; change the generator (or
  `config/dfc-default.yaml` skip lists) and regenerate.
- Bumping DFC versions = edit `config/dfc-release.yaml`, run `make
  generate`, commit everything including regenerated output.
- `make check-generated` runs in CI for the offline connector steps
  (`--steps typescript,ruby,php`); the `schema` step needs network, so it
  runs manually. See `.github/workflows/ci.yml`.
- After regenerating TypeScript, run `npm run build` in
  `typescript-connector/` — `dist/` is committed.
