import { describe, expect, it } from 'vitest';
import { MockPms } from './mock-pms';

describe('MockPms', () => {
  it('only returns rooms for the requested property (tenant scoping)', async () => {
    const pms = new MockPms([
      { id: 'r1', propertyId: 'p1', roomTypeId: 'rt1', number: '101', status: 'clean' },
      { id: 'r2', propertyId: 'p2', roomTypeId: 'rt1', number: '201', status: 'dirty' },
    ]);
    expect(await pms.listRooms('p1')).toHaveLength(1);
  });
});
