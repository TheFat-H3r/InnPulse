# ADR 0001: TypeScript modular monolith in a pnpm monorepo

Status: accepted (draft, pending team review)

## Context

We need to ship quickly with a small team, share types between API, workers, web, and mobile, and keep the option to extract services later.

## Decision

- TypeScript in strict mode everywhere, in a pnpm and Turborepo monorepo.
- One deployable API (NestJS) built from strictly separated modules under `/modules`.
- Modules communicate through public entry points and domain events, never through each other's tables.
- PostgreSQL is the primary store; Redis backs queues and caches.

## Consequences

Simple deployment and refactoring now. Boundaries are enforced by lint rules and review, so discipline matters. Services can be extracted along module lines when scale or team structure demands it.
