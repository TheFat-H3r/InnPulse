import { z } from 'zod';
import { UtcTimestampSchema } from './dates';

/** Domain event envelope. See developer guidelines, section 9.5. */
export const EventEnvelopeSchema = z.object({
  id: z.string().min(1),
  type: z.string().regex(/^[a-z]+(\.[a-z_]+)+$/, 'module.event_name, past tense'),
  version: z.number().int().positive(),
  occurredAt: UtcTimestampSchema,
  tenantId: z.string().min(1),
  propertyId: z.string().min(1),
  source: z.string().min(1),
  correlationId: z.string().min(1),
  data: z.record(z.unknown()),
});

export type EventEnvelope = z.infer<typeof EventEnvelopeSchema>;
