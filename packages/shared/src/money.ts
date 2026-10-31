import { z } from 'zod';

/**
 * Rule 2: money is integer minor units plus an ISO 4217 currency code.
 * Floating point must never be used for money.
 */
export const MoneySchema = z.object({
  amountMinor: z.number().int(),
  currency: z.string().regex(/^[A-Z]{3}$/, 'ISO 4217 currency code'),
});

export type Money = z.infer<typeof MoneySchema>;

export function money(amountMinor: number, currency: string): Money {
  return MoneySchema.parse({ amountMinor, currency });
}

function assertSameCurrency(a: Money, b: Money): void {
  if (a.currency !== b.currency) {
    throw new Error(`Currency mismatch: ${a.currency} vs ${b.currency}`);
  }
}

export function addMoney(a: Money, b: Money): Money {
  assertSameCurrency(a, b);
  return money(a.amountMinor + b.amountMinor, a.currency);
}

export function subtractMoney(a: Money, b: Money): Money {
  assertSameCurrency(a, b);
  return money(a.amountMinor - b.amountMinor, a.currency);
}

/** Multiply by a rate (for example commission 0.15) and round half away from zero. */
export function multiplyMoney(a: Money, factor: number): Money {
  const raw = a.amountMinor * factor;
  const rounded = Math.sign(raw) * Math.round(Math.abs(raw));
  return money(rounded, a.currency);
}
