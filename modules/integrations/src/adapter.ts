import type { Reservation, Room } from './canonical';

/** Every PMS or channel-manager adapter implements this. Keep vendor types inside the adapter. */
export interface PmsAdapter {
  readonly name: string;
  listRooms(propertyId: string): Promise<Room[]>;
  listReservations(propertyId: string, sinceIso?: string): Promise<Reservation[]>;
}
