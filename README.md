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
| `.github/workflows/release.yml` | Changesets release workflow: version bump + release PR. |
| `.github/ISSUE_TEMPLATE/` | Bug report and feature request forms. |
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
```

## Stack

- Vite 6 + React 19 + TypeScript 5
- pnpm workspaces + Turbo 2
- Biome + Husky + lint-staged
- Vitest + React Testing Library
- Module Federation (`@module-federation/vite`)

## Roadmap blocks

Learning sessions are organized as weekly blocks. Each block is one or more PRs.

| Block | Topic | Status |
|-------|-------|--------|
| 1 | Tooling & repo setup (monorepo, CI, quality gates, helper scripts) | ✅ Done |
| 2 | Module Federation runtime: shell renders remote-home | 🔄 Next |
| 3 | Routing: TanStack Router in shell + remote routes | 🔲 Pending |
| 4 | Styling: Tailwind CSS + shadcn/ui | 🔲 Pending |
| 5 | State: Zustand + TanStack Query | 🔲 Pending |
| 6 | Data fetching: REST vs GraphQL comparison | 🔲 Pending |
| 7 | SSR / RSC comparison: Next.js app alongside Vite | 🔲 Pending |
| 8 | Performance optimization (code splitting, lazy loading, render patterns) | 🔲 Pending |
| 9 | Testing strategy (unit, integration, E2E with Playwright) | 🔲 Pending |
| 10 | i18n, a11y and forms | 🔲 Pending |
| 11 | Auth patterns | 🔲 Pending |
| 12 | Deployment, CI/CD and monitoring | 🔲 Pending |
| 13 | Security and hardening | 🔲 Pending |

## This week (week of 2026-07-14)

| Day | Block | Goal | Deliverable |
|-----|-------|------|-------------|
| Tue | 1 | Close tooling; fix CI/release; document helpers | ✅ Done |
| Wed | 2 | Shell loads and renders `remote-home` | PR to `main` |
| Thu | 2 | Add navigation between shell and remote; shared layout | PR to `main` |
| Fri | 3 | Add TanStack Router in shell + remote routes | PR to `main` |

## Next steps

See `ARCHITECTURE.md` for data flow details, design decisions and development notes.

Start block 2: make `apps/shell` load and render `apps/remote-home` via Module Federation at runtime.
