# React Stack Roadmap — Agent Instructions

When working in this repository, follow these rules.

## Project overview

- `pnpm` monorepo managed with `Turbo` and `pnpm workspaces`.
- `apps/shell`: host app with Vite + React 19 + TypeScript.
- `apps/remote-home`: remote micro-frontend exposed via Module Federation.
- `packages/config`: shared Biome config and TypeScript base config.
- GitHub Actions CI runs `pnpm check` and `pnpm build` on every PR and push to `main`.
- Release automation via `Changesets`.

## Before declaring a change done

Always run:

```bash
pnpm install
pnpm check
pnpm build
```

If any step fails, fix the issue before committing or pushing.

## Style and conventions

- Use **TypeScript** everywhere. `strict` is enabled.
- Follow the Biome rules defined in `packages/config/biome.json`.
- Prefer functional React components and hooks.
- Do not add `console.log` in production code; use the framework or remove them.
- Use `path` utilities where appropriate; avoid manual path concatenation.

## Commits

Use Conventional Commits:

- `feat:` new feature
- `fix:` bug fix
- `chore:` tooling, config, dependencies
- `docs:` documentation only
- `refactor:` code change with no behavior change
- `test:` adding or updating tests
- `ci:` CI/CD changes

## Branches

Use GitHub Flow naming convention:

- `feature/<short-name>`
- `bugfix/<short-name>`
- `chore/<short-name>`
- `docs/<short-name>`
- `ci/<short-name>`
- `refactor/<short-name>`

No issue number in the branch name. Link the issue in the PR description with `Closes #N`.

## Pull requests

- One logical change per PR.
- Update `CHANGELOG.md` if the change is user-facing.
- Add a changeset (`pnpm changeset`) if the PR changes packages that should be released.
- Do not use `git commit --amend` or `git push --force` after the branch has been pushed.

## Language

Project documentation, GitHub templates, and commit messages are maintained in **English**.

## No destructive operations without approval

If a task requires deleting files, resetting branches, or modifying `main` directly, ask for explicit user approval first.
