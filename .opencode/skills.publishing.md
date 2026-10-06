# Publishing to Package Registries

Lessons from publishing this SDK to jsr.io, packagist.org, and rubygems.org.
Read this before touching `.github/workflows/publish-*.yml` or `scripts/tag_release.py`.

## The registries are not interchangeable

Three package names, three different trust models, one version number.

| Registry | Package | Credential | Trigger |
|---|---|---|---|
| jsr.io | `@siol-data/linkml-connector` | OIDC (`id-token: write`) | tag `@siol-data/linkml-connector@X.Y.Z` |
| packagist | `siol-data/dfc-connector` | none — reads the git tag | tag `vX.Y.Z` (webhook) |
| rubygems | `dfc-linkml-connector` | OIDC trusted publisher | tag `vX.Y.Z` (runs) |

Only rubygems needs a job to run. packagist derives everything from the tag, so
"notifying" it is optional belt-and-braces; jsr and rubygems each need a real
authenticated push. The two publish paths therefore listen on **different tags**
and cannot be merged into one workflow.

`config/dfc-release.yaml`'s `sdk_version` is the single source of truth, fanned
out to `jsr.json`, `package.json`, and the gemspec by `scripts/tag_release.py`.

## Four bugs, one root cause

Every one of these passed a local check and failed in CI. They share a shape:
**the test environment was already in the state the fixed code needed.**

1. **Wrong working directory.** The gemspec is at `ruby-gem/`, not the repo root.
   Every local check began with `cd ruby-gem`, so the command was right and the
   directory was untested. → job-level `defaults.run.working-directory`.

2. **`gem spec <file> version | head -1` does not print a version.** It prints
   YAML, so `head -1` yields `--- !ruby/object:Gem::Version` and the comparison
   against the tag fails on every run. Use
   `ruby -rrubygems/package -e 'puts Gem::Package.new(ARGV[0]).spec.version'`.
   (`Gem::Specification.load` is for `.gemspec` files and raises on a `.gem`
   archive.) Read it **once** and export via `$GITHUB_ENV` so later steps can't
   drift.

3. **A step ran before the checkout it depended on.** Tag resolution ran first
   under a job default of `ruby-gem/`, which does not exist until something is
   checked out. Overriding the cwd was not enough either — resolving needs the
   repo's refs, so an empty workspace finds no tags. Resolution now needs a
   fetch-then-resolve-then-recheckout sequence.

4. **`exit 0` in a step does not skip later steps.** Every `run:` is its own
   process, so exiting only ends *that* step; the push would still have run.
   Pass the decision as a step output and gate the following steps with `if:`.

**The transferable rule: stubbing a tool in a test hides every bug whose shape is
"the real tool behaves differently than I assumed."** Bugs 1, 2 and 3 were all
invisible to local checks. Replay the extracted steps against a real checkout at
the real tag with the real binaries. A stub that echoes the value you *expect*
is an assertion you wrote yourself.

## rubygems.org specifics

- **MFA blocks automated pushes, permanently.** A stored API key authenticates
  fine and is then refused: `You have enabled multifactor authentication. Please
  enter OTP code.` An OTP is single-use and short-lived, so no workflow wiring
  helps. RubyGems' Trusted Publishing announcement names this as the state it
  was built to end. Use OIDC; there is no key to store.
- **Trusted publisher matching is case-sensitive** against the token's
  `repository` and `job_workflow_ref` claims. `DFC-LinkML` ≠ `DFC_LinkML`. This
  cost two failed runs.
- **For a gem that does not exist yet**, register a *pending* trusted publisher
  at `rubygems.org/profile/oidc/pending_trusted_publishers` and include the gem
  name. The first successful push converts it to a normal publisher and adds the
  pushing account as **owner** — so ownership of an unclaimed name is settled by
  registering deliberately, not by whoever pushed first.
- Leave the **Environment** field blank unless the job sets `environment:`. A
  registered environment the job doesn't declare will not match (and vice versa).
- **Versions are immutable.** Re-pushing a published version is rejected;
  `gem yank` is the only remedy and it deletes the file outright.
- **A missing gem returns HTTP 404, not an empty list.** So "not published" is a
  non-2xx. Check the status code rather than leaning on `curl -f`
  short-circuiting, which reads as an accident.
- Pin `rubygems/configure-rubygems-credentials` to an **exact tag** (`v2.1.0`).
  It has no moving major ref — only `v1.0.0`, `v2.0.0`, `v2.1.0` exist — so
  `@v2` will not resolve.

## Retrying without burning a version

There is a mechanism, and it is the absence of a bump:

```sh
gh workflow run publish-rubygems.yml     # or via the dispatches API
```

A dispatch resolves the newest `v*` tag, rebuilds from **that tag** (never from
the dispatch branch), and checks the registry first. If the version is already
published it **skips with a warning and exits 0** — verified in production. So:

- a *failed* push costs nothing; re-dispatch until it lands
- a *succeeded* push is safe to re-run; it will not double-publish
- changing gem **content** under an existing version is impossible by design

Only bump `sdk_version` when there is something new to release. Fixing CI,
wiring a registry, or editing a workflow should not move the number.

## GitHub Pages will silently serve the wrong thing

`build_type: legacy` means Pages is running **Jekyll**, not the MkDocs artifact
your deploy job built. Nothing is red — the deploy workflow reports success and
builds the correct commit — while the live site has no nav and dead links,
because Jekyll never reads `mkdocs.yml` and does not rewrite relative hrefs.
`.nojekyll` prevents the fallback; the real check is:

```sh
gh api repos/OWNER/REPO/pages --jq .build_type     # want: workflow
```

**A green deploy is not evidence the deploy is being served.** Fetch the live URL.

## Verifying an artifact is actually published

Exit 0 is not proof, and neither is a green run. Check the registry directly:

```sh
curl -fsS https://rubygems.org/api/v1/versions/NAME.json   # rubygems
curl -fsS https://repo.packagist.org/p2/NAME.json          # packagist
```

Prefer a script that asserts on the response over reading workflow logs.

## `gem` output traps

- `gem spec FILE version` → YAML, not a bare version.
- A gemspec with no `spec.date` stamps the built gem **`1980-01-02`**, which is
  what rubygems.org then displays as the build date. Reproducible locally; no
  env var involved. Set `spec.date` explicitly if this matters.