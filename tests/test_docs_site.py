"""Guards the Phase 5 docs site.

Two things can break the published site without breaking the repository:

1. `mkdocs.yml` names a page that does not exist -- a broken link on the
   front page, because the nav is the site's table of contents.
2. A docs page is added that nothing links to or that nothing points at, so it
   is unreachable from the site.

Both are cheap to catch here and invisible until someone opens the site, so
they are caught on every push instead. The link *contents* are checked in CI by
`make docs-check`, which builds the site and resolves every href in the built
HTML -- MkDocs' own relative-link check validates against the source tree and
so cannot see a broken output-relative link.
"""
from pathlib import Path
import re

import pytest
import yaml

REPO = Path(__file__).resolve().parent.parent
MKDOCS_YAML = REPO / 'mkdocs.yml'
DOCS = REPO / 'docs'
HOOKS = REPO / 'docs-site' / 'hooks.py'
CHECKER = REPO / 'scripts' / 'check_site_links.py'


@pytest.fixture(scope='module')
def config() -> dict:
    with open(MKDOCS_YAML, encoding='utf-8') as fh:
        return yaml.safe_load(fh)


def nav_pages(config: dict) -> list[Path]:
    """Every .md the nav points at, as a path relative to the repo."""
    found: list[Path] = []

    def walk(node) -> None:
        if isinstance(node, str):
            found.append(Path(node))
        elif isinstance(node, dict):
            for value in node.values():
                walk(value)
        elif isinstance(node, list):
            for item in node:
                walk(item)

    walk(config['nav'])
    return found


def test_mkdocs_config_exists_and_names_the_theme():
    config = yaml.safe_load(MKDOCS_YAML.read_text(encoding='utf-8'))
    assert config['theme']['name'] == 'material', 'Phase 5 tooling is MkDocs + Material'
    assert config['docs_dir'] == 'docs'
    # strict is what turns a bad nav entry into a failed build.
    assert config.get('strict') is True, 'strict must be on so --strict fails on warnings'


def test_nav_points_at_pages_that_exist(config):
    missing = [
        str(p) for p in nav_pages(config)
        if not (DOCS / p).is_file()
    ]
    assert not missing, f'nav names pages that do not exist: {missing}'


def test_nav_covers_the_sections_the_docs_already_have(config):
    """A new section directory has to appear in the nav, or it is unreachable."""
    listed = {str(p).split('/')[0] for p in nav_pages(config)}
    for section in ('getting-started', 'guides', 'concepts', 'reference'):
        assert section in listed, f'{section}/ exists but is not in the nav'
    # The conformance report is a top-level page, not a section.
    assert any(str(p) == 'conformance.md' for p in map(str, nav_pages(config))), (
        'the conformance report should be reachable from the nav'
    )


def test_generated_reference_pages_are_not_individually_in_the_nav(config):
    """350+ generated pages belong under a section index, not as nav entries.

    Not a style preference: a nav with every property in it is unusable, and
    mkdocs would warn about the pages it excludes.
    """
    individually_listed = [p for p in map(str, nav_pages(config))
                          if p.startswith('reference/model/')
                          and p != 'reference/model/index.md']
    assert not individually_listed, (
        'generated model pages should not each be a nav entry; '
        f'found {len(individually_listed)}'
    )


def test_docs_dir_has_no_orphan_directories(config):
    """Every subdirectory of docs/ is either in the nav or an index page."""
    listed = {str(p) for p in map(str, nav_pages(config))}
    for path in sorted(DOCS.iterdir()):
        if not path.is_dir() or path.name in ('reference',):
            continue
        index = path / 'index.md'
        assert index.is_file(), f'docs/{path.name}/ has no index.md'
        assert str(index.relative_to(DOCS)) in listed, (
            f'docs/{path.name}/index.md is not in the nav'
        )


def test_site_url_is_not_a_placeholder():
    """site_url has to be the real host, or canonical links and the sitemap lie."""
    config = yaml.safe_load(MKDOCS_YAML.read_text(encoding='utf-8'))
    site_url = config.get('site_url', '')
    assert site_url.startswith('https://'), f'site_url must be https, got {site_url!r}'
    assert 'example' not in site_url, f'site_url still looks like a placeholder: {site_url}'


def test_cname_is_absent_until_the_dns_record_exists():
    """A wrong CNAME makes Pages refuse to serve rather than fall back.

    Kept as an explicit test so adding one is a deliberate act with the DNS
    record already in place, not an accident while tidying the config.
    """
    config = yaml.safe_load(MKDOCS_YAML.read_text(encoding='utf-8'))
    assert 'cname' not in config, (
        'a cname is configured; the DNS record must exist before Pages is '
        'pointed at a custom domain, and it is maintained outside the repo'
    )


def test_link_rewrite_hook_exists_and_keeps_github_links_intact():
    """The rewrite is what lets docs/ stay GitHub-native while the site works.

    It has to change the *depth* as well as the extension: MkDocs serves a page
    as a directory, so a link correct on GitHub is off by one level in the
    output. A hook that only stripped `.md` would produce a site full of links
    that resolve to nothing, and `--strict` would not catch it.
    """
    text = HOOKS.read_text(encoding='utf-8')
    assert 'def on_page_markdown' in text
    # Resolved against the file index, not by string surgery.
    assert 'get_file_from_path' in text, 'should look the target up in the file index'
    assert 'relpath' in text, 'should recompute the relative depth for the output layout'


def test_site_link_checker_exists():
    assert CHECKER.is_file(), 'scripts/check_site_links.py is the real link gate'
