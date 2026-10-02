"""Guards the publish workflows.

The packagist notification step sat dormant for its whole life because it
read `vars.PACKAGIST_USERNAME` while the credential is stored as a *secret*.
Nothing failed: the guard clause exited 0 and said so in a line nobody read.
It also passed the credentials as HTTP basic auth, which packagist's
update-package endpoint does not accept -- it wants them in the query string,
and rejects basic auth with "Missing or invalid username/apiToken".

Both are the kind of bug that only shows up on the one push that matters, so
the wiring is asserted here instead.

These tests do not call packagist. They check that the workflow reads the
secrets that exist, uses the documented credential form, and cannot fail the
jsr publish.
"""
import re
import sys
from pathlib import Path

import pytest
import yaml

REPO = Path(__file__).resolve().parent.parent
JSR_WORKFLOW = REPO / '.github' / 'workflows' / 'publish-jsr.yml'


def workflow() -> dict:
    return yaml.safe_load(JSR_WORKFLOW.read_text(encoding='utf-8'))


def packagist_step() -> dict:
    for step in workflow()['jobs']['publish']['steps']:
        if step.get('name') == 'Notify packagist':
            return step
    raise AssertionError('the Notify packagist step is missing')


def test_workflow_parses():
    assert isinstance(workflow(), dict)


def test_jsr_tag_trigger_is_unchanged():
    tags = workflow()[True]['push']['tags']
    assert tags == ['@siol-data/linkml-connector@*'], (
        f'jsr publish trigger drifted: {tags}'
    )


def test_packagist_step_exists():
    assert packagist_step()['name'] == 'Notify packagist'


def test_packagist_step_reads_secrets_not_variables():
    """Regression: it read vars.PACKAGIST_USERNAME, which does not exist."""
    env = packagist_step()['env']
    assert 'PACKAGIST_USERNAME' in env
    assert 'PACKAGIST_API_TOKEN' in env
    for key, value in env.items():
        assert value.strip() == f'${{{{ secrets.{key} }}}}', (
            f'{key} must come from secrets, got {value!r}'
        )
    assert 'vars.' not in str(env), (
        'a repository variable was used where the credential is a secret'
    )


def test_packagist_credentials_go_in_the_query_string():
    """packagist's update-package endpoint rejects HTTP basic auth."""
    run = packagist_step()['run']
    assert 'api/update-package' in run
    assert 'username=' in run and 'apiToken=' in run, (
        'credentials must be query parameters, not basic auth'
    )
    assert ' -u ' not in run and '--user' not in run, (
        'basic auth is not supported by this endpoint'
    )


def test_packagist_step_cannot_fail_the_jsr_publish():
    """The jsr publish is the primary action; packagist is a backstop."""
    step = packagist_step()
    assert step.get('continue-on-error') is True, (
        'a packagist problem must not fail the job'
    )
    # And the script must not exit non-zero on an HTTP error.
    assert '--fail' not in step['run'], (
        'curl --fail would exit non-zero and defeat continue-on-error'
    )
    assert 'exit 1' not in step['run']


def test_packagist_step_surfaces_failures_as_warnings():
    run = packagist_step()['run']
    assert '::warning::' in run, (
        'a failed notification should be visible in the Actions summary, '
        'not silent'
    )


def test_packagist_step_handles_missing_credentials():
    run = packagist_step()['run']
    assert '-z "$PACKAGIST_USERNAME"' in run
    assert '-z "$PACKAGIST_API_TOKEN"' in run
    assert 'exit 0' in run


def test_repo_url_is_not_hardcoded():
    """The workflow should track the repo it runs in, not a copy of its name."""
    assert 'GITHUB_REPOSITORY' in packagist_step()['run']


def test_known_secret_names_match_the_repository():
    """Cross-check the names against the secrets the repo actually has.

    Skipped only when gh is unavailable.
    """
    import subprocess
    r = subprocess.run(
        ['gh', 'secret', 'list'], cwd=REPO, capture_output=True, text=True,
    )
    if r.returncode != 0:
        pytest.skip('gh unavailable or unauthenticated')

    # `gh secret list` prints "NAME<TAB>UPDATED" with no header row. Take the
    # first field of every line and drop an optional header rather than
    # assuming one, or a leading secret gets silently skipped.
    names = set()
    for line in r.stdout.splitlines():
        parts = line.split()
        if not parts:
            continue
        if parts[0].upper() == 'NAME':
            continue
        names.add(parts[0])
    if not names:
        pytest.skip('could not parse `gh secret list` output')

    for key in packagist_step()['env']:
        assert key in names, (
            f'{key} is read by the workflow but is not a repository secret; '
            f'the step will silently do nothing. Present: {sorted(names)}'
        )


def test_no_secrets_committed():
    """A rotated token that leaked into a file would be a live credential."""
    suspicious = []
    for path in REPO.rglob('*'):
        if not path.is_file() or '.git/' in str(path):
            continue
        if path.suffix not in {'.yml', '.yaml', '.sh', '.py', '.md', '.json'}:
            continue
        if 'node_modules' in str(path) or '/vendor/' in str(path):
            continue
        try:
            text = path.read_text(encoding='utf-8')
        except (UnicodeDecodeError, OSError):
            continue
        # A hex string long enough to be a packagist/githack API token.
        for m in re.finditer(r'\b[0-9a-f]{32,}\b', text):
            # The pinned original gem version and sha256 checksums are
            # legitimate hex; only flag things in a secret-ish context.
            line = text[:m.start()].count('\n')
            ctx = text.splitlines()[line]
            if re.search(r'token|secret|api[_-]?key|password', ctx, re.I):
                suspicious.append(f'{path.relative_to(REPO)}:{line + 1}')
    assert not suspicious, 'possible committed secret: ' + ', '.join(suspicious)
