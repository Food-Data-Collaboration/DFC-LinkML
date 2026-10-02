#!/usr/bin/env python3
"""Cut an SDK release: one version, fanned out to every manifest and tag.

The three registries in this repo do not agree on how a version is declared,
which made hand-cutting releases error-prone:

  jsr.io      reads `version` from typescript-connector/jsr.json, and
              publishes when a tag matching @siol-data/linkml-connector@*
              is pushed
  packagist   ignores the manifest entirely and derives the version from the
              git tag, which it accepts as X.Y.Z or vX.Y.Z
  RubyGems    same tag convention, plus `version` in the gemspec
  npm         reads package.json (inert since publishing was retired; kept in
              sync so the identity does not drift)

So a release needs a version in two static files, a version in one generated
file, and two tag shapes. This script owns all of it:

  config/dfc-release.yaml  sdk_version  <- the single source of truth
  jsr.json / package.json  static, written here
  *.gemspec               generated; `make generate` reads sdk_version
  tags                    @siol-data/linkml-connector@X.Y.Z  and  vX.Y.Z

Usage:
  scripts/tag_release.py --show              # what the current release looks like
  scripts/tag_release.py --bump patch        # plan the next release, change nothing
  scripts/tag_release.py --bump patch --apply   # bump + sync + regenerate
  scripts/tag_release.py --bump patch --tag     # ... and create/push the tags

Nothing is pushed without --tag, and --apply is required before --tag, so a
mistyped --bump cannot publish. Tags are immutable on both registries, so the
script refuses to move one that already exists.
"""
from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
MANIFEST = REPO / 'config' / 'dfc-release.yaml'
JSR_JSON = REPO / 'typescript-connector' / 'jsr.json'
NPM_JSON = REPO / 'typescript-connector' / 'package.json'
GEMSPEC = REPO / 'ruby-gem' / 'dfc-linkml-connector.gemspec'
ROOT_COMPOSER = REPO / 'composer.json'
JSR_SCOPE = 'siol-data'

SEMVER = re.compile(r'^(\d+)\.(\d+)\.(\d+)$')


def run(cmd: list[str], *, check: bool = True) -> subprocess.CompletedProcess:
    print(f"+ {' '.join(cmd)}", flush=True)
    r = subprocess.run(cmd, cwd=REPO, check=check, text=True,
                       capture_output=True)
    # Echo output ourselves: the generator writes most of its progress to
    # stderr, and capture_output would otherwise swallow it.
    if r.stdout:
        print(r.stdout, end='')
    if r.stderr:
        print(r.stderr, end='', file=sys.stderr)
    return r


def load_manifest() -> dict:
    import yaml
    return yaml.safe_load(MANIFEST.read_text(encoding='utf-8'))


def bump(version: str, part: str) -> str:
    m = SEMVER.match(version)
    if not m:
        raise SystemExit(
            f'sdk_version {version!r} is not X.Y.Z; fix {MANIFEST.name} by hand'
        )
    major, minor, patch = (int(g) for g in m.groups())
    if part == 'major':
        return f'{major + 1}.0.0'
    if part == 'minor':
        return f'{major}.{minor + 1}.0'
    return f'{major}.{minor}.{patch + 1}'


def tag_names(version: str) -> dict[str, str]:
    return {
        'jsr': f'@{JSR_SCOPE}/linkml-connector@{version}',
        'packagist_and_rubygems': f'v{version}',
    }


def set_json_version(path: Path, version: str) -> bool:
    """Set the top-level "version" key, preserving the rest of the formatting."""
    text = path.read_text(encoding='utf-8')
    data = json.loads(text)
    if data.get('version') == version:
        return False
    data['version'] = version
    # Re-serialise with the same shape the generator produces: 2-space indent,
    # trailing newline, keys in their existing order.
    path.write_text(json.dumps(data, indent=2) + '\n', encoding='utf-8')
    return True


def set_gemspec_version(version: str) -> bool:
    text = GEMSPEC.read_text(encoding='utf-8')
    new, n = re.subn(
        r"(spec\.version\s*=\s*')[^']*(')",
        rf"\g<1>{version}\g<2>",
        text,
    )
    if n != 1:
        raise SystemExit(f'could not find exactly one spec.version in {GEMSPEC}')
    if new == text:
        return False
    GEMSPEC.write_text(new, encoding='utf-8')
    return True


def manifest_versions() -> dict[str, str | None]:
    """The version each manifest currently declares."""
    gemspec = GEMSPEC.read_text(encoding='utf-8')
    m = re.search(r"spec\.version\s*=\s*'([^']*)'", gemspec)
    root = json.loads(ROOT_COMPOSER.read_text(encoding='utf-8'))
    return {
        'config/dfc-release.yaml sdk_version': load_manifest().get('sdk_version'),
        'typescript-connector/jsr.json': json.loads(JSR_JSON.read_text()).get('version'),
        'typescript-connector/package.json': json.loads(NPM_JSON.read_text()).get('version'),
        'ruby-gem/*.gemspec': m.group(1) if m else None,
        # None is correct here: packagist derives the version from the tag.
        'composer.json (packagist)': root.get('version'),
    }


def _untagged(version: str) -> bool:
    """True when neither registry tag exists for `version`.

    Tags are immutable on both registries, so a version whose tags are absent
    was never published -- the manifests can be left there by an interrupted
    release without the number being spent.
    """
    return all(
        subprocess.run(
            ['git', 'rev-parse', '-q', '--verify', f'refs/tags/{tag}'],
            cwd=REPO, capture_output=True,
        ).returncode != 0
        for tag in tag_names(version).values()
    )


def report(version: str) -> bool:
    """Print the manifest versions and tags. Returns True if all agree."""
    print(f'\nsdk_version: {version}')
    print('\nmanifests:')
    current = manifest_versions()
    consistent = True
    for name, found in current.items():
        expected = None if name.startswith('composer.json') else version
        if expected is None:
            note = 'no version (packagist reads the git tag)'
            ok = found is None
        else:
            note = 'in sync' if found == version else f'OUT OF SYNC (is {found})'
            ok = found == version
        consistent &= ok
        print(f'  {"OK " if ok else "!! "}{name:<42} {note}')

    print('\ntags for this release:')
    for registry, tag in tag_names(version).items():
        exists = subprocess.run(
            ['git', 'rev-parse', '-q', '--verify', f'refs/tags/{tag}'],
            cwd=REPO, capture_output=True,
        ).returncode == 0
        state = 'already exists' if exists else 'to be created'
        print(f'  {"OK " if not exists else "!! "}{registry:<22} {tag:<40} {state}')
        consistent &= not exists
    return consistent


def regenerate() -> None:
    run([sys.executable, 'scripts/generate_all.py'])


def main(argv: list[str] | None = None) -> None:
    p = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    p.add_argument('--show', action='store_true',
                   help='print the current version, manifest state, and tags')
    p.add_argument('--bump', choices=('major', 'minor', 'patch'),
                   help='plan the next version (default: patch if neither given)')
    p.add_argument('--apply', action='store_true',
                   help='write the new version to the manifest and static manifests')
    p.add_argument('--tag', action='store_true',
                   help='create and push the registry tags (requires --apply)')
    args = p.parse_args(argv)

    manifest = load_manifest()
    current = str(manifest.get('sdk_version') or '')
    if not current:
        raise SystemExit(f'no sdk_version in {MANIFEST}')

    if args.show or not (args.bump or args.apply or args.tag):
        version = current
    elif args.bump:
        version = bump(current, args.bump)
    elif args.apply and not args.tag:
        # Preparing a release without --tag: bump, unless the manifests already
        # sit at a version that has never been tagged. That is the state an
        # interrupted release leaves behind, and bumping again would skip it.
        version = current if _untagged(current) else bump(current, 'patch')
    else:
        # --tag (with --apply). Tag whatever the manifests already say: the
        # documented flow is `--bump patch --apply`, commit, then `--tag`, so
        # bumping here again would skip a version.
        version = current

    if not args.apply and not args.tag:
        if version != current:
            print(f'Next release would be {current} -> {version}\n')
        consistent = report(version)
        if version == current and not consistent:
            print('\nSome manifests or tags are out of sync. '
                  'Re-run with --apply to reconcile, or fix by hand.')
            raise SystemExit(1)
        if version != current:
            print(f'\nDry run. Re-run with --apply to make {version} the version.')
        return

    if not args.apply:
        raise SystemExit('--tag requires --apply')

    if version == current:
        print(f'{version} is already the manifest version; '
              f'only reconciling manifests and tags.')
    else:
        print(f'Bumping {current} -> {version}')
        set_manifest_version(version)

    if set_json_version(JSR_JSON, version):
        print(f'  updated {JSR_JSON.relative_to(REPO)}')
    if set_json_version(NPM_JSON, version):
        print(f'  updated {NPM_JSON.relative_to(REPO)}')
    regenerate()
    if set_gemspec_version(version):
        print(f'  updated {GEMSPEC.relative_to(REPO)}')

    dirty = run(['git', 'status', '--porcelain'], check=False).stdout.strip()
    if dirty:
        print('\nChanged files (commit these before tagging):')
        for line in dirty.splitlines():
            print(f'  {line}')

    print()
    consistent = report(version)
    if not consistent:
        print('\nRefusing to tag: manifests or tags are inconsistent.')
        raise SystemExit(1)

    if not args.tag:
        print(f'\nVersion {version} prepared. Commit, then re-run with --tag.')
        return

    for tag in tag_names(version).values():
        run(['git', 'tag', tag])
    run(['git', 'push', 'origin', 'main'])
    for tag in tag_names(version).values():
        run(['git', 'push', 'origin', tag])
    print(f'\nPushed {version}.')
    print('  jsr.io: publish-jsr.yml fires on the scoped tag')
    print('  packagist: reads v%s from the tag (seconds, via webhook)' % version)
    print('  RubyGems: not published; tag is in place when it is')


def set_manifest_version(version: str) -> None:
    text = MANIFEST.read_text(encoding='utf-8')
    new, n = re.subn(
        r'^sdk_version:.*$',
        f'sdk_version: "{version}"',
        text,
        count=1,
        flags=re.M,
    )
    if n != 1:
        raise SystemExit(f'could not find sdk_version in {MANIFEST}')
    MANIFEST.write_text(new, encoding='utf-8')


if __name__ == '__main__':
    main()
