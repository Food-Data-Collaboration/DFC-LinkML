"""The two packaging deny-lists have to stay in step with the tree.

Both lists trim a PHP consumer's install, and both fail open in the same way:
each is a deny-list, so a directory added later is *included* until someone
adds it. An unexpected extra file cannot break autoloading, so that is the
right way round -- but the two lists can still drift from each other and from
the actual tree, which is what this catches.

`archive.exclude` governs a source install; `.gitattributes` governs the dist
zipball packagist serves, which is the common case. A path present in one and
missing from the other is a real inconsistency: someone gets the full repo when
they meant not to, or vice versa.
"""
from pathlib import Path

import pytest
import yaml

REPO = Path(__file__).resolve().parent.parent
ROOT_MANIFEST = REPO / 'composer.json'
GITATTRIBUTES = REPO / '.gitattributes'

# Top-level directories that are not part of the PHP package. The PHP connector
# itself is deliberately absent: it is the package.
NOT_THE_PACKAGE = (
    'config', 'docs', 'docs-site', 'scripts', 'shacl', 'src', 'tests',
    'ruby-gem', 'typescript-connector',
)


def _archive_excludes() -> set[str]:
    data = yaml.safe_load(ROOT_MANIFEST.read_text(encoding='utf-8'))
    return {p.strip('/') for p in (data.get('archive') or {}).get('exclude') or []}


def _export_ignores() -> set[str]:
    ignored: set[str] = set()
    for line in GITATTRIBUTES.read_text(encoding='utf-8').splitlines():
        line = line.split('#', 1)[0].strip()
        if not line or 'export-ignore' not in line:
            continue
        path = line.split()[0].strip('/')
        if path and path != '*':
            ignored.add(path)
    return ignored


@pytest.fixture(scope='module')
def top_level() -> set[str]:
    return {
        p.name for p in REPO.iterdir()
        if p.is_dir() and not p.name.startswith('.')
        and p.name not in ('node_modules', 'site')
        and '__pycache__' not in p.name
    }


def test_both_lists_match_the_actual_tree(top_level):
    expected = set(NOT_THE_PACKAGE) & top_level
    archive = _archive_excludes()
    attributes = _export_ignores()

    missing_archive = sorted(expected - archive)
    assert not missing_archive, (
        f'in composer.json archive.exclude but present in the tree: {missing_archive}'
    )
    missing_attributes = sorted(expected - attributes)
    assert not missing_attributes, (
        f'in .gitattributes export-ignore is missing: {missing_attributes}'
    )


def test_the_two_lists_agree_on_the_top_level_directories():
    """The two lists are not identical, and are not meant to be.

    archive.exclude is a top-level deny-list aimed at source installs;
    .gitattributes additionally drops development files inside the connector
    itself (its own phpunit config, its test suite, its dev manifest) and the
    repository's own dotfiles. Those extra entries are deliberate: the dist
    zipball is what almost every consumer gets, so it is trimmed harder.

    What must not happen is one list covering a top-level directory the other
    does not -- that is a real inconsistency in either direction, since a
    source install and a dist install then contain different trees.
    """
    archive = _archive_excludes()
    attributes = _export_ignores()

    top_dirs = {
        p.name for p in REPO.iterdir()
        if p.is_dir() and not p.name.startswith('.')
        and p.name not in ('node_modules', 'site')
        and '__pycache__' not in p.name
    }
    only_archive = sorted((archive & top_dirs) - attributes)
    only_attributes = sorted((attributes & top_dirs) - archive)
    assert not only_archive, (
        f'excluded from a source install but shipped in the dist: {only_archive}'
    )
    assert not only_attributes, (
        f'shipped in a source install but excluded from the dist: {only_attributes}'
    )


def test_gitattributes_trims_the_connectors_own_development_files():
    """The dist zipball should not carry the connector's test suite or config.

    Not required -- an extra file cannot break autoloading -- but it is what
    makes the installed package look like a library rather than a checkout.
    """
    attributes = _export_ignores()
    for path in ('php-connector/tests', 'php-connector/phpunit.xml',
                 'php-connector/composer.json'):
        assert path in attributes, f'{path} should not ship in the dist'


def test_php_connector_is_never_excluded(top_level):
    """The one thing that must always ship.

    An over-eager exclude produces a package with no classes in it, which
    installs cleanly and then fatals on first use.
    """
    for name, paths in (('archive.exclude', _archive_excludes()),
                        ('export-ignore', _export_ignores())):
        assert 'php-connector' not in paths, f'{name} would ship a package with no classes'
