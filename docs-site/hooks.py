"""MkDocs hook: rewrite GitHub-style relative links into site URLs.

The docs are written as Markdown on GitHub, where a page is a *file*: from
`reference/model/properties/value.md`, a link to a class is `../classes/Price.md`.
MkDocs serves a page as a *directory*: the same page becomes
`reference/model/properties/value/index.html` and the class becomes
`reference/model/classes/Price/`.

So a GitHub-correct link is wrong under MkDocs in two ways at once, and both
have to be fixed:

1. the `.md` extension is resolved as part of the filename, not stripped;
2. the relative depth shifts by one, because the source page gains a trailing
   directory.

Rewriting here rather than in the sources has two consequences worth stating.
The committed Markdown stays GitHub-native -- a reader browsing the repository
gets working links with no build step -- and the rewrite happens once, at build
time, instead of needing 2400 edits that then have to be kept in step as pages
move.

Each target is resolved against the source tree and looked up in MkDocs' own
file index, so the rewrite cannot invent a link to a page that does not exist.
An unresolvable target is left alone and reported by MkDocs' strict mode, which
is the same guarantee tests/test_docs_surface.py gives on GitHub.

External links (`https://`, `mailto:`) are untouched, as are links into the
connectors' own directories: `typescript-connector/...` is a path in the
repository, not a page on this site, and stripping its extension would turn a
working repository link into a dead one.
"""
from __future__ import annotations

import posixpath
import re

# [text](target) or [text](target "title")
LINK = re.compile(r'\]\(([^)\s]+)((?:\s+"[^"]*")?)\)')

# Directories owned by the repository rather than by this site: a link into one
# of these is meant to leave the docs, so it stays a repository-relative path.
REPO_PREFIXES = (
    'typescript-connector/', 'ruby-gem/', 'php-connector/',
    'tests/', 'scripts/', 'config/', 'shacl/', 'src/', 'site/',
)


def _is_local(target: str) -> bool:
    return not target.startswith(('http://', 'https://', 'mailto:', '#'))


def _resolve(target: str, page, files) -> str | None:
    """Rewrite one link, or return None to leave it untouched.

    Returns a site-relative URL on success. None means "not ours": external,
    into the repository, a pure anchor, or a target that is not in the file
    index.
    """
    if not _is_local(target):
        return None
    path, sep, anchor = target.partition('#')
    if any(path.startswith(p) or f'../{p}' in path for p in REPO_PREFIXES):
        return None
    if not path.endswith('.md'):
        # Already extensionless, or a bare anchor: leave it for MkDocs.
        return None

    src_dir = posixpath.dirname(page.file.src_uri)
    target_uri = posixpath.normpath(posixpath.join(src_dir, path))
    target_file = files.get_file_from_path(target_uri)
    if target_file is None:
        return None

    # page.file.url is the output URL of the page carrying the link; the target's
    # URL is the same directory plus '/'. relpath between them is the href.
    target_url = target_file.url
    href = posixpath.relpath(target_url, posixpath.dirname(page.file.url))
    if not href.endswith('/'):
        href += '/'
    return f'{href}#{anchor}' if sep else href


def rewrite(markdown: str, page, files) -> str:
    def sub(match: re.Match) -> str:
        target = match.group(1)
        resolved = _resolve(target, page, files)
        if resolved is None:
            return match.group(0)
        return f']({resolved}{match.group(2)})'

    return LINK.sub(sub, markdown)


def on_page_markdown(markdown: str, page, config, files, **kwargs) -> str:
    return rewrite(markdown, page, files)
