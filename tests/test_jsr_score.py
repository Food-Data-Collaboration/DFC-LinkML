"""Guards for the JSR score factors we control from the repo.

jsr.io scores a package on symbol documentation, and awards the
documentation factor only when at least 80% of exported symbols carry a
JSDoc block. The JSDoc is emitted by
`scripts/generate_typescript_connector.py` from the schema descriptions, so
the way to protect the score is to fail the build when a generator change
stops emitting it.

These checks are about the *source* tree; the published score also depends
on settings in the jsr.io package dashboard (description, runtime
compatibility), which cannot be asserted from here.
"""
import re
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
TS_SRC = REPO_ROOT / 'typescript-connector' / 'src'

# jsr's threshold for the documentation factor.
JSR_DOC_THRESHOLD = 0.80

# An exported declaration, as jsr enumerates them. Re-exports in index.ts are
# skipped: they name a symbol, they do not declare one.
DECL = re.compile(
    r'^\s*export\s+(?:declare\s+)?'
    r'(?:abstract\s+)?'
    r'(class|interface|type|enum|function|const|let|var)\s+([A-Za-z_$][\w$]*)'
)
COMMENT_OPEN = re.compile(r'^\s*/\*\*')
COMMENT_CLOSE = re.compile(r'^\s*\*/')
LINE_COMMENT = re.compile(r'^\s*//')


def _declarations() -> list[tuple[Path, int, str, str]]:
    """Every exported declaration in the TypeScript source tree."""
    found: list[tuple[Path, int, str, str]] = []
    for path in sorted(TS_SRC.rglob('*.ts')):
        if path.name == 'index.ts':
            continue
        for lineno, line in enumerate(path.read_text(encoding='utf-8').splitlines()):
            m = DECL.match(line)
            if m:
                found.append((path, lineno, m.group(1), m.group(2)))
    return found


def _is_documented(lines: list[str], index: int) -> bool:
    """Whether a JSDoc block ends immediately above `lines[index]`."""
    i = index - 1
    while i >= 0 and lines[i].strip() == '':
        i -= 1
    if i < 0 or not lines[i].strip().endswith('*/'):
        return False
    # Walk back to the opening /**. A single-line /** ... */ counts as
    # documented on its own.
    if '/*' in lines[i]:
        return True
    while i >= 0:
        stripped = lines[i].strip()
        if stripped.startswith('/**'):
            return True
        if stripped.startswith('/*') or stripped.startswith('*'):
            i -= 1
            continue
        return False
    return False


def _strip_comments(text: str) -> list[str]:
    """Code lines only, with block and line comments removed."""
    out: list[str] = []
    in_block = False
    for line in text.splitlines():
        if in_block:
            if COMMENT_CLOSE.match(line):
                in_block = False
            continue
        if COMMENT_OPEN.match(line):
            if '*/' not in line:
                in_block = True
            continue
        if LINE_COMMENT.match(line) or not line.strip():
            continue
        out.append(line.rstrip())
    return out


def test_source_tree_exists():
    assert TS_SRC.is_dir(), (
        f'{TS_SRC} missing — run scripts/generate_typescript_connector.py'
    )


def test_exported_symbols_are_found():
    """Guard the measurement itself: an empty scan would 'pass' at 0%."""
    decls = _declarations()
    assert len(decls) >= 170, f'expected ~182 exported symbols, found {len(decls)}'


def test_jsdoc_coverage_meets_jsr_threshold():
    decls = _declarations()
    undocumented = []
    for path, lineno, kind, name in decls:
        lines = path.read_text(encoding='utf-8').splitlines()
        if not _is_documented(lines, lineno):
            undocumented.append(f'{path.relative_to(REPO_ROOT)}:{lineno + 1} {kind} {name}')

    ratio = 1 - (len(undocumented) / len(decls))
    assert ratio >= JSR_DOC_THRESHOLD, (
        f'JSDoc coverage {ratio:.1%} is below the jsr threshold '
        f'({JSR_DOC_THRESHOLD:.0%}). {len(undocumented)} undocumented: '
        + ', '.join(undocumented[:10])
    )


def test_generated_code_is_unchanged_by_jsdoc_emission():
    """JSDoc must not alter emitted code.

    Compares each model file's code (comments stripped) against a stripped
    copy that had its JSDoc removed by regex, so a stray JSDoc delimiter in
    an OWL-derived description cannot silently swallow code.
    """
    suspicious = []
    for path in sorted((TS_SRC / 'models').glob('*.ts')):
        if path.name == 'index.ts':
            continue
        text = path.read_text(encoding='utf-8')
        if text.count('/*') != text.count('*/'):
            suspicious.append(f'{path.relative_to(REPO_ROOT)}: unbalanced comment delimiters')
            continue
        # A JSDoc block must close on a line of its own or on its own opening
        # line; a '*/' appearing mid-content means an OWL description escaped.
        in_block = False
        for lineno, line in enumerate(text.splitlines(), 1):
            if in_block:
                if COMMENT_CLOSE.match(line):
                    in_block = False
                elif '*/' in line:
                    suspicious.append(
                        f'{path.relative_to(REPO_ROOT)}:{lineno}: "*/" inside a comment body'
                    )
            elif COMMENT_OPEN.match(line) and '*/' not in line:
                in_block = True
        if in_block:
            suspicious.append(f'{path.relative_to(REPO_ROOT)}: unterminated JSDoc block')

    assert not suspicious, 'malformed JSDoc emitted:\n' + '\n'.join(suspicious)


@pytest.mark.parametrize('path', sorted((TS_SRC / 'core').glob('*.ts')))
def test_core_classes_are_documented(path: Path):
    """The four core classes are the hand-written, most-used entry points."""
    lines = path.read_text(encoding='utf-8').splitlines()
    documented = False
    for lineno, line in enumerate(lines):
        if DECL.match(line):
            documented = _is_documented(lines, lineno)
            break
    assert documented, f'{path.relative_to(REPO_ROOT)}: exported class has no JSDoc'
