# Workflow Project Setup

This project is configured with a complete front-end workflow for linting, formatting, and testing using modern tools.  
It includes ESLint, Prettier, Husky, Vitest, and Playwright, along with environment variable handling.

---

## Setup

```bash
npm install
npx playwright install
```

---

## Scripts

| Command                   | Description                          |
| ------------------------- | ------------------------------------ |
| `npm run lint`            | Check code with ESLint               |
| `npm run lint:fix`        | Fix linting issues                   |
| `npm run format`          | Format files with Prettier           |
| `npm run test`            | Run unit tests with Vitest           |
| `npm run test:e2e`        | Run end-to-end tests with Playwright |
| `npm run test:e2e:headed` | Run Playwright tests in visible mode |

---

## Linting & Formatting

ESLint and Prettier ensure consistent and clean code.  
They are also run automatically before every commit using Husky and lint-staged.

Manual checks:

```bash
npx eslint .
npx prettier --check .
```

---

## Testing

- **Unit tests:** Vitest (`/tests`)
- **E2E tests:** Playwright (`/e2e`)

Run all:

```bash
npm run test
npm run test:e2e
```

---

## Environment Variables

Use a `.env` file for local configuration.  
An example is provided in `.env.example`.

```bash
E2E_EMAIL=user@example.com
E2E_PASSWORD=password123
BASE_URL=http://localhost:5173
```

`.env` is ignored by Git.

---

## Summary

- ESLint and Prettier configured
- Husky pre-commit hook runs linting and formatting
- Vitest and Playwright tests pass
- `.env` handled securely
- README includes setup and script details

This branch finalizes the workflow setup and confirms all configuration and tests are working as intended.
