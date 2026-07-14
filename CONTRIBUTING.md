# Contributing to React Stack Roadmap

Thanks for contributing!

## Development workflow

1. Create an issue describing the change.
2. Create a branch from `main`:
   ```bash
   git checkout -b feat/<short-name>
   ```
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

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start dev servers |
| `pnpm build` | Build all apps |
| `pnpm test` | Run all tests |
| `pnpm check` | Lint + typecheck + test |
| `pnpm lint` | Run Biome on all packages |

