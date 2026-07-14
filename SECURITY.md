# Security Policy

## Supported versions

Only the latest commit on `main` is actively supported for this learning repo.

| Version | Supported |
|---------|-----------|
| `main`  | ✅        |
| older   | ❌        |

## Reporting a vulnerability

If you find a security issue, please do not open a public issue. Instead, report it privately:

1. Go to the repository Security tab → **Advisories** → **New draft security advisory**.
2. Or send a direct message to the repo owner (`@pelukron`).

We will review the report and respond as soon as possible.

## Security practices

- GitHub secret scanning is enabled on the repository.
- Do not commit API keys, tokens, passwords, or `.env` files.
- Use GitHub Actions OIDC or secrets where needed; avoid long-lived credentials.
- Keep dependencies updated via Dependabot and review changes before merging.
