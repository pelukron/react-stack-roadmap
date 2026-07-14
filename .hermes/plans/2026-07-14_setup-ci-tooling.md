# CI + Tooling Setup para react-stack-roadmap

**Goal:** Agregar CI con GitHub Actions, templates de issues, CODEOWNERS y ruleset de protección de main.

**Branch:** `feat/setup-ci-and-tooling`

**Tech Stack:** GitHub Actions, pnpm, Turbo, Biome, GitHub CLI.

---

## 1. GitHub Actions CI

Crear `.github/workflows/ci.yml` que:
- Se dispare en PRs a `main` y pushes a `main`.
- Haga checkout con `fetch-depth: 0`.
- Instale pnpm 9.15.0 + Node 22.
- Ejecute `pnpm install`, `pnpm check`, `pnpm build`.
- Cachee `.turbo` y `node_modules`.

Nota: Se simplificó `tsconfig.json` de cada app a un solo archivo por app (sin `tsconfig.app.json`/`tsconfig.node.json`) para evitar archivos generados y conflictos con Biome.

## 2. Issue Templates

Crear `.github/ISSUE_TEMPLATE/`:
- `bug-report.yml`
- `feature-request.yml`
- `config.yml` (links de contacto/discussions)

## 3. CODEOWNERS

Crear `.github/CODEOWNERS`:
- `* @pelukron`

## 4. Contributing Guide

Crear `CONTRIBUTING.md` con:
- Convención de commits.
- Flujo de PR.
- Scripts útiles (`pnpm check`, `pnpm dev`, `pnpm build`).
- Prohibición de force-push/amend.

## 5. Ruleset de protección de main

Crear ruleset vía `gh` CLI:
- Requerir PR para mergear a `main`.
- Requerir status check `test` (o el nombre del job CI).
- Bloquear force-push.
- Auto-delete branches (ya se configura en repo settings, no en ruleset).

**Tareas:**

### Task 1: Crear workflow de CI
- Archivo: `.github/workflows/ci.yml`
- Verificación: `act` local o push a PR y ver checks en GitHub.

### Task 2: Crear templates de issues
- Archivos: `.github/ISSUE_TEMPLATE/bug-report.yml`, `.github/ISSUE_TEMPLATE/feature-request.yml`, `.github/ISSUE_TEMPLATE/config.yml`
- Verificación: Ver pestaña Issues → New Issue en GitHub.

### Task 3: Crear CODEOWNERS y CONTRIBUTING
- Archivos: `.github/CODEOWNERS`, `CONTRIBUTING.md`
- Verificación: `cat` correcto.

### Task 4: Crear ruleset de protección de main
- Comando: `gh ruleset` o `gh api` para crear ruleset.
- Verificación: Settings → Rules → Rulesets en GitHub.

### Task 5: Crear issue + PR
- Usar `gh issue create` + `gh pr create`.
- Commit: `feat: setup CI, issue templates and branch protection`.
- Verificación: PR en GitHub con checks verdes.

---

## Riesgos
- `gh ruleset` requiere scope `read:org` + admin en repo. Token de Diego lo tiene.
- Si el ruleset se crea mal, se puede ajustar manualmente en GitHub.
- El job CI puede ser lento la primera vez por descarga de deps.

## Verificación final
- `pnpm check` pasa localmente.
- PR muestra checks verdes.
- Ruleset aparece en GitHub Settings.
