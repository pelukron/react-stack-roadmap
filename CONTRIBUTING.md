# Contributing to React Stack Roadmap

Thanks for contributing!

## Development workflow

1. Create an issue describing the change.
2. Create a branch from `main` using the GitHub Flow naming convention:
   ```bash
   git checkout -b feature/<short-name>
   ```

   Branch prefixes:

   | Prefix | Use for |
   |---|---|
   | `feature/` | New functionality |
   | `bugfix/` | Bug fixes |
   | `chore/` | Tooling, config, dependencies |
   | `docs/` | Documentation only |
   | `ci/` | CI/CD changes |
   | `refactor/` | Code change with no behavior change |

   Example: `feature/add-authentication`, `ci/add-codeql`.
3. Make changes and run:
   ```bash
   pnpm install
   pnpm check
   pnpm build
   ```
4. Push and open a PR referencing the issue (`Closes #N` in the PR description and, ideally, in the commit body).
5. Add a changeset if the PR is user-facing (`pnpm changeset`). Changesets describe what should be released and what version bump to apply.
6. Wait for CI to pass and merge.

## Commit convention

Use Conventional Commits:
- `feat:` new feature
- `fix:` bug fix
- `chore:` tooling, config, dependencies
- `docs:` documentation only
- `refactor:` code change that neither fixes a bug nor adds a feature
- `test:` adding or updating tests

## No force-push / amend

After pushing, do not `git commit --amend` or `git push --force`. Fix issues with new commits so the review history is preserved.

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
