import { z } from 'zod';

/** One error shape everywhere. See developer guidelines, section 9.4. */
export const ApiErrorSchema = z.object({
  error: z.object({
    code: z.string().min(1),
    message: z.string().min(1),
    details: z.record(z.unknown()).optional(),
    requestId: z.string().min(1),
  }),
});

export type ApiError = z.infer<typeof ApiErrorSchema>;
