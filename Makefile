# Thin aliases over scripts/generate_all.py (see docs/generation.md).

generate:
	python3 scripts/generate_all.py

check-generated:
	python3 scripts/generate_all.py --check

# Release surface. `make release` is a dry run; add APPLY=1 to write the
# version, then TAG=1 (after committing) to create and push the registry tags.
release:
	python3 scripts/tag_release.py --bump $(or $(LEVEL),patch) $(if $(APPLY),--apply,)

release-show:
	python3 scripts/tag_release.py --show

# Docs site (Phase 5). SITE_DIR is where the built HTML lands; `docs-serve`
# needs mkdocs-material, which is not a package dependency.
SITE_DIR ?= site

docs-build:
	mkdocs build --strict --site-dir $(SITE_DIR)
	python3 scripts/check_site_links.py --site-dir $(SITE_DIR)

docs-serve:
	mkdocs serve

# What CI runs on every push: build the site, then resolve every internal
# href against the built tree. The second step is not optional -- MkDocs
# validates relative links against the source tree, so it cannot see a broken
# output-relative link at all.
docs-check: docs-build
