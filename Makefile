# Thin aliases over scripts/generate_all.py (see docs/generation.md).

generate:
	python3 scripts/generate_all.py

check-generated:
	python3 scripts/generate_all.py --check
