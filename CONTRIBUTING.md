# Contributing to React Stack Roadmap

Thanks for contributing!

## Development workflow

1. Create an issue describing the change. Use the issue body as the single source of truth for requirements, acceptance criteria and related links (Jira-style).
2. Create a branch from `main` using the GitHub Flow naming convention:
   ```bash
   git checkout -b feature/<short-name>
   ```

   Branch prefixes:

   | Prefix | Use for |
   |---|---|
   | `feature/` | New functionality | ✨ enhancement |
   | `bugfix/` | Bug fixes | 🐛 bug |
   | `hotfix/` | Critical production fixes | 🚨 hotfix |
   | `chore/` | Tooling, config, dependencies | 🔧 chore |
   | `docs/` | Documentation only | 📚 documentation |
   | `ci/` | CI/CD changes | 🔧 chore |
   | `refactor/` | Code change with no behavior change | 🔧 chore |
   | `test/` | Adding or updating tests | 🔧 chore |

   Example: `feature/add-authentication`, `ci/add-codeql`.

3. Make changes and run:
   ```bash
   pnpm install
   pnpm check
   pnpm build
   ```

4. Commit using [Conventional Commits](#commit-convention):
   ```bash
   git add -A
   git commit -m "feat: add authentication (closes #N)"
   ```

5. Push and open a PR referencing the issue (`Closes #N` in the PR description and, ideally, in the commit body). Update the issue with any relevant implementation notes or blockers.

   Use the helper scripts for GitHub CLI:
   ```bash
   # Create issue + branch
   bin/gh-issue hotfix "correct changeset package target"

   # After committing and pushing, create the PR
   bin/gh-pr 18 hotfix/correct-changeset-package-target
   ```

6. Wait for CI to pass and for review/approval from the code owner.
7. Merge. Do **not** keep long-lived implementation plans in the repo; the issue and PR history already capture the full context.

## Commit convention

Use Conventional Commits:
- `feat:` new feature
- `fix:` bug fix
- `chore:` tooling, config, dependencies
- `docs:` documentation only
- `refactor:` code change that neither fixes a bug nor adds a feature
- `test:` adding or updating tests
- `ci:` CI/CD changes

## Release workflow

This repo uses manual GitHub releases and semver tags. Releases are created automatically via CI when a version tag is pushed.

### Option A: Automated (recommended)

1. Update `CHANGELOG.md`: move changes from `[Unreleased]` to a new version section.
2. Run the bump script (it tags, pushes, AND creates the GitHub release):
   ```bash
   bin/bump-version patch
   ```
   If `gh` CLI is authenticated, the release is created automatically. Otherwise, a manual link is printed.

3. That's it — a `.github/workflows/release.yml` also triggers on tag push to create the release via CI.

### Option B: Manual (no gh CLI)

1. Decide bump type: `major`, `minor`, or `patch`.
2. Update `CHANGELOG.md` and bump `package.json` version.
3. Create and push the tag:
   ```bash
   git tag v0.2.0
   git push origin v0.2.0
   ```
4. CI auto-creates the GitHub release from the tag.

### Release notes

Release body is auto-extracted from `CHANGELOG.md` for the matching version. Keep `CHANGELOG.md` as the source of truth.

No npm publishing or Changesets configuration is required.

## No force-push / amend

After pushing, do not `git commit --amend` or `git push --force`. Fix issues with new commits so the review history is preserved.

## Branch protection

`main` is protected by a GitHub ruleset:
- Pull requests require at least one approving review.
- The approving review must come from the code owner (`@pelukron`).
- Force-push and direct deletion of `main` are blocked.

This means automated tooling can open pull requests, but only the repository owner can approve and merge them.

## Language

Project documentation and GitHub templates are maintained in English. Commit messages use English as well.

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start dev servers |
| `pnpm build` | Build all apps |
| `pnpm test` | Run all tests |
| `pnpm check` | Lint + typecheck + test |
| `pnpm lint` | Run Biome on all packages |
| `bin/gh-issue` | Create issue + linked branch (GitHub CLI) |
| `bin/gh-pr` | Create PR from branch linked to issue (GitHub CLI) |
| `bin/bump-version` | Bump root version, create tag, push to origin |

## Manual contribution workflow (no GitHub token / CLI)

If you do not have `gh` CLI configured or prefer to contribute without tokens, follow this workflow directly on GitHub:

1. **Fork** the repository using the GitHub web UI.
2. In your fork, **create a branch** from `main` using the GitHub Flow naming convention (for example `feature/add-auth`).
3. **Edit files** through the GitHub web editor or on your local clone.
4. **Run checks locally** if possible:
   ```bash
   pnpm install
   pnpm check
   pnpm build
   ```
5. **Commit** your changes with a Conventional Commit message.
6. **Open a Pull Request** from your fork to `pelukron/react-stack-roadmap:main`.
7. In the PR description, write `Closes #N` to link the related issue.
8. Wait for CI to pass and for review.

### If you only need to fix a typo or small issue

1. Open the file on GitHub.
2. Click the pencil icon (Edit this file).
3. Make the edit.
4. Choose **Create a new branch for this commit and start a pull request**.
5. Submit the PR.

This works without installing any tools on your machine.
