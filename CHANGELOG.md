# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-07-15

### Changed

- Simplified release workflow from Changesets + npm publishing to manual GitHub releases and semver tags.
- Removed `.github/workflows/release.yml`.
- Removed `@changesets/cli` and `@changesets/changelog-github` dependencies.
- Added `bin/bump-version` helper script.
- Updated `CONTRIBUTING.md` with manual release instructions.

### Added

- Initial monorepo setup with Vite, React 19, TypeScript, and Module Federation.
