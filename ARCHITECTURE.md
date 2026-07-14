# Arquitectura

Este documento explica las decisiones y el propósito de cada parte del monorepo.

## ¿Por qué monorepo?

El monorepo (`pnpm` + `Turbo`) reduce fricción para sesiones de estudio diarias: los cambios cross-app se hacen en un solo PR, la CI unifica calidad y las versiones de React/TypeScript se comparten. Cuando los equipos o despliegues sean independientes, se puede migrar a sub-repos por MFE.

## App-shell y micro-frontend

```
┌─────────────┐      Module Federation      ┌──────────────┐
│   shell     │  ◄──────────────────────────  │  remote-home │
│  (host)     │      carga ./App en runtime  │   (remote)   │
└─────────────┘                              └──────────────┘
```

- **`apps/shell`**: el host. Declara en `vite.config.ts` que `home` es un remote. En runtime, el navegador pide `mf-manifest.json` a `localhost:3001` para saber qué expone.
- **`apps/remote-home`**: el remote. En `vite.config.ts` expone `./App` como `./App` (o `HomeRemote`). Sirve su propio `remoteEntry.js`.
- **`@module-federation/vite`**: plugin de Vite que resuelve tanto host como remote sin depender de Webpack/Rspack.
- **Shared deps**: `react` y `react-dom` se marcan como compartidos para que no se carguen dos veces.

## Config compartida (`packages/config`)

| Archivo | Uso |
|---------|-----|
| `biome.json` | Reglas de linter y formatter para todo el monorepo. |
| `tsconfig.base.json` | Config base estricta de TypeScript. |

Cada app extiende `tsconfig.base.json` y añade sus propias rutas (`paths`) y archivos incluidos. Se evita `tsconfig.app.json`/`tsconfig.node.json` para no generar archivos intermedios que Biome intente formatear.

## Tooling de calidad

| Herramienta | Rol |
|-------------|-----|
| Biome | Linter y formatter. Reemplaza ESLint + Prettier con una sola dependencia. |
| Husky | Corre `prepare` al instalar y ancla hooks de Git. |
| lint-staged | Corre `biome check --write` sobre archivos staged antes de commit. |
| Vitest | Tests unitarios. Corre con React Testing Library y jsdom. |
| TypeScript | Chequeo estático estricto (`strict: true`). |

## CI

`.github/workflows/ci.yml` se ejecuta en cada PR y push a `main`:

1. Checkout completo (`fetch-depth: 0`) para que `turbo` y `git` tengan contexto.
2. Setup de pnpm 9.15.0.
3. Setup de Node 22 con caché de pnpm.
4. `pnpm install --frozen-lockfile`.
5. Job `check`: `pnpm check` (lint, typecheck, test).
6. Job `build`: `pnpm build` (todos los apps).

## Decisiones de diseño

| Decisión | Razón |
|----------|-------|
| Vite en vez de Next.js | Empezar con Vite + SPA permite entender MF claramente. Next.js se añade después en una app separada para comparar SSR/RSC. |
| Biome en vez de ESLint/Prettier | Menor configuración, más rápido, ideal para un repo de aprendizaje. |
| TypeScript estricto | Detecta errores temprano y obliga a aprender buenas prácticas. |
| Un solo `tsconfig.json` por app | Evita archivos generados (`*.js`, `*.d.ts`, `*.tsbuildinfo`) que ensucian el repo y confunden a Biome. |
| Husky + lint-staged | Garantiza que el código staged pase Biome antes de commit. |

## Convenciones del repo

- Commits con Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, etc.).
- No `git commit --amend` ni `git push --force` después de push.
- Cada cambio significativo: issue → rama → PR → CI verde → merge.
- Auto-delete branches activo en GitHub.

## Problemas conocidos

- El ruleset de protección de `main` se creó vía API sin status checks requeridos; falta agregar `check` como required status check manualmente en GitHub Settings cuando CI haya corrido al menos una vez en un PR.
- El remote actualmente se expone pero el shell aún no lo renderiza; eso será el siguiente paso del roadmap.
