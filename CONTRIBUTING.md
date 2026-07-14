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
5. Wait for CI to pass and merge.

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

