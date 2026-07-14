# React Stack Roadmap

Monorepo para aprender el stack actual de React con app-shell y micro-frontends.

## Arquitectura

```
react-stack-roadmap/
├── apps/
│   ├── shell          # app-shell (host) con Module Federation
│   └── remote-home    # micro-frontend remoto
├── packages/
│   └── config         # biome, tsconfig base
└── turbo.json
```

## Scripts

```bash
pnpm dev          # dev concurrente
pnpm build        # build de todos los apps
pnpm test         # test de todos los apps
pnpm check        # lint + typecheck + test
```

## Stack

- Vite 6 + React 19 + TypeScript 5
- pnpm workspaces + Turbo 2
- Biome + Husky + lint-staged
- Vitest + React Testing Library
- Module Federation 2

