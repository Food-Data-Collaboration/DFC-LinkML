#!/usr/bin/env python3
"""Verify every internal link in a built MkDocs site resolves.

MkDocs' own link check resolves relative hrefs against the *source* tree, so it
cannot validate a site whose hrefs are relative to the *output* tree -- which
is what docs-site/hooks.py produces. `mkdocs build --strict` therefore passes
while a broken link could still ship.

This walks the built HTML instead: every internal href is resolved against the
file that contains it, and the target has to exist on disk. That is the same
guarantee tests/test_docs_surface.py gives for the GitHub-rendered Markdown,
applied to the site.

Run after `mkdocs build`. Exits non-zero and prints each broken link.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit

# href/src values worth checking. External schemes and in-page anchors are the
# browser's business, not ours.
HREF = re.compile(r'(?:href|src)="([^"]+)"')

SKIP_SCHEMES = ('http:', 'https:', 'mailto:', 'data:', 'javascript:', '#')


def is_internal(target: str) -> bool:
    if not target or target.startswith(SKIP_SCHEMES):
        return False
    return bool(urlsplit(target).scheme == '' )


def resolves(site: Path, page: Path, target: str) -> Path | None:
    """Return the existing path this href points at, or None if it is broken."""
    target = unquote(urlsplit(target).path)
    if not target:
        return None  # pure anchor
    base = page.parent if target.startswith('/') else page.parent
    if target.startswith('/'):
        candidate = site / target.lstrip('/')
    else:
        candidate = (base / target).resolve()
        try:
            candidate.relative_to(site.resolve())
        except ValueError:
            return None  # escapes the site root: not ours to check
    if candidate.is_dir():
        index = candidate / 'index.html'
        return index if index.is_file() else None
    if candidate.is_file():
        return candidate
    # Directory-style URLs omit the trailing slash; try it as a directory.
    if candidate.is_dir() and (candidate / 'index.html').is_file():
        return candidate / 'index.html'
    return None


def check(site: Path) -> tuple[int, list[str]]:
    pages = sorted(site.rglob('*.html'))
    broken: list[str] = []
    checked = 0
    for page in pages:
        for raw in HREF.findall(page.read_text(encoding='utf-8', errors='replace')):
            if not is_internal(raw):
                continue
            checked += 1
            if resolves(site, page, raw) is None:
                broken.append(f'{page.relative_to(site)} -> {raw}')
    return checked, broken


def main(argv: list[str] | None = None) -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--site-dir', default='site')
    args = parser.parse_args(argv)

    site = Path(args.site_dir)
    if not site.is_dir():
        raise SystemExit(f'{site} is not a directory -- run mkdocs build first')

    checked, broken = check(site)
    print(f'  site links: {checked} internal hrefs across '
          f'{len(list(site.rglob("*.html")))} pages, {len(broken)} broken')
    for line in broken[:40]:
        print(f'    BROKEN {line}')
    if broken:
        raise SystemExit(1)


if __name__ == '__main__':
    main()
