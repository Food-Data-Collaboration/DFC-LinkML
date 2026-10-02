"""Guards docs/concepts/ and the cross-links between docs sections.

Phase 3 is explanation, so it is prose rather than generated output. The
things that can still rot silently are:

- a link to a page that does not exist
- a claim that the connectors do something they do not (these pages assert
  specific behaviour, and the connectors change)
- an index that does not list the pages next to it
"""
import re
from pathlib import Path

import pytest

REPO = Path(__file__).resolve().parent.parent
DOCS = REPO / 'docs'
CONCEPTS = DOCS / 'concepts'
REFERENCE = DOCS / 'reference' / 'model'

REQUIRED_PAGES = [
    'index.md',
    'identifiers.md',
    'relationships.md',
    'context-and-versioning.md',
    'vocabularies.md',
    'validation.md',
]

LINK = re.compile(r'\]\((?!https?:|mailto:|#)([^)#]+)')


def read(path: Path) -> str:
    return path.read_text(encoding='utf-8')


def test_every_concept_page_exists():
    missing = [p for p in REQUIRED_PAGES if not (CONCEPTS / p).is_file()]
    assert not missing, f'missing concept pages: {missing}'


def test_no_unexpected_pages():
    """A page not in the index is a page nobody will find."""
    actual = {p.name for p in CONCEPTS.glob('*.md')}
    unexpected = actual - set(REQUIRED_PAGES)
    assert not unexpected, (
        f'concept pages not listed in tests and index: {sorted(unexpected)}'
    )


def test_index_lists_every_page():
    index = read(CONCEPTS / 'index.md')
    for name in REQUIRED_PAGES:
        if name == 'index.md':
            continue
        assert f']({name})' in index, f'index.md does not link {name}'


def test_all_links_in_docs_resolve():
    broken = []
    for page in sorted(DOCS.rglob('*.md')):
        for target in LINK.findall(read(page)):
            if not (page.parent / target).resolve().exists():
                broken.append(f'{page.relative_to(DOCS)} -> {target}')
    assert not broken, 'broken links:\n' + '\n'.join(broken[:20])


def _anchors(page: Path) -> set[str]:
    """GitHub-style heading anchors for a markdown file."""
    out = set()
    for line in page.read_text(encoding='utf-8').splitlines():
        m = re.match(r'^#{1,6}\s+(.*)', line)
        if not m:
            continue
        text = m.group(1).strip().lower()
        text = re.sub(r'`|\*|_', '', text)
        text = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', text)
        slug = re.sub(r'[^a-z0-9 \-]', '', text).strip().replace(' ', '-')
        out.add(slug)
    return out


def test_all_link_anchors_exist():
    """Renaming a heading must not silently break inbound links.

    A section rename left `build-a-catalog.md` pointing at a heading that no
    longer existed, and only a reader would have noticed.
    """
    broken = []
    for page in sorted(DOCS.rglob('*.md')):
        for target in LINK.findall(read(page)):
            if '#' not in target:
                continue
            path_part, _, anchor = target.partition('#')
            if not path_part:
                dest = page
            else:
                dest = (page.parent / path_part).resolve()
                if not dest.exists():
                    continue  # reported by test_all_links_in_docs_resolve
            if anchor and anchor not in _anchors(dest):
                broken.append(f'{page.relative_to(DOCS)} -> {target}')
    assert not broken, 'anchors not found:\n' + '\n'.join(broken[:20])


def test_concepts_link_into_the_generated_reference():
    """Phase 3 exists to explain the reference, so it must link into it."""
    linked = False
    for page in CONCEPTS.glob('*.md'):
        if 'reference/model' in read(page):
            linked = True
            break
    assert linked, 'no concept page links into the generated model reference'


def test_generated_reference_links_into_concepts():
    """And the reference points forward to the explanation."""
    found = False
    for page in REFERENCE.rglob('*.md'):
        if 'concepts/' in read(page):
            found = True
            break
    assert found, 'the generated reference does not link into docs/concepts/'


def test_validation_page_states_all_four_levels():
    text = read(CONCEPTS / 'validation.md')
    for level in ('JSON Schema', 'LinkML model', 'SHACL', 'Application'):
        assert level in text, f'validation.md omits the {level} level'


def test_validation_page_is_honest_about_gaps():
    """Phase 3 decided to document all four levels and mark the gaps.

    If this starts claiming the missing levels exist, the page has drifted
    from the code.
    """
    text = read(CONCEPTS / 'validation.md').lower()
    assert 'not implemented' in text
    # The claim that the connectors drop unknown terms is load-bearing and
    # was verified against all three connectors; keep it.
    assert 'unknown' in text and 'drop' in text


def test_shape_rule_has_exactly_one_home():
    """Phase 3 acceptance: each why-question has one home.

    relationships.md owns the collapse-of-one rule. index.md may summarise it
    in a line, but must not become a second explanation, and must link to the
    page that owns it.
    """
    explained = []
    for page in CONCEPTS.glob('*.md'):
        if page.name == 'index.md':
            continue
        if 'one-element array' in read(page) or 'one element' in read(page).lower():
            explained.append(page.name)
    assert explained == ['relationships.md'], (
        f'shape rule also explained in: {explained}'
    )
    # The index must point at it rather than restate it.
    index = read(CONCEPTS / 'index.md')
    assert '](relationships.md)' in index, 'index should link to relationships.md'


def test_vocabularies_page_points_at_bundled_data():
    text = read(CONCEPTS / 'vocabularies.md')
    assert 'ruby-gem/vocabularies' in text, (
        'the canonical bundled data path should be named'
    )


def test_identifiers_page_lists_the_accepted_forms():
    text = read(CONCEPTS / 'identifiers.md')
    for form in ('https://', 'urn:', '_:'):
        assert form in text, f'identifiers.md does not mention the {form} form'
    assert 'No validation is performed' in text, (
        'the no-validation stance should be explicit'
    )
