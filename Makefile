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
