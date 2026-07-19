# Plan: Reorden de roadmap + sub-issues nativos

**Fecha:** 2026-07-18
**Origen:** grill-me session (Telegram)
**Repo:** pelukron/react-stack-roadmap (local: /home/d13g0m0r3n0/react-stack-roadmap)

## Decisiones aprobadas

1. v0.1.0 = Blocks 1-2 (Block 3 se mueve a v0.2.0)
2. Reorden agresivo con Deploy como Block 6 (después de State+Data)
3. Merge Blocks 5+6 (Zustand + Query + REST/GraphQL = una cosa)
4. Testing transversal: unit/RTL + coverage gates desde Block 3; E2E smoke en Block 6; E2E avanzado en Block 11
5. Storybook como sub-issue de Block 4 (Styling), publicado en GitHub Pages
6. a11y absorbido en Block 4; i18n+Forms quedan en Block 10
7. v0.4.0 nuevo milestone (2026-11-15): Blocks 11-12
8. Migración a **sub-issues nativos** de GitHub (progreso automático en epic, sin checklist manual)
9. Ritmo validado: 5h/semana → calendario realista

## Estructura final

| # | Bloque | Milestone | Epic actual | Acción sobre epic |
|---|---|---|---|---|
| 1 | Tooling | v0.1.0 | #1 ✅ | — |
| 2 | Module Federation | v0.1.0 | #29 🔄 | — (merge PR #32 cierra) |
| 3 | Router + testing foundation | v0.2.0 | #64 | Renombrar + refinar body |
| 4 | Styling + a11y + Storybook | v0.2.0 | #65 | Renombrar + refinar body |
| 5 | State + Data (Zustand+Query, REST vs GraphQL) | v0.2.0 | #66 | Renombrar; absorber #67 |
| 6 | Deploy MFE + smoke E2E | v0.2.0 | #73 | Renombrar Block 6, p0 |
| 7 | Auth (JWT/OAuth, guards, RBAC) | v0.3.0 | #72 | Renombrar Block 7 |
| 8 | SSR/RSC (Next.js junto a Vite) | v0.3.0 | #68 | Renombrar Block 8 |
| 9 | Performance | v0.3.0 | #69 | Mantener |
| 10 | i18n + Forms | v0.3.0 | #71 | Renombrar, quitar a11y |
| 11 | E2E avanzado | v0.4.0 | #70 | Renombrar, solo E2E |
| 12 | Security & Hardening | v0.4.0 | #74 | Renombrar Block 12 |

## Tareas (UNA a la vez, checkpoint entre cada)

### T1 — Milestones (GitHub directo, sin PR)
- Editar v0.1.0: scope "Blocks 1-2: Tooling + MF"
- Editar v0.2.0: scope "Blocks 3-6: Router, Styling, State+Data, Deploy"
- Editar v0.3.0: scope "Blocks 7-10: Auth, SSR, Perf, i18n+Forms"
- Crear v0.4.0: due 2026-11-15, scope "Blocks 11-12: E2E avanzado + Security"

### T2 — Refinar epics (GitHub directo)
Cada epic recibe body completo: Goal, Context/deps, Success criteria medibles, Sub-issues plan (lista de futuros sub-issues), tamaño/prioridad.
- #64 → Block 3 (renombrar, milestone v0.2.0)
- #65 → Block 4 (renombrar, +a11y +Storybook, v0.2.0)
- #66 → Block 5 (renombrar, absorber scope de #67, v0.2.0)
- #73 → Block 6 (renombrar, p0, v0.2.0)
- #72 → Block 7 (renombrar, v0.3.0)
- #68 → Block 8 (renombrar, v0.3.0)
- #69 → Block 9 (mantener título, refinar body, v0.3.0)
- #71 → Block 10 (renombrar, quitar a11y, v0.3.0)
- #70 → Block 11 (renombrar, solo E2E avanzado, v0.4.0)
- #74 → Block 12 (renombrar, v0.4.0)

### T3 — Cerrar #67 como absorbido
- Comentario en #67 explicando absorción en #66
- Cerrar #67 como not-planned con referencia

### T4 — Sub-issues nativos (demostración en Block 3)
- Crear sub-issues concretos de Block 3 (instalar router, rutas shell, rutas remote, coverage gate, tipado)
- Linkear via API nativa: `POST /repos/pelukron/react-stack-roadmap/issues/64/sub_issues`
- Verificar progreso automático en UI
- Documentar patrón para bloques futuros (sub-issues se crean al activar cada epic)

### T5 — Docs (PR único)
- Crear issue "docs: reorder roadmap blocks + sub-issues nativos"
- Branch `docs/roadmap-reorder-sub-issues`
- README.md: nueva tabla de bloques
- PROJECT_MANAGEMENT.md: milestones, epics, workflow sub-issues nativos (reemplazar sección checklist manual)
- `pnpm check && pnpm build`
- PR con `Closes #N`
- Diego aprueba y mergea

## Riesgos

| Riesgo | Mitigación |
|---|---|
| API sub-issues requiere preview header | Verificar con una llamada de prueba en T4 antes de batch |
| #67 cerrado pierde historial | Comentario con referencia bidireccional #66 ↔ #67 |
| Cambios de títulos rompen links externos | GitHub redirige por número de issue, títulos no afectan URLs |

## Verificación final

- `gh issue list --label "👑 epic"` muestra 12 bloques coherentes
- Milestones reflejan scopes nuevos
- Epic #64 muestra barra de progreso con sub-issues nativos
- CI verde en PR de docs
