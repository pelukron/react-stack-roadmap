# Changelog

All notable changes are documented here. Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [0.1.0] - 2026-07-15

### 🤖 CI
- Remove automated Changesets + npm publishing release workflow.
- Delete `.github/workflows/release.yml` and remove `NPM_TOKEN` dependency.

### 📝 Documentation
- Update `CONTRIBUTING.md` with manual GitHub releases and semver tags workflow.
- Add `bin/bump-version` helper script to the scripts table.
- Document release notes convention: summarize bump reason and link triggering PR.

### 🔧 Changed
- Remove `@changesets/cli` and `@changesets/changelog-github` dependencies.
- Add `bin/bump-version` helper for semver bump, tag, and push.
- Simplify release process for single-maintainer monorepo.

## [0.0.1] - 2026-07-14

### 🤖 CI
- Add Dependabot for pnpm and GitHub Actions
  [#3](https://github.com/pelukron/react-stack-roadmap/issues/3)
- Add CodeQL workflow for JavaScript/TypeScript static analysis
  [#3](https://github.com/pelukron/react-stack-roadmap/issues/3)

### 📝 Documentation
- Add pull request template with quality checklist
  [#3](https://github.com/pelukron/react-stack-roadmap/issues/3)
- Add CHANGELOG.md with Keep a Changelog format
  [#3](https://github.com/pelukron/react-stack-roadmap/issues/3)
- Improve issue templates with consistent labels and emojis
  [#3](https://github.com/pelukron/react-stack-roadmap/issues/3)
- Update branch naming convention in CONTRIBUTING.md to GitHub Flow standard
  [#3](https://github.com/pelukron/react-stack-roadmap/issues/3)
- Translate issue templates, PR template, README, ARCHITECTURE and CHANGELOG to English
  [#3](https://github.com/pelukron/react-stack-roadmap/issues/3)

### 🔧 Changed
- Add pre-push hook to block direct pushes to main
  [#3](https://github.com/pelukron/react-stack-roadmap/issues/3)
