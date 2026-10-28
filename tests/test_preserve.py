"""Guard the hand-written auth/ and dpm/ trees against regeneration (issue #42).

Each generator owns its output tree and wipes it on every run. Hand-written
runtime code lives inside that same tree, so each generator must stash and
restore an explicit allow-list of subtrees. If these tests fail, running
``generate_all.py`` has just deleted production code.

The end-to-end cases also assert that the wipe still wipes: a directory the
allow-list does not name must disappear, or ``generate_all.py --check`` stops
proving anything.
"""

import shutil
import subprocess
import sys
from pathlib import Path

import pytest

REPO = Path(__file__).resolve().parent.parent
SCRIPTS = REPO / "scripts"
sys.path.insert(0, str(SCRIPTS))

import generate_php_connector  # noqa: E402
import generate_ruby_gem  # noqa: E402
import generate_typescript_connector  # noqa: E402
import preserve  # noqa: E402


def _run(script: str, *args: str, cwd: Path) -> subprocess.CompletedProcess:
    return subprocess.run(
        [sys.executable, str(SCRIPTS / script), *args],
        cwd=cwd,
        capture_output=True,
        text=True,
    )


class TestStash:
    def test_restores_nested_directories_and_binary_files(self, tmp_path):
        root = tmp_path / "out"
        (root / "auth" / "nested").mkdir(parents=True)
        (root / "auth" / "keep.ts").write_text("export const x = 1;\n")
        (root / "auth" / "nested" / "blob.bin").write_bytes(b"\x00\xff")

        stashed = preserve.stash(root, ("auth",))
        shutil.rmtree(root)
        root.mkdir()

        assert stashed.subtrees == ["auth"]
        assert stashed.file_count == 2
        stashed.restore()

        assert (root / "auth" / "keep.ts").read_text() == "export const x = 1;\n"
        assert (root / "auth" / "nested" / "blob.bin").read_bytes() == b"\x00\xff"

    def test_absent_subtree_is_skipped(self, tmp_path):
        root = tmp_path / "out"
        root.mkdir()

        stashed = preserve.stash(root, ("auth", "dpm"))

        assert stashed.subtrees == []
        assert stashed.file_count == 0
        stashed.restore()  # must not raise

    def test_single_file_subtree_is_preserved(self, tmp_path):
        root = tmp_path / "out"
        root.mkdir()
        (root / "dpm.rb").write_text("module Dpm; end\n")

        stashed = preserve.stash(root, ("dpm.rb",))
        assert stashed.file_count == 1
        (root / "dpm.rb").unlink()
        stashed.restore()

        assert (root / "dpm.rb").read_text() == "module Dpm; end\n"

    def test_restore_replaces_whatever_the_wipe_left(self, tmp_path):
        root = tmp_path / "out"
        (root / "dpm").mkdir(parents=True)
        (root / "dpm" / "keep.rb").write_text("module Dpm; end\n")

        stashed = preserve.stash(root, ("dpm",))
        (root / "dpm" / "generated.rb").write_text("# generated\n")
        stashed.restore()

        assert (root / "dpm" / "keep.rb").exists()
        assert not (root / "dpm" / "generated.rb").exists()


@pytest.mark.parametrize(
    "module, constant, expected",
    [
        (generate_typescript_connector, "PRESERVED_SRC_SUBTREES", {"auth", "dpm"}),
        (generate_php_connector, "PRESERVED_SRC_SUBTREES", {"Auth", "Dpm"}),
        (generate_ruby_gem, "PRESERVED_LIB_SUBTREES", {"lib/auth", "lib/dpm"}),
    ],
)
def test_each_generator_preserves_auth_and_dpm(module, constant, expected):
    assert expected <= set(getattr(module, constant))


def test_typescript_generator_keeps_hand_written_trees(tmp_path):
    out = tmp_path / "ts"
    (out / "src" / "auth").mkdir(parents=True)
    (out / "src" / "auth" / "keep.ts").write_text("// auth\n")
    (out / "src" / "dpm").mkdir(parents=True)
    (out / "src" / "dpm" / "index.ts").write_text("export const scope = 1;\n")
    (out / "src" / "dpm" / "nested").mkdir(parents=True)
    (out / "src" / "dpm" / "nested" / "deep.ts").write_text("// deep\n")
    (out / "src" / "stray").mkdir()
    (out / "src" / "stray" / "leftover.ts").write_text("// not allow-listed\n")

    result = _run("generate_typescript_connector.py", "--output", str(out), cwd=REPO)

    assert result.returncode == 0, result.stderr
    assert (out / "src" / "auth" / "keep.ts").read_text() == "// auth\n"
    assert (out / "src" / "dpm" / "nested" / "deep.ts").read_text() == "// deep\n"
    assert (out / "src" / "core" / "Connector.ts").exists()
    assert not (out / "src" / "stray").exists()
    # Preservation stops the wipe; the barrel also has to re-export the module
    # or nothing outside the package can reach it.
    assert 'export * from "./dpm/index.js";' in (out / "src" / "index.ts").read_text()


def test_typescript_barrel_stays_quiet_without_hand_written_modules(tmp_path):
    out = tmp_path / "ts"

    result = _run("generate_typescript_connector.py", "--output", str(out), cwd=REPO)

    assert result.returncode == 0, result.stderr
    assert "dpm" not in (out / "src" / "index.ts").read_text()


def test_php_generator_keeps_hand_written_trees(tmp_path):
    out = tmp_path / "php"
    (out / "src" / "Auth").mkdir(parents=True)
    (out / "src" / "Auth" / "Verifier.php").write_text("<?php\n")
    (out / "src" / "Dpm").mkdir(parents=True)
    (out / "src" / "Dpm" / "Scope.php").write_text("<?php\n")
    (out / "src" / "Stray").mkdir()
    (out / "src" / "Stray" / "Leftover.php").write_text("<?php\n")

    result = _run("generate_php_connector.py", "--output", str(out), cwd=REPO)

    assert result.returncode == 0, result.stderr
    assert (out / "src" / "Auth" / "Verifier.php").exists()
    assert (out / "src" / "Dpm" / "Scope.php").exists()
    assert (out / "src" / "Connector.php").exists()
    assert not (out / "src" / "Stray").exists()


def test_ruby_generator_keeps_hand_written_trees(tmp_path):
    # The Ruby generator has no --output flag: it writes ./ruby-gem and reads
    # ./src and ./config. Run it in a scratch directory with those linked in.
    (tmp_path / "src").symlink_to(REPO / "src")
    (tmp_path / "config").symlink_to(REPO / "config")
    gem = tmp_path / "ruby-gem"
    (gem / "lib" / "auth").mkdir(parents=True)
    (gem / "lib" / "auth" / "verifier.rb").write_text("module Auth; end\n")
    (gem / "lib" / "dpm").mkdir(parents=True)
    (gem / "lib" / "dpm" / "scope.rb").write_text("module Dpm; end\n")
    # The gem entry point is a single file, preserved alongside the directory.
    (gem / "lib" / "dpm.rb").write_text("require_relative 'dpm/scope'\n")
    (gem / "lib" / "stray.rb").write_text("# not allow-listed\n")

    result = _run("generate_ruby_gem.py", cwd=tmp_path)

    assert result.returncode == 0, result.stderr
    assert (gem / "lib" / "auth" / "verifier.rb").exists()
    assert (gem / "lib" / "dpm" / "scope.rb").exists()
    assert (gem / "lib" / "dpm.rb").read_text() == "require_relative 'dpm/scope'\n"
    assert (gem / "lib" / "core" / "connector.rb").exists()
    assert not (gem / "lib" / "stray.rb").exists()
    # The generated main file must require it, or nothing loads the module.
    assert "require_relative 'dpm'" in (
        gem / "lib" / "dfc_linkml_connector.rb"
    ).read_text()
