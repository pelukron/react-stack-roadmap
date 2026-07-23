---
'@rsm/shell': patch
'@rsm/remote-home': patch
---

feat: shell renders remote-home via Module Federation

- Lazy-load the exposed `home/App` component in the shell.
- Add TypeScript declaration for the federated module.
- Add a test mock and alias for `home/App` in the shell test suite.
- Disable Module Federation DTS generation to avoid build warnings.
- Switch remote URL from `mf-manifest.json` to `remoteEntry.js` for dev compatibility.
