# Plan: Harden CI and add manual contribution docs

## Goal
Review the current `react-stack-roadmap` repo after the CI transfer PR merge and add missing standard practices plus a manual contribution guide for when no GitHub tokens / CLI access is available.

## Current state
- main is merged and includes: Dependabot, CodeQL, release workflow (Changesets), PR template, issue templates, CHANGELOG, pre-push hook, English docs.
- CI workflow has invalid action versions (`v7`) which do not exist.
- Missing: `.gitattributes`, `.editorconfig`, `Makefile`, `AGENTS.md`, manual contribution instructions, `SECURITY.md`.

## Proposed changes (new issue + PR)

1. Create issue `chore: harden CI and add manual contribution guide`.
2. Create branch `chore/6-ci-hardening-and-contribution-docs`.
3. Commits (one logical change per commit):
   - `fix: use correct GitHub Actions versions in ci.yml` (`actions/checkout@v4`, `pnpm/action-setup@v4`, `actions/setup-node@v4`).
   - `chore: add .gitattributes for line-ending normalization`.
   - `chore: add .editorconfig`.
   - `docs: add AGENTS.md with project rules for AI assistants`.
   - `docs: add manual contribution guide without GitHub tokens`.
   - `docs: add SECURITY.md`.
   - `chore: add CODEOWNERS` if absent.

4. Run local checks (`pnpm check && pnpm build`).
5. Push and open PR referencing the issue.

## Out of scope
- LICENSE (needs explicit license choice from repo owner).
- Nx migration (Turbo is sufficient).

## Approval needed
Yes, before creating files/PR.
