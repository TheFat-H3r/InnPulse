import { z } from 'zod';

/**
 * Rule 3: stay dates are local dates (YYYY-MM-DD) with no time zone.
 * Timestamps are UTC ISO strings. Business-day logic uses the property time zone.
 */
export const LocalDateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'YYYY-MM-DD');
export type LocalDate = z.infer<typeof LocalDateSchema>;

export const UtcTimestampSchema = z.string().datetime({ offset: false });
export type UtcTimestamp = z.infer<typeof UtcTimestampSchema>;
