# Hotel Automation Platform

An automation and intelligence layer for hotels. It connects the systems a hotel already uses (PMS, channel manager, POS, accounting) and adds workflows across Operations, HR, Finance, Sales, Marketing, and CRM.

Read [`docs/RULES.md`](docs/RULES.md) before writing code.

## Stack

TypeScript (strict) in a pnpm and Turborepo monorepo. NestJS on Node.js, PostgreSQL, Redis, Zod for shared contracts, Vitest for tests.

## Layout

```text
apps/       api (NestJS), worker, web, staff-app
modules/    platform, integrations, operations, hr, finance, sales, marketing, crm
packages/   shared (money, dates, event envelope, error shape)
infra/      infrastructure as code
docs/       rules, ADRs, event catalog, runbooks, roadmap
```

## Getting started

```bash
nvm use                  # Node 22
corepack enable          # provides pnpm
pnpm install
cp .env.example .env
docker compose up -d     # PostgreSQL and Redis
pnpm build
pnpm test
pnpm --filter @hotelops/api dev   # http://localhost:3000/v1/health
```

## Common commands

| Command          | What it does                            |
| ---------------- | --------------------------------------- |
| `pnpm build`     | Build every package                     |
| `pnpm test`      | Run all tests                           |
| `pnpm lint`      | ESLint, including module boundary rules |
| `pnpm typecheck` | TypeScript strict checks                |
| `pnpm format`    | Prettier                                |

See [CONTRIBUTING.md](CONTRIBUTING.md) for branching, commits, and the pull request process.
