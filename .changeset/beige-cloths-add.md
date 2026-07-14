---
"@rsm/config": minor
---

Add shared config workspace and Changesets setup.

- Install `@changesets/cli` and `@changesets/changelog-github`
- Configure `.changeset/config.json` with GitHub changelog integration
- Add `release.yml` GitHub Action to create version PRs and publish releases
- Add `changeset`, `version-packages` and `release` scripts to `package.json`
