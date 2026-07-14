# @rsm/config

## 0.1.0

### Minor Changes

- [#14](https://github.com/pelukron/react-stack-roadmap/pull/14) [`822ec74`](https://github.com/pelukron/react-stack-roadmap/commit/822ec749510c93a1e7a818c0a71d82c8080362a3) Thanks [@pelukron](https://github.com/pelukron)! - Add shared config workspace and Changesets setup.

  - Install `@changesets/cli` and `@changesets/changelog-github`
  - Configure `.changeset/config.json` with GitHub changelog integration
  - Add `release.yml` GitHub Action to create version PRs and publish releases
  - Add `changeset`, `version-packages` and `release` scripts to `package.json`
