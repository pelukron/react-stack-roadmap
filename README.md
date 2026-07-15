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

Learning sessions organized as blocks. Each block is one epic issue + linked implementation PRs.

| Block | Topic | Epic | Status |
|-------|-------|------|--------|
| 1 | Tooling & repo setup | [#1](https://github.com/pelukron/react-stack-roadmap/issues/1) | ✅ Done |
| 2 | Module Federation: shell renders remote-home | [#29](https://github.com/pelukron/react-stack-roadmap/issues/29) | 🔄 In progress |
| 3 | Routing: TanStack Router in shell + remote routes | — | 🔲 Pending |
| 4 | Styling: Tailwind CSS + shadcn/ui | — | 🔲 Pending |
| 5 | State: Zustand + TanStack Query | — | 🔲 Pending |
| 6 | Data fetching: REST vs GraphQL comparison | — | 🔲 Pending |
| 7 | SSR / RSC comparison: Next.js alongside Vite | — | 🔲 Pending |
| 8 | Performance optimization | — | 🔲 Pending |
| 9 | Testing strategy (unit, integration, E2E) | — | 🔲 Pending |
| 10 | i18n, a11y and forms | — | 🔲 Pending |
| 11 | Auth patterns | — | 🔲 Pending |
| 12 | Deployment, CI/CD and monitoring | — | 🔲 Pending |
| 13 | Security and hardening | — | 🔲 Pending |

### Block 1: Tooling & repo setup ✅

| # | Issue | PR |
|---|-------|-----|
| #1 | [chore: setup CI, issue templates and branch protection](https://github.com/pelukron/react-stack-roadmap/issues/1) | #2 |
| #15 | [chore: harden CI and add manual contribution guide](https://github.com/pelukron/react-stack-roadmap/issues/15) | #16 |
| #23 | [docs: fix contributing and agents documentation](https://github.com/pelukron/react-stack-roadmap/issues/23) | #24 |
| #25 | [docs: update README with roadmap blocks](https://github.com/pelukron/react-stack-roadmap/issues/25) | #26 |
| #35 | [chore: unify emoji labels, hotfix workflow and helpers](https://github.com/pelukron/react-stack-roadmap/issues/35) | — |
| #40 | [chore: remove changesets and automated npm release](https://github.com/pelukron/react-stack-roadmap/issues/40) | #44 |
| #43 | [chore: simplify release workflow to GitHub tags](https://github.com/pelukron/react-stack-roadmap/issues/43) | #44 |
| #47 | [docs: add CHANGELOG.md and release notes convention](https://github.com/pelukron/react-stack-roadmap/issues/47) | #48 |
| #52 | [ci: automate GitHub release creation](https://github.com/pelukron/react-stack-roadmap/issues/52) | #53 |

### Block 2: Module Federation 🔄

| # | Issue | PR |
|---|-------|-----|
| #29 | [feat: shell renders remote-home via Module Federation](https://github.com/pelukron/react-stack-roadmap/issues/29) | [#32](https://github.com/pelukron/react-stack-roadmap/pull/32) |
| #36 | [docs: implementation guide for Module Federation block](https://github.com/pelukron/react-stack-roadmap/issues/36) | [#51](https://github.com/pelukron/react-stack-roadmap/pull/51) |

### Block 3: TanStack Router 🔲

Epic issue pending. Will cover routing in shell + remote routes.

## Next steps

- Merge [#32](https://github.com/pelukron/react-stack-roadmap/pull/32) — shell renders remote-home via Module Federation.
- Start Block 3: create epic for TanStack Router integration.

See [ARCHITECTURE.md](ARCHITECTURE.md) for data flow details, design decisions and development notes.