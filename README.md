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
| `.github/ISSUE_TEMPLATE/` | Bug report and feature request forms. |
| `.github/CODEOWNERS` | Repo owner: `@pelukron`. |
| `CONTRIBUTING.md` | Workflow, commit convention, no force-push/amend policy. |

## Scripts

```bash
pnpm dev          # concurrent dev servers for all apps
pnpm build        # build all apps
pnpm test         # run all tests
pnpm lint         # lint with Biome
pnpm typecheck    # typecheck with tsc
pnpm check        # lint + typecheck + test
```

## Stack

- Vite 6 + React 19 + TypeScript 5
- pnpm workspaces + Turbo 2
- Biome + Husky + lint-staged
- Vitest + React Testing Library
- Module Federation (`@module-federation/vite`)

## Next steps

See `ARCHITECTURE.md` for data flow details, design decisions and development notes.
