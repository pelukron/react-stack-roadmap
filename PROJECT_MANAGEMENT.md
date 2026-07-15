# Project Management Setup

Jira-style project management for this repo using GitHub-native features.

## 🚀 Quick Start / Mini Tour

> _Esta guía funciona desde cualquier máquina, con o sin CLI configurado. Todo se puede hacer desde la web de GitHub._

### 📍 Donde está todo

| Recurso | Link |
|---|---|
| **Project Board** (kanban) | [github.com/users/pelukron/projects/2](https://github.com/users/pelukron/projects/2) |
| **Milestones** | [github.com/pelukron/react-stack-roadmap/milestones](https://github.com/pelukron/react-stack-roadmap/milestones) |
| **Epics abiertos** | [Issues labeled `👑 epic`](https://github.com/pelukron/react-stack-roadmap/issues?q=is%3Aissue+label%3A%22👑+epic%22+is%3Aopen) |
| **Roadmap** (README) | [README.md#roadmap-blocks](README.md#roadmap-blocks) |
| **Documentación** | [PROJECT_MANAGEMENT.md](PROJECT_MANAGEMENT.md) (este archivo) |

---

### 🎯 Crear un nuevo bloque (epic) — desde la web

1. Ve a [Issues → New Issue](https://github.com/pelukron/react-stack-roadmap/issues/new/choose)
2. Selecciona el template **Epic**
3. Llena:
   - **Title**: `[Epic] Nombre del bloque`
   - **Goal**: Una frase de lo que se logra
   - **Success criteria**: Checklist de cómo saber que está terminado
   - **Priority**: `p0` (crítico) a `p3` (baja)
4. Click **Submit new issue**
5. Asígnale un milestone desde la barra derecha del issue
6. Agrega labels manualmente: `size: M`, etc.

---

### 🎯 Crear epic — desde CLI

```bash
# 1. Crear el epic
gh issue create --template epic

# 2. Agregar labels
gh issue edit <N> --add-label "👑 epic,priority: p1 · high,size: M"

# 3. Asignar milestone
gh issue edit <N> --milestone "v0.1.0 — MVP"

# 4. Agregar al Project Board
gh project item-add 2 --owner pelukron --url "https://github.com/pelukron/react-stack-roadmap/issues/<N>"
```

---

### 📝 Agregar sub-issues (tareas hijas)

**Desde la web:**
1. Abre el epic issue
2. Crea un nuevo issue normal (feature/bug/chore)
3. Copia el link y pégalo en el checklist del epic: `- [ ] #N Descripción`

**Desde CLI:**
```bash
# Crear sub-issue
gh issue create --title "feat: descripción" --body "..." --label "✨ enhancement,size: S"

# Editar el body del epic para agregarlo al checklist
gh issue edit <EPIC_N> --body "$(gh issue view <EPIC_N> --json body --jq '.body')\n- [ ] #<N> descripción"
```

---

### 📋 Usar el Project Board

El board tiene 3 vistas (tabs en la web):

| Vista | Para qué sirve |
|---|---|
| **Board** | Kanban: arrastra tarjetas entre `Todo → In Progress → Done` |
| **Roadmap** | Línea de tiempo con milestones y fechas límite |
| **Table** | Vista hoja de cálculo, agrupa por Block/Priority/Size |

**Campos custom en cada tarjeta:**
- `Priority`: 🔴 p0 → ⚪ p3
- `Size`: XS → XL
- `Block`: número de bloque (1-13)
- `Status`: Todo / In Progress / Done

---

### 🔄 Flujo completo: de idea a done

```
1. Idea ──→ Crear Epic Issue (template epic)
              ├── Goal + Success criteria
              ├── Label: 👑 epic + priority + size
              └── Milestone: v0.X.0

2. Plan ──→ Crear sub-issues
              ├── Un issue por cada tarea concreta
              ├── Label: ✨ enhancement / 🐛 bug / 📚 docs
              └── Agregar al checklist del epic

3. Work ──→ Project Board
              ├── Agregar issues al board (gh project item-add)
              ├── Mover tarjetas: Todo → In Progress → Done
              └── Actualizar checklist del epic

4. Done ──→ Cerrar epic cuando todo el checklist esté ✅
```

---

### ⚡ Comandos frecuentes

```bash
# Ver todos los epics
gh issue list --label "👑 epic"

# Ver progreso de un milestone
gh api repos/pelukron/react-stack-roadmap/milestones/1 --jq '{title, open_issues, closed_issues}'

# Abrir el board en el navegador
gh project view 2 --owner pelukron --web

# Ver items en el board
gh project item-list 2 --owner pelukron

# Crear un issue y agregarlo al board en un paso
gh issue create --title "feat: algo" --label "✨ enhancement,size: S" --milestone "v0.1.0 — MVP"
gh project item-add 2 --owner pelukron --url "https://github.com/pelukron/react-stack-roadmap/issues/<N>"
```

---

### 🔑 Sin token / Sin CLI

Todo se puede hacer desde la web de GitHub:
1. **Crear epic:** [Issues → New Issue → Epic template](https://github.com/pelukron/react-stack-roadmap/issues/new/choose)
2. **Project Board:** [github.com/users/pelukron/projects/2](https://github.com/users/pelukron/projects/2)
3. **Milestones:** [github.com/pelukron/react-stack-roadmap/milestones](https://github.com/pelukron/react-stack-roadmap/milestones)
4. **Labels:** Agregar manualmente desde la barra derecha de cada issue
5. **Agregar al board:** Abre el issue → botón derecho "Projects" → selecciona "React Stack Roadmap"

---

## Overview

```
Epic Issue ──→ Milestone ──→ GitHub Project (kanban)
   │                │               │
   └─ Sub-issues ───┘               ├── Board view (Todo → In Progress → Done)
                                    ├── Roadmap view (Gantt timeline)
                                    └── Table view (spreadsheet)
```

## Labels

| Category | Labels |
|---|---|
| **Type** | `👑 epic`, `✨ enhancement`, `🐛 bug`, `📚 documentation`, `🔧 chore`, `🚨 hotfix` |
| **Priority** | `priority: p0 · critical`, `p1 · high`, `p2 · medium`, `p3 · low` |
| **Size** | `size: XS` (< 1h), `S` (1-4h), `M` (1-2d), `L` (3-5d), `XL` (> 1w) |
| **Status** | `🚧 blocked` |

## Milestones

| Milestone | Due | Scope |
|---|---|---|
| [v0.1.0 — MVP](https://github.com/pelukron/react-stack-roadmap/milestone/1) | 2026-07-31 | Blocks 1-3: Tooling + MF + Router |
| [v0.2.0 — Core Stack](https://github.com/pelukron/react-stack-roadmap/milestone/2) | 2026-08-31 | Blocks 4-7: Styling, State, Data, SSR |
| [v0.3.0 — Production Ready](https://github.com/pelukron/react-stack-roadmap/milestone/3) | 2026-10-15 | Blocks 8-13: Perf, Testing, Auth, Deploy |

## Epic Issues

Epics are parent issues that group related sub-issues. They use the `👑 epic` label and a checklist body.

### Current epics

| Epic | Milestone | Status |
|---|---|---|
| [#1](https://github.com/pelukron/react-stack-roadmap/issues/1) Tooling & repo setup | v0.1.0 | ✅ Done |
| [#29](https://github.com/pelukron/react-stack-roadmap/issues/29) Module Federation | v0.1.0 | 🔄 In progress |

### Creating a new epic

1. Go to Issues → New Issue → **Epic** template
2. Fill in goal, success criteria, and sub-issues checklist
3. Assign to a milestone
4. Add priority and size labels

```bash
# CLI alternative
gh issue create --template epic
```

## GitHub Project Board ✅

> **Board URL:** [React Stack Roadmap](https://github.com/users/pelukron/projects/2)

### Setup

Custom fields configured:
- `Priority` (Single select): 🔴 p0 · critical, 🟠 p1 · high, 🟡 p2 · medium, ⚪ p3 · low
- `Size` (Single select): XS, S, M, L, XL
- `Block` (Text): Block reference number (1-13)

### Current items

| Item | Priority | Size | Block |
|---|---|---|---|
| [#1](https://github.com/pelukron/react-stack-roadmap/issues/1) Tooling & repo setup | 🔴 p0 | XL | 1 ✅ |
| [#29](https://github.com/pelukron/react-stack-roadmap/issues/29) Module Federation | 🔴 p0 | L | 2 🔄 |

### Recommended views

| View | Type | Layout | Purpose |
|---|---|---|---|
| **Board** | Kanban | Status columns | Day-to-day task tracking |
| **Roadmap** | Gantt | Date + milestone | High-level timeline |
| **By Block** | Table | Group by Block field | See progress per learning block |

### Workflow

1. Add epic issues to the project
2. Add sub-issues to the project (they auto-group under epics)
3. Move cards: `Todo → In Progress → In Review → Done`
4. Use Roadmap view to see milestones on timeline

## Automation ideas (future)

- GitHub Actions workflow to auto-add new `👑 epic` issues to the project
- Auto-close epic when all sub-issues are closed
- Auto-assign milestone based on label

## CLI quick reference

```bash
# List milestones
gh api repos/pelukron/react-stack-roadmap/milestones --jq '.[] | "\(.title) — \(.due_on)"'

# Create epic
gh issue create --template epic

# Add issue to milestone
gh issue edit <N> --milestone "v0.1.0 — MVP"

# Filter by epic
gh issue list --label "👑 epic"

# View milestone progress
gh api repos/pelukron/react-stack-roadmap/milestones/1 --jq '{title, open_issues, closed_issues}'
```

## Related docs

- [CONTRIBUTING.md](CONTRIBUTING.md) — PR workflow, commit conventions
- [AGENTS.md](AGENTS.md) — Agent instructions for this repo
- [ARCHITECTURE.md](ARCHITECTURE.md) — Technical decisions and data flow
- [README.md](README.md) — Roadmap blocks and issue mapping

## 🤖 Hermes Agent Contributor

This repo uses a separate git identity for AI agent contributions.

### Identity

| Campo | Diego (humano) | Hermes Agent (bot) |
|---|---|---|
| **git user.name** | `Diego Moreno` | `Hermes Agent` |
| **git user.email** | `diego@example.com` | `hermes-agent@nousresearch.com` |
| **GitHub login** | `pelukron` | — (sin cuenta) |
| **Permisos** | Admin + merge | PRs y commits |
| **Alcance** | Global (~/.gitconfig) | Solo este repo (--local) |

### Setup (al clonar en otra máquina)

```bash
cd react-stack-roadmap

# Identidad del bot (solo este repo)
git config --local user.name "Hermes Agent"
git config --local user.email "hermes-agent@nousresearch.com"

# Verificar
git config --local user.name   # → Hermes Agent
git config --global user.name  # → Diego Moreno (intacto)
```

### Reglas

- **Hermes Agent** crea branches, commits y PRs
- **@pelukron** revisa, aprueba y mergea
- Prohibido: `--force`, `--amend` después de push
- Un commit por cambio lógico