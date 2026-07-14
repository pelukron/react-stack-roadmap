# Architecture

This document explains the decisions and purpose of each part of the monorepo.

## Why a monorepo?

The monorepo (`pnpm` + `Turbo`) reduces friction for daily learning sessions: cross-app changes happen in a single PR, CI unifies quality, and React/TypeScript versions are shared. When teams or deployments become independent, it can be migrated to separate repos per MFE.

## App-shell and micro-frontend

```
┌─────────────┐      Module Federation      ┌──────────────┐
│   shell     │  ◄──────────────────────────  │  remote-home │
│  (host)     │      loads ./App at runtime   │   (remote)   │
└─────────────┘                               └──────────────┘
```

- **`apps/shell`**: the host. Declares in `vite.config.ts` that `home` is a remote. At runtime, the browser requests `mf-manifest.json` from `localhost:3001` to know what is exposed.
- **`apps/remote-home`**: the remote. In `vite.config.ts` exposes `./App` as `./App` (or `HomeRemote`). Serves its own `remoteEntry.js`.
- **`@module-federation/vite`**: Vite plugin that resolves both host and remote without depending on Webpack/Rspack.
- **Shared deps**: `react` and `react-dom` are marked as shared so they are not loaded twice.

## Shared config (`packages/config`)

| File | Use |
|------|-----|
| `biome.json` | Linter and formatter rules for the whole monorepo. |
| `tsconfig.base.json` | Strict base TypeScript config. |

Each app extends `tsconfig.base.json` and adds its own paths and included files. `tsconfig.app.json`/`tsconfig.node.json` are avoided to prevent generated artifacts from confusing Biome.

## Quality tooling

| Tool | Role |
|------|------|
| Biome | Linter and formatter. Replaces ESLint + Prettier with a single dependency. |
| Husky | Runs `prepare` on install and anchors Git hooks. |
| lint-staged | Runs `biome check --write` on staged files before commit. |
| Vitest | Unit tests. Runs with React Testing Library and jsdom. |
| TypeScript | Strict static checking (`strict: true`). |

## CI

`.github/workflows/ci.yml` runs on every PR and push to `main`:

1. Full checkout (`fetch-depth: 0`) so `turbo` and `git` have context.
2. Setup pnpm 9.15.0.
3. Setup Node 22 with pnpm cache.
4. `pnpm install --frozen-lockfile`.
5. Job `check`: `pnpm check` (lint, typecheck, test).
6. Job `build`: `pnpm build` (all apps).

## Design decisions

| Decision | Reason |
|----------|--------|
| Vite instead of Next.js | Starting with Vite + SPA makes Module Federation clearer. Next.js will be added later in a separate app to compare SSR/RSC. |
| Biome instead of ESLint/Prettier | Less configuration, faster, ideal for a learning repo. |
| Strict TypeScript | Catches errors early and forces good practices. |
| One `tsconfig.json` per app | Avoids generated files (`*.js`, `*.d.ts`, `*.tsbuildinfo`) that clutter the repo and confuse Biome. |
| Husky + lint-staged | Ensures staged code passes Biome before commit. |

## Repo conventions

- Commits with Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, etc.).
- No `git commit --amend` or `git push --force` after push.
- Every significant change: issue → branch → PR → green CI → merge.
- Auto-delete branches enabled on GitHub.
- Branch naming follows GitHub Flow: `feature/`, `bugfix/`, `chore/`, `docs/`, `ci/`, `refactor/`, `test/` + kebab-case description.
- `main` is protected: pull requests require **one approving review from the code owner** (`@pelukron`).

## Known issues

- The branch protection ruleset for `main` was created via API without required status checks; `check` must be added manually in GitHub Settings once CI has run on at least one PR.
- The remote is currently exposed but the shell does not render it yet; that will be the next roadmap step.
