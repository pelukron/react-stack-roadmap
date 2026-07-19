# React Stack Roadmap

Monorepo to learn the current React stack with app-shell and micro-frontends.

## Architecture

```
react-stack-roadmap/
├── .github/              # GitHub Actions, issue templates and CODEOWNERS
├── apps/
│   ├── shell            # app-shell (host) with Module Federation
│   └── remote-home      # remote micro-frontend (exposed to the shell)
├── packages/
│   └── config           # shared config: Biome, base tsconfig
├── .hermes/plans/       # implementation plans
├── biome.json           # extends @rsm/config
├── package.json         # root scripts and workspaces
├── pnpm-workspace.yaml  # defines workspaces
├── turbo.json           # task pipeline (dev/build/test/lint/typecheck)
└── README.md
```

## What does each piece do?

| File / folder | Responsibility |
|---------------|----------------|
| `apps/shell` | App-shell host. Loads `remote-home` at runtime via Module Federation. Vite + React 19 + TS + Vitest. |
| `apps/remote-home` | Remote micro-frontend. Exposes its `App.tsx` as `./App` via Module Federation. Can be deployed independently. |
| `packages/config` | Shared config: `biome.json` (linter/formatter), `tsconfig.base.json` (strict TS rules). |
| `package.json` | Root scripts (`dev`, `build`, `test`, `check`) and common devDependencies (Turbo, Husky, lint-staged, Biome). |
| `pnpm-workspace.yaml` | Declares workspaces (`apps/*`, `packages/*`). |
| `turbo.json` | Orchestrates tasks across workspaces, handles cache and dependencies (`build` depends on `^build`). |
| `biome.json` | Local entry point that extends `@rsm/config/biome.json`. |
| `.github/workflows/ci.yml` | CI: installs pnpm/Node, runs `pnpm check` and `pnpm build` on PRs and pushes to `main`. |
| `.github/workflows/release.yml` | Auto-creates GitHub release on tag push (`v*`), extracts notes from CHANGELOG. |
| `.github/ISSUE_TEMPLATE/` | Bug report, feature request and hotfix forms. |
| `.github/CODEOWNERS` | Repo owner: `@pelukron`. |
| `CONTRIBUTING.md` | Workflow, commit convention, helper scripts, release settings. |
| `AGENTS.md` | Agent instructions for this repo. |
| `ARCHITECTURE.md` | Deep dive into decisions, data flow and conventions. |

## Scripts

```bash
pnpm dev          # concurrent dev servers for all apps
pnpm build        # build all apps
pnpm test         # run all tests
pnpm lint         # lint with Biome
pnpm typecheck    # typecheck with tsc
pnpm check        # lint + typecheck + test

bin/gh-issue <type> <title> [body]   # create issue + branch
bin/gh-pr <issue-number> <branch>    # create linked PR
bin/bump-version <major|minor|patch> # bump version, tag, push + create release
```

## Stack

- Vite 6 + React 19 + TypeScript 5
- pnpm workspaces + Turbo 2
- Biome + Husky + lint-staged
- Vitest + React Testing Library
- Module Federation (`@module-federation/vite`)

## Roadmap blocks

Learning sessions organized as blocks. Each block is one epic issue + native GitHub sub-issues (auto-tracked progress).

Intermediate hardening blocks use `X.Y` numbering (e.g. 2.5) inside the parent milestone — they don't renumber the roadmap.

| Block | Topic | Epic | Milestone | Status |
|-------|-------|------|-----------|--------|
| 1 | Tooling & repo setup | [#1](https://github.com/pelukron/react-stack-roadmap/issues/1) | v0.1.0 | ✅ Done |
| 2 | Module Federation: shell renders remote-home | [#29](https://github.com/pelukron/react-stack-roadmap/issues/29) | v0.1.0 | 🔄 In progress |
| 2.5 | Pre-Router architecture hardening | [#84](https://github.com/pelukron/react-stack-roadmap/issues/84) | v0.2.0 | 🔲 Pending |
| 3 | Routing: TanStack Router + testing foundation | [#64](https://github.com/pelukron/react-stack-roadmap/issues/64) | v0.2.0 | 🔲 Pending |
| 4 | Styling: Tailwind v4 + shadcn/ui + a11y + Storybook | [#65](https://github.com/pelukron/react-stack-roadmap/issues/65) | v0.2.0 | 🔲 Pending |
| 5 | State + Data: Zustand + TanStack Query + REST vs GraphQL | [#66](https://github.com/pelukron/react-stack-roadmap/issues/66) | v0.2.0 | 🔲 Pending |
| 6 | Deploy: MFE CI/CD, preview envs + smoke E2E | [#73](https://github.com/pelukron/react-stack-roadmap/issues/73) | v0.2.0 | 🔲 Pending |
| 7 | Auth: JWT/OAuth, protected routes + RBAC | [#72](https://github.com/pelukron/react-stack-roadmap/issues/72) | v0.3.0 | 🔲 Pending |
| 8 | SSR/RSC: Next.js alongside Vite | [#68](https://github.com/pelukron/react-stack-roadmap/issues/68) | v0.3.0 | 🔲 Pending |
| 9 | Performance: budgets, bundle analysis + Lighthouse | [#69](https://github.com/pelukron/react-stack-roadmap/issues/69) | v0.3.0 | 🔲 Pending |
| 10 | i18n + Forms: RHF + Zod | [#71](https://github.com/pelukron/react-stack-roadmap/issues/71) | v0.3.0 | 🔲 Pending |
| 11 | Advanced E2E: Playwright full flows + visual regression | [#70](https://github.com/pelukron/react-stack-roadmap/issues/70) | v0.4.0 | 🔲 Pending |
| 12 | Security & hardening: headers, CSP, OWASP | [#74](https://github.com/pelukron/react-stack-roadmap/issues/74) | v0.4.0 | 🔲 Pending |

### Milestones

| Milestone | Due | Blocks |
|-----------|-----|--------|
| v0.1.0 — MVP | 2026-07-31 | 1-2 |
| v0.2.0 — Core Stack | 2026-08-31 | 2.5, 3-6 |
| v0.3.0 — Production Ready | 2026-10-15 | 7-10 |
| v0.4.0 — Hardening | 2026-11-15 | 11-12 |

See [ARCHITECTURE.md](ARCHITECTURE.md) for data flow details, design decisions and development notes.