import type { PmsAdapter } from './adapter';
import type { Reservation, Room } from './canonical';

/** In-memory mock PMS so the team is never blocked by vendor sandboxes. */
export class MockPms implements PmsAdapter {
  readonly name = 'mock';
  constructor(
    private rooms: Room[] = [],
    private reservations: Reservation[] = [],
  ) {}

  async listRooms(propertyId: string): Promise<Room[]> {
    return this.rooms.filter((r) => r.propertyId === propertyId);
  }

  async listReservations(propertyId: string): Promise<Reservation[]> {
    return this.reservations.filter((r) => r.propertyId === propertyId);
  }
}
