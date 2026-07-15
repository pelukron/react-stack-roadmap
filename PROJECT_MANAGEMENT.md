# Project Management Setup

Jira-style project management for this repo using GitHub-native features.

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

## GitHub Project Board (manual setup required)

> ⚠️ **Token scope needed:** The GH token needs the `project` scope to create/manage projects via API.
> Add it with: `gh auth refresh -s project`

### Manual setup steps

1. **Go to** https://github.com/pelukron/react-stack-roadmap/projects
2. Click **New project** → choose **Board** template
3. Name: `React Stack Roadmap`
4. Add custom fields:
   - `Priority` (Single select): `p0 · critical`, `p1 · high`, `p2 · medium`, `p3 · low`
   - `Size` (Single select): `XS`, `S`, `M`, `L`, `XL`
   - `Block` (Text): optional, for block reference

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