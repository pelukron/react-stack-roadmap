# React Stack Roadmap — Weekly Plan Template

When starting a new block, ask Hermes: "Inicia el bloque N del roadmap".

Hermes will then:

1. Load the current plan from `README.md` and `ARCHITECTURE.md`.
2. Verify the previous block is merged to `main`.
3. Create a fresh issue + branch for the block using `bin/gh-issue`.
4. Write a short plan to `.hermes/plans/block-N.md`.
5. Execute the plan step by step, waiting for approval before each step if needed.
6. Run `pnpm check` and `pnpm build` after changes.
7. Push, create a linked PR with `bin/gh-pr`, and request review/merge.

## Block kickoff checklist

- [ ] Previous block is in `main` and CI is green.
- [ ] Block issue is created.
- [ ] Branch is created from `main` with correct prefix (`feature/`, `chore/`, etc.).
- [ ] Plan is written to `.hermes/plans/block-N.md`.
- [ ] Work is executed in one or more clean commits.
- [ ] `pnpm check` passes.
- [ ] `pnpm build` passes.
- [ ] PR is created with `Closes #N`.
- [ ] PR is merged to `main`.
- [ ] README roadmap table is updated to mark block as done.

## Blocks remaining

| Block | Topic | Status |
|-------|-------|--------|
| 2 | Module Federation runtime: shell renders remote-home | 🔄 Next |
| 3 | Routing: TanStack Router in shell + remote routes | 🔲 Pending |
| 4 | Styling: Tailwind CSS + shadcn/ui | 🔲 Pending |
| 5 | State: Zustand + TanStack Query | 🔲 Pending |
| 6 | Data fetching: REST vs GraphQL comparison | 🔲 Pending |
| 7 | SSR / RSC comparison: Next.js app alongside Vite | 🔲 Pending |
| 8 | Performance optimization | 🔲 Pending |
| 9 | Testing strategy | 🔲 Pending |
| 10 | i18n, a11y and forms | 🔲 Pending |
| 11 | Auth patterns | 🔲 Pending |
| 12 | Deployment, CI/CD and monitoring | 🔲 Pending |
| 13 | Security and hardening | 🔲 Pending |

## Example prompt

> Inicia el bloque 2 del roadmap: shell renderiza remote-home.

Hermes will reply with the plan and wait for approval before making file changes.
