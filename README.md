# React Stack Roadmap

Monorepo para aprender el stack actual de React con app-shell y micro-frontends.

## Arquitectura

```
react-stack-roadmap/
├── .github/              # GitHub Actions, templates de issues y CODEOWNERS
├── apps/
│   ├── shell            # app-shell (host) con Module Federation
│   └── remote-home      # micro-frontend remoto (expuesto al shell)
├── packages/
│   └── config           # config compartida: Biome, tsconfig base
├── .hermes/plans/       # planes de implementación
├── biome.json           # extiende la config de @rsm/config
├── package.json         # scripts raíz y workspaces
├── pnpm-workspace.yaml  # define los workspaces
├── turbo.json           # pipeline de tareas (dev/build/test/lint/typecheck)
└── README.md
```

## ¿Qué hace cada pieza?

| Archivo / carpeta | Responsabilidad |
|-------------------|-----------------|
| `apps/shell` | App-shell host. Carga `remote-home` en runtime mediante Module Federation. Vite + React 19 + TS + Vitest. |
| `apps/remote-home` | Micro-frontend remoto. Expone su `App.tsx` como `./App` vía Module Federation. Se puede desplegar independientemente. |
| `packages/config` | Config compartida: `biome.json` (linter/formatter), `tsconfig.base.json` (reglas estrictas de TS). |
| `package.json` | Scripts raíz (`dev`, `build`, `test`, `check`) y devDependencies comunes (Turbo, Husky, lint-staged, Biome). |
| `pnpm-workspace.yaml` | Declara los workspaces (`apps/*`, `packages/*`). |
| `turbo.json` | Orquesta tareas entre workspaces, maneja caché y dependencias (`build` depende de `^build`). |
| `biome.json` | Punto de entrada local que extiende `@rsm/config/biome.json`. |
| `.github/workflows/ci.yml` | CI: instala pnpm/Node, corre `pnpm check` y `pnpm build` en PRs y pushes a `main`. |
| `.github/ISSUE_TEMPLATE/` | Formularios para bug reports y feature requests. |
| `.github/CODEOWNERS` | Dueño del repo: `@pelukron`. |
| `CONTRIBUTING.md` | Flujo de trabajo, convención de commits, política de no force-push/amend. |

## Scripts

```bash
pnpm dev          # dev concurrente de todos los apps
pnpm build        # build de todos los apps
pnpm test         # test de todos los apps
pnpm lint         # lint con Biome
pnpm typecheck    # typecheck con tsc
pnpm check        # lint + typecheck + test
```

## Stack

- Vite 6 + React 19 + TypeScript 5
- pnpm workspaces + Turbo 2
- Biome + Husky + lint-staged
- Vitest + React Testing Library
- Module Federation (`@module-federation/vite`)

## Próximos pasos

Ver `ARCHITECTURE.md` para detalles de flujo de datos, decisiones de diseño y notas de desarrollo.
