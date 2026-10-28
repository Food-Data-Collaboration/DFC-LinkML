"""Preserve hand-written subtrees across regeneration.

Each generator owns its output tree: it wipes the derived code and rewrites it
from the LinkML schema. Hand-written runtime code lives inside that same tree —
``auth/`` and ``dpm/`` in every connector — so it must be stashed before the
wipe and restored afterwards.

Preservation is an explicit allow-list of subtrees. It must never become "keep
anything unrecognised": a generated file that the generator forgets to emit has
to disappear, or ``generate_all.py --check`` stops proving anything. The same
reasoning as ``cardinality.py`` — an absent rule is not permission.

The stash is a temporary directory rather than an in-memory dict, so nested
directories, binary assets and file modes survive unchanged.
"""

from __future__ import annotations

import shutil
import tempfile
from pathlib import Path
from typing import Iterable


class Stash:
    """Handle returned by :func:`stash`. Holds the copy until restored."""

    def __init__(self, root: Path, subtrees: Iterable[str]):
        self._root = Path(root)
        self._tmp = tempfile.TemporaryDirectory(prefix="dfc-preserve-")
        self._base = Path(self._tmp.name)
        self.subtrees: list[str] = []
        for sub in subtrees:
            source = self._root / sub
            if source.is_dir():
                shutil.copytree(source, self._base / sub)
                self.subtrees.append(sub)
            elif source.exists():
                (self._base / sub).parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(source, self._base / sub)
                self.subtrees.append(sub)

    @property
    def file_count(self) -> int:
        """How many files were saved, for the generator's progress output."""
        total = 0
        for sub in self.subtrees:
            source = self._base / sub
            if source.is_dir():
                total += sum(1 for path in source.rglob("*") if path.is_file())
            elif source.is_file():
                total += 1
        return total

    def restore(self) -> None:
        """Put every saved path back, replacing anything already there."""
        for sub in self.subtrees:
            source = self._base / sub
            target = self._root / sub
            if target.exists() or target.is_symlink():
                shutil.rmtree(target) if target.is_dir() else target.unlink()
            target.parent.mkdir(parents=True, exist_ok=True)
            if source.is_dir():
                shutil.copytree(source, target)
            else:
                shutil.copy2(source, target)
        self._tmp.cleanup()

    def discard(self) -> None:
        """Drop the stash without restoring it."""
        self._tmp.cleanup()


def stash(root, subtrees) -> Stash:
    """Copy ``root/<subtree>`` for every path that exists.

    A subtree may be a directory (kept whole, however deeply nested) or a single
    file — the Ruby gem's hand-written ``lib/dpm.rb`` entry point is the latter.

    Call this before deleting ``root``, then :meth:`Stash.restore` once the
    generator has rewritten its output.
    """
    return Stash(Path(root), subtrees)
