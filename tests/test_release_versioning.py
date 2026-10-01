"""Version consistency across the release surface.

The three registries declare versions in three incompatible ways — jsr.io
reads jsr.json, packagist reads the git tag and ignores the manifest, and
RubyGems reads the gemspec — and the gem used to take its version from the
schema, which is the DFC ontology version. That left the Ruby gem pinned at
2.0.0 while TypeScript moved to 2.0.3, with nothing failing.

config/dfc-release.yaml is now the single source of truth and
scripts/tag_release.py fans it out. These tests keep that true.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

import pytest

REPO = Path(__file__).resolve().parent.parent
MANIFEST = REPO / 'config' / 'dfc-release.yaml'
JSR_JSON = REPO / 'typescript-connector' / 'jsr.json'
NPM_JSON = REPO / 'typescript-connector' / 'package.json'
GEMSPEC = REPO / 'ruby-gem' / 'dfc-linkml-connector.gemspec'
ROOT_COMPOSER = REPO / 'composer.json'

SEMVER = re.compile(r'^\d+\.\d+\.\d+$')


def sdk_version() -> str:
    import yaml
    return str(yaml.safe_load(MANIFEST.read_text(encoding='utf-8'))['sdk_version'])


def gemspec_version() -> str | None:
    m = re.search(r"spec\.version\s*=\s*'([^']*)'",
                  GEMSPEC.read_text(encoding='utf-8'))
    return m.group(1) if m else None


def test_sdk_version_is_semver():
    v = sdk_version()
    assert SEMVER.match(v), f'sdk_version {v!r} is not X.Y.Z'


def test_manifests_agree_with_the_release_manifest():
    v = sdk_version()
    jsr = json.loads(JSR_JSON.read_text(encoding='utf-8'))['version']
    npm = json.loads(NPM_JSON.read_text(encoding='utf-8'))['version']
    gem = gemspec_version()

    assert jsr == v, f'jsr.json is {jsr}, release manifest says {v}'
    assert npm == v, f'package.json is {npm}, release manifest says {v}'
    assert gem == v, f'gemspec is {gem}, release manifest says {v}'


def test_gemspec_version_is_not_the_ontology_version():
    """The gemspec used to take the schema's version, i.e. the DFC version."""
    import yaml
    schema_version = str(
        yaml.safe_load((REPO / 'src' / 'dfc_business_linkml_v2_0.yaml')
                       .read_text(encoding='utf-8')).get('version')
    )
    assert schema_version != '0.0.0'
    # They may coincide by luck on a major release, so only assert the
    # generator reads the manifest rather than the schema.
    src = (REPO / 'scripts' / 'generate_ruby_gem.py').read_text(encoding='utf-8')
    assert 'load_sdk_version' in src, (
        'the gemspec must take its version from config/dfc-release.yaml'
    )


def test_root_composer_has_no_version():
    """packagist derives the version from the git tag; a field is ignored."""
    data = json.loads(ROOT_COMPOSER.read_text(encoding='utf-8'))
    assert 'version' not in data, (
        'root composer.json must not pin a version: packagist reads the tag, '
        'and a stale field there is how releases silently go missing'
    )


def test_tag_shapes_match_the_registry_requirements():
    from scripts.tag_release import tag_names
    v = sdk_version()
    tags = tag_names(v)
    assert tags['jsr'] == f'@siol-data/linkml-connector@{v}'
    # packagist accepts X.Y.Z or vX.Y.Z; vX.Y.Z also works for RubyGems.
    assert tags['packagist_and_rubygems'] == f'v{v}'
    assert SEMVER.match(tags['packagist_and_rubygems'].lstrip('v'))


def test_publish_workflow_triggers_on_the_jsr_tag_shape():
    """The workflow matches a glob, so compare shapes rather than one tag."""
    from scripts.tag_release import JSR_SCOPE, tag_names
    workflow = (REPO / '.github' / 'workflows' / 'publish-jsr.yml').read_text(encoding='utf-8')
    expected_glob = f"'@{JSR_SCOPE}/linkml-connector@*'"
    assert expected_glob in workflow, (
        f'publish-jsr.yml must trigger on {expected_glob}; the tag_release.py '
        f'scope and the workflow pattern have drifted'
    )
    # And the concrete tag it produces has to fall inside that glob.
    concrete = tag_names(sdk_version())['jsr']
    assert fnmatch(concrete, expected_glob.strip("'")), (
        f'{concrete} would not match {expected_glob}'
    )


def fnmatch(name: str, pattern: str) -> bool:
    from fnmatch import fnmatch as _fnmatch
    return _fnmatch(name, pattern)


def test_bump_maths():
    from scripts.tag_release import bump
    assert bump('2.0.3', 'patch') == '2.0.4'
    assert bump('2.0.3', 'minor') == '2.1.0'
    assert bump('2.0.3', 'major') == '3.0.0'
    assert bump('2.9.9', 'patch') == '2.9.10'
    with pytest.raises(SystemExit):
        bump('not-a-version', 'patch')


def test_show_reports_a_consistent_state():
    """`--show` exits nonzero when something has drifted, so it is a check."""
    r = subprocess.run(
        [sys.executable, 'scripts/tag_release.py', '--show'],
        cwd=REPO, capture_output=True, text=True,
    )
    assert r.returncode == 0, (
        f'release state is inconsistent, --show exited {r.returncode}:\n'
        f'{r.stdout}{r.stderr}'
    )
    assert 'OUT OF SYNC' not in r.stdout, r.stdout


def test_dry_run_changes_nothing():
    before = subprocess.run(['git', 'status', '--porcelain'],
                            cwd=REPO, capture_output=True, text=True).stdout
    subprocess.run(
        [sys.executable, 'scripts/tag_release.py', '--bump', 'minor'],
        cwd=REPO, capture_output=True, text=True, check=True,
    )
    after = subprocess.run(['git', 'status', '--porcelain'],
                           cwd=REPO, capture_output=True, text=True).stdout
    assert before == after, 'a dry run modified the working tree'


def test_gemspec_is_generated_from_sdk_version():
    """Regenerating must not silently move the gem off the release version."""
    from scripts.generate_ruby_gem import load_sdk_version
    assert load_sdk_version('9.9.9') == sdk_version()
