# Non-negotiable rules

A change that breaks one of these does not merge. MUST, MUST NOT, SHOULD, and MAY follow RFC 2119.

1. **Tenant isolation.** Every table, query, cache key, queue message, and background job MUST carry tenant and property scope. Cross-tenant access MUST be impossible by construction, not by convention.
2. **Money.** Amounts MUST be integer minor units plus an ISO currency code. Floating point MUST NOT be used for money. (`@hotelops/shared`: `money.ts`)
3. **Time.** Store timestamps in UTC. Stay dates are local dates with no time zone. Business-day logic MUST use the property's time zone and night-audit rollover.
4. **Source of truth.** The PMS owns reservations, rooms, and folios. We MUST NOT change PMS-owned records except through the adapter's documented write API.
5. **Adapters only.** Vendor payloads MUST be mapped to the canonical model inside an adapter. Domain code MUST NOT import vendor types.
6. **Idempotency.** Every webhook, event consumer, and job MUST be safe to run twice with the same input.
7. **Module boundaries.** A module MUST NOT read or write another module's tables. Use its public interface or a domain event. (Enforced by ESLint `no-restricted-imports`.)
8. **History.** Reservations, folios, invoices, payments, and audit logs MUST NOT be hard-deleted. Every important change records who, what, when, and from where.
9. **Secrets and card data.** Secrets MUST NOT appear in code, logs, or error messages. Card numbers and security codes MUST NOT be stored or logged.
10. **Personal data.** Collect the minimum. ID images MUST be encrypted at rest, restricted by role, and deleted after a retention limit. Guest personal data MUST NOT appear in logs or go to an external AI provider without redaction.
11. **Authorization.** Every endpoint MUST check role and property scope and deny by default.
12. **Human approval.** AI or automated actions that move money, change rates, change staff pay, or publish a public reply MUST require human approval unless a manager has explicitly enabled auto mode for that workflow.
13. **Graceful failure.** An AI, integration, or notification outage MUST NOT block check-in, check-out, or housekeeping.
14. **Migrations.** Database migrations MUST be forward-only, reviewed, and safe to run without downtime.
15. **Review and tests.** Every change needs a linked ticket, a passing CI run, a reviewer, and tests. Incomplete work ships behind a feature flag.
16. **Staff screens.** Mobile screens for staff MUST work one-handed and MUST queue actions and sync later when the connection drops.
