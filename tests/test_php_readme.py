"""Executes the PHP snippets in php-connector/README.md.

The README is the package's packagist landing page, so a wrong property name
or a broken call reaches every PHP consumer. The snippets are parsed out of
the markdown and run against the real connector, which is the only way to
catch a property that was renamed by a schema change.
"""
import re
import subprocess
import sys
from pathlib import Path

import pytest

REPO = Path(__file__).resolve().parent.parent
README = REPO / 'php-connector' / 'README.md'
PHP_CONNECTOR = REPO / 'php-connector'

# Blocks that are deliberately partial and cannot run standalone.
SKIP_MARKERS = (
    'vendor/autoload.php',   # handled by the harness preamble
)

FENCE = re.compile(r'```php\n(.*?)\n```', re.S)


def _php_snippets() -> list[str]:
    """Every PHP block, in document order.

    The README builds one object graph across its blocks (the import block
    reuses `$connector` and reads back what the quick start exported), so the
    blocks are run as one script. Only the first carries `<?php` and the
    autoloader; the rest are continuations.
    """
    return FENCE.findall(README.read_text(encoding='utf-8'))


def test_readme_exists():
    assert README.is_file(), f'{README} missing; packagist shows it as the package README'


def test_readme_documents_the_publish_identity():
    text = README.read_text(encoding='utf-8')
    assert 'composer require siol-data/dfc-connector' in text, (
        'README must show the published package name'
    )


def test_readme_states_the_licence_split():
    text = README.read_text(encoding='utf-8')
    assert 'MIT' in text
    assert 'AGPL' in text, (
        'README should note that the generating codebase is licensed '
        'separately, or PHP consumers may assume the AGPLv3 root LICENSE '
        'applies to this package'
    )


def test_readme_has_runnable_snippets():
    blocks = _php_snippets()
    assert blocks, 'no PHP snippets found in the README'
    assert blocks[0].lstrip().startswith('<?php'), (
        'the first PHP block must open with <?php so the README is a complete '
        'copy-pasteable example'
    )
    assert "require 'vendor/autoload.php'" in blocks[0], (
        'the opening snippet must show the autoloader'
    )


# create<Factory>(..., [ 'key' => ..., ... ]) — the property names to check.
FACTORY_CALL = re.compile(
    r"->create(?P<cls>\w+)\(\s*'[^']*'\s*,\s*\[(?P<props>.*?)\]",
    re.S,
)
ARRAY_KEY = re.compile(r"'([A-Za-z_]\w*)'\s*=>")


def _array_key_check(lines: list[str], index: int) -> str:
    """PHP that fails loudly on a property name the generated class lacks.

    PHP ignores unknown keys in a params array, so executing a snippet with a
    mistyped property would otherwise pass and ship a broken README.
    """
    body = '\n'.join(lines)
    checks: list[str] = []
    for m in FACTORY_CALL.finditer(body):
        cls, props = m.group('cls'), m.group('props')
        keys = ARRAY_KEY.findall(props)
        if not keys:
            continue
        key_list = ', '.join(f"'{k}'" for k in keys)
        checks.append(
            f"$__r = new \\ReflectionClass(\\DataFoodConsortium\\Connector\\{cls}::class);\n"
            f"foreach ([{key_list}] as $__k) {{\n"
            f"  $__has = false;\n"
            f"  for ($__c = $__r; $__c !== false; $__c = $__c->getParentClass()) {{\n"
            f"    if ($__c->hasProperty($__k) || $__c->hasMethod('set' . ucfirst($__k))) {{ $__has = true; break; }}\n"
            f"  }}\n"
            f"  if (!$__has) {{ fwrite(STDERR, 'README snippet {index}: {cls} has no property "
            f"' . $__k . \"\\n\"); exit(1); }}\n"
            f"}}"
        )
    return '\n'.join(checks)


def test_readme_snippets_execute(tmp_path):
    """Run the opening snippet; property names must match the generated classes.

    The README builds one object graph across its snippets (the import block
    reuses `$connector` and reads back what the quick start exported), so they
    run as a single script rather than independently.
    """
    script = tmp_path / 'readme_snippets.php'
    preamble = (
        "<?php\n"
        "require getcwd() . '/php-connector/vendor/autoload.php';\n"
        "use DataFoodConsortium\\Connector\\Connector;\n"
        "ob_start();\n"
    )
    bodies = []
    for i, block in enumerate(_php_snippets()):
        # Drop each block's own <?php / autoload / use lines.
        lines = [
            l for l in block.splitlines()
            if not re.match(r'\s*(<\?php|require .*autoload|use DataFoodConsortium)', l)
        ]
        # Unknown array keys are silently ignored by PHP, so a mistyped
        # property name would not raise and the snippet would still "pass".
        # Validate the keys against the generated classes instead.
        check = _array_key_check(lines, i)
        if check:
            bodies.append(check)
        bodies.append('\n'.join(lines))

    # The first snippet ends with `echo $connector->export(...)`; capture it
    # into pytest's tmp dir so the import block has a file to read, rather
    # than writing into the repository.
    export_file = tmp_path / 'export.jsonld'
    bodies[0] = bodies[0].replace(
        'echo $connector->export($org, $carrots);',
        f"file_put_contents('{export_file}', $connector->export($org, $carrots));",
    )
    bodies = [
        b.replace('file_get_contents(\'org.jsonld\')', f"file_get_contents('{export_file}')")
        for b in bodies
    ]

    script.write_text(
        preamble + '\n'.join(bodies) + '\nob_end_clean();\necho "snippets-ok\\n";\n',
        encoding='utf-8',
    )
    r = subprocess.run(
        ['php', str(script)], cwd=REPO, capture_output=True, text=True,
    )
    assert r.returncode == 0, f'README snippets failed:\n{r.stdout}{r.stderr}'
    assert 'snippets-ok' in r.stdout, f'snippets produced no marker:\n{r.stdout}'


def test_readme_mentions_offline_behaviour():
    text = README.read_text(encoding='utf-8').lower()
    assert 'offline' in text, (
        'the bundled vocabularies are a real feature worth documenting'
    )
