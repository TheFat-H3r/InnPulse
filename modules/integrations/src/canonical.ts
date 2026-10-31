import { z } from 'zod';
import { LocalDateSchema, MoneySchema } from '@hotelops/shared';

/** Canonical model: business logic only ever sees these types, never vendor payloads (rule 5). */
export const HousekeepingStatusSchema = z.enum([
  'dirty',
  'clean',
  'inspected',
  'out_of_order',
  'out_of_service',
]);
export type HousekeepingStatus = z.infer<typeof HousekeepingStatusSchema>;

export const RoomSchema = z.object({
  id: z.string(),
  propertyId: z.string(),
  roomTypeId: z.string(),
  number: z.string(),
  status: HousekeepingStatusSchema,
});
export type Room = z.infer<typeof RoomSchema>;

export const ReservationSchema = z.object({
  id: z.string(),
  propertyId: z.string(),
  roomId: z.string().nullable(),
  guestId: z.string(),
  arrivalOn: LocalDateSchema,
  departureOn: LocalDateSchema,
  status: z.enum(['confirmed', 'checked_in', 'checked_out', 'cancelled', 'no_show']),
  totalMinor: MoneySchema,
  channel: z.string(),
});
export type Reservation = z.infer<typeof ReservationSchema>;
